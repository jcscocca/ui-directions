---
name: Raw web
feels_like: An honest 1998 HTML page that happens to be very useful
use_for: tools, reading, data-dense
fonts: Tinos, Cousine
colors: #FFFFFF, #000000, #0000EE, #551A8B, #CC0000
---

# Raw web

## Essence
The screen is a plain HTML document rendered almost entirely by the browser's defaults: a serif `<h1>`, a text navigation of underlined blue links separated by ` | `, `<hr>` between sections, a real `<table border="1">` with bevelled grey cell borders, native form controls, a `<pre>` log, and a chart that is a bare SVG of black lines. It borrows from the pre-CSS web of university lab pages, Bugzilla lists and build-status pages: pages that were fast, dense and trusted because they hid nothing. There is no layout system beyond document flow and the occasional layout `<table>`. The design lives in the writing and the structure: the page opens with a sentence that states the finding, the current location is bold plain text while everything else is a link, and every convention (`—`, red, the noise band) is explained in a sentence on the page. The most memorable move is how little is styled: about ten CSS declarations for the whole screen, and the result still reads as deliberate. It is restraint, not a costume.

Feels like: an honest 1998 HTML page that happens to be very useful.

## Use for / avoid for
- **Use for:** internal tools, status and monitoring pages, admin screens, reports, documentation, changelogs, personal utilities, anything whose users want facts quickly and trust plain pages more than polished ones.
- **Works on mobile** as a document: headings, a definition list, links, one native `<progress>`, one native button. Native controls are already touch-sized once their font is 16px.
- **Avoid for:** brand or marketing work that must sell, products for audiences who read plainness as "broken", and highly interactive editors (canvas tools, drag-and-drop boards) where native controls can't carry the interaction.
- **Breaks down** when the content is thin. A plain page with little to say looks unfinished. It needs dense, specific, well-written content to hold up.
- It is not a joke. The moment it reaches for nostalgia props (hit counters, marquees, "under construction", beveled GIF buttons, Comic Sans), it becomes a parody and stops being a tool.

## Type
- **Tinos** (400, 700, italic 400/700) for everything a person reads: headings, body, tables, links, labels. It is metric-compatible with Times New Roman, so the page looks like the browser default serif on every platform.
- **Cousine** (400, 700) for code, logs, error messages and `<kbd>`. It is metric-compatible with Courier New.
- Do not set a type scale. Use the browser's heading defaults and `<small>`:

| Element | Size / line-height | Weight | Used for |
|---|---|---|---|
| `h1` | 32px (2em), default margins 0.67em | 700 | Product or page name, once |
| `h2` | 24px (1.5em) | 700 | Major section, e.g. the selected item's title |
| `h3` / layout `th` | 18.7px / 16px | 700 | Sub-sections |
| body, table cells | 16px / normal (~1.15) | 400 | Everything |
| `<b>` | 16px | 700 | The one fact per sentence that matters, the current nav item, the selected row |
| `<small>` | 13.3px | 400 | Hints, reasons beside disabled controls, keyboard hints |
| `pre`, `code`, `kbd` | 0.8125em (13px) | 400 | Logs, error strings, keys |
| `<i>` | inherit | 400 italic | Titles of works, "none yet" |

- Case: sentence case everywhere. No uppercase labels, no letterspacing, no eyebrows.
- `font-variant-numeric: tabular-nums` on `body`, so table figures line up; right-align numeric cells with `align="right"`.
- The `pre`/`code` size is set to 0.8125em on purpose. Browsers only shrink monospace to 13px when the family is exactly `monospace`; naming Cousine loses that, so restore it.
- Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&family=Cousine:wght@400;700&display=swap" rel="stylesheet">
```
- npm: `@fontsource/tinos`, `@fontsource/cousine`
- Next.js: `import { Tinos, Cousine } from "next/font/google"` (weights `["400","700"]`, `style: ["normal","italic"]` for Tinos).

## Color
| Token | Hex | Role |
|---|---|---|
| `--paper` | `#FFFFFF` | Page background. There are no other surfaces. |
| `--ink` | `#000000` | All text, chart lines, `<progress>` fill (via `accent-color`), focus outline. |
| `--link` | `#0000EE` | Unvisited links. The only interactive colour. |
| `--visited` | `#551A8B` | Visited links. Leave `:visited` on; it is useful state. |
| `--bad` | `#CC0000` | A failure or a regression, and nothing else. |

That is the whole palette. Greys come only from the browser itself (table bevels, `<hr>`, native control chrome, disabled buttons) and are never specified.

Contrast on white: ink 21:1, link 9.4:1, visited 11.0:1, bad 5.9:1. All pass AA for body text at 16px, and `--bad` passes at 13px.

Status meaning: **red** means failed, or a regression beyond the noise band. A failed run's own negative Δ is not red, because failure is not a regression. **Bold** marks the selected or current thing. **Passed** is plain text; success gets no colour. **Unknown** is `—`, zero is `0.000`, and a sentence on the page says so.

## Tailwind
Tailwind fights this direction. Its preflight removes the default margins, heading sizes, list markers, table borders and link underlines that do all the work here. If a project must use Tailwind, disable preflight and add only this:
```css
@import "tailwindcss/theme";
@import "tailwindcss/utilities";
@theme {
  --font-text: "Tinos", "Times New Roman", Times, serif;
  --font-code: "Cousine", "Courier New", Courier, monospace;
  --color-paper: #FFFFFF;
  --color-ink: #000000;
  --color-link: #0000EE;
  --color-visited: #551A8B;
  --color-bad: #CC0000;
  --radius-*: initial;
  --shadow-*: initial;
}
```
Then use semantic HTML and almost no utility classes: `text-bad` for failures, `font-code` if needed. Without Tailwind, link `tokens.css`: it defines the tokens and the entire stylesheet (body font, code font and size, link colours, `.bad`, `progress { accent-color }`, and a 2px dotted focus outline). A screen should add no more than a handful of declarations on top.

## Layout moves
1. **One document, top to bottom.** `h1`, navigation, `<hr>`, the finding, the main table, an explanatory note, `<hr>`, the selected item as an `h2` section, `<hr>`, an `<address>` footer. Default 8px body margin; the page uses the full window width.
2. **Header is a two-cell layout table.** `<table width="100%">`: the `h1` on the left, the search `<form>` right-aligned on the right (`Search: [input] [Search] or press /`). Old pages did this; it costs no CSS.
3. **Navigation is a line of text.** `Runs | Datasets | Models | Baselines | Settings`, with the current section as **bold plain text** (not a link) and every other section an underlined link. A workspace line sits above it (`Workspace atlas-research [switch]. Last event 02:14:02.`). On mobile, repeat the nav line at the bottom of the page after an `<hr>` instead of a fixed tab bar.
4. **Open with a sentence that states the finding.** Before any table, one paragraph: a bold count ("Last night: 8 runs."), the breakdown, and the one thing that needs attention with a link to it. The table supports the sentence; it doesn't replace it.
5. **Lists are real tables at full width.** `<table border="1" cellpadding="3" cellspacing="0" width="100%">`, `th align="left"` for text, `align="right"` for numbers and times. The selected row is bold and its ID is plain text followed by `<small>(below)</small>`; all other IDs are links. An error is a full-width `colspan` row directly under its run: the error string in red `<code>`, then a sentence saying what to do, with a link to do it.
6. **The detail is the next section, not a panel.** An `h2` with the item's name, a paragraph with its baseline and provenance, native buttons, then a three-column layout table (`th` headings "Metrics", "Score, last 12 runs", "Log tail") so the metric table, chart and log sit side by side above the fold at 1440×900.
7. **Mobile is the same document.** Text wraps; a drawn cover floats left with `<table align="left">` and the text flows beside it, cleared with `<br clear="left">`. Use `<dl>` for label/value facts, `<ol>` for ordered lists, `<blockquote>` for quotes. The primary form sits right after the facts it changes, above the fold.

## Signature details
1. **Nothing is a link unless it goes somewhere; the current thing is bold plain text.** Blue underline is the only interactive signal, and "you are here" is the absence of a link.
2. **The bevelled `border="1"` table.** The browser's grey inset/outset borders, 3px cell padding, full width, numbers right-aligned by attribute. No zebra stripes, no hover rows.
3. **Explanations are sentences on the page.** The first paragraph states the finding. A plain paragraph under the table defines `—` versus `0.000`, what Δ is, the noise band, and what red means. A disabled button has its reason in `<small>` beside it. No tooltips, legends or info icons.
4. **A bare chart.** Inline SVG, black 1px axes and line, 2.5px black dots, dashed band limits labelled in the plot ("band 0.873"), the offending point as a red dot with its value, Tinos 12px tick labels, and a `<small>` caption under it written as a sentence.
5. **Native everything.** `<input type="search">`, `<input type="submit">`, `<button disabled>`, `<progress>`, `<kbd>`, `<address>`. The only adjustment is `accent-color: #000` so progress bars are ink, not the platform's blue.

## Components
- **Buttons:** native `<button>` / `<input type="submit">`, unstyled. Labels are verbs ("Rerun", "Compare with baseline", "Log pages"). Primary and secondary look the same; order and wording carry priority, primary first. Destructive: a native button whose label names the loss ("Delete 3 runs"), followed by a confirmation page or `confirm()`. Disabled: the native `disabled` attribute (the browser greys it) plus `<small>Cancel is disabled: r-2291 finished at 02:14:02.</small>`. On mobile set `input, button { font-size: 1em }` so controls are 16px, big enough to tap and not zoomed by iOS.
- **Inputs and search:** a visible `<label>` before every input ("Search:"), a placeholder that says what can be searched, a submit button beside it, and the keyboard shortcut as `<kbd>/</kbd>` in `<small>`.
- **Tables / lists:** as in Layout moves. Secondary lists are `<ol>`/`<ul>` with default bullets and indentation; each item is a sentence fragment with commas and periods ("*Piranesi*, Susanna Clarke. 272 pp.").
- **Navigation:** the pipe-separated text line. Section counts or states go in `<small>` after the link ("Datasets (count loading…)").
- **Status:** words. "Passed", "Queued" plain; "**Failed**" bold red; "Passed, **regressed**" with "regressed" in red; "Running, 62%" followed by a native `<progress>`.
- **Charts:** bare inline SVG as above, or a `<table>` of values when exact numbers matter more than shape. Never gridlines, fills, gradients, rounded lines or animated drawing.
- **Empty / loading / error:** sentences. Empty: "**Pinned comparisons:** *none yet.* Compare with baseline, then pin the result to keep it here." Loading: "(count loading…)" beside the thing loading. Error: the raw error in red `<code>`, then what to do, with a link.
- **Focus:** `:focus-visible { outline: 2px dotted #000; outline-offset: 2px }`, the old dotted focus rectangle made thick enough to see.
- **Collections and entity images:** a collection is the same `border="1"` table with a thumbnail column first: a plain `<img width="30" height="30">` in a centred cell, no frame, no background. The selected entity is the bold row with `<small>(right)</small>`, and its detail sits beside the table in a layout-table cell: an `h2`, the large image floated left with `<table align="left">`, the description in italics, and stats as a small table of label, number and native `<progress max="100">`. States: *seen* is the image with `filter: brightness(0)` (a black silhouette) and the row stays a link; *unknown* is a row with only its number and "*Unknown*" in the status column, and every other cell is left empty; an evolution step that is unknown is an empty bordered cell holding only "#008". A failed image is honest, not hidden: `onerror` replaces it with `<small>[no image]</small>`, the Lynx-style alt text, and the key under the table says what that means. Rarity uses weight, not colour: Common and Uncommon are plain, Rare is **bold**, and the single Mythic is the one inverted cell (`bgcolor="#000000"`, white bold caps). One sentence under the table explains the rarity marks and the silhouette.

## Density & motion
- The browser's spacing is the spacing system: 8px body margin, 1em paragraph margins, default heading margins, 40px list and `dd` indents. Don't add a spacing scale. If you must tighten one place (a heading followed by a list on mobile), change one margin, e.g. `h1, h2 { margin-bottom: 0.3em }`, and stop.
- Rows with `cellpadding="3"` are about 26px at 16px text. At 1440×900 the header, finding, 8-row table with an error row, note, and the selected item's metrics, chart and log all fit in the first screen.
- Mobile: same 16px text, same defaults; the page scrolls. The primary action must be above the fold, so put the form directly after the current item's facts.
- Motion: none. Links change colour when visited; that is the only state change the page makes on its own.

## Don'ts
- Don't add a "clean-up" stylesheet: no CSS reset, no custom spacing scale, no max-width container, no card borders, no rounded corners, no shadows. Each one pushes it back toward a generic app.
- Don't swap the serif for a sans or set a "nicer" type scale. The browser defaults are the design.
- Don't parody. No marquee, blink, hit counters, "best viewed in", under-construction signs, animated GIFs, Comic Sans, tiled backgrounds, or beveled image buttons.
- Don't add colour. No green for success, no grey text for "muted", no coloured status pills, no highlighted selected row. Use bold, words and position.
- Don't use red for emphasis or for negative numbers that aren't failures or regressions.
- Don't restyle native controls into custom ones or add icon buttons. If a control needs explaining, write the sentence next to it.
- Don't hide meaning in tooltips, hover states or legends. Every convention is explained in visible text on the page.
- Don't write thin content. This direction only works when the prose is specific: counts, names, times and what to do next.

## Variants
Never changes: one document in normal flow, browser-default type and spacing, the finding sentence before any table, `border="1"` tables, the current location as bold plain text, native controls, and every convention explained in a sentence.

### Dark
Let the browser do it. Add `<meta name="color-scheme" content="light dark">` and override only what the browser gets wrong:

| Token | Light | Dark |
|---|---|---|
| `--paper` / `--ink` | `#FFFFFF` / `#000000` | the browser's `Canvas` / `CanvasText` |
| `--link` / `--visited` | `#0000EE` / `#551A8B` | `#9E9EFF` / `#D0ADF0` |
| `--bad` | `#CC0000` | `#FF6B6B` |

`accent-color` and the dotted focus outline use `CanvasText`. Table bevels and control chrome come from the browser.

### Density
- Denser: `cellpadding="1"`, `<small>` in secondary columns, and one `body { margin: 4px }`.
- Roomier: `cellpadding="6"` and a `<br>` between detail sections. Still no container or spacing scale.

### Named aesthetics
- **Web 1.0 / GeoCities** (variant): a `#C0C0C0` or navy `#000080` page with a white content table, `<hr>` between sections, a webring-style previous and next line as real navigation. The Don'ts stay: no marquee, hit counter or tiled background.
- **Indie web / web revival** (variant): three extra declarations only (page `#EEF2EA`, `max-width: 44em`, links `#1B4F9C` visited `#6B3FA0`), plus a real blogroll or webring as a list.
- **Brutalist web** (variant): everything in Cousine 16px, `border: 2px solid #000` on sections, black underlined links. No oversized shock type standing in for content.
- **RFC / man page** (variant): everything in Cousine 13px in a 72-column preformatted block, section names in capitals at column 0, header and footer lines with the document name and date.
