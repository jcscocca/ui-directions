---
name: Technical sheet
feels_like: An engineering drawing you can click
use_for: tools, data-dense
fonts: Barlow Condensed, IBM Plex Mono
colors: #EEF3F4, #0E5A6B, #13262B, #C8452C, #4A6970, #8FB0B7
---

# Technical sheet

## Essence
The screen is one drawing sheet: a cool drafting-paper page inside a heavy border frame with zone coordinates (A–F across the top and bottom, 1–6 down the sides), centering marks, and a title block in the bottom-right corner that holds the product name, workspace, sheet number, revision and update time. Everything on it follows drafting conventions. Lists are parts lists with item numbers and hairline cells. The selected item is a "detail view" tied to its row by a numbered balloon and a leader line. Charts sit on graph paper, and tolerances are shown with real dimension lines (extension lines, arrowheads, a value on the line). Linework is teal-cyan ink. The only other hue is a reviewer's redline, used for regressions and failures, including a hand-drawn circle and an italic checker's note on the one number that matters. The most memorable move is the frame plus title block: at thumbnail size the screen reads as a drawing, not an app.

Feels like: an engineering drawing you can click.

## Use for / avoid for
- **Use for:** internal tools, monitoring, QA, and eval dashboards; inventory, BOM, spec, or config screens; anything where tolerances, limits, and "is this within spec" are the question; dense tables that need to stay calm.
- **Works on mobile** as a "part drawing" of one object (a book, a device, an order) with dimensions standing in for progress.
- **Avoid for:** consumer onboarding, marketing heroes, emotional or social products, and long-form reading. The lettering is condensed and the tone is clinical.
- **Breaks down** when there is no single "part" to detail or no numeric limits to dimension. Without those it collapses into a bordered table with a costume frame.
- Not for dark mode as-is. A blueprint inversion (paper-coloured lines on deep cyan) is a separate direction. Don't just swap tokens.

## Type
- **Barlow Condensed** (400, 500, 600, 700, italic 500) is the CAD lettering. It carries view titles, labels, table text, buttons, and prose. Italic 500 is reserved for the checker's handwritten-style notes in redline.
- **IBM Plex Mono** (300, 400, 500, 600) carries values: scores, deltas, IDs, times, dimension figures, log lines, item numbers. Plex Mono Light (300) at display size is the big readout.
- Set `font-variant-numeric: tabular-nums` on `body`. Numeric columns are right-aligned mono.

| Role | Family | Size / line-height | Weight | Case |
|---|---|---|---|---|
| Display readout (score) | Plex Mono | 44 / 0.95, tracking -0.02em | 300 (400 when redline) | as data |
| Product name in title block | Barlow Condensed | 38 / 0.9 | 700 | Title |
| Part name / detail title | Barlow Condensed | 24 / 1.05 | 600 | as data |
| View title (underlined) | Barlow Condensed | 18 / 1, tracking 0.03em | 600 | UPPERCASE |
| Body, table cells | Barlow Condensed | 15 / 1.3 | 400–500 | Sentence |
| Small / secondary | Barlow Condensed | 13 / 1.3 | 400 | Sentence |
| Column heads, field labels | Barlow Condensed | 11 / 1, tracking 0.06em | 600 | UPPERCASE |
| Values in tables | Plex Mono | 13 | 400 | as data |
| Log, dimension figures | Plex Mono | 11.5–12 / 1.55 | 400 | as data |
| Checker's note | Barlow Condensed italic | 14 | 500 | Sentence |

Uppercase appears only where a drawing would letter it: view titles, column heads, title-block field labels, zone letters, and button labels. Everything a person reads as a sentence stays sentence case. View titles are **underlined** with a 1.5px ink rule, as drafting view titles are. Don't put an eyebrow above them. IDs keep their own case inside uppercase titles (wrap them in a span with `text-transform: none` in mono).

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,500;0,600;0,700;1,500&family=IBM+Plex+Mono:wght@300;400;500;600&display=swap" rel="stylesheet">
```
- npm: `@fontsource/barlow-condensed`, `@fontsource/ibm-plex-mono`
- Next.js: `import { Barlow_Condensed, IBM_Plex_Mono } from "next/font/google"` (weights as above, `style: ["normal", "italic"]` for Barlow Condensed).

## Color
| Token | Hex | Role |
|---|---|---|
| `--paper` | `#EEF3F4` | Page background: cool drafting paper. No white surfaces on top of it. |
| `--tint` | `#DCE8EA` | Selected row, hover, focused input. The only fill besides ink. |
| `--grid` | `#D2E0E3` | Graph-paper minor grid (12px). |
| `--grid-major` | `#B4CCD1` | Graph-paper major grid (every 5 minor squares). |
| `--line-thin` | `#8FB0B7` | Hairline cell borders, projection lines, disabled outlines. Never text. |
| `--cyan` | `#0E5A6B` | Ink linework: frame, view outlines, dimension lines, labels, primary button fill, current nav cell. |
| `--ink` | `#13262B` | Body text, part outlines, focus ring. |
| `--muted` | `#4A6970` | Secondary text, `—` placeholders, queued status. |
| `--redline` | `#C8452C` | Reviewer markup strokes: circles, leaders, the regressed data point, Δ dimension. |
| `--redline-text` | `#B23A22` | Redline text at small sizes (failed status, regression Δ, error line, checker's note). |

Contrast on `--paper`: ink 14.0:1, cyan 7.0:1, muted 5.3:1, redline-text 5.3:1 (all AA for body). `--redline` is 4.3:1, so use it for strokes and for text 18px+ only. Paper on cyan (primary button, current nav) is 7.0:1. `--line-thin` is 2.1:1 and is for lines only. The disabled button uses it deliberately, with a written reason beside it.

Status meaning: **redline** means a regression beyond tolerance or a failed run, and nothing else. Nothing decorative is red, and a failed run's own Δ is not redlined, because failure is not a regression. **Dashed outline** (hidden-line convention) means "not there yet": queued, not computed, pages not read. **Hatching** means "in progress / filled so far" (the running bar, the read portion of the book). Passed or OK is plain ink. Success doesn't get a colour.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-letter: "Barlow Condensed", "Arial Narrow", sans-serif;
  --font-value: "IBM Plex Mono", ui-monospace, monospace;

  --color-paper: #EEF3F4;
  --color-tint: #DCE8EA;
  --color-grid: #D2E0E3;
  --color-grid-major: #B4CCD1;
  --color-line-thin: #8FB0B7;
  --color-cyan: #0E5A6B;
  --color-ink: #13262B;
  --color-muted: #4A6970;
  --color-redline: #C8452C;
  --color-redline-text: #B23A22;

  --text-label: 11px;
  --text-small: 13px;
  --text-body: 15px;
  --text-sub: 18px;
  --text-title: 24px;
  --text-display: 44px;

  --radius-*: initial;
  --radius-none: 0;
  --spacing: 4px;
}
```
Use `font-letter` as the body font and `font-value` for numbers and IDs. All radii are 0. The only curves are balloons, the detail boundary and hand markup. Line weights: 2px frame and title block, 1.5px visible outlines (views, tables, buttons), 1px hairlines. Without Tailwind, link `tokens.css`, which defines the same values as CSS custom properties (`--paper`, `--cyan`, `--w-border`, `--w-visible`, `--w-hair`, `--dash-hidden`, the `--t-*` scale).

## Layout moves
1. **The viewport is the sheet.** Inset 10px from the window edge is a 2px cyan frame. An 18px zone band sits inside it, with A–F centered in equal cells across the top and bottom and 1–6 down both sides, separated by 1px ticks. A 1.5px inner border comes next. Centering marks are 2px × 26px lines at the midpoint of each edge. On desktop the sheet fits the window with no page scroll.
2. **Navigation is a sheet index strip,** a 40px row of bordered cells across the top of the drawing area: a "Sheet index" label cell, one cell per section with its sheet number in a small square box, then a Find field that fills the rest, with its `/` shortcut shown as a boxed key. The current sheet is filled cyan with paper text. There is no sidebar.
3. **Lists are parts lists.** Use a real `<table>`, fixed layout, with a 1.5px cyan outer border, 1px `--line-thin` cell borders, a 1.5px rule under the header and 32px rows. The first column is ITEM (1, 2, 3…) in mono cyan. A `tfoot` "QTY" row gives the counts. Long identifiers wrap inside their cell with `overflow-wrap: anywhere`. An error attaches to its row as a full-width sub-row in redline mono.
4. **The selected item is a detail view.** Its row gets the tint fill plus a *detail boundary*, a 1.5px cyan rounded rectangle (radius about 21px) drawn slightly outside the row. A leader runs from that boundary (dot terminator) through a numbered balloon (a 22–26px circle with the item number in mono) and ends in an arrowhead on the frame of the detail view: a 1.5px-bordered panel in the right column titled "Detail of item N". The balloon repeats at the top of the panel.
5. **Grid (desktop 1440):** parts list 848px, a 48px gutter that holds the leader, and the detail column taking the rest. Below the parts list sit a 560px graph-paper chart ("View A") and a notes column. The detail column ends in the title block, bottom-right, locked to the sheet corner.
6. **General notes replace tooltips and legends.** A numbered NOTES list (real ordinals, as on drawings) explains conventions: what `—` means versus `0.000`, what the tolerance band is, and what redline marks.
7. **Mobile reflows into a part drawing.** Keep the frame (a 1.5px border inset 6px, zone letters A–D along the top only). The hero is an orthographic drawing of the one object, a front view and a side view joined by dashed projection lines, with dimensions carrying the numbers. Below it come stacked sections with underlined view titles, a small parts list, and a fixed title block at the bottom whose cells are the navigation (label "SHEET n" over the section name).

## Signature details
1. **Border frame with zone coordinates and a title block.** The title block's cells hold a third-angle projection symbol, the product name at 38px/700, the workspace in mono, and SHEET / REV / UPDATED / TITLE / CHECKED BY fields with 10px uppercase labels. Use real data for the fields (revision = the latest run or build ID, updated = the last event time).
2. **Balloon and leader from row to detail.** The link between a list row and its detail is drawn, not implied by colour.
3. **Dimension lines for tolerances and progress.** Thin extension lines, a dimension line with filled narrow arrowheads (10×6), and the value set in mono along the line (rotated -90° for vertical dims). A chart's noise band is dimensioned (`±0.020 band`). The regression gets its own redline dimension from the baseline to the point (`Δ −0.041`). A progress bar is a scale bar with ticks and chain dimensions (`184 read | 120 left`), with a paper-coloured knockout behind each figure.
4. **Redline markup, used once or twice.** A slightly irregular hand-drawn circle (an open cubic path, 1.7px, round caps) around the offending point, with a curved leader to an italic 14px note that states the finding plainly ("0.021 under the band. Regression, not noise. Rerun to confirm."). Its colour and style are never used for anything else.
5. **Drafting line conventions as state.** Baselines are chain lines (`stroke-dasharray: 16 3 3 3`). "Not yet" is a hidden line (1px dashed). "Done so far" is 45° section hatching. Graph paper is a 12px minor and 60px major grid, drawn only inside charts.

## Components
- **Buttons:** square corners, 34px tall (48px on mobile), Barlow Condensed 600 at 15px, uppercase, tracking 0.04em, label is the verb ("Rerun evaluation", "Compare with baseline", "Cancel run"). *Primary:* cyan fill, paper text; hover goes to ink. *Secondary:* 1.5px cyan outline, transparent; hover gets the tint. *Destructive:* secondary construction whose label names the loss ("Delete 3 runs"), plus a confirmation step. Not redline, which is reserved for regressions and failures. *Disabled:* 1px dashed `--line-thin` outline, `--line-thin` text, `cursor: not-allowed`, and a 13px muted reason directly below ("Cancel is unavailable: r-2291 finished at 02:14:02.").
- **Inputs and search:** no box. A 1px cyan baseline under the text (drafting's lettering guideline), an uppercase 11px label on the left ("FIND"), and the shortcut as a 20px boxed mono key. Focus thickens the baseline to 2px ink and fills with the tint.
- **Tables / lists:** a parts list as described in Layout moves. Right-aligned mono numbers, `—` in muted, hover rows get the tint. A small secondary list is a mini parts list (ITEM / TITLE / PAGES).
- **Navigation:** the sheet index strip (desktop) or the title-block cells (mobile). Section numbers are sheet numbers. The current sheet is filled cyan.
- **Status:** plain words, not pills. Passed is ink text. Failed is redline 600. Running is the word plus a 46×8px scale bar with quarter ticks, hatched to the percentage, plus the mono percentage. Queued is muted text in a 1px dashed box.
- **Charts:** inline SVG on graph paper, a 1px cyan plot border, a 1.5px cyan line, 3px open circles for points, the latest or offending point filled redline. The tolerance band gets light 45° hatching (35% opacity) between dashed limits, with the baseline as a chain line labelled in 11px. Axis figures are 10.5px mono muted. Dimensions sit outside the plot on the right.
- **Readouts:** a label (11px caps cyan) over a Plex Mono Light 44px figure. A regressed Δ uses the same size in redline at weight 400, followed by one sentence saying why.
- **Empty / loading / error:** written plainly inside the drawing's own furniture. An empty state is an empty revision-style table ("No. | Pinned comparisons", one row: "None yet. Compare with baseline, then pin the result to keep it here."). An error is a redline mono sub-row naming the object and the cause, followed by a sentence in ink saying what to do. Unknown is `—` and is explained in the NOTES. Zero is `0.000`.
- **Collections and entity images:** a collection is a *plate*: a gapless ruled grid (1px `--line-thin` between cells, 1.5px cyan outer border, square corners, no cards) where each slot reads like a parts-catalogue entry. The number sits top-left in mono cyan, `QTY n` top-right, the image centred on plain paper, and the name (15px/600) with "type, rarity" beneath. The image is never matted, rounded or shadowed. In the detail view it sits in a thin view box with chain-line centre lines behind it, at an exact, stated scale ("Scale 3:1 against the plate"). Numbered callout balloons with dot-terminated leaders point to features, and their notes are listed below. States use line conventions. *Owned* shows the full image. *Seen* shows the image as a silhouette (`filter: brightness(0); opacity: .72`) with an italic "Seen, not caught". *Unknown* is a dashed hidden-line box with the number only. A *failed image* swaps (via `onerror`) to a thin solid box with a diagonal cross and "NO IMAGE", with the name kept. It must never look like Unknown. Rarity is a graded drafting mark at the image's top-right. Common has no mark. Uncommon is an open 9px diamond. Rare is a filled diamond in a thin frame. Mythic is an inverted ink tag with a diamond and "MYTHIC", plus a 3px double-line inset border on the whole slot. The same marks double as the legend in the filter strip. The selected slot gets the detail boundary and a lettered balloon ("A") on its corner, and the detail panel is titled "Detail A". Stat blocks are thin 8px cyan bars on a hairline, sharing one ticked 0–25–50–75–100 scale underneath. Facts go in title-block-style label/value cells, and an evolution chain is a row of small view boxes joined by arrowheads, with the unknown stage as a dashed box.
- **Focus:** `outline: 2px solid var(--ink); outline-offset: 2px` on everything. Inside filled cells, use `outline-offset: -4px` and a paper-coloured outline.

## Density & motion
- Base unit 4px. Table rows 32px (26px header, 28px totals). Detail-panel rows 27px. Gaps: 12–14px between blocks inside a view, 14px between views, 16px sheet padding.
- The desktop sheet is dense by design: about 30 values and 8 rows visible without scrolling, held together by line weight rather than boxes.
- On mobile the part drawing takes about 240px, sections are separated by 16px and an underlined view title, touch targets are at least 44px, and the title-block nav is fixed at about 72px.
- Motion: none by default. Hover and focus change fill instantly. The primary mobile button moves down 1px on `:active`. If you animate anything, animate the leader line being drawn when the selection changes (stroke-dashoffset, 200ms), and nothing else.

## Don'ts
- Don't drop the frame and title block to "save space". Without them this is a plain table on blue-grey paper.
- Don't round corners, add shadows, or use decorative gradients. CSS gradients may only draw hatching and tick marks. No cards. Containment comes from line weight: 2px frame, 1.5px views, 1px hairlines.
- Don't use redline for emphasis, brand, links, destructive buttons, or "down" numbers that are inside tolerance. One regression gets circled, not five.
- Don't add colour for success. No green anywhere. Passed is plain ink.
- Don't turn every label into tracked caps. Caps are for view titles, column heads, and title-block fields. Sentences stay sentence case, and IDs keep their case.
- Don't set prose in mono. Mono is for values, IDs, logs, and dimension figures.
- Don't fake engineering noise: no random part numbers, bogus revision letters, or decorative dimension lines that don't measure a real value. Every dimension, zone, and field must carry true data or be omitted.
- Don't put graph paper behind the whole page. The paper is plain; the grid belongs to charts.
- Don't use icons beside labels. Drafting symbols (balloons, arrowheads, projection symbol, hatching) are the whole icon set.

## Variants
Never changes: the border frame with zone coordinates and the title block, parts-list tables, the balloon and leader from row to detail view, dimension lines for tolerances and progress, and redline markup used once or twice.

### Dark
This direction doesn't survive a token swap: inverted linework reads heavier and the title block turns into a black box. A blueprint needs its own rules (see Named aesthetics). If a dark theme is required anyway:

| Token | Light | Dark |
|---|---|---|
| `--paper` / `--tint` | `#EEF3F4` / `#DCE8EA` | `#0E3A47` / `#16505F` |
| `--grid` / `--grid-major` | `#D2E0E3` / `#B4CCD1` | `#134A58` / `#1E6474` |
| `--line-thin` | `#8FB0B7` | `#4F8593` |
| `--cyan` (linework) / `--ink` | `#0E5A6B` / `#13262B` | `#D8EEF2` / `#F1F8F9` |
| `--muted` | `#4A6970` | `#9FC3CB` |
| `--redline` / `--redline-text` | `#C8452C` / `#B23A22` | `#FF9A7A` / `#FFB199` |

Thin 1.5px view borders to 1px and hairlines to 0.75px, drop hatching to 25% opacity, and give the primary button `--cyan` fill with `#0E3A47` text.

### Density
- Denser: 26px rows, 13px body, NOTES at 12px, about 14 rows visible.
- Roomier: 40px rows, 17px body, the detail column at half the sheet.

### Named aesthetics
- **Blueprint** (partial): the Dark tokens above. Missing: worked-out rules for line weight on blue, the inverted title block and where graph paper goes.
- **Sci-fi FUI / HUD** (partial): ground `#0A1E26`, linework `#8FE3F0`, Plex Mono 300 readouts, with dimension lines, ticks and balloons as the whole ornament set. Missing: radial gauges and corner brackets; don't fake them with glows.
- **IKEA-style instructions** (variant): large step numbers (Barlow Condensed 700 at 44px), each step a line view with parts called out as `2x` in balloons, prose moved to NOTES.
- **Patent drawing** (variant): black `#111111` on white, `FIG. 1` titles in Barlow Condensed 600 italic, reference numerals on plain lead lines, 45° hatching for cut sections.
