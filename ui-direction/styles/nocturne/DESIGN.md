---
name: Nocturne
feels_like: A concert programme or a late-night hotel bar menu
use_for: marketing, consumer, reading
fonts: Cormorant, Jost, DM Mono
colors: #0F1B2D, #172640, #C9A45C, #EFE8D8, #B0414B, #E08A92
---

# Nocturne

## Essence
Evening print: a concert programme, an invitation card, the menu in a hotel bar after ten. The page is deep ink blue, never neutral black, and everything on it is drawn in gold hairlines and set in ivory. A double gold rule frames the whole viewport, with small Art-Deco fans in the corners. The composition is symmetric: a centred masthead in large Cormorant italic, a centred line of small letterspaced section names separated by gold diamonds, and three columns like a programme. The item that matters sits in the centre on a slightly lighter "stage", with its key number set enormous in light italic. Supporting material sits either side, left-aligned. Colour is almost absent: gold marks structure and the primary action, and garnet marks the one thing that went wrong. The most memorable move is the centred, framed composition with one huge italic numeral at its heart.

Feels like: a concert programme or a late-night hotel bar menu.

## Use for / avoid for
- **Use for:** evening and leisure consumer products (reading, music, film, dining, events, travel), premium or ceremonial moments (a result, a booking confirmation, a year in review), marketing pages for considered products, and small tools where one number or one item is the point.
- **Works on mobile** as an invitation card: one framed card, a centred title, one ring or figure, a gold button.
- **Avoid for:** dense operational tools with many equal items, forms with many fields, anything used in bright daylight or by people who need maximum legibility, and products whose tone is playful or urgent.
- **Breaks down** when there is no centrepiece. Symmetry around nothing becomes a costume. It also breaks down with more than two accent colours or when gold is used for body text.

## Type
- **Cormorant** (400, 500, 600; italic 300, 400, 500) is the display voice: the masthead, item titles, big numerals (italic 300), sub-headings (italic 500), times in a programme listing (italic), row labels in tables, pull quotes, empty-state sentences.
- **Jost** (300, 400, 500) is the working voice: body text, table figures, meta lines, inputs, and the small letterspaced capitals used for labels and buttons.
- **DM Mono** (300, 400) only for logs and error strings. It is a quiet, light mono that sits beside Jost without shouting. (A small addition to the two-family system because logs need true monospace.)
- Figures: `font-variant-numeric: tabular-nums lining-nums` on `body`. Numbers in tables use Jost, right-aligned. Big display numbers use Cormorant italic.

| Role | Family | Size / line-height | Style |
|---|---|---|---|
| Hero numeral | Cormorant italic 300 | 124–132 / 0.82, tracking −0.02em | as data |
| Masthead | Cormorant italic 400 | 56 / 1 | Title case |
| Item title | Cormorant italic 400 | 30 / 1.1 (38 on mobile) | as data |
| Secondary numeral / Δ | Cormorant italic 400 | 34 | as data |
| Sub-heading | Cormorant italic 500 | 20 / 1.1 | Sentence |
| List item name | Cormorant 600 | 19 / 1.2 | as data |
| Tagline, notes, empty states | Cormorant italic 400 | 17–19 | Sentence |
| Body, figures, meta | Jost 400 | 12–15 / 1.45 | Sentence |
| Labels, nav, buttons | Jost 500 | 11–12.5, tracking 0.18–0.24em | UPPERCASE |
| Log | DM Mono 300 | 11 / 1.7 | as data |

Letterspaced caps are for navigation, column headings, field labels and buttons only. Never set IDs in caps (wrap them in a span with `text-transform: none`). Never set a sentence in caps.

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet">
```
- npm: `@fontsource/cormorant`, `@fontsource/jost`, `@fontsource/dm-mono`
- Next.js: `import { Cormorant, Jost, DM_Mono } from "next/font/google"` (Cormorant `weight: ["300","400","500","600"], style: ["normal","italic"]`; Jost `weight: ["300","400","500"]`; DM Mono `weight: ["300","400"]`).

## Color
| Token | Hex | Role |
|---|---|---|
| `--ink` | `#0F1B2D` | The room: page background. A blue ink, never black. |
| `--midnight` | `#172640` | The stage: the centrepiece panel, the selected list row, a book cover. |
| `--midnight-2` | `#1E3150` | Hover on midnight surfaces. |
| `--gold` | `#C9A45C` | Hairlines, frame, corner ornaments, labels, section markers, the primary button fill, the current nav item, chart line. |
| `--gold-dim` | `#8A7447` | Secondary rules, column-heading rules, band edges, disabled outlines, diamond separators. Not for text. |
| `--ivory` | `#EFE8D8` | Text. |
| `--ivory-dim` | `#B4AFA2` | Secondary text, meta lines, `—`, placeholders. |
| `--garnet` | `#B0414B` | Failure and regression marks: the regressed data point and its ring, the rule beside an error. |
| `--garnet-text` | `#E08A92` | Failure and regression text on ink or midnight. |

Contrast on ink: ivory 14:1, ivory-dim 7.9:1, gold 7.3:1, garnet-text 6.7:1 (6.0:1 on midnight). Ink on gold (primary button) 7.3:1. `--garnet` itself is 3:1, so it is for marks and rules, never text. `--gold-dim` is 3.8:1 and is for lines and disabled outlines.

Status meaning: **garnet means below standard**: a failed run or a change beyond tolerance. It appears once or twice per screen. **Gold means structure or "go"**: frame, labels, the primary action, the current section, the selected row's edge. Passed or fine is plain ivory. There is no green.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-display: "Cormorant", Garamond, serif;
  --font-sans: "Jost", Futura, sans-serif;
  --font-mono: "DM Mono", ui-monospace, monospace;

  --color-ink: #0F1B2D;
  --color-midnight: #172640;
  --color-midnight-2: #1E3150;
  --color-gold: #C9A45C;
  --color-gold-dim: #8A7447;
  --color-ivory: #EFE8D8;
  --color-ivory-dim: #B4AFA2;
  --color-garnet: #B0414B;
  --color-garnet-text: #E08A92;

  --text-caps: 11px;
  --text-small: 12.5px;
  --text-ui: 14px;
  --text-body: 17px;
  --text-title: 30px;
  --text-mast: 56px;
  --text-score: 132px;

  --tracking-caps: 0.22em;
  --radius-*: initial;
  --radius-none: 0;
  --spacing: 4px;
}
```
All radii are 0; the only curves are rings, dots and the corner fans. All lines are 1px (the progress arc and primary chart line may be 1.2–2px). Without Tailwind, link `tokens.css`, which defines the same values (`--ink`, `--gold`, `--t-*`, `--track-caps`, `--frame-outer`, `--frame-gap`).

## Layout moves
1. **Frame the viewport.** A fixed 1px gold border inset 14px (10px on mobile), a second 1px gold border 5px inside it (4px on mobile), and a 46px (30px mobile) Art-Deco fan in each corner: two concentric quarter-arcs, a short diagonal, a stepped corner, and a tiny gold diamond. Content lives inside; on mobile, fixed ink bands top and bottom keep scrolled content from showing outside the frame.
2. **Centred masthead.** A three-part grid: left, a small caps workspace label with an italic sub-line; centre, the product name in Cormorant italic 56px over one italic sentence that summarises the state in words ("Eight in all: five passed, one failed, one running, one queued."); right, search. Under it, the section names in small caps, centred, separated by 5px gold diamonds. Then a double rule (gold over gold-dim, 3px apart) broken in the middle by an outlined diamond.
3. **Three columns, symmetric.** Desktop: `1fr 500px 1fr` with 40px gaps. Each side column opens with a centred small-caps heading between two gold-dim rules ("The programme", "Notes"). The centre column is the stage: a midnight panel with a 1px gold-dim border.
4. **Lists are a programme.** Each item is a three-part row: a time in gold Cormorant italic on the left, the name (Cormorant 600) with its secondary detail in Jost beside it and one meta line beneath, and the figures right-aligned (main number above, change below). Rows are separated by 18%-gold hairlines. The selected row gets the midnight fill and a 1px gold left edge. An error hangs under its row in DM Mono garnet-text with a 2px garnet rule on its left.
5. **The centrepiece is symmetric; tool text is not.** In the centre column the title, the hero numeral and the one-line verdict are centred, with the baseline on the left of the numeral and the change on the right. The chart, captions and everything in the side columns stay left-aligned.
6. **Mobile is an invitation card.** Framed viewport, centred brand and date, a flourish rule, the title in 38px italic, the author in small caps, then a symmetric pair: the drawn cover and a gold progress ring split by a vertical hairline. Below: a two-cell ruled band (goal | streak), a full-width gold button, a centred pull quote, and the upcoming list with italic roman numerals. Navigation is a centred small-caps line with diamonds at the bottom, inside the frame.

## Signature details
1. **Double gold frame with Deco corner fans.** Restrained: 1px lines, no fills except a 5px diamond. Never add glow or gradient to it.
2. **One enormous light italic numeral.** Cormorant italic 300 at 124–132px, ivory, centred on the stage, with smaller italic figures either side (baseline left, change right, each under a small-caps label).
3. **Gold-hairline chart.** A 1.2px gold line with 2.2px gold dots, the tolerance band as a 7%-gold wash between dotted gold-dim edges, a dashed baseline, a solid gold-dim floor, Jost 10.5px axis figures. The offending point is a garnet dot inside a 1px garnet ring, labelled in garnet-text Cormorant italic ("0.812, below the band").
4. **Programme listing.** Times as italic gold figures in a left gutter; names in Cormorant; meta written as a short phrase with commas ("r-2291, passed in 14m 02s, by schedule").
5. **Progress as a ring.** On mobile, a 62px-radius ring: a dotted gold-dim full circle underneath, a 2px gold arc for the part done (starting at 12 o'clock), a faint inner hairline, and the page number in 46px italic in the middle.

## Components
- **Buttons:** square, 38px tall (50px mobile), Jost 500 11.5–12.5px caps with 0.18–0.24em tracking, no wrapping. *Primary:* gold fill, ink text; hover goes to ivory. *Secondary:* 1px gold outline, gold text; hover fills midnight-2. *Destructive:* secondary construction in garnet-text with a garnet outline, label names the loss, confirmation required. *Disabled:* transparent, 1px dashed gold-dim outline, gold-dim text, `cursor: not-allowed`, and a short ivory-dim reason beside it ("Unavailable: r-2291 finished at 02:14:02."). Group buttons centred under the centrepiece.
- **Inputs and search:** no box. A small-caps gold label above, the text on a 1px gold-dim underline that turns gold (with a second 1px gold line) on focus. Shortcut keys in a 1px gold-dim outlined box.
- **Tables:** small-caps gold column heads over a gold-dim rule, row labels in Cormorant 17px, figures in Jost 14px right-aligned, 18%-gold row hairlines. Figures beyond tolerance in garnet-text.
- **Navigation:** centred small-caps line with gold diamond separators. Current item is gold with a 1px gold underline; others ivory-dim, turning ivory with a gold-dim underline on hover.
- **Status:** words in the meta line. Failed is garnet-text. Running shows a 44×3px gold-dim track with a gold 62% fill and the percentage. Queued is ivory-dim. Passed is plain.
- **Charts:** as in Signature details. Always one sentence of caption beneath, in Jost 12px ivory-dim.
- **Pull quotes:** centred Cormorant italic 23px, a large gold opening quote mark above, the source in gold italic below.
- **Empty / loading / error:** written in Cormorant italic ivory-dim as a full sentence ("None yet. Compare a run with its baseline, then pin it here."). Errors are DM Mono garnet-text with a garnet rule and a Jost line saying what to do. Unknown is `—` and zero is `0.000`, explained in a "Reading the figures" key.
- **Collections and entity images:** a collection is hung like a gallery wall around the stage. Split the set into two symmetric wings ("Nos. 001 to 008", "Nos. 009 to 016"), with the selected item on the midnight stage between them. Each entry is a plate: a framed print (76px; 196px on the stage) with an ivory `#EFE8D8` mat and 4–8px padding, so art made for light grounds reads on the ink, and a label beside it (italic gold number, Cormorant 600 name, Jost type, then rarity and count). *Rarity is how much gilding the frame gets:* common has a single gold-dim line and an italic dim label; uncommon has a single gold line; rare is a double gold frame (1px border plus a 1px outline at 3px) with gold caps "RARE"; mythic is the double frame plus gold diamonds on two corners and a solid gold "MYTHIC" plate. *Seen but not owned:* the same frame and mat with `filter: brightness(0); opacity: .72`, a crisp black silhouette on ivory, and "Seen, not caught" in italic. *Unknown:* an empty dashed gold-dim frame with no mat, showing only the number and "Not yet seen". *Broken image:* `onerror` adds `.broken`, which hides the `<img>` and shows a darker mat with the name in italic and "NO IMAGE" in tiny caps. *Stat blocks:* gold caps label, an italic Cormorant value, and a 1px gold-dim hairline with a 3px gold fill and an end tick marking 100.
- **Focus:** `outline: 1px solid gold; outline-offset: 4px; box-shadow: 0 0 0 4px ink, 0 0 0 5px gold` — a double gold ring, echoing the frame.

## Density & motion
- Base unit 4px. Programme rows about 52px (two lines), table rows 36px, 14–20px between groups, 40px column gaps, 34px page padding inside the frame.
- Medium density on desktop: one hero, eight list items, one table and one log visible without scrolling. Mobile is airy: 30px inside the frame, 18–34px between sections, 44px+ touch targets.
- Motion: restrained. Buttons and nav items cross-fade colour over 200ms. If you add one moment, let the progress ring's arc draw in over 600ms on first load (stroke-dashoffset). Nothing slides, bounces or glows.

## Don'ts
- Don't use neutral black or grey backgrounds. The ink has a blue hue; the stage is one step lighter in the same hue.
- Don't use gold for body text or fill large areas with it. Gold is lines, labels and one button.
- Don't add glows, gradients, glass, textures, or drop shadows. Evening print is flat.
- Don't centre tool text. Centre only the masthead, the centrepiece's title, numeral and verdict, section headings and the mobile card's title block.
- Don't set more than a handful of labels in letterspaced caps, and never IDs, sentences or numbers.
- Don't add a third accent colour or use garnet decoratively. Garnet appears only where something failed or regressed.
- Don't overload the frame with ornament. Four small corner fans and a diamond in the masthead rule are the whole set.
- Don't use emoji or icon sets. Diamonds, rings and rules are the entire vocabulary.

## Variants
Never changes: the double frame with corner ornaments, the centred masthead with its one-sentence summary, three symmetric columns with the stage in the middle, the programme listing, and one enormous light italic numeral.

### Light
A "matinee" version. The page stays cool, never cream (ANTI-SLOP).

| Token | Dark (default) | Light |
|---|---|---|
| `--ink` (page) | `#0F1B2D` | `#E9ECEF` |
| `--midnight` / `--midnight-2` (stage, hover) | `#172640` / `#1E3150` | `#DDE2E8` / `#D2D8E0` |
| `--gold` | `#C9A45C` | `#7E6028` |
| `--gold-dim` | `#8A7447` | `#B49A68` |
| `--ivory` / `--ivory-dim` (text) | `#EFE8D8` / `#B4AFA2` | `#0F1B2D` / `#4A5466` |
| `--garnet` / `--garnet-text` | `#B0414B` / `#E08A92` | `#B0414B` / `#9A2F3A` |

The primary button is `--gold` fill with `#F7F8F9` text. The focus ring's inner band uses the page colour.

### Density
- Denser: 40px single-line programme rows (meta after the name), columns `1fr 420px 1fr`, a 96px hero numeral.
- Roomier: 64px rows, a 560px stage, a 150px hero, five programme items at most.

### Named aesthetics
- **Art Deco** (variant): ink `#0E2A26`, masthead in Poiret One at 56px, one stepped sunburst of gold hairlines behind the stage numeral. No gold fills beyond the button.
- **Art Nouveau** (variant): Light variant on sage `#E8ECE3` with ink `#23362E`, whiplash vines replacing the fans, small caps in Marcellus instead of letterspaced Jost.
- **Letterpress** (variant): Light variant on cotton stock `#F5F5F2` with ink `#1E2B45`, garnet as the one spot colour, a blind deboss on the masthead (`text-shadow: 0 1px 0 rgb(255 255 255 / .8)`).
- **Celestial / astrology** (variant): progress rings become moon phases, 1px gold dots at 20% only in the frame margin, four-point stars instead of diamonds. No horoscope copy standing in for data.
