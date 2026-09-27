---
name: Dense portal
feels_like: A Japanese web portal where every square inch is a labelled module
use_for: data-dense, tools, consumer
fonts: M PLUS 1p, M PLUS 1 Code
colors: #FFFFFF, #222222, #0033CC, #2A5DB0, #E60012, #FF7A00
---

# Dense portal

## Essence
The whole product on one page, packed like a Yahoo! Japan or Rakuten home page: a masthead with a big search box, a row of category tabs, then three or four columns of small boxed **modules**. Every module has the same anatomy: a coloured header bar with a bold title, a small "more »" link, and sometimes a tab strip. Type stays between 10 and 13px, and hierarchy comes from weight (400/500/700/800) and colour, not size. The most memorable move is the **module header bar as a colour-coded system**: blue for ordinary modules, a solid red bar for the one thing that needs attention, orange for real rankings, green for notices, grey for keys and empty states. The eye learns the codes in seconds and scans the page by them. Density is the point, but strict alignment and identical module construction keep it readable.
Feels like: a portal home page for your data, where nothing is hidden behind a click.

## Use for / avoid for
- Use for: monitoring and overview screens with many small, different facts (runs, queues, rankings, notices); catalogues and indexes with thumbnails; consumer "home" screens that summarise several things at once; any screen whose users come back daily and learn where things live.
- Use for: mobile home screens built as stacked modules under a top tab strip.
- Avoid for: single-task flows and forms (one question per page wants air, not modules); long reading; marketing pages that need one message; brand-led products that need a large display face.
- It breaks down when there are fewer than about five modules. With little content, it looks like an empty portal. Pick another direction.

## Type
- **M PLUS 1p** for everything: 400 body, 500 secondary emphasis, 700 labels, links and table heads, 800 module titles, headlines and key figures. Its digits are tabular by default; still set `font-variant-numeric: tabular-nums` on tables.
- **M PLUS 1 Code** 400/700 only for code and logs (log tails, error strings like `KeyError: 'line_items'`, keyboard hints). Never for IDs or numbers in tables.
- Scale (px / line-height 1.45): 10 meta, table heads, "more »", counts; 11 table body, lists, notes; 12 body, module titles, tabs, buttons; 13 headline items and the selected item's title. One figure per screen may go to 18px/800 (the number the page is about, e.g. a score and its delta). The logo is 24 to 26px/800. Nothing else is larger.
- No uppercase eyebrows, no letterspacing. Module titles are sentence case, weight 800, in the module's accent colour.
- Install: `<link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;500;700;800&family=M+PLUS+1+Code:wght@400;500;700&display=swap" rel="stylesheet">`. Fontsource: `@fontsource/m-plus-1p`, `@fontsource/m-plus-1-code`. next/font: `import { M_PLUS_1p, M_PLUS_1_Code } from "next/font/google"`.

## Color
| Token | Hex | Role |
|---|---|---|
| `--paper` | #FFFFFF | page and module background |
| `--ink` | #222222 | body text |
| `--ink-2` | #545B66 | secondary text, table heads, meta |
| `--ink-3` | #7A818C | disabled text, not-computed values |
| `--link` | #0033CC | links; underline on hover only |
| `--visited` | #663399 | visited links |
| `--rule` | #D5D9E0 | every hairline: module borders, table rows |
| `--rule-2` | #AEB5C0 | dashed empty-slot borders, disabled button border |
| `--wash` | #F4F6F9 | table heads, tab-strip background, spec-table `th` |
| `--select` | #FFF7D1 | the selected row, cell or menu item (with a 2 to 3px blue inset bar) |
| `--blue` / `--blue-bar` | #2A5DB0 / #E8F0FB | default module accent and bar; primary button; active tab |
| `--alert` / `--alert-wash` | #E60012 / #FFF1F1 | the alert module bar; regressions and failures only |
| `--rank` / `--rank-bar` / `--rank-ink` | #FF7A00 / #FFF1E3 / #A34A00 | ranking modules and rank badges only |
| `--green` / `--green-bar` | #1D7A3E / #E7F4EB | notice and quote modules; the "Passed" tag |
| `--grey` / `--grey-bar` | #4A515C / #EEF0F3 | key, legend and empty-state modules |

- Contrast: `--ink`, `--ink-2`, `--link`, `--blue`, `--green`, `--rank-ink` and `--alert` all pass AA on white at 11px and up. White on `--alert` and white on `--blue` pass AA. `#FF7A00` fails as text on white, so it is only a bar edge, badge fill or rule. Orange titles use `--rank-ink`.
- Status meaning: red = regression or failure, nothing else (not the logo, not decoration). Green text tag = passed. Blue tag = running (with a fill showing progress). Dashed grey tag = queued. Grey `—` = not computed.
- Domain category colours (e.g. creature types) are small outlined tags with muted hues that never reuse the alert red or rank orange.

## Tailwind
```css
@theme {
  --font-sans: "M PLUS 1p", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  --font-mono: "M PLUS 1 Code", ui-monospace, monospace;
  --text-2xs: 10px; --text-xs: 11px; --text-sm: 12px; --text-base: 13px; --text-fig: 18px;
  --color-paper: #FFFFFF;
  --color-ink: #222222;
  --color-ink-2: #545B66;
  --color-ink-3: #7A818C;
  --color-link: #0033CC;
  --color-visited: #663399;
  --color-rule: #D5D9E0;
  --color-rule-2: #AEB5C0;
  --color-wash: #F4F6F9;
  --color-select: #FFF7D1;
  --color-blue: #2A5DB0;
  --color-blue-bar: #E8F0FB;
  --color-alert: #E60012;
  --color-alert-wash: #FFF1F1;
  --color-rank: #FF7A00;
  --color-rank-bar: #FFF1E3;
  --color-rank-ink: #A34A00;
  --color-green: #1D7A3E;
  --color-green-bar: #E7F4EB;
  --color-grey-bar: #EEF0F3;
  --radius-tab: 3px;
  --spacing-gutter: 10px;
  --spacing-bar: 24px;
}
```
Without Tailwind, link `tokens.css` (custom properties plus the font import). The module anatomy, tabs, tags, ranking and table classes are in `style.css` next to it.

## Layout moves
1. **Masthead, then category tabs.** A 22px utility strip (workspace or region on the left, last-updated on the right, 10px), a 50px masthead with a heavy blue wordmark, a boxed context tag beside it, and a wide search box with a 2px blue border and an attached solid "Search" button. Below that, the section tabs: bordered tabs with 3px top corners on a wash, the current one solid blue with white text, all sitting on a 3px blue rule that runs the full width. Counts sit inside tabs in 10px ("Runs 8 tonight", "Index 10/16").
2. **A page of fixed-width columns with 10px gutters**, 12px from the viewport edges. Desktop: a narrow left column (140 to 160px) of menu modules, a flexible main column, one or two fixed side columns (230 to 420px). Columns end at different heights; that's normal.
3. **One top-priority module spans the columns** right under the tabs: a solid-bar module (red when something is wrong, solid blue when it's a status headline such as completion). It holds two or three headline items side by side, each led by a boxed tag, with a 13px/800 headline link and one or two 11px lines of detail.
4. **Everything else is a module.** Same border, same 24px header bar, same 6/8px body padding. Vary the bar colour by module kind, never the construction. Lists are tables or bullet lists inside modules, never card grids.
5. **Filters are menus and tab strips, not dropdowns.** Left-column menu modules list options with counts on the right; the current one gets the yellow select wash and a 3px blue inset bar. Inside a module, a tab strip filters its content (All 8 / Passed 5 / Failed 1 …). Counts live in the tabs, which removes the need for KPI cards.
6. **The selected item's detail is a module in a side column**, not a drawer or a page. Title in 13px/800, one 18px figure pair, a spec table (`th` on a wash), then sub-sections separated by 11px/800 blue sub-heads with a hairline under them. Actions sit at the bottom of the module, left-aligned.
7. **Mobile:** masthead (wordmark left, date right), the category tabs as four equal tabs 36px tall at the top, an optional one-line yellow ticker with the day's headline, then modules stacked full width with 8px gutters. The primary action is a full-width 44px solid blue button inside the first module, above the fold.

## Signature details
- **Colour-coded module header bars**: 2px top edge in the accent colour, a tinted 24px bar, bold title in the accent, a 10px "more »" link at the right. Alert modules invert to a solid red bar with white text.
- **Numbered ranking with square rank badges** (16px, 10px/800): 1 to 3 filled orange with white numerals, the rest outlined orange. Used only for real rankings (best to worst score, most caught, a queue order). Ties share a number.
- **Tiny boxed tags** (10px/700, 1px border in the text colour, no radius) for status, rarity, type and alerts, e.g. [Regression] [Passed] [Running 62%]. A running tag fills with a pale blue background up to its percentage.
- **Yellow selection with a blue inset bar**: selected rows, cells and menu items use `#FFF7D1` plus a 2 to 3px `#2A5DB0` inset edge. Nothing else is yellow.
- **Square bullets and dotted row rules**: 4px square markers in the module's accent colour before list items; dotted `--rule` separators between ranking rows and menu items.

## Components
- **Buttons:** 28px high, 12px/700, radius 2px. Primary: solid `#2A5DB0`, white text. Secondary: white with a 1px blue border and blue text. Disabled: `--wash` fill, dashed `--rule-2` border, `--ink-3` text, `cursor: not-allowed`, plus a 10px reason line under the button row ("Cancel is unavailable: r-2291 finished at 02:14:02."). Mobile primary: full width, 44px.
- **Search:** input with a 2px blue border and no radius, an attached solid blue button labelled "Search", and a small `kbd` hint ("Press / to search").
- **Tables:** 11px body, 10px/700 heads on `--wash`, 1px `--rule` row lines, 3px/5px cell padding, numbers right-aligned and tabular, IDs bold links. Long values wrap with `overflow-wrap: anywhere`; short columns are `nowrap`. An error line sits as a full-width row directly under its item, with the error string in M PLUS 1 Code red.
- **Spec table:** two columns, `th` 700 in `--ink-2` on `--wash`, every cell boxed in `--rule`. Use it for any entity detail.
- **Navigation:** category tabs (see Layout 1); menu modules in the left column; "more »" links on module bars say where they go ("All runs »", "Full log »").
- **Status:** boxed tags; `—` in `--ink-3` with a title tooltip ("Not computed: still running"); a key module ("How to read this page") that defines `—`, `0.000`, Δ, the noise band and what red means.
- **Charts:** small inline SVG inside a module. Light grey gridlines, 10px tabular labels, a pale blue band for a normal range with dashed edges, a 1.5px blue line with 4px square markers, and the out-of-range point and segment in red with a direct label. Legend is a single 10px line under the chart.
- **Empty / loading / error:** empty states live in a grey module: bold "None yet." plus one sentence on how to fill it. Loading is inline next to the thing that's loading: grey text plus an 8px ring spinner (stops under `prefers-reduced-motion`). Errors name the object and cause and say what to do.
- **Focus:** 2px solid `#0033CC` outline, 1px offset; on blue fills (buttons, the active tab, search button) the outline is `#FF7A00` with a 2px offset so it stays visible.
- **Collections and entity images:** the index is a ruled table-grid inside one module (8 columns by 2 rows at 1440px): cells share hairlines, no gaps or radii. Each cell has number (10px/700) and rarity at the top, an 84px thumbnail mat in `--wash`, the name as a bold 11px link, outlined type tags, and a count line. Seen-but-not-caught entities keep the art as a silhouette (`filter: brightness(0); opacity: .38`) with "Seen, not caught". Unknown slots show only the number and a dashed empty mat ("Not seen"). A failed image falls back to a white box with a 1px `--rule-2` border reading "No image" plus the name; it sits behind the `<img>`, which hides itself `onerror`. Rarity escalates: Common is quiet grey text with no box; Uncommon is an outlined blue tag; Rare is a solid blue tag; Mythic is a solid dark-gold `#9A6B00` tag and a gold 2px frame around the whole cell with a gold pinstriped mat, so it can't be missed even as a silhouette. Stat blocks are a small table: label, bold value, and a 9px bar on a track with quarter gridlines and a 0/25/50/75/100 scale row. Evolution lines are boxed mini-slots joined by », with the current one on the selection yellow and the unknown one dashed.

## Density & motion
- Base unit 4px. Module body padding 6px 8px 8px; gutter between modules 10px; table rows about 22px; header bars 24px. Tight inside a module, one consistent gutter between modules.
- Desktop aims to fit a working screen (1440×900) without scrolling. If it doesn't, it scrolls like a portal page. It never adds whitespace to look calm.
- Mobile keeps the type ladder (10 to 13px) but raises touch targets: tabs 36px, primary button 44px, list rows at least 32px.
- Motion: only the loading spinner and hover underlines. No transitions on modules, no fade-ins.

## Don'ts
- Don't turn modules into rounded cards with shadows. Borders are 1px hairlines, radius 0 (tabs get 3px top corners, buttons 2px).
- Don't let bar colours drift into decoration. Red is only for alerts, orange only for rankings. If two modules of the same kind get different colours, the system stops meaning anything.
- Don't scale type up to create hierarchy. If something needs to stand out, make it 800 weight, give it a coloured bar, or move it into the top module. The single 18px figure is the exception, not a pattern.
- Don't add numbered badges to lists that aren't rankings or real sequences.
- Don't pad the page with a hero, a welcome line or empty columns. If there isn't enough content for modules, use another direction.
- Don't make it a costume: no Japanese text, no mascot, no fake ads or banner slots. The portal structure is the point, not the nostalgia.
- Don't break alignment for density. Every module in a column shares its left and right edges; numbers stay right-aligned and tabular.

## Variants
Never changes: masthead then category tabs, one spanning top-priority module, every other module built the same with a 24px colour-coded header bar, 10–13px type with hierarchy from weight, and yellow selection with a blue inset bar.

### Dark
| Token | Light | Dark |
|---|---|---|
| `--paper` / `--wash` | `#FFFFFF` / `#F4F6F9` | `#16191F` / `#1E2229` |
| `--ink` / `--ink-2` / `--ink-3` | `#222222` / `#545B66` / `#7A818C` | `#E6E8EC` / `#A9B0BB` / `#7E8691` |
| `--link` / `--visited` | `#0033CC` / `#663399` | `#8AB4FF` / `#C9A2F2` |
| `--rule` / `--rule-2` | `#D5D9E0` / `#AEB5C0` | `#2F353F` / `#4A525E` |
| `--select` | `#FFF7D1` | `#3A3415` |
| `--blue` / `--blue-bar` | `#2A5DB0` / `#E8F0FB` | `#6E9BEA` / `#1B2740` |
| `--alert-wash` | `#FFF1F1` | `#3A1418` |
| `--rank-ink` / `--rank-bar` | `#A34A00` / `#FFF1E3` | `#FFA24D` / `#33230F` |
| `--green` / `--green-bar` | `#1D7A3E` / `#E7F4EB` | `#5CCB85` / `#17301F` |

The alert bar stays solid `#E60012` with white text, and the primary button keeps its `#2A5DB0` fill. The selection's inset bar uses the dark `--blue`.

### Density
- Denser: 20px table rows, 22px header bars, 5px module padding, and a third side column at 1600px and up. Never go below 10px type.
- Roomier (touch, older readers): body 13px, rows 26px, gutters 12px. Hierarchy still comes from weight, not size.

### Named aesthetics
- **Japanese web portal** (variant): the direction as written. For a Rakuten-style version, the default module accent becomes crimson `#BF0000` on a `#FDECEC` bar and alerts move to a solid `#222222` bar, so red is never both.
- **Bento grid** (variant): keep the 24px header bar on every module, size modules by content (spans of 1–3 columns), radius 6px at most, no shadows. The trap is identical rounded tiles with one icon and one number each (ANTI-SLOP: the SaaS card kit).
- **Mail-order catalog** (variant): each module is a catalog block with a `--wash` photo mat carrying lettered keys (A, B, C) matched to a spec table of catalog number and price. Bold order codes replace rank badges.
- **Newspaper broadsheet** (partial): newsprint `#F2F2EE`, module bars replaced by 1px column rules, a masthead in Old Standard TT. Missing: a headline size ladder across stories and justified serif columns, which break this direction's type rule.
