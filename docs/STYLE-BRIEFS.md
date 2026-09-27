# Style briefs (for authoring agents)

## How to author a style

Read first: `docs/specs/2026-09-26-ui-directions-design.md`, `content/FIXTURE.md`, `ui-direction/ANTI-SLOP.md`, `docs/DESIGN-TEMPLATE.md`, and your style's entry below. If a finished style already exists in `ui-direction/styles/` (e.g. `technical-sheet`), skim its files for the expected level of finish, but do **not** copy its structure. Your layout must come from your own direction.

Produce in `ui-direction/styles/<id>/`: `DESIGN.md`, `tokens.css`, `dashboard.html`, `app.html`, `collection.html` (optional `style.css`).

**The bar:** at thumbnail size, your dashboard must be unmistakable. Someone who sees all 12 should never think two are the same design recolored. The difference must come from **layout, typographic system, and how components are constructed**, not palette. Each style's entry below gives a layout concept. Push it, but keep it a usable tool. Every fixture item must be present and legible. Take design risk in one or two signature places and keep the rest disciplined.

**Process:**
1. Write a short plan (palette 4–6 hex, type roles and scale, ASCII wireframe of both screens, 3–5 signature details). Check it against ANTI-SLOP's tells and the "generic cluster" below. Revise anything that's a default rather than a choice.
2. Build `tokens.css` and both HTML files. Static HTML/CSS; inline SVG for charts and drawn elements. Hover/focus states in CSS. Tiny inline JS only for a signature interaction (optional).
3. Run `python tools/build.py` (the whole library; only your styles need to pass) and `python tools/shoot.py <id>`. **Open and look at** `preview.png` and `app.png` with the Read tool. Critique honestly against the bar and ANTI-SLOP's self-check, then iterate. Expect 2–4 rounds. Check that Google Fonts actually rendered (compare against the fallback look).
4. Write `DESIGN.md` last, describing what you actually built, with concrete values. It must work as a standalone brief for an agent restyling an unrelated app.

**Lessons from the pilot (technical-sheet):**
- `tools/shoot.py` now renders `app.png` at a true 390px, so trust it.
- First screenshots always have collisions: overlapping panels, wrapped logs, badges colliding with neighbors. Look for them specifically.
- On the app, keep the primary action (Log pages) above the fold at 844px.
- The pilot's finish level is the bar: every fixture state visible and explained, redline used only for meaning. Its table-and-frame construction is **not** a template. If your dashboard ends up as "nav strip on top, table on the left, detail panel on the right", you've drifted. Restructure around your own layout concept.

**The collection screen (`collection.html`, 1440×900, FIXTURE Screen 3):** a creature index plus one creature's detail. It's the hardest test of a direction because it has real images. How does this direction frame an entity image, show a slot that's empty, make rarity a system, and present a stat block? Rules:
- Use only the shared art in `ui-direction/art/` via `<img src="../../art/<slug>.svg">`. Don't redraw creatures.
- Seen = silhouette (CSS filter), Unknown = empty slot with number only, and #011's broken image falls back to the direction's neutral placeholder box (never emoji).
- The creature grid is where directions drift into "rounded card grid". Build the grid the way *your* direction builds things (ruled index, plates on a wall, channel strips, a sheet, pockets…).
- Screenshot it (`shoot.py` now writes `collection.png`) and check the silhouettes, empty slots and placeholder all read clearly.
- Add a short "Collections and entity images" paragraph to the DESIGN.md **Components** section describing how the direction handles entity images, empty slots, rarity and stat blocks.

**Generic cluster to stay out of** unless your entry demands it: cream `#F4F1EA` + serif + terracotta `#D97757`; near-black `#0B0B0B`/`#111` + one acid accent; broadsheet hairlines + dense newspaper columns; identical rounded cards with soft shadows and gradients; tracked-caps eyebrows on every heading, `A · B · C` meta strings, `Label — fragment`, mono for every small label, `→` on every link.

**Hard rules:** no emoji; no images except the shared creature art in `ui-direction/art/` on the collection screen (draw everything else with CSS/SVG); Google Fonts only via `tokens.css` `@import` (the fonts listed below; small substitutions allowed if you say why); `app.html` has a viewport meta and no horizontal overflow at 390px (use `overflow-wrap:anywhere` for the long book title); dashboard designed for 1440×900; tabular numerals for numbers; visible focus styles; the disabled Cancel button visibly disabled; `—` vs `0.000` explained on screen. Don't touch files outside your style folders. Never edit `tools/`, `content/` or other styles.

**Report back:** fonts used, palette, the 3–5 signature moves, any fixture compromises, and anything you're unsure about. Keep it under 200 words.

---

## technical-sheet · Technical sheet
Feels like: an engineering drawing you can click. Use for: tools, data-dense.
Fonts: Barlow Condensed (titles, labels, CAD-style lettering), IBM Plex Mono (values, IDs, log). Palette idea: cool drafting paper `#EEF3F4`, teal-cyan ink `#0E5A6B`, deep ink `#13262B`, redline `#C8452C` (reviewer's markup, only for regressions and failure).
Dashboard: the whole viewport is one drawing sheet inside a border frame with zone coordinates (A–F along the top edge, 1–6 down the side). The runs are a parts list / bill-of-materials table with hairline cells. The selected run r-2291 is a "detail view" linked to its row by a numbered reference balloon and leader line. The chart is plotted on graph-paper grid with dimension lines marking the ±0.02 noise band. The regression is circled by hand in redline with a short checker's note. A **title block** in the bottom-right corner holds Evals / atlas-research / sheet 1 of 1 / rev / date. Navigation lives in a sheet-index strip, not a sidebar.
App: the current book as a part drawing: the cover as an orthographic box with dimension lines (304 pp, 184 read). Progress as a dimensioned scale bar. Up-next as a small parts list. Title block at the bottom as navigation.

## swiss-poster · Swiss poster
Feels like: an International Typographic Style poster that runs your ops. Use for: tools, marketing.
Fonts: Archivo only. Use its width axis (condensed ↔ expanded) and weight range with conviction. Palette idea: white `#FFFFFF`, black `#000000`, ultramarine `#1F3FD1` as the full-bleed band color, signal yellow `#FFD400` for highlight. Red only for failure.
Dashboard: flush-left, asymmetric 12-column grid, full-bleed horizontal bands. The top band states the finding in huge tight type (e.g. "summarize-v3 fell 0.041 below baseline"), occupying about a third of the height. Runs are a strict typographic list. Run IDs are large, and hierarchy comes only from size, weight and width, with no boxes at all. The selected run's detail sits in a full-height ultramarine column with white type. The chart is heavy flat bars or thick lines, no gridlines. Nav is a single line of large words.
App: poster composition. The book title set enormous and ragged, bleeding to the edges. 184/304 as giant numerals. The unfinished goal as a yellow band that is visibly only 40% filled.

## editorial · Editorial
Feels like: a long-read magazine feature about your data. Use for: reading, consumer, marketing.
Fonts: Newsreader (display at large optical size, and body), Instrument Sans (small UI text: inputs, buttons, table heads). Palette idea: cool white `#FAFAF7`, green-black ink `#1C2B25`, oxblood `#7A1F2B` accent. **Not** cream-and-terracotta, and **not** a dense newspaper. This is a spacious magazine spread.
Dashboard: a two-page spread. Left page: a sentence headline stating the finding, a standfirst, the chart as a captioned "Figure 1", and the metric breakdown as a small set table. A drop cap opens the commentary, which paraphrases the log. Right page: the runs as a "contents" list with dot leaders to scores. Sidenotes in the margin explain `—` vs `0.000` and the noise band. Actions sit inline like "Rerun · Compare" links set in Instrument Sans (choose separators deliberately).
App: the book as the feature: large italic title, byline, progress told in a sentence plus a thin progress rule. The highlight as a pull quote. Up next as a short "further reading" list.

## zine-collage · Zine collage
Feels like: a riso-printed zine someone pasted together at 2 a.m. Use for: consumer, marketing.
Fonts: Anton (cut-out headlines), Courier Prime (typed text), Permanent Marker (sparing hand annotations). Palette idea: riso inks: fluorescent pink `#FF48B0`, riso blue `#0078BF`, yellow `#FFE800` on bright paper `#F7F7F4`. Overprint (multiply) where inks cross.
Dashboard: pieces pasted on a sheet: the runs table as a typed strip with slight rotation (±1°), the chart as a clipped print with halftone dots (CSS radial-gradient), the log as a torn receipt, tape pieces holding things down. The regression circled in marker with a scrawled note. Misregistration offset on the big headline (second ink shifted 2px). It must stay readable. Rotate containers, never the text you need to scan. Nav as stickers along the top.
App: a zine page: riso-printed cover drawing, taped-in highlight, a stamped streak counter, and a torn-edge up-next list.

## phosphor-terminal · Phosphor terminal
Feels like: a well-made TUI (think htop/k9s/lazygit). Use for: tools, data-dense.
Fonts: JetBrains Mono (everything), VT323 (one or two large readouts only). Palette idea: amber `#FFB000` on warm brown-black `#1A1206`, dim amber `#8A6A2A`, red `#FF5C39` for failure, cool cyan `#6FD3E3` as the only second hue (selection). No CRT curvature, no heavy glow. A faint 1px text-shadow at most.
Dashboard: full-screen tiled panes drawn with box-drawing characters (┌─┐│└┘) or equivalent CSS borders at character-grid alignment. Runs pane with inverted selected row. Detail pane with metric table and a text sparkline (▁▂▃▅▇) plus a character-cell chart. Log pane tailing. A bottom status line like tmux/vim: mode, workspace, clock, and function-key hints (F1 help, / search, r rerun, c compare). Everything aligned to a character grid.
App: TUI on a phone: status line top, a progress bar `[█████████░░░░░░] 61%`, streak as a row of blocks, key hints at the bottom instead of a tab bar.

## hardware-product · Hardware product
Feels like: a Teenage Engineering / Braun device front panel. Use for: tools, consumer.
Fonts: Hanken Grotesk (tiny lowercase labels, body), Doto (dot-matrix LCD readouts). Palette idea: aluminium grey `#D4D5D1`, panel seams `#A9AAA5`, graphite `#2A2B2A`, LCD `#1E2A22` with pale green-grey digits `#B9D4B0`, one orange `#F26B1D` for the primary control and nothing else. Labels are tiny, lowercase, and printed next to controls like silkscreen.
Dashboard: a device panel divided into modules by visible seams. There's an LCD readout module showing the selected run's score and Δ in Doto, and a "channel strip" per run (compact vertical or horizontal strips with a status LED dot). Filters are physical-looking toggles and a rotary knob (CSS-drawn). The chart sits on a small LCD. Keycap-style buttons (Rerun is the orange key; Cancel is a greyed, unlit key). Depth is allowed only where it describes a physical control.
App: a handheld device: LCD screen top (book title scrolls or wraps in Doto, page 184/304), streak as LED dots, keycaps for Log pages, nav as a 4-position selector.

## raw-web · Raw web
Feels like: an honest 1998 HTML page that happens to be very useful. Use for: tools, reading.
Fonts: Tinos (Times-metric, body and headings), Cousine (Courier-metric, logs and code). Palette: `#FFFFFF`, `#000000`, link blue `#0000EE`, visited `#551A8B`, red `#CC0000` for failure. That's it.
Dashboard: a single document flow. `<h1>Evals</h1>`, a text nav of underlined links separated by ` | `, `<hr>`, a real `<table border="1" cellpadding="4">`, default-looking form controls, `<pre>` log, the chart as a plain SVG with black lines and no styling niceties, or a `<table>` of bars. The page uses the full width like old pages. Near-zero CSS is the point: default margins, default link styles, bold for emphasis. Very information-dense and fast to scan. Tasteful restraint, not parody: no under-construction GIF jokes, no marquee, no Comic Sans.
App: the same honesty on a phone: a plain document with headings, a definition list, underlined links, a plain `<progress>` element, a native `<button>`.

## quiet-stationery · Quiet stationery
Feels like: a Japanese notebook (Midori, Muji). Calm, precise, unhurried. Use for: consumer, reading.
Fonts: Shippori Mincho (headings, book titles), Zen Kaku Gothic New (UI and body). Palette idea: pale blue-grey paper `#EEF1F0` with a dot grid, aizome indigo ink `#2E3A59`, pencil grey `#8A9099`, one vermilion seal `#C23B22` used only as a small square hanko stamp. **Not** cream.
Dashboard: a notebook spread with very generous margins. The left page lists runs as a calm ruled list aligned to the dot grid, with lots of air between groups (passed / needs attention). The right page is the selected run, with a fabric ribbon bookmark hanging from the top edge. Section labels are set vertically (writing-mode: vertical-rl) in the margins. The chart is a single thin ink line on the grid with the noise band as a pale wash. The vermilion hanko marks the one thing needing attention.
App: one notebook page for today. The date runs vertically in the margin, the current book is written like a journal entry, the goal is shown as 20 small tick boxes with 8 inked, and a hanko stamps the streak.

## exhibition · Exhibition catalog
Feels like: walking through a museum room where each number is an exhibit. Use for: marketing, consumer, reading.
Fonts: Bodoni Moda (oversized numerals as objects), Schibsted Grotesk (wall labels, UI). Palette idea: gallery wall `#F1F0EC`, museum-green painted wall `#2F4A3A` for one "room", label ink `#1A1A1A`, brass `#A88B4A` for fine rules. Unboxed: nothing sits in a card.
Dashboard: a wall. The selected run's score 0.812 is set enormous in Bodoni as the centerpiece, with a small museum wall label beside it (title, "medium: ROUGE-L, faithfulness…", date, provenance = triggered by). The other runs hang at varying sizes and asymmetric positions with their own small labels (size may encode score or recency; say which). A compact catalogue checklist at the bottom lists all runs for scanning. The chart is framed like a print. The painted green "room" holds the regression discussion.
App: the book as a single exhibit: a big drawn cover on a painted wall, a wall label with title, author, pages, "on view since" (started date is not in the fixture; use last read). Up next as "coming soon to this room".

## toy-box · Toy box
Feels like: a well-made kids' toy or a playful consumer app (think Duolingo's confidence without copying it). Use for: consumer.
Fonts: Bricolage Grotesque (all roles; use its width/optical axes). Palette idea: flat saturated blocks: tomato `#FF5A36`, sky `#4DA8FF`, grass `#2DBE6C`, sunflower `#FFC933`, ink `#1E1B3A`, on white. **No gradients, no offset hard shadows** (neobrutalist cliché). Separate with color blocks and thick 3px ink outlines instead.
Dashboard: a toy-like but real tool. Runs are chunky rows with big status blobs (organic sticker shapes via border-radius / clip-path), each model gets its own color. Radii vary with hierarchy: big shapes are very round, small controls less so. The selected run lives in a big colored panel with a fat, friendly line chart with big dots. Buttons are chunky pills with an ink outline and a pressed state. Stickers mark the regression ("-0.041!").
App: this is where it shines: a big drawn book cover, streak as a row of chunky flame-free shapes (no emoji; draw it), the goal as a fat progress track at 40%, a bouncy Log pages button (motion only on press).

## nocturne · Nocturne
Feels like: a concert programme or a late-night hotel bar menu. Dark, gold, ceremonial. Use for: marketing, consumer, reading.
Fonts: Cormorant (display, large italics), Jost (geometric, labels and UI; small letterspaced caps allowed here but used sparingly). Palette idea: deep ink blue `#0F1B2D` (not neutral black), midnight `#172640`, gold hairline `#C9A45C`, ivory text `#EFE8D8`, garnet `#B0414B` for failure.
Dashboard: symmetric, framed composition: a double gold hairline frame around the viewport with small Art-Deco corner ornaments (CSS/SVG, restrained). Centered masthead. Three columns like a programme: the runs as "the programme" (left), the selected run as the centerpiece (center: large italic score, the chart drawn in gold hairlines), and metrics plus log as "notes" (right). Symmetry is the move. Keep tool text left-aligned inside columns.
App: an invitation card: centered title in large Cormorant italic, a gold hairline ring as progress around the page number, up next as "later this evening".

## plain-service · Plain service
Feels like: GOV.UK / USWDS. Task-first public-service clarity. Use for: forms, tools.
Fonts: Atkinson Hyperlegible (all roles). Palette: white `#FFFFFF`, text `#0B0C0C` (the standard's own value, justified here), link blue `#1D70B8`, black header band, focus yellow `#FFDD00` with black underline, red `#D4351C` errors, green `#00703C` primary button.
Dashboard: a single task page, left-aligned in a max-width two-thirds column plus a one-third related column. Black header band with "Evals" and the workspace. Breadcrumb. H1: "Check last night's evaluation runs". An error summary box at the top for r-2287 with a link to the row. Runs as a plain table with status tags (text in coloured tags). Selected run as a "summary list" (key / value / action rows with "Compare" links). The chart is simple and captioned with a text alternative sentence. The disabled Cancel has explanatory hint text.
App: "one question per page": "How many pages did you read today?" with a large labelled input, hint text ("Your goal is 20. You've logged 8."), the green Continue button, and the current book as an inset text block. Up next and highlight as plain lists below. Nav as simple links.


---

## Added directions (phase 1)

Fonts already used by other directions (avoid as primary faces): Barlow Condensed, IBM Plex Mono, Archivo, Newsreader, Instrument Sans, Anton, Courier Prime, Permanent Marker, JetBrains Mono, VT323, Hanken Grotesk, Doto, Tinos, Cousine, Shippori Mincho, Zen Kaku Gothic New, Bodoni Moda, Schibsted Grotesk, Bricolage Grotesque, Cormorant, Jost, Atkinson Hyperlegible, DM Mono, Martian Mono. Suggestions below are starting points. Swap if a better Google Font fits, but stay off that list.

## collector-binder · Collector's binder
Feels like: a trading-card binder you keep your whole collection in. Use for: consumer, tools.
Fonts: Zilla Slab (card titles, numbers), Red Hat Text (UI, body). Palette idea: binder vinyl deep teal `#1F4E5A`, card stock `#FBFAF5` (a card surface, not a page background), sleeve edge `#C9D6DA`, set-symbol gold `#B8892B`, ink `#1B2428`. Rarity marks: common ●, uncommon ◆, rare ★, mythic gets a **foil** treatment. This is the one place a multi-stop gradient is justified, because foil is a physical material.
The structural move: **a pocket grid where empty slots are first-class.** Pages of 3×3 sleeves (9-pocket page) on a binder spread with ring holes down the gutter. Section tabs stick out of the page edge. Completion is the headline number. Empty pockets show a slot number printed on the page behind the sleeve. The detail view is the card **pulled out of its sleeve**: large, slightly lifted, with a full stat block on the card face, a set number and a rarity mark.
Dashboard: runs are cards in sleeves on a binder page (score large on the card face, model as the card's "type"). The selected r-2291 is pulled out and shown large beside the page, with its metrics as the card's stat block. Queued/running runs sit in partly-filled pockets.
App: a pocket album on the phone: the current book as the pulled-out card, up-next as a 3-pocket strip, the streak as a row of stamp pockets.
Collection: this is the native screen. Two binder pages of 9 pockets = 18 (16 used, 2 blank pockets that belong to no entry).

## spatial-canvas · Spatial canvas
Feels like: a multiplayer whiteboard (Figma / tldraw / FigJam), where position means something. Use for: tools, consumer.
Fonts: Albert Sans (UI, node text), Kalam (sticky notes and cursor names only). Palette idea: canvas `#F3F4F6` with a faint square grid (not a dot grid; another direction uses dots), ink `#1D2230`, selection blue `#2F6BFF`, sticky yellow `#FFE58A`, three cursor colours for collaborators.
The structural move: **items placed in 2D and linked by connectors. Proximity and arrows carry the meaning; there is no list layout.** A floating tool bar (bottom centre) and zoom indicator (e.g. 64%), a minimap at bottom-right. Named frames group nodes. The selected node shows blue selection handles. Multiplayer cursors with name labels (use the fixture's people: M. Okafor, L. Brandt). Comments as pins or sticky notes. No permanent side panels; the detail appears as an expanded node or a frame on the canvas itself.
Dashboard: one frame per model; runs are nodes placed left-to-right by start time inside their frame. An arrow from the baseline node (r-2203, drawn as a ghost node) to r-2291 carries the Δ label. The failed run is a node with a red error sticky attached. The selected r-2291 is expanded in place into a large node containing metrics, chart and log.
App: a small canvas: the current book at the centre, up-next books linked by arrows, the highlight as a sticky note, the goal as a node with a progress ring, and a zoom control.
Collection: the index as a board: creatures arranged in clusters by type (frames), evolution lines as connectors (#006 → #007 → #008 as an empty dashed node). Lanternfin selected with handles and expanded detail node.

## schematic-transit · Schematic
Feels like: a transit map, where your data is the network. Use for: tools, consumer, data-dense.
Fonts: Overpass (signage and UI), Overpass Mono (the departures board). Palette idea: white `#FFFFFF`, ink `#111418`, one distinct line colour per model (choose 4 that don't collide with status colours), status red `#D7263D` only for closures and disruptions, and the departures board in near-black `#15181C` with warm yellow `#F6C744` characters.
The structural move: **the diagram is the layout.** Lines with 45° turns carry entities as stations (ticks for stops, outlined circles for interchanges), with a legend box, a scale, and a "you are here" marker. A **split-flap departures board** component serves as the list view: rows of monospaced characters in cells.
Dashboard: each model is a line running left to right through the night (23:00 → 02:00 as the time axis). Runs are stations on their model's line. r-2291 is a **disrupted station** (dashed segment, warning marker, "service change" note). r-2287 is a **closed station** (a cross). Running and queued runs appear on a departures board ("next arrivals"). The selected station opens a station information panel with metrics, the chart as an "on-time performance" trace, and the log as service notices.
App: the current book as a line from p.1 to p.304 with chapter ticks, "you are here" at p.184, up-next books as interchange connections, and the goal as today's journey (8 of 20 stops).
Collection: the region as a network map. Creatures sit at stations by habitat (tidal caves, marsh, cliffs…), with unknown ones as unlabelled stops. The evolution line becomes a short branch line. Lanternfin's detail is a station info panel.

## windowed-desktop · Windowed desktop
Feels like: classic Mac OS 8–9 (Platinum) or BeOS, a real multi-window tool rather than nostalgia. Use for: tools, consumer.
Fonts: a pixel face for chrome (Silkscreen or Pixelify Sans, for the menu bar, window titles and button labels only) plus a crisp humanist sans for content (e.g. Nunito Sans, Mulish or Libre Franklin; pick one and justify it). Palette idea: platinum grey `#DDDDDD`, bevel light `#FFFFFF`, bevel dark `#888888`, frame `#222222`, selection `#3A4FC7`, desktop pattern in a muted teal `#4F7F88` (a subtle CSS pattern).
The structural move: **overlapping windows, where the overlap itself is the hierarchy.** The front window is the selection. Windows behind have inactive (unstriped) title bars and dimmed content, and are partly covered. A menu bar runs along the top with app menus and a clock, and there's a desktop pattern and a few desktop icons. Alerts are real dialog boxes. **Pass condition:** if you end up with tiled, non-overlapping panes with title bars, you've failed. That would be a different direction recoloured.
Dashboard: a "Runs" list window (Finder list view with disclosure triangles and sortable columns) behind a front "r-2291 Info" window. A small "Score history" window is partly covered. A "Log" window uses a SimpleText-style plain text window. The failed run raises an alert dialog ("r-2287 failed… [Rerun] [OK]"), which is partly behind the front window or minimized as a windowshade.
App: phone-sized. One full-screen window with a title bar, a menu bar strip, the current book in the window, and "Log pages" opening a modal dialog sheet (show it open or as a strong primary button).
Collection: a Finder **icon view** of creatures (icons with labels, unknown ones as generic blank-document icons, seen ones as dimmed "alias" icons) with a front "Get Info" window for Lanternfin.

## dense-portal · Dense portal
Feels like: a Japanese web portal (Yahoo! Japan, Rakuten): everything on one page, packed tight, extremely scannable. Use for: data-dense, tools, consumer.
Fonts: M PLUS 1p (all roles; tiny sizes 10–13px, bold for module titles). Palette idea: white `#FFFFFF`, text `#222222`, link blue `#0033CC`, visited `#663399`. Each module gets its own header-bar colour (4–6 muted-to-bright colours: e.g. `#E8F0FB` bars with `#2A5DB0` titles, one red `#E60012` "alert" module, one orange `#FF7A00` "ranking" module). Hairline borders `#D5D9E0`.
The structural move: **many small boxed modules packed into a 3–4 column page**, each with a coloured header bar, a "more »" link and tab strips inside modules. Numbered ranking lists appear where the content really is a ranking. A type ladder of 10–13px carries hierarchy through weight and colour, not size. Density is the point: no hero, no whitespace luxury, but strict alignment so it scans.
Dashboard: a portal home for Evals. Modules: the regression alert (red header, top), tonight's runs (tabbed: all / failed / running), score ranking (numbered, best to worst), score trend mini chart, r-2291 metrics, log tail, pinned comparisons (empty), workspace notices, quick links to Datasets/Models/Baselines/Settings.
App: the mobile portal. A tab strip at top, stacked modules with coloured bars, tiny type but a tap-safe primary action.
Collection: a dense index table-grid with small thumbnails. Modules for "Missing from your index", a rarity ranking, "Recently caught", and a type filter tab strip. Lanternfin's detail sits in a large module with a spec table.


---

## Phase 2 candidates (borderline: each must pass its own gate or be cut)

These six are **candidates**. After they're built, a fresh-context reviewer compares each against all existing directions at thumbnail size. Any that read as a recolour of a neighbour are cut and become variants in `AESTHETICS.md`. Build each so its **structural move is impossible to miss**, and read your **pass condition** carefully.

Fonts already used (avoid as primary faces): everything in the lists above, plus Zilla Slab, Red Hat Text, Red Hat Mono, Albert Sans, Kalam, Fragment Mono, Overpass, Overpass Mono, Jersey 10, Nunito Sans, Fira Mono, M PLUS 1p, M PLUS 1 Code.

All three screens are required (dashboard, app, collection) and all rules above apply. Also add a `## Variants` section at the end of DESIGN.md (see `docs/DESIGN-TEMPLATE.md`).

## game-menu · Game menu
Feels like: the menu screens of a 16-bit/32-bit RPG, run as a real tool. Use for: consumer, tools.
Fonts: DotGothic16 (menus, window text) plus one crisp companion for long text if needed (e.g. M PLUS Rounded 1c or Sometype Mono; justify it). Palette idea: window fill deep navy `#1B2A6B` (flat, **not** a gradient), window border off-white `#EDEFF7` (2–3px, with rounded corners and an inner line), gold `#F4C542` for currency and highlights, gauges in green `#3CCB6A` / amber `#F2B233` / red `#E5484D`.
The structural move: **fixed, nested menu windows driven by a pointing-hand cursor.** A command list with the cursor (drawn SVG hand) marks the selection. There's a status panel with portraits and gauges, and a dialogue box along the bottom that narrates events in sentences ("r-2291 fell below its baseline."). Submenus open as smaller windows over their parent.
**Pass condition:** it must read as a *game menu*, not an operating system (that's `windowed-desktop`) and not a TUI (`phosphor-terminal`). The cursor hand, gauges, dialogue box and party/status composition carry it. Without them, it fails.
Dashboard: a "party" of models, each a status row with gauges (score as HP-style bar against the band). A command menu (Rerun / Compare / Cancel greyed out). The selected run's detail is a status screen. The log is the dialogue box. The failed run shows as a "KO" status.
App: a save-file/status screen: the current book as the active party member with a page gauge, the streak as a counter, today's goal as an EXP bar, and "Log pages" as the command under the cursor.
Collection: the **bestiary**: a numbered list with the cursor, "???" entries for unknown ones, silhouettes for seen ones, and the detail as a monster data window with stat gauges.

## horizontal-panorama · Horizontal panorama
Feels like: Windows Phone / Zune Metro. Content lives on a canvas wider than the screen, and the next section's title peeks in from the right. Use for: consumer, marketing.
Fonts: Outfit (huge 200–300 weight lowercase section titles, UI). Palette idea: black `#000000` or white background (pick one) with one accent colour (e.g. cobalt `#0050EF`) and flat colour tiles. No shadows, no borders on tiles, no radius.
The structural move: **a horizontal panorama.** Sections sit side by side on a wide strip. Giant light lowercase section titles are cut off at the right edge to signal more. The panorama is a horizontally scrolling container (overflow-x on it, **never** on the page body). Pivot headers ("runs  history  log") sit at the top with the inactive ones faded.
**Pass condition:** it must not read as `swiss-poster`, which is heavy, tight, flush-left bands. Here the type is huge but *light*, the layout is horizontal, and the next section visibly continues off-screen. If the screenshot looks like a normal vertical page, it fails.
Dashboard: the panorama opens on "r-2291" (big score, metrics), with "runs" to its left partly visible and "history" peeking at the right. Runs appear as a tight list of tiles and rows.
App: pivots ("today  library  highlights  stats") with "today" active. Content in the pivot uses a live-tile treatment for the book and streak.
Collection: a panorama with a "collection" section (a tile wall of creatures), "lanternfin" in focus, and "missing" peeking at the right.

## spreadsheet · Spreadsheet
Feels like: the whole app is a spreadsheet (Excel / Google Sheets / Airtable-as-grid). Use for: tools, data-dense.
Fonts: Source Sans 3 (cells, UI), Source Code Pro (formula bar, formulas). Palette idea: white cells, gridlines `#E1E4E8`, header bands `#F3F4F6`, selection green `#1E7145` with a fill-handle square, conditional-format fills (pale red `#F8D7DA` for regression, pale green `#D4EDDA` for passed), and a red comment triangle in the corner of a cell.
The structural move: **everything sits on the cell grid.** Column letters and row numbers are always visible. A formula bar shows the selected cell's reference and formula (e.g. `E2  =C2-D2`). Sheet tabs run along the bottom (Runs, r-2291, History, Log). Charts are floating objects anchored over cells. Explanations are cell comments. Filters are the column-header filter buttons.
**Pass condition:** it must not read as `technical-sheet` (a drawing frame with a parts list) or `raw-web` (an HTML table in a document). Row and column headers, the formula bar and sheet tabs must all be present, and every element must align to cells.
Dashboard: sheet "Runs" with the selected cell in r-2291's Δ column (formula visible). Conditional formatting shows states. A floating chart object shows the 12-run history. The metrics sit in a range to the right, and the log is in a merged cell range.
App: mobile sheets: a frozen first column, a formula bar at top, a condensed grid for today's reading, and a bottom sheet-tab strip for navigation.
Collection: a sheet with images in cells (IMAGE() style), columns for No/Name/Type/Rarity/Status/Caught, rarity as data-validation chips, and the selected row's detail on a second sheet shown via a split view or a floating "record" panel.

## constructivist · Constructivist
Feels like: a Rodchenko/Lissitzky poster, dynamic and diagonal, built for announcements more than for dense tables. Use for: marketing, consumer.
Fonts: Big Shoulders Display (heavy condensed headlines), PT Sans Narrow (text). Palette idea: paper `#E6E3DC` (cool grey; **not** cream), red `#D52B1E`, black `#111111` is allowed here, and halftone grey.
The structural move: **a dominant diagonal axis.** Headlines, bars and bands run along one strong diagonal (e.g. −18°). Circles and thick bars act as graphic anchors. Blocks look photomontage-like (halftone). Arrows direct the eye. Text you must read is horizontal or exactly on the axis; tables stay horizontal but are *placed* by the diagonal composition.
**Pass condition:** it must not read as `swiss-poster` (orthogonal grid, flush-left). If the main composition is orthogonal, it fails.
Dashboard: the finding is set on the diagonal ("summarize-v3 fell 0.041"), with a red bar slicing through, the runs list anchored to the axis, a big red circle marking the regression on the chart, and the detail block set in a black wedge.
App: the book title rides the diagonal, the page count sits inside a red circle, and today's goal is a thick bar at the axis angle.
Collection: specimens arranged along diagonals, Lanternfin's detail inside a tilted band, rarity as bar thickness, and unknowns as outlined circles.

## official-dossier · Official dossier
Feels like: a bureaucratic form or case file: numbered field boxes, stamps, carbon copies. Use for: forms, tools.
Fonts: Libre Franklin (printed form labels), Sometype Mono (typed-in values). Palette idea: form paper white, form ink green `#1F5F4A` (all printed rules and labels), typed values in black, a violet stamp `#5B3FA6`, a carbon-copy yellow sheet `#FFF6C8` peeking behind, and red `#C0392B` only for rejection or failure.
The structural move: **every value lives in a numbered field box.** Boxes are labelled "1a Model" style in small caps-free labels at the top-left of each box. There are section codes (Part A / Part B), character-comb boxes for IDs, checkbox grids for status, a form number and revision in the corner, a barcode, a signature line, and rubber stamps for states (RECEIVED, REJECTED, PENDING).
**Pass condition:** it must not read as `plain-service` (a modern web task page) or `technical-sheet` (a drawing sheet). The numbered field-box construction must be everywhere, not only in one panel.
Dashboard: "Form EV-7 Evaluation Run Report". Part A holds the run register (rows of field boxes), Part B the selected run r-2291 (fields 7a–7j), Part C the metrics grid, Part D the log as "remarks". The regression is flagged with a stamp. The disabled Cancel is a struck-through checkbox with a printed reason.
App: "Daily Reading Return": fields for pages read (comb boxes 0 8), goal, streak, current book, and a "Submit return" button (Log pages).
Collection: a register of specimens (field boxes with photo boxes, "photo not supplied" for #011), with Lanternfin's detail as a case file with its photo paper-clipped.

## comic-panels · Comic panels
Feels like: a comic page where the data tells a story panel by panel. Use for: consumer, marketing.
Fonts: Bangers (SFX and headlines), Comic Neue (lettering and body). Palette idea: process colours: cyan `#00AEEF`, magenta `#EC008C`, yellow `#FFF200`, black ink `#111111`, white paper. Ben-Day dots (CSS radial-gradient) for tone.
The structural move: **a panel grid with gutters sets reading order and emphasis.** Panels vary in size by importance. Yellow caption boxes give narration and context. Speech balloons (with tails pointing at the thing) carry explanations. SFX lettering marks alerts sparingly. Panel borders are thick ink lines.
**Pass condition:** it must not read as `zine-collage` (pasted, rotated clippings). Here everything is ordered panels on a gutter grid, and the balloons and captions are structural. No rotation of panels, and no tape.
Dashboard: a page of the night: small panels for the passed runs in time order, a big splash panel for the r-2291 regression with the chart, a panel for the failed run with an error balloon, and a narration caption explaining `—` vs `0.000`.
App: a 3–4 panel strip for today: the book, the goal ("12 more to go!" in a balloon) and the streak. Log pages is the call to action in the last panel.
Collection: a "roster" page: numbered panels per creature with silhouette panels for seen ones and blank panels with "?" for unknowns. Lanternfin gets a splash panel with a stat caption.
