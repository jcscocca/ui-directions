---
name: Quiet stationery
feels_like: A Japanese notebook, calm, precise and unhurried
use_for: consumer, reading, tools
fonts: Shippori Mincho, Zen Kaku Gothic New
colors: #EEF1F0, #2E3A59, #8A9099, #5E6570, #C23B22, #56627E
---

# Quiet stationery

## Essence
The screen is a page, or a two-page spread, of a good Japanese notebook: pale blue-grey paper with a 20px dot grid, one indigo ink, pencil grey for secondary marks, and a single small vermilion seal (hanko) stamped on the one thing that needs attention. Everything sits on the 20px grid. Lists are calm ruled entries with a lot of air between groups, and section labels are set vertically in the margins instead of as headings above content. State is shown with the marks people write in notebooks: ○ for passed, △ for "passed, but look", × for failed. Nothing is boxed, nothing glows, and there is only one colour that is not ink or pencil. The notebook has to survive at thumbnail size, so its object details are real and visible: dots dark enough to see at 50%, a stitched spine, a washi-tape name label, large vertical labels, and the hanko. Together they make the screen read as a bound notebook with one red stamp on it, not as a quiet grey page.

Feels like: a Japanese notebook, calm, precise and unhurried.

## Use for / avoid for
- **Use for:** personal and reading apps, journals, habit and progress trackers, review queues where one item a day needs attention, calm internal tools that are read more than operated.
- **Works for dashboards** when the list can be split into a few meaningful groups (needs attention / in progress / done) and one item is "open" at a time.
- **Avoid for:** high-frequency operations consoles, dense multi-series analytics, anything with several simultaneous alerts (there is only one seal), and brands that need loudness.
- **Breaks down** when content can't breathe. If you have to remove the group spacing and margins to fit the data, choose a denser direction.
- Not a dark-mode direction.

## Type
- **Shippori Mincho** (400, 500, 600): titles, book titles, the tally sentence, big figures, all signed numbers in tables, vertical margin labels, quotes. Its Latin is a quiet old-style serif.
- **Zen Kaku Gothic New** (400, 500, 700): UI and body text, buttons, IDs, notes, logs.
- Both fonts are Japanese fonts. Their `−` (U+2212), `+` and `±` are drawn full-width in Zen Kaku Gothic New. Set signed numbers in Shippori Mincho and write minus as the figure dash `‒` (U+2012), which is digit-width and aligns in columns. Digits in both families are already equal-width; still set `font-variant-numeric: tabular-nums`.

| Role | Family | Size / line-height | Weight |
|---|---|---|---|
| Big figure (selected score, current page) | Mincho | 36–48 / 40–60 | 500 |
| Page or item title | Mincho | 24–30 / 30–40 | 500 |
| Tally sentence, lead | Mincho | 17 / 20 | 400 |
| Heading on mobile | Mincho | 22 / 40 | 500 |
| Body, list rows | Gothic | 14 / 20 | 400, key noun 700 |
| Notes, captions, secondary | Gothic | 12–13 / 20 | 400, pencil text colour |
| Numbers in tables | Mincho | 15 / 20 | 400, 700 for the one that matters |
| Vertical margin labels | Mincho | 18 desktop, 15 mobile / 18–20, tracking 0.08em | 500, ink |
| Date in the mobile gutter | Mincho | 40 (day number), 22 vertical (full date) | 500 |
| Log lines | Gothic | 13 / 20 | 400 |

Scale: 12 / 14 / 17 / 22 / 30 / 48. Every line-height is 20px or a multiple (30px is allowed for Mincho titles and quotes on mobile). Sentence case everywhere; no caps, no letterspaced eyebrows. Labels are vertical or they are ordinary small text.

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap" rel="stylesheet">
```
- npm: `@fontsource/shippori-mincho`, `@fontsource/zen-kaku-gothic-new`
- Next.js: `import { Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google"` (weights as above; these fonts are large, so `subsets: ["latin"]` unless you need Japanese).

## Color
| Token | Hex | Role |
|---|---|---|
| `--paper` | `#EEF1F0` | Page. Pale blue-grey, never cream or white. |
| `--paper-fold` | `#E4E8E7` | The gutter strip between two pages. |
| `--dot` | `#A3ABAE` | Dot grid: 1.4px-radius dots every 20px. Dark enough to survive a 50% thumbnail. |
| `--rule` | `#CBD1D1` | Ruled lines under list items and table rows; margin line. |
| `--pencil` | `#8A9099` | Pencil marks: empty boxes, progress track, disabled outlines, dashed baselines. Not for small text (2.8:1). |
| `--pencil-text` | `#5E6570` | Secondary text, captions, vertical labels. |
| `--ink` | `#2E3A59` | Aizome indigo. All primary text, marks, lines, the primary button, the cover, the ribbon's family. |
| `--ink-wash` | `rgba(46,58,89,.07)` | Selected row, hover. |
| `--ink-band` | `rgba(46,58,89,.10)` | Tolerance band in charts. |
| `--ribbon` | `#3F4E73` | The fabric bookmark. |
| `--seal` | `#C23B22` | Vermilion. Used only for the hanko stamp. |
| `--thread` | `#56627E` | Binding thread stitched down the spine. |
| `--tape` | `rgba(63,78,115,.16)` | Washi tape, with a 45° stripe of the same ink at 10%. |

Contrast on paper: ink 9.9:1, pencil-text 5.2:1, seal 4.7:1 (AA). Paper on ink (primary button) 9.9:1. Pencil `#8A9099` is 2.8:1 and is for marks and disabled states only.

Status meaning: there is no status colour. Status is a written mark in ink: ○ passed, △ passed with a problem worth looking at, × failed, ◔ running, ◌ queued. A legend line at the page foot says so. The vermilion seal marks the one item to act on today, and it appears once per screen.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-mincho: "Shippori Mincho", "Hiragino Mincho ProN", "Yu Mincho", serif;
  --font-gothic: "Zen Kaku Gothic New", "Hiragino Sans", "Yu Gothic", sans-serif;
  --font-sans: var(--font-gothic);
  --font-serif: var(--font-mincho);

  --color-paper: #EEF1F0;
  --color-paper-fold: #E4E8E7;
  --color-dot: #BEC5C6;
  --color-rule: #CBD1D1;
  --color-pencil: #8A9099;
  --color-pencil-text: #5E6570;
  --color-ink: #2E3A59;
  --color-ribbon: #3F4E73;
  --color-seal: #C23B22;
  --color-thread: #56627E;

  --text-small: 12px;
  --text-body: 14px;
  --text-lead: 17px;
  --text-head: 22px;
  --text-title: 30px;
  --text-figure: 48px;

  --spacing: 20px;
  --radius-sm: 2px;
}
```
With `--spacing: 20px`, `p-1` is one grid cell. Keep `leading-[20px]` as the default. Dot grid: `background: radial-gradient(circle at 1.5px 1.5px, #A3ABAE 1.4px, transparent 1.9px) 0 0 / 20px 20px`. Without Tailwind, link `tokens.css`, which also defines `--dots` and `--line`.

## Layout moves
1. **The 20px grid is the layout.** The dot grid is visible on the page background, and every block's top, every row and every line-height is a multiple of 20px. Position blocks on the grid rather than letting margins accumulate. Dots sit at the top-left of each 20px cell (`circle at 1.5px 1.5px`), so a 20px line box that starts on a grid line puts the dots between lines, never through the x-height. Paddings inside rows must keep that (e.g. list items `padding: 0 0 19px` plus a 1px rule, table cells 19px plus a 1px rule). Anything that can't sit on the rhythm (inputs, 40–48px buttons, large figures) gets a `--paper` fill so no dot crosses its text.
2. **Desktop is a two-page spread, visibly bound.** Two pages meet at a 32px spine strip in `--paper-fold` with 1px `--rule` edges, and a 3px `--thread` saddle stitch runs down its centre (34px stitches, 18px gaps, rounded ends). The left page holds the list; the right page holds the open item. Page margins are wide: content starts 120px in from the outer edge and 60px from the top.
3. **Section labels live in the margin, vertically.** `writing-mode: vertical-rl`, Mincho 18px/500 in ink, tracking 0.08em, with a 20px pencil tick above. They must be readable at thumbnail size. They sit beside the top of the group they name ("Needs attention", "In progress", "Passed"; "Metrics", "Log"). No horizontal headings above lists.
4. **Lists are ruled entries in groups, with air between groups.** Each entry is two grid lines: line 1 is mark, ID, "**model** on dataset", score, delta; line 2 is a pencil sentence ("41m 55s, started 01:12 by M. Okafor."). 20px between entries, 60px or more between groups. Errors add lines under their entry in ink, followed by what to do.
5. **The open item is on the facing page, with a ribbon.** A fabric bookmark (18px wide, indigo, notched end via `clip-path`) hangs from the top edge of that page. The page reads top to bottom: ID, title in Mincho, a sentence of context, the big figure with the seal beside it, one sentence of interpretation, then metrics, chart, log and actions.
6. **Navigation is quiet text.** Section links in Gothic 14px with the current one underlined by a 2px ink rule; search is a pencil-underlined field in the header. On mobile, the same links sit in a fixed bottom strip.
7. **Mobile is one page for today, led by the date and the goal.** A 64px `--paper-fold` gutter with a double rule holds the day number (Mincho 40px), the month, and the full date set vertically at 22px, plus vertical section labels. The first content block is the goal as 20 large tick boxes, then a pen-outlined "Log pages" control, then the streak seal. The current book follows as a taped-in title slip (see Signature details), then the page count and progress line. Primary action stays above the fold.

## Signature details
1. **The hanko.** A 60–72px square seal: 3px vermilion outline with 2px corner radius, two stacked characters or a number and a character in Mincho 600, rotated -4° to -5°, `mix-blend-mode: multiply`, with a light SVG `feTurbulence` + `feDisplacementMap` (scale about 1.6) so the edge looks inked. One per screen, next to the thing that needs action, with a one-line caption saying what it means.
2. **Notebook objects, one of each.** A stitched spine on spreads; a washi-tape strip as the notebook's name label (the product name set on a translucent striped tape, rotated -1.5°, with torn ends via `clip-path`); a fabric ribbon bookmark on the open page. Use tape or a second ribbon, never both, and never rotate text people need to scan beyond 2°.
3. **A single thin ink line on the dots** for charts: 1.4px ink polyline, the tolerance band as a flat ink wash, baseline as a 4/4 dashed pencil line, the latest point as an open circle with its value written beside it. The chart's y scale is chosen so one dot row equals a round value, and the caption says it.
4. **Tick boxes for count goals**: 22px squares with 1.5px pencil outlines, filled ink when done, e.g. 20 boxes in two rows of 10 with 8 inked. On mobile they are the largest element after the date.
5. **The title slip.** A book or item is shown as a paper slip taped into the page: a lighter paper (`#F7F9F8`) with a 1px rule border, a 6px ink band across the top as its colour block, two washi-tape pieces over its top corners, and the title in Mincho 24px inside. Don't draw a small navy cover thumbnail.

## Components
- **Buttons:** 40px tall on desktop, 48px on mobile, 2px radius, Gothic 14–15px, verb labels ("Rerun evaluation", "Log pages"). *Primary (desktop):* ink fill, paper text; hover darkens to `#1F2940`. *Primary (mobile, notebook actions):* pen-outlined: transparent, 1.5px ink outline, 3px radius, Mincho 17px/600, 48px tall, auto width, with a faint offset underline like a pen stroke, and a 12px pencil note beside it saying what it does. Don't use a full-width filled block. *Secondary:* 1px ink outline, transparent; hover gets the ink wash. *Destructive:* secondary construction with a label that names the loss, never vermilion. *Disabled:* 1px dashed pencil outline, pencil text, `cursor: not-allowed`, and a 12px pencil sentence underneath with the reason.
- **Inputs and search:** no box. A 1px pencil underline 20px tall; focus makes it a 2px ink underline. The shortcut key is a tiny 1px pencil-bordered key (`/`).
- **Lists / tables:** ruled entries (Layout moves 4). Metric tables are 20px rows with a 1px `--rule` under each row and a pencil rule under the 12px pencil header; numbers right-aligned in Mincho.
- **Navigation:** text links, current = 2px ink underline and 700 weight.
- **Status:** notebook marks (○ △ × ◔ ◌ in ink, explained in a legend line at the page foot) plus words in the pencil sentence ("Failed after 0m 41s…", "Running, 62%"). Running also gets an 80px pencil line with a 3px ink segment at the percentage.
- **Charts:** see Signature details 4. No axes, no gridlines of its own: the paper's dots are the grid.
- **Progress (mobile):** a 1px pencil line across the column with a 3px ink segment to the percentage; the figure above it in Mincho ("184 of 304 pages").
- **Empty / loading / error:** one plain sentence in pencil text where the content would be ("Pinned comparisons: none yet."). `—` is explained in the page-foot legend ("means not computed yet; 0.000 is a real, computed score of zero"). Errors are written in ink: the code in 700, then what happened, then what to do.
- **Collections and entity images:** the index is a grid of specimens on the dot grid (4 columns of 140px, 160px rows on the 20px rhythm: a 60px slip, up to four 20px caption lines, and at least 20px clear before the next row's tape), with the number set vertically in Mincho beside each. A caught entity is pressed into the notebook: its image on a lighter slip (`#F7F9F8`, 1px rule border) held by two small washi-tape pieces at the top corners. A seen entity is a pencil shape drawn straight on the page, with no slip or tape (`filter: brightness(0)`, opacity .34). A never-seen slot is a dashed pencil box with only its number in Mincho. A failed image keeps the slip and shows a pencil-outlined "picture missing" box (hide the `<img>` on `onerror`). Rarity uses notebook marks set right after the name, with the rarity word kept for screen readers and the filter line saying what each mark means: common has none, uncommon ○, rare ◎, and mythic gets the vermilion seal with 幻 ("phantom", the Japanese word used for mythical creatures), which is also that screen's one seal. The selected entity's slip gets a 1.5px ink outline, and the ribbon marks the facing page. The detail page shows the image on a large taped slip beside a label field list (pencil label over ink value). Stats are 1px pencil tracks with a 3px ink segment and the value in Mincho. The evolution line is small slips with a dashed box for the unknown member. A one-line key at the page foot explains taped, pencil and dashed.
- **Focus:** `outline: 2px solid var(--ink); outline-offset: 3px; border-radius: 2px`.

## Density & motion
- Base unit 20px (one grid cell). Entries are 2 cells, entries are 1 cell apart, groups 3+ cells apart. Page margins 3–6 cells.
- Dense content is written as sentences rather than extra columns: duration, trigger and start time become one pencil line under the entry.
- Mobile: 80px left inset (64px date gutter), 16px right, fits from 360px without horizontal scroll, touch targets at least 48px, bottom nav 56px.
- Motion: none, except the primary button moving down 1px on `:active`. If a selection changes, the ribbon may slide to the new page (200ms ease-out). Nothing fades in.

## Don'ts
- Don't use vermilion for anything but the seal: not errors, not links, not the failed mark, not a second seal. Failure is ×, written in ink.
- Don't go cream, beige or white. The paper is a cool, pale blue-grey.
- Don't box content into cards or add shadows. Grouping comes from space and vertical labels. The only filled shapes are the desktop primary button, the title slip's ink band, the ribbon, tape and inked tick boxes.
- Don't let the notebook fade into a plain grey page: keep the dots visible, the spine stitched and the labels large. But don't pile on props either: no paper clips, coffee rings, torn-paper backgrounds or handwriting fonts.
- Don't break the 20px grid with arbitrary paddings; misaligned text against the visible dots looks careless immediately.
- Don't use the Gothic's full-width `−`, `+` or `±` for numbers in columns. Use Mincho with `‒` (U+2012).
- Don't turn the margin labels into horizontal tracked-caps headings. Vertical, small, pencil.
- Don't add decorative Japanese text. Characters in a seal must be correct and meaningful (確認 "check", 日 "day"), and there must be a caption in the interface's language beside it.
- Don't compress the air between groups to fit more rows. If it has to be dense, this is the wrong direction.

## Variants
Never changes: the visible 20px dot grid that everything sits on, the bound spread with a stitched spine, vertical margin labels, notebook marks for status, and one seal per screen.

### Dark
Not a dark-mode direction: the dots, pencil and seal all depend on paper. If a dark theme is required, treat it as the inside of a dark-covered notebook:

| Token | Light | Dark |
|---|---|---|
| `--paper` / `--paper-fold` | `#EEF1F0` / `#E4E8E7` | `#1C2230` / `#161B27` |
| `--dot` / `--rule` | `#A3ABAE` / `#CBD1D1` | `#3A4356` / `#2E3647` |
| `--pencil` / `--pencil-text` | `#8A9099` / `#5E6570` | `#5E6780` / `#9AA3B5` |
| `--ink` | `#2E3A59` | `#DCE1EA` |
| `--seal` | `#C23B22` | `#E0573C` |

Drop `mix-blend-mode: multiply` from the seal and tape, and raise the tape to 24% alpha.

### Density
- Denser: a 16px grid (12px body on 16px lines), groups two cells apart, margins two cells. Any tighter and the dots crowd the text; choose another direction.
- Roomier: entries three cells tall, groups four cells apart, page margins eight cells.

### Named aesthetics
- **Japandi / wabi-sabi** (variant): stone paper `#E9E8E3`, sumi ink `#2F2A26`, pencil `#8C877F`, a rougher seal edge (displacement scale 2.4). Imperfection lives in the seal and tape, never in alignment.
- **Scandinavian** (variant): paper `#F1F2EF`, ink `#26323A`, Schibsted Grotesk 400/500 for both faces, and the seal becomes one round red `#B5452F` punch mark.
- **Muji** (variant): kraft `#C9B48E` on the spine and the title slip's band only, and a burgundy `#7F0019` square seal.
- **Cottagecore** (variant): paper `#EEF1EA`, moss ink `#34452F`, gingham washi tape, a rose wax seal `#A8434F`, Libre Caslon Text optional. No floral wallpaper or script fonts.
- **Herbarium** (variant): the slip becomes a mounting sheet with narrow tape strips across the image and a label bottom right (name, collector, date, place); ink moss `#2F3B2E`.
- **E-ink** (variant): paper `#E8E8E3`, ink `#1C1C1C`, pencil `#8A8A86`, the seal printed in ink, images `grayscale(1) contrast(1.2)`, no motion, page turns instead of scroll.
- **Bullet journal** (variant): rapid-logging signifiers (• task, × done, > migrated, < scheduled, – note) replace ○ △ ×, with the key at the page foot; the index and monthly log are named by vertical labels.
