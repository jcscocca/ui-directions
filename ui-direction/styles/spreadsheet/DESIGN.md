---
name: Spreadsheet
feels_like: The whole app is a workbook, and every element sits on the cell grid
use_for: tools, data-dense
fonts: Source Sans 3, Source Code Pro
colors: #FFFFFF, #E1E4E8, #F3F4F6, #1E7145, #FFC7CE, #C6EFCE, #4472C4
---

# Spreadsheet

## Essence
The screen is a live workbook. A green title bar holds the product name and search, a formatting toolbar sits under it, and a formula bar shows the selected cell's address and its formula. Below that, one continuous cell grid fills the viewport: grey column letters across the top, row numbers down the left, 1px gridlines everywhere, including the empty cells, so the grid visibly runs past the right and bottom edges. Data lives in cells. Tables are ranges with a bold header row and filter buttons. Detail panels are merged ranges. Status is conditional formatting (pale red, pale green, pale yellow fills). Progress is an in-cell data bar. Explanations are cell notes. Charts and filter slicers are floating objects anchored over cells. Sheet tabs along the bottom are the navigation, and a status bar under them carries calculation state and selection counts. The most memorable move is the selected cell: a 2px green border with a square fill handle, its column letter and row number lit green, and its formula in the bar above, with the referenced cells outlined in the same colours as their references.

Feels like: the whole app is a workbook, and every element sits on the cell grid.

## Use for / avoid for
- **Use for:** internal tools, ops and finance consoles, eval and experiment trackers, inventories, admin screens, anything whose users already think in rows, columns and formulas. It makes derived values honest, because you can show the formula that produced a number.
- **Works on mobile** as a condensed sheet with a frozen label column, a formula bar at the top and sheet tabs as the bottom navigation.
- **Avoid for:** marketing, onboarding, long-form reading, emotional consumer products. The grid is relentless and reads as work.
- **Breaks down** when content isn't tabular at all (a single article, a media player). Forcing prose into cells produces a costume. Also breaks down if you drop the column letters, row numbers or empty gridlines: what's left is an ordinary table.

## Type
- **Source Sans 3** (400, 600, 700, italic 400/600) carries every cell and every piece of chrome. It plays the role Calibri or Arial plays in a real spreadsheet: neutral, compact, good tabular figures.
- **Source Code Pro** (400, 500, 600) is for the formula bar, name box, formula fragments in pane headers, and log lines. Nothing else is mono. Numbers in cells use Source Sans 3 with `font-variant-numeric: tabular-nums`, right-aligned.
- Hierarchy comes from **cell formatting**, the way a spreadsheet user would make it: bold, a larger size on a few cells, fill, and a header row. No eyebrows, no tracked caps.

| Role | Family | Size / line-height | Weight |
|---|---|---|---|
| Key figure cell (score, delta) | Source Sans 3 | 22 / 1.1 | 600 |
| Record title cell | Source Sans 3 | 20 / 1.2 | 700 |
| Title cell | Source Sans 3 | 15 / 1.3 | 700 |
| Ordinary cell, UI, buttons | Source Sans 3 | 13 / 1.3 | 400 |
| Header-row cell | Source Sans 3 | 13 / 1.3 | 600 |
| Label cell, notes, status bar | Source Sans 3 | 12 / 1.35 | 400 |
| Column letters, row numbers | Source Sans 3 | 11 / 1 | 400 (700 when selected) |
| Formula bar, name box | Source Code Pro | 13 / 1 and 12 / 1 | 400 |
| Log lines in cells | Source Code Pro | 12 / 1.3 | 400 |

Scale: 11 / 12 / 13 / 15 / 20 / 22. Sentence case everywhere. Italic marks empty or unavailable states ("None yet.", "Cancel is unavailable…") and book titles.

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Code+Pro:wght@400;500;600&display=swap" rel="stylesheet">
```
- npm: `@fontsource/source-sans-3`, `@fontsource/source-code-pro`
- Next.js: `import { Source_Sans_3, Source_Code_Pro } from "next/font/google"`

## Color
| Token | Hex | Role |
|---|---|---|
| `--cell` | `#FFFFFF` | Cell background, the page |
| `--grid` | `#E1E4E8` | Gridlines on every cell, empty or not |
| `--hdr` | `#F3F4F6` | Column-letter and row-number bands, sheet-tab bar |
| `--hdr-line` | `#C9CDD3` | Lines around header bands, toolbar, formula bar |
| `--hdr-ink` | `#5F6670` | Column letters and row numbers |
| `--chrome` | `#F8F9FA` | Toolbar, status bar, pane headers |
| `--ink` | `#1F2328` | All cell text |
| `--ink-2` | `#4B535D` | Chrome text, secondary cells |
| `--ink-3` | `#656D77` | Label cells, `—`, zero counts, unavailable states |
| `--green` | `#1E7145` | Title bar, selection border, fill handle, selected headers, primary button, focus |
| `--green-dark` | `#155333` | Pressed primary, active sheet-tab text |
| `--green-hdr` | `#D5EADD` | Lit column letter / row number of the selection, pressed toolbar toggles |
| `--good-fill` / `--good-ink` | `#C6EFCE` / `#006100` | Conditional format: passed, caught |
| `--bad-fill` / `--bad-ink` | `#FFC7CE` / `#9C0006` | Conditional format: regression, failure |
| `--warn-fill` / `--warn-ink` | `#FFEB9C` / `#7A4600` | Conditional format: warning, unfinished, seen-not-caught |
| `--series` | `#4472C4` | Chart series, first formula reference, stat bars |
| `--ref-2` | `#C55A11` | Second formula reference and its dashed outline |
| `--databar` | `#A9C1E8` | In-cell data bars for progress |
| `--note` / `--note-line` | `#FFFBD9` / `#B3A95E` | Cell-note paper and border |
| `--flag` | `#C9211E` | Red corner flag on a cell that has a note about a problem |
| `--unc-fill` / `--unc-ink` | `#E3ECF7` / `#1F4E79` | Uncommon chip |
| `--rare` | `#2F5597` | Rare chip |
| `--mythic` / `--mythic-fill` | `#6A2C91` / `#F1E8F7` | Mythic chip and its whole-row fill |

Contrast: `--ink` on white and on every conditional fill passes AAA. `--good-ink` on `--good-fill` (6.1:1), `--bad-ink` on `--bad-fill` (5.9:1) and `--warn-ink` on `--warn-fill` (6.5:1) pass AA for 13px text. `--ink-3` on white is 5.2:1, AA for body. White on `--green` is 6.0:1.

Meaning: green is the application's own colour (chrome and selection), never a status. Status is carried only by the three conditional-format fills. Red fill means regression or failure. The red corner flag only ever marks a cell with a problem note. Blue belongs to data (series, bars, references).

## Tailwind
```css
@theme {
  --font-sans: "Source Sans 3", "Segoe UI", Arial, sans-serif;
  --font-mono: "Source Code Pro", Consolas, monospace;
  --color-cell: #FFFFFF;
  --color-grid: #E1E4E8;
  --color-hdr: #F3F4F6;
  --color-hdr-line: #C9CDD3;
  --color-hdr-ink: #5F6670;
  --color-chrome: #F8F9FA;
  --color-ink: #1F2328;
  --color-ink-2: #4B535D;
  --color-ink-3: #656D77;
  --color-green: #1E7145;
  --color-green-dark: #155333;
  --color-green-hdr: #D5EADD;
  --color-good-fill: #C6EFCE;
  --color-good-ink: #006100;
  --color-bad-fill: #FFC7CE;
  --color-bad-ink: #9C0006;
  --color-warn-fill: #FFEB9C;
  --color-warn-ink: #7A4600;
  --color-series: #4472C4;
  --color-ref-2: #C55A11;
  --color-databar: #A9C1E8;
  --color-note: #FFFBD9;
  --color-flag: #C9211E;
  --color-mythic: #6A2C91;
  --text-hdr: 11px;
  --text-small: 12px;
  --text-cell: 13px;
  --text-title: 15px;
  --text-big: 22px;
  --spacing-row: 22px;
  --spacing-rowhdr: 36px;
  --radius-btn: 2px;
  --radius-chip: 9px;
}
```
Without Tailwind, link `tokens.css` (same values as custom properties) and `style.css` (grid, cell, chrome and object classes).

## Layout moves
1. **App frame, top to bottom:** title bar (34px, green, product name, workspace or region, centred search) → toolbar (34px, real tools and toggles) → formula bar (30px: name box 92px, `fx`, formula) → the sheet (fills the rest) → sheet tabs (30px) → status bar (24px). Nothing else. No sidebar.
2. **One CSS grid is the page.** `grid-template-columns` starts with the 36px row-number column, then one explicit width per lettered column; `grid-template-rows` starts with the 20px letter row, then 22px per row (taller only where a cell wraps or holds an image). Every element is placed with `grid-area` in A1 terms. Empty positions still get a gridline cell, so the grid runs to the viewport edge and a partial column and row show at the right and bottom.
3. **Column widths are chosen per content, like a user dragged them:** 66px for IDs, 186px for names, 60 to 114px for numbers. A long value wraps inside its cell and that row grows (auto row height), exactly as "wrap text" does.
4. **Tables are ranges.** A bold header row with a filter button in each header cell, a frozen-pane line under it, right-aligned numbers, and an optional "Total" row with a rule above it holding the summary counts.
5. **The selected item's detail is a merged range beside the table,** not a panel: title in the header row, label/value cell pairs, a metric sub-table, key figures in 22px cells. If the detail needs its own coordinates, use a **split view**: a second pane with its own column letters and row numbers, fed by a formula shown in the pane header (`=FILTER(Index!A4:G19, Index!A4:A19=7)`).
6. **Selection drives the formula bar.** Exactly one selection per screen: its address in the name box, its formula in the bar, its column letter and row number lit green.
7. **Floating objects** (charts, cell notes, slicers) are placed with `grid-area` over a range of empty cells, inset 4 to 7px, with a thin border. They are the only things allowed to cover gridlines.
8. **Navigation is sheet tabs.** One tab per section; the current one is white with bold green text and a 3px green underline. A loading section says so on its tab.
9. **Mobile:** 46px title bar with name and date, 36px formula bar, then a 4-column sheet sized in `fr` units so it fits any width from 330px up, with a frozen label column A (a 2px line on its right) and a 12px sliver column E to show the grid continues. Merges never cross the frozen line. Rows are 28px (tap-safe), the primary action is a 48px-high button merged across B:D near the top, and 50px sheet tabs are the bottom navigation.

## Signature details
1. **The live selection:** 2px `#1E7145` border, a 7px square fill handle at the bottom-right corner with a 1px white ring, the selected column letter and row number filled `#D5EADD` with a green inner rule, and the name box and formula bar showing that cell (`E2`, `=D2-VLOOKUP(B2,Baselines!A:C,3,FALSE)`).
2. **Colour-coded references:** each cell reference in the formula has its own colour (blue `#4472C4`, then burnt orange `#C55A11`) and the referenced cells get a 2px dashed outline in that colour. The formula explains the number and the grid shows its inputs.
3. **Conditional formatting as the status system:** Excel's preset fill/text pairs (pale red, pale green, pale yellow) on the cells that carry state, plus in-cell data bars for progress (62% running, 8 of 20 pages, 10 of 16 caught).
4. **Cell notes with a red corner flag:** a problem cell gets an 8px red triangle in its top-right corner; the note that explains it floats over empty cells on pale note paper with a thin leader line back to the flag.
5. **Gridlines everywhere:** empty cells keep their lines, so a quarter of the screen is visibly unused sheet. That emptiness is what makes it read as a workbook at thumbnail size.

## Components
- **Buttons:** form buttons live inside a cell or merged range, inset 3px. Primary: green fill, white 600 text, 2px radius. Secondary: white with a 1px `#8A919A` border. Disabled: `#F1F2F4` fill, `#9DA3AB` text, **dashed** `#D3D7DC` border, `cursor: not-allowed`, and a reason written in the cell below in italic `--ink-3` ("Cancel is unavailable: r-2291 finished at 02:14:02."). Destructive actions use a secondary button whose label says what it destroys; there's no red button.
- **Toolbar:** 24px tools with transparent borders, hover `#E8EAED`, pressed toggles in `--green-hdr` with a green-grey border (Filter, Freeze row 1, Split view). Font and size dropdowns are white boxes with a caret. Segmented groups (Sort by: Number / Name / Rarity) share one border.
- **Inputs and search:** search is a white 24px field in the green title bar with a magnifier and a `/` key hint. The name box is an input-shaped cell with a caret.
- **Tables / lists:** ranges on the grid. Header cells: 600 weight, `#F7F8F9` fill, a darker `#A7AEB7` bottom line, and a 15px filter button (the sorted column's button shows an up-caret in green). Row numbers are the row identity; don't add your own zebra stripes or row cards.
- **Navigation:** sheet tabs (see Layout moves 8), with scroll arrows at the left and a horizontal scrollbar filling the rest of the tab bar.
- **Status indicators:** the conditional-format fills, never badges. Running = data bar plus percentage. Queued = italic `--ink-3`. Failed = red fill, bold, red corner flag.
- **Charts:** floating chart objects: white, 1px `#A9AFB7` border, the only drop shadow in the system (`0 1px 4px` at 18%), a 13px title, a 11px source line naming the range it plots (`Source: History!B2:M2`). Series in `#4472C4` with 2.6px markers, a tolerance band as a flat `#E7EDF6` rectangle, the baseline dashed grey, and the one out-of-band point in `--flag` with a direct label.
- **Slicers:** floating filter objects: a bold title (`Status: All`), a clear-filter button (disabled when nothing is filtered), then one 19px button per value with its count. Every value on = nothing filtered.
- **Empty / loading / error states:** empty is a merged range in italic grey ("None yet. Compare with baseline, then pin the result to keep it here."). Loading shows in three places: the sheet tab ("Datasets loading…"), the status bar ("Calculating Datasets" with a small progress bar) and the cell ("Loading. Counting rows in each dataset…"). Not computed is `—` in `--ink-3`, right-aligned, explained in a Key range next to `0.000`. Errors are notes on the failing cell with the exact message in mono.
- **Collections and entity images:** images sit *in* cells, like `=IMAGE()`: a 64px image column with 36px art centred in 38px rows, and the formula bar shows `=IMAGE("lanternfin.svg")` when that cell is active. **Seen** entries use `filter: brightness(0); opacity: .58`, a dark silhouette, with the status "Seen, not caught" on a yellow fill. **Unknown** entries are literally blank rows: the number in column A and nothing else, with a line in the header range saying blank rows are unknown. A **failed image** shows a grey `#EEF0F2` box reading "No image" with the spreadsheet error marker (a green triangle in the cell's top-left corner), a tooltip naming the file, and a status-bar message. **Rarity** is a data-validation chip in its own column: Common is plain grey text with no chip, Uncommon a pale blue chip, Rare a solid blue chip, Mythic a solid purple chip with a 2px outline **and** a pale purple fill across its whole row. **Stat blocks** are a small range (Stat / Value / bar), with blue bars drawn across two merged cells whose header row reads "0 … max 100". The selected entity is a range selection over its whole row; its record opens in a split pane with its own letters and row numbers.
- **Focus:** `outline: 2px solid #1E7145; outline-offset: 1px` on everything, the same green as selection, because in a spreadsheet the focused thing is the selected thing.

## Density & motion
- Base unit: the 22px row. Padding inside a cell is 0 6px; wrapped cells get 3px top and bottom. Gaps between regions are whole empty rows or columns (an 18 to 22px spacer column, one blank row), never margins.
- Desktop: 13px cells in 22px rows, about 32 visible rows at 900px height. Chrome is 156px in total.
- Mobile: 28px rows, a 24px row-number column, 13px cells; taller rows only for the cover (4 × 30px merged), the primary button (48px) and wrapped titles (auto height).
- Motion: none by default. If you add one, it's the selection border moving to the clicked cell (80ms, no easing theatrics) and the formula bar updating with it.

## Don'ts
- Don't drop the column letters, row numbers, formula bar or sheet tabs to "clean it up". Without them it's just a table in a page.
- Don't hide gridlines in empty areas, and don't pad regions apart with margins. Space is empty cells.
- Don't put things off the grid: no cards, no rounded panels, no floating sidebars. Only charts, notes and slicers float, and they're anchored to a range.
- Don't use green for "good". Green is selection and chrome; status is the conditional-format fills.
- Don't make every cell mono. Mono is for formulas, the name box and logs.
- Don't show more than one selection, and don't show a formula bar that doesn't match the selected cell.
- Don't merge across a frozen line, and don't let text overflow a cell that has a neighbour. Wrap it and let the row grow.
- Don't turn it into a costume with fake menus (File, Edit, View…) that do nothing. Toolbar tools must be ones the screen could plausibly use.

## Variants
What never changes: the lettered/numbered cell grid with visible empty gridlines, the formula bar driven by a single selection with its fill handle, conditional-format fills as the status system, floating objects anchored to ranges, and sheet tabs as navigation.

### Dark
| Token | Dark value |
|---|---|
| `--cell` | `#1E2124` |
| `--grid` | `#33383D` |
| `--hdr` / `--chrome` | `#26292D` / `#222528` |
| `--hdr-line` | `#41464C` |
| `--ink` / `--ink-2` / `--ink-3` | `#E6E8EA` / `#B4BAC1` / `#8A9199` |
| `--green` / `--green-hdr` | `#3FA36B` / `#1F3A2B` |
| `--good-fill` / `--good-ink` | `#1E3A26` / `#8FD9A0` |
| `--bad-fill` / `--bad-ink` | `#4A1F24` / `#FF9AA5` |
| `--warn-fill` / `--warn-ink` | `#4A3D12` / `#F2D27A` |
| `--note` | `#3A3620` |

The title bar stays deep green (`#155333`). Fill handle ring becomes the cell colour. The chart shadow is dropped; use a `#50565D` border instead.

### Density
- **Compact:** 20px rows, 12px cells, 32px row-number column, 28px toolbar and formula bar. Good for audit views with 40+ rows.
- **Roomy / touch:** 28 to 32px rows, 14px cells, 44px sheet tabs. Keep gridlines at 1px; don't thicken them to compensate.

### Named aesthetics
- **Spreadsheet** (variant): this is the direction as written, for Excel. For Google Sheets, swap the green title bar for white with a 20px green file mark, selection to `#1A73E8`, headers to `#F8F9FA`, and Arimo (Arial-metric) in place of Source Sans 3; keep the conditional fills. For an Airtable-style grid, raise rows to 32px, make chips the main status carrier, and drop the formula bar only if every field is a plain value. For Lotus 1-2-3 or VisiCalc, use a character grid on black with a reverse-video cell pointer and a top control panel, keeping the column letters, row numbers and the formula line, which are what make it a spreadsheet.
