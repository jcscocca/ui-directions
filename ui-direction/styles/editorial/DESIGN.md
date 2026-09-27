---
name: Editorial
feels_like: A long-read magazine feature about your data
use_for: reading, consumer, marketing
fonts: Newsreader, Instrument Sans, DM Mono
colors: #FAFAF7, #1C2B25, #7A1F2B, #3F4E47, #D6DAD2, #ECEEE7
---

# Editorial

## Essence
The screen is a magazine spread, not an app shell. On a desktop the viewport splits into two facing pages with a single hairline fold between them. The left page is the feature: a sentence headline that states the finding, an italic standfirst with the key numbers, a captioned "Figure 1", a small set "Table 1", and commentary that opens with a drop cap. The right page is the "Contents": every item as an entry with a serif title, dot leaders running to its number like a page number, and a one-line sentence of metadata in a small sans. Explanations live in numbered sidenotes in the outer margin, not in tooltips or legends. There are no cards, no boxes, no shadows: structure comes from type size, italic, rules and white space. One oxblood accent marks the thing that needs attention. The most memorable move is the headline that says what happened in a full sentence, set large at display optical size.

Feels like: a long-read magazine feature about your data.

## Use for / avoid for
- **Use for:** reports and digests (overnight runs, weekly summaries, post-mortems), reading apps, personal trackers, content-heavy consumer products, marketing pages that explain something with numbers.
- **Works when** there is one story to tell per screen (a finding, a current book, a featured item) and a list to browse beside it.
- **Avoid for:** dense operational consoles with 50+ rows, spreadsheet-like editing, form-heavy flows, and anything where the user needs to compare many numbers at once. The contents list tops out around 10–12 entries per page.
- **Breaks down** when there is no finding to headline. A headline like "Dashboard" or "Your runs" kills the direction; if you can't write a sentence, pick another direction.
- Not a newspaper: don't pack it into 5 dense columns with hairlines everywhere.

## Type
- **Newsreader** (variable, opsz 6–72, weights 300–700, roman and italic) is the voice: headlines, standfirst, body, titles in lists, numbers in lists and tables. Always set `font-optical-sizing: auto` so large sizes get the display cut and small sizes the text cut.
- **Instrument Sans** (400–700) is the magazine's "furniture": nav, buttons and inline actions, table heads, figure labels, metadata lines, bylines, captions of UI elements, inputs.
- **DM Mono** (400) only for literal machine text: IDs, log lines, error messages. (Substitution note: the direction's two faces have no monospace, and logs must be monospace.)
- Numbers: `font-variant-numeric: lining-nums tabular-nums` on `body`. Numeric columns right-aligned.

| Role | Family | Size / line-height | Weight / style |
|---|---|---|---|
| Headline (sentence) | Newsreader | 48 / 1.02, tracking -0.018em | 400 roman |
| Mobile feature title | Newsreader | 38 / 1.02 | 400 italic |
| Section title ("Contents") | Newsreader | 40 / 1 | 400 |
| Standfirst | Newsreader | 20 / 1.38 | 400 italic, key numbers in 500 roman |
| Body / commentary | Newsreader | 17 / 1.55 | 400 |
| Drop cap | Newsreader | 82 (desktop) / 56 (mobile), 2–3 lines | 400 |
| List entry title | Newsreader | 19 / 1.22 | 400, selected entry italic |
| Sidenote, caption | Newsreader | 12.5–14 / 1.4 | 400, captions italic |
| Metadata line, table head | Instrument Sans | 12.5 / 1.35 | 400–500 |
| Nav, actions | Instrument Sans | 13–14 | 400, current 600 |
| Figure / table label | Instrument Sans | 12 | 600 ("Figure 1", "Table 1") |
| IDs, log | DM Mono | 11.5–12 / 1.6 | 400 |

Case: sentence case everywhere. No uppercase eyebrows, no letterspaced caps. The kicker above a headline is a plain sentence in Instrument Sans 13px ("Run r-2291, finished 02:14:02"). Model/dataset pairs read as a phrase with an italic connective: "summarize-v3 *on* news-digest-2k".

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=Instrument+Sans:wght@400..700&family=DM+Mono:wght@400&display=swap" rel="stylesheet">
```
- npm: `@fontsource-variable/newsreader`, `@fontsource-variable/instrument-sans`, `@fontsource/dm-mono`
- Next.js: `import { Newsreader, Instrument_Sans, DM_Mono } from "next/font/google"` (Newsreader with `axes: ["opsz"]`, `style: ["normal", "italic"]`; DM Mono `weight: "400"`).

## Color
| Token | Hex | Role |
|---|---|---|
| `--paper` | `#FAFAF7` | Page. Cool white, not cream. The only background besides `--wash`. |
| `--ink` | `#1C2B25` | Green-black ink: all body text, headlines, rules that carry structure (1.5px), primary button fill. |
| `--ink-2` | `#3F4E47` | Secondary text: standfirst, metadata lines, captions, sidenotes. AA on paper (8.4:1). |
| `--muted` | `#6B7770` | Chart axis labels and placeholders only. 4.5:1 on paper, so AA only just; keep it off body text. |
| `--rule` | `#D6DAD2` | Hairline rules between list entries and table rows; the fold between pages. Never text. |
| `--leader` | `#A3ACA5` | Dot leaders, input underline, disabled text. Disabled is decorative-contrast on purpose. |
| `--wash` | `#ECEEE7` | Noise band in charts, selected list entry, a highlighted log line. The only fill. |
| `--oxblood` | `#7A1F2B` | Attention: the regression, failures, the unfinished part of a goal. 9.8:1 on paper. |

Oxblood is meaning, not decoration: a number is oxblood because it is bad news. Drop caps, pull quotes, links and headings stay ink. Passed/ok has no color at all; it's the normal state and reads as plain text. Running is shown with a thin ink progress rule, queued with words.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-serif: "Newsreader", Georgia, serif;
  --font-sans: "Instrument Sans", "Helvetica Neue", Arial, sans-serif;
  --font-mono: "DM Mono", ui-monospace, monospace;

  --color-paper: #FAFAF7;
  --color-ink: #1C2B25;
  --color-ink-2: #3F4E47;
  --color-muted: #6B7770;
  --color-rule: #D6DAD2;
  --color-leader: #A3ACA5;
  --color-wash: #ECEEE7;
  --color-oxblood: #7A1F2B;

  --text-note: 12.5px;
  --text-ui: 13px;
  --text-body: 17px;
  --text-lede: 20px;
  --text-head: 40px;
  --text-display: 48px;

  --radius-*: initial;
  --shadow-*: initial;
}
```
Use `font-serif` on `body`. Without Tailwind, link `tokens.css` and use its custom properties (`--paper`, `--ink`, `--oxblood`, `--font-text`, `--font-ui`, `--font-code`).

## Layout moves
1. **Two facing pages.** At ≥1200px the screen is `grid-template-columns: 1fr 1fr` with a 1px `--rule` fold between the pages. Outer page margins 56–64px, inner (fold side) 48px. No sidebar, no top bar spanning both pages.
2. **Running heads, not a header bar.** The left page's running head holds the product name in Newsreader italic 24px and the section links in Instrument Sans 13px. The right page's running head holds the search (an underlined field) and the workspace. Both sit 26px from the top with no rule under them.
3. **The left page is the feature for the selected item.** Order: kicker sentence, headline (3 lines max at 48px, `max-width` about 13em), italic standfirst (≤3 lines, about 29em measure), inline actions, then two columns: `340px` (Figure 1 + Table 1) and `1fr` (drop-cap commentary). The commentary paraphrases what happened in plain sentences; it is written, not generated from a template.
4. **The right page is the contents.** Title "Contents" at 40px, an italic tally sentence ("Eight runs overnight… Five passed, one failed…"), then a list with a 1.5px ink top rule. Each entry is a 4-column grid: `50px` ID in mono | title with dot leaders | `58px` right-aligned number | `140px` sidenote margin. Row 2 holds a metadata sentence and the Δ under the number.
5. **Metadata is written as a sentence**, not joined with separators: "Passed in 14m 02s. Scheduled, 02:00." / "Failed after 0m 41s. CI #4809, 00:40."
6. **Sidenotes in the outer margin** are absolutely positioned at the top of the entry they explain, with a 1px `--rule` left edge and a superscript number that also appears next to the thing it explains. Legends, definitions (what `—` means), and empty states go here.
7. **Machine text is quoted, not framed.** A log tail is set under an italic heading ("The last five lines of the r-2291 log") as plain mono lines with no box; one line may carry `--wash` to point at it.
8. **Mobile is the feature page alone**, single column, 22px side margins: kicker, italic title with the drawn cover floated to its right, a drop-cap lede sentence, a thin progress rule, a two-cell "in brief" row split by a vertical hairline, the primary button, a pull quote between rules, "Further reading" as a numbered list. Bottom nav is plain text links with a 2px ink rule above the current one.

## Signature details
- **The headline is a finding in a sentence.** "Summarize-v3 slipped last night, and the drop is bigger than the noise." Set in Newsreader 48px roman at display optical size, tight leading (1.02), sentence case, no accented word.
- **Dot leaders to the number** in the contents list, exactly like page numbers: `border-bottom: 2px dotted var(--leader)` on a flex spacer between title and score.
- **Figure and Table labels**: "Figure 1" / "Table 1" in Instrument Sans 600 at 12px, followed by an italic Newsreader caption that says what the reader should notice ("Eleven sit inside the band; the newest falls out.").
- **Drop cap** opening the commentary (82px, three lines) and, on mobile, the lede (56px, two lines). One per screen.
- **Inline actions separated by 1px vertical hairlines** (13px tall, 13px side margin), set in Instrument Sans with underlines: the primary action has a 2px underline and 600 weight; the disabled action has a dotted `--leader` underline and an italic reason right after it.

## Components
- **Buttons.** Desktop actions are underlined text links in Instrument Sans 14px, never boxes. Primary: 600 weight, 2px ink underline. Hover: a `--wash` fill behind the link text. Disabled: `--leader` text, dotted underline, `cursor: not-allowed`, followed by a reason in italic ("Run finished; nothing to cancel."). On mobile the one primary action is a full-width 50px ink block with paper text, square corners, Instrument Sans 15px 600; `:active` darkens to `#0F1A15`.
- **Inputs / search.** Transparent field with a 1px `--leader` bottom border, Instrument Sans 13px, placeholder in `--muted`. Focus turns the underline into a 2px ink rule. A keyboard hint sits beside it as a small bordered `kbd` (`/`).
- **Tables.** Small set tables in the book-typography style: 1.5px ink rule top and bottom, 1px `--rule` between rows, no vertical lines, head in Instrument Sans 11.5px 500, cells in Newsreader 15px, numbers right-aligned tabular. Caption above: "Table 1" label + italic title.
- **Lists.** The contents entry described in Layout move 4. Selected entry: `--wash` fill with a 3px ink left edge, title in italic. Hover on titles: 1px underline offset 3px.
- **Navigation.** Text links in the running head. Current: ink, 600, 2px ink underline. Others: `--ink-2`. Mobile: four text links at the bottom, current with a 2px ink rule above.
- **Status.** Words first: "Passed", "Running, 62% done", "Queued, not started yet", "**Failed**" (oxblood, bold). Running gets a 3px progress rule (ink fill on `--wash`) under the entry. Regression: the score and Δ in oxblood, plus a sidenote saying how far past the noise band it is.
- **Charts.** Thin and quiet: 1.5px ink polyline with 2.2px dots, a `--wash` rectangle for the tolerance band with an italic in-chart label, a dashed baseline, axis labels in Instrument Sans 10px `--muted`, one horizontal baseline axis, no gridlines. The point that matters is oxblood with its value set in Newsreader beside it.
- **Empty / loading / error.** Written as sentences in a sidenote or the metadata line: "Pinned comparisons: none yet. Compare r-2291 with its baseline to pin the first one here." Errors quote the machine message in DM Mono oxblood and a sidenote says what it means and what to do.
- **Unknown vs zero.** `—` for not computed, `0.000` for a real zero; a numbered sidenote defines it where the first `—` appears.
- **Focus.** `outline: 2px solid var(--ink); outline-offset: 3px` on everything; inputs swap to a 2px underline.
- **Collections and entity images.** Treat a collection as a field guide's plate pages. The index is a ruled 4-column grid of unboxed figures: a 1.5px ink rule on top, 1px `--rule` between rows, no vertical lines, the image sitting straight on the paper (≈78px) with a caption under it: the number in Instrument Sans 11.5px, the name in Newsreader 15px, then "Type. N caught." in small sans. The selected entry gets the `--wash` fill and a 3px ink left edge, with its name in italic. Seen-but-not-caught is the same image as an ink silhouette (`filter: brightness(0); opacity: .78`) with an italic "Seen, not caught." Unknown is a dashed `--leader` empty frame with only the number. A failed image swaps (via `onerror`) to a `--wash` box with an italic "Picture not available", and the name stays in the caption. Rarity is typographic, like printer's marks: common has no mark, uncommon gets †, rare gets ‡, and mythic gets a double-rule frame around the whole plate plus the italic word "Mythic." Explain the marks in one italic key line under the grid. The detail page is a feature: kicker with number and types, the name at 64px, the description as the standfirst, the image large on a `--wash` plate with a "Plate 7" caption, stats as a set table with thin 3px ink bars, and facts as a small definition list. An evolution line is small figures joined by `→`, with an unknown step shown as a dashed box holding only its number.

## Density & motion
Base unit 4px; typical steps 8, 12, 18, 24, 34. Body leading 1.5–1.55. Contents entries are about 60px (title 19px + metadata 12.5px + 9px padding). Space between blocks is generous (24–34px); space within a block is tight (3–8px). Mobile keeps the same type roles, one step smaller for display (38px italic title), and 18–22px between sections. Motion: none except colour changes on hover and the button's pressed shade. No fades, no scroll reveals.

## Don'ts
- Don't use cream (`#F4F1EA`-ish) paper or terracotta. Paper is cool white, ink is green-black, accent is oxblood.
- Don't put anything in a card, a rounded box or a shadowed panel. If you want separation, use a rule or space.
- Don't write a label as a headline ("Run details", "Overview"). The headline is a sentence that says what happened.
- Don't turn it into a newspaper: no 4–5 column grids, no hairlines around every block, no tiny 12px body text. Keep the measure around 30–34em and the margins wide.
- Don't use tracked uppercase eyebrows, `A · B · C` meta strings, or arrows on links. Metadata is a sentence; links are underlined words.
- Don't make oxblood decorative (drop caps, quote marks, headings). It means "look here, this is bad or unfinished".
- Don't use the mono face for numbers. Scores are Newsreader with tabular lining figures; mono is for IDs and logs.
- Don't explain things with tooltips or a legend box. Use a numbered sidenote in the margin.

## Variants
Never changes: two facing pages, the headline as a full-sentence finding, the contents list with dot leaders, numbered sidenotes in the outer margin, Figure and Table labels, and no boxes or cards.

### Dark
| Token | Light | Dark |
|---|---|---|
| `--paper` | `#FAFAF7` | `#141C19` |
| `--ink` / `--ink-2` | `#1C2B25` / `#3F4E47` | `#E4E8E2` / `#B2BCB5` |
| `--muted` | `#6B7770` | `#8C978F` |
| `--rule` / `--leader` | `#D6DAD2` / `#A3ACA5` | `#2C3833` / `#56625B` |
| `--wash` | `#ECEEE7` | `#1E2924` |
| `--oxblood` | `#7A1F2B` | `#D98A93` |

Raise body line-height to 1.6. The mobile primary block becomes `--ink` fill with `--paper` text, so it reads light on the dark page.

### Density
- Denser (digest): body 16/1.5, contents entries about 48px with the metadata sentence on one line, up to 14 entries, outer margins 40px.
- Roomier (long read): a single page at a 34em measure, body 19/1.6, figures breaking into the margin.

### Named aesthetics
- **Dark academia** (variant): the Dark variant warmed: paper `#1E1813`, ink `#E7DFD2`, rules `#3A3027`, oxblood `#C9707A`, EB Garamond in place of Newsreader. One fleuron as a section break at most; no candle or wood textures.
- **Light academia** (variant): linen-grey `#ECECE6`, sepia ink `#2E2A22`, sage `#5E7154` for attention instead of oxblood, EB Garamond display. Beige paper plus terracotta is the ANTI-SLOP cream default, so stay grey-green.
- **Scientific paper / LaTeX** (variant): white paper `#FFFFFF`, STIX Two Text in place of Newsreader, numbered sections (1, 1.1), an indented abstract as the standfirst, references as `[3]` listed at the foot. The title is still a finding.
- **Tufte handout** (variant): one column with a wide right margin for sidenotes and margin figures, small multiples instead of one large chart, no drop cap. Keep `#FAFAF7`, not Tufte's cream.
- **Field guide** (variant): the plate grid from Components becomes the main view, with "Plate 7" running heads, range notes as sidenotes and paper `#F4F5F0`.
- **Legal document** (partial): Libre Caslon Text, numbered clauses (1, 1.1, 1.1(a)), defined terms bold on first use, cross-references in the sidenote margin. Missing: clause-hierarchy navigation and pleading-paper line numbers.
