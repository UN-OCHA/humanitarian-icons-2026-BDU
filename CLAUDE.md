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

### Open

- **Downloads inside the brand-portal embed.** Frontify’s iframe sandbox doesn’t include `allow-downloads`,
  so browsers very likely block “Download preview PNG” and the approved download there (not confirmed: the
  test browser doesn’t save files). Request approval works. Final downloads from approval email links open the
  page directly and are unaffected. The DataViz web tool on the portal has the same sandbox.
- No automated tests yet (`tests/` folder).
