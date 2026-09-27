---
name: Phosphor terminal
feels_like: A well-made TUI, like htop, k9s or lazygit
use_for: tools, data-dense
fonts: JetBrains Mono, VT323
colors: #1A1206, #FFB000, #8A6A2A, #A8843A, #FF5C39, #6FD3E3
---

# Phosphor terminal

## Essence
The screen is a full-screen terminal UI in amber phosphor on a warm brown-black. Every element sits on one character grid (13px JetBrains Mono, 7.8px columns, 20px rows): panes are boxes whose borders run through the middle of a character cell, pane titles are knocked into the top border ("[1] runs"), counts sit in the bottom border, and the whole screen is framed by a top line (app, tabs, search) and a tmux/vim-style status line (mode, workspace, selection, function-key hints, clock). The selected row is inverted in cool cyan, the only second hue. Charts are made of characters: one `●` per data point on a character-cell plot, with the tolerance band as a faintly shaded range of rows. One or two readouts are set large in VT323. The most memorable move is the grid discipline itself: at thumbnail size it is unmistakably a terminal, and it stays usable because it copies how good TUIs are organised, not how old CRTs looked.

Feels like: a well-made TUI, like htop, k9s or lazygit.

## Use for / avoid for
- **Use for:** developer and ops tools, monitoring, job queues, eval and CI dashboards, log-heavy screens, anything keyboard-driven where power users will scan dense rows.
- **Works on mobile** for companion views of such tools, and for playful personal apps whose users like the aesthetic.
- **Avoid for:** consumer onboarding, marketing, forms for non-technical people, long-form reading, anything that must feel warm or premium.
- **Breaks down** when content needs proportional type (long prose), rich imagery, or many colours. It also breaks if you let elements drift off the grid; half-column offsets look broken instantly.

## Type
- **JetBrains Mono** 400 and 700: everything. Turn ligatures off (`font-variant-ligatures: none`) so `->` and `!=` stay literal.
- **VT323**: at most two large readouts per screen (the selected score and its delta on desktop; the current page on mobile).

| Role | Family | Size / line-height | Weight | Notes |
|---|---|---|---|---|
| Everything | JetBrains Mono | 13 / 20 | 400 | 1ch = 7.8px |
| Emphasis, current tab, selected title | JetBrains Mono | 13 / 20 | 700 | never larger |
| Primary readout | VT323 | 80 / 80 (4 rows) | 400 | |
| Secondary readout | VT323 | 60–64 / 60 (3 rows) | 400 | |
| Column heads | JetBrains Mono | 13 / 20 | 400, dim | UPPERCASE, the one place caps are used |

There is no type scale beyond this. Hierarchy comes from brightness (amber vs dim), weight, reverse video and position. Everything else is lowercase like CLI output (`passed`, `queued`, `1 runs`), except data that has its own case (names, titles) and `FAILED`, which is capitalised as an alarm. Numbers use `tabular-nums` and are right-aligned in their columns.

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=VT323&display=swap" rel="stylesheet">
```
- npm: `@fontsource/jetbrains-mono`, `@fontsource/vt323`
- Next.js: `import { JetBrains_Mono, VT323 } from "next/font/google"` (`VT323` needs `weight: "400"`).

## Color
| Token | Hex | Role |
|---|---|---|
| `--bg` | `#1A1206` | Warm brown-black screen. Never neutral black. |
| `--bg-band` | `#2A1E0B` | Tolerance band inside charts, row hover, focused input. |
| `--amber` | `#FFB000` | Primary text, focused pane border, reverse-video fills (current tab, mode, primary action, keys). |
| `--dim` | `#8A6A2A` | Unfocused pane borders, bar bodies, key-hint chips, disabled. Not for small text (3.7:1). |
| `--dim-text` | `#A8843A` | Secondary text, column heads, axis labels, `—`, empty bar cells. |
| `--red` | `#FF5C39` | Failure, plus the one out-of-tolerance point on a chart: `FAILED`, the error line, the failed count, the regressed point and its label. |
| `--cyan` | `#6FD3E3` | Selection only: the inverted selected row, "selected" in the status line, hover on actions. |

Contrast on `--bg`: amber 10.1:1, dim-text 5.3:1, red 6.0:1, cyan 10.7:1. `--bg` on amber (reverse video) 10.1:1 and on cyan 10.7:1. `--dim` is 3.7:1: lines and chips only.

Status meaning: amber is normal. Red means failed, and on a chart it marks the single point outside tolerance; nothing decorative is red. Cyan means selected, nothing else. In tables a regression is `▼`, bold, and a sentence ("this is a regression, not noise"). Glow is at most `text-shadow: 0 0 1px rgba(255,176,0,.35)`; no blur halos, scanlines or curvature.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-mono: "JetBrains Mono", "Cascadia Mono", Consolas, monospace;
  --font-readout: "VT323", "JetBrains Mono", monospace;
  --font-sans: var(--font-mono);

  --color-bg: #1A1206;
  --color-bg-band: #2A1E0B;
  --color-amber: #FFB000;
  --color-dim: #8A6A2A;
  --color-dim-text: #A8843A;
  --color-red: #FF5C39;
  --color-cyan: #6FD3E3;

  --text-base: 13px;
  --text-base--line-height: 20px;
  --text-readout: 80px;

  --radius-*: initial;
  --radius-none: 0;
  --spacing: 20px;
}
```
Horizontal sizes should be in `ch` (arbitrary values like `w-[65ch]`, `pl-[1.5ch]`); vertical sizes in rows (`--spacing: 20px`, so `h-3` is three rows). Without Tailwind, link `tokens.css`, which defines the same tokens plus `--row`, `--t` and `--glow`.

## Layout moves
1. **One character grid for the whole screen.** 13px mono, 20px rows. 1440×900 is 184 columns × 45 rows. Position panes with columns and rows only: `left: (c0 + 0.5)ch; width: (c1 - c0)ch; top: (r0 + 0.5) × 20px; height: (r1 - r0) × 20px`, a 1px border, and content inset by `1.5ch` and `10px` so text starts on column `c0 + 2`, row `r0 + 1`.
2. **Row 0 is the top line**: reverse-video app name, workspace, then numbered tabs (`1 runs  2 datasets …`, current tab in reverse video), then search at the right (`/ ` prompt, an input, a blinking block cursor).
3. **The last row is the status line**: reverse-video mode (`NORMAL`), workspace, current view, the selection in cyan, and on the right the key hints as small dim chips (`F1 help  / search  r rerun  c compare  q quit`) and the last update time.
4. **Tiled panes, no gaps wasted.** Desktop: list pane top-left (118 columns × 20 rows), chart pane under it filling to the bottom (21 rows), detail pane top-right (65 columns), log pane under the detail. Panes are numbered in their titles (`[1] runs`, `[2] score…`, `[3] log…`, `[4] r-2291`) like lazygit, and the focused pane has an amber border while others are dim.
5. **Tables are character columns.** A CSS grid with `ch` widths and a 1ch column gap, dim uppercase heads, one data row per 20px row. Long values wrap onto a continuation row within their column. An error hangs under its row with `└ ` in red, followed by a dim line saying what to do.
6. **Counts live in the pane's bottom border** (`8 runs  5 passed  1 failed  1 running  1 queued`), right-aligned, like lazygit's "3 of 12".
7. **Mobile is the same grid at 50 columns.** A fixed top line (app, view, date), stacked full-width panes with knocked-in titles, the primary action as a two-row reverse-video bar (`[enter]  log pages`), and a fixed bottom row of key hints instead of a tab bar.

## Signature details
1. **Pane titles knocked into borders** with bracketed numbers, and counts in the bottom border.
2. **The inverted selected row** in cyan, spanning the pane's inner width, with `>` in the first column.
3. **Character-cell plots.** One row per value step (e.g. 0.005), one `●` per data point in amber, points 7 columns apart. The tolerance band is a `--bg-band` background on its rows, the baseline is a dim dotted row (`┄ ┄ ┄`), y labels sit on every other row (`0.850 ┤`), and notes sit at the right edge (`◂ band top 0.873`). The one point outside tolerance is red and bold, with its value and a short label beside it (`● 0.812  r-2291 regressed`). A legend row above the plot names each mark. Don't fill bars from a truncated floor: a wall of blocks hides the one change that matters.
4. **Text progress bars**: `[█████████████████████████░░░░░░░░░░░░░░░░] 61%`, filled cells amber, empty `░` in dim-text, sized to fill the pane.
5. **Key hints everywhere**: the status line, a dim hint line in the list pane (`j/k move  enter open  r rerun`), and a key chip on every action (`[r] rerun`).

## Components
- **Buttons:** text actions on the grid with a key chip: the key in reverse amber, then the verb (`r rerun`, `c compare with baseline`). The primary mobile action is a full-width two-row reverse-video bar. Hover turns the label cyan. *Destructive:* the same construction with a confirm prompt in the status line (`delete 3 runs? y/n`), never red. *Disabled:* dim text, dim chip, line-through, `cursor: not-allowed`, plus a dim sentence on the next row (`cancel unavailable: r-2291 finished at 02:14:02`).
- **Inputs and search:** a `/ ` prompt, a borderless input with a dim placeholder, and a 1ch blinking amber block cursor. Focus fills the field with `--bg-band`.
- **Tables / lists:** see Layout moves 5. Hover is a `--bg-band` row; selection is a cyan inverted row.
- **Navigation:** numbered tabs in the top line (current in reverse video). On mobile, a bottom row of `[key] label` hints with the current one in reverse video.
- **Status:** lowercase words: `passed`, `queued` (dim), `running █████░░░ 62%`, `FAILED` (red, bold), and `▼ regressed` for a regression.
- **Charts:** see Signature details 3. No SVG, no smooth lines. Skip text sparklines unless the values spread across most of the eight block heights; a flat series renders as one blob.
- **Readouts:** VT323, a dim label on the row above ("Δ vs baseline"), then one plain sentence interpreting the number.
- **Empty / loading / error:** written like CLI output. Empty: `(none yet)  press c to compare, then p to pin it here`. End of a stream: `-- end of log: run finished, not following --`. Unknown is `—` in dim, explained in a legend line (`—  not computed yet    0.000  computed, and zero`). Errors: red, `└ ` prefix, the exact exception, then what to do.
- **Collections and entity images:** the index is a grid of TUI tiles, each a box on the character grid (28 columns × 7 rows, one row and column apart) with its number knocked into the top border (`[007]`). Images are treated like terminal graphics in the phosphor palette. A caught entity is "lit": an 8-column amber cell with the image in duotone (`filter: grayscale(1) contrast(1.35); mix-blend-mode: multiply`). A seen entity is "unlit": a `--bg-band` cell with a dim-amber silhouette (`brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(-12deg) brightness(.55)`). A never-seen slot is a tile with a near-invisible border, faint row lines and only `[008]` in dim. A failed image shows a `░` box reading "img failed" (hide the `<img>` on `onerror`). Rarity: common in dim text, uncommon in amber, RARE in bold with an amber border, and MYTHIC in reverse video with a 3px double border. Selection is a cyan border with the number chip inverted in cyan. The detail pane puts the image on a large amber plate beside a field list. Stats are 20-cell text bars (`████████████▍░░░░░░░`, 5 points a cell) with a scale row. The evolution line is text with the current member inverted in cyan and the unknown one as `[008 ░░░░░░░░]`. Two dim legend rows under the grid explain lit, dark, empty, failed and the rarity marks.
- **Focus:** reverse video. `:focus-visible { background: var(--amber); color: var(--bg); outline: none }`. Every interactive element gets it, so tabbing looks like moving a TUI cursor.

## Density & motion
- One row is 20px, one column is 7.8px. Panes are separated by exactly one row or column. Desktop shows about 8 table rows, a 20-row chart, a 5-line log and a full detail pane without scrolling.
- Mobile: 50 columns at any width. Size the font from the viewport, `font-size: min(13px, calc(100vw / 30))` (JetBrains Mono is 0.6em wide), so the grid fits from 360px up without horizontal scroll. Panes stack with one row between; touch targets are full rows (the primary action is two rows, 40px, and the full width).
- Motion: only the search cursor blinks (`steps(1)`, 1.1s). Selection changes are instant. No typing effects, no boot sequences, no flicker.

## Don'ts
- Don't add CRT costume: no curvature, scanlines, vignettes, heavy glows, green-on-black or flicker.
- Don't break the grid: no proportional fonts, no font sizes other than 13px (VT323 readouts excepted), no paddings that aren't whole columns or rows, no rounded corners.
- Don't use cyan for anything but selection, or red for anything but failure. A regression is `▼` plus words.
- Don't use SVG or smooth charts; draw with characters, and keep charts light: points and shaded rows, not solid columns.
- Don't turn pane titles into floating headings or add cards inside panes. Structure is borders and blank rows.
- Don't hide the key hints. A terminal UI without its keys looks like a dark theme, not a TUI.
- Don't make everything bright. Most secondary text is `--dim-text`; amber is for what matters.

## Variants
Never changes: one character grid for the whole screen, the top line and the status line, tiled numbered panes with titles and counts knocked into their borders, the reverse-video selected row, character-cell plots, and key hints everywhere.

### Light
A daylight "paper tape" version. Reverse video still works because fills stay dark.

| Token | Dark (default) | Light |
|---|---|---|
| `--bg` | `#1A1206` | `#EEF0ED` |
| `--bg-band` | `#2A1E0B` | `#DFE3DE` |
| `--amber` (primary text, reverse fills) | `#FFB000` | `#3A2A08` |
| `--dim` | `#8A6A2A` | `#A89A7A` |
| `--dim-text` | `#A8843A` | `#6B5A33` |
| `--red` | `#FF5C39` | `#B8321A` |
| `--cyan` (selection) | `#6FD3E3` | `#0B6E7D` |

Drop the text glow entirely.

### Density
- Denser: 12px type on 18px rows (1ch = 7.2px), panes sharing borders like tmux with no blank row between.
- Roomier: 15px on 24px rows, about 160 columns at 1440; mobile stays 50 columns.

### Named aesthetics
- **Bloomberg terminal** (variant): blue-black `#05070D`, amber `#FF9F1C` labels, white `#EDEDED` values, yellow `#FFD60A` function-key chips, a command line in the top row. Green `#3ECF6E` and red `#FF4D4D` for price moves only.
- **Teletext / Ceefax** (variant): 40 columns on `#000000` in teletext's saturated colours, three-digit page numbers top left, VT323 double-height headlines, a fastext row of green, yellow, cyan and magenta keys. Red stays for failure.
- **Minitel** (variant): 40 columns on `#14161A` in greys `#E8E8E8` and `#9A9A9A`, no amber; key hints become Sommaire, Suite, Retour, Envoi mapped to real actions.
- **DOS / ANSI BBS** (variant): blue `#0000AA` screen, grey `#C0C0C0` text, yellow `#FFFF55` pane titles, cyan `#00AAAA` inverted selection, failure `#FF5555`, double-line box drawing, an F-key bar on the last row.
- **Cyberpunk** (variant): `#0B0D17`, yellow `#F2E600` text, cyan `#00E5FF` selection, red `#FF2A6D`, Chakra Petch 600 for the large readouts. Still no glitch or scanlines.
- **Green-screen terminal** (variant): only when asked by name, since it overrides the no-green Don't: `#0B1A0F`, `#7CE38B`, dim text `#5FA86B`, amber `#FFB000` selection. Every other Don't stays.
- **Receipt / ticket** (variant): the Light variant as thermal paper `#F6F6F3` with ink `#1F1F1F`, 42-column panes, dashed character rows as borders, totals under a row of `=`.
