# UI Directions

AI-built interfaces default to the same look: Inter, purple gradients, rounded cards with soft shadows, a hero and three feature cards. This library gives an agent a set of concrete, genuinely different alternatives and a way to stick to one.

Each direction is a complete brief (fonts, palette, layout moves, signature details, component construction, don'ts) plus three working specimens that show the same content: **Evals**, an ML eval-run dashboard; **Shelf**, a mobile reading tracker; and **Wildbook**, a creature-collection index with images, empty slots and a detail view. The content is fixed, so the differences you see come from the design.

## Browse

Open `index.html` in a browser. No server or build is needed; fonts load from Google Fonts. Search by direction or by a named aesthetic ("vaporwave", "Art Deco", "Teletext") to find the direction that carries it. Choose a direction to see it live at full size, read its brief, and copy it.

## Use with Claude Code

`ui-direction/` is a skill. Link it into your skills folder once.

Windows (PowerShell, from this folder):

```powershell
New-Item -ItemType Junction -Path "$HOME\.claude\skills\ui-direction" -Target "$PWD\ui-direction"
```

macOS / Linux:

```bash
ln -s "$PWD/ui-direction" ~/.claude/skills/ui-direction
```

After that, whenever an agent builds or restyles UI, it checks for an existing `DESIGN.md`. If there isn't one, it proposes 2–3 fitting directions and asks you to pick. It then copies the chosen brief into your project as `DESIGN.md`, builds to it, and runs the anti-slop self-check before reporting.

## Use with other agents

Copy `ui-direction/styles/<id>/DESIGN.md` into your project as `DESIGN.md`, along with `ui-direction/ANTI-SLOP.md`, and tell the agent to follow both. The specimens' HTML is useful evidence to attach.

## What's here

```
ui-direction/            the skill
  SKILL.md               flow: existing direction? → choose → persist → build → self-check
  ANTI-SLOP.md           tells of default AI UI, craft rules, self-check
  PATTERNS.md            layout patterns that combine with any direction
  AESTHETICS.md          named aesthetics (vaporwave, Art Deco, Teletext…) → direction + variant recipe
  art/                   shared creature illustrations used by collection.html
  styles/<id>/           DESIGN.md, tokens.css, dashboard.html, app.html, collection.html + screenshots
content/FIXTURE.md       the content every specimen shows
index.html, gallery/     the gallery
tools/build.py           validates every style; regenerates gallery/data.js and the SKILL.md table
tools/shoot.py           screenshots specimens with headless Edge/Chrome
docs/                    spec, plan, authoring briefs, DESIGN.md template
```

## Changing or adding a direction

Read `docs/STYLE-BRIEFS.md` and `docs/DESIGN-TEMPLATE.md`. A new direction has to be distinguishable from every existing one at thumbnail size through layout, type and component construction. A new palette isn't enough. After editing:

```bash
python tools/shoot.py <id> && python tools/build.py
```

The previous library (Editions 03/04) is untouched in `../ui-reference-library-curated/`.
