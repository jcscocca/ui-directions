# UI Directions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 12-style UI direction library usable as a Claude Code skill plus a browsable gallery.

**Architecture:** Plain HTML/CSS specimens owned per style; Markdown briefs as the agent-facing contract; a Python stdlib build script that validates structure and generates `gallery/data.js`; a static gallery that works from `file://`.

**Tech Stack:** HTML, CSS, vanilla JS, Python 3 stdlib, Google Fonts, headless Edge for screenshots.

**Spec:** `docs/specs/2026-09-26-ui-directions-design.md`

## Global Constraints

- Every style's primary faces are Google Fonts; banned as primary: Inter, Roboto, Open Sans, Poppins, Montserrat.
- No emoji anywhere in specimens or gallery (icons are text, CSS, or inline SVG).
- Specimens are self-contained HTML + the style's `tokens.css` + optional `style.css`; no JS frameworks, no CDN scripts.
- `dashboard.html` targets 1440×900; `app.html` targets 390×844 with no horizontal overflow.
- Every specimen shows all content in `content/FIXTURE.md`.
- Nothing is written to `../ui-reference-library-curated/`.
- No git commits unless the user asks.

---

### Task 1: Foundation docs and tooling

**Files:**
- Create: `content/FIXTURE.md`, `ui-direction/ANTI-SLOP.md`, `docs/DESIGN-TEMPLATE.md`, `tools/build.py`, `tools/shoot.py`

**Interfaces:**
- Produces: `python tools/build.py` exits 0 when every `ui-direction/styles/<id>/` has `DESIGN.md` (10 sections with the exact headings from the template), `tokens.css`, `dashboard.html`, `app.html`, and no banned primary font; writes `gallery/data.js` defining `window.UI_DIRECTIONS = [{id, name, feelsLike, useFor[], fonts[], colors[], design}]`.
- Produces: `python tools/shoot.py [id ...]` writes `ui-direction/styles/<id>/preview.png` (1440×900) and `app.png` (390×844) using headless Edge.
- DESIGN.md front matter (parsed by build.py): `name`, `feels_like`, `use_for` (comma list from: tools, data-dense, consumer, reading, forms, marketing), `fonts` (comma list), `colors` (comma list of hex).

- [ ] Write FIXTURE.md with exact run rows and book data.
- [ ] Write ANTI-SLOP.md (tells + alternatives, craft rules, 10-item self-check).
- [ ] Write DESIGN-TEMPLATE.md with the 10 headings and guidance.
- [ ] Write build.py; run with no styles → exits 1 with "no styles found".
- [ ] Write shoot.py; smoke-test on a scratch HTML file.

### Task 2: Pilot style (technical-sheet)

**Files:** Create `ui-direction/styles/technical-sheet/{DESIGN.md,tokens.css,dashboard.html,app.html}`

- [ ] Author via one Opus subagent using the style brief (Task 3 brief format).
- [ ] `python tools/build.py` passes for this style.
- [ ] `python tools/shoot.py technical-sheet`; inspect both PNGs; send fixes back to the same agent until it reads as an engineering drawing, not a themed admin panel.
- [ ] Record any lessons into the shared brief used by Task 3.

### Task 3: Remaining 11 styles (parallel)

**Files:** `ui-direction/styles/<id>/` for swiss-poster, editorial, zine-collage, phosphor-terminal, hardware-product, raw-web, quiet-stationery, exhibition, toy-box, nocturne, plain-service.

- [ ] Dispatch 4 Opus subagents, ~3 styles each, grouped to keep neighbors apart in one agent's head less than across agents: (swiss-poster, quiet-stationery, phosphor-terminal), (editorial, toy-box, hardware-product), (zine-collage, plain-service, nocturne), (raw-web, exhibition).
- [ ] Each agent: read spec, FIXTURE, ANTI-SLOP, template, pilot style source; author files; run build.py and shoot.py for its styles; view its PNGs and iterate; report fonts, layout moves, and any fixture compromises.
- [ ] Review every PNG myself; send targeted fixes via SendMessage.

### Task 4: Skill and agent docs

**Files:** Create `ui-direction/SKILL.md`, `ui-direction/PATTERNS.md`, `AGENTS.md`, `README.md`

- [ ] SKILL.md front matter `name: ui-direction`, trigger-rich description; body = 5-step flow from the spec + style table generated from DESIGN.md front matter (build.py regenerates the table between `<!-- styles:start -->` / `<!-- styles:end -->` markers).
- [ ] PATTERNS.md: board, calendar, matrix, adjacent inspector, stepper, master/detail, small multiples, command palette — each with when-to-use and structural notes.
- [ ] README: what it is, install junction one-liner, gallery, adding a style.

### Task 5: Gallery

**Files:** Create `index.html`, `gallery/gallery.css`, `gallery/gallery.js`

- [ ] Grid of 12 live scaled iframes (dashboard + overlapping phone), name, feels-like, tags; tag filter.
- [ ] Detail view: full dashboard + phone, font/palette chips, rendered DESIGN.md (small Markdown renderer: headings, lists, code, tables, paragraphs), Copy brief with select-text fallback, Open specimen links.
- [ ] Verify from `file://` in the in-app browser: grid renders, filter works, copy works or falls back, no console errors.

### Task 6: Verification

- [ ] `python tools/build.py` exits 0; `python tools/shoot.py` for all styles.
- [ ] Contact sheet of 12 dashboards (Pillow) → fresh-context reviewer flags any pair that reads as the same design recolored; fix confirmed issues.
- [ ] Check each `app.png` for overflow and fixture completeness.
- [ ] Report exact checks run; give the user the one-line install command (do not install without asking).
