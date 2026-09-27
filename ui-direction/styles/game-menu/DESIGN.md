---
name: Game menu
feels_like: The pause menu of a 16-bit RPG, run as a working tool
use_for: consumer, tools
fonts: DotGothic16
colors: #080C26, #1B2A6B, #EDEFF7, #F4C542, #3CCB6A, #F2B233, #E5484D
---

# Game menu

## Essence
The screen is the menu layer of a 16-bit or 32-bit console RPG, used as a real tool. Flat navy windows with rounded off-white frames sit on a near-black blue void, separated by clear gaps. Every window carries a small **name plate** straddling its top border, like a speaker's name box. The main list is a **party**: each entity is a member row with a pixel portrait, and each of its records shows an HP-style **gauge** with a gold baseline tick. A **pointing-hand cursor** (a drawn pixel sprite) marks where you are at every level of nesting. The section menu and the selected row keep a dimmed "held" hand, and the command submenu you are acting in has the bright one. Submenus open as smaller windows that overlap their parent's border. Status changes are narrated in a **dialogue box** along the bottom, with a bobbing advance arrow. One pixel face, DotGothic16, sets every word. The most memorable move is the three hands: you can read the navigation path (section, then item, then command) from the cursors alone.

Feels like: the pause menu of a 16-bit RPG, run as a working tool.

## Use for / avoid for
- **Use for:** consumer apps with a roster of things that have levels, progress or health: collection trackers, habit and reading trackers, fitness logs, hobby inventories, game companions. Also small monitoring tools where each entity has one headline score against a target (evals, jobs, services), because the gauge and the baseline tick carry that well.
- **Works on mobile** as a save-file screen: a stack of framed windows, the primary action as a command with the hand beside it, and the section menu as a 2 by 2 command grid fixed at the bottom.
- **Avoid for:** long-form reading, dense tables with more than about 8 columns, forms with many fields, and anything that has to look corporate or clinical. The pixel face tops out around 60 characters per line before it tires the eye.
- **Breaks down** when there is no selection or no roster. Without "this member, this command" the hands and plates become a costume. It also breaks down as a plain tiled dashboard: if windows lose their plates, gauges and cursor, it is a dark panel layout, not this direction.

## Type
One family, used for everything: **DotGothic16** (400 only; set `font-synthesis: none`, never faux bold or italic). It is a 16-dot Japanese bitmap face with half-width Latin, so digits and code align without a separate monospace and numbers stay tabular. Sizes must be multiples of 16px, or 20/24 where a step is needed; odd sizes blur the pixels. Emphasis comes from colour (gold, white, label blue) and size, never weight.

| Role | Size / line-height | Colour | Notes |
|---|---|---|---|
| Hero readout (selected score) | 64 / 56 | text | 4x bitmap, as data |
| Damage number (delta beside the hero) | 32 / 36 | bad-text | raised 18px above the hero baseline |
| Counters (streak, completion) | 32 / 36 | gold or text | |
| Window heading, primary command | 24 / 28 | text or gold | Sentence case |
| Dialogue text on screens with room | 20 / 30 | text | |
| Body, rows, labels, log | 16 / 24 | text or label | the default |
| Name plates | 16 / 24 | gold | Sentence case, never caps |

- Labels are sentence case, never tracked caps. Column labels and field names are label blue; values are text white.
- Logs and code use the same face; it is fixed-width already.
- Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">
```
- npm: `@fontsource/dotgothic16`
- next/font: `import { DotGothic16 } from "next/font/google"`

## Color
| Token | Hex | Role |
|---|---|---|
| `--void` | `#080C26` | page behind the windows, gauge tracks, sprite outlines |
| `--window` | `#1B2A6B` | window fill. Flat, never a gradient |
| `--window-deep` | `#101B4E` | inset fields, portrait wells, rules between members |
| `--select` | `#26388A` | selected row band |
| `--frame` | `#EDEFF7` | 3px window frames, gauge outlines |
| `--frame-inner` | `#6F80C8` | the 1px inner line inside every frame, selected-row outline |
| `--text` | `#EDEFF7` | values, body |
| `--label` | `#A9B8F2` | field names, column labels, secondary text, stat bars |
| `--gold` | `#F4C542` | name plates, the current item, baseline ticks, counters, rarity pips, focus ring |
| `--ok` | `#3CCB6A` | healthy gauge, passed |
| `--charge` | `#F2B233` | in-progress gauge (running, today's goal not met), warnings |
| `--bad` | `#E5484D` | regression gauge, KO badge, failed marker |
| `--bad-text` | `#FF9496` | red text on navy (errors, negative deltas) |
| `--disabled` | `#6C77A8` | disabled commands, empty slots |
| `--mat` / `--mat-floor` | `#DCE2F7` / `#B9C4EC` | light plate behind entity artwork |

Contrast on `--window`: text 11.5:1, label 6.8:1, gold 8.1:1, ok 6.3:1, charge 7.0:1, bad-text 6.2:1, all AA for body text, and all stay above 4.8:1 on the `--select` band. Raw `--bad` on navy is 3.4:1, so it is used only for fills and the KO badge, never for small text. Disabled is 3:1 on purpose and always paired with a line-through and a reason.

Status meaning: green is a healthy score, amber is charging or unfinished, red is below baseline or failed, and a red **KO** badge means the run died (failed), which is different from a regression. Gold is never a status; it means "current, reference, or count".

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-menu: "DotGothic16", "MS Gothic", monospace;
  --color-void: #080C26;
  --color-window: #1B2A6B;
  --color-window-deep: #101B4E;
  --color-select: #26388A;
  --color-frame: #EDEFF7;
  --color-frame-inner: #6F80C8;
  --color-label: #A9B8F2;
  --color-gold: #F4C542;
  --color-ok: #3CCB6A;
  --color-charge: #F2B233;
  --color-bad: #E5484D;
  --color-bad-text: #FF9496;
  --color-disabled: #6C77A8;
  --color-mat: #DCE2F7;
  --radius-window: 10px;
  --radius-plate: 8px;
  --spacing: 4px;
  --text-base: 16px;
  --text-base--line-height: 24px;
}
```
Build the window frame as a utility: `.win { @apply bg-window border-3 border-frame rounded-window; box-shadow: inset 0 0 0 2px var(--color-window), inset 0 0 0 3px var(--color-frame-inner); }`. Without Tailwind, link `tokens.css`: it defines the tokens plus `.win`, `.plate`, `.cursor`, `.gauge` and the focus ring.

## Layout moves
1. **Windows on a void.** The page is `--void`. Every region is a `.win` with a 3px off-white frame, 10px radius, a 1px inner line 2px inside the frame, and 16–28px gaps between windows (28px vertically, so plates have room). Nothing sits directly on the void except windows.
2. **Every window has a name plate.** A small framed box (gold text, 8px radius) straddles the top border at 16px from the left, 18px above it. It names the window: "Party", "Status: r-2291", "History", "Wildbook". It replaces headings and eyebrows. A search field is built the same way and floats on the right end of the main window's top border.
3. **The main list is a party.** Group records by their owning entity. Each group is a member block: a 56px portrait well with a 16x16 pixel sprite drawn at 2.5x on the left, the member's name and count under it, then its records as rows. Each row puts the headline number in a gauge; secondary fields go on a second line as label-value pairs (`Took 14m 02s  By schedule  Started 02:00`). Members are separated by a 2px `--window-deep` rule, not boxes.
4. **Command column on the right.** Section navigation is a vertical command list (28px items, hand in a fixed 32px gutter) at the top of the right column, with a summary window beside it that lists counts as right-aligned numbers, like a gold counter. The selected item's **status window** fills the rest of the column.
5. **Submenus overlap their parent.** The selected item's actions open as a smaller window positioned over the status window's lower-left border (`left: -34px; bottom: -6px`) so it visibly sits on top of its parent. Only frame and padding are covered, never data.
6. **Dialogue box along the bottom.** A wide, short window (about 180px tall on desktop) narrates what happened in one plain sentence, followed by the raw lines (a log tail, a description). Its plate names the speaker. A gold pixel arrow bobs in the bottom-right corner.
7. **Mobile is a save-file screen.** 12px gutters. Stack: a thin title window (app name in gold, date right), the active member (cover or portrait left, gauge right), a pair of small windows (goal gauge, streak counter), then the primary command window with the hand. The dialogue box and secondary lists follow and may scroll. Navigation is a 2x2 command grid in a fixed window at the bottom, masked from the content behind it by a 12px `--void` ring.
8. **Collections are a bestiary.** A numbered list window (No., art thumb on a light mat, name, type, rarity pips, count) on the left with the filters in a window above it; the entity's data window (large art on a light plate, number and name, stat gauges, facts, evolution line, drops) on the right, with its commands in an overlapping submenu and its description in the dialogue box.

## Signature details
- **The pointing-hand cursor.** A 16x10 pixel sprite drawn in SVG (`<symbol>` + `<use>`), shown at 32x20 with `shape-rendering: crispEdges`. Bright = the command you're acting in. 45% opacity = a held selection at an outer level. Every level of the path has one, and every row keeps a fixed gutter for it so nothing shifts.
- **Gauge with a baseline tick.** 12px tall: 2px white outline, 2px void gap, flat fill. A 2px gold tick that extends 6px above and below marks the baseline or target. Green if healthy, red if below the noise band, amber while charging, empty with a dashed outline when queued.
- **Damage number.** The delta beside a hero score is set at 32px in `--bad-text`, raised 18px, like a hit number floating off a sprite.
- **KO badge.** A failed record gets a small red block with "KO" in white next to the word "Failed", and its error message in red on the next line. A regression is never KO.
- **Dialogue box with advance arrow.** Events are told as sentences ("r-2291 fell below its baseline."), not as toasts or banners.

## Components
- **Buttons / commands:** text in a command window with the hand gutter. Primary = the command under the bright hand; on mobile it's 24px gold in a 52px tall row. Hover turns text gold; hover on mobile commands fills `--select`. Disabled = `--disabled` text with a 2px line-through and the reason on the same line or right below ("already finished 02:14:02", "Team is full (6 of 6). Remove one to add Lanternfin."). There is no filled button shape.
- **Search:** a framed `--window-deep` field on the main window's top border, placeholder in label blue, a framed key cap `/` in gold. The frame turns gold on focus.
- **Lists:** CSS grid rows inside a window, 34–52px tall, no zebra, no cell borders. The selected row gets a `--select` band, a 1px `--frame-inner` outline and gold ID text. Numbers right-aligned and tabular.
- **Navigation:** a vertical command list (desktop) or a 2x2 command grid (mobile). Current section is gold with a held hand and `aria-current`.
- **Status indicators:** words in status colours (Passed green, Running amber, Queued label blue, Failed with KO badge). Never a coloured dot alone.
- **Charts:** drawn in SVG inside a window: a flat `--select` band for the noise range, a gold dashed baseline, white 6px square points joined by a 2px line, the outlier as a red 10px square with a white outline and its label in `--bad-text`. Axis labels 16px label blue, no gridlines.
- **Empty / loading / error:** loading is a label-blue word with stepped dots in the command list ("Datasets loading..."). `—` means not computed and is explained in a legend at the foot of the list window; `0.000` is a real score. Errors name the object and the cause in `--bad-text`.
- **Focus:** a 3px gold outline, 3px offset, on every interactive element. Autofocus lands on the first command of the open submenu.
- **Collections and entity images:** entity art always sits on a light `--mat` plate (a lighter `--mat-floor` band along the bottom of large plates suggests a battle floor), so dark artwork reads on navy. List thumbs are 36x32; the detail plate is 300x226. **Seen** entries use `filter: brightness(0)` at 78% opacity: a black silhouette on the pale mat, with the name in label blue and "Seen, not caught" in place of the count. **Unknown** entries show only their number (in disabled blue) and a 2px dashed empty slot spanning the rest of the row. A **failed image** is hidden by `onerror` and replaced by a neutral box: an inset 2px grey-blue outline with a diagonal stroke on the mat, and the name stays. **Rarity** is a count of 5x5 pixel diamond pips: Common is one hollow label-blue pip (quiet), Uncommon two white, Rare three gold, and Mythic four gold pips **plus a 2px gold frame around the whole row** and a gold number. The filter row uses the same pips, so it doubles as the legend. **Stat blocks** are label/number/gauge rows (label-blue bars, 0–100) with a 0/50/100 scale under the last bar. The evolution line is three framed thumbs joined by pixel arrows; the current one has a gold frame and an unknown stage is a dashed slot with its number.

## Density & motion
- Base unit 4px; common steps 8, 12, 16, 20, 28. Window padding 16–22px. Desktop rows are 24px text lines; a record is one or two lines. Gaps between windows are 16px horizontally and 28px vertically.
- Mobile keeps 16px text and 12px gutters, raises the primary command to 52px tall and nav items to 36px, and lets secondary windows scroll under the fixed nav.
- Motion: the dialogue arrow bobs 4px in two steps each second, and the loading dots step. Both are `steps()`, never eased, and the arrow stops under `prefers-reduced-motion`. Nothing fades or slides in.

## Don'ts
- Don't add window title bars, close boxes, a menu bar or draggable-looking chrome. That is a desktop OS, not a game menu.
- Don't draw frames as single-character box lines or set everything in a coding mono on black. That is a terminal.
- Don't gradient the window fill (the classic FF blue gradient is the first temptation) and don't add glow, drop shadows or scanlines.
- Don't use emoji or font arrows for the cursor. Draw the hand as a pixel sprite, and keep the gutter so rows don't shift.
- Don't use sizes that aren't 16px multiples (or 20/24) for DotGothic16, and don't bold or italicise it.
- Don't invent game flavour the data doesn't have: no levels, XP, gil or class names made up from nothing. Map real fields onto game components (score to HP gauge, failure to KO, progress to a charge gauge) and use the real words.
- Don't let submenus cover data. They overlap borders and padding only.
- Don't use gold for status, or red for anything decorative.

## Variants
What never changes: windows on a void with name plates, the pixel hand cursor at every nesting level, gauges with a baseline tick, the party or bestiary list, submenus overlapping their parent, and the dialogue box.

### Light
A daylight handheld-RPG look. The frames go dark and the fill goes pale.

| Token | Light value |
|---|---|
| `--void` | `#C9D2E8` |
| `--window` | `#F7F8FC` |
| `--window-deep` | `#E6EAF5` |
| `--select` | `#DDE4FA` |
| `--frame` | `#2A2F45` |
| `--frame-inner` | `#9AA3C0` |
| `--text` | `#1C2033` |
| `--label` | `#4F5A86` |
| `--gold` | `#9A6A00` (text), plates keep `#F4C542` as a fill with dark text |
| `--ok` / `--charge` / `--bad-text` | `#177A3B` / `#8F5A00` / `#B42330` (all at least 4.5:1 on the window) |

Gauge tracks become `#2A2F45` so fills keep their contrast. The hand sprite's outline stays dark and its fill stays white. Mats can drop to `#FFFFFF`.

### Density
- **Denser:** drop to one line per record (move the label-value pairs into a tooltip or the status window), 30px rows, 12px window padding, 20px vertical gaps with plates at 16px. Keep text at 16px; DotGothic16 below 16px blurs, so density comes from fewer lines, not smaller type.
- **Roomier:** set body at 20px (line-height 30px), hero at 96px, command items 40px, and let only the party window and the dialogue box share the first screen. Put the status window on its own screen, opened from the party list.

### Named aesthetics
- **JRPG menu / game HUD** (variant): this is the direction as written. For a closer classic "blue window" look, the only allowed change is a two-tone flat split (top 40% `#23358A`, the rest `#1B2A6B`), never a gradient.
- **Dragon Quest-style windows** (variant): `--window: #000000`, `--void: #101010`, 3px `#FFFFFF` frames with a 4px radius and no inner line, and the window's first line as its title in place of a name plate. Keep the hand (or a pixel right-pointing triangle), gauges and dialogue box.
- **Handheld monster collector** (variant): the Light variant with a thicker 4px frame in `#3A4A6B` and a 12px radius, and the dialogue box at full width along the bottom as the main narration. Gauges switch colour at 50% and 20% remaining, the way HP bars do.
