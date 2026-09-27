---
name: Spatial canvas
feels_like: A multiplayer whiteboard where position means something
use_for: tools, consumer
fonts: Albert Sans, Kalam, Fragment Mono
colors: #F3F4F6, #1D2230, #2F6BFF, #FFE58A, #D12F3B, #D9590B
---

# Spatial canvas

## Essence
The screen is an infinite canvas, the kind you know from Figma, FigJam or tldraw, on a pale grey square grid. There are no pages, sidebars or list layouts. Items are **nodes** placed in 2D. Related nodes sit inside a named **frame**: a square-cornered box whose label sits outside its top-left corner. **Connectors** (arrows with small pill labels) carry relationships such as "compared against", "then" or "evolves into". The selected item is not opened in a side panel. It is **expanded in place** into a large node with blue selection handles on its corners and a blue name pill under it. Notes and explanations are **sticky notes** in a handwritten face, stuck onto the thing they explain. Collaborators appear as coloured cursors with name tags. The chrome floats: a product and section bar top-left, search top-right, a tool bar bottom-centre, a minimap bottom-right. The most memorable move is the expanded selected node with handles, surrounded by smaller nodes and wires. At thumbnail size it reads as a board someone is working on, not an app page.

Feels like: a multiplayer whiteboard where position means something.

## Use for / avoid for
- **Use for:** monitoring and review tools where items group naturally (by model, owner, type, region) and relationships matter: comparisons, lineage, dependencies, evolution chains. Also planning, retros, collections, and personal trackers that benefit from a playful "my board" feel.
- **Works on mobile** as a small vertical canvas: one selected node at the top, stickies and connected nodes below, floating bars top and bottom.
- **Avoid for:** long homogeneous lists (50+ rows) that people sort and scan. Give those a real table, or put one table node on the canvas. Also avoid forms, checkout, and long reading.
- **Breaks down** when there's nothing to connect. If you draw no connectors and every frame is the same size in a neat grid, you've built a card dashboard with a grid background.
- Needs a fixed-size viewport or a real pan/zoom implementation. Absolute positioning is fine at a known size. For fluid pages, keep the node/frame/connector vocabulary but let it flow (see Layout move 7).

## Type
- **Albert Sans** (400, 500, 600, 700, 800) carries everything a person reads in the UI: node text, frame labels, numbers, buttons. Numbers use `font-variant-numeric: tabular-nums` (set on `body`).
- **Kalam** (400, 700) is used **only** for sticky notes and collaborator cursor tags. It is what people write, not what the system prints.
- **Fragment Mono** (400) is only for code-like strings: run IDs, log lines, error messages, slot numbers like `#007`.

| Role | Family | Size / line-height | Weight |
|---|---|---|---|
| Hero readout in expanded node | Albert Sans | 48 / 0.9, tracking -0.03em | 800 |
| Secondary readout (Δ) | Albert Sans | 28 / 1, tracking -0.02em | 800 |
| Canvas heading, expanded node title | Albert Sans | 22 / 1.15, tracking -0.015em | 800 |
| Score on a small node | Albert Sans | 22 / 1 | 700 |
| Book or entity title (mobile) | Albert Sans | 18 / 1.15 | 800 |
| Sticky note | Kalam | 15–17 / 1.3 | 400, 700 for emphasis |
| Body, node text, buttons | Albert Sans | 13 / 1.35 | 400–700 |
| Frame label, meta, table heads | Albert Sans | 12 / 1.3 (heads 11) | 600 (label) + 400 (count) |
| Log, IDs, error text | Fragment Mono | 11.5 / 1.6 | 400 |

Everything is sentence case. No tracked caps, no eyebrows. A frame label is the only heading most groups get: `summarize-v3` in 600 ink-2, followed by a quiet count in 400 muted ("2 runs, 1 selected").

Install:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Kalam:wght@400;700&family=Fragment+Mono&display=swap" rel="stylesheet">
```
- npm: `@fontsource/albert-sans`, `@fontsource/kalam`, `@fontsource/fragment-mono`
- Next.js: `import { Albert_Sans, Kalam, Fragment_Mono } from "next/font/google"` (Kalam and Fragment Mono need explicit `weight`).

## Color
| Token | Hex | Role |
|---|---|---|
| `--canvas` | `#F3F4F6` | The canvas. Everything sits on it. |
| `--grid-minor` / `--grid-major` | `#E6E8EC` / `#DADDE3` | Square grid, 24px minor, 120px major. Lines, never dots. |
| `--surface` | `#FFFFFF` | Nodes and floating chrome. |
| `--frame-line` | `#C9CED8` | Frame outlines (frames fill with white at 55%). |
| `--node-line` | `#B9BFCB` | Node outlines, connector-label outlines. |
| `--ink` | `#1D2230` | Text, filled progress, stat bars. |
| `--ink-2` / `--muted` | `#4A5163` / `#636A7C` | Secondary text / meta, counts, `—`. |
| `--select` | `#2F6BFF` | Selection outline and handles, primary button, active tool, hover outline, focus ring. |
| `--select-tint` | `#E4ECFF` | Current section tab, pressed filter, noise band fill. |
| `--sticky` | `#FFE58A` | Explanatory sticky notes. Text `#3B3210`. |
| `--sticky-error` | `#FFD3D0` | Error sticky attached to a failed item. Text `#4A1115`. |
| `--fail` / `--fail-ink` | `#D12F3B` / `#A81E2A` | Failed: node outline, status glyph, error code. Nothing else is red. |
| `--regress` / `--regress-ink` | `#D9590B` / `#B24407` | Below expectation: a regression, a negative metric Δ, an unmet goal. |
| `--ok` | `#1E8A4C` | Passed glyph only. |
| `--mythic` | `#7A3FE0` | Highest rarity edge and chip (collections). |
| `--cursor-a` / `--cursor-b` / `--cursor-c` | `#0E9F8A` / `#C4359B` / `#2F6BFF` | Collaborator cursors and avatars. `c` is "you". |

Contrast on white: ink 15.9:1, ink-2 7.9:1, muted 5.4:1 (4.9:1 on the bare canvas), select-ink `#1F52D6` 6.5:1, fail-ink 7.3:1, regress-ink 5.6:1 (all AA for body). White on `--select` is 4.5:1, which is fine for the 13–15px bold button label and not for thin text. Sticky text on yellow is 10.2:1.

Status meaning: **red** = failed. **Orange** = worse than expected but not broken (a regression, or a goal not met yet). **Dashed outline** = not there yet (queued, not computed, never seen, empty slot, today's unfinished streak day). **Blue** = selection and interaction, never status. Passed is a small green check glyph and the word "Passed". The node itself stays neutral.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-ui: "Albert Sans", "Segoe UI", sans-serif;
  --font-hand: "Kalam", "Segoe Print", cursive;
  --font-code: "Fragment Mono", ui-monospace, monospace;

  --color-canvas: #F3F4F6;
  --color-grid-minor: #E6E8EC;
  --color-grid-major: #DADDE3;
  --color-surface: #FFFFFF;
  --color-frame-line: #C9CED8;
  --color-node-line: #B9BFCB;
  --color-ink: #1D2230;
  --color-ink-2: #4A5163;
  --color-muted: #636A7C;
  --color-select: #2F6BFF;
  --color-select-ink: #1F52D6;
  --color-select-tint: #E4ECFF;
  --color-sticky: #FFE58A;
  --color-sticky-error: #FFD3D0;
  --color-fail: #D12F3B;
  --color-fail-ink: #A81E2A;
  --color-regress: #D9590B;
  --color-regress-ink: #B24407;
  --color-ok: #1E8A4C;
  --color-mythic: #7A3FE0;
  --color-cursor-a: #0E9F8A;
  --color-cursor-b: #C4359B;

  --radius-node: 10px;
  --radius-float: 12px;
  --radius-frame: 0px;
  --shadow-float: 0 1px 2px rgb(29 34 48 / 0.08), 0 4px 14px rgb(29 34 48 / 0.10);

  --text-11: 11px; --text-12: 12px; --text-13: 13px; --text-15: 15px;
  --text-18: 18px; --text-22: 22px; --text-28: 28px; --text-48: 48px;
}
```
Without Tailwind, link `tokens.css` (the same values as CSS custom properties plus the font `@import`). `style.css` holds the reusable canvas pieces: grid background, `.float`, `.frame` + `.frame-label`, `.node`, `.selected` + `.h` handles, `.sticky`, `.cursor`, `.wires`/`.wire-label`, tool bar.

## Layout moves
1. **The page is a canvas.** `body` gets the square grid (four `linear-gradient`s: minor and major lines both ways). At a fixed desktop size (e.g. 1440×900), place frames and nodes with absolute positions on a 4px rhythm, and snap the big shapes to the 24px grid.
2. **Chrome floats and never docks.** Four floating panels, 12px from the edges: product, workspace and section tabs top-left; collaborators + search (with a `/` key hint) top-right; tool bar or view controls bottom-centre; minimap bottom-right. These panels are the only surfaces with a drop shadow, because they really sit above the canvas.
3. **Group with frames, not cards.** One frame per natural group (per model, per type). Frames have square corners, a 1px `--frame-line` border, a 55% white fill, and a label **outside** the top-left corner: name in 600 plus a quiet count ("2 runs", "3 of 3 caught"). Frames can differ in size. Arrange them loosely, the way a person would on a board, and make the group that holds the selection the biggest.
4. **Position means something.** Inside a frame, order nodes along one axis by a real variable (start time left to right, catalogue number, sequence). Say what it is in a label or note. Put things that relate next to each other and draw a connector between them. Place a reference item (a baseline, a previous version) as a **ghost node** (dashed outline, 45% white) near what it's compared with. Never stack same-size frames in a tidy column. Give frames different sizes and offsets, step later items down or right inside a frame (a later start sits lower), stack a frame vertically when that fits its content, and draw at least one connector **across** frames for a real relationship (e.g. a dashed arrow labelled "next CI run" between two runs from the same pipeline).
5. **The selection expands in place.** The selected item becomes a large node (about 400–600px wide) inside its own frame, with a 2px blue outline on its bounds, 8 square handles (9×9, white fill, blue 1.5px border) and a blue name pill centred under it. All detail lives in that node: readout, breakdown table, chart, log, actions. No side panel, no modal.
6. **Explanations are stickies stuck to their subject.** A legend (`—` vs `0.000`), a threshold explanation or a checker's note is a yellow sticky, rotated 1–1.5°, placed touching or overlapping the node it's about. An error is a pink sticky attached to the failed node, with the error string in mono and the next step in handwriting.
7. **Mobile is a vertical canvas.** Keep the grid, a floating top bar (name, date, zoom), and a floating bottom pill for navigation. Content flows in normal document order at 16px side margins: the selected node (with handles) first, a sticky overlapping its bottom edge, then a row of two nodes (goal + streak), then a frame of connected nodes. Connectors between stacked nodes are short vertical CSS arrows (`::before` line + `::after` triangle at a `--x` percentage). Zigzag the nodes (88% width, alternating 12% left offset) so it reads as placed, not listed. Primary action sits inside the node it acts on, above the fold.

## Signature details
- **Selection handles and the name pill** on exactly one expanded node per screen. The blue outline sits on the node's bounds (`outline-offset: -1px`) and the handles sit centred on the corners and edge midpoints.
- **Frame labels outside the corner**: `summarize-v3  2 runs, 1 selected`. Groups get no other heading.
- **Collaborator cursors**: a small arrow in the person's colour with a Kalam name tag (square top-left corner, rounded elsewhere), parked near the thing that person owns or triggered. Matching avatars sit in the top-right bar.
- **Labelled connectors**: grey 1.5px arrows for "then" and "evolves". One orange 2px curve with a pill label (`Δ −0.041`) for the comparison that matters. A dashed connector goes into an empty or not-yet-existing node.
- **Floating tool bar with single-key hints** (V, H, F, S, L, C) and a zoom readout (`− 64% +`). On screens where the job is filtering rather than editing, the bottom-centre bar carries the filters instead.

## Components
- **Buttons:** 34px tall, 8px radius, 13px bold, no wrapping. Primary is solid `--select` with white text, and hover darkens to `--select-ink`. Secondary is white with a `#BCC2CE` 1px border, and the border turns ink on hover. Disabled is `#F1F2F5` with a **dashed** `#B7BCC8` border and grey text, with a one-line reason next to it ("Can't cancel: it finished at 02:14:02."). There's no destructive style. Destructive actions live in context menus.
- **Inputs and search:** a `#F0F2F5` well, 34px, 8px radius, placeholder `#6E7486`, a `kbd` key hint on the right. Focus turns it white with a 2px blue ring.
- **Tabs and filters:** text buttons in floating bars. The current one gets `--select-tint` fill and `--select-ink` 700. Filter groups have a small 11px muted label ("Status", "Type") and a 1px separator between groups.
- **Nodes (list items):** white, 1px `--node-line`, 10px radius, 10–12px padding, about 188px wide. Line 1: status glyph + mono ID + time on the right. Line 2: the name (wraps; insert `<wbr>` after hyphens in long slugs). Line 3: the big number + small Δ. Line 4: status word + meta. Hover draws a 1px blue ring (`box-shadow: 0 0 0 1px`). A failed node has a red outline. A queued node has a dashed outline.
- **Tables:** only inside an expanded node. Hairline `#ECEEF2` row rules, 11px muted heads, right-aligned tabular numbers, and Δ coloured only when it's a regression.
- **Status glyphs** (14px SVG, always paired with a word): green circle with check = passed; red rounded square with × = failed; a blue ring with a partial arc = running (plus a 6px progress bar and "62%"); dashed grey circle = queued.
- **Charts:** plain inline SVG inside the expanded node. A 1.8px ink line with 2.4px dots, a `--select-tint` band for the expected range, a dashed baseline, and the outlier point as an open orange circle with its value beside it. Axis labels 10.5px muted, max three ticks.
- **Logs:** a `#F4F5F8` well with a 1px border and 6px radius, Fragment Mono 11.5/1.6, `white-space: pre`. Warning lines in `--regress-ink`.
- **Empty / loading / error:** empty is a **dashed frame** with a plain sentence inside it ("Nothing pinned. Compare with baseline on a run, then pin the result here."). An error is a pink sticky on the failed node with the exact message and the fix. `—` (not computed) and `0.000` (a real zero) are explained on a yellow legend sticky.
- **Focus:** a 2px `--select` outline with a 2–3px offset on everything. Selection and focus share a colour on purpose: in a canvas, focus is where selection would go.
- **Collections and entity images:** each entity is a 132px node. The image sits in an 84px well tinted by its group (Tide `#D8EBF5`, Moss `#DCEBD3`, Ember `#F8DDCF`, Gale `#E3E5F3`, Stone `#E7E2D9`), with a mono number, a rarity mark, the name, types and count below. **Seen** uses a neutral `#ECEEF2` well with the art as `filter: brightness(0); opacity: .62` and an italic "Seen, not caught" line. **Unknown** is an empty node with a dashed border and only the mono number, and it keeps its slot size. **Failed image:** `onerror` hides the `<img>` and reveals a neutral `#ECEEF2` box with a crossed-rectangle glyph and "Image didn't load". The name stays. **Rarity is a loudness scale:** Common = a muted word only; Uncommon = an ink word with a small diamond; Rare = an ink chip plus a 2px ink edge on the node; Mythic = a purple chip plus a 3px `--mythic` edge. Groups are frames by primary type. Lineage is drawn with connectors ("evolves", "evolves into"), and a not-yet-seen successor is a dashed node outside any type frame. The **stat block** sits in the expanded node as rows of label, an 8px `#ECEEF2` track with an ink fill to value/100, and a bold right-aligned number.

## Density & motion
- Base unit 4px. Canvas grid 24px. Node padding 10–12px, frame padding 14–16px, 48px between sibling nodes (room for an arrow), 20–24px between frames.
- Node text 13px with meta at 12px. A small run node is about 188×112. An expanded node on a 1440×900 screen is about 580px wide.
- Mobile: 16px side margins, nodes full width or 88% zigzag, a 44px primary button, a 40px-tall bottom navigation pill that floats 14px above the edge.
- Motion answers direct manipulation only. Hover outlines appear instantly. A button press moves the button 1px down. If you animate anything, animate a node expanding into its selected size (about 160ms ease-out). Nothing drifts, pulses or fades in on load.

## Don'ts
- Don't dock anything. A permanent left sidebar or right detail panel turns this back into an admin template. Detail expands in place.
- Don't build a list with a grid background behind it. Nodes of one kind in one straight column with no frames or connectors is a list. Group them into frames, order them on a real axis, and draw at least the connectors that carry meaning.
- Don't use a dot grid. This direction's canvas is a square line grid.
- Don't put Kalam anywhere but stickies and cursor tags. Handwriting on buttons, headings or numbers becomes a costume.
- Don't give every node a shadow or rounded "card" treatment with padding and a drop shadow. Nodes are flat white with a 1px outline. Only floating chrome and stickies cast a shadow.
- Don't rotate nodes or text you need to scan. Only stickies tilt, and by 1.5° at most.
- Don't add fake collaborators or chat. Cursors show people who are really in the data (an owner, a triggerer). If there's nobody, show only "you".
- Don't use blue for status. Blue means selected, focused or the primary action.

## Variants
Never changes: the square-grid canvas, nodes grouped in frames labelled outside the corner, labelled connectors carrying real relationships, the selection expanded in place with handles and a name pill, stickies stuck to their subject, and floating chrome that never docks.

### Dark
| Token | Light | Dark |
|---|---|---|
| `--canvas` | `#F3F4F6` | `#1A1D23` |
| `--grid-minor` / `--grid-major` | `#E6E8EC` / `#DADDE3` | `#22262D` / `#2B3038` |
| `--surface` | `#FFFFFF` | `#252930` |
| `--frame-line` / `--node-line` | `#C9CED8` / `#B9BFCB` | `#3A404A` / `#48505C` |
| `--ink` / `--ink-2` / `--muted` | `#1D2230` / `#4A5163` / `#636A7C` | `#E8EAEE` / `#B6BBC5` / `#8F96A3` |
| `--select` / `--select-tint` | `#2F6BFF` / `#E4ECFF` | `#5B8CFF` / `#22304F` |
| `--fail-ink` / `--regress-ink` | `#A81E2A` / `#B24407` | `#FF6B73` / `#FF9A4D` |

Stickies stay paper-yellow `#FFE58A` with `#3B3210` text, since they are physical notes. Primary button text becomes `#0F1420` on the lighter select blue. Frames fill with `#252930` at 55%, and floating-chrome shadows use `rgb(0 0 0 / .45)`.

### Density
- Denser: 160×96 nodes, 12px node text, 32px between siblings, frames 16px apart. The minimap earns its place.
- Roomier: 220px nodes, 64px between siblings for longer labelled connectors, a 640px expanded node.

### Named aesthetics
- **Material Design** (variant): elevation only where layers are real: nodes flat, floating chrome at `0 4px 12px rgb(29 34 48 / .18)`, stickies just below, and the primary action as a 56px pill in the tool bar. Keep Albert Sans; avoid Material's baseline `#6200EE` purple and uniform cards (ANTI-SLOP).
- **Corkboard / detective board** (variant): cork canvas `#BF946A` with the grid kept at 12%, pinned white index cards with a 10px pin head, straight taut strings in ink. A red string only for the one failure link.
- **Mood board** (variant): canvas `#FAFAFA` with the grid at 50%, large unframed image nodes, swatch nodes with their hex in Fragment Mono, one frame per theme.
