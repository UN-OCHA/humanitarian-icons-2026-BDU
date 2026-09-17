// ============================================================
// OCHA Wordmark Approval — Google Apps Script
// ============================================================
// Standalone script owned by unochavisual@gmail.com and deployed as a Web App
// (Execute as: Me · Who has access: Anyone). A Google Sheet is the approval
// ledger. Setup, deployment and day-to-day operations: APPROVAL_SETUP.md.
//
// Sheet columns (row 1 headers):
//   A Timestamp | B Email | C Icon | D Line 1 | E Line 2 | F Line 3
//   G Layout | H Request ID | I Status | J Downloaded At | K Token | L Icon Colour
//
// STATUS values: Pending | Approved | Rejected
//
// Deploying changes: the onEdit trigger always runs the latest SAVED code, but
// the Web App only changes when a new version is deployed from THIS account
// (Deploy → Manage deployments → Edit → Version: New version → Deploy).
// Deploying from another Google account makes every email come from that
// account instead of unochavisual@gmail.com.
// ============================================================

const SHEET_ID = '1eEb70cPxF8dYkomCcBR6TZXy0Q7jTnDM-LxWPbAspxE';
const SHEET_NAME = 'Requests';
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/edit';

// BDU inbox: receives new-request notifications and a copy of every decision.
const NOTIFY_EMAIL = 'ochavisual@un.org';
// Display name on every email (the address is always the deploying account).
const SENDER_NAME = 'OCHA Visual';
const GENERATOR_URL = 'https://un-ocha.github.io/humanitarian-icons-2026-BDU/word-mark-generator/';

// Main OCHA colours allowed for the icon (text is always black).
// Keep identical to ICON_COLOURS in index.html.
const ICON_COLOURS = {
  '#009EDB': 'UN Blue', '#72BF44': 'Green', '#FFC800': 'Yellow', '#F58220': 'Orange',
  '#ED1847': 'Red', '#A05FB4': 'Purple', '#AEA29A': 'Slate grey', '#999999': 'Neutral grey',
  '#000000': 'Black'
};
const DEFAULT_ICON_COLOUR = '#009EDB';

// 1-based column numbers — keep in sync with the header row above.
const COL = {
  TIMESTAMP: 1, EMAIL: 2, ICON: 3, LINE1: 4, LINE2: 5, LINE3: 6,
  LAYOUT: 7, REQUEST_ID: 8, STATUS: 9, DOWNLOADED_AT: 10, TOKEN: 11, ICON_COLOUR: 12
};
const NUM_COLS = 12;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function getSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
  // Columns K and L were added after launch — create their headers on first use.
  [[COL.TOKEN, 'Token'], [COL.ICON_COLOUR, 'Icon Colour']].forEach(function (header) {
    const range = sheet.getRange(1, header[0]);
    if (!String(range.getValue()).trim()) range.setValue(header[1]);
  });
  return sheet;
}

// Short, human-readable request ID (no ambiguous characters).
function generateRequestId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let id = 'WM-';
  for (let i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

// Secret per-request token used in email links instead of the requester's
// email address, so no personal data sits in URLs, browser history or logs.
function generateToken() {
  return Utilities.getUuid().replace(/-/g, '');
}

function cell(row, col) {
  const value = row[col - 1];
  return String(value == null ? '' : value).trim();
}

// Unknown or missing colours (e.g. requests made before colours existed) fall back to UN Blue.
function normaliseIconColour(value) {
  const hex = String(value || '').trim().toUpperCase();
  return ICON_COLOURS[hex] ? hex : DEFAULT_ICON_COLOUR;
}

function requestLink(requestId, token) {
  return GENERATOR_URL + '?requestId=' + encodeURIComponent(requestId) +
    '&token=' + encodeURIComponent(token);
}

function describeRequest(fields) {
  return [
    'Request ID: ' + fields.requestId,
    'Icon: ' + fields.icon,
    'Icon colour: ' + ICON_COLOURS[normaliseIconColour(fields.iconColour)] + ' (' + normaliseIconColour(fields.iconColour) + ')',
    'Line 1: ' + fields.line1,
    fields.line2 ? 'Line 2: ' + fields.line2 : '',
    fields.line3 ? 'Line 3: ' + fields.line3 : ''
  ].filter(Boolean);
}

// ── Web App entry points ──────────────────────────────────────

function doPost(e) {
  return handleRequest(e);
}

function doGet(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  let result;
  try {
    const params = e && e.postData ? JSON.parse(e.postData.contents) : (e ? e.parameter : {});
    switch (params.action) {
      case 'submit': result = submitRequest(params); break;
      case 'check': result = checkStatus(params); break;
      case 'download': result = markDownloaded(params); break;
      default: result = { success: false, error: 'Unknown action' };
    }
  } catch (err) {
    Logger.log('handleRequest error: ' + err.message);
    result = {
      success: false,
      error: 'Something went wrong. Please try again, or contact ' + NOTIFY_EMAIL + '.'
    };
  }
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// Ownership is proven by the email address typed by the requester OR by the
// secret token from an email link. Links sent before tokens existed carry the
// email address instead, so both must keep working.
function findRequestRow(sheet, params) {
  const requestId = String(params.requestId || '').trim().toUpperCase();
  const email = String(params.email || '').trim().toLowerCase();
  const token = String(params.token || '').trim();
  if (!requestId || (!email && !token)) {
    return { error: 'Please enter your Request ID and email address.' };
  }

  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (cell(row, COL.REQUEST_ID).toUpperCase() !== requestId) continue;
    const rowToken = cell(row, COL.TOKEN);
    const tokenMatches = token !== '' && rowToken !== '' && token === rowToken;
    const emailMatches = email !== '' && email === cell(row, COL.EMAIL).toLowerCase();
    if (tokenMatches || emailMatches) return { rowIndex: i + 1, row: row };
  }
  return { error: 'Request not found. Please check your Request ID and email address.' };
}

// ACTION: submit — a user requests approval for a wordmark
function submitRequest(params) {
  const fields = {
    email: String(params.email || '').trim(),
    icon: String(params.icon || '').trim(),
    line1: String(params.line1 || '').trim(),
    line2: String(params.line2 || '').trim(),
    line3: String(params.line3 || '').trim(),
    layout: String(params.layout || '1').trim(),
    iconColour: normaliseIconColour(params.iconColour)
  };
  if (!EMAIL_RE.test(fields.email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }
  if (!fields.icon || !fields.line1) {
    return { success: false, error: 'Please select an icon and enter at least line 1.' };
  }

  const sheet = getSheet();
  fields.requestId = generateRequestId();
  const token = generateToken();
  sheet.appendRow([
    new Date().toISOString(), fields.email, fields.icon,
    fields.line1, fields.line2, fields.line3, fields.layout,
    fields.requestId, 'Pending', '', token, fields.iconColour
  ]);

  // Emails must never fail the request — the row is already saved.
  try {
    notifyBduOfRequest(fields, String(params.previewImage || '').trim());
  } catch (err) {
    Logger.log('BDU notification failed for ' + fields.requestId + ': ' + err.message);
  }
  try {
    confirmToRequester(fields, token);
  } catch (err) {
    Logger.log('Requester confirmation failed for ' + fields.requestId + ': ' + err.message);
  }

  return { success: true, requestId: fields.requestId };
}

function notifyBduOfRequest(fields, previewImage) {
  const body = ['New wordmark request from ' + fields.email + ':', '']
    .concat(describeRequest(fields))
    .concat([
      'Layout: ' + fields.layout + ' line(s)',
      '',
      'To approve or reject it, open the sheet and change the Status column. The requester is emailed automatically.',
      SHEET_URL,
      '',
      'Reply to this email to contact the requester directly.'
    ])
    .join('\n');

  const options = { name: SENDER_NAME, replyTo: fields.email };
  if (previewImage) {
    options.attachments = [Utilities.newBlob(
      Utilities.base64Decode(previewImage), 'image/png',
      'wordmark-preview-' + fields.requestId + '.png'
    )];
  }
  MailApp.sendEmail(NOTIFY_EMAIL,
    'Wordmark request ' + fields.requestId + ' from ' + fields.email, body, options);
}

function confirmToRequester(fields, token) {
  const body = ['Thank you — we’ve received your wordmark request.', '']
    .concat(describeRequest(fields))
    .concat([
      '',
      'The OCHA Brand and Design Unit will review it and get back to you as soon as possible. You’ll receive another email once it’s been reviewed.',
      '',
      'Check the status of your request anytime:',
      requestLink(fields.requestId, token),
      '',
      'If it’s urgent, contact ' + NOTIFY_EMAIL + '.',
      '',
      'OCHA Brand and Design Unit'
    ])
    .join('\n');

  MailApp.sendEmail(fields.email,
    'We’ve received your wordmark request ' + fields.requestId, body,
    { name: SENDER_NAME, replyTo: NOTIFY_EMAIL });
}

// ACTION: check — a user checks whether their request is approved
function checkStatus(params) {
  const found = findRequestRow(getSheet(), params);
  if (found.error) return { success: false, error: found.error };

  const row = found.row;
  const status = cell(row, COL.STATUS);
  return {
    success: true,
    status: status,
    canDownload: status === 'Approved' || status === 'Downloaded',
    email: cell(row, COL.EMAIL),
    icon: cell(row, COL.ICON),
    line1: cell(row, COL.LINE1),
    line2: cell(row, COL.LINE2),
    line3: cell(row, COL.LINE3),
    layout: cell(row, COL.LAYOUT) || '1',
    iconColour: normaliseIconColour(cell(row, COL.ICON_COLOUR))
  };
}

// ACTION: download — logs the download time (unlimited downloads once approved)
function markDownloaded(params) {
  const sheet = getSheet();
  const found = findRequestRow(sheet, params);
  if (found.error) return { success: false, error: found.error };

  const status = cell(found.row, COL.STATUS);
  if (status !== 'Approved' && status !== 'Downloaded') {
    return { success: false, error: 'This request isn’t approved yet.' };
  }
  sheet.getRange(found.rowIndex, COL.DOWNLOADED_AT).setValue(new Date().toISOString());
  return { success: true, canDownload: true };
}

// ============================================================
// Decision emails — installable onEdit trigger
// ============================================================
// When the Status column (I) changes to "Approved" or "Rejected", the
// requester is emailed automatically, with BDU in copy.
//
// SETUP (once): run createEditTrigger() from the editor, or add the trigger
// by hand in Triggers → Add Trigger (function onStatusChange · From
// spreadsheet · On edit). The trigger runs as the account that created it.
// ============================================================

function createEditTrigger() {
  ScriptApp.getProjectTriggers()
    .filter(function (t) { return t.getHandlerFunction() === 'onStatusChange'; })
    .forEach(function (t) { ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('onStatusChange').forSpreadsheet(SHEET_ID).onEdit().create();
  Logger.log('Edit trigger installed for sheet ' + SHEET_ID);
}

function onStatusChange(e) {
  if (!e || !e.range) return;
  const range = e.range;
  const sheet = range.getSheet();
  if (sheet.getSheetId() !== getSheet().getSheetId()) return;

  const firstCol = range.getColumn();
  const lastCol = firstCol + range.getNumColumns() - 1;
  if (COL.STATUS < firstCol || COL.STATUS > lastCol) return;

  // A paste can change several statuses at once — handle every row in the range.
  const firstRow = Math.max(range.getRow(), 2);
  const lastRow = range.getRow() + range.getNumRows() - 1;
  for (let r = firstRow; r <= lastRow; r++) {
    try {
      notifyRequesterOfDecision(sheet, r);
    } catch (err) {
      Logger.log('Decision email failed for row ' + r + ': ' + err.message);
    }
  }
}

function notifyRequesterOfDecision(sheet, rowIndex) {
  const row = sheet.getRange(rowIndex, 1, 1, NUM_COLS).getValues()[0];
  const status = cell(row, COL.STATUS);
  if (status !== 'Approved' && status !== 'Rejected') return;

  const fields = {
    email: cell(row, COL.EMAIL),
    requestId: cell(row, COL.REQUEST_ID),
    icon: cell(row, COL.ICON),
    line1: cell(row, COL.LINE1),
    line2: cell(row, COL.LINE2),
    line3: cell(row, COL.LINE3),
    iconColour: cell(row, COL.ICON_COLOUR)
  };
  if (!EMAIL_RE.test(fields.email) || !fields.requestId) {
    Logger.log('Row ' + rowIndex + ' has no valid email or Request ID — no email sent.');
    return;
  }

  let subject;
  let lines;
  if (status === 'Approved') {
    let token = cell(row, COL.TOKEN);
    if (!token) {
      // Requests submitted before tokens existed get one when approved.
      token = generateToken();
      sheet.getRange(rowIndex, COL.TOKEN).setValue(token);
    }
    subject = 'Your wordmark request ' + fields.requestId + ' has been approved';
    lines = ['Good news — the OCHA Brand and Design Unit has approved your wordmark request.', '']
      .concat(describeRequest(fields))
      .concat([
        '',
        'Download your wordmark (SVG + PNG):',
        requestLink(fields.requestId, token),
        '',
        'The link opens the Wordmark Generator with your request loaded — click “Download wordmark” to get your files. You can use the same link to download them again anytime.',
        '',
        'If you have any questions, contact ' + NOTIFY_EMAIL + '.',
        '',
        'OCHA Brand and Design Unit'
      ]);
  } else {
    subject = 'Your wordmark request ' + fields.requestId + ' needs changes';
    lines = ['Your wordmark request needs some changes before it can be approved.', '']
      .concat(describeRequest(fields))
      .concat([
        '',
        'Please contact ' + NOTIFY_EMAIL + ' to discuss what needs adjusting.',
        '',
        'OCHA Brand and Design Unit'
      ]);
  }

  MailApp.sendEmail(fields.email, subject, lines.join('\n'),
    { cc: NOTIFY_EMAIL, name: SENDER_NAME, replyTo: NOTIFY_EMAIL });
  Logger.log('Decision email sent to ' + fields.email + ' for ' + fields.requestId + ' (' + status + ')');
}
