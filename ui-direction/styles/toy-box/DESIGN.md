---
name: Toy box
feels_like: A well-made toy that happens to be a real tool
use_for: consumer, tools
fonts: Bricolage Grotesque, Martian Mono
colors: #FFFFFF, #1E1B3A, #4DA8FF, #2DBE6C, #FF5A36, #FFC933
---

# Toy box

## Essence
Flat, saturated color blocks cut out with thick 3px ink outlines, like the parts of a good plastic toy. White ground, deep indigo-ink lines, and four toy colors that each mean one thing: sky is "selected / do this", grass is "done", tomato is "broken or worse", sunflower is "in progress". There are no gradients, no drop shadows and no offset "brutalist" shadows: shapes are separated by outline and color alone. Radius follows size: the big selected slab is very round (44px), insets are 26px, rows 22px, chips 8px, and buttons are full pills. Status is shown with wobbly sticker blobs (organic `border-radius`) that carry a drawn glyph, and the one number that matters gets a starburst sticker ("−0.041!") slapped on at an angle. The single typeface, Bricolage Grotesque, does all the work through its width and weight axes: condensed 800 for numbers and names, normal 400–600 for everything else. The most memorable move is the big sky slab for the selected item, with its list row plugged into it by a sky tab, so selection reads as one physical piece.

Feels like: a well-made toy that happens to be a real tool.

## Use for / avoid for
- **Use for:** consumer apps (habits, reading, learning, fitness, savings goals), onboarding, friendly internal tools with a small number of objects (≤ ~12 in a list), status boards for non-specialists.
- **Good at** progress, streaks, goals, "one thing needs you" moments. The sticker is a great way to flag a single anomaly.
- **Avoid for:** dense data (the outlines and 40px blobs cost space; 20+ rows get heavy), serious or grave contexts (medical results, legal, finance losses), long-form reading, and anything where playfulness would read as disrespect.
- **Breaks down** when every element gets a sticker or its own color: meaning collapses into a bag of candy. Keep colors semantic and stickers rare.

## Type
- **Bricolage Grotesque** (variable: opsz 12–96, wdth 75–100, wght 200–800) for every role. Use `font-optical-sizing: auto`. The width axis is the hierarchy tool: `font-stretch: 78–88%` + weight 800 for the wordmark, titles, big numbers and IDs; 100% width at 400–700 for body and labels.
- **Martian Mono** (wdth 75–112.5, wght 400–600) only for machine text: log lines and error messages, set at `font-stretch: 85%` so logs fit. (Substitution note: Bricolage has no monospace and logs must align.)
- `font-variant-numeric: tabular-nums` on `body`.

| Role | Size / line-height | Weight | Width |
|---|---|---|---|
| Hero number (score, pages) | 88 desktop / 44 mobile, lh 0.9, tracking -0.04em | 800 | 80% |
| Wordmark | 32–36 | 800 | 78% |
| Slab title | 36 / 1.02, tracking -0.02em | 800 (connective words 400) | 88% |
| Section title | 22–24 | 800 | 100% |
| List number | 26 / 1 | 800 | 85% |
| Body / row text | 15–17 / 1.3 | 500–700 | 100% |
| Small facts, captions | 12.5–14 | 400–700 | 100% |
| Sticker text | 18–21 / 1 | 800 | 85% |
| Log | Martian Mono 11 / 1.65 | 400 | 85% |

Case: sentence case everywhere. No uppercase labels, no letterspacing. Personality comes from weight and width, not from caps.

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&family=Martian+Mono:wdth,wght@75..112.5,400..600&display=swap" rel="stylesheet">
```
- npm: `@fontsource-variable/bricolage-grotesque` (use the `full.css` entry for the width axis), `@fontsource-variable/martian-mono`
- Next.js: `import { Bricolage_Grotesque, Martian_Mono } from "next/font/google"` with `axes: ["opsz", "wdth"]` / `axes: ["wdth"]`.

## Color
| Token | Hex | Role |
|---|---|---|
| `--white` | `#FFFFFF` | Page and inset background. |
| `--ink` | `#1E1B3A` | All text, every outline, primary (secondary-surface) button fill, current nav pill. |
| `--ink-soft` | `#4A4668` | Secondary text (facts lines, axis labels, disabled). 8.9:1 on white. |
| `--tint` | `#F1F0F7` | Hover fill, error-message well, highlight card. |
| `--sky` | `#4DA8FF` | Selection and the main action: selected slab, selected row, mobile primary button. |
| `--sky-pale` | `#D9ECFF` | Chart tolerance band, focused search. |
| `--grass` | `#2DBE6C` | Passed, done, streak days. |
| `--tomato` | `#FF5A36` | Failed, regression, bad Δ, the regression sticker. |
| `--sunflower` | `#FFC933` | In progress: running, partially met goal, a warning log line; also the focus halo and button hover. |
| `--m-violet` `#8F6BFF`, `--m-pink` `#FF8CC8`, `--m-teal` `#19BFB0`, `--m-wood` `#C9905C`, `--m-lime` `#A8D13F` | | Identity only: one per model/book/category, shown as a small shape chip or a spine. Never used for status. |

Text on every color block is ink, never white: ink on sky is 6.6:1, on grass 6.8:1, on tomato 5.3:1, on sunflower 10.7:1 (ink on white 16.5:1). White text is only used on ink. Status never relies on color alone: every blob carries a glyph (check, cross, pie, three dots) and every list row says the status in words.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-sans: "Bricolage Grotesque", "Trebuchet MS", sans-serif;
  --font-mono: "Martian Mono", ui-monospace, monospace;

  --color-white: #FFFFFF;
  --color-ink: #1E1B3A;
  --color-ink-soft: #4A4668;
  --color-tint: #F1F0F7;
  --color-sky: #4DA8FF;
  --color-sky-pale: #D9ECFF;
  --color-grass: #2DBE6C;
  --color-tomato: #FF5A36;
  --color-sunflower: #FFC933;
  --color-m-violet: #8F6BFF;
  --color-m-pink: #FF8CC8;
  --color-m-teal: #19BFB0;
  --color-m-wood: #C9905C;
  --color-m-lime: #A8D13F;

  --radius-chip: 8px;
  --radius-field: 14px;
  --radius-row: 22px;
  --radius-inset: 26px;
  --radius-slab: 44px;

  --shadow-*: initial;
}
```
Outline everything with `border-3 border-ink`. Without Tailwind, link `tokens.css` (`--stroke`, `--r-*`, color tokens).

## Layout moves
1. **One big slab plus a stack.** Desktop: a header row (wordmark, workspace chip, pill nav, search), then two columns: the selected item as a sky slab (~56% width, radius 44, 3px outline) and the list as a stack of outlined rows (~44%). Both fill the viewport height.
2. **Selection is physical.** The selected row turns sky and a sky "tab" (26px tall, outlined top and bottom) bridges the gap into the slab's edge, so the row and slab read as one piece. Don't use a thin highlight or a left border for selection.
3. **Inside the slab, white insets hold data**: a metrics table, the chart, and the log each sit in a white inset with a 3px outline and 26px radius. The slab itself carries the title, the hero number and the actions directly on sky.
4. **Rows are two lines**: line 1 = ID (800), model chip, item name (600); line 2 = small facts ("14m 02s, schedule, 02:00"). Status blob on the left, score and Δ right-aligned on the right. Extra state rows (error well, progress track) span under the text.
5. **Counts are chips**, not KPI cards: "5 passed" with a colored dot, one line beside the list title.
6. **Footnotes are outlined boxes at the bottom of the list**: a legend for `—` vs `0.000`, and an empty state drawn with a dashed outline.
7. **Mobile stacks blocks** with 16px margins: drawn cover + title side by side, a thin book track, then outlined blocks for streak and goal, the full-width pill button, a highlight card, "Up next" rows with colored spines, and a pill tab bar fixed at the bottom behind a 3px ink rule.

## Signature details
- **Sticker blobs for status**: 40px shapes with irregular `border-radius` (e.g. `58% 42% 55% 45% / 48% 56% 44% 52%`), filled with the status color, outlined 3px, holding a drawn SVG glyph (check, cross, pie for % done, three dots for queued). Queued uses a dashed outline on white.
- **The starburst sticker** on the one anomaly: a 28-point SVG star, tomato fill, 3px ink stroke, rotated about -9°, text like "−0.041!" in 800 condensed with a small "vs baseline" under it. One per screen.
- **Radius by size**: slab 44 → inset 26 → row 22 → field 14 → chip 8, with buttons always full pills. Never one radius for everything.
- **Fat, friendly chart**: 5px ink line, 6px white dots with 3px outline, a rounded pale-sky band for tolerance, and the bad point as a 10px tomato dot.
- **Identity shapes**: each model or book gets a color and a shape (circle, square, diamond, arch) shown as an 11px chip or a spine; these colors never mean status.

## Components
- **Buttons.** Pills, 48px (desktop) / 62px (mobile primary), 3px ink outline, 700–800 weight. Primary: ink fill with white text on colored backgrounds, or sky fill with ink text on white. Secondary: white fill. Hover: sunflower fill. Pressed: `transform: translateY(3–4px) scale(.96–.97)`, with a springy release `transition: transform .35s cubic-bezier(.3,1.8,.5,1)`. Disabled: transparent fill, dashed `--ink-soft` outline, `--ink-soft` text, `cursor: not-allowed`, and a sentence saying why right under it.
- **Inputs / search.** 46px tall, 3px outline, 14px radius, placeholder in `--ink-soft`; a keycap-like hint (`/`) with a 4px bottom border. Focus fills the field with `--sky-pale`.
- **Lists.** Outlined rows (radius 22) stacked with 6px gaps; hover `--tint`; selected sky with the bridge tab (Layout move 2).
- **Tables** live inside white insets: no vertical lines, 2px `--tint` row separators, head in 12px 700 `--ink-soft`. Δ values sit in small outlined chips; bad ones get tomato fill.
- **Navigation.** A pill-shaped segmented control with a 3px outline; current = ink pill with white text. Mobile: four pills in a bottom bar, current filled ink.
- **Status.** Sticker blob + words. Running adds a 12px outlined track with sunflower fill; failed adds a `--tint` well with the error in Martian Mono.
- **Charts.** See signature details. Axis labels 11px 600 `--ink-soft`, no gridlines, one dotted baseline.
- **Empty / loading / error.** Empty = dashed outline box with a plain sentence ("Pinned comparisons: none yet. Compare a run to pin it here."). Error = named object + cause + "Not a regression" where relevant. Unknown = `—`, explained in a legend box beside `0.000`.
- **Focus.** `outline: 3px solid ink; outline-offset: 3px` plus a 7px sunflower halo (`box-shadow: 0 0 0 7px var(--sunflower)`), the only box-shadow in the system.
- **Collections and entity images.** A collection is a sticker album. One big `--tint` sheet (44px radius, 3px outline) holds a grid of white pockets (22px radius). Each pocket has a printed dashed circle (`--line-off`) marking where its sticker goes. A caught entity's image is the sticker: it gets a die-cut ink outline from four stacked `drop-shadow(±2px 0 0 ink)` filters and a small random tilt (−5° to 5°), and it sits over that circle. The pocket's number sits top-left, and a grass blob top-right holds the times-caught count. Seen = the same image as a silhouette (`brightness(0)`, opacity .82), a greyed name, and a dashed "seen, not caught" tag. Unknown = a dashed pocket holding only a dashed circle with the number in it. A failed image swaps via `onerror` to a neutral `--tint` blob with a `--line-off` outline and "no picture", and the name stays. Rarity grows louder by step: common is plain grey text, uncommon an outlined chip, rare an ink chip with white text, and mythic a thicker 5px pocket outline plus an ink starburst sticker reading "mythic!" hanging off the corner. Types are identity chips (colour plus shape), never status colours. The selected entity turns its pocket sky and fills the sky slab: the image on a white disc, the name at 50px condensed 800, stats as fat outlined pill bars with ink fill, facts and drops in white insets, and the evolution line as outlined rings joined by a thick ink bar (dashed toward an unknown step).

## Density & motion
Base unit 4px; common gaps 6, 10, 14, 18, 24. Desktop rows ~62px; slab padding 24–28px; insets 12–16px. Mobile keeps the same outlines and radii; hit targets ≥44px, primary button 62px. Motion only answers a press: buttons squash down and spring back. No entrance animations, no bouncing idle elements, no confetti.

## Don'ts
- No gradients, no drop shadows, no offset hard shadows (the neobrutalist `4px 4px 0 #000`). Outlines and flat color only.
- Don't make everything the same rounded card. Big things very round, small things less so, buttons pills.
- Don't let colors drift into decoration: sky = selected/primary, grass = done, tomato = bad, sunflower = in progress. Identity colors are only for chips and spines.
- Don't put white text on sky, grass, tomato or sunflower; it fails contrast and looks cheap. Ink on color.
- Don't use emoji or icon-font icons for status or streaks. Draw the shapes (blobs, stars, pies) in SVG/CSS.
- Don't sprinkle stickers. One starburst per screen, on the thing that needs attention.
- Don't animate on load or scroll. Motion is a response to pressing.
- Don't use uppercase tracking or a second display face; Bricolage's width axis is the hierarchy.

## Variants
Never changes: the big sky slab with the selected row plugged into it by a bridge tab, 3px outlines on flat colour, radius by size, the four semantic toy colours, sticker blobs with drawn glyphs, and one starburst per screen.

### Dark
| Token | Light | Dark |
|---|---|---|
| `--white` (page / insets) | `#FFFFFF` | `#17152B` / `#221F3D` |
| `--ink` (text and outlines on the page) | `#1E1B3A` | `#F1F0F7` |
| `--ink-soft` | `#4A4668` | `#B9B5D0` |
| `--tint` | `#F1F0F7` | `#2B2750` |
| `--sky-pale` | `#D9ECFF` | `#233A5C` |

Sky, grass, tomato and sunflower are unchanged and keep `#1E1B3A` text and glyphs, so outlines are light on the page and dark on colour. The focus halo stays sunflower.

### Density
- Denser: 48px single-line rows (facts after the name), 28px blobs, radii 32/20/16/12/6, gaps 4/8/12.
- Roomier: 76px rows, 48px blobs, 36px slab padding.

### Named aesthetics
- **Neo-brutalism** (variant): radii scaled down to 16/12/10/6, still set by size. Leave out the offset `4px 4px 0 #000` shadow (ANTI-SLOP; this direction's own Don't).
- **Memphis** (variant): pink `#FF8CC8` and teal `#19BFB0` join the identity set, a black-and-white zigzag strip runs along the slab's top edge, and a squiggle or terrazzo pattern sits in the page margin only.
- **Corporate Memphis** (variant): draw product objects in outline instead of faceless big-limbed people, and no hero illustration inside the app. The trap is the stock lilac `#6C5CE7` illustration set.
- **Claymorphism** (variant): 2px outlines plus two inset shadows (`inset 0 3px 0 rgb(255 255 255 / .5)`, `inset 0 -4px 0 rgb(30 27 58 / .18)`), no outer blur. The trap is puffy blurred shadows on every card.
- **Kawaii** (variant): sky `#8FC9FF`, grass `#7ED9A6`, tomato `#FF7A8A`, sunflower `#FFE08A`, ink `#3B2B4F`, M PLUS Rounded 1c 800/500 replacing Bricolage (hierarchy by weight). No faces on status blobs.
- **Solarpunk** (variant): page `#F5F8F1`, ink `#1F2A22`, selection teal `#2F9C95`, done `#6BAA3A`, bad `#D9532B`, in progress `#F2B632`, leaves and arches as identity shapes.
