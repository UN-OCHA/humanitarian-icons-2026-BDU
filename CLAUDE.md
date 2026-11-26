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
- Layout for both modes (Javier, 26 Nov 2026): two tabs, “Create a wordmark” (steps 1–3) and “Download
  approved wordmark” (Request ID; opened by approval email links). Step 4 was dropped as a step: it is a
  separate visit, and numbering it after 3 confused the order. Create tab: two columns from 768 px (1 icon +
  2 text | 3 preview and request approval, sticky), one column below (no pinned preview: it broke the 1-2-3
  order). Step 1 closes into one row once an icon is picked (`setIconBrowserOpen`), colour stays visible.
  Tab name chosen over “Download” (clashes with the draft download) and “Download with Request ID” (most
  people come from the email link and never type an ID).
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

### Motion (26 Nov 2026)

- The icon grid closes and opens by its height with the OCHA web-motion tokens (`--dur-leave`/`--ease-in`
  to close, `--dur-enter`/`--ease-enter` to open; same names as the future App Kit tokens), then
  `keepIconStepInView()` keeps the chosen-icon row on screen. Reduced motion: instant. Tab switches keep the
  page height (`showTab`), so neither change makes the page jump.
- The built-in test browser draws only a few frames a second while its pane is hidden, so check moves with
  paused animations (`getAnimations()`, `currentTime`), not by timing.

### Wordmark geometry (26 Nov 2026)

- Line spacing 1.2 (was 1.3), Javier’s choice after a side-by-side comparison.
- 3 lines only (Javier, 26 Nov 2026): icons at least 1.3× wider than tall (`WIDE_ICON_RATIO`, 8 icons) keep
  the old position, aligned with lines 1–2; all others are centred on the whole text block. Chosen by eye
  from comparisons; 1 and 2 lines unchanged. To review later: the per-icon nudges of Buddhist temple (−3),
  Humanitarian access (+3) and Logistics (+2) were set for the old position.
- The rest of the formula is kept for now. Reviewed and left open: uneven empty space at the file edges (icon right-aligned in a fixed
  48 px box), wide icons coming out shorter (all fitted to the same square), hand-tuned −3/+2 px icon
  offsets for 2 and 3 lines, cap height assumed 0.70 (font file: 0.711).
- Approved wordmarks are drawn again at download time, so any geometry change also changes how already
  approved ones download. A versioned formula would need a version or date field from the Apps Script backend.

### Brand-site examples (26 Nov 2026)

- `word-mark-generator/examples/` is the source of the “Examples of wordmarks” image on the brand-site page
  (Frontify asset 12198607, replaced in place). Rebuild: edit `build-examples.html`, run
  `bash word-mark-generator/examples/export-examples.sh`, then replace the asset in Frontify.
- “Simland” is a made-up country (Javier’s choice), so no example reads as a real office’s wordmark.

### Open

- No automated tests yet (`tests/` folder).
