# Wordmark Approval System

## Overview

The OCHA Wordmark Generator uses a Google Sheet + Google Apps Script backend to enforce an approval workflow. Users can’t download a clean wordmark without approval from the OCHA Brand and Design Unit.

### Workflow

1. **User** creates a wordmark preview on the generator page (and can download a DRAFT-watermarked PNG).
2. **User** submits a request with their email address.
3. **User** sees their Request ID on screen and receives a confirmation email with the ID and a status link.
4. **BDU** receives a notification at ochavisual@un.org with a preview image attached. Replying to it goes straight to the requester.
5. **BDU** opens the Google Sheet and changes the status from “Pending” to “Approved” (or “Rejected”).
6. **User** automatically receives an email from “OCHA Visual” (unochavisual@gmail.com) with a direct download link; BDU is in copy at ochavisual@un.org.
7. **User** clicks the link → the generator opens with the request loaded, verifies it, and scrolls to the download button.
8. **User** downloads the package: the approved colour plus all-black and all-white versions, each as SVG + PNG (unlimited downloads once approved).

---

## Published URL

**Generator:** https://un-ocha.github.io/humanitarian-icons-2026-BDU/word-mark-generator/

**Email link format:**
```
https://un-ocha.github.io/humanitarian-icons-2026-BDU/word-mark-generator/?requestId=WM-XXXXXX&token=<secret>
```

The `token` is a secret stored per request in column K, so email links contain no personal data. The generator removes it from the address bar as soon as the page opens. Links sent before tokens existed use `&email=` instead — those still work.

---

## Current Setup

### Google Sheet

- **Name:** OCHA word mark generator approval request
- **Account:** unochavisual@gmail.com
- **URL:** https://docs.google.com/spreadsheets/d/1eEb70cPxF8dYkomCcBR6TZXy0Q7jTnDM-LxWPbAspxE/edit
- **Sheet ID:** `1eEb70cPxF8dYkomCcBR6TZXy0Q7jTnDM-LxWPbAspxE`
- **Tab:** Requests

#### Column headers (row 1)

| A | B | C | D | E | F | G | H | I | J | K | L |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Email | Icon | Line 1 | Line 2 | Line 3 | Layout | Request ID | Status | Downloaded At | Token | Icon Colour |

Columns K (**Token**) and L (**Icon Colour**, stored as a hex code) are created automatically by the script on first use. Don’t edit or share tokens — anyone with a token link can download that request’s approved wordmark.

#### Status dropdown (column I)

| Status | Colour | Meaning |
|---|---|---|
| Pending | Orange | Request submitted, awaiting review |
| Approved | Blue | Approved by BDU, user can download |
| Rejected | Red | Rejected by BDU |

### Apps Script (standalone project)

- **Account:** unochavisual@gmail.com
- **Project name:** OCHA Wordmark Approval API
- **Project URL:** https://script.google.com/u/1/home/projects/1YQbKuIz2Y8MOf8QNI2O2Fv6dpdsykCGtxX0Jl8s_IbQZB2XjHt32jXin/edit
- **Execute as:** unochavisual@gmail.com
- **Who has access:** Anyone
- **Notification email:** ochavisual@un.org (`NOTIFY_EMAIL`)
- **Sender display name:** “OCHA Visual” (`SENDER_NAME`)
- **Source of truth:** `google-apps-script.js` in this folder — keep the editor and this file identical.

It’s a **standalone** script (not bound to the sheet) and opens the sheet with `SpreadsheetApp.openById(SHEET_ID)`.

### Web App deployment

- **Deployment URL:** `https://script.google.com/macros/s/AKfycbz3zxqniGTEE5vmxGlceBb0MJj9u6x7nU3As3CdauwS_4WWONZ3xKTDgre7vMXlbcfv3w/exec`
- Referenced in `index.html` as `APPROVAL_API_URL`.
- **Always deploy from the unochavisual@gmail.com account.** Deploying from another account makes every email come from that account.

### Installable trigger (onEdit)

- **Function:** `onStatusChange` · **Event:** From spreadsheet → On edit
- When the Status column (I) changes to “Approved” or “Rejected”, the requester is emailed automatically (pasting several statuses at once emails each row).
- **Approved email:** request details + a direct download link.
- **Rejected email:** request details + an invitation to contact ochavisual@un.org.
- **CC:** ochavisual@un.org on every decision email · **Reply-to:** ochavisual@un.org.

The trigger runs as unochavisual@gmail.com whichever account edits the sheet — you can approve from your personal account, UN account or mobile.

### Generator (`index.html`)

- Icons: only those flagged `"wordmark": true` in `metadata.json`, loaded from `../svg/` on GitHub Pages. If `metadata.json` can’t be loaded the page shows an error — it never falls back to the full library.
- **Text is converted to outlines** using the bundled typeface `fonts/Roboto-Bold.ttf` and `vendor/opentype/opentype.min.js`. This keeps the PNG, the SVG and the BDU preview email identical on every computer, including ones without Roboto installed. Don’t replace it with SVG `<text>`.
- Characters Roboto doesn’t include (e.g. Arabic, Chinese) are flagged under the text fields and block the preview.
- **Icon colour:** users pick one of the main OCHA colours — UN Blue, Green, Yellow, Orange, Red, Purple, Slate grey, Neutral grey — or black. Text is always black. The colour is saved with the request, shown to BDU in the preview and emails, and restored by the approval link. The palette is defined twice (`ICON_COLOURS` in `index.html` and in `google-apps-script.js`) — keep both identical.
- The final download is built from the icon, colour and text **as approved**, even if the form is edited afterwards. The zip contains the approved colour version plus all-black and all-white versions, each as SVG and transparent PNG.

---

## Day-to-day operations

### When a user submits a request

- A new row appears in the Google Sheet with status **Pending** (orange).
- You receive an email at ochavisual@un.org with the request details and a preview PNG.
- The user sees their **Request ID** on screen (e.g. WM-A3K7P2) and receives it by email.

### To approve a request

1. Open the Google Sheet.
2. Find the row.
3. Change the Status in column I from **Pending** to **Approved**.
4. Done — the user receives an email with a download link, and BDU gets a copy.

### To reject a request

1. Change the Status from **Pending** to **Rejected**.
2. Done — the user receives an email inviting them to contact BDU.

### When the user downloads

- They click the link in their approval email (or enter their Request ID + email on the generator).
- The generator verifies the request and shows the download button.
- They download the package (no watermark): the approved colour, all black and all white, each as SVG + PNG. The time is recorded in column J.
- Downloads are unlimited once approved.

---

## Troubleshooting

**“The approval service couldn’t be reached”**
- Check the Web App URL in `index.html` matches the deployed URL.
- Confirm the deployment has “Who has access: Anyone”.
- Check the Apps Script **Executions** page for errors.

**Decision email not sending**
- **Triggers** page (clock icon) should show one trigger: `onStatusChange`, From spreadsheet, On edit.
- If it’s missing: **+ Add Trigger** → function `onStatusChange`, source From spreadsheet, type On edit → Save.
- Check the **Executions** page for errors.

**Emails go to spam**
- Ask the user to mark it “Not spam”.
- BDU always gets a copy at ochavisual@un.org to follow up.

**User didn’t get a Request ID**
- It’s shown on screen and emailed at submission. The row is in the sheet either way.

**User needs to download again**
- The link in their approval email works indefinitely. Setting the status to “Approved” again re-sends the email.

**Updating the Apps Script code**
1. Edit `google-apps-script.js` in this folder, then from this folder run `clasp push --force` (clasp is logged in as cueto.javi@gmail.com, who has edit access; `.clasp.json` and `.claspignore` limit the push to the script and its manifest). Don’t paste into the editor — clipboard pastes have garbled characters and picked up the wrong clipboard before.
   Reload the editor afterwards; an editor tab left open with old code can auto-save it back.
2. The trigger uses the latest saved code immediately.
3. For the Web App, **as unochavisual@gmail.com**: Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy. The URL stays the same.

---

## Rebuilding from scratch

If the system ever needs to be rebuilt (new account, new sheet, etc.):

1. Create a Google Sheet with the column headers listed above (K and L are created automatically).
2. Add data validation on column I (Status) with: Pending, Approved, Rejected.
3. Create a new project at https://script.google.com with the account that should send the emails.
4. Paste the contents of `google-apps-script.js`.
5. Update `SHEET_ID` (and `NOTIFY_EMAIL` / `SENDER_NAME` if needed).
6. Deploy as a Web App (Execute as: Me · Who has access: Anyone) and authorise the script.
7. Copy the Web App URL into `APPROVAL_API_URL` in `index.html`.
8. Add the trigger: function `onStatusChange`, From spreadsheet → On edit, and authorise it.
