---
name: Constructivist
feels_like: A Rodchenko or Lissitzky poster that runs your data along one diagonal
use_for: marketing, consumer
fonts: Big Shoulders Display, PT Sans Narrow, PT Mono
colors: #E6E3DC, #D52B1E, #111111, #8C8A84, #D6D2C8
---

# Constructivist

## Essence
The screen is composed like a 1920s Soviet avant-garde poster: one dominant diagonal axis at −18° (rising left to right) organizes everything. A thick red band runs along that axis across the whole viewport and carries the screen's finding in huge condensed capitals ("summarize-v3 fell 0.041"). Directly under the band sits a black slab, a huge tilted rectangle whose top edge is the axis and whose left edge is the perpendicular cut (72°); the selected item's detail lives inside it. Circles act as anchors (a red disc for the one number that matters, halftone discs as printed texture), and bars are the only other ornament. Data that must be scanned (tables, lists, metrics, logs) stays horizontal, but is placed by the diagonal: tables butt against the slab, lists step along the cut, grids shear so their rows climb the axis. The most memorable move is the red band crossing the screen with the finding set on it, and the black slab hanging beneath it.

Feels like: a Rodchenko or Lissitzky poster that runs your data along one diagonal.

## Use for / avoid for
- **Use for:** launch and announcement screens, status pages with one headline finding, consumer screens with one hero object (a book, a creature, a campaign), marketing pages that should feel militant and confident rather than polished.
- **Works when** the screen has one statement short enough to ride the band (about 24 characters at 88px on a 1440px screen, about 26 characters at 33px on a phone).
- **Avoid for:** settings, long forms, multi-panel consoles, anything with no single message, and screens that must localize into long languages (the band has a hard length budget).
- **Breaks down** below about 360px wide (the band title and page circle collide), and when more than one thing wants to be the headline. Two red bands on one screen is noise.

## Type
Three families, each with one job.

| Role | Family | Size / line-height | Weight | Notes |
|---|---|---|---|---|
| Band headline (on the axis) | Big Shoulders Display | 88 / 1 (desktop), 33 / 1 (phone) | 900 | uppercase, tracking +0.01em, paper on red |
| Slab title (on the axis) | Big Shoulders Display | 30–44 / 1 | 800–900 | uppercase; ID prefix in PT Sans Narrow 700 18px, lowercase |
| Big figure (score, page count) | Big Shoulders Display | 64 / 0.9 (desktop), 44 (phone circle) | 800–900 | tabular |
| Brand | Big Shoulders Display | 44 / 1 (desktop), 32 (phone) | 900 | uppercase |
| Nav words, buttons | Big Shoulders Display | 22 (nav), 15–16 (buttons) | 700–800 | uppercase, buttons tracked +0.05em |
| Column heads, section labels | Big Shoulders Display | 13–15 / 1 | 800 | uppercase, tracked +0.04–0.06em; only where they label a column or a block |
| List IDs | Big Shoulders Display | 20–21 / 1 | 800 | |
| Body, table cells | PT Sans Narrow | 15–17 / 1.25–1.3 | 400, key word 700 | the narrow width is what lets 9 columns fit beside the slab |
| Small notes, captions | PT Sans Narrow | 12–14 / 1.25 | 400 | |
| Logs, error strings | PT Mono | 11–13 / 1.55 | 400 | only for text that is literally code or log output |

Scale: 12 / 14 / 16 / 20 / 28 / 40 / 64 / 88–104. Numbers everywhere use `font-variant-numeric: tabular-nums lining-nums`; numeric columns are right-aligned. Headlines are statements, never a single accented word. Uppercase belongs to Big Shoulders only; PT Sans Narrow is always sentence case.

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;700;800;900&family=PT+Sans+Narrow:wght@400;700&family=PT+Mono&display=swap" rel="stylesheet">
```
- npm: `@fontsource-variable/big-shoulders-display`, `@fontsource/pt-sans-narrow`, `@fontsource/pt-mono`
- Next.js: `import { Big_Shoulders_Display, PT_Sans_Narrow, PT_Mono } from "next/font/google"` (PT Sans Narrow needs `weight: ["400","700"]`, PT Mono `weight: "400"`).

## Color
| Token | Hex | Role |
|---|---|---|
| `--paper` | `#E6E3DC` | Page ground; text on red and on black. A grey stock, not cream. |
| `--paper-deep` | `#D6D2C8` | Hover rows, disc grounds under silhouettes. |
| `--red` | `#D52B1E` | The band, the one anchor circle, the primary button, failure and regression marks. |
| `--red-ink` | `#A8201A` | Red for small text on paper and button hover (5.7:1 on paper). |
| `--black` | `#111111` | The slab, bars, type on paper, selected rows. |
| `--tone` | `#8C8A84` | Halftone dots only. Never a flat fill. |
| `--tone-soft` | `#B9B5AC` | Row hairlines, the "image missing" disc. |
| `--graphite` | `#4A4843` | Secondary text on paper (7.1:1). |
| `--on-black-soft` | `#A9A59C` | Secondary text on the slab (7.7:1). |

Contrast: `#111111` on `#E6E3DC` is 14.7:1; `#E6E3DC` on `#111111` the same. `#E6E3DC` on `#D52B1E` is 3.9:1, which passes AA only for large text, so text on the red band must be at least 18.66px bold (the band headline and counts are far larger); small labels never sit on red. Red on paper (3.9:1) is only for shapes and large type; small red text uses `--red-ink`.

Status meaning: red means "needs attention": a failure, or a change outside its tolerance (the band itself carries that finding). Passed is plain black text, running is a black progress bar, queued is graphite, not computed is a graphite em dash. Nothing decorative is red; the halftone and the slab carry the decoration.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-display: "Big Shoulders Display", "Arial Narrow", sans-serif;
  --font-body: "PT Sans Narrow", "Arial Narrow", sans-serif;
  --font-mono: "PT Mono", "Courier New", monospace;
  --color-paper: #E6E3DC;
  --color-paper-deep: #D6D2C8;
  --color-red: #D52B1E;
  --color-red-ink: #A8201A;
  --color-black: #111111;
  --color-tone: #8C8A84;
  --color-tone-soft: #B9B5AC;
  --color-graphite: #4A4843;
  --color-on-black-soft: #A9A59C;
  --radius-none: 0;
  --spacing: 4px;
}
@utility axis { transform-origin: 0 50%; transform: rotate(-18deg); white-space: nowrap; }
@utility halftone { background: radial-gradient(circle, #8C8A84 0 1.6px, transparent 1.9px) 0 0 / 6px 6px; }
```
Without Tailwind, link `tokens.css`: it defines the same values plus `--axis: -18deg`, `--cut: 72deg`, `--slope: 0.3249` (tan 18°) and the `--halftone` backgrounds.

## Layout moves
1. **One axis, one cut.** Every non-horizontal edge is either the axis (−18°, rising to the right) or its perpendicular (72°, leaning right as it descends). Compute positions with slope 0.3249: a line on the axis through `(0, y0)` is `y = y0 − 0.3249·x`; a cut through `(x0, y0)` is `x = x0 + 0.3249·(y − y0)`. No other angles, and nothing tilted "a little".
2. **The band.** A red band about 130px thick (137px measured vertically) crosses the full viewport on the axis. On a 1440×900 screen its lower edge is `y = 456 − 0.3249·x`, so it enters at the left edge around y 320–456 and leaves through the top edge near x 980. The screen's finding is set on it in paper-coloured Big Shoulders 900, starting 34px from the left edge. Draw the band as an SVG polygon (or a rotated div) behind the content.
3. **The slab.** The selected item's detail lives in a black tilted rectangle directly below the band: its top edge is the band's lower edge, its visible corner sits at about (820, 190), and its left edge is the cut from that corner to (1051, 900). The slab's title rides the axis just inside its top edge. All other slab content is horizontal and placed in steps so each block clears the cut: blocks further down start further right (about 33px per 100px of height).
4. **Tables stay horizontal and anchor to the slab.** The list sits in the paper area under the band's left half, on a 14px black bar that runs into the slab and merges with it. The selected row turns black and its ground extends into the slab, so row and detail are one black mass. Rows are 34–38px, hairline-ruled, IDs in Big Shoulders.
5. **Secondary facts ride parallel bars.** Summary counts go on a thin black bar (about 48px) parallel to the band, just below it, in paper type on the axis. One short explanatory sentence sits horizontally in the triangle left between that bar and the table.
6. **Grids shear along the axis.** A grid of items keeps horizontal tiles, but each column steps up by `column pitch × 0.3249` (205px pitch, 66.6px step), so every row of the grid climbs the axis and sits parallel under the band. Read order is along the diagonal rows.
7. **Navigation** is a horizontal masthead in the top-left triangle above the band: brand, workspace, section words in Big Shoulders 700 22px, the current one underlined with a 6px bar. Search sits on its own line beneath it. On mobile, navigation is a black bottom bar of four words with the current one on a red block.
8. **Mobile reflow.** The band shrinks to 68px and carries the item's title (33px). The hero object (a drawn cover) sits above-left of the band, a red circle with the key number below-right of it, separated from the band by a 6px paper ring. Progress becomes a thick segmented bar on the axis. Lists step right along the cut (14px per item). Every rotated element lives inside an `overflow: hidden` container; the page body never scrolls sideways.

## Signature details
1. **The finding on the red band**, set huge on the −18° axis and crossing the whole screen. If the band isn't the first thing you see, the screen isn't this direction.
2. **The black slab hanging from the band,** with the detail title running along its top edge on the axis and the selected row's black ground running into it.
3. **One red disc for the number that matters** (the Δ, the page count), and halftone discs (6px dot screen) behind images and in empty areas as printed texture.
4. **Steps instead of alignment.** Blocks inside the slab, list items on a phone and grid columns step along the axis or the cut, so even horizontal content traces the diagonal.
5. **Bars as the only ornament:** a 14px bar over tables, a 6px bar under the current nav word, rarity shown as bar thickness, the goal as a thick segmented bar on the axis.

## Components
- **Buttons:** rectangular, no radius, Big Shoulders 800 uppercase 15–16px, tracked +0.05em. Primary: red ground, paper text. Secondary: 2px inset outline in the surrounding text colour. Disabled: grey text `#6E6B65`, grey outline `#45433F`, struck through, plus a sentence saying why ("Cancel is unavailable: r-2291 finished at 02:14:02."). The mobile primary is a red block with an arrow-point end (`clip-path` notch of 26px).
- **Inputs and search:** no box, a 3px black underline, placeholder in graphite, a black `kbd` chip for the shortcut. Focus turns the underline red.
- **Tables and lists:** horizontal, hairline rules `--tone-soft`, 14px black bar on top, 2px black rule under Big Shoulders column heads. Numeric columns right-aligned and tabular. Error text sits in its own row under the failed row, with a 6px red bar at its left and the error string in PT Mono.
- **Navigation:** words, not tabs or pills. Current item gets a 6px bar underneath (red on the main screen, black where red is already carrying data).
- **Status:** Failed = paper text on a red block. Regression Δ = paper text on a red pill. Running = text plus a 44px black progress bar. Queued = graphite text. Not computed = graphite `—`, and a legend line states that `—` is not computed while `0.000` is a real zero.
- **Charts:** on the slab, drawn in paper: 3px polyline with square point markers, dashed baseline, the tolerance band as a halftone field, and a thick red ring around the point that matters. Axis labels are PT Sans Narrow 12px; a one-line caption explains the band.
- **Empty, loading, error:** plain sentences in graphite with a 3px tone bar at the left ("Pinned comparisons: none yet."). Errors say what happened and what to do.
- **Focus:** 3px red outline offset 2px on paper; paper-coloured outline on the slab and on red grounds.
- **Collections and entity images:** each entity is a horizontal tile (72px disc plus text) on the sheared grid. Caught entities sit on a halftone disc (dots over `--paper-deep`) in full colour. Seen-but-not-caught entities are a black silhouette (`filter: brightness(0)`, opacity .82) on a plain paper-deep disc, labelled "seen, not caught". Unknown entities are an empty outlined circle (2px black ring) with only the number inside. A failed image load swaps (via `onerror`) to a flat `--tone-soft` disc with the name and "image missing"; never an emoji. Rarity is bar thickness under the text: Common 2px (graphite label), Uncommon 5px, Rare 10px. Mythic breaks the pattern: the entity sits on a 112px solid red disc (silhouette or art in black/full colour on red) that bulges out of its grid row, and "MYTHIC" is set in Big Shoulders 900 30px red on the axis below it, led by a 16px red bar. The key shows the red disc. The selected entity's tile inverts to black. Its detail sits on the slab: the name on the axis, the art on a 196px paper disc with a halftone screen, facts as a two-column definition list, stats as 10px paper bars on a dark track with the number beside, the evolution line as discs joined by solid paper arrows with the unknown stage as an outlined circle.

## Density & motion
Base unit 4px; common steps 8 / 16 / 24 / 32. Table rows 34–38px on desktop, list items about 56px on mobile. Desktop content keeps a 32px outer margin, mobile a 16px gutter. The composition is fixed to the viewport on desktop (the band and slab are drawn for 1440×900; recompute the lines for other sizes from the formulas in Layout moves). No motion is required. If you add one, make it the answer to an action: after "Log pages", the new segments fill along the goal bar left to right in 200ms. Nothing slides in on load.

## Don'ts
- Don't tilt things "a bit". Only −18° and 72°. Random small rotations turn this into a scrapbook.
- Don't rotate text that must be scanned: tables, metrics, logs, list items and button labels stay horizontal. Only headlines, titles and short counts ride the axis.
- Don't fall back to an orthogonal grid with a big headline and a coloured column. Without the band crossing the whole screen and the slab's slanted edges, this is a different direction.
- Don't add more red. One band, one anchor disc, the primary button and genuine failure or regression marks. Red decoration would make failure unreadable.
- Don't use real photographs of people, hammers, sickles, stars or any political emblem. Halftone discs and bars carry the period; the content is the subject.
- Don't round corners, add soft shadows or gradients. Hard insets and rings are fine; halftone is the only texture.
- Don't let the band headline exceed its length budget. Rewrite the finding shorter rather than shrinking the type below 72px on desktop.

## Variants
Never changes: the −18° axis and its 72° cut, the red band carrying the finding across the full width, the black slab hanging from it with its title on the axis, horizontal tables placed against the slab, and steps along the axis instead of flush alignment.

### Dark
The paper and the slab swap roles: the page becomes black and the slab becomes paper, so the band still sits on the boundary between them.

| Token | Light | Dark |
|---|---|---|
| `--paper` (page ground) | `#E6E3DC` | `#161514` |
| `--black` (slab, type on page) | `#111111` | `#E6E3DC` |
| `--red` (band, disc, primary) | `#D52B1E` | `#E03A2C` |
| `--graphite` (secondary on page) | `#4A4843` | `#A9A59C` |
| `--tone` (halftone dots) | `#8C8A84` | `#5E5B55` |
| `--on-black-soft` (secondary on slab) | `#A9A59C` | `#4A4843` |

Band text stays paper-coloured `#F2EFE8`. Focus becomes paper-coloured on the page and red on the slab.

### Density
- Denser: a 72px band headline, 30px table rows, 14px cells, and the slab corner moved right to x 900 so the table gains a column.
- Roomier (launch, marketing): a 120px headline over two lines on a 220px band, the slab reduced to the bottom-right third, and five list rows at most.

### Named aesthetics
- **Constructivism** (variant): this is the direction as written. For a Lissitzky "Proun" lean, replace the black slab with a mid-grey `#8C8A84` slab and add one 1px black construction line on the cut. For a Rodchenko photomontage lean, put a duotone photograph (`filter: grayscale(1) contrast(1.3)` with `mix-blend-mode: multiply` over `--paper-deep`) inside the anchor disc. Keep the axis, the band and the slab.
