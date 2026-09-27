---
name: Windowed desktop
feels_like: A classic Platinum-era desktop where the front window is your selection
use_for: tools, consumer
fonts: Jersey 10, Nunito Sans, Fira Mono
colors: #DDDDDD, #FFFFFF, #888888, #222222, #3A4FC7, #4F7F88, #C42B1C, #F2C230
---

# Windowed desktop

## Essence
The screen is a late-90s desktop (Mac OS 8–9 "Platinum", with a little BeOS directness) used as a working tool. A teal dither-patterned desktop carries overlapping windows with 1px black frames, bevelled platinum bodies and striped title bars. **Stacking order is the information architecture:** the window about the current selection is in front, active and striped. Windows that support it (its history, its log) sit behind that one but above the collection. The collection itself (the list or icon view you picked from) is furthest back, with a flat inactive title bar. Every overlap covers only chrome or blank space, never data. A menu bar with rounded screen corners runs along the top. Sections are folder icons on the desktop, and the open one is drawn hatched, the way an open folder looked. Explanations arrive as Balloon Help, failures as real alert dialogs with Stop and Caution icons, and empty panes as window-shaded title bars. The most memorable move is the cascade itself: at thumbnail size you see a desktop with a front window, and you can tell what is selected before reading a word.

Feels like: a classic Platinum-era desktop where the front window is your selection.

## Use for / avoid for
- **Use for:** monitoring and inspection tools with a list plus one selected item (runs, jobs, tickets, files, records). Also collection trackers and inventories, where an icon view with a Get Info window fits naturally. Admin tools that want personality without losing density. Hobby and consumer apps whose users enjoy a tactile, playful tool.
- **Works on mobile** as one full-screen window: a title bar, a menu-bar strip with the date, grouped content in etched group boxes, a big default-ringed primary button and a Control Strip as the bottom navigation. A Stickies-style note may overlap the window's lower edge.
- **Avoid for:** marketing pages, long-form reading, and anything where the chrome would outweigh the content (a single form, a settings page with 3 fields). Also avoid it for products that must feel contemporary or corporate.
- **Breaks down** when there is no selection. Without "the thing I'm looking at" in front, the overlap has nothing to express and you get a costume. It also breaks down when windows are tiled side by side. That is a pane layout with title bars, not this direction.

## Type
- **Jersey 10** (400 only; set `font-synthesis: none` so it is never faux-bolded) is the chrome face: menu bar, window titles, button labels, Control Strip labels and keycaps. It's a condensed pixel face whose digits stay distinct at 16px, which keeps IDs in title bars readable (`r-2291 Info`). Never use it for data, body text or table cells.
- **Nunito Sans** (400, 600, 700, 800; italic 400/600; optical size axis 6–12) is the content face. Its large x-height and open apertures hold up at 11–13px the way screen sans faces of that era did. It sets body, tables, labels, big numbers and headings.
- **Fira Mono** (400, 500) is only for code and logs: log lines, error messages, exception text.
- `font-variant-numeric: tabular-nums` on `body`. Numeric columns are right-aligned.

| Role | Family | Size / line-height | Weight | Case |
|---|---|---|---|---|
| Hero number (selected score) | Nunito Sans | 56 / 0.95, tracking -0.02em | 800 | as data |
| Window content heading | Nunito Sans | 20–22 / 1.1 | 800 | Sentence |
| Sub-readout (delta, page count) | Nunito Sans | 15 / 1.3 | 400 + 800 for the number | Sentence |
| Body, list rows | Nunito Sans | 12–13 / 1.35 | 400 | Sentence |
| Column heads, group box legends, property labels | Nunito Sans | 11–12 | 700 | Sentence (never caps) |
| Secondary notes, icon labels | Nunito Sans | 11 / 1.3 | 400–600 | Sentence |
| Menu bar, window titles, buttons | Jersey 10 | 16 / 1 (20px on a mobile primary button) | 400 | Title or sentence |
| Floating palette title | Jersey 10 | 14 / 1 | 400 | Title |
| Log, errors | Fira Mono | 11.5–12 / 17px | 400, 500 for the level keyword | as data |

Seen-but-not-owned items (aliases) set their name in **italic**. That is a state, not decoration.

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jersey+10&family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,600;0,6..12,700;0,6..12,800;1,6..12,400;1,6..12,600&family=Fira+Mono:wght@400;500&display=swap" rel="stylesheet">
```
- npm: `@fontsource/jersey-10`, `@fontsource-variable/nunito-sans`, `@fontsource/fira-mono`
- next/font: `import { Jersey_10, Nunito_Sans, Fira_Mono } from "next/font/google"`

## Color
| Token | Hex | Role |
|---|---|---|
| `--platinum` | `#DDDDDD` | window bodies, title bars, menu bar, buttons |
| `--platinum-deep` | `#CCCCCC` | sorted column header |
| `--bevel-hi` | `#FFFFFF` | top-left bevel highlight, title-bar stripes |
| `--bevel-lo` | `#888888` | bottom-right bevel shadow, stripes, etched rules |
| `--frame` | `#222222` | 1px window frames, button borders, default-button ring |
| `--paper` | `#FFFFFF` | list views, documents, wells, balloons |
| `--sorted` | `#EEEEEE` | cells of the sorted column in a list view |
| `--ink` | `#1A1A1A` | all text |
| `--muted` | `#555555` | secondary text (counts, numbers before names) |
| `--disabled` | `#999999` | disabled button text and border |
| `--select` | `#3A4FC7` | active selection fill (white text), focus rings, hover on menus |
| `--select-soft` | `#D6DAF3` | selection inside an inactive window |
| `--progress` | `#7482DA` | progress bars, stat bars, streak cells |
| `--desktop` | `#4F7F88` | desktop background |
| `--desktop-dot` | `#46737B` | the 2px checker dither on the desktop |
| `--stop` | `#C42B1C` | failure only: the Stop icon, error text |
| `--caution` | `#F2C230` | regression or warning only: fill of the Caution triangle |
| `--sticky` | `#FFF3A0` | Stickies-style note windows |

Contrast: ink on platinum and on paper is well above AA. `--muted` on platinum is 5.5:1, and white on `--select` is 6.7:1. `--stop` on white is 5.7:1, so error text can be red. `--caution` is never used for text, only as the triangle fill with a black glyph. The inactive title colour `#6A6A6A` on platinum (about 4:1) is chrome, not content. Disabled grey is deliberately low contrast and always paired with a written reason.

Status meaning: the **Stop** octagon (red) marks failure. The **Caution** triangle (yellow, black mark) marks a regression or warning. Plain text marks passed and queued, and a progress bar marks running. Rarity or category colours use the **Label** system (pale fills behind names; see Components). They never reuse red, yellow or the selection blue.

## Tailwind
```css
@theme {
  --font-chrome: "Jersey 10", "Chicago", monospace;
  --font-sans: "Nunito Sans", "Geneva", "Verdana", sans-serif;
  --font-mono: "Fira Mono", "Monaco", monospace;

  --color-platinum: #DDDDDD;
  --color-platinum-deep: #CCCCCC;
  --color-bevel-hi: #FFFFFF;
  --color-bevel-lo: #888888;
  --color-frame: #222222;
  --color-paper: #FFFFFF;
  --color-sorted: #EEEEEE;
  --color-ink: #1A1A1A;
  --color-muted: #555555;
  --color-disabled: #999999;
  --color-select: #3A4FC7;
  --color-select-soft: #D6DAF3;
  --color-progress: #7482DA;
  --color-desktop: #4F7F88;
  --color-desktop-dot: #46737B;
  --color-stop: #C42B1C;
  --color-caution: #F2C230;
  --color-sticky: #FFF3A0;

  --radius-button: 5px;
  --radius-none: 0;
  --shadow-front: 3px 3px 0 rgb(0 0 0 / .45);
  --shadow-back: 1px 1px 0 rgb(0 0 0 / .35);
  --spacing: 4px;
}
```
Bevels are two inset shadows: raised `inset 1px 1px 0 #FFF, inset -1px -1px 0 #888`, pressed or inset `inset 1px 1px 0 #888, inset -1px -1px 0 #FFF`. Without Tailwind, link `tokens.css` (all tokens, including `--bevel-out`, `--bevel-in`, `--titlebar: 20px`, `--menubar: 22px`), and copy the chrome rules from `style.css`.

## Layout moves
1. **The page is a desktop.** The body is the dither-patterned desktop at a fixed canvas (1440×900 for tools). Windows are absolutely positioned. A 22px menu bar spans the top, with black rounded corners (8px) at both ends.
2. **One rule for stacking:** the window about the selection is front and active (striped title, close/zoom/shade boxes, 3px hard shadow). Windows that elaborate on the selection (history chart, log) sit above the collection window. The collection (list view or icon view) sits at the back. Floating palettes (filters) are always above documents, and Balloon Help is above everything. Show 4–6 windows; more becomes clutter.
3. **Overlap only over chrome or blank space.** Arrange the cascade so front windows cover scroll bars, empty list area, padding or the tail of a title bar. A data row, value or button must never be hidden. Check this on every screenshot. The overlap must be visible, though: at least one front window should clearly sit over two others. Tiling windows edge to edge is a failure of this direction.
4. **The collection is a Finder window.** A list view has a status strip (item counts on the left, search field on the right), bevelled column headers, a shaded sorted column with a ▾ in its header, folders with disclosure triangles for grouping, and a 20px row rhythm. An icon view uses a fixed grid of icon cells (art, label, one or two lines of meta). The selected item keeps a soft-blue selection because its window is not active.
5. **Detail is a Get Info window.** Put a header row (32px icon, heading, one-line context) above an etched rule. Below it go the headline number or artwork on the left and a right-aligned property list (bold labels, values) on the right. Then come group boxes for sub-tables (metrics, stats, evolution), and a button row at the bottom with the default action on the right carrying the ring.
6. **Navigation is desktop icons.** Top-level sections are 32px folder or document icons in a column at the desktop's right edge, with white label boxes. The current section's folder is drawn hatched (open) and its label inverted black. App-level commands live in the menu bar (App, File, Edit, View, plus one domain menu).
7. **Empty and secondary panes are window-shaded:** a title bar only, whose title states the state (`Pinned comparisons: none yet`, `Team: 6 of 6, full`).
8. **Mobile:** one full-width window (6px desktop margin each side) under a sticky menu bar that shows the date where the clock goes. Content is stacked group boxes. A full-width default button (44px) sits above the fold. A Stickies-style note may overlap the window's bottom padding. A Control Strip, a platinum strip anchored to the left edge with a rounded tab on its right end, is the bottom navigation, and the current section is drawn pressed in.

## Signature details
- **Striped active title bar vs. flat inactive ones.** Six 1px white/grey stripe pairs with a platinum gap behind the centred title and the boxes. Only one window per screen is striped, plus floating palettes.
- **Mac-style alert glyphs as the status system.** A red Stop octagon for failure and a yellow Caution triangle for regression, used inline at 12px in lists and at 28–40px in dialogs and callouts.
- **Balloon Help explains ambiguous values.** A white rounded balloon (12px radius) with a drawn tail points at the exact cell, such as the `—` that means "not computed", and says what it means and how it differs from `0.000`.
- **The default-button ring.** The primary action has a 3px black ring 2px outside its border. Disabled buttons turn grey in text and border, lose the bevel, and have the reason written beside them.
- **1-bit dither patterns as fills.** A 2px checker marks tolerance bands in charts, the desktop, the hatched open folder and the mythic frame, instead of gradients or transparency.

## Components
- **Buttons:** platinum face, 1px `#222` border, 5px radius, raised bevel, Jersey 10 16px label, 22px min height, 14px side padding. Pressed state: `#9A9A9A` fill, inset bevel, white label. Default: add `outline: 3px solid #222; outline-offset: 2px`. Disabled: `#999` text and border, no bevel, plus a written reason next to it. There's no red "destructive" button. Destructive commands ask through an alert dialog with the Stop or Caution icon.
- **Inputs and search:** a white field with a 1px black border and an inset shadow on the top-left. Placeholder `#6A6A6A`. The keyboard shortcut is a small platinum keycap inside the field's right end. Focus is a 2px `--progress` ring 1px outside.
- **Lists and tables:** white well, bevelled platinum column headers (11px, 700), sorted column header in `#CCC` and its cells in `#EEE`. Rows are 20px with no zebra striping. Groups are folders with disclosure triangles. An expanded row (an error, say) shows its detail as an indented line under the row in Fira Mono. The active selection is a solid `--select` row with white text. An inactive selection is `--select-soft` with a 2px blue edge on the left.
- **Navigation:** desktop icons (sections), the menu bar (commands), and the Control Strip on mobile. Hovering a menu title inverts it to selection blue with white text.
- **Status:** plain text with an inline glyph. Failed is a Stop icon plus bold "Failed". A regression is a Caution icon on the delta. Running is a mini progress bar (40×9) plus the percentage. Queued is in muted text. Explain the regression in a Caution callout inside the Info window: a white box with a 1px black border and a 2px grey hard shadow.
- **Charts:** drawn in a white well inside their own window. Use 1px grid rules in `#E4E4E4`, a black axis, a 1.5px black line and 6px square markers. The noise or tolerance band is a dithered rectangle with grey edges, and the baseline is a dashed black line. The anomalous point is a hollow 9px square with a Caution glyph and a right-aligned label. The legend sits above the plot with drawn swatches.
- **Logs:** a SimpleText-style window with a plain white document, Fira Mono 12/17, and no colour except the level keyword in 500 weight.
- **Alerts:** a moveable dialog with a flat title bar ("Run failed"), a 40px glyph on the left, a bold one-line headline naming the object, the error in Fira Mono, one sentence saying what it means and what to do, and the buttons bottom-right (secondary action, then OK with the default ring).
- **Empty, loading and error states:** empty panes are window-shaded bars that state the emptiness. Loading is a platinum progress bar with a number. Errors are alert dialogs or an indented red Fira Mono line under the failing row. Unknown values are `—`, always with a balloon or note explaining them.
- **Focus:** `outline: 2px solid #3A4FC7` with a 2px offset on buttons and links. On a desktop icon, focus inverts the label box to selection blue. The default ring turns blue when focused.
- **Collections and entity images:** the collection is a Finder icon view. Each cell has 72px art on paper with no frame, a name label box, and 1–2 lines of meta (types, then rarity and count). **Owned** items show full art and upright names. **Seen, not owned** items are aliases: the art as a silhouette (`filter: brightness(0); opacity: .5`), an alias-arrow badge (a 16px white box with an arrow) at the bottom-left corner, and the name and meta in italics. **Unknown** slots are a generic blank document icon with a dashed outline and only the number, muted. A **failed image** falls back to a platinum box with a grey 1px border reading "no image", placed behind the `<img>`, which removes itself `onerror`. The name and meta stay. **Rarity is the Finder Label system:** Common has no label (quiet white box), Uncommon is a pale green `#C4E3B9` label, and Rare is pale cyan `#9FDCE8`. Mythic is solid magenta `#9B2F94` with white text **plus** a 2px magenta frame with a dithered fill behind the art, so it stays unmistakable even as a silhouette. The filter palette's Rarity checkboxes double as the legend. The detail is a Get Info window: a 250px artwork plate in a white well, a property list (rarity, habitat, first caught, count, drops), the description in a "Comments:" well, stats as labelled progress bars with a 0/50/100 scale, and an evolution line of small icon cells joined by drawn arrows, where an unknown stage is a blank document.

## Density & motion
- Base unit 4px. List rows 20px. Metrics rows 24px. Window title bars 20px, menu bar 22px, floating-palette title bars 14px. Window padding 14–18px. Group boxes have 12px padding and a legend notched into their etched border.
- Tool screens are dense: 12–13px content, tight groups inside windows, and generous space only as desktop between windows.
- Mobile keeps 12–14px body, but the primary button is 44px, list rows get 5px vertical padding, and nav targets are 44px tall.
- Motion only answers actions. Buttons press in instantly (no transition). If a window opens, draw 3–4 outline "zoom rectangles" between the source item and the window over about 150ms, and nothing else. Nothing fades or slides on load.

## Don'ts
- Don't tile windows edge to edge or line them up in a grid. If nothing overlaps, you have built a pane layout, not this direction.
- Don't let an overlap hide data. Move the window, not the value.
- Don't stripe more than one document window. Active means front.
- Don't dim inactive windows' content to unreadable grey. Only the chrome goes inactive (flat title, grey title text, blank scroll bars).
- Don't use the pixel face for data, body copy or table text, or at sizes where its digits blur (below 14px).
- Don't add gradients, blur, translucency or soft shadows. Depth is the 1px bevel plus a hard offset shadow, and only the front window gets the 3px one.
- Don't reproduce a real OS vendor's logo, trademarked icons or wallpaper. Draw your own generic glyphs.
- Don't use emoji or icon-font icons. Glyphs are small hand-drawn SVGs in the same 1px black-outline style.
- Don't make it a nostalgia joke. No fake crash bombs, "happy computer" faces, beeps or boot screens. It's a real tool that happens to be built out of windows.

## Variants
Never changes: overlapping windows whose stacking order is the information architecture (the selection in front and striped), overlap only over chrome or blank space, the Finder-style collection window, the Get Info detail, desktop icons for sections, and alert glyphs for status.

### Dark
A "graphite night" appearance. Stop and Caution keep their colours, and balloons and Stickies stay light.

| Token | Light | Dark |
|---|---|---|
| `--platinum` / `--platinum-deep` | `#DDDDDD` / `#CCCCCC` | `#3A3A3D` / `#2F2F32` |
| `--bevel-hi` / `--bevel-lo` / `--frame` | `#FFFFFF` / `#888888` / `#222222` | `#57575B` / `#1C1C1E` / `#0A0A0B` |
| `--paper` / `--sorted` | `#FFFFFF` / `#EEEEEE` | `#232427` / `#2B2C30` |
| `--ink` / `--muted` | `#1A1A1A` / `#555555` | `#E6E6E6` / `#A8A8A8` |
| `--select` / `--select-soft` | `#3A4FC7` / `#D6DAF3` | `#5A6FE0` / `#2E3458` |
| `--desktop` / `--desktop-dot` | `#4F7F88` / `#46737B` | `#22393D` / `#1E3337` |

### Density
- Denser: 18px list rows, 11px content, three or four windows, 10px Get Info padding.
- Roomier (consumer): 24px rows, 14px content, 96px art in icon views.

### Named aesthetics
- **Mac OS 9 Platinum** (variant): the direction as written. For Mac OS 8, the desktop dither becomes `#666699` and `#5C5C8A`.
- **Windows 95/98** (variant): flat teal desktop `#008080`, platinum `#C0C0C0` with a `#FFFFFF`/`#808080`/`#000000` bevel, a solid navy `#000080` active title bar with white text (98: one gradient to `#1084D0`), selection in navy.
- **Aqua** (variant): pinstriped bodies (`#F2F2F2`/`#FAFAFA`, 2px), one blue gel default button (`#6FB3F2` to `#1E6FD9`), Nunito Sans 700 chrome, grey `#9A9A9A` window buttons so red still means failure.
- **Glassmorphism** (variant): `backdrop-filter: blur(12px)` over `rgb(221 221 221 / .72)` on title bars and floating palettes only, with real windows behind; content wells stay opaque. The trap is frosted cards over a gradient blob.
- **Frutiger Aero** (variant): a sky desktop (`#7EC8F0` to `#E9F7FF`, the one gradient), pale aqua glass title bars `rgb(200 235 255 / .75)` with a 1px white highlight, Nunito Sans 700 chrome. Wells stay opaque.
- **Vaporwave** (variant): the desktop dither in pink `#FF71CE` and cyan `#01CDFE`, windows still platinum, one drawn object on the desktop. No sunset-and-grid wallpaper, no decorative Japanese text.
- **Amiga Workbench** (variant): flat blue desktop `#0055AA`, white window frames, orange `#FF8800` active title bars, white icon labels on blue.
