---
name: Horizontal panorama
feels_like: A Windows Phone panorama, where the next section's title is already sliding in from the right
use_for: consumer, marketing
fonts: Outfit, Azeret Mono
colors: #000000, #FFFFFF, #0050EF, #1F1F1F, #E51400, #F0A30A
---

# Horizontal panorama

## Essence
The content lives on a strip wider than the screen, and the screen is a window onto part of it. Sections sit side by side, each under a giant, very light lowercase title (Outfit 200 at 96px). At rest, the panorama is scrolled so that the previous section's title is cut off at the left edge and the next section's title is cut off at the right. That cut is the navigation: you can see there is more, and which way it is. Above the panorama, pivot headers in 48px Outfit 300 act as app navigation, with the current one white and the others faded. Content is built from flat, borderless, square tiles of solid colour on OLED black, and from plain rows of light type. Actions sit in a bottom app bar of round outlined glyph buttons with lowercase labels. It borrows from Windows Phone 7/8 and the Zune HD. The memorable move is the giant thin title sliced by the screen edge.
Feels like: a Windows Phone panorama, where the next section's title is already sliding in from the right.

## Use for / avoid for
- **Use for:** consumer apps with a handful of distinct, glanceable sections (today / library / stats), media and collection apps, launch or campaign pages that should feel like a place to explore sideways, and companion apps where each section is one "screen" of content.
- **Use for:** dashboards that have one focused object plus a few supporting sections (list, detail, log, pinned), as long as the list and the focused item both fit the first view.
- **Avoid for:** dense tools where everything must be compared at once. Content off to the side is out of sight, and people will not scroll sideways to find a column.
- **Avoid for:** long reading, forms with many fields, and anything printed. The panorama wants short sections.
- **Avoid for:** tiny screens where even one section doesn't fit. On phones, keep the panorama for tile panels and let the page scroll vertically.
- **Breaks down** when there are more than about six sections, or when a section needs more than one screen width. Split it or move it to its own pivot.

## Type
- **Outfit** (Google, variable 100–700), for everything except code.
  - Hero numerals: weight 100, 124–150px, line-height .95, tracking −0.04em (the selected run's score, a page count, a completion count).
  - Section titles: weight 200, 96px, line-height .95, tracking −0.035em, always lowercase, never wrapped (`white-space: nowrap`), allowed to run off the screen edge.
  - Pivot headers: weight 300, 48px desktop / 44px phone, tracking −0.02em, lowercase.
  - Tile numbers: weight 200, 28–64px.
  - List primary line: weight 300, 20px, line-height 1.15. The selected row goes to weight 600.
  - Body: weight 400, 16px, line-height 1.35–1.4.
  - Labels and secondary lines: weight 400, 12–14px.
  - App name: weight 600, 14px, uppercase, tracking .02em. It is the only uppercase text.
- **Azeret Mono** 400/500, 11–13px, only for logs, error strings and keyboard hints.
- **Scale:** 12 / 14 / 16 / 20 / 28 / 48 / 96 / 150px.
- **Case:** section titles, pivots, tile captions that are labels and app-bar labels are lowercase. Proper names, data values and sentences keep their normal case.
- **Numbers:** `font-variant-numeric: tabular-nums` everywhere (Outfit supports `tnum`). Right-align numeric columns.
- **Install:**
  - `<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..700&family=Azeret+Mono:wght@400;500&display=swap" rel="stylesheet">`
  - `@fontsource-variable/outfit`, `@fontsource/azeret-mono`
  - `next/font/google`: `import { Outfit, Azeret_Mono } from "next/font/google"`

## Color
| Token | Hex | Role |
|---|---|---|
| `--bg` | `#000000` | Page. True black, so tiles float with no chrome. |
| `--ink` | `#FFFFFF` | Titles, body, selected pivot. |
| `--ink-2` | `#A6A6A6` | Secondary lines, captions, unselected filter choices. |
| `--ink-faded` | `#666666` | Inactive pivot headers, empty-slot numbers, disabled labels. Large or disabled text only. |
| `--tile` | `#1F1F1F` | Neutral tile, app bar, search field. |
| `--tile-2` | `#333333` | Fill inside a neutral tile (running progress, unmet goal, image placeholder). |
| `--slot` | `#111111` | Empty slot (unknown, queued). |
| `--accent` | `#0050EF` | Cobalt. Selection, the primary action, the one live tile per screen. |
| `--fail` | `#E51400` | Failure only, as a tile fill. |
| `--fail-text` | `#FF5A45` | Failure as text on black. |
| `--warn` | `#F0A30A` | Regression / needs attention, as text on black. |
| `--r-uncommon` / `--r-rare` / `--r-mythic` | `#00827F` / `#0050EF` / `#D80073` | Collection rarity tiles only. |

Contrast: white on black 21:1; `#A6A6A6` on black 8.6:1 (AA body); white on cobalt 6.2:1 (AA); white on `#E51400` 4.7:1; `#FF5A45` on black 6.8:1; amber on black 9.9:1; `#666666` on black 3.7:1, so it is allowed only for 24px+ text or disabled controls. Status meanings: red = failed, amber = regression beyond the noise band, cobalt = selected or primary, never a status. Nothing decorative uses red or amber.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-sans: "Outfit", "Segoe UI", sans-serif;
  --font-mono: "Azeret Mono", Consolas, monospace;
  --color-bg: #000000;
  --color-ink: #FFFFFF;
  --color-ink-2: #A6A6A6;
  --color-ink-faded: #666666;
  --color-tile: #1F1F1F;
  --color-tile-2: #333333;
  --color-slot: #111111;
  --color-accent: #0050EF;
  --color-fail: #E51400;
  --color-fail-text: #FF5A45;
  --color-warn: #F0A30A;
  --color-uncommon: #00827F;
  --color-mythic: #D80073;
  --text-pivot: 48px;
  --text-title: 96px;
  --text-hero: 150px;
  --radius-*: initial; /* no radius anywhere except the round app-bar buttons */
  --spacing-tile: 8px;
  --spacing-gutter: 48px;
}
```
Section titles: `text-title font-extralight lowercase tracking-[-0.035em] leading-[.95] whitespace-nowrap`. Without Tailwind, link `tokens.css` (tokens, base type) and `style.css` (panorama, pivot, app bar, tilt).

## Layout moves
1. **Screen stack, top to bottom:** a 44px top line (uppercase app name, context in grey, search at the right), a 64px pivot row, the panorama (fills the rest), and a 72–80px app bar. The page itself never scrolls sideways; on desktop it doesn't scroll at all.
2. **The panorama is one horizontal scroller.** `overflow-x: auto; overflow-y: hidden; scroll-snap-type: x proximity` on the panorama element only, never on `body`. Inside it, a `display:flex; width:max-content` strip holds the sections with 48–56px gaps and a 48px gutter. Hide its scrollbar; it's keyboard-focusable (`tabindex="0"`, with an `aria-label` that says which way the rest is).
3. **Each section has a fixed width chosen for its content** (a list about 660px, a detail about 550–600px, a log about 540px, an empty state about 360px) and a giant lowercase title that is never wrapped.
4. **The resting position is part of the design.** Choose widths so that at the first view the left section's title is cut by about 40–50px, the focused section is fully in view, and 80–120px of the next section (its title's first letters and the start of its content) shows at the right edge. Set it with a snap anchor: an absolutely positioned 1px `scroll-snap-align:start` element at that offset, and `scrollLeft` set to it on load. Otherwise proximity snapping pulls the panorama back to a section start.
5. **Hanging titles.** In the section whose left edge is cut, indent the content 56–72px under the title so only the title is clipped, never the data.
6. **Pivots are app navigation; the panorama is the content of the current pivot.** Pivot row: `overflow:hidden; white-space:nowrap`, so on a phone the third pivot is also cut off at the right edge.
7. **Lists are rows led by a square tile.** A 44px tile holds the value that matters most (score, percent) and carries status by fill, followed by two lines of type and a few narrow right-aligned columns. No card, no divider lines, 6px between rows.
8. **The selected item's detail is its own section,** titled with its ID or name, opening with a hero numeral, then one wide live tile (cobalt, holding the chart) and a row of equal neutral tiles for its parts.
9. **Actions live in the bottom app bar,** centred, and act on the selected item. A disabled action stays in place, faded, with the reason as a sentence beside the buttons.
10. **Phone:** pivots at 44px across the top. Below, the panorama holds full-width panels (`width: calc(100vw - 60px)`) so the next panel's edge peeks 28px at the right. The panel itself scrolls vertically with the page. Primary action is a full-width white block, not a floating button.

## Signature details
- **The sliced title.** A 96px weight-200 lowercase section title cut by the right edge of the screen ("lo…" of *log*, "mi…" of *missing*), and the previous one cut at the left ("…ast night"). Both show on the first view.
- **Faded pivots.** `runs datasets models baselines settings` at 48px Outfit 300, the current one white, the rest `#666`.
- **Borderless square tiles on black,** with the caption bottom-left in 12px and a count badge top-right, like a live tile. There's no radius, no border and no shadow. Tiles are separated only by 6–8px of black.
- **Round app-bar buttons:** 40px circles with a 2px outline, a single-stroke glyph and a lowercase label underneath. On hover they fill white; the primary one is filled cobalt.
- **Marching dots:** five 4px cobalt squares sliding across the top edge of the screen while something loads, with the loading label in plain text in the top line.

## Components
- **Buttons.** App-bar button (round outline + label) for actions on the selected item; primary = cobalt-filled circle; secondary = outline; disabled = `#666`, `cursor:not-allowed`, and the reason written beside it ("Cancel is unavailable: r-2291 finished at 02:14:02."). On phones the primary action is a 54px full-width white block with black text and a small hint at the right; pressed, it turns cobalt.
- **Search.** A flat `#1F1F1F` field, 34px tall, no border, grey placeholder, a `/` key hint in Azeret Mono on `#333`. On focus the field turns white with black text.
- **Lists and tables.** Rows led by a 44px square tile (see Layout moves). Column labels are a single 12px grey line above the list, not a header bar. Long values wrap with `overflow-wrap:anywhere` on the secondary line.
- **Navigation.** Pivot headers (text only, lowercase). No sidebar, no tab bar, no icons in navigation.
- **Status.** Status is carried by the lead tile's fill plus a word: neutral tile = passed, red tile = failed, a `#333` fill rising to 62% = running, `#111` slot with a dash = queued, cobalt = selected. A regression is an amber Δ with the word "regression" under it.
- **Charts.** Live-tile charts: a cobalt tile, a 2px white line, the noise band as a 16% white rectangle, the baseline as a dotted white line, the last point as a 5px white dot with a label. No gridlines. The caption is inside the tile, 12px.
- **Metric tiles.** Neutral `#1F1F1F` tiles, 116px tall: name top-left, value at 34px weight 200, and baseline plus Δ along the bottom.
- **Empty, loading, error.** Empty is a section like any other: a 28px weight-200 sentence ("No pinned comparisons yet.") and a grey hint saying how to fill it. Loading uses the marching dots plus a plain label. An error sits directly under its row with a 4px red left rule, the error string in mono, and what to do next. `—` means not computed and `0.000` means a real zero; say so in a small legend under the list.
- **Focus.** `outline: 2px solid #fff; outline-offset: 3px`. Selected tiles get a 3px white inset outline, which is a different signal from focus.
- **Collections and entity images.** The index is a wall of 116px square tiles in rows of four, with 6px of black between them. Rarity is the tile's fill: common is the neutral `#1F1F1F` (quiet), uncommon teal `#00827F`, rare cobalt `#0050EF`, and mythic magenta `#D80073` with the word "mythic" in the badge corner. A key under the filters explains it. A caught entity shows the full art in the upper 66px, the number and name bottom-left, its types below, and the caught count as the top-right badge. A seen entity keeps its rarity fill and shows the art with `filter: brightness(0); opacity:.72` (a black silhouette on colour) and "seen, not caught". An unknown slot is a `#111` square with only its number in 32px weight 200 grey. A failed image is handled with `onerror`, which swaps in a `#333` box inside the tile with the name and "image unavailable". The detail section has a 216px rarity-coloured plate with the art, a two-column fact list, the description as body text, stats as 8px white bars on `#333` in two columns, and the evolution line as 64px tiles joined by thin chevrons. The next unknown stage is an empty slot showing only its number.

## Density & motion
- Base unit 4px. Tile gap 6–8px; gap between sections 48–56px; gutter 48px desktop, 16px phone.
- List rows 44px with 6px between them; tiles 44px (list), 116px (wall and metrics), 216px (detail plate).
- Phone: pivots drop to 44px, tiles to about 160×142 in pairs, the book live tile to about 190px tall, and the list primary line stays at 20px.
- **Motion:** (1) the panorama scrolls and snaps to sections; (2) tiles and rows tilt on press (`perspective(500px) rotateX(4deg) rotateY(-6deg) scale(.97)`, 120ms), because Metro tiles answered touch that way; (3) the marching loading dots. Nothing fades in on load. Honour `prefers-reduced-motion` for the dots.

## Don'ts
- Don't let the page body scroll sideways. Only the panorama element scrolls horizontally, and on a phone the document must fit at 360px.
- Don't wrap, shrink or truncate section titles to fit. The cut at the screen edge is the point. If a title is being cut in the middle of the focused section, change the section widths or the resting offset.
- Don't make titles heavy or tight. At weight 600+ this turns into a Swiss poster. Titles stay at 200–300.
- Don't round, border or shadow the tiles, and don't put gradients on them. Flat fill on black, separated by gaps.
- Don't give every tile the accent. Cobalt is for the selection, the primary action and one live tile. Everything else is neutral unless its colour means something (status, rarity).
- Don't put icons next to text labels outside the app bar, and never in the pivots.
- Don't hide essential data in off-screen sections. The first view must hold the list and the focused item; off-screen sections are for supporting material (log, pinned, missing).
- Don't fake depth with 3D carousels or parallax backgrounds. The only transform is the press tilt.

## Variants
Never changes: the horizontal panorama with a designed resting offset, giant light lowercase section titles cut by the screen edges, faded pivot headers, flat borderless square tiles, and the round-button app bar.

### Light
The direction survives inversion (Windows Phone had a light theme).

| Token | Light value |
|---|---|
| `--bg` | `#FFFFFF` |
| `--ink` | `#000000` |
| `--ink-2` | `#595959` |
| `--ink-faded` | `#A0A0A0` (large text only) |
| `--tile` | `#E5E5E5` |
| `--tile-2` | `#CCCCCC` |
| `--slot` | `#F2F2F2` |
| `--fail-text` | `#C41200` |
| `--warn` | `#A15C00` |

Keep cobalt tiles with white text. Selected-tile outline becomes 3px black. Chart tiles stay cobalt. The search field turns `#E5E5E5` and focuses to white with a 2px black outline. Watch that the light screen doesn't drift toward a white Swiss poster: titles stay weight 200 and must still be cut by the edges.

### Density
- **Denser:** section titles at 72px, pivots at 36px, list rows 36px with 32px lead tiles, wall tiles 96px, gutter 32px. Keep at least 80px of the next section visible.
- **Roomier:** titles at 120px weight 100, tiles 140px, 72px between sections; show fewer rows and push more into off-screen sections, but never the focused item.

### Named aesthetics
- **Metro / Windows Phone** (variant): this is the direction as written. For a stricter Windows Phone 8 look, take the accent from its own palette (cobalt `#0050EF`, magenta `#D80073`, lime `#A4C400`, teal `#00ABA9`) and use it on every live tile but not on list tiles. For Zune HD, swap the accent for magenta `#EC008C` with orange `#F58025` as a second hue for selection only, and set section titles at weight 100. Keep the sliced titles, the pivots and the resting offset in both.
- **10-foot / TV shelves** (variant): scale everything by 1.5 for viewing distance, make tiles 16:9 instead of square, and move focus with the arrow keys, drawn as a 4px white outline. Keep one horizontal strip per section and the cut title at the right edge.
