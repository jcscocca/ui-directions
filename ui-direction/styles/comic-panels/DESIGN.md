---
name: Comic panels
feels_like: A comic page where the data tells a story panel by panel
use_for: consumer, marketing
fonts: Bangers, Comic Neue, Grandstander, Victor Mono
colors: #FFFFFF, #111111, #00AEEF, #EC008C, #FFF200, #B8006D, #6B6B6B
---

# Comic panels

## Essence
The screen is a printed comic page. White paper, a rigid grid of rectangular panels with thick ink borders, and even white gutters between them. The grid sets the reading order (left to right, then down a tier) and panel size sets emphasis: routine items get small panels, the one thing that matters gets a splash panel several times their size. Words come in three structural forms, each with one job. **Yellow caption boxes** sit in a panel's top-left corner and narrate: when it happened, who started it, what this panel is. **Speech balloons** are white ovals with a tail that points at the exact value they explain. A burst balloon carries an error, and a dashed whisper balloon carries a quiet reason, such as why a button is disabled. **SFX lettering** in Bangers marks the single biggest event on a screen, once. Tone comes from process inks printed as Ben-Day dots, and emphasis from radiating focus lines behind the thing that happened. The most memorable move is the splash panel: the selected item is drawn huge, with focus lines bursting from the data point and a balloon pointing straight at it.

Feels like: a comic page where the data tells a story panel by panel.

## Use for / avoid for
- **Use for:** consumer apps with a daily rhythm (reading, fitness, habit, games, collections), recap and "what happened" screens, onboarding and launch pages, and small tools where the data has an order in time and one event worth telling.
- **Works on mobile** as a vertical strip: one wide panel, a tier of two, a call-to-action panel, then the rest. Navigation is a tier of small panels.
- **Avoid for:** dense tables (more than about 8 rows or 6 columns per view), finance, health and legal work where the comic voice undercuts trust, and any screen where every item is equally important. The page needs one splash.
- **Breaks down** when every panel gets a balloon and an SFX word. Then it is a costume. It also breaks down if panels become rounded cards with shadows, which is just a card grid.

## Type
- **Bangers** (400) shouts: product logo, the splash readout (the one big number), the creature or item name on a splash, rarity words, the primary mobile button, and SFX. Always uppercase. Never for body text or anything scanned in a list.
- **Comic Neue** (400, 700, italic) letters everything else. Captions, balloons, button labels and small headings are 700 UPPERCASE, the comic lettering convention. Data, names and body copy are mixed case, 400 or 700. Narration you read as prose (a quote, a description) is 700 italic.
- **Grandstander** (600, 800) is the numeral face. Comic Neue and Bangers have no tabular figures, so every number that is compared (scores, deltas, counts, stats, table cells, chart ticks) is set in Grandstander with `font-variant-numeric: tabular-nums`. Its round, hand-inked digits match the lettering.
- **Victor Mono** (400, 600) is the machine: log lines and the error code inside a burst balloon only.

| Role | Family | Size / line-height | Case |
|---|---|---|---|
| Splash readout | Bangers | 96 / 0.82 | as data |
| Logo | Bangers | 54 desktop, 40 mobile, tracking 0.04em | UPPERCASE |
| Splash name, Δ readout | Bangers | 44–60 / 0.85 | UPPERCASE |
| SFX | Bangers | 34–50, yellow fill, 2.5px ink stroke, rotate −8° to −9° | UPPERCASE |
| Panel numbers (scores in small panels) | Grandstander 800 | 26–38 / 1 | as data |
| Selected title | Comic Neue 700 | 28 / 1.08 | as data |
| Body, table cells | Comic Neue 400/700 | 13–15 / 1.3 | Sentence |
| Captions, balloons, buttons, table heads | Comic Neue 700 | 11–14 / 1.22, tracking 0.02–0.04em | UPPERCASE |
| Log | Victor Mono 400 | 12 / 1.6 | as data |

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Grandstander:wght@600;800&family=Victor+Mono:wght@400;600&display=swap" rel="stylesheet">
```
- npm: `@fontsource/bangers`, `@fontsource/comic-neue`, `@fontsource/grandstander`, `@fontsource/victor-mono`
- Next.js: `import { Bangers, Comic_Neue, Grandstander, Victor_Mono } from "next/font/google"` (Bangers `weight: "400"`; Comic Neue `weight: ["400","700"], style: ["normal","italic"]`; Grandstander `weight: ["600","800"]`; Victor Mono `weight: ["400","600"]`).

## Color
Process inks on white paper. Colour is either ink, a flat fill with a job, or a Ben-Day dot tone.

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#FFFFFF` | The page, panel interiors, balloons. |
| `--ink` | `#111111` | All borders, text, chart lines, the selected nav item. The only line colour. |
| `--cyan` | `#00AEEF` | The action and tone ink: primary buttons, Ben-Day tone (noise band, progress fills, rarity grounds), the selection outline, the logo fill. Never text on white (2.5:1). |
| `--yellow` | `#FFF200` | Narration: caption boxes, the quoted highlight, SFX fill, hover and focus fill. |
| `--magenta` | `#EC008C` | Trouble, as ink: the regressed data point, the Δ readout (with an ink stroke), the Ben-Day ground behind an error burst. |
| `--magenta-text` | `#B8006D` | Trouble as small text: failed score, negative deltas beyond tolerance, the error code. |
| `--grey` | `#6B6B6B` | Not computed (`—`), not started, disabled labels, the placeholder border. |
| `--grey-dot` | `#B5B5B5` | Empty tone: the empty-state panel, disabled button border, unknown "?" outline. |

Contrast: ink on paper 18.9:1, ink on yellow 16.1:1, ink on cyan 7.5:1 (primary buttons use ink text on cyan), magenta-text on paper 6.4:1, grey on paper 5.3:1, grey on the disabled fill `#F2F2F2` 4.8:1, log text `#F4F4F4` on ink 17.2:1, cyan on ink 7.5:1. Magenta `#EC008C` is 4.3:1 on white, so it only appears as large Bangers type with an ink stroke, as fills, or as dots.

Status meaning: magenta means trouble (a regression or a failure; the words say which). Cyan means "you can act" or "this is selected". Yellow never means status; it is the narrator's voice. Grey means absent (not computed, not started, disabled, unknown).

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-shout: "Bangers", "Impact", sans-serif;
  --font-letter: "Comic Neue", "Comic Sans MS", sans-serif;
  --font-num: "Grandstander", "Comic Neue", sans-serif;
  --font-code: "Victor Mono", ui-monospace, monospace;

  --color-paper: #FFFFFF;
  --color-ink: #111111;
  --color-cyan: #00AEEF;
  --color-yellow: #FFF200;
  --color-magenta: #EC008C;
  --color-magenta-text: #B8006D;
  --color-grey: #6B6B6B;
  --color-grey-dot: #B5B5B5;

  --radius-*: initial;   /* panels, captions and buttons are square */
  --radius-balloon: 50%;
  --spacing-gutter: 12px;
  --border-panel: 3px;
  --border-heavy: 5px;
}
```
Ben-Day dots are not a Tailwind utility; copy the `.dots-cyan`, `.dots-cyan-lt`, `.dots-magenta` and `.dots-grey` classes from `tokens.css` (two offset `radial-gradient` layers on a 9px lattice). Without Tailwind, link `tokens.css` and use its custom properties directly.

## Layout moves
1. **The page is a panel grid.** Panels are rectangles with a 3px ink border on white, separated by 12px white gutters. Build them with CSS grid tiers (`grid-template-columns` in fixed widths per tier) so every border lines up. No radius, no shadow, no rotation of any panel.
2. **Reading order is time order.** Lay items left to right, top to bottom in the order they happened, so the page reads as a sequence. On the Evals example the top tier is six small run panels from 23:00 to 01:12, and the 02:00 run is the splash below them.
3. **Size is importance.** Routine items get small equal panels. A failure gets a wider panel (about 1.8×) because it carries an error balloon. The selected item gets a splash panel about 60% of the page width and two-thirds of its height. There is exactly one splash per screen.
4. **Every panel opens with a caption.** A yellow caption box sits flush in the top-left corner, sharing the panel border. It says when and who ("00:40, CI #4809"), or what the panel is ("Where r-2291 lost points"). A caption may also sit at the foot of a panel to narrate a rule, such as what `—` means.
5. **Balloons point at data.** A balloon's tail touches the value it explains: the regressed chart point, the `+0.16` cell, the disabled button. A balloon never floats without a target.
6. **Detail is a splash, not a side panel.** The selected item's page has the big readout at top right, its title and baseline at top left, and the chart filling the rest. Supporting facts (metrics, log, actions) live in smaller panels in a column beside it, each with its own caption.
7. **Machine output is a panel of its own.** Logs sit in an ink-filled panel (a screen inside the page) with light text, so they read as a different voice.
8. **Navigation is lettering in a boxed strip** on desktop (segments divided by 3px ink rules, current item filled ink) and a tier of four small panels on mobile.
9. **Mobile is a vertical strip:** a wide panel for the main object, a tier of two half-width panels for paired facts, a wide call-to-action panel above the fold, then secondary panels. Keep the 12px gutter and 3px borders at every width.

## Signature details
1. **The splash with focus lines.** Behind the one data point that matters, a `repeating-conic-gradient` of thin ink rays (0.9° ink, 6° gap) is masked to a ring 32–140px from the point, with a magenta dot and ink stroke at its centre.
2. **Yellow caption boxes in panel corners** that narrate time, actor and purpose. They replace section headings entirely.
3. **Balloons as a type system:** oval speech balloon with a tail (explanation), jagged burst balloon (error), dashed whisper balloon (quiet reason, disabled state, "seen, not caught").
4. **Ben-Day dots for tone.** A 9px 45° lattice of 1.9px cyan dots fills the noise band, progress bars and rarity grounds; magenta dots sit behind an error burst; grey dots mark an empty panel.
5. **One SFX word per screen**, in Bangers with a yellow fill, ink stroke and a 3px hard ink drop, rotated about −9°, placed beside the event ("THUD!" at a score drop, "GLOW" on a creature that glows).

## Components
- **Buttons:** square, 3px ink border, Comic Neue 700 uppercase 13.5–15px, tracking 0.04em. Primary: cyan fill, ink text. Secondary: white. Hover: yellow fill. Active: `translateY(2px)`. Disabled: `#F2F2F2` fill, grey-dot border, grey text, `not-allowed` cursor, and a whisper balloon giving the reason ("Can't cancel: it finished at 02:14:02"). Destructive actions get the magenta-text label on white; there is no red. The mobile primary is 56px tall with a Bangers 30px label.
- **Inputs and search:** square 3px ink box, 40px tall, Comic Neue 700 input text, grey placeholder. The whole box fills yellow on focus. A key hint (`/`) is a 24px square in Victor Mono.
- **Tables and lists:** only inside panels. Head row: Comic Neue 700 uppercase 12px over a 2px ink rule; body rows separated by 1px `#D9D9D9`; numbers in Grandstander, right-aligned. Lists of equal items become tiers of equal panels instead of table rows.
- **Navigation:** a boxed strip of uppercase words split by 3px ink rules, current item ink-filled with white text. Mobile: a fixed tier of four small panels, current one ink-filled.
- **Status:** words first ("Passed in 2m 15s", "Running, 9m 10s so far", "Queued"). Failure adds a magenta score and a burst balloon on a magenta-dot ground. Running adds a Ben-Day progress bar with its percentage. Not computed shows a grey `—`.
- **Charts:** 3px ink axes, 4px ink data line, white points with 3px ink stroke, a Ben-Day band for tolerance, a dashed ink baseline, labels in Comic Neue 700 uppercase, boxed in white where they sit on dots. The anomalous point is magenta with focus lines behind it and a speech balloon pointing at it.
- **Empty, loading, error:** empty is a small panel filled with grey dots and a plain sentence on white ("Pinned comparisons: none yet. Compare a run to pin it here."). Not computed is `—`, explained by a foot caption, and distinct from a real `0.000`. Errors are burst balloons that name the object, the cause and the fix.
- **Focus:** 3px ink outline at 3px offset plus a yellow fill on the focused element. Overlay links on panels use a 4px ink outline without the fill.
- **Collections and entity images:** each entity is a numbered panel in a 4×4 roster grid. The panel number is the caption. The art sits on a 98px "ground" strip at the top of the panel, above a 2px ink rule, with name, type, rarity and count below. **Rarity is a tone ramp:** Common is plain paper with a quiet grey lowercase word; Uncommon gets light cyan dots and an uppercase word; Rare gets full-strength cyan dots, a 5px border and the word in Bangers; Mythic gets a yellow ground with radiating ink focus lines and "MYTHIC!" in Bangers with an ink stroke. **Seen** shows the art as a silhouette (`filter: brightness(0)`, opacity 0.82) with a dashed whisper tag "seen, not caught" and no type. **Unknown** is a blank white panel with its number and a large grey outlined "?" and nothing else. A **failed image** swaps (`onerror`) to a neutral `#EFEFEF` box with a grey border and the name plus "no picture". The **detail** is a splash panel with a 5px border: Bangers name, the art large on a light-dot ground, stats as a yellow "stat caption" box with ink bars out of 100, the description as a narration caption in italic, and the evolution line as a three-panel mini strip where the unknown next form is a blank panel with "?".

## Density & motion
- Base unit 4px. Gutter 12px everywhere. Panel padding 12–22px; top padding leaves room for the caption (32–42px).
- Desktop small panels are about 196×238px; the splash about 860×552px. Table rows 30px. Mobile panels keep 3px borders and 12px gutters; body text stays 13–15px.
- Denser screens add tiers, not smaller type: a third tier of small panels before the splash is fine; shrinking lettering below 11px is not.
- Motion: buttons move down 2px on press. Nothing else moves. No page-flip transitions, no bouncing balloons.

## Don'ts
- Don't rotate, tape or overlap panels. The grid is the structure; a tilted panel turns this into a scrapbook.
- Don't round panel corners, add drop shadows, or put gradients on panels. Only balloons are round.
- Don't use SFX more than once or twice per screen, and never on a routine item. If everything goes "POW", nothing does.
- Don't write filler in balloons or captions ("Great job!", "Let's go!"). Every balloon explains a value; every caption says when, who or what.
- Don't set lists, tables or long text in Bangers, and don't set numbers in Comic Neue where they are compared. Use Grandstander.
- Don't use magenta decoratively. It is trouble.
- Don't put Ben-Day dots behind text you have to read. Dots go behind art, bands, bars and balloons.
- Don't draw characters, faces or mascots to "speak" the balloons. The data is the speaker.
- Don't make every panel the same size. Without a splash it's a card grid.

## Variants
Never changes: the rectangular panel grid with 3px ink borders and white gutters, reading order as time order, one splash panel per screen, yellow corner captions, balloons whose tails point at data, and SFX at most twice per screen.

### Dark
The direction survives inversion as a "night-time" colourist job, not as dark UI:

| Token | Light | Dark |
|---|---|---|
| `--paper` (gutters and page) | `#FFFFFF` | `#14161F` |
| panel interior | `#FFFFFF` | `#1E2130` |
| `--ink` (borders) | `#111111` | `#050608` (borders stay near-black and 3px) |
| text | `#111111` | `#F2F2F2` |
| `--cyan` | `#00AEEF` | `#2BC3FF` |
| `--magenta-text` | `#B8006D` | `#FF5CB8` |

Captions stay yellow with ink text, and balloons stay white with ink text; they are lettering, not surfaces. The log panel inverts to `#050608`. Ben-Day dots drop to 60% opacity.

### Density
- **Denser:** small panels at 160×200, three tiers above the splash, 12px data text, 26px panel numbers, captions at 11px. Past about 18 small panels, move the rest into a table inside one panel.
- **Roomier:** small panels at 240×280, 16px body, a 120px splash readout, 16px gutters.

### Named aesthetics
- **Comic book** (variant): this direction as written. For a Golden Age look, use newsprint paper `#F3EEDC` for panel interiors (the page gutters stay white), dots 30% larger, and a slightly off-register cyan layer (1px offset) on the logo only. Keep captions, balloons tied to data and one splash.
- **Manga** (variant): black and white only: ink `#111111` on paper `#FFFFFF`, Ben-Day dots become grey screentone (`#111111` dots at 12–30%), Bangers becomes Dela Gothic One for the logo and SFX, and focus lines become speed lines (parallel `repeating-linear-gradient` rays) behind the anomaly. Set the panel grid right to left with `direction: rtl` on the tier containers (keep text inside panels `direction: ltr`) and say so in a caption on the first panel. Keep the splash, captions and balloons; magenta trouble becomes a solid ink panel with white lettering.
- **Pop Art** (variant): enlarge the Ben-Day lattice to 14px with 4px dots, give the splash a flat yellow ground with cyan dots, and set the splash readout and SFX with a red `#E4002B` fill in place of yellow (red then replaces magenta as trouble everywhere). Keep one splash, balloons tied to data, and white panels for anything scanned.
