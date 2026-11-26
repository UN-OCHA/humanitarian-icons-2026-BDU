#!/bin/bash
# Rebuilds the example strip for brand.unocha.org (wordmark-examples.png + .svg)
# from build-examples.html, using the Wordmark Generator itself.
# Run from anywhere:  bash word-mark-generator/examples/export-examples.sh
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/../.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=8791
URL="http://localhost:$PORT/word-mark-generator/examples/build-examples.html"

cd "$ROOT"
python3 -m http.server "$PORT" --bind 127.0.0.1 >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null' EXIT
sleep 1

"$CHROME" --headless --hide-scrollbars --default-background-color=00000000 \
  --window-size=1600,270 --virtual-time-budget=8000 \
  --screenshot="$HERE/wordmark-examples.png" "$URL" 2>/dev/null

DOM="$(mktemp)"
"$CHROME" --headless --virtual-time-budget=8000 --dump-dom "$URL" 2>/dev/null > "$DOM"
python3 - "$DOM" "$HERE/wordmark-examples.svg" <<'PY'
import sys
dom = open(sys.argv[1], encoding="utf-8").read()
start, end = dom.find("<svg xmlns"), dom.rfind("</svg>")
if start < 0 or end < start:
    sys.exit("No example SVG in the page: did the generator fail to load?")
open(sys.argv[2], "w", encoding="utf-8").write('<?xml version="1.0" encoding="UTF-8"?>\n' + dom[start:end + 6] + "\n")
PY
rm -f "$DOM"
echo "Exported: $HERE/wordmark-examples.png and .svg"
