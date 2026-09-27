---
name: Exhibition catalog
feels_like: Walking through a museum room where each number is an exhibit
use_for: marketing, consumer, reading
fonts: Bodoni Moda, Schibsted Grotesk
colors: #F1F0EC, #2F4A3A, #1A1A1A, #A88B4A, #5C5B55, #A3262A
---

# Exhibition catalog

## Essence
The screen is a gallery wall. Numbers are the works: each one is set in Bodoni Moda at a size that means something, hung at its own position on an unboxed pale wall, with a small museum label beside or beneath it (a bold sans title, then plain lines for date, medium, provenance). One number is the centerpiece, set enormous (about 220px) with a longer wall label and the actions next to it. One section of wall is painted museum green: that "room" holds the argument (the finding, a chart framed like a print on a mat, the supporting table and log). A compact catalogue checklist runs along the bottom so every item can still be scanned in rows. Nothing sits in a card; grouping comes from placement, distance, the painted wall, and a few brass hairlines. The most memorable move is scale as data: the viewer reads importance and value from how big each numeral hangs before reading a single label.

Feels like: walking through a museum room where each number is an exhibit.

## Use for / avoid for
- **Use for:** consumer and reading products with a few numbers that matter (a reading tracker, a savings goal, a fitness summary), marketing and report pages that present results, annual reviews, "state of" pages, portfolio or collection pages, and a dashboard's overview screen when there are fewer than about ten items and one of them is the story.
- **Works on mobile** as a single exhibit: one drawn object on a painted band with its label, then one or two numerals as objects, then plain lists.
- **Avoid for:** dense operations tools with dozens of rows, anything where the user compares many values side by side all day, forms, and settings. Salon-hung numerals don't scale past about a dozen items; beyond that, the checklist has to become the main view and the direction loses its point.
- **Breaks down** when every number is equally important (the hang becomes a random scatter) or when values are long identifiers rather than short figures. Bodoni's hairline horizontals make hyphens, minus signs and dashes nearly invisible at small sizes; see Type.

## Type
- **Bodoni Moda** (variable, opsz 6–96, weights 400–700, italic) for the objects: exhibit numerals, the centerpiece, the Δ readout, room titles and section headings in italic, book or work titles in italic, pull quotes. Always `font-optical-sizing: auto` so display sizes get true hairlines.
- **Schibsted Grotesk** (400–700, italic 400) for everything that labels or operates: wall labels, identifiers, navigation, buttons, tables, the log, captions.
- Rule: **Bodoni never sets identifiers or signs.** Model names, dataset names, run IDs and anything with hyphens go in Schibsted. A minus sign next to a Bodoni numeral is set in Schibsted 300 (`<span class="sign">−</span>`), because Bodoni's minus is a hairline that vanishes.

| Role | Family | Size / line-height | Weight |
|---|---|---|---|
| Centerpiece numeral | Bodoni Moda | 220 / 0.78, tracking −0.035em | 400 |
| Exhibit numerals | Bodoni Moda | score × 100px (e.g. 0.931 → 93px) / 0.8, tracking −0.02em | 400 |
| Mobile hero numeral | Bodoni Moda | 118 / 0.8 | 400 (500 at 60px so thin figures like 1 survive) |
| Δ readout | Bodoni Moda + Schibsted sign | 34 / 1 | 400 / 300 |
| Room title | Bodoni Moda italic | 30 / 1.05 | 400 |
| Section heading, work title | Bodoni Moda italic | 20–24 / 1.1 | 400 |
| Product name | Bodoni Moda italic | 28–30 / 1 | 500 |
| Wall-label title | Schibsted Grotesk | 19 / 1.25 (centerpiece), 13 / 1.35 (exhibits) | 600 |
| Label and body text | Schibsted Grotesk | 13–14 / 1.45–1.55 | 400 |
| Captions, table text, log | Schibsted Grotesk | 12 / 1.4–1.5 | 400 |

- Case: sentence case everywhere. No uppercase labels, no tracked caps, no eyebrows. Museum labels get their hierarchy from weight (bold title, regular lines), not from caps.
- Numerals: `lining-nums` globally. `tabular-nums` **only** on numeric table cells and log timestamps. Schibsted's tabular set also widens periods and commas, so applying it to prose produces "r-2289 , passed ,". Never apply it to `body`.
- Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Schibsted+Grotesk:ital,wght@0,400..700;1,400&display=swap" rel="stylesheet">
```
- npm: `@fontsource-variable/bodoni-moda`, `@fontsource-variable/schibsted-grotesk`
- Next.js: `import { Bodoni_Moda, Schibsted_Grotesk } from "next/font/google"` (Bodoni Moda with `axes: ["opsz"]`, `style: ["normal","italic"]`).

## Color
| Token | Hex | Role |
|---|---|---|
| `--wall` | `#F1F0EC` | Page background: a cool, slightly grey gallery white. The only light surface besides the mat. |
| `--mat` | `#F8F7F3` | Passe-partout behind a framed chart; hover fill on rows and secondary buttons. |
| `--room` | `#2F4A3A` | The one painted wall: holds the argument or detail. Also the hover colour of numerals and the primary button. |
| `--ink` | `#1A1A1A` | Numerals, label titles, body text, primary button fill, focus outline. |
| `--muted` | `#5C5B55` | Label lines, captions, inactive nav, `—`, dashed "vacant" frames. |
| `--brass` | `#A88B4A` | Fine rules only: the current-nav underline, the checklist rule, list dividers, the chart baseline, progress fills, "on view" marker text at 12px italic. |
| `--danger` | `#A3262A` | Failure or regression on the wall. |
| `--on-room` | `#EDEBE4` | Text on the painted room. |
| `--on-room-muted` | `#B7C1B6` | Secondary text on the room. |
| `--danger-on-room` | `#F4A391` | Failure or regression text on the room (the wall red is too dark there). |

Contrast: ink on wall 15.3:1, muted on wall 6.0:1, danger on wall 6.4:1, on-room on room 8.1:1, on-room-muted on room 5.2:1, danger-on-room on room 4.9:1. All pass AA for body text. Brass is 2.9:1 on the wall and 3.0:1 on the room: **lines only, never text you need to read** (the one exception is the decorative "on view" marker next to a bold run ID). Focus outlines are ink, not brass, for that reason. Disabled text `#8D8B84` is 3.0:1 on purpose, paired with a dashed border and a written reason.

Status meaning: red means a failed run or a regression beyond noise, and nothing else. A failed run's own Δ is red only as part of its failure label. Passing gets no colour. "Not computed" is muted grey `—` in an empty dashed frame. Progress is brass.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-object: "Bodoni Moda", "Didot", "Bodoni 72", Georgia, serif;
  --font-label: "Schibsted Grotesk", "Helvetica Neue", Arial, sans-serif;

  --color-wall: #F1F0EC;
  --color-mat: #F8F7F3;
  --color-room: #2F4A3A;
  --color-ink: #1A1A1A;
  --color-muted: #5C5B55;
  --color-brass: #A88B4A;
  --color-danger: #A3262A;
  --color-on-room: #EDEBE4;
  --color-on-room-muted: #B7C1B6;
  --color-danger-on-room: #F4A391;

  --text-caption: 12px;
  --text-label: 13px;
  --text-title: 22px;
  --text-room: 30px;
  --text-centerpiece: 220px;

  --radius-*: initial;
  --shadow-*: initial;
}
```
Radii and shadows are removed on purpose. Set exhibit numeral sizes inline from data (`style="font-size: calc(var(--score) * 100px)"`). Without Tailwind, link `tokens.css`: it defines the same tokens plus `--t-exhibit-scale: 100px` and `--rule: 1px solid var(--brass)`.

## Layout moves
1. **The viewport is a wall, not a grid of panels.** Desktop 1440×900: the pale wall on the left ~65%, a painted room from x≈944 to the right edge running from the top to ~700px (it does not reach the bottom), and a full-width catalogue checklist below both. There is no sidebar and no card.
2. **The header is small, like the exhibition title by the door.** Top-left: product name in Bodoni italic 30px, workspace in 13px muted beside it, then the section links in 14px Schibsted, and an underline-only search field with a boxed `/` key at the right end of the wall. The current section is ink with a 1px brass underline; the others are muted.
3. **The centerpiece is the selected item.** Its figure is set at ~220px, left-aligned to the wall margin at eye level (about a third down). The wall label sits to its right in a 270px column, top-aligned with the numeral: bold title, date line, "Medium:" (what was measured), "Provenance:" (who or what triggered it, and the baseline), then the Δ in 34px red Bodoni and one sentence saying what it means. Actions sit directly under the numeral, not in a toolbar.
4. **Everything else hangs around it, salon style.** Other items are numerals whose **size encodes their value** (100px per point of score), placed at deliberately uneven offsets (vary top by 20–40px between neighbours, never on one baseline), each with a label 150–250px wide directly under the figure. Items without a value hang as an empty dashed frame (124×72) holding a `—`, with a brass rail along the bottom edge showing progress when it's running. A failed item hangs tiny (28px) in red with its error in the label.
5. **The painted room holds the argument.** A Bodoni italic title that states the question or finding as a sentence ("Why 0.812 is a regression"), 3–4 lines of wall text, the chart framed like a print (mat, 1px brass frame, caption below in 12px), then a small metrics table with brass hairlines and the log tail as a three-column grid.
6. **The checklist is the escape hatch for scanning.** Full width, 12px Schibsted, 16px rows, no borders except a brass rule under its header. Its header line carries the counts and the key ("each numeral hangs at 100px per point of score; an empty frame and — mean not computed yet; 0.000 is a computed zero"). The selected row is 600 weight with an italic brass "on view" after its ID.
7. **Mobile is one exhibit.** A full-bleed painted band holds the drawn object (a book cover ~138×207) hung left with its wall label to the right, aligned to the object's bottom edge. Below, on the wall: one hero numeral (~118px) with a brass rail, a pair of smaller numerals (60px), a full-width primary button, then plain lists and a pull quote. Navigation is a fixed 58px bar with a brass top rule.

## Signature details
1. **Scale as data.** Numeral size is computed from the value and the rule is written on the page. The selected item breaks the rule and is labelled as the one on view.
2. **Museum wall labels.** Every figure has a small label: bold sans title, then plain sentences using the labels "Medium:" and "Provenance:" where they carry real data (what was measured, who triggered it, what it's compared with). No boxes, no icons.
3. **One painted room.** A single flat green wall section, cut off before the bottom of the viewport, holds the explanation. Only one per screen.
4. **The framed print.** Charts sit on a lighter mat inside a 1px brass frame with a caption under the frame, like a work on paper. The chart itself is thin ink lines, a pale green wash for the tolerance band, a brass dashed baseline, and one red point with its value in Bodoni italic.
5. **Vacant hooks.** Unscored items are empty dashed frames with a muted `—`, so "not computed" reads as a gap in the hang rather than a zero.

## Components
- **Buttons:** square, 1px borders, Schibsted 600 13px (15px, 50px tall, full width on mobile). *Primary:* ink fill, wall-coloured text; hover turns room green. *Secondary:* 1px ink outline, transparent; hover gets the mat fill. *Destructive:* secondary construction with a label naming the loss, plus a confirmation step; never red, since red is reserved for status. *Disabled:* dashed `#A9A79F` border, `#8D8B84` text, `cursor: not-allowed`, with a 12px muted sentence beneath ("Cancel is unavailable: r-2291 finished at 02:14:02.").
- **Inputs and search:** no box. A 1px ink underline, 14px text, muted placeholder that names what can be searched, and a boxed 12px `/` hint. Focus: the underline becomes 2px brass.
- **Tables / lists:** the checklist (above) for scanning; small tables inside the room use brass hairlines between rows and right-aligned tabular numbers. Short lists on mobile are rows separated by 1px brass rules, title in Bodoni italic 18px, secondary line in 13px muted, count right-aligned.
- **Navigation:** words in a row, current one in ink with a brass underline. No pills, no icons.
- **Status:** words inside the label ("passed", "running, 62%", "queued by schedule. Not started.", "failed" in red 600). The empty frame and its brass rail carry running and queued visually.
- **Charts:** framed print as in Signature details. Axis labels are 10px muted Schibsted at the left only; no gridlines, no legend (the caption explains the band and the baseline).
- **Empty / loading / error:** sentences in label style. Empty: "Pinned comparisons: none yet." under the actions. Loading: the vacant frame with a partial brass rail. Error: a red label line with the object, the raw error and what to do ("Fix the output schema, then rerun.").
- **Collections and entity images:** a collection is a hang, not a card grid. Each entity is a specimen: its image hangs bare on the wall with no box or tint behind it, centred on a shared line per row as in a gallery, and its label sits beneath it in the usual label style (number, bold name, then type, rarity and count as plain sentences). **Size encodes rarity**, and a key line under the hang states the scale (common 72px, uncommon 96px, rare 124px, mythic 170px). Common specimens stay small and their rarity word is muted. Rare is bold in the label. The mythic hangs largest, with its rarity set in 19px Bodoni italic, so it is unmistakable even as a silhouette. *Seen, not caught* is the image with `filter: brightness(0); opacity: .82`. *Never seen* is an empty 72px dashed frame with only its number in the label. A failed image (`onerror` adds a class) becomes a plain 72px box on `--mat` with a 1px muted border, the name in bold and "no image". The selected entity is labelled "on view in the room" with a brass underline, and it hangs again on the painted room on a mat inside a 1px brass frame, beside its description as wall text. Stats are Bodoni numerals (40px) over thin brass rails scaled to their maximum. An evolution line is a row of 64px matted miniatures, with an unknown step as an empty dashed frame. Page-level progress is a large Bodoni tally ("10", "of 16 caught") on a brass rail, hung in the last row of the wall.
- **Focus:** `outline: 2px solid #1A1A1A; outline-offset: 3–4px` on everything, including exhibit links. Hovering an exhibit turns its numeral room-green and underlines its title in brass.

## Density & motion
- Base unit 4px, but spacing is deliberately uneven: 12px from a numeral to its label, 24–56px between exhibits, 36–48px padding inside the room. Tight inside a label, generous between works.
- Desktop shows about eight items as exhibits plus eight checklist rows, so the same data appears twice at two densities. The checklist is dense (16px rows); the wall is not.
- Mobile: 24px side margins, 34px inside the painted band, 20–38px between sections, 50px primary button above the fold, 58px fixed nav.
- Motion: none by default. Hover colour changes are instant. The mobile primary button moves down 1px on press. If anything animates, let a newly selected numeral scale up to centerpiece size over 250ms, and nothing else.

## Don'ts
- Don't put exhibits in cards, tiles or bordered boxes, and don't line them up on one baseline in equal columns. That turns it into a KPI row.
- Don't size numerals arbitrarily. Size must encode a stated value (or recency), and the rule must be written on the page.
- Don't set identifiers, hyphenated names, minus signs or dashes in Bodoni at small sizes: its horizontals are hairlines and disappear.
- Don't paint more than one room, and don't let it become a full-height sidebar. Cut it short and keep the checklist running beneath it.
- Don't use brass for text people need to read, for buttons, or for status. It's for hairlines and progress.
- Don't add museum costume: no fake accession numbers, gallery room numbers, "admission" copy, plaques, spotlights, drop shadows under frames, or gilt gradients. Every "Medium" and "Provenance" line must carry real data.
- Don't drop the checklist to make room for more wall. The hang is for seeing; the checklist is for finding.
- Don't use cream-and-terracotta warmth. The wall is a cool grey-white and the accent is green and brass.

## Variants
Never changes: scale as data with the rule written on the page, museum wall labels, one painted room cut short of the bottom, the framed print, vacant dashed frames for unscored items, and the checklist beneath it all.

### Dark
| Token | Light | Dark |
|---|---|---|
| `--wall` / `--mat` | `#F1F0EC` / `#F8F7F3` | `#1A1D1B` / `#242825` |
| `--room` | `#2F4A3A` | `#2F4A3A` (unchanged; it still reads as the one painted wall) |
| `--ink` | `#1A1A1A` | `#ECEAE3` |
| `--muted` | `#5C5B55` | `#A6A49C` |
| `--brass` | `#A88B4A` | `#B99A55` |
| `--danger` | `#A3262A` | `#F4A391` |

The primary button becomes `--ink` fill with `--wall` text, hovering to room green. Set exhibit numerals under 60px at weight 500 so Bodoni's hairlines survive light-on-dark.

### Density
- Denser: 70px per point of score, 16–32px between exhibits, 14px checklist rows. Past about 12 exhibits the checklist becomes the main view.
- Roomier: centerpiece 280px, labels 300px wide, 64px between exhibits, four or five exhibits hung.

### Named aesthetics
- **Museum label** (variant): label titles at 19px Schibsted 600, a longer wall text beside the centerpiece, object numbers only where they are real.
- **Luxury / fashion minimal** (variant): wall `#F4F4F2`, room charcoal `#262522` with `--on-room` text, letterspaced Jost caps for navigation only. The trap is empty whitespace around one stock photo.
- **Auction catalogue** (variant): the numeral is the lot number or hammer price, labels carry "Estimate:" and "Provenance:" with real data, the checklist is the lot index, and the room is oxblood `#4A1F24`.
- **Annual report / year in review** (variant): the year's numbers hang as exhibits, each chapter gets its own room as the page scrolls (still one per viewport), and the checklist is the data appendix.
