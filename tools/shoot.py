"""Screenshot specimens with headless Edge or Chrome (no Playwright needed).

Usage: python tools/shoot.py [style-id ...]
Writes ui-direction/styles/<id>/preview.png (1440x900), app.png (390x844) and collection.png (1440x900).
Set BROWSER=<path> to override the browser executable.
"""
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STYLES = ROOT / "ui-direction" / "styles"
CANDIDATES = [
    os.environ.get("BROWSER", ""),
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    shutil.which("chromium") or "",
    shutil.which("google-chrome") or "",
    shutil.which("msedge") or "",
]
SHOTS = [
    ("dashboard.html", "preview.png", 1440, 900),
    ("app.html", "app.png", 390, 844),
    ("collection.html", "collection.png", 1440, 900),
]


def find_browser():
    for c in CANDIDATES:
        if c and Path(c).is_file():
            return c
    sys.exit("No Edge/Chrome found; set BROWSER=<path>.")


def shoot(browser, html, png, width, height):
    with tempfile.TemporaryDirectory() as profile:
        cmd = [
            browser,
            "--headless=new",
            "--disable-gpu",
            "--hide-scrollbars",
            "--no-first-run",
            f"--user-data-dir={profile}",
            f"--window-size={width},{height}",
            "--virtual-time-budget=4000",
            f"--screenshot={png}",
            html.as_uri(),
        ]
        subprocess.run(cmd, check=True, capture_output=True, timeout=60)


MIN_WINDOW = 500  # headless Chromium won't lay out narrower than ~492px


def shoot_narrow(browser, html, png, width, height):
    """Frame the page at its true width inside a wider window, then crop."""
    from PIL import Image

    with tempfile.TemporaryDirectory() as tmp:
        wrapper = Path(tmp) / "frame.html"
        wrapper.write_text(
            "<!doctype html><style>html,body{margin:0;background:#fff}"
            f"iframe{{border:0;width:{width}px;height:{height}px;display:block}}</style>"
            f'<iframe src="{html.as_uri()}"></iframe>',
            encoding="utf-8",
        )
        shoot(browser, wrapper, png, MIN_WINDOW, height)
    Image.open(png).crop((0, 0, width, height)).save(png)


def main(ids):
    browser = find_browser()
    folders = [STYLES / i for i in ids] if ids else sorted(p for p in STYLES.iterdir() if p.is_dir())
    for folder in folders:
        for src, out, w, h in SHOTS:
            html = folder / src
            if not html.is_file():
                print(f"skip {folder.name}/{src} (missing)")
                continue
            (shoot_narrow if w < MIN_WINDOW else shoot)(browser, html, folder / out, w, h)
            print(f"shot {folder.name}/{out}")


if __name__ == "__main__":
    main(sys.argv[1:])
