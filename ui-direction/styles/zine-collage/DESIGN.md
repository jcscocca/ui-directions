---
name: Zine collage
feels_like: A riso-printed zine someone pasted together at 2 a.m.
use_for: consumer, marketing
fonts: Anton, Courier Prime, Permanent Marker
colors: #F7F7F4, #FF48B0, #0078BF, #FFE800, #1B2A4A, #C8126F
---

# Zine collage

## Essence
The screen is a zine page: bright paper with riso ink printed straight onto it, and pieces of other paper pasted on top. There are exactly three kinds of mark, and each has one job. **Riso ink** (fluorescent pink, blue, yellow) prints the pictures: halftone fields, chart lines, cover art, and highlighter. Where two inks cross they multiply. **Typewriter ribbon** (a dense blue-black) types every piece of text a person has to read, in Courier Prime. **Marker pen** (Permanent Marker, pink) scrawls the one or two notes that point at trouble. Containers are real paper objects: a typed sheet held on with tape, a halftone print clipped from somewhere, a ruled index card, a torn till receipt, strips of embossed label tape for buttons, round stickers for navigation. Pieces tilt, but only their paper backing does. The text inside stays level, so the tool is still scannable. The most memorable move is the headline cut from separate slips of paper with the second ink printed 2px off register, stating the finding in words.

Feels like: a riso-printed zine someone pasted together at 2 a.m.

## Use for / avoid for
- **Use for:** consumer apps with personality (reading, music, hobby, food, events), community and fan products, campaign or launch pages, internal tools where the team wants energy and the data volume is modest (one list, one detail, one chart).
- **Works on mobile** as a single zine page: a printed cover, a taped-in slip, a stamped counter, a torn list.
- **Avoid for:** dense enterprise tables (more than about 10 columns or 20 rows), finance, health or legal screens where playfulness reads as careless, and anything that must look official.
- **Breaks down** when every element is tilted, taped and scribbled on. Then nothing is emphasised and it becomes a costume. It also breaks down in dark mode; the whole idea is ink on paper.

## Type
- **Anton** (400, the only weight) is cut-out lettering: headline slips, the product mark, section titles printed on coloured slips, sticker labels, label-tape buttons, large readouts. Always uppercase except large numerals.
- **Courier Prime** (400, 700, italic 400) is the typewriter. It carries all body text, tables, IDs, logs, captions, hints and form text. Bold is for column heads, IDs and the key word in a footnote. Italic is only for quotations.
- **Permanent Marker** (400) is handwriting. Use it for one to three short notes per screen (a regression note, an unfinished goal, an empty spot), never for anything a person has to scan.
- `font-variant-numeric: tabular-nums` on `body`. Courier Prime is monospaced, so typed columns align anyway. Right-align numeric columns.

| Role | Family | Size / line-height | Case |
|---|---|---|---|
| Headline slip (the finding) | Anton | 54 / 0.92 | UPPERCASE |
| Readout numerals | Anton | 76 / 0.9 desktop, 44 mobile | as data |
| Product mark (one letter per slip) | Anton | 38 desktop, 28 mobile | UPPERCASE |
| Section slip, detail title | Anton | 22–25 / 1.05 | UPPERCASE for slips, as data for titles |
| Sticker nav, label tape | Anton | 15–17, tracking 0.03em (stickers), 0.14–0.18em (label tape) | UPPERCASE |
| Body, table cells | Courier Prime | 12–14 / 1.35 | Sentence / as data |
| Footnotes, captions, log | Courier Prime | 11.5 / 1.35 | Sentence |
| Marker note | Permanent Marker | 15–20 / 1.1 | as written, lowercase feel |

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Permanent+Marker&display=swap" rel="stylesheet">
```
- npm: `@fontsource/anton`, `@fontsource/courier-prime`, `@fontsource/permanent-marker`
- Next.js: `import { Anton, Courier_Prime, Permanent_Marker } from "next/font/google"` (Anton and Permanent Marker `weight: "400"`; Courier Prime `weight: ["400","700"], style: ["normal","italic"]`).

## Color
| Token | Hex | Role |
|---|---|---|
| `--paper` | `#F7F7F4` | The zine page. Riso grounds print directly on it. |
| `--stock` | `#FFFFFF` | Pieces pasted on top: typed sheets, cards, slips, receipts, stickers. |
| `--riso-blue` | `#0078BF` | Main print ink: chart line and points, halftone, cover art, primary label tape, big score numerals, nav sticker outlines. |
| `--riso-pink` | `#FF48B0` | Second print ink: misregistration layer, marker circles, the regressed data point, index-card header rule. Strokes and fills only, never small text (2.9:1). |
| `--riso-yellow` | `#FFE800` | Highlighter and tape: the selected row, the noise band, the current nav sticker, tape pieces (at 62% alpha, multiply). |
| `--ribbon` | `#1B2A4A` | Typewriter ribbon: all readable text, table rules, the secondary label tape. |
| `--ribbon-faded` | `#56607A` | A dry ribbon: `—`, queued, placeholders, disabled buttons. |
| `--marker` | `#C8126F` | Marker pen text: failure stamps, error lines, regression Δ, hand notes about trouble. |

Contrast: ribbon on stock 14.1:1, on paper 13.1:1, on yellow 11.4:1. Ribbon-faded on stock 6.3:1. Marker on stock 5.6:1. Riso blue on stock 4.7:1 (fine for body sizes, used mostly large). White on riso-blue label tape 4.7:1. Pink and yellow are never text colours.

Status meaning: **pink family means trouble**. A marker circle means regression beyond tolerance. A pink rubber stamp means failed. Pink text is an error or a note about one of those. Nothing decorative uses pink except the misregistration fringe of the headline, and the headline is always the finding. **Yellow means selected or held in place**: highlighter, tape, current sticker. Passed is plain typed text. Running is typed text plus a tiny halftone bar. Queued and not-computed are the faded ribbon.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-cut: "Anton", Impact, sans-serif;
  --font-typed: "Courier Prime", "Courier New", monospace;
  --font-marker: "Permanent Marker", cursive;

  --color-paper: #F7F7F4;
  --color-stock: #FFFFFF;
  --color-riso-blue: #0078BF;
  --color-riso-pink: #FF48B0;
  --color-riso-yellow: #FFE800;
  --color-ribbon: #1B2A4A;
  --color-ribbon-faded: #56607A;
  --color-marker: #C8126F;

  --text-foot: 11.5px;
  --text-typed: 13px;
  --text-card: 15px;
  --text-sticker: 17px;
  --text-slip: 30px;
  --text-head: 54px;
  --text-readout: 76px;

  --radius-*: initial;
  --radius-none: 0;
  --radius-sticker: 999px;
  --spacing: 4px;
}
```
Use `font-typed` as the body font. Radii are 0 except stickers (pill) and stamps (circle). Tilt, tape, halftone and torn edges are CSS in `tokens.css` (`--halftone`, `--tape`, `--lift`, `--edge`, `--tilt-s`, `--tilt-m`); without Tailwind, link `tokens.css` and copy the `.piece`, `.tape` and `.misreg` rules from the specimens.

## Layout moves
1. **A page with pasted pieces, not a grid of panels.** Lay out a normal CSS grid underneath (desktop: a 872px main column and a ~480px side column, 34px gap). Then give each region a different paper object and let a few overlap by 10–40px: the headline slips overlap the top edge of the chart print; tape bridges a piece and the page.
2. **Tilt the paper, not the text.** Every piece is `position: relative; isolation: isolate` with a `::before` backing that carries the paper colour, edge and a rotation of ±0.4° to ±2°. The content stays at 0°. Small, short things (stickers, stamps, headline slips, label tape) may rotate as a whole, up to ±5°.
3. **The finding goes first, as a headline.** Top-left, cut from two or three slips of paper, the sentence that matters ("summarize-v3 slipped 0.041"). A short typed standfirst on its own slip beside it gives the numbers.
4. **Riso grounds sit under the pieces.** Two or three large halftone fields (pink or blue dots on a 5–6px grid, 35–55% opacity, multiply, rotated a few degrees) are printed on the page before anything is pasted. They set the rhythm at thumbnail size and must never sit behind small text without a paper piece in between.
5. **Lists are typed sheets.** A real `<table>` in Courier Prime 12–13px on a white sheet, a dashed ribbon rule under the header, 26px rows, no cell borders. The selected row is highlighted yellow edge to edge. An error attaches to its row as a typed sub-row in marker pink. Footnotes (typed, below a dashed rule) explain symbols.
6. **The selected item is a ruled index card.** A pink header rule 58px from the top, pale blue rules every 24px below it, the ID and title above the pink rule, big Anton readouts, then the breakdown typed onto the rules. Actions are label-tape strips pasted just under the card.
7. **Navigation is a row of round stickers** at the top (desktop) or bottom (mobile). The product mark is one letter per slip.
8. **Mobile is one zine page.** A printed cover (drawn in CSS/SVG) beside typed facts, a full-width progress strip, a stamped counter next to a small typed slip, a full-width label-tape primary button above the fold, then a taped quote slip and a torn-edge ruled list. Stickers become the bottom nav on a paper strip with a dashed top rule.

## Signature details
1. **Misregistered headline.** The headline text is riso blue (or ribbon on a yellow slip). A `::after` copy with `content: attr(data-ink)` sits `left: 2px; top: 1px` in fluorescent pink with `mix-blend-mode: multiply`. The span must be `display: inline-block` and `white-space: nowrap` so the two layers match.
2. **Halftone print with a marker circle.** The chart is a clipped print: white stock, a blue halftone dot field knocked back to 20% by a white overlay, a slightly irregular `clip-path` edge, tape on two corners. The noise band is a flat yellow band multiplied under the line. The offending point is printed pink under blue, 1.5px off. A pink hand-drawn circle (an open cubic path, 3px, round caps) surrounds it, with a marker arrow to a two-line scrawl stating the finding.
3. **Label-tape buttons.** Actions are embossed label strips: Anton uppercase, tracking 0.14em, white letters with a 1px dark and 1px light text-shadow (the emboss), notched ends via `clip-path`, a slight tilt. Primary is blue tape; secondary is ribbon-black tape.
4. **Rubber stamps for state.** Failed is a pink bordered Anton stamp at −4°. A streak or count is a round double-ring stamp in blue with multiply.
5. **Torn paper for things that run on.** Logs are a till receipt with zig-zag `clip-path` top and bottom, a centred bold header, dashed rules and "end of tail". Lists that continue (up next) are torn off a ruled notebook.

## Components
- **Buttons:** label tape as above, 34–36px tall on desktop, 54px on mobile, full width there. Hover darkens (`filter: brightness(.86)`), active moves down 1–2px. *Destructive:* ribbon-black tape whose label names the loss, plus a typed confirmation line. *Disabled:* no tape at all, just a 1.5px dashed faded-ribbon outline where the label would be ("the label was peeled off"), faded text, `cursor: not-allowed`, and a typed reason below ("Can't cancel: r-2291 already finished at 02:14:02.").
- **Inputs and search:** a small paper slip with a bold typed label, a dotted ribbon underline instead of a box, and the shortcut as a hand-circled key (a 1.5px ribbon circle rotated −6°). Focus fills the field yellow and turns the underline solid 2px.
- **Tables / lists:** typed sheet as in Layout moves. Hover rows get a 8% blue wash. Numbered lists use real ordinals only (reading order, steps).
- **Navigation:** round stickers with a white die-cut border (`box-shadow: 0 0 0 1.5px ink, 0 0 0 5px white, 0 0 0 6px edge`), each tilted differently. Current is yellow with ribbon text, tilted −4° and scaled 1.08.
- **Status:** passed is typed text; running is typed text, a 36×9px halftone bar, and the percentage; failed is the pink stamp; queued is faded ribbon. Regression is a marker circle around the Δ, not a colour fill.
- **Charts:** inline SVG, 3px riso-blue line, 4px dots, typed axis labels at 11.5px, a flat yellow tolerance band, a dashed ribbon baseline, labels at the right end of each reference line. One pink marker circle per chart at most.
- **Readouts:** Anton 76px (44px mobile). Good or neutral numbers print in riso blue; a regressed Δ prints in marker pink. A short marker note beside it says why ("twice the noise band").
- **Empty / loading / error:** empty is a dashed "glue spot" where a piece would be pasted, with a typed title and a marker line ("none yet. compare with baseline, then pin it here."). Error is a typed marker-pink line naming the object and cause, followed by what to do in ribbon. Unknown is `—` in faded ribbon, explained in a typed footnote; zero is `0.000`.
- **Collections and entity images:** a collection is a collage, never a grid of equal cards. Place the clippings absolutely, in rough reading rows so number order stays findable. Size them by rarity (common 170px wide with 66px art, uncommon 190/80, rare 236/108, mythic 262/130), let neighbours overlap 2–10px on padding only, tape about a third of them, give a few a torn bottom edge (`clip-path` zig-zag on the backing), and cut a couple from other stock (newsprint `#E4E3DC`, pale blue `#DCEBF4`). Each clipping has its own backing tilt (±0.8–2°), the image on a 4px blue halftone patch with `mix-blend-mode: multiply` so the art looks printed in, typed number and details, the name in Anton. The selected one is pasted on yellow stock with a tape strip, and its image gets a white mat so the yellow doesn't tint it. A large version is a clipped halftone print with a small yellow riso sun multiplied in one corner. Never let a big ink field sit under the art: it recolours it. *Seen but not owned:* `filter: brightness(0)` at 82% opacity, the name, and "seen, not caught" in typed italic. *Unknown:* no paper at all, just a doubled pencil outline drawn on the sheet (1.2px at 70% ribbon-faded, plus a second 1px line rotated 0.8°), with the number and "not seen yet" in faded marker. A marker note beside the last ones counts what's missing ("3 still out there"). *Broken image:* `onerror` adds `.broken`, which hides the `<img>` and shows a plain bordered box with a faint X and "Name / no image". *Rarity is how many ink drums the label went through:* common is a faded typed word, uncommon is an outlined blue Anton label, rare is a yellow label with a blue offset (2 inks), and mythic is a larger yellow label with blue text and a misregistered pink layer (3 inks). *Stat blocks:* typed name and right-aligned value, then a ribbon-outlined bar with solid riso-blue fill and 10% tick marks, labelled "out of 100".
- **Focus:** `outline: 2.5px solid var(--ribbon); outline-offset: 3px` plus a yellow background, like a highlighter swipe. On label tape the clip-path is removed on focus and the outline is yellow (or ribbon on mobile) so it isn't clipped.

## Density & motion
- Base unit 4px. Typed rows 26px, index-card rules 24px, notebook rules 26px. Pieces sit 12–20px apart; overlaps are deliberate and never cover data.
- Desktop fits 1440×900 without scrolling: headline and print about 350px, typed sheet about 400px, side column card + tape + receipt.
- Mobile: 16px side margins, cover 140×208px, touch targets ≥ 44px, sticker bottom nav 70px, primary button visible above the fold.
- Motion: none by default. Label tape presses down 1–2px on `:active`. If you add one moment, let a newly pasted piece settle from 3° to its resting tilt in 180ms. Nothing wobbles on hover.

## Don'ts
- Don't rotate text that has to be scanned (tables, logs, metric rows, forms). Rotate the paper behind it.
- Don't tape, tilt and scribble on everything. One headline, one marker circle, two or three tape pieces per piece at most, one stamp per state.
- Don't use pink for decoration or for "down but within tolerance". Pink is trouble.
- Don't use Permanent Marker for data, labels, or more than three notes on a screen. It is the loudest voice.
- Don't add drop shadows beyond the 1px paper lift, gradients beyond halftone and ruling, rounded cards, or glassy effects. Paper is flat.
- Don't fake grunge with noise images, coffee stains, or distressed fonts. The texture comes from halftone, misregistration and torn edges, drawn in CSS/SVG.
- Don't set body text in Anton or headlines in Courier. The cut/typed split is the typographic system.
- Don't use emoji, clip-art icons or stock doodles. Stickers carry words; stamps carry words or numbers.

## Variants
Never changes: pasted paper pieces over printed riso grounds, tilting the paper but not the text, the cut-slip misregistered headline that states the finding, typed-sheet lists, the index-card detail, label-tape buttons, and the three marks (riso ink, typewriter, marker) each with one job.

### Dark
This direction doesn't survive inversion: riso inks multiply into paper and vanish on a dark ground. The closest honest version is screen-printing on black stock:

| Token | Light | Dark |
|---|---|---|
| `--paper` | `#F7F7F4` | `#1A1F2E` |
| `--stock` | `#FFFFFF` | `#FFFFFF` (pasted pieces stay white, and text on them is unchanged) |
| halftone grounds | multiply at 35–55% | `mix-blend-mode: screen` at 25–35% |
| `--riso-pink` / `--riso-blue` on the page | `#FF48B0` / `#0078BF` | `#FF6FC2` / `#3FA3E8` |

Everything readable stays on white pieces. Nothing typed sits on the dark page.

### Density
- Denser: 22px typed rows at 12px, backing tilts of ±0.4° only, overlaps 0–10px. Past about 20 rows, use another direction.
- Roomier: 30px rows at 14px, pieces 24–32px apart, a 72px headline.

### Named aesthetics
- **Risograph** (variant): the direction as written. Other drum pairs: fluorescent orange `#FF7477` with teal `#00838A`, or purple `#765BA7` with yellow; three inks at most.
- **Photocopy zine** (variant): toner `#111111` on `#F2F2EF`, halftone on an 8px grid, marker in black, yellow only as a highlighter on the selected row.
- **60s psychedelic poster** (variant): orange `#FF6A13` against violet `#7B2FBE`, acid yellow `#E8FF3A` highlighter, headline slips in Shrikhand on a wavy backing. Scanned text stays Courier Prime; trouble stays marker `#C8126F`.
- **Scrapbook** (variant): paper `#F3F5F2`, softer inks (`#F5A3C7`, `#6FA8DC`), washi tape, Caveat for the marker notes.
- **Grunge / Emigre / David Carson** (partial): overlapping headline slips in two sizes of Anton at different tilts, torn stock, photocopy black. Missing: type that fights itself until illegible, which stays out of anything scanned.
- **Anti-design** (partial): unrelated stocks colliding and Tinos set huge beside Anton. Missing: real breakage of UI conventions, which no direction does.
