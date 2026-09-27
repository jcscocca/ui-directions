"""Validate every style and regenerate gallery/data.js and the SKILL.md style table.

Usage: python tools/build.py
Exits 1 and prints every problem if any style is incomplete.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STYLES = ROOT / "ui-direction" / "styles"
SKILL = ROOT / "ui-direction" / "SKILL.md"
DATA_JS = ROOT / "gallery" / "data.js"
AESTHETICS = ROOT / "ui-direction" / "AESTHETICS.md"

SECTIONS = [
    "Essence",
    "Use for / avoid for",
    "Type",
    "Color",
    "Tailwind",
    "Layout moves",
    "Signature details",
    "Components",
    "Density & motion",
    "Don'ts",
    "Variants",
]
FRONT_KEYS = ["name", "feels_like", "use_for", "fonts", "colors"]
USE_FOR = {"tools", "data-dense", "consumer", "reading", "forms", "marketing"}
BANNED_FONTS = {"inter", "roboto", "open sans", "poppins", "montserrat"}
REQUIRED_FILES = ["DESIGN.md", "tokens.css", "dashboard.html", "app.html", "collection.html"]
EMOJI = re.compile("[\U0001F300-\U0001FAFF\U00002600-\U000027BF\U0001F000-\U0001F2FF]")


def parse_front_matter(text):
    m = re.match(r"---\n(.*?)\n---\n", text, re.S)
    if not m:
        return None, text
    meta = {}
    for line in m.group(1).splitlines():
        if ":" in line:
            key, value = line.split(":", 1)
            meta[key.strip()] = value.strip()
    return meta, text[m.end():]


def split_list(value):
    return [v.strip() for v in value.split(",") if v.strip()]


def check_style(folder):
    problems = []
    for name in REQUIRED_FILES:
        if not (folder / name).is_file():
            problems.append(f"missing {name}")
    design_path = folder / "DESIGN.md"
    if not design_path.is_file():
        return None, problems
    text = design_path.read_text(encoding="utf-8").replace("\r\n", "\n")
    meta, body = parse_front_matter(text)
    if meta is None:
        return None, problems + ["DESIGN.md has no front matter"]
    for key in FRONT_KEYS:
        if not meta.get(key):
            problems.append(f"front matter missing '{key}'")
    headings = re.findall(r"^## (.+?)\s*$", body, re.M)
    if headings != SECTIONS:
        problems.append(f"DESIGN.md headings {headings} != {SECTIONS}")
    fonts = split_list(meta.get("fonts", ""))
    for font in fonts:
        if font.lower() in BANNED_FONTS:
            problems.append(f"banned primary font '{font}'")
    use_for = split_list(meta.get("use_for", ""))
    unknown = set(use_for) - USE_FOR
    if unknown:
        problems.append(f"unknown use_for tags {sorted(unknown)}")
    colors = split_list(meta.get("colors", ""))
    for c in colors:
        if not re.fullmatch(r"#[0-9A-Fa-f]{6}", c):
            problems.append(f"bad color '{c}'")
    for name in ["dashboard.html", "app.html", "collection.html"]:
        path = folder / name
        if path.is_file():
            html = path.read_text(encoding="utf-8")
            if "tokens.css" not in html:
                problems.append(f"{name} does not link tokens.css")
            if EMOJI.search(html):
                problems.append(f"{name} contains emoji")
            for src in re.findall(r'<img[^>]+src="([^"]+)"', html):
                if not src.startswith("../../art/"):
                    problems.append(f"{name} uses an image outside ui-direction/art/: {src}")
            if name == "app.html" and 'name="viewport"' not in html:
                problems.append("app.html missing viewport meta")
    entry = {
        "id": folder.name,
        "name": meta.get("name", folder.name),
        "feelsLike": meta.get("feels_like", ""),
        "useFor": use_for,
        "fonts": fonts,
        "colors": colors,
        "design": body.strip(),
    }
    return entry, problems


def parse_aesthetics(ids):
    """Rows of the AESTHETICS.md table: | Aesthetic | Also called | Direction | Fit | Recipe |"""
    if not AESTHETICS.is_file():
        return [], ["ui-direction/AESTHETICS.md is missing"]
    rows, problems = [], []
    for line in AESTHETICS.read_text(encoding="utf-8").splitlines():
        cells = [c.strip() for c in line.strip().strip("|").split("|")] if line.startswith("|") else []
        if len(cells) != 5 or cells[0] in ("Aesthetic", "") or set(cells[0]) <= set("-: "):
            continue
        name, aliases, direction, fit, recipe = cells
        direction = direction.strip("`")
        if direction not in ids:
            problems.append(f"AESTHETICS.md: '{name}' maps to unknown direction '{direction}'")
        if fit not in ("variant", "partial"):
            problems.append(f"AESTHETICS.md: '{name}' fit must be 'variant' or 'partial', got '{fit}'")
        rows.append({"name": name, "aliases": [a.strip() for a in aliases.split(",") if a.strip()],
                     "direction": direction, "fit": fit, "recipe": recipe})
    return rows, problems


def update_skill_table(entries):
    if not SKILL.is_file():
        return
    text = SKILL.read_text(encoding="utf-8")
    rows = ["| id | Direction | Feels like | Use for |", "|---|---|---|---|"]
    for e in entries:
        rows.append(f"| `{e['id']}` | {e['name']} | {e['feelsLike']} | {', '.join(e['useFor'])} |")
    table = "\n".join(rows)
    new = re.sub(
        r"(<!-- styles:start -->\n).*?(\n<!-- styles:end -->)",
        lambda m: m.group(1) + table + m.group(2),
        text,
        flags=re.S,
    )
    if new != text:
        SKILL.write_text(new, encoding="utf-8")


def main():
    folders = sorted(p for p in STYLES.iterdir() if p.is_dir()) if STYLES.is_dir() else []
    if not folders:
        print("no styles found in", STYLES)
        return 1
    entries, failed = [], False
    for folder in folders:
        entry, problems = check_style(folder)
        if problems:
            failed = True
            for p in problems:
                print(f"FAIL {folder.name}: {p}")
        else:
            print(f"ok   {folder.name}")
        if entry:
            entries.append(entry)
    aesthetics, problems = parse_aesthetics({e["id"] for e in entries})
    for p in problems:
        failed = True
        print(f"FAIL {p}")
    DATA_JS.parent.mkdir(parents=True, exist_ok=True)
    DATA_JS.write_text(
        "window.UI_DIRECTIONS = " + json.dumps(entries, ensure_ascii=False, indent=1) + ";\n"
        + "window.UI_AESTHETICS = " + json.dumps(aesthetics, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )
    update_skill_table(entries)
    print(f"{len(entries)} styles, {len(aesthetics)} aesthetics -> {DATA_JS.relative_to(ROOT)}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
