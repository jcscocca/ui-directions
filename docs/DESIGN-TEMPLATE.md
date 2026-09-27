# DESIGN.md template

Every `ui-direction/styles/<id>/DESIGN.md` starts with this front matter and uses exactly these eleven `##` headings in this order. `tools/build.py` checks both. This file is the agent-facing brief. It gets copied into other projects, so write it for an agent that has never seen this library: concrete values, no references to "the pilot" or other styles, and no mention of the Evals/Shelf demo content except as examples.

```markdown
---
name: Technical sheet
feels_like: An engineering drawing you can click
use_for: tools, data-dense
fonts: IBM Plex Mono, Barlow Condensed
colors: #EEF3F4, #0E5A6B, #13262B, #C8452C
---

# Technical sheet

## Essence
One paragraph: what this direction is, what world it borrows from, and the single most memorable move. End with one line: "Feels like: …".

## Use for / avoid for
Bullets. Be honest about where it breaks down.

## Type
- Families + weights, with roles (display / body / label / numeric / code).
- Scale in px (and line-heights). Case and tracking rules.
- Install: the Google Fonts `<link>`, the `@fontsource/...` package names, and `next/font/google` import names.

## Color
Token table: name, hex, role. Contrast notes (which pairs are AA for body text). What each status color means.

## Tailwind
A Tailwind v4 `@theme { ... }` block mirroring the tokens (colors, fonts, radii, spacing that matters). Also note how to apply it without Tailwind (point to tokens.css).

## Layout moves
Numbered, concrete rules: page grid, where navigation lives, how lists/tables are built, how a selected item's detail is shown, how mobile reflows. These are the decisions that separate this direction from others. Palette doesn't belong here.

## Signature details
3–5 specific moves that make a screen recognizably this direction, e.g. "the title block sits bottom-right with revision number and date, like a drawing sheet".

## Components
One short entry each: buttons (primary/secondary/destructive/disabled), inputs and search, tables/lists, navigation, status indicators, charts, empty/loading/error states, focus style.

## Density & motion
Base spacing unit, row heights, and how density changes on mobile. What moves, if anything, and why.

## Don'ts
Drift rules specific to this direction: the ways an agent will accidentally turn it back into generic UI, or into a costume.

## Variants
Ways to shift the surface without losing the direction. Start with one line naming what never changes (the layout moves and signature details that make it this direction). Then give `###` subsections:
- `### Dark` (or `### Light`, for a dark-first direction): token overrides as a small table or CSS block, plus which signature details need adjusting. If the direction doesn't survive inversion, say so.
- `### Density`: what changes for a denser or roomier version (row heights, type steps, spacing).
- `### Named aesthetics`: one short entry for each aesthetic in `ui-direction/AESTHETICS.md` that maps here. Name the aesthetic, then give the concrete swap (fonts, colors, materials, one or two ornaments) and anything from the direction that must be kept.
```

## tokens.css

```css
@import url("https://fonts.googleapis.com/css2?family=...&display=swap");
:root {
  --font-display: ...;
  --font-body: ...;
  --color-...: ...;
  /* spacing / radius / rule tokens that matter to this direction */
}
```

## Specimens

- `dashboard.html`: the Evals screen from `content/FIXTURE.md` at 1440×900. It should fit the viewport without page scroll where the direction allows. If the direction is inherently long-form, it may scroll, but the first viewport must show the runs and the selected run.
- `app.html`: the Shelf screen at 390×844. Include `<meta name="viewport" content="width=device-width, initial-scale=1">`. No horizontal overflow.
- `collection.html`: the Wildbook creature index + detail from Screen 3 of `content/FIXTURE.md` at 1440×900, using only the shared art in `ui-direction/art/`.
- All three link `tokens.css`. Extra CSS goes in a `<style>` block or a `style.css` in the same folder. No JavaScript frameworks. Small inline JS is allowed only for a signature interaction.
