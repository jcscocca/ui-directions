# Anti-slop

Default AI-built UI is recognizable in a second. None of the traits below is wrong in itself. They are wrong when they show up because nobody decided anything. If the project's chosen direction (its `DESIGN.md`) explicitly asks for one of them, follow the direction. Otherwise, treat every item here as off by default.

## The tells, and what to do instead

### Type
- **Inter / system-ui / Roboto / Poppins / Montserrat everywhere.** Pick faces that fit the subject and set a real scale (e.g., 12/14/16/20/28/40, not 14/16/18/20). One family used with conviction beats two used timidly.
- **One accented word in a headline** (the italic word, the gradient word, the colored word). Let the whole headline carry the weight, or change size and weight instead.
- **Tracked-out ALL-CAPS eyebrow above every heading.** Use it only where a label actually disambiguates. Most headings don't need a label above them.
- **Monospace for every small data label.** Use mono for things that are code or need column alignment (IDs, logs, hashes). Use tabular numerals, not mono, for numbers.
- **Gray-500 body text on white.** Body text should be close to full-contrast ink. Reserve muted color for genuinely secondary text.

### Color and surface
- **Purple/indigo/blue gradients, gradient text, gradient buttons.** Use flat color with a reason: status, selection, one brand accent.
- **Cream `#F4F1EA` + high-contrast serif + terracotta `#D97757`.** This is the current "tasteful AI" default. If you want warmth, choose a specific paper tone and a specific ink that belong to the subject.
- **Near-black `#0B0B0B`/`#111` with one acid-green or vermilion accent.** If the product needs dark, give the dark a hue (ink blue, warm brown-black, green-black) and derive the accent from the subject.
- **Glassmorphism, neumorphism, glows, blurred blobs.** Depth should explain stacking (a menu over content), not decorate.
- **The same soft `rgba(0,0,0,.1)` shadow under everything.** Most containers need no shadow. Separate with space, rules or background changes.

### Layout and components
- **The SaaS card kit.** Everything chopped into identical `rounded-xl` cards with one radius, one padding and one shadow. Vary containment by hierarchy. Use rows, rules, columns, bands and open space. A list of runs is a table, not twelve cards.
- **Hero + three feature cards + CTA band**, even inside apps. Apps open on the work, not on a pitch.
- **Stat cards with an icon in a tinted circle and a green "+12%" pill.** Show numbers where they are used (in the table header, beside the chart). If a KPI row is truly needed, make its typography do the work.
- **An icon beside every label.** Icons earn their place where they are faster to recognize than words (status, file type, playback). Otherwise, words.
- **Centered everything.** Tools align left to a grid. Centering is for single, short, ceremonial things.
- **01 / 02 / 03 markers on things that aren't a sequence.** Number only steps, rankings or real ordinals.
- **Identical spacing everywhere.** Group with proximity: tight inside a group, generous between groups.
- **Emoji as icons or entities.** Never. Use text, drawn glyphs, inline SVG, or the entity's real image.

### Copy and chrome
- **"Welcome back, Alex!"**, "Supercharge your workflow", "Unlock insights". Say what the screen is and what the user can do.
- **Meta joined with middle dots (`A · B · C`) and `→` appended to every link.** Use the separator the content needs (a table column, a comma, a line break). A link's text says where it goes, without an arrow.
- **`Label — fragment` with a spaced em dash** as a decorative pattern. Write a sentence or a label, not a slogan.
- **Placeholder content** (Lorem ipsum, John Doe, Acme Inc, 1,234 users). Use realistic, specific data that includes long values and awkward cases.

## Craft rules (keep these in every direction)

1. **Numbers align.** Use `font-variant-numeric: tabular-nums` in tables and anywhere numbers are compared. Right-align numeric columns.
2. **States are real.** Loading, empty, error, *unknown* (`—`), zero (`0`) and not-applicable are all different, and the UI must show which one it is.
3. **Errors say what happened and what to do.** Name the object and the cause. No apologies, no "Something went wrong".
4. **Long content survives.** Long names wrap or truncate with the full value available. Layouts don't break at 390px.
5. **Focus is visible.** Every interactive element has a keyboard focus style that fits the direction and is obvious.
6. **Hierarchy comes from type and space before color.** Squint. The most important thing should still be the most important thing.
7. **Disabled means visibly disabled, with a reason when it isn't obvious.**
8. **Motion answers an action.** No fade-up-on-scroll for every section. One deliberate moment at most.
9. **Color carries meaning consistently.** If red means failed, nothing decorative is red.
10. **Buttons say what happens.** "Rerun evaluation", not "Submit". The toast after it uses the same verb.

## Self-check (run after building, fix before reporting)

1. Squint at a screenshot. Could this be any other product's UI with the logo swapped? If yes, what single element makes it this product's? Strengthen it.
2. List the fonts actually rendered. Are any on the banned-default list without the direction asking for them?
3. Count the distinct container treatments. If everything is the same rounded card, restructure.
4. Search the CSS for `gradient`, `backdrop-filter`, `box-shadow`. Justify each one or remove it.
5. Search the markup for emoji and for icons sitting next to text labels. Remove the ones that don't earn their place.
6. Are numeric columns tabular and right-aligned?
7. Is there at least one real non-happy state (empty, loading, error, unknown) and is it written plainly?
8. Tab through the screen. Is the focus always visible?
9. Resize to 390px wide. Anything overflow horizontally or become unreadable?
10. Read every string aloud. Delete any marketing voice, filler label or eyebrow that says nothing.
