---
name: Official dossier
feels_like: A printed government form in a manila case file, typed in and rubber-stamped
use_for: forms, tools, data-dense
fonts: Libre Franklin, Sometype Mono
colors: #FDFDFA, #1E5C3A, #1B1A18, #5B3FA6, #C0392B, #D3B77D, #FFF6C8
---

# Official dossier

## Essence
Every screen is a printed form. There are two inks: the **form ink** (a single green, `#1E5C3A`) prints every rule, label, part band and instruction, and **typed ink** (near-black, set in a typewriter-like mono) fills in the values. Every value lives in a numbered field box (`10a Run no.`, `2c First caught`), grouped under solid green **part bands** (`Part A  Run register`). IDs and counts sit in character-comb boxes. Statuses are checkbox grids with a typed `X`. States that need a verdict are rubber stamps in violet (`RECEIVED`, `REGRESSION`, `NOT MET`) or, for rejection and failure only, red. The sheet lies in a manila folder whose divider tabs are the navigation, with its yellow carbon copy peeking out behind it. The most memorable move is the two-ink construction: at thumbnail size the screen reads as a filled-in form (green-banded boxes, black typing, a crooked violet stamp), not as a web page.

Feels like: a printed government form in a manila case file, typed in and rubber-stamped.

## Use for / avoid for
- **Use for:** internal tools where each record is reviewed and signed off (evaluations, approvals, audits, claims, QA runs); admin and back-office screens; data entry that really is a form; registers and inventories where blank slots matter; anything with a paper-trail tone.
- **Also good for:** collection or catalogue apps that want a "field register" feel (a ledger with photo boxes).
- **Avoid for:** consumer marketing, onboarding and celebratory flows (the tone is procedural and slightly stern); long-form reading; image-led products (photos become small "affixed" prints); anything that must feel playful or luxurious.
- **Breaks down when** there are no discrete fields to number (free-form canvases, chat) or when the data needs a big expressive chart. Charts stay small, as attached "schedules".

## Type
- **Libre Franklin** is the printed face: form numbers, titles, part bands, field labels, instructions, buttons.
  - Form number: 900, 34px (`EV-7`, `WB-3`), preceded by "Form" at 11px 600.
  - Form title: 800, 24px, line-height 1.1.
  - Part band title: 700, 13px, on the green band in paper colour; the part's note in 400, 11px.
  - Field labels: 500, 10.5px, line-height 1.15, with the field number in 800 (`**10a** Run no.`). Sentence case. No tracked capitals.
  - Fine print and instructions: 400, 9.5px, line-height 1.35, form green.
  - Buttons: 700, 13px (15px on mobile primary).
- **Sometype Mono** is the typed face: every value a user or system entered. 400 at 12–13px; 700 for a record's name or title; 26px for the one or two headline numbers in a detail part. Mono here is the typewriter, not a data-label tic: labels never use it.
- **Stamps** use Libre Franklin 800, uppercase, `letter-spacing: .09em`, 13–20px, with a 9.5px sentence-case second line.
- Numbers: `font-variant-numeric: tabular-nums` on body; typed numbers are mono and right-aligned in numeric columns.
- Scale (px): 9.5 / 10.5 / 12 / 13 / 17 / 24 / 26 / 34.
- Install:
  - `<link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700;800;900&family=Sometype+Mono:wght@400;500;700&display=swap" rel="stylesheet">`
  - `@fontsource/libre-franklin`, `@fontsource/sometype-mono`
  - `next/font/google`: `Libre_Franklin`, `Sometype_Mono`

## Color
| Token | Hex | Role |
|---|---|---|
| `--paper` | `#FDFDFA` | Form paper. The sheet background |
| `--form` | `#1E5C3A` | Form ink: every rule, label, part band, field number, primary button |
| `--form-2` | `#3F7A58` | Secondary printed lines: photo corners, dot leaders, chart band edges |
| `--screen` | `#E3EEE6` | Screened (tinted) print: column heads, totals row, selected line |
| `--screen-2` | `#F1F6F2` | Lighter screen for hover and the selected row |
| `--typed` | `#1B1A18` | Typed values |
| `--typed-2` | `#55534E` | Secondary typed text (author, type line, "none yet") |
| `--stamp` | `#5B3FA6` | Violet rubber stamp: received, regression, pending, mythic; also the focus ring |
| `--reject` | `#C0392B` | Red: only rejection and failure (red stamp, red-ribbon error text, the failed status X) |
| `--carbon` | `#FFF6C8` | Yellow carbon copy peeking behind the sheet (edge `#E8D98A`) |
| `--folder` / `--folder-2` | `#D3B77D` / `#C1A266` | Manila folder ground and inactive divider tabs |
| `--folder-ink` | `#46351A` | Text on inactive tabs |

Contrast: typed on paper 17.1:1; form green on paper 7.8:1 (fine for 9.5px labels) and 6.7:1 on `--screen`; paper on the green band 7.8:1; violet on paper 7.6:1; red on paper 5.3:1; folder ink on inactive tab 4.8:1. Disabled controls (`#8FA597`, 2.6:1) always carry a printed reason next to them.

Status meaning: a typed `X` in the right checkbox is the status. Violet stamps mark a verdict that needs a human (received, regression, pending, not met). Red is reserved for rejected or failed. Green is structure, never "success".

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-print: "Libre Franklin", "Franklin Gothic Medium", sans-serif;
  --font-typed: "Sometype Mono", "Courier New", monospace;

  --color-paper: #FDFDFA;
  --color-form: #1E5C3A;
  --color-form-2: #3F7A58;
  --color-screen: #E3EEE6;
  --color-screen-2: #F1F6F2;
  --color-typed: #1B1A18;
  --color-typed-2: #55534E;
  --color-stamp: #5B3FA6;
  --color-reject: #C0392B;
  --color-carbon: #FFF6C8;
  --color-folder: #D3B77D;
  --color-folder-2: #C1A266;
  --color-folder-ink: #46351A;

  --text-fine: 9.5px;
  --text-label: 10.5px;
  --text-typed: 13px;
  --text-part: 13px;
  --text-title: 24px;
  --text-formno: 34px;

  --radius-*: initial;
  --radius-stamp: 3px;
  --spacing: 4px;
}
```
Field box: `border-r border-b border-form px-[7px] pt-[3px] pb-[5px]` inside a grid with `border-l border-form`. Without Tailwind, link `tokens.css` and copy the primitives in `style.css` (`.part`, `.fields`/`.f`, `.comb`, `.cb`, `.stamp`, `.act`, `.find`, `.tabs`).

## Layout moves
1. **The page is a form on a folder.** A manila ground (`--folder`) fills the viewport. Divider tabs across the top edge are the navigation; the current tab is paper-coloured and joins the sheet. The sheet sits 26px from the left, 32px from the right and 18px from the bottom, with its yellow carbon copy offset 9px down and right behind it. On mobile the tabs hang from the bottom edge instead.
2. **A masthead like a real form.** Left: "Form" + form number (900, 34px) with the issuer line and revision. Middle: the form title and a one-sentence instruction that says what the reader must do. Right: a barcode, the copy designation ("Copy A, Reviewer", "Sheet 1 of 1") and a report number in comb boxes. A rotated vertical strip down the left edge repeats the form number and copy.
3. **Everything is grouped into lettered parts.** Each group starts with a solid green band: a paper-coloured code box (`Part A`, `Sched. 1`) then the title and a short note. The page is 2 columns under the masthead: the register on the left (about 64%), the selected record in detail on the right. Parts stack in each column with 10px between them.
4. **Every value is a numbered field box.** Label top-left in form green (`10c Score`), typed value below. Field numbers are continuous down the page: register lines 1–8, totals line 9, detail fields 10a–10i, metric lines 11–14, remarks 16, actions 17, signature 18, enclosures 19. Numbering is the navigation between parts ("see line 1 in Part B").
5. **Lists are registers.** One printed line per record with a bold line number in the margin, lettered column heads on a screened strip (`(a) Run no.`, `(b) Model`), comb boxes for IDs, a checkbox grid for status, typed values right-aligned where numeric, and a totals line at the bottom ("Totals, lines 1 to 8"). Remarks for a line go on a sub-line directly under it. The selected line gets a reversed line number and a screened background.
6. **Amount-style lines for figures.** A breakdown is a set of printed lines: line number, label, dot leader, the line number repeated in a reversed box, then typed amount boxes per column (score, baseline, Δ).
7. **Instructions are fine print, beside the thing they explain.** Three short "Column (d)." paragraphs under the register explain `—` versus `0.000`, the Δ noise band and the status codes.
8. **Actions are a "mark one" part** at the foot of the detail column, followed by a signature line and date line, then an enclosures box (the empty state).
9. **Mobile** (390px): one column, the same masthead compressed (form number 26px), parts stacked, the primary action directly under the part it submits, divider tabs fixed to the bottom. Comb boxes and checkbox grids keep their size; only the field grid drops to 1–3 columns.

## Signature details
- **Two inks.** Green prints the form; black types the answers. Never type a label or print a value.
- **Rubber stamps** with a double border (2.5px + inset rule), rotated 4–9°, `mix-blend-mode: multiply` and a turbulence filter for uneven ink. At most three per screen, each meaning something: RECEIVED with time in the masthead, REGRESSION on the finding, REJECTED on a failed line (red), NOT MET on an unfinished goal, MYTHIC as a classification.
- **Comb boxes** for IDs and small counts: each character in its own cell with half-height ticks rising from a baseline rule.
- **Checkbox grids** for status with a typed `X`, lettered in the column head (`P F R Q`, `C S`). A disabled action is a dashed button whose checkbox is struck through diagonally and whose label is lined through, with a printed reason numbered like a field (`17c Cancel is not available: …`).
- **The carbon copy and the folder:** yellow carbon edge behind the sheet, manila ground, trapezoid divider tabs.

## Components
- **Buttons** (`.act`): a square checkbox followed by the action, 2px form-green border, no radius. Primary is filled green with paper text and a paper-outlined box. Secondary is paper with green text. Destructive or unavailable: dashed pale border, struck box and struck label, plus a printed reason. Press moves 1px down. Labels say what happens ("Rerun evaluation", "Log pages", "Add to team").
- **Inputs and search:** a field box with a screened label cell ("Find"), typed placeholder in mono, and the keyboard hint as a small boxed key. Focus: 2px violet outline inset.
- **Tables and lists:** registers as described in Layout moves. 1px form rules on every cell, screened column heads, 30px rows, typed 12px values. Long values wrap (`word-break: break-all` for slugs) inside the cell; the row grows.
- **Navigation:** divider tabs. Inactive tabs in `--folder-2` with folder ink; the current tab in paper, heavier weight, joined to the sheet.
- **Status:** a checkbox grid with one typed X, plus a stamp only where a person must act. Failed lines put the X in red and add a red-ribbon remark line ("KeyError: … Fix the extractor's output schema, then rerun.").
- **Charts:** attached as a schedule (`Sched. 1`). A small plot with printed axes in green, a screened band for the tolerance, a dashed baseline with its own legend line, the series in typed ink, and the one anomaly ringed in violet with a typed note. Under the plot, a row of comb boxes holds each plotted value, aligned under its point.
- **Empty, loading, error:** empty is a blank printed field or a dashed "Enclosures" box with "None enclosed yet." Unknown values are a typed `—`, explained in the fine print. Errors are a remark line typed in red saying what failed and what to do.
- **Focus:** 2px violet (`--stamp`) outline, 2px offset; inset on inputs.
- **Collections and entity images:** the collection is a **specimen register**: a ledger of lines split into two columns, one line per index number. Each line has the number in comb boxes, a **photo box** (50px, thin green border with printed photo-corner mounts) holding the entity image, name and type typed in one cell, a class box, a C/S status checkbox pair, a quantity, and a hatched **"For office use"** column where stamps and clerk notes go. *Seen* entities show a black silhouette (`filter: brightness(0); opacity: .55`) on a screened photo box and "seen, not caught" under the status boxes. *Unknown* entities are a blank printed line: the number and empty boxes only. A **failed image** leaves a dashed inner box reading "Photo not supplied" (the `<img>` removes itself on error), with "Photo failed to load. Re-file." in the office-use column. **Rarity** is a class box: Common `C` in a 1px box (quiet), Uncommon `U` in a 2px box, Rare `R` reversed in green, Mythic `M` reversed in violet plus a MYTHIC stamp in the office-use column. The selected entity opens as a **case file**: its photo as a white print, rotated −2.5°, held by a drawn paper clip; fields for types (checkbox row), habitat, dates and counts; the description typed on ruled lines; a **stat block** of comb-box values beside 0–100 gauges ruled every 10; an evolution line of small boxes with the unknown stage as a dashed empty box.

## Density & motion
- Base unit 4px. Field padding 3px 7px 5px. Register rows 30px; ledger rows with photos 69px; part bands 24px; 10px between parts.
- Desktop screens are dense by design (a whole form on one sheet). On mobile, typed values stay 12–13px, comb digits grow to 16–18px so counts are the headline, and the primary action becomes a full-width 44px button.
- Motion: none on load. Buttons press 1px. Stamps are static; if one ever animates, it is the one stamp that answers the user's action (e.g. RECEIVED after "Log pages"), a 120ms scale from 1.15 to 1.

## Don'ts
- Don't let it slide back into a web page: no rounded cards, no shadows, no pill tags. Status is a box with an X, not a coloured chip.
- Don't use the green for "success". It is the printing ink for everything structural.
- Don't stamp everything. Three stamps per screen at most, each a verdict. Never stamp over a value the reader needs; give stamps an empty field corner or an office-use column.
- Don't set labels in mono or values in the sans. The two-ink split is the direction.
- Don't make it a costume: no coffee rings, torn edges, fake handwriting signatures, crumpled paper or "CONFIDENTIAL" jokes. The paper objects that stay (folder, carbon, clip, stamps, barcode) each carry information or structure.
- Don't copy a real agency's form, seal, crest or form number. Invent the form series (EV-7, SH-1, WB-3).
- Don't number things that aren't fields. Field numbers must be continuous and referable.
- Don't drop the fine print. If a symbol or code is on the form (`—`, `P F R Q`, class letters), an instruction explains it.

## Variants
Never changes: the two-ink construction (printed labels, typed values), numbered field boxes under lettered part bands, comb boxes for IDs, checkbox grids for status, and stamps as the only verdict marks.

### Dark
The paper metaphor doesn't invert well. For a dark theme, treat it as a form under a microfiche reader: negative image, same structure.

| Token | Light | Dark |
|---|---|---|
| `--folder` / `--folder-2` | `#D3B77D` / `#C1A266` | `#1A1E1B` / `#262B27` |
| `--paper` | `#FDFDFA` | `#16211B` |
| `--form` / `--form-2` | `#1E5C3A` / `#3F7A58` | `#8FD1A8` / `#5E9E77` |
| `--screen` / `--screen-2` | `#E3EEE6` / `#F1F6F2` | `#203328` / `#1B2A22` |
| `--typed` / `--typed-2` | `#1B1A18` / `#55534E` | `#EDEBE4` / `#B3B0A6` |
| `--stamp` | `#5B3FA6` | `#B8A4F2` |
| `--reject` | `#C0392B` | `#F08A7E` |
| `--carbon` | `#FFF6C8` | `#3A3520` |

Part bands become `--form` with `--paper` text (so dark text on pale green); drop `mix-blend-mode` on stamps (use `screen`), and remove the carbon copy if it looks like a glow.

### Density
- Denser: 24px register rows, 11.5px typed values, field labels 9.5px, instructions collapsed into a numbered "Instructions" part at the foot.
- Roomier: 40px rows, 15px typed values, 12px labels, one part per row, and the detail as its own page (Form continues on "Sheet 2 of 2").

### Named aesthetics
- **Government forms** (variant): this is the direction as written. To lean toward a tax return, switch form ink to black `#111111`, put part codes in black boxes (`Part I`), and right-align amount boxes with dollar or pound columns and cents cells. Keep the two inks, comb boxes and numbered lines.
- **Typewritten case file** (variant): typed values in Sometype Mono 400 at 14px with a 0.5px text-shadow in `--typed` for ribbon bleed, the folder in grey board `#B9B6AA`, and a single paper-clipped photo per record. Keep stamps meaningful (FILED, CLOSED, REOPENED).
- **Passport / visa pages** (variant): paper `#F4F7F2` with a fine guilloche line pattern in `--screen`, a machine-readable zone (two lines of `<`-filled mono) at the foot of the detail, and entry stamps in violet and red as round date stamps. Keep the numbered fields and the photo box.
- **Carbonless work order / invoice** (variant): a three-part colour stack (white, yellow `#FFF6C8`, pink `#FBDDE3`) peeking at the edge, form ink in blue `#1F4E8C`, and a tear-off stub with a perforation line (`border-top: 2px dotted`). Keep the register lines and the totals line.
