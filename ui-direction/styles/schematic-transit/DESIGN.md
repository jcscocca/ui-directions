---
name: Schematic transit
feels_like: A transit map where your data is the network
use_for: tools, consumer, data-dense
fonts: Overpass, Overpass Mono
colors: #FFFFFF, #111418, #1466B8, #13925A, #D7263D, #15181C, #F6C744
---

# Schematic transit

## Essence
The screen is a schematic network diagram. Each series (a model, a type, a book) is a coloured **line** drawn only at 0°, 45° and 90°. Each entity on it is a **station**: a short tick for an ordinary stop, an outlined ring for an interchange or the selected item. Position on the line means something real, such as start time, page number or shared type, and the key box says what. The selected station opens a **station information sign**: an ink header with a white body, and the line runs straight into its coloured edge stripe. The list view is a **split-flap departures board**: yellow monospaced characters, each in its own flap cell, on a near-black panel. Signage type is Overpass, a Highway Gothic descendant. The most memorable move is the map itself. Thick 8px coloured lines with 45° jogs, white-haloed labels and a key box make the screen recognisable at thumbnail size.
Feels like: a transit map where your data is the network.

## Use for / avoid for
- Use for: monitoring things that happen over time or along a route (jobs, pipelines, deploys, shipments), progress through something linear (a book, a course, a trip), and collections whose items can be grouped into overlapping families.
- Use for: dashboards that need one strong overview picture plus a scannable list.
- Avoid for: long-form reading, dense forms and settings pages. Nothing in them has a route.
- Avoid when the data has no meaningful order or grouping. A network drawn from arbitrary positions is decoration.
- Breaks down past about 6 lines or 40 labelled stations per view. Split into zones or filter by line instead of shrinking labels.
- The departures board is slower to read than a plain table. Use it for fewer than about 15 rows. Above that, use a normal table and keep the flap cells for headline counts.

## Type
- **Overpass** (Google Fonts, weights 400, 600, 700, 800, 900, and 400 italic). Use it for all signage and UI: headings, station names, labels, body text, buttons. Station names are 800. Titles and wordmarks are 900.
- **Overpass Mono** (400, 600, 700). Use it only for things that are code or a character grid: the departures board, IDs (`r-2291`, `#007`) and log lines. The board uses 700.
- Scale (px): 11 / 12 / 13 / 15 / 18 / 22 / 30 / 44. Body is 15/1.35. Map station IDs are 14/800 and values 12.5/400. Station sign titles are 22–30/800–900. The big numeral on mobile is 44/900.
- Case: sentence case everywhere, as on real wayfinding signs. No tracked caps eyebrows. The board keeps the data's own case (`summarize-v3`, not `SUMMARIZE-V3`). The only all-caps text is the `MYTHIC` flap tag.
- Numbers: `font-variant-numeric: tabular-nums` on every number outside the board. The board is monospaced by construction.
- Install:
  - `<link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400&family=Overpass+Mono:wght@400;600;700&display=swap" rel="stylesheet">`
  - `npm i @fontsource/overpass @fontsource/overpass-mono`
  - `import { Overpass, Overpass_Mono } from "next/font/google"`

## Color
| Token | Hex | Role |
|---|---|---|
| `--paper` | `#FFFFFF` | Map background, sign bodies |
| `--zone` | `#F1F3F4` | Alternating zone bands (hours), seen-item plates, hover |
| `--ink` | `#111418` | Text, station rings, sign headers, primary button |
| `--ink-2` | `#3C434B` | Secondary text (AA on white: 10.6:1) |
| `--grey` | `#8A929A` | Minor ticks, inactive stops, ghost/baseline spurs. Not for text |
| `--rule` | `#D5D9DD` | Hairlines, nav route line, empty tracks |
| `--planned` | `#B4BAC0` | Dashed planned/queued extensions, disabled button border |
| `--line-blue` | `#1466B8` | Line colour 1 |
| `--line-green` | `#13925A` | Line colour 2 |
| `--line-purple` | `#7A3FA6` | Line colour 3 |
| `--line-brown` | `#8E5625` | Line colour 4 |
| `--line-orange` | `#E07A12` | Line colour 5 |
| `--closed` | `#D7263D` | Closures and disruptions only: failure, regression. 4.9:1 on white |
| `--board` | `#15181C` | Departures board panel |
| `--flap` | `#262B31` | Individual flap cells |
| `--flap-ink` | `#F6C744` | Board characters (12:1 on the board) |
| `--flap-dim` | `#8C7A45` | Board characters for queued/inactive rows |
| `--flap-red` | `#FF6B7A` | Red on dark (board, sign headers). Same meaning as `--closed` |

Rules: line colours identify an entity family and never mean status. Red means closed or disrupted and nothing else. Passed/ok has no colour; it's the default. Running is shown by a hollow station and lit yellow flap cells, not by green. Body text is always `--ink` or `--ink-2` on white, or white on `--ink`.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-sign: "Overpass", ui-sans-serif, sans-serif;
  --font-board: "Overpass Mono", ui-monospace, monospace;
  --color-paper: #FFFFFF;
  --color-zone: #F1F3F4;
  --color-ink: #111418;
  --color-ink-2: #3C434B;
  --color-grey: #8A929A;
  --color-rule: #D5D9DD;
  --color-planned: #B4BAC0;
  --color-line-blue: #1466B8;
  --color-line-green: #13925A;
  --color-line-purple: #7A3FA6;
  --color-line-brown: #8E5625;
  --color-line-orange: #E07A12;
  --color-closed: #D7263D;
  --color-board: #15181C;
  --color-flap: #262B31;
  --color-flap-ink: #F6C744;
  --color-flap-dim: #8C7A45;
  --color-flap-red: #FF6B7A;
  --radius-sign: 6px;
  --radius-flap: 2px;
  --text-11: 11px; --text-12: 12px; --text-13: 13px; --text-15: 15px;
  --text-18: 18px; --text-22: 22px; --text-30: 30px; --text-44: 44px;
}
```
Without Tailwind, link `tokens.css` and use the same custom properties (`var(--ink)`, `var(--line-blue)`, `var(--font-board)`). Line widths are part of the grammar: line 8px, tick 5px × 12–13px, interchange ring r=11 with a 4px stroke. Keep them as constants.

## Layout moves
1. **The diagram is the page.** The main area is one inline SVG network. Its x or y axis is a real scale (time, pages), stated on a ruler along the bottom edge with hour or scale labels. Or the network is topological, with lines grouping items by family, stated in a title cartouche. Alternate `--zone` bands mark the scale's major intervals, like fare zones.
2. **Lines use only 0°, 45° and 90°.** Route each line with at least one 45° jog to get it where it needs to go. Keep stations on straight segments only, never on a diagonal. Every line starts and ends with a terminus bar (5px stub perpendicular to the line) and carries a rounded line badge in its colour, near one terminus.
3. **Stations:** an ordinary stop is a 5px tick on the side where its label sits. An interchange (two lines, or a baseline spur) is a white ring with a 4px ink stroke. The selected station gets a second, outer ring. Labels are SVG text with a 5px white halo (`paint-order: stroke`) so lines can pass behind them.
4. **The selected item opens a station information sign** fixed to one side of the map (dashboard: right, 520px wide). The station's line runs off the map into the sign's coloured left edge stripe; a two-line interchange gets a split stripe. The sign has an ink header (code plate, title, key figure) and a white body. The service notice bar sits between them. Actions are last.
5. **The list is a departures board** in its own full-width dark band (dashboard: the bottom 334px). Each column is a fixed number of flap cells. Group rows the way a station does ("now and next" above "arrived"). Long values continue on a second flap row. They are never truncated without the full value available.
6. **Navigation is a route strip.** Section names sit above a 4px grey line. Each has a tick below it, and the current section has an ink interchange ring. The mobile bottom bar uses the same strip.
7. **A key box and a "You are here" marker are always present.** The key is a white sign with a 2px ink border in a map corner. It explains every symbol, including `—` (not computed) vs `0.000` (a real zero). "You are here" marks the present: now on a time axis, or the current page in a book.
8. **Mobile reflows to strip maps.** A horizontal line diagram per topic (progress, today's goal) stacks vertically. The board shrinks to 2–3 short rows with larger cells (17px). Related items hang off a vertical ink line as interchange rings ("change here for…"). The primary action is a full-width ink button, above the fold.

## Signature details
- **The line runs into the sign.** The selected station's coloured line leaves the map and becomes the left edge stripe of the station information panel.
- **Disruption grammar:** a regression is a dashed line segment into the station, a red warning triangle and a short red "Service change" note on the map. A failure is a closed station: a red ring with a cross and a red-bordered notice box that names the error and the fix. Queued work is a grey dashed planned extension ending in a dashed ring beyond "now".
- **Split-flap cells:** each board character sits in its own dark cell with a hinge line across the middle. Progress shows as a row of lit yellow cells (17 of 28 lit = 62%).
- **Interchanges carry meaning:** a ring appears only where two families really meet, such as a dual-type creature or a run and its baseline.
- **Everything is signage:** white signs with a 2px ink border and 6px radius, ink header bands, and pill line badges. There are no shadows or cards.

## Components
- **Buttons:** 36px tall, 6px radius, Overpass 700 13px. Primary: ink fill, white text, `#2A3139` on hover. Secondary: white with a 2px ink border and `--zone` on hover. Destructive actions use the same shapes with the verb in the label. Red is kept for the state, not the button. Disabled: 2px **dashed** `--planned` border, `#7A828A` text, `not-allowed` cursor, and a sentence below saying why ("Cancel is unavailable: r-2291 finished at 02:14:02.").
- **Inputs and search:** 36px, 2px ink border, 6px radius, with a bold "Find" label to the left and an ink key-cap `kbd` for the shortcut.
- **Filters:** 30px chips with a 2px ink border. Pressed chips are ink with white text. Type or line filters carry an 18×6px swatch in the line colour.
- **Tables and lists:** the departures board (above). For small breakdowns inside signs, use a plain table with a 2px ink header rule, 1px `--rule` row rules, right-aligned tabular numbers and no zebra.
- **Navigation:** the route strip (layout move 6).
- **Status:** a station symbol plus words. Tick = done, hollow tick = in progress, dashed ring = planned/unknown, red crossed ring = closed/failed, dashed segment + triangle = disrupted. On the board: yellow = normal, dim = queued, `--flap-red` = failed or regression.
- **Charts:** drawn like a line on the map. A 3.5px line in the series' line colour, small white-filled stations at each data point, the normal range as a `--zone` band and the baseline dashed grey. The anomalous last segment is dashed and its point labelled in red. Axes are minimal: three y labels and first/last x labels.
- **Empty / loading / error:** say what is missing in words, in place ("Pinned comparisons: none yet."). Errors are notice signs with a red 8px left border: bold red "Closed: <object> failed.", the raw error in Overpass Mono, then the fix.
- **Focus:** 3px solid ink outline, 2px offset. On the dark board, use `--flap-ink`.
- **Collections and entity images:** each creature or product image sits on a **station plate**. This is a 58px square (196px in the detail sign) with a white face, a 2px ink border and 6px radius. A 6px top band in its line colour(s) is split half and half for two-family items. Seen-but-not-owned items put a silhouette (`filter: brightness(0); opacity: .55`) on a `--zone` plate with a grey border and the words "Seen, not caught". Unknown items are **unlabelled stops**: a dashed grey ring on a dashed "not yet surveyed" line with only the number in mono above. A failed image is swapped by `onerror` for a neutral `--zone` box with the name and "no image". Rarity escalates by tag construction, not colour: Common is plain grey text, Uncommon an outlined tag, Rare an ink-filled tag, and Mythic a black split-flap tag with yellow letters (`MYTHIC`). Stat blocks are line tracks: a 4px `--rule` track with scale ticks every 25, an 8px ink bar to the value ending in a terminus stub, and the number right-aligned. An evolution chain is a short branch line: solid to the current station, then dashed to an unknown dashed ring.

## Density & motion
- Base unit 4px. Signs pad 10–16px. The map keeps generous air between lines (at least 100px between parallel lines, so each line has label room on both sides).
- Board rows are 20px flaps on a 22px pitch. Cells are 13px wide at 16px type (desktop), or 17px at 20px type (mobile).
- Mobile: 16px side gutters. Strip diagrams scale with `viewBox` and `width:100%`. The fixed bottom route bar is 66px tall.
- Motion: none by default. If you animate anything, animate one thing that answers an action: flap cells flipping when a row's value changes (≤150ms per cell), or a train marker moving when progress is logged. No hover animations on the map.

## Don'ts
- Don't draw lines at arbitrary angles or as smooth curves. Only 0°, 45° and 90°, with rounded joins at most. A freeform squiggle is no longer a transit diagram.
- Don't place stations at meaningless positions. If position doesn't encode something, use a topological layout and say so in the cartouche.
- Don't use line colours for status, and don't use red for anything decorative. One red thing on a white map is the point.
- Don't turn the station sign into a rounded card with a shadow, or the board into a dark table with yellow text. Keep the per-character flap cells and the ink header band.
- Don't imitate a real transit authority's roundel, logo, or proprietary typeface. Use generic signage conventions (ticks, rings, badges).
- Don't put a label on the line itself or let labels collide. Every label gets a white halo, and space is planned before styling.
- Don't make the board uppercase or scroll it with a marquee. Wrap long values to a second flap row.

## Variants
Never changes: lines drawn only at 0°, 45° and 90° with stations whose positions mean something, the selected line running into the station sign, the split-flap departures board, route-strip navigation, and the key box with "You are here".

### Dark
A night map. Signs keep white bodies and ink headers, like lit signage, and the board is unchanged.

| Token | Light | Dark |
|---|---|---|
| `--paper` / `--zone` | `#FFFFFF` / `#F1F3F4` | `#15181C` / `#1D2126` |
| `--ink` / `--ink-2` | `#111418` / `#3C434B` | `#F2F4F5` / `#B7BEC5` |
| `--grey` / `--rule` / `--planned` | `#8A929A` / `#D5D9DD` / `#B4BAC0` | `#6B737C` / `#343A42` / `#4E565F` |
| `--line-blue/green/purple/brown/orange` | `#1466B8` `#13925A` `#7A3FA6` `#8E5625` `#E07A12` | `#4C9BE8` `#3DBE84` `#A77BD0` `#C08A55` `#F29A3E` |
| `--closed` | `#D7263D` | `#FF6B7A` |

Label halos become `#15181C`. Station rings get a `#15181C` fill and a `#F2F4F5` stroke. Give the board a 1px `#343A42` edge so it separates from the page.

### Density
- Denser: parallel lines 70px apart, 12px station labels, 18px flaps. Past six lines, split into zones.
- Roomier: 10px lines, 140px between parallel lines, a 600px station sign.

### Named aesthetics
- **Transit wayfinding** (variant): the direction as written. For another system change the line colours and the sign header colour (for example `#003B6F`), never an authority's roundel or typeface.
- **Airport departures** (variant): the board becomes the main view (under 15 rows), with yellow `#FFCC00` sign bands and ink text as section headers. Generic pictograms only.
- **Split-flap board** (variant): the board is the whole list view with 20px flaps, and changed values flip cell by cell (150ms per cell at most).
- **Highway signage** (variant): sign headers in highway green `#00674A` with white Overpass 800, shield-shaped line badges, stations numbered like exits.
