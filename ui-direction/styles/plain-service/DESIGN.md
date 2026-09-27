---
name: Plain service
feels_like: A public-service task page that tells you what to do next
use_for: forms, tools
fonts: Atkinson Hyperlegible, Atkinson Hyperlegible Mono
colors: #FFFFFF, #0B0C0C, #1D70B8, #FFDD00, #D4351C, #00703C
---

# Plain service

## Essence
Borrowed from the design systems of public services (GOV.UK, USWDS): pages that millions of people with no training, bad connections and every kind of access need get through on the first try. Each screen is one task, named in a big bold question or instruction. Everything is on a white page, left-aligned, with a black header band and a thick blue rule under it. Problems are listed first in a red-bordered summary with links to where they are. Status is a word in a tinted tag. Details are key / value / action rows. A chart always comes with a sentence that says what it shows. There is no decoration at all. The style's character comes from scale (19px body, 40px bold headings), plain words, and a yellow-and-black focus state that is impossible to miss. The most memorable move is the page structure itself: error summary, then a heading that is the task, then the thing you need to do.

Feels like: a public-service task page that tells you what to do next.

## Use for / avoid for
- **Use for:** forms and multi-step flows, admin and back-office tools, anything used by occasional or stressed users, internal tools that must work for everyone (keyboard, screen reader, zoom, low vision), status pages and checkers.
- **Works on mobile** as "one question per page": a heading that is the question, a hint, one input, one full-width button.
- **Avoid for:** marketing, brand-led consumer products, entertainment, and dense monitoring walls where people need 30 numbers at once. This style scrolls and puts a lot of space between things.
- **Breaks down** when a screen has no single task. Then the H1 turns into a label ("Dashboard") and the style loses its reason. Name the task, or split the screen.

## Type
- **Atkinson Hyperlegible** (400, 700, italic 400) for every role: headings, body, labels, buttons, tables, tags. It was drawn for low-vision readers: distinct letterforms (I l 1, O 0) and a slashed zero, which matters for IDs and scores.
- **Atkinson Hyperlegible Mono** (400, 600) only for code and logs: error class names, log lines. It is the same family, so it doesn't introduce a second voice.
- Weights: 700 for headings, table heads, summary-list keys, the error-summary link, and the one sentence of a warning. 400 for everything else.
- `font-variant-numeric: tabular-nums` on `body`. Numeric columns are right-aligned.

| Role | Size / line-height (desktop) | Mobile | Weight |
|---|---|---|---|
| H1 (the task) | 40 / 1.1 | 32 / 1.1 | 700 |
| H2 section | 27 / 1.2 | 24 | 700 |
| H3 / error summary title | 24 / 1.25 | 24 | 700 |
| Key figures in a side panel | 36 / 1.1 | — | 700 |
| Body, summary lists, buttons, nav | 19 / 1.32 | 19 | 400 |
| Tables, hints, captions, breadcrumbs, tags | 16 / 1.3 | 16 | 400 (tags 700) |
| Log / code | 15 / 1.6 mono | 15 | 400 |

Sentence case everywhere. No uppercase labels, no letterspacing, no eyebrows above headings.

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Atkinson+Hyperlegible+Mono:wght@400;600&display=swap" rel="stylesheet">
```
- npm: `@fontsource/atkinson-hyperlegible`, `@fontsource/atkinson-hyperlegible-mono`
- Next.js: `import { Atkinson_Hyperlegible, Atkinson_Hyperlegible_Mono } from "next/font/google"` (`weight: ["400","700"]`; mono `weight: ["400","600"]`).

## Color
| Token | Hex | Role |
|---|---|---|
| `--white` | `#FFFFFF` | Page background. The only background for content. |
| `--text` | `#0B0C0C` | Body text, headings, header band, input borders, chart lines. (A near-black chosen by public-service systems for print and screen consistency; it is the standard's own value.) |
| `--secondary` | `#505A5F` | Hints, captions, sub-lines, `—`. |
| `--border` | `#B1B4B6` | Table and summary-list row rules, inset-text bar, chart band edges. |
| `--panel` | `#F3F2F1` | Code blocks, chart tolerance band, secondary button. |
| `--link` | `#1D70B8` | Links, the 10px rule under the header, current-nav underline, side-panel top border. |
| `--link-hover` / `--visited` | `#003078` / `#4C2C92` | Link states. |
| `--focus` | `#FFDD00` | Focus background, always paired with a black bottom bar or inset line. |
| `--error` | `#D4351C` | Error summary border, error links and messages, 5px error bar beside a failing row. |
| `--button` | `#00703C` | Primary buttons only (hover `#005A30`, 2px shadow `#002D18`). |
| Tags | green `#CCE2D8`/`#005A30`, red `#F4CDC6`/`#942514`, blue `#BBD4EA`/`#0C2D4A`, grey `#E5E6E7`/`#282D30`, yellow `#FFF7BF`/`#594D00`, purple (filled, for the single highest tier) `#3D2375`/`#FFFFFF` | Background / text pairs for status tags. |

Contrast on white: text 19.8:1, secondary 7.0:1, link 5.2:1, error 4.5:1 (use at 16px+ and bold where possible). White on button green 6.2:1. Every tag pair is at least 5.5:1.

Status meaning: **red means an error the user must fix** (a failed run, an invalid answer) and appears in the error summary too. A regression or other risk is not an error: it gets the black "!" warning text. **Green is for the primary button and the "Passed"/"Done" tag**, nothing else. Blue tag is in progress, grey is not started / queued, yellow is "not finished yet". Blue elsewhere means a link.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-sans: "Atkinson Hyperlegible", Arial, sans-serif;
  --font-mono: "Atkinson Hyperlegible Mono", Consolas, monospace;

  --color-white: #FFFFFF;
  --color-text: #0B0C0C;
  --color-secondary: #505A5F;
  --color-border: #B1B4B6;
  --color-panel: #F3F2F1;
  --color-link: #1D70B8;
  --color-link-hover: #003078;
  --color-visited: #4C2C92;
  --color-focus: #FFDD00;
  --color-error: #D4351C;
  --color-button: #00703C;
  --color-button-hover: #005A30;
  --color-button-shadow: #002D18;

  --text-small: 16px;
  --text-body: 19px;
  --text-h3: 24px;
  --text-h2: 27px;
  --text-h1: 40px;

  --radius-*: initial;
  --radius-none: 0;
  --spacing: 5px;
  --container-page: 1280px;
}
```
All radii are 0 (the warning icon is the only circle). Spacing is a 5px scale: 5, 10, 15, 20, 30, 40, 50. Without Tailwind, link `tokens.css`, which defines the same values plus the tag pairs (`--tag-green-bg`, `--tag-green`, …).

## Layout moves
1. **Black header band, 10px blue rule, then a pale service-navigation row.** The header holds the product name (30px bold, white) and the workspace or account on the left, search on the right (white input, blue square button with the word "Search", and a hint "or press /"). Section links sit in the row below, 19px, with the current section bold black and a 5px blue underline bar.
2. **Breadcrumbs, then the page.** 16px, black underlined links, small chevrons drawn with borders.
3. **A centred 1280px container, content left-aligned inside it,** on a two-thirds / one-third grid with a 30px gutter. The two-thirds column holds the task. The one-third column holds related or supporting content under a 5px blue top border. Tables that need width may span both columns.
4. **Page order is fixed:** error summary (if any) → H1 naming the task → one lead sentence with the counts → the main list → the selected item's detail → actions. The page scrolls. Put the one thing needing a decision into the one-third column at the top so it is visible without scrolling, with a link down to its full detail.
5. **Lists are plain tables:** bold 16px header, 1px grey row rules, 10px vertical padding, no zebra, no borders between columns. A selected row gets a pale blue fill and a 5px blue bar on its left edge. A failed row gets a 5px red bar and a full-width error sub-row directly beneath it.
6. **Details are summary lists:** key (bold, 30%) / value / action link rows separated by 1px rules. Secondary numbers go on a smaller grey line under the value.
7. **Mobile is one question per page.** The H1 *is* the label of the only input. Under it: a hint in grey, the input (sized to the answer, with a suffix like "pages"), and a full-width green button. Everything else (current item as inset text, a summary list, plain numbered lists) comes after the button. Section nav becomes a short row of links under the header.

## Signature details
1. **Error summary at the top.** A 5px red border, 15–20px padding, a 24px bold title that counts the problems ("There is a problem with 1 run"), and red bold links that jump to each problem, followed by one sentence saying how to fix it.
2. **The yellow focus state.** Links: yellow background, black text, a 4px black bar underneath (`box-shadow: 0 -2px #FFDD00, 0 4px #0B0C0C`), underline removed. Inputs: 3px yellow outline plus a 2px black inset. Buttons turn yellow with black text. It is the loudest thing on the page on purpose.
3. **Buttons with a flat 2px bottom edge.** Green primary with `box-shadow: 0 2px 0 #002D18`; it drops 2px on press. That shadow describes a physical press, which is why it's the only shadow in the system.
4. **Tags for status, warning text for risk.** Tags are a word in bold on a tinted background, no border, no radius. Risk gets a 35px black circle with a white "!" and a bold sentence beside it.
5. **Every chart has a sentence.** Below the chart: a caption that states the finding in words and names the band and baseline, plus a "Show the numbers as a table" disclosure.

## Components
- **Buttons:** 19px, 10px/12px padding, square. *Primary:* green, white text. *Secondary:* `#F3F2F1` with a `#929191` 2px bottom edge, black text. *Destructive:* red `#D4351C` with a `#55150B` edge, label names the loss ("Delete 3 runs"), only after a confirmation page. *Disabled:* 50% opacity, `cursor: not-allowed`, plus a grey hint directly below saying why ("You cannot cancel r-2291. It finished at 02:14:02."). Full width on mobile. Group buttons left-aligned with 15px gaps.
- **Inputs and search:** 2px black border, 40–44px tall, no radius, width sized to the expected answer. The label is always visible (on question pages it is the H1). Hints are grey 16–19px between label and input. Suffixes sit in a grey box joined to the input.
- **Tables / lists:** as in Layout moves. IDs are links. `—` is grey. Numbered lists only for real order; titles are links with a grey meta line (author, length).
- **Navigation:** service navigation row (desktop and mobile), breadcrumbs on desktop. No sidebars, no icons, no tab bars.
- **Status:** tags, sentence case, bold: green "Passed", blue "Running: 62%", red "Failed", grey "Queued", yellow "Not met yet: 12 to go".
- **Charts:** inline SVG, black 3px line, 4px black dots, grey band for tolerance with grey edge lines, dashed secondary-grey baseline, labels at the right end of each reference line, the point that matters as a larger open circle with its value in bold. No colour-coding.
- **Inset text / code:** a 10px grey left bar and 15–20px left padding for supporting information (the current item, what symbols mean). Logs sit in a `#F3F2F1` block with a 5px grey left bar.
- **Empty / loading / error:** empty states are a sentence in the place the content would go ("You have not pinned any comparisons yet. Compare a run with its baseline, then pin the result to keep it here."). Errors name the object and the cause, then what to do. Unknown is `—`, explained in a legend; zero is `0.000`.
- **Collections and entity images:** a collection is still a task page ("Find the creatures you still need in …"), so what is still missing comes first. Under the progress line, a "Still to find (n)" list shows each missing entry (thumbnail, number, name, status tag) in three ruled columns, followed by a one-line note naming any image that failed to load. The full record is a real `<table>` below that. There is a grey filter panel of fieldsets (radios for status, checkboxes for type and rarity, a secondary "Apply filters" button) in the left quarter, and a "Sort by" select above the table. Images are plain: a fixed square (50px in tables, 100px in sequences, 240px on the detail) with a 1px `#B1B4B6` border on white, never cropped, tinted or rounded, and always next to the name as text. *Seen but not owned:* `filter: brightness(0); opacity: .55` gives a mid-grey silhouette, plus a yellow "Seen, not caught" tag. *Unknown:* an empty dashed square, the number, "Not seen yet" in grey, and a grey "Not seen" tag. *Broken image:* `onerror` adds `.broken`, which hides the `<img>` and shows a `#F3F2F1` box with "No image". The name stays in its own cell. *Rarity:* common and uncommon are plain text, rare is bold, and mythic is the only filled tag (white on purple `#3D2375`). *Stat blocks:* a small table (stat, right-aligned value, bar) where each bar is a `#F3F2F1` track with a 1px border and a solid `#0B0C0C` fill, followed by "Each stat is out of 100." The detail is a heading, a one-line caption, the image beside a summary list, the description, stats, the sequence as images with "then" between, and a button group with the disabled action's reason underneath.
- **Focus:** as in Signature details, on every link, input and button. Never remove it.

## Density & motion
- Base unit 5px. Table rows about 42px, summary rows 45–65px, 25–40px between sections, 30px gutters.
- Low density by design. On desktop the first viewport shows the error summary, the task, the counts, the thing needing a decision and the start of the list. The rest scrolls.
- Mobile: 15px side margins, 44px inputs, full-width buttons, primary action visible without scrolling.
- Motion: none. Buttons move down 2px on press. No transitions, no skeletons, no animated spinners; a loading state is a sentence ("Loading dataset count").

## Don'ts
- Don't add cards, rounded corners, shadows (other than the 2px button edge), gradients, or background colours behind sections. White page, rules, and the one-third blue top border are the only containers.
- Don't use icons beside labels or in navigation. The warning "!" is the only glyph.
- Don't shrink body text below 16px or headings to "look professional". Scale is the style.
- Don't use colour alone for status. Every tag has a word; every regression has a sentence.
- Don't use red for anything that isn't an error the user can act on, or green for anything but the primary button and success tags.
- Don't write "Something went wrong", "Oops", or marketing lines. Name the task in the H1, name the problem in the error.
- Don't centre content or use a hero. Left-aligned, two-thirds measure for reading.
- Don't copy a government's crown, wordmark, or the name "GOV.UK". The construction is borrowed; the identity must be the product's own.

## Variants
Never changes: one task per page with the H1 naming it, the error summary first, 19px body, the two-thirds layout, summary lists, tags plus warning text for status, and the yellow-and-black focus.

### Dark
Public services rarely ship dark. Use this only for staff tools that follow `prefers-color-scheme`.

| Token | Light | Dark |
|---|---|---|
| `--white` (page) | `#FFFFFF` | `#141718` |
| `--text` | `#0B0C0C` | `#F3F2F1` |
| `--secondary` | `#505A5F` | `#B1B4B6` |
| `--border` | `#B1B4B6` | `#505A5F` |
| `--panel` | `#F3F2F1` | `#1F2324` |
| `--link` / `--visited` | `#1D70B8` / `#4C2C92` | `#8AB7E6` / `#C6A9F0` |
| `--error` | `#D4351C` | `#FF8A75` |
| `--focus` | `#FFDD00` | `#FFDD00` (text on it stays `#0B0C0C`) |

The header band stays `#0B0C0C` with the blue rule. The green button is unchanged. Tags swap each pair (the tint becomes the text, the text colour becomes the fill).

### Density
- Denser (back office): body 16px, tables 14px, rows 32px, 20px between sections. The 40px H1 and the focus stay.
- Roomier: this is already the roomy end. One-question pages may take a 48px H1 on desktop.

### Named aesthetics
- **Public-service design system** (variant): the direction as written. To lean toward USWDS, use Public Sans and links `#005EA2`. Never copy a government's crest or name.
- **Packaging / nutrition label** (variant): summary lists become a nutrition-facts panel with a 1px black box, 10px, 5px and 1px black rules for hierarchy, Libre Franklin 900 keys and 400 values. Body outside the panel stays 19px.
