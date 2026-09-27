---
name: ui-direction
description: Give a UI a deliberate visual direction instead of the generic AI look. Use whenever building, redesigning or restyling any user interface, including a web page, landing page, dashboard, admin/internal tool, app screen, component set or frontend prototype, and when the user says the UI looks generic, boring, samey or "AI-made". Picks one of a set of concrete directions (typography, palette, layout moves, component construction), persists it to the project as DESIGN.md, and runs an anti-slop self-check before finishing.
---

# UI direction

Default AI-built interfaces all look alike: Inter, a purple gradient, rounded cards with soft shadows, a hero and three feature cards. This skill replaces that default with a chosen direction and holds the build to it.

Files next to this one:
- `ANTI-SLOP.md`: the tells of default UI, craft rules, and the self-check. Always applies.
- `AESTHETICS.md`: a lookup from named aesthetics (vaporwave, Art Deco, Teletext, Y2K…) to the direction that carries each one and its variant recipe.
- `PATTERNS.md`: layout patterns (board, calendar, matrix, inspector, stepper…) that combine with any direction.
- `styles/<id>/DESIGN.md`: the brief for each direction. `tokens.css` holds its variables and fonts. `dashboard.html`, `app.html` and `collection.html` are working specimens (a tool screen, a mobile consumer screen, and an entity collection with images, empty slots and a detail view) to read for construction details. `preview.png`, `app.png` and `collection.png` are screenshots of them.

## Flow

### 1. Check for an existing direction
Look for a `DESIGN.md`, design-system package, theme file or brand guide in the project. If one exists, follow it, skip to step 4, and apply only `ANTI-SLOP.md` on top. Don't impose a new direction on a product that already has one unless the user asks for a redesign.

### 2. Choose a direction
Read the table below and pick the 2–3 directions that best fit **this product's subject, audience and main task**. Proposing a direction because it's "safe" defeats the purpose. For each, give one sentence on why it fits and one thing it would change about the UI. If `preview.png` files are available, show them. Ask the user to choose.

If nobody can be asked (headless/autonomous run), pick the best fit, say which and why in your output, and continue.

**If the user names an aesthetic** ("make it vaporwave", "something Art Deco", "like a Bloomberg terminal"), look it up in `AESTHETICS.md` first. Use the mapped direction, apply the matching entry under that direction's **Variants → Named aesthetics**, and keep the direction's layout moves and signature details. If the fit is `partial`, tell the user what the aesthetic has that the direction doesn't, and don't fake it. Variants are recipes that haven't been shown on the specimens, so screenshot the result and check it.

<!-- styles:start -->
| id | Direction | Feels like | Use for |
|---|---|---|---|
| `collector-binder` | Collector's binder | A trading-card binder you keep your whole collection in | consumer, tools |
| `comic-panels` | Comic panels | A comic page where the data tells a story panel by panel | consumer, marketing |
| `constructivist` | Constructivist | A Rodchenko or Lissitzky poster that runs your data along one diagonal | marketing, consumer |
| `dense-portal` | Dense portal | A Japanese web portal where every square inch is a labelled module | data-dense, tools, consumer |
| `editorial` | Editorial | A long-read magazine feature about your data | reading, consumer, marketing |
| `exhibition` | Exhibition catalog | Walking through a museum room where each number is an exhibit | marketing, consumer, reading |
| `game-menu` | Game menu | The pause menu of a 16-bit RPG, run as a working tool | consumer, tools |
| `hardware-product` | Hardware product | The front panel of a well-designed piece of hardware | tools, consumer |
| `horizontal-panorama` | Horizontal panorama | A Windows Phone panorama, where the next section's title is already sliding in from the right | consumer, marketing |
| `nocturne` | Nocturne | A concert programme or a late-night hotel bar menu | marketing, consumer, reading |
| `official-dossier` | Official dossier | A printed government form in a manila case file, typed in and rubber-stamped | forms, tools, data-dense |
| `phosphor-terminal` | Phosphor terminal | A well-made TUI, like htop, k9s or lazygit | tools, data-dense |
| `plain-service` | Plain service | A public-service task page that tells you what to do next | forms, tools |
| `quiet-stationery` | Quiet stationery | A Japanese notebook, calm, precise and unhurried | consumer, reading, tools |
| `raw-web` | Raw web | An honest 1998 HTML page that happens to be very useful | tools, reading, data-dense |
| `schematic-transit` | Schematic transit | A transit map where your data is the network | tools, consumer, data-dense |
| `spatial-canvas` | Spatial canvas | A multiplayer whiteboard where position means something | tools, consumer |
| `spreadsheet` | Spreadsheet | The whole app is a workbook, and every element sits on the cell grid | tools, data-dense |
| `swiss-poster` | Swiss poster | An International Typographic Style poster that runs your ops | tools, marketing, data-dense |
| `technical-sheet` | Technical sheet | An engineering drawing you can click | tools, data-dense |
| `toy-box` | Toy box | A well-made toy that happens to be a real tool | consumer, tools |
| `windowed-desktop` | Windowed desktop | A classic Platinum-era desktop where the front window is your selection | tools, consumer |
| `zine-collage` | Zine collage | A riso-printed zine someone pasted together at 2 a.m. | consumer, marketing |
<!-- styles:end -->

Directions are starting points, not costumes. Adapt vocabulary to the product (a technical-sheet banking app has statements, not "parts lists"), but keep the direction's layout moves and signature details, since they are what makes it not generic.

### 3. Persist it
Copy the chosen `styles/<id>/DESIGN.md` into the project root as `DESIGN.md`. If the project already has agent guidance (`CLAUDE.md`, `AGENTS.md`), add one line there: `UI follows DESIGN.md (<direction name>); read it before any UI change.` This keeps later sessions and other agents consistent.

### 4. Build
- Read the direction's `DESIGN.md` fully, then its `tokens.css`. Read the relevant specimen's source (`dashboard.html` for tools, `app.html` for mobile/consumer, `collection.html` for anything with entity images, galleries, inventories or catalogs) for how components are actually constructed.
- Adapt to the project's stack. Use the Tailwind `@theme` block from DESIGN.md for Tailwind projects, and the CSS variables from `tokens.css` otherwise. Install fonts the way DESIGN.md says (`next/font`, `@fontsource`, or a `<link>`).
- If the project uses a component library (shadcn/ui, MUI, Chakra…), restyle its components to the direction: override radius, shadow, typography, borders and density. Don't leave library defaults showing through.
- Use real, specific content with awkward cases (long names, unknown vs zero, errors), not lorem ipsum.

### 5. Self-check before reporting
Screenshot the result if you can. Run the self-check at the end of `ANTI-SLOP.md` and the direction's **Don'ts**. Fix what fails. In your report, name the direction and the signature details you applied.
