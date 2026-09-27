---
name: Collector's binder
feels_like: A trading-card binder you keep your whole collection in
use_for: consumer, tools
fonts: Zilla Slab, Red Hat Text, Red Hat Mono
colors: #1F4E5A, #DFE8EA, #FBFAF5, #B8892B, #1B2428, #B23A2C
---

# Collector's binder

## Essence
The screen is an open ring binder lying on the desk. Deep teal vinyl fills the viewport, two pages of welded 9-pocket sleeves sit on it with three metal rings crossing the gutter, and divider tabs stick out of the page edge as navigation. Every item is a card in a pocket, and **empty pockets are first-class**: an item that doesn't exist yet, is queued, or was never seen is shown as an empty pocket with its number printed on the page behind the plastic. The selected item rides up out of its pocket, and its full version lies beside the binder as a large card **pulled out of its sleeve**, slightly rotated and the only thing on screen with a shadow. Its face carries the full stat block, a set number and a rarity mark. Completion ("10 of 16 caught", "5 of 8 passed") is the headline number.
Feels like: a trading-card binder you keep your whole collection in.

## Use for / avoid for
- Use for: collection and completion trackers (games, stamps, badges, achievements, reading lists), any app where items have a fixed slot and "not yet filled" matters, tools with a small, countable set of objects (runs, builds, releases) where each deserves a face.
- Use for: consumer apps that want warmth and materiality without cartoon styling.
- Avoid for: long or open-ended lists (more than about 30 items per view). Pockets don't paginate gracefully into hundreds, so use a table there.
- Avoid for: text-heavy reading, forms, settings screens. There's no card to hold, so the metaphor turns into a costume.
- Avoid for: dense monitoring where rows must be compared column by column. Cards are scanned, not sorted.

## Type
- **Zilla Slab** 500/600/700 (+ italic 400/500): card names, collector numbers, scores, big completion numbers, printed slot numbers, flavor text (italic), divider-tab labels. It's the "printed on the card" voice.
- **Red Hat Text** 400/500/600/700: all UI and body: labels, metadata, buttons, filters, explanations.
- **Red Hat Mono** 400/500: only real code and logs (log tails, error messages, `KeyError: ...`).
- Numerals: `font-variant-numeric: tabular-nums lining-nums` on `body`. Zilla Slab otherwise falls back to old-style-looking digits in places, and `008` stops reading as a number.
- Scale (px): 10.5 / 12 / 13 / 15 / 18 / 24 / 34 / 42–56. Body 13/1.35 on desktop, 13–15 on mobile. Card names 14.5 in pocket cards (12.5 with line-height 1.05 for two-line names), 24–30 on the pulled-out card. Score on a pocket card 42. Completion headline 34–44 with its unit set at 18 in Zilla 500 on the same baseline.
- Case: sentence case everywhere. No tracked caps. The only "label above a heading" is the small `#007` collector number above the creature name, because it's real data.
- Install:
  - `<link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Red+Hat+Text:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Red+Hat+Mono:wght@400;500&display=swap" rel="stylesheet">`
  - `@fontsource/zilla-slab`, `@fontsource/red-hat-text`, `@fontsource/red-hat-mono`
  - `next/font/google`: `Zilla_Slab`, `Red_Hat_Text`, `Red_Hat_Mono`

## Color
| Token | Hex | Role |
|---|---|---|
| `--vinyl` | `#1F4E5A` | Binder cover: the page background of the whole app, primary button fill |
| `--vinyl-deep` | `#163C45` | Spine/gutter, punched holes, field borders on vinyl |
| `--vinyl-ink` | `#D8E4E6` | Text printed on the vinyl |
| `--page` | `#DFE8EA` | Pocket page seen through clear vinyl, current divider tab |
| `--pocket` | `#E8EEF0` | Inside an empty pocket, progress track |
| `--seam` | `#B9C9CE` | Heat-welded pocket seams, thumb-cut outlines |
| `--sleeve-edge` | `#C9D6DA` | Inactive divider tabs and filter chips |
| `--print` | `#677D83` | Slot numbers printed on the page (large only), disabled controls |
| `--card` | `#FBFAF5` | Card stock. Only cards, slips and labels use it, never a page background |
| `--card-edge` | `#D9D4C3` | Card edge and rules inside a card |
| `--ink` | `#1B2428` | Text, card art frames |
| `--ink-2` | `#4A585D` | Secondary text |
| `--gold` | `#B8892B` | Set symbols, the Rare star, the selected card's gold underline, focus ring. Never text |
| `--red` | `#B23A2C` | Failed and regressed values only |
| `--ring` / `--ring-dark` | `#A9B4B7` / `#74828A` | Metal rings |
| `--t-tide/moss/ember/gale/stone` | `#D7E7EE` `#DFE8D3` `#F2E1CF` `#E7E7F0` `#E6DFD3` | Pale tint behind entity art, by primary type |
| `--foil` | 6-stop gradient `#BBA6EA → #95D8CE → #EFD57A → #EBA7C3 → #A7C3F0` | Mythic frame only |

Contrast: ink on card 15.1:1, ink on page 12.7:1, ink-2 on page 5.9:1, ink-2 on card 7.1:1, vinyl-ink on vinyl 7.0:1, card on vinyl 8.8:1, red on card 5.7:1 (all AA for body). `--print` on pocket is 3.5:1, so use it for text of 24px and up and for disabled controls only. Gold on card is 3.0:1, so it works for marks and rings and never for text.
Status: red means failed or regressed and nothing else. Passed is plain ink (no green). Running is shown by a card only part-way into its pocket, queued by an empty pocket with a dashed slip. Rarity uses marks and foil, never status colors.

## Tailwind
```css
@import "tailwindcss";
@theme {
  --font-card: "Zilla Slab", Rockwell, Georgia, serif;
  --font-sans: "Red Hat Text", "Segoe UI", sans-serif;
  --font-mono: "Red Hat Mono", Consolas, monospace;

  --color-vinyl: #1F4E5A;
  --color-vinyl-deep: #163C45;
  --color-vinyl-ink: #D8E4E6;
  --color-page: #DFE8EA;
  --color-pocket: #E8EEF0;
  --color-seam: #B9C9CE;
  --color-sleeve: #C9D6DA;
  --color-print: #677D83;
  --color-card: #FBFAF5;
  --color-card-edge: #D9D4C3;
  --color-ink: #1B2428;
  --color-ink-2: #4A585D;
  --color-gold: #B8892B;
  --color-danger: #B23A2C;
  --color-tide: #D7E7EE;
  --color-moss: #DFE8D3;
  --color-ember: #F2E1CF;
  --color-gale: #E7E7F0;
  --color-stone: #E6DFD3;

  --radius-card: 7px;
  --radius-pocket: 3px;
  --radius-page: 4px;
  --shadow-lift: 0 2px 3px rgb(12 32 38 / .25), 0 18px 34px rgb(12 32 38 / .38);
}
```
Without Tailwind, link `tokens.css` (custom properties plus the font import). The binder primitives (pocket with thumb cut and glare, card, rings, holes, divider tabs, buttons) are in `style.css`. Copy them as they are.

## Layout moves
1. **The viewport is the binder.** `body` is `--vinyl` with a dashed stitch line 5px inside the edge. Nothing floats on a neutral page background.
2. **Spread:** left page, 40–44px gutter (`--vinyl-deep`) with three rings (16px-tall rounded bars that overlap both page edges by 17px), right page. Pages are `--page` with 4px outer radius and 2px at the gutter. Punched holes with white reinforcement rings sit on each page's inner edge. At 1440 wide: pages 470–600px, pockets 138–180 wide, 8–10px between pockets.
3. **Pocket grid, 3×3 per page.** One item per pocket, always in fixed slot order (number, or time). The grid never reflows to close gaps. A missing item leaves its pocket empty, and extra pockets at the end of a set stay empty and are labelled "spare pocket".
4. **Top strip on the vinyl (52–58px):** a spine label (card-stock strip in a dark frame) with the product name, then the completion headline, then search on the right. Filters sit on the vinyl under it as small sleeve-coloured chips.
5. **Navigation is divider tabs** (32–34px wide, vertical text) sticking out of the right page's outer edge. The current tab is page-coloured and 5px longer, so it reads as attached to the page. Secondary state lives on the tab ("Team 6 of 6", "Datasets counting…"). On mobile the tabs stand up from the bottom edge instead.
6. **Selection has two parts.** The selected card rides up 9px out of its pocket with a 2px ink edge and a gold underline, and its large version (370–410px wide, card ratio roughly 5:7) lies beside the binder rotated −1.2° with the lift shadow. The detail is the card face: name bar, art window, type line, stat block, flavor or log, footer with collector number. Actions go on a page-coloured slip under or beside the card, never on the card.
7. **Mobile (390):** one page with holes down the left edge. The current item is a small pulled card (146px) with its numbers printed beside it. Progress toward a goal is a row of tiny pockets (8 filled of 20), a streak is a strip of perforated stamps in a clear mount, and a short list is a 3-pocket strip with titles printed on the page below. Primary action is a full-width vinyl button above the fold.

## Signature details
1. **Half-moon thumb cut** (40×16px outline) at the top edge of every pocket, plus one diagonal glare stripe across the clear vinyl. These two details make a rectangle read as a sleeve.
2. **Empty pockets carry printed numbers.** `008` in Zilla 600 at 30px in `--print`, centred in the empty pocket. Queued work gets a dashed "slip" in the pocket, and an empty-state feature ("Pinned comparisons: none yet") takes the ninth pocket.
3. **The pulled-out card** is the only element with a shadow, rotated −1.2°, and it has a P/T-style box in its bottom-right corner holding the key number (`0.812` with `−0.041 vs baseline`).
4. **Collector numbers and set symbols.** Every card footer reads `007/016` with a small gold set symbol. Each group (model, region) gets its own 2-stroke gold glyph in the card's top-right corner.
5. **Partial insertion for in-progress work.** A running job's card sits only part-way down in its pocket, with the progress printed on the page above it.

## Components
- **Buttons:** 38px min height, 4px radius, Red Hat Text 600 13px. Primary: `--vinyl` fill, `--card` text, 3px darker bottom edge. Secondary: card stock with 1.5px ink border. Disabled: transparent, 1.5px dashed `--print` border, `--print` text, `not-allowed`, always followed by a one-line reason ("Cancel is off: r-2291 finished at 02:14:02"). No destructive style is needed on these screens. If you need one, use a red text label on the secondary style.
- **Inputs and search:** card-stock field with a 2px `--vinyl-deep` border set into the vinyl, 38px tall, key hint in a tiny keycap at the right.
- **Filter chips:** 26px, 3px radius, `--sleeve-edge` fill. Pressed: card stock, bold, 3px gold inner bottom edge. Rarity chips include their mark.
- **Lists:** pocket grids (above). A pocket card has a name bar (32px), a framed art window (1px ink, 3px radius, type-tint background), a type line, and a footer with collector number and count. For tabular detail (metrics), use a plain table inside the card face with 1px `--card-edge` rules and right-aligned Zilla numbers.
- **Navigation:** divider tabs (see Layout 5). The app name sits on the spine label.
- **Status:** words first ("Passed", "Failed", "Running, 62%", "Queued"). Failed gets a pale red art window and red score. Regression gets a red Δ and the word "regression". `—` means not computed, and a legend in the page footer says so next to `0.000` "computed, scored zero".
- **Charts:** live in the pulled card's art window: 1px ink frame, `--pocket`-ish tint, noise band as a flat `#D3E1E3` rect, dashed baseline, 2px ink line with 2.5px dots, the out-of-band segment and point in red with a Zilla label.
- **Empty / loading / error:** empty = an empty pocket with printed text. Loading = small "counting…" on the relevant divider tab. Error = the message in Red Hat Mono on the card face plus a plain sentence on the slip saying what to do ("Fix the extractor's line_items schema, then rerun it").
- **Focus:** 2px ink outline, 2px offset, plus a 5px gold ring (`box-shadow`). Visible on vinyl, page and card.
- **Collections and entity images:** entity art sits in the card's framed art window on a pale tint of its primary type, `object-fit: contain`, never cropped. **Caught** = full printed card. **Seen** = a grey proxy card (`#EDF0EF`, dashed edge and dashed art frame) with the art as a silhouette (`filter: brightness(0); opacity: .5`), name, number and "Seen, not caught". **Unknown** = empty pocket with only the number printed on the page. **Spare** pockets past the end of a set say "spare pocket" in small print. **Broken image:** a neutral placeholder box (1.5px `--print` border, `#E7ECED`, name in Zilla plus "Image missing") sits behind the `<img>` in the same grid cell, and `onerror="this.hidden=true"` reveals it. **Rarity** is a mark in the name bar: Common ● small ink dot (quiet), Uncommon ◆ ink diamond, Rare ★ gold star (plus a gold inner hairline around the art on the big card), Mythic = a 7px **foil frame** round the whole card with diagonal holo lines, a foil star and the word "Mythic" under the name. The mythic frame shows even while the card is only seen. **Stat block:** label (12px 600), value (Zilla 700 15px, right-aligned), 9px bar in `--vinyl` with card-stock tick marks every 10 on a `--pocket` track, max 100. **Evolution lines** are mini pockets (58×76) joined by drawn arrows, with the unknown stage as an empty pocket showing its number.

## Density & motion
- Base unit 4px. Pocket gaps 8–10px, card inner padding 5–6px, gaps inside a card 4px, gaps between page-level groups 14–22px. Pocket cards are dense (10.5–13px text). The pulled-out card is roomier (13–15px).
- Desktop: 9 pockets per page, two pages or one page plus the pulled card. Mobile: one page, pockets scale down to strips (3 across, 10 across for goal pockets, 11 stamps).
- Motion: a pressed button moves down 1px. If you animate anything, animate the selected card riding up out of its pocket (translateY −9px, 160ms ease-out) as the answer to a click. Nothing else moves.

## Don'ts
- Don't make the page background card stock or cream. Card stock is only for cards, slips and labels, and the viewport is vinyl.
- Don't close up empty pockets or hide unknown items. The gaps are the point, and a grid that reflows to fill holes has lost the direction.
- Don't round the cards into soft SaaS tiles or give every card a shadow. Only the pulled-out card casts one, and pocket cards sit flat under plastic.
- Don't use foil (or any gradient) for anything but the Mythic rarity. The only other gradients allowed are the single glare stripe on pockets, the stamp perforation mask and stat-bar tick marks.
- Don't turn it into a costume: no fake leather textures, stitched-leather images, skeuomorphic metal gradients on rings, or rotated text you need to read. Only the one pulled card rotates.
- Don't add colored status pills. Status is a word on the card plus red only for failure or regression.
- Don't print decorative numbers on pockets. Every printed number is a real slot, ID or count.

## Variants
Never changes: the fixed-slot pocket grid with empty numbered pockets, the one pulled-out card that alone casts a shadow, divider-tab navigation, partial insertion for running work, and completion as the headline number.

### Dark
The vinyl is already dark, so dark mode darkens the pages. Cards keep card stock because they are objects.

| Token | Light | Dark |
|---|---|---|
| `--vinyl` / `--vinyl-deep` | `#1F4E5A` / `#163C45` | `#123239` / `#0C2328` |
| `--page` / `--pocket` | `#DFE8EA` / `#E8EEF0` | `#22363C` / `#2A4047` |
| `--seam` / `--sleeve-edge` | `#B9C9CE` / `#C9D6DA` | `#3C5760` / `#34494F` |
| `--print` | `#677D83` | `#8FA6AD` |
| `--card`, `--ink`, `--gold`, `--red` | unchanged | unchanged (they only sit on card stock) |

Text printed on the page (strip titles, "spare pocket", the legend) switches to `--vinyl-ink` `#D8E4E6`. The lift shadow deepens to `0 2px 3px rgb(0 0 0 / .4), 0 18px 34px rgb(0 0 0 / .55)`.

### Density
- Denser: 4×4 pockets per page (about 120px wide, 26px name bar, 32px score), pulled card 340px. Past 16 per page the pockets stop reading as cards; use a table.
- Roomier: 2×3 pockets at 200px with the stat block on the pocket face, pulled card 440px.

### Named aesthetics
- **Trading cards** (variant): the direction as written. Give each type a 4px inner frame one step darker than its `--t-*` tint; foil stays Mythic only.
- **Sticker album** (variant): pages become white `#FFFFFF` album sheets with printed numbered frames instead of welded pockets (no thumb cut or glare), the rings become two 2px `--ring-dark` staples in the gutter, and the selected sticker lifts one corner. Keep empty numbered slots and the pulled-out detail.
- **Stamp album** (variant): pockets become clear mounts on a page ruled every 12px in `--seam`, card faces get perforated edges (radial-gradient mask, 4px teeth), and empty slots print catalogue number and face value.
- **Library card catalog** (partial): divider tabs become drawer labels ("Aa to Be"), pocket cards become ruled 3×5 index cards on `--card` with a 3px `--vinyl` top rule and call numbers in Red Hat Mono. Missing: cards filed edge-on and flipped through.
- **iOS 6 skeuomorphism** (partial): allow a 3% noise on `--vinyl` and one white top-half gloss (`linear-gradient(rgb(255 255 255 / .22) 50%, transparent 50%)`) on the primary button, nothing else. Missing: per-app materials; the Don'ts still ban leather and metal.
