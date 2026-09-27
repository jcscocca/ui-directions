---
name: Hardware product
feels_like: The front panel of a well-designed piece of hardware
use_for: tools, consumer
fonts: Hanken Grotesk, Doto
colors: #D4D5D1, #A9AAA5, #2A2B2A, #1E2A22, #B9D4B0, #F26B1D
---

# Hardware product

## Essence
The screen is the front panel of a physical device in the tradition of Braun and small-synth makers: an aluminium-grey face divided into modules by visible 2px seams, with tiny lowercase labels printed next to controls like silkscreen, recessed dark-green LCD windows showing readouts in a dot-matrix face, status LEDs, toggle switches, a rotary knob, and keycaps. Data does not sit in cards; it sits on LCDs, meters and LED ladders. One orange keycap is the primary control and nothing else on the panel is orange. The most memorable move is the "channel strip" list: each item is a vertical strip like a mixer channel, with a status LED on top, a tiny scribble-strip LCD naming it, a segmented LED meter showing its value, and a select key at the bottom that lights up when the channel is selected.

Feels like: the front panel of a well-designed piece of hardware.

## Use for / avoid for
- **Use for:** monitoring tools with a handful of comparable items (runs, services, devices, sensors, channels), control surfaces, settings screens, dashboards where the user watches a few numbers; consumer apps that track one or two quantities (reading, workouts, timers, budgets).
- **Works on mobile** as a handheld device: LCD screen on top, LEDs and ladders under it, one big key, a slide selector for navigation.
- **Avoid for:** long text, content browsing, anything with more than ~10 parallel items (strips get too narrow), forms with many fields, and anything that must feel warm or editorial.
- **Breaks down** when there is no quantity to meter. Without numbers the knobs and LEDs become a costume.

## Type
- **Hanken Grotesk** (400, 500, 600, 700) for all printed text: silkscreen labels, body, names. Labels are **lowercase** (`text-transform: lowercase`), tiny, and sit next to the control they describe.
- **Doto** (400–900; use 700 for small readouts, 800 for large) only inside LCD windows: readouts, IDs, the search field, log lines, metric tables. Doto's period renders as a cross-shaped cluster that reads as a comma or plus; replace `.` in numbers with a small square: `<i class="dp"></i>` styled `display:inline-block; width:.13em; height:.13em; background:currentColor; margin:0 .07em`. Do this for every decimal shown in Doto.
- Tabular numerals on `body`. Doto is monospaced, so LCD columns align naturally.

| Role | Family | Size / line-height | Weight |
|---|---|---|---|
| Hero LCD readout | Doto | 76 / 0.9 | 800 |
| Secondary readout (Δ) | Doto | 34 / 1 | 800 |
| Channel ID, channel value | Doto | 20–24 / 1 | 800 |
| LCD body (metrics, search, log) | Doto | 12.5–16 / 1.4 | 700 |
| Brand wordmark | Hanken Grotesk | 18–24, tracking -0.02em, lowercase | 700 |
| Module title | Hanken Grotesk | 11–13, lowercase | 700 |
| Silkscreen label | Hanken Grotesk | 11, lowercase | 400 |
| Micro label (scales, hints) | Hanken Grotesk | 9–10, lowercase, `--print` | 400 |
| Body sentences, names | Hanken Grotesk | 13–14 / 1.3 | 400–700 |

Proper nouns and machine strings keep their case (M. Okafor, CI #4812, KeyError). Watch out: `text-transform: lowercase` turns `Δ` into `δ`; wrap Greek capitals in a span with `text-transform: none`.

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Doto:wght@400..900&family=Hanken+Grotesk:wght@400..700&display=swap" rel="stylesheet">
```
- npm: `@fontsource-variable/hanken-grotesk`, `@fontsource-variable/doto`
- Next.js: `import { Hanken_Grotesk, Doto } from "next/font/google"`

## Color
| Token | Hex | Role |
|---|---|---|
| `--alu` | `#D4D5D1` | Panel face (every module). |
| `--alu-hi` | `#E3E4E0` | Top-left seam highlight, keycap tops, screw heads. |
| `--seam` | `#A9AAA5` | Seams between modules, key skirts, unlit meter borders. |
| `--graphite` | `#2A2B2A` | Silkscreen text, dark keys, knob, toggle tracks. 9.6:1 on `--alu`. |
| `--print` | `#4B4C4A` | Secondary silkscreen (micro labels). 5.9:1 on `--alu`. |
| `--lcd` | `#1E2A22` | LCD glass. |
| `--lcd-on` | `#B9D4B0` | Lit pixels and meter segments. 9.3:1 on `--lcd`. |
| `--lcd-dim` | `#6E8468` | Half-lit pixels: placeholders, units, labels on the glass. 3.7:1, so only for non-essential text ≥12px. |
| `--lcd-ghost` | `#2C3A30` | Unlit pixels and segments (the ghost grid behind readouts). |
| `--orange` | `#F26B1D` | The primary control only (one key per screen). Text on it is `#2A1406` (5.7:1). |
| `--led-ok` | `#8EDB7E` | Lit status LED: passed, running (blinking), streak day, power. |
| `--led-fault` | `#E3372A` | Fault LED only: failed and regression. Never text, never fills. |
| `--led-off` | `#7D7E7A` | Unlit LED: queued, inactive nav positions. |

Status is always LED + word ("pass", "failed", "running 62%", "queued") so it survives colour blindness. Highlight on an LCD is inversion (`--lcd-on` background, `--lcd` text), not a new colour.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-sans: "Hanken Grotesk", "Helvetica Neue", Arial, sans-serif;
  --font-lcd: "Doto", "Courier New", monospace;

  --color-alu: #D4D5D1;
  --color-alu-hi: #E3E4E0;
  --color-seam: #A9AAA5;
  --color-graphite: #2A2B2A;
  --color-print: #4B4C4A;
  --color-lcd: #1E2A22;
  --color-lcd-on: #B9D4B0;
  --color-lcd-dim: #6E8468;
  --color-lcd-ghost: #2C3A30;
  --color-orange: #F26B1D;
  --color-led-ok: #8EDB7E;
  --color-led-fault: #E3372A;
  --color-led-off: #7D7E7A;

  --radius-body: 22px;
  --radius-module: 6px;
  --radius-key: 7px;
  --radius-lcd: 4px;
}
```
Without Tailwind, link `tokens.css`. The seam trick is structural: give the device container `background: var(--seam)`, `display: grid; gap: 2px`, and give every module `background: var(--alu); box-shadow: inset 1px 1px 0 var(--alu-hi)`.

## Layout moves
1. **The viewport is one device body**: 10px margin of darker table colour (`#BDBEBA`), then a body with 22px corner radius and four screws (11px circles with a slot) in the corners. Everything lives inside it; nothing floats.
2. **Modules are grid cells separated by 2px seams** (container background shows through the grid gap). Outer corner modules pick up the body radius. A top row of modules holds identity (power LED + lowercase wordmark + workspace), a mode selector, and search.
3. **Navigation is a mode selector**: a row of small keycaps (42×22) with an LED above each; the current mode's key is graphite and its LED lit, and the label under it is bold. On mobile it's a 4-position slide switch fixed at the bottom with detent ticks over each label.
4. **Lists are channel strips**: equal-width vertical strips in one bordered bank, newest left. Top to bottom: LED + status word, ID in Doto, scribble LCD (name + wrapped sub-name), segmented meter (20 segments, lit count = value × 20) with a printed 0/.5/1 scale, value readout, flag line, a small key/value list (Δ, time, by, start), select key at the bottom.
5. **The selected item is shown on the big LCD module** at the top of the right column (ID, name, 76px value, Δ, lit/unlit status segments, baseline), followed by stacked LCD modules for its chart, table and log, and a keys module at the bottom.
6. **Filters are physical**: vertical toggle switches with the count above in Doto and an LED + label below; a knob shows a setting (tick marks and printed values around it, pointer on the current value). Faults get their own "fault display" LCD with a red LED.
7. **Mobile is a handheld**: a cartridge slot at the very top holds the current book's cover as a physical cartridge label; the main LCD shows title, author, `184/304`, a segment bar and "last read"; LED row for the streak; a 20-segment LCD ladder for the goal; one wide orange key; a memo LCD for the highlight; queue items as numbered keycaps.

## Signature details
- **Channel strips with segmented LED meters** and a select key that lights (`--lcd-on`) when that strip is selected.
- **LCD windows with a ghost pixel grid** (`radial-gradient` 0.9px dots on a 4px grid in `--lcd-ghost`), inset top shadow, and Doto readouts; highlighted rows are inverted, never recoloured.
- **Unlit segments stay visible**: status segments that don't apply ("fail" on a passing run) are drawn in ghost outline, like a real LCD.
- **Silkscreen labels**: tiny lowercase Hanken Grotesk printed beside controls, never inside boxes: "noise band", "show status", "fault display", "switch up = shown".
- **One orange key**: the primary action is the only orange thing on screen, a 92×58 (desktop) or 190×64 (mobile) keycap with a darker skirt that shortens on press.

## Components
- **Buttons are keycaps.** Top face `--alu-hi` (or `--orange` for primary), a 5px darker skirt via `inset 0 -5px 0`, a 1px outline and a 2px drop to the panel. The action's name is printed on the cap in lowercase and the full action in silkscreen under it ("rerun evaluation"). Pressed: `translateY(2px)` and the skirt shrinks to 2px. Disabled: flat, no skirt, `#C9CAC6` face, `#8C8D89` text, already pushed down, with a silkscreen reason under it ("cancel run: off, the run already finished").
- **Inputs.** An LCD window with Doto text; placeholder in `--lcd-dim`; a keycap showing the shortcut (`/`). Focus adds a 2px graphite ring around the window.
- **Toggles.** Vertical 22×44 graphite track with an aluminium lever; up = on. `aria-pressed` on a `<button>`.
- **Knob.** SVG: tick marks and printed values around a graphite knob with a light pointer line.
- **Lists.** Channel strips (Layout move 4). For long names, the scribble LCD wraps with `overflow-wrap: anywhere` at 10px.
- **Tables.** Inside an LCD: Doto rows, no rules, column heads printed on the panel above the window in micro silkscreen, the key row inverted.
- **Status.** LEDs (8–9px dots) + lowercase word. Running blinks at 1.2s steps (disabled under `prefers-reduced-motion`). Fault = red LED + fault display with the machine message.
- **Charts.** On an LCD: 2px `--lcd-on` line, 8px square points, the tolerance band as a `--lcd-ghost` block with a dashed baseline, axis values in Hanken 11px `--lcd-dim`, the latest point as a larger square.
- **Empty / loading / error.** Empty = a small LCD reading "none yet" in `--lcd-dim` with a silkscreen label ("pinned comparisons"). Not computed = `—` on the readout; zero = `0.000`; a legend printed near the list says which is which. Errors appear on the fault display with ID, cause and next step.
- **Focus.** `outline: 2px solid var(--graphite); outline-offset: 2px`, on the keycap face for keys.
- **Collections and entity images.** A collection is a bank of pads, like a sampler: a 4×4 grid of keycap-style pads (8px radius, 5px skirt) in one module. Each pad prints its number top-left and a status LED top-right, the image in the middle, the name in Hanken 700, the types in micro silkscreen, rarity pips, and a tiny LCD counter showing times caught (`03`). LED states: lit = caught; hollow ring (`box-shadow: inset 0 0 0 2px #5FA052` on a transparent LED) = seen; dark = unknown. Seen pads show the image as a silhouette (`brightness(0)`, opacity .55) and print "seen, not caught" in place of the counter. Unknown pads are recessed: `#C9CAC6` face, an inset shadow, no skirt, and only the number and a dark LED. Rarity is printed pips (○○○ to ●●○), and mythic is a graphite pad: image inverted to a pale silhouette, a boxed "mythic" label, and three pips, the only dark pad in the bank. A failed image swaps via `onerror` to a hatched grey "no image" patch; the name and number stay. The selected pad is held down and lit (`--lcd-on` face). Its detail shows the image in a recessed light "viewer" window, the ID, name and types on an LCD, rarity as four LCD segments with only the current one lit, stats as 20-segment LED ladders with Doto values, and the evolution line as mini pads joined by printed wires (dashed to an unknown recessed pad). Filters are a rotary status knob, lit filter keys for type and rarity, and a sort slide switch. Completion is an LCD count plus a row of 16 LEDs in the three states.

## Density & motion
Base unit 4px. Modules have 12–18px padding; labels sit 4–6px from their control. Desktop strips are ~98px wide and ~540px tall; LCD body text 12.5–16px. Mobile uses the same parts at larger key sizes (≥40px hit targets, 64px primary key). Motion: keys depress on press (50ms), the running LED blinks. Nothing else moves.

## Don'ts
- Don't add a second accent. Orange is the primary control; red exists only as a fault LED.
- Don't use shadows for elevation. The only shading allowed describes a physical part: keycap skirts, recessed LCD glass, toggle tracks, seams.
- Don't put data in rounded cards. Numbers go on LCDs, meters and LED ladders; words are printed on the panel.
- Don't use uppercase or letterspaced labels. Silkscreen here is tiny and lowercase.
- Don't use Doto outside LCD windows or for long sentences on the panel; it's a readout face.
- Don't draw skeuomorphic textures (brushed-metal noise, glossy highlights, glass reflections). Flat aluminium colour, crisp seams.
- Don't forget the Doto period fix; "0,812" or "0+812" on a readout is a real misreading risk.
- Don't turn every item into a knob. Use knobs for a continuous setting, toggles for on/off filters, keys for actions.

## Variants
Never changes: one device body divided by 2px seams, channel strips with segmented LED meters and select keys, LCD windows with a ghost pixel grid and inversion for highlight, tiny lowercase silkscreen, and one orange primary key.

### Dark
A "black edition" panel. LCD, LED and orange tokens are unchanged.

| Token | Light | Dark |
|---|---|---|
| `--alu` / `--alu-hi` | `#D4D5D1` / `#E3E4E0` | `#2E302E` / `#3A3C3A` |
| `--seam` | `#A9AAA5` | `#1B1C1B` |
| `--graphite` | `#2A2B2A` | `#DADBD6` |
| `--print` | `#4B4C4A` | `#A2A39E` |
| table margin | `#BDBEBA` | `#151615` |

Keycap skirts darken to `inset 0 -5px 0 #1B1C1B`. The current mode key flips to the light `--graphite` face with dark text.

### Density
- Denser: 72px strips with 16-segment meters, 8–10px module padding, 12px LCD body; about 14 strips at most.
- Roomier: 120px strips, 64px keys, a 96px hero readout, fewer modules per row.

### Named aesthetics
- **Dieter Rams / Braun** (variant): the direction's source. White Braun version: body `#EDEDEB`, keycaps `#D9D9D6`, and one yellow `#F2C230` key replacing orange.
- **Neumorphism** (variant): soft extrusion on controls only (`-3px -3px 6px #E6E7E3, 3px 3px 6px #A9AAA5`), LCDs stay sharply recessed, seams stay. The trap (ANTI-SLOP) is low-contrast soft cards holding data.
- **Y2K** (variant): teal candy plastic `#3FB6C9` over chassis seams `#1D6F7C`, body radius 40px, gummy `#F4F7F8` keycaps, Michroma wordmark. No chrome or iridescent gradients.
- **Synthwave / outrun** (variant): body `#1B1330`, seams `#0E0A1A`, LCD `#120B24` lit magenta `#FF4FD8`, LEDs cyan `#36F1CD`, one livery stripe of five flat sunset bands on the top module. No gradient sunset or grid floor.
- **Cassette futurism / Nostromo** (variant): putty `#C9C2AE`, print `#2B2A26`, CRT glass `#0C1A10` lit `#7CFF9B` in VT323, labels in Barlow Condensed 600 uppercase 10px (overriding the lowercase rule). No scanlines.
- **VFD / LCD appliance** (variant): VFD glass `#0A1414`, lit `#5CF2D6`, ghost `#10302B`, a 4px glow on readouts only; or a reflective LCD `#B7C3A2` with `#22301E` segments.
- **Palm OS** (variant): the handheld layout with the LCD as the whole screen in reflective `#A8B39A` with `#1B2014` pixels, a black title tab, and a silkscreened input area below.
- **Game Boy** (variant): LCD greens `#0F380F`, `#306230`, `#8BAC0F`, `#9BBC0F`, body `#C4C0B8`, and the primary key magenta `#9A2257` in place of orange.
