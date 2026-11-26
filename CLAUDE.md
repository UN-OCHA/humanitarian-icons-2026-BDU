# Humanitarian Icons 2026: project notes

How-to for people is in `README.md`. This file keeps decisions, sources and open items.

## Wordmark Generator (`word-mark-generator/`)

- Published with GitHub Pages from `main`: https://un-ocha.github.io/humanitarian-icons-2026-BDU/word-mark-generator/
  Don’t move or rename the page: approval emails link to this address.
- Approval backend: Google Apps Script deployed from unochavisual＠gmail.com, see
  `word-mark-generator/APPROVAL_SETUP.md`. Never paste code into the Apps Script editor.
- Wordmark drawing: Roboto Bold from `fonts/`, outlined with `vendor/opentype`; previews carry a DRAFT watermark.

### Embed mode (26 Nov 2026)

- Embedded on brand.unocha.org (OCHA essentials › OCHA Wordmark Generator, Frontify Embed block 12152968),
  same pattern as the DataViz web tool.
- One page, two modes: a `<head>` script adds `is-embed` to `<html>` inside an iframe or with `?embed=1`
  (`is-framed` too when really in an iframe). Embed mode hides the page header, full guidelines and footer,
  and shows a one-line note, **Read the guidelines**, **Open in a new tab** and a slim “Service provided by OCHA”.
- Layout for both modes: two columns from 768 px (settings | sticky preview + steps 3 and 4 as an accordion,
  `details[name]`); one column below, preview pinned at the top. Icon grid has a fixed height with its own scroll.
- Frontify’s Embed block ignores height messages (8 common formats tested 26 Nov 2026) and the API can’t set
  embed heights: the block’s height is set by hand in the Frontify editor. Recommended: 1,000 px
  (tool is about 810–920 px at the portal’s 798 px width). The page still posts
  `{ type: "ocha-wordmark-generator:height", height }` to its parent.
- Test: serve the repo root, open `word-mark-generator/?embed=1` or the page in an iframe 798 px wide, at
  320/375/414/768 px and desktop, plus an approval link `?requestId=…&token=…`.

### Downloads inside the embed (26 Nov 2026)

- Frontify’s iframe sandbox: `allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox
  allow-presentation allow-forms`. No `allow-downloads`: every download inside the embed is blocked
  (Javier confirmed on the portal). Pop-ups are allowed and escape the sandbox.
- Fix: inside an iframe (`is-framed`), `openDownloadDelivery()` opens `download.html` in a new tab during the
  click, the file is built in the embed and posted to the tab as a Blob after the tab says it’s ready; the tab
  downloads it and offers a Download button if the browser holds the automatic start back. Messages are
  `ocha-wordmark-download:ready` / `:file`, same origin only, from the opener only. Nothing in the URL, so the
  approval token never leaves the page. Pop-up blocked → message with a link to the tool in a new tab.
  Tab closed or silent for 60 s → the embed stops waiting.
- Opened directly: unchanged, `triggerDownload()` on the spot.
- The built-in test browser opens pop-ups in the same tab, so the hand-over was tested in two halves
  (embed side with a stand-in tab, `download.html` with a stand-in opener). Real check: on the portal in Chrome
  and Safari.
- The DataViz web tool on the portal has the same sandbox problem; briefed to its session.

### Open

- No automated tests yet (`tests/` folder).
