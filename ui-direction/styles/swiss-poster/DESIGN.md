---
name: Swiss poster
feels_like: An International Typographic Style poster that runs your ops
use_for: tools, marketing, data-dense
fonts: Archivo
colors: #FFFFFF, #000000, #1F3FD1, #FFD400, #E0201B
---

# Swiss poster

## Essence
The screen is composed like an International Typographic Style poster: a white field and a full-height ultramarine field, flush-left type on an asymmetric grid, and one enormous headline that states the finding in words ("summarize-v3 fell 0.041 below baseline."). There are no boxes, cards, shadows or icons. Hierarchy comes only from size, weight and the width axis of a single family, Archivo, pushed from compressed 62% to expanded 125%. The most memorable move is the headline that runs across the edge of the colour field and switches from black on white to white on blue mid-word, so the two fields read as one composition. The selected item's detail lives in the blue field, and the selected list row turns blue and bleeds into that field so the link between them is physical.

Feels like: an International Typographic Style poster that runs your ops.

## Use for / avoid for
- **Use for:** monitoring and review screens that have one headline finding per view (a regression, a drop, an incident); reports; launch or status pages; marketing pages that should feel like a tool rather than a pitch; mobile screens with one dominant number.
- **Works when** the screen can honestly be summarized in one sentence. That sentence becomes the poster.
- **Avoid for:** screens with no single message (settings, long forms, CRUD admin), dense multi-panel consoles, and anything where the headline would be invented filler. A poster that says "Dashboard" is a broken poster.
- **Breaks down** when the headline is long (keep it under about 40 characters across two lines) or when localization will double word lengths. Plan the headline length before choosing the size.

## Type
One family: **Archivo** (variable, `wdth` 62–125, `wght` 100–900, with italics). Width is a hierarchy tool, not a novelty: compressed for display and IDs, condensed for secondary display and buttons, normal for reading text, expanded for tiny labels.

| Role | Width | Size / line-height | Weight | Notes |
|---|---|---|---|---|
| Poster headline | 70% | 116–128 / 0.86, tracking -0.02em | 800 | sentence, ends with a full stop |
| Giant figures (mobile page count) | 62% | 136–150 / 0.78 | 800, with a 200-weight partner figure | |
| Readout (selected score) | 62% | 64–72 / 0.86 | 300 for the value, 800 for the Δ | |
| Count numerals | 62% | 64 / 0.9 | 800 | word beside at 14px 500 |
| Brand | 62% | 30–34 / 1 | 900 | |
| Nav words | 75% | 24–26 / 1 | 300, current 800 | no underline, no pill |
| List ID (run, item) | 62% | 30 / 1 | 700 | |
| Detail title | 75% | 27 / 1.02 | 700 | |
| Score in list | 75% | 22 | 500 | |
| Body, table cells | 100% | 15–17 / 1.3 | 400, key word 700 | |
| Labels, column heads | 125% | 11–12 / 1 | 700 | sentence case, not caps |
| Small notes | 100% | 12–13 / 1.3 | 400 | |

Scale: 11 / 14 / 17 / 22 / 30 / 44 / 64 / 128. No all-caps anywhere: expanded width at 11px is how a small label announces itself. Numbers always use `font-variant-numeric: tabular-nums`; numeric columns are right-aligned. Headlines are a real sentence with a full stop, never a word with one accented term.

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&display=swap" rel="stylesheet">
```
- npm: `@fontsource-variable/archivo` (import the build that includes the `wdth` axis, not only `wght`)
- Next.js: `import { Archivo } from "next/font/google"` with `axes: ["wdth"]`.
- Set width with `font-stretch: 62%` (or `font-variation-settings: "wdth" 62`).

## Color
| Token | Hex | Role |
|---|---|---|
| `--white` | `#FFFFFF` | The work field. Page background. |
| `--black` | `#000000` | All type on white, rules, primary mobile button, progress fill. |
| `--ultramarine` | `#1F3FD1` | The second field: full-height detail column, the selected row, the cover block, the highlight band. Never a small accent. |
| `--ultramarine-deep` | `#16309F` | Hover on blue, the drawn book's spine. |
| `--ultramarine-wash` | `#3552DB` | A tolerance band drawn inside the blue field. |
| `--on-blue-soft` | `#C9D2F6` | Secondary text on blue. |
| `--yellow` | `#FFD400` | Highlight: the one value that matters (the regressed Δ, the regressed bar), the unfinished goal fill, search focus, warnings in logs. |
| `--red` | `#E0201B` | Failure only: failed status, error line, failed count. |
| `--grey` | `#6B6B6B` | `—`, queued, placeholder text. |

Contrast: black on white 21:1; white on ultramarine 7.8:1 (AA body); `#C9D2F6` on ultramarine 5.2:1 (AA body); yellow on ultramarine 5.4:1 (AA, but keep it to 13px+ bold or display sizes); black on yellow 14.7:1; red on white 4.8:1 (AA body); grey on white 5.3:1. Yellow on white fails and is never used as text on white, only as a fill behind black text.

Status meaning: red is failed and nothing else. Yellow marks the one regression, not failure. A failed run's own Δ is not highlighted. Passed has no colour.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-sans: "Archivo", "Helvetica Neue", Arial, sans-serif;

  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-ultramarine: #1F3FD1;
  --color-ultramarine-deep: #16309F;
  --color-ultramarine-wash: #3552DB;
  --color-on-blue-soft: #C9D2F6;
  --color-yellow: #FFD400;
  --color-red: #E0201B;
  --color-grey: #6B6B6B;

  --text-label: 11px;
  --text-small: 14px;
  --text-body: 17px;
  --text-sub: 22px;
  --text-id: 30px;
  --text-title: 44px;
  --text-figure: 64px;
  --text-poster: 128px;

  --radius-*: initial;
  --radius-none: 0;
  --spacing: 8px;
}
```
Add utilities for width: `.stretch-compressed { font-stretch: 62% }`, `.stretch-condensed { font-stretch: 75% }`, `.stretch-expanded { font-stretch: 125% }`. Without Tailwind, link `tokens.css`, which defines the same values plus `--w-*` width tokens, `--margin: 40px`, `--gutter: 24px` and `--rule: 3px`.

## Layout moves
1. **Two fields, not panels.** Desktop 1440: a white work field with a 40px left margin, and a full-height ultramarine field on the right third (x 1000–1440, 440px, bleeding to the right and top and bottom edges). No border, no gap: the colour change is the division.
2. **Top third is the poster.** Under a single nav line, a two-line headline set at about 124px states the finding. Line 1 is short (the subject); line 2 is long enough to cross into the blue field. A small 15px paragraph sits in the empty space to the right of line 1, top-aligned to its cap height, giving the numbers and the caveat.
3. **Navigation is one line of large words.** Brand at 34px compressed 900, workspace at 14px, section words at 26px condensed 300 with the current one at 800. Search is an underlined field (3px black rule) with the `/` key in a small black block at its end. No sidebar.
4. **Lists are typographic, not tabular chrome.** A CSS grid of columns with a 3px black rule under the 11px expanded column heads, then rows with no rules or boxes. The ID is the biggest thing in each row (30px compressed 700). Row height about 44px. Long values wrap in their column (`overflow-wrap: anywhere`). An error attaches as a red line under its row.
5. **Selection is colour that bleeds.** The selected row gets the ultramarine background with white type, extended with negative margins to the page's left edge and right into the blue field, so the row and the detail column are one shape.
6. **Detail stacks in the blue field,** flush-left: actions at the top of the column, then (below the headline's crossing) a context line, the title, the baseline, a big readout pair, the metric table, the bar chart and the log tail.
7. **Counts are a poster band at the bottom:** a 3px rule, then 64px compressed numerals each followed by a 14px word ("8 runs 5 passed 1 failed…"), with legend notes pushed right.
8. **Mobile is a poster.** The title set 106–128px compressed, three ragged lines bleeding off the left edge and crossing a blue block that is the drawn book cover (same black/white split as the desktop headline). Then a giant page numeral, a thick progress track, the goal as a full-bleed band, and a big flat primary button. Navigation is again a line of words, fixed at the bottom.

## Signature details
1. **The crossing headline.** Render the headline twice, stacked exactly: one black copy clipped with `clip-path: inset(0 <right> 0 0)` to the white field, one white copy (`aria-hidden`) clipped to the blue field. The split lands mid-word ("basel|ine.").
2. **Width as hierarchy.** Compressed 62% for display, IDs and figures; condensed 75% for nav, buttons and secondary display; normal for reading; expanded 125% for 11px labels. A screen should use at least three widths.
3. **The bleeding selected row.** The selected row is the only boxed-looking thing on the page, and it isn't a box: it is a strip of the blue field reaching into the list.
4. **Heavy flat bars, no gridlines.** Charts are thick white or black bars on a truncated baseline (labelled in the caption), with a tolerance band as a flat lighter field and the one point that matters in yellow.
5. **The goal as a band that is only partly filled.** Full-bleed, 3px black rules top and bottom, yellow fill to exactly the percentage, the rest left white.

## Components
- **Buttons:** square, 3px border, Archivo condensed 700 at 16px, label is the verb ("Rerun", "Compare with baseline", "Log pages"). On blue: primary is a white block with ultramarine text (hover: yellow block, black text); secondary is a 3px white outline. On white: primary is a black block with white text, 56px tall on mobile, left-aligned label. Disabled: dotted outline in `--on-blue-soft` at half opacity, soft text, `cursor: not-allowed`, and a 12px sentence directly under the button row giving the reason ("Cancel is unavailable: r-2291 finished at 02:14:02.").
- **Inputs and search:** no box. Text sits on a 3px black rule; the placeholder is grey 14px; the shortcut key is a 12px expanded 700 glyph in a black block. Focus turns the whole field yellow.
- **Tables / lists:** grid rows with no borders (see Layout moves). Numbers right-aligned tabular; `—` in grey. Secondary lists (mobile "Up next") use a 3px rule on top and 1px black rules between items, with a compressed 30px ordinal only when the order is real.
- **Navigation:** a line of words. Weight carries the current state (800 vs 300). Hover goes to 600.
- **Status:** words. Passed is plain. Failed is red 800. Running is the word, the percentage, and a 34×9px black bar on light grey. Queued is grey. The regression gets the yellow mark behind its Δ.
- **Charts:** inline SVG, flat rects, no axes or gridlines; a 3px base rule; a caption sentence explains the truncated baseline, the band and the highlighted bar.
- **Readouts:** value in compressed 300 and delta in compressed 800 side by side at the same size, with one sentence under them.
- **Empty / loading / error:** one plain sentence in the notes area ("Pinned comparisons: none yet."). Errors are red, name the object and cause, then a black sentence saying what to do. `—` is explained next to the counts ("A dash means not computed yet… 0.000 is a real score of zero.").
- **Collections and entity images:** the index is a typographic grid (8 columns at 103px, 16px gutters), not cards. Each entity image sits on a flat square block (`#EDEDED`) with no border or radius; below it the number in compressed 700 at 22px, the name in 700, then type, rarity and state in 11–12px. The headline states the completion as a sentence ("10 of 16 caught.") and crosses into the blue detail field. Seen = the image as a black silhouette (`filter: brightness(0)`, opacity .82) on the same block. Never seen = a block with no fill, a 1px `#BDBDBD` outline and the number set 48px compressed 200 in grey, nothing else. A failed image leaves a darker grey inner box (`#D4D4D4`) with the name and "Image missing" (hide the `<img>` on `onerror`). Rarity is weight plus one mark: common 300 grey, uncommon 600, rare 800 plus a 7px black bar across the top of the block, mythic a yellow block and a yellow-backed 900 label. The selected entity's block turns ultramarine. In the blue detail field the large image sits on a white block, stats are thick white bars on `--ultramarine-deep` tracks with the value in condensed 700, and an empty evolution slot is an outlined square with its number only. A legend row under the grid names every block state.
- **Focus:** `outline: 3px solid #000; outline-offset: 3px`; on blue, the outline is yellow.

## Density & motion
- Base unit 8px, 40px outer margin, 24px gutter on a 12-column grid (column about 91px at 1440). List rows about 44px; detail table rows 24px.
- The top third is deliberately low-density: a sentence, not data. Density lives in the lower two thirds and in the blue column.
- Mobile: 20px side margin, title bleeding past it, touch targets at least 48px, fixed 56px word nav.
- Motion: none. Hover changes weight or fills instantly. `:active` on the mobile primary button flips it to yellow. Nothing fades or slides.

## Don'ts
- Don't write a headline that isn't a finding. "Overview" or "Welcome back" at 124px is the costume version of this style.
- Don't box things. No cards, no rounded corners, no shadows, no gradients (the only exception is a hard two-colour split inside a drawn object).
- Don't use ultramarine as a small accent (links, badges, icons). It is a field or it is absent.
- Don't use yellow for more than one or two marks per screen, and never as text on white.
- Don't set labels in tracked caps; use the expanded width at 11px instead.
- Don't add a second typeface, and don't let every text element sit at the same width. If everything is normal width, the style is gone.
- Don't centre anything. Everything aligns flush-left to the grid; only numerals right-align in columns.
- Don't add icons. Words, numerals, rules and flat shapes carry everything.

## Variants
Never changes: two flat fields divided by colour alone, the crossing headline that states the finding, Archivo's width axis as hierarchy, typographic lists with the selected row bleeding into the field, and flush-left type with no boxes or icons.

### Dark
The fields trade roles so the crossing headline still changes colour (white on the work field, ink on the second field).

| Token | Light | Dark |
|---|---|---|
| `--white` (work field) | `#FFFFFF` | `#0C1030` |
| `--black` (type and rules on the work field) | `#000000` | `#FFFFFF` |
| `--ultramarine` (second field) | `#1F3FD1` | `#FFD400`, with type in `#0C1030` |
| `--on-blue-soft` (soft text on the field) | `#C9D2F6` | `#4D4200` |
| `--yellow` (the one highlight) | `#FFD400` | `#8EA2FF`, behind `#0C1030` text |
| `--red` / `--grey` | `#E0201B` / `#6B6B6B` | `#FF5A4F` / `#9A9CB0` |

Focus is yellow on the work field and ink on the yellow field.

### Density
- Denser: an 88px headline, 36px list rows with 24px IDs, a 16-column grid, 44px count numerals.
- Roomier (launch, marketing): a 160px headline, five list rows, and the field widened to 45%.

### Named aesthetics
- **Swiss / International Style** (variant): the direction as written. For a red poster, the field becomes `#E3000F` with soft text `#FFD1CF`.
- **Bauhaus** (variant): the field turns red `#D0312D`, a blue `#1F3E8C` circle or square is cut from a corner of the white field, the highlight becomes `#F2C12E`, and labels go to Archivo 800 at 125%. Shapes are fields, never icons.
- **De Stijl** (variant): 8px black bars divide the page into white, red `#D52B1E`, yellow `#FFD400` and ultramarine rectangles. Only the blue one holds detail.
- **NASA 1975 standards manual** (variant): the field turns `#E03C31`, body at 100% width with 40px margins, grid diagrams in thin black rules. Draw your own mark, never the worm.
- **Blue Note / jazz covers** (variant): one flat cover colour per screen (`#0E5AA7`, or ochre `#D8912B` with ink type) and a duotone photo or drawn object in the field; stacked 62%-width type crops at the field edge.
- **Aurora gradients** (variant): the field alone becomes a vertical wash from `#1F3FD1` to `#0F6E7A`, no blobs. The trap (ANTI-SLOP: purple gradients, blurred blobs) is grading everything else too.
