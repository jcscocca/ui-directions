# UI Directions — design spec

**Date:** 2026-09-26
**Replaces:** `ui-reference-library-curated/` (Edition 03/04), which stays untouched beside this folder as legacy.

## Problem

AI-built UIs converge on one look (Inter, purple gradient, rounded cards, hero + three features, shadcn defaults). The previous library tried to fix this but drifted: every reference rendered the same resource-table app, fonts were banned, and most effort went into self-audit machinery (rubrics, neutralized views, blind pairs, hash manifests). The result looked like 100 recolors of one admin panel.

## Goal

A small library of genuinely different visual directions that (1) an agent loads automatically as a Claude Code skill when building UI, and (2) the user browses in a gallery to pick one.

**Success:** opening the gallery, the 12 dashboards are unmistakably different at thumbnail size, including layout, type and component construction, not only color. An agent given one DESIGN.md produces a screen recognizably in that direction.

**Non-goals:** a component framework; formal originality scoring; review/rubric/audit tooling; offline fonts.

## Layout

```
ui-directions/
  ui-direction/                 ← the skill (junction into ~/.claude/skills/ui-direction)
    SKILL.md
    ANTI-SLOP.md                tells of default AI UI + fixes + self-check list
    PATTERNS.md                 layouts any style can use (board, calendar, matrix, inspector, stepper…)
    styles/<id>/
      DESIGN.md                 the agent brief (template below)
      tokens.css                CSS custom properties + Google Fonts @import
      dashboard.html            tool screen, 1440×900 target
      app.html                  mobile consumer screen, 390×844 target
      preview.png               dashboard capture (headless Edge/Chrome)
  content/FIXTURE.md            the shared content both screens must show
  index.html + gallery/         gallery (see below)
  tools/build.py                DESIGN.md + tokens → gallery/data.js; runs checks
  tools/shoot.py                headless Edge/Chrome screenshots (no Playwright dependency)
  README.md · AGENTS.md
```

Plain HTML/CSS; each style owns its markup. No shared app shell, no JS framework, no build step needed to view. Specimens are static (hover/focus states in CSS; JS only where a signature detail needs it).

## Styles (approved roster)

| id | Name | Core moves |
|---|---|---|
| technical-sheet | Technical sheet | hairline grid, corner title block, IBM Plex Mono + Barlow Condensed, cyan on paper, dimension annotations |
| swiss-poster | Swiss poster | huge Archivo headlines, full-bleed flat bands, index numerals, strict grid, no shadows |
| editorial | Editorial | Newsreader + small caps, rules not cards, margin notes, narrow measure |
| zine-collage | Zine collage | rotated clippings, tape, riso two-ink, Instrument Serif + Space Mono |
| phosphor-terminal | Phosphor terminal | JetBrains Mono, amber on near-black, ASCII rules, text sparklines, key hints |
| hardware-product | Hardware product | warm grey, one orange, tiny caps labels, knob/toggle controls, visible module grid |
| raw-web | Raw web | Times/Georgia, default-blue underlined links, visible structure, near-zero CSS |
| quiet-stationery | Quiet stationery | wide whitespace, muted natural palette, soft serif, dot-grid paper, vertical text accents |
| exhibition | Exhibition catalog | unboxed, oversized numerals as exhibits, small catalog labels, asymmetric placement |
| toy-box | Toy box | Bricolage Grotesque, flat saturated blocks, sticker shapes, chunky borders, no gradients |
| nocturne | Nocturne | deep ink, gold hairlines, display serif, letterspaced caps, restrained motion |
| plain-service | Plain service | large labels, one question per step, black/yellow focus |

Exact font choices may be refined per style during build, but must be Google Fonts and must not be Inter, Roboto, Open Sans, Poppins or Montserrat as the primary face.

## Shared content (`content/FIXTURE.md`)

**Dashboard — "Evals": an ML evaluation run monitor.** 8 runs with model, dataset, score, Δ vs baseline, status, duration, triggered-by. Must include: a running run with progress, a failed run with an error, a metric that is `—` (not computed) vs `0.00`, a very long dataset name, a regression (negative Δ). Selected-run detail: per-metric breakdown, score-over-time chart (last 12 runs), log tail, actions: Rerun, Compare, Cancel. Plus navigation, search, and one empty/loading hint somewhere.

**App — "Shelf": a personal reading tracker (mobile).** Current book with progress and cover (CSS-drawn, not an image or emoji), reading streak, today's goal, up-next list (3), one saved highlight, bottom/primary navigation. Must include a long title and an unfinished-goal state.

Every style shows exactly this content; it decides its own layout, hierarchy, component construction and what to emphasize.

## DESIGN.md template (agent brief)

1. **Essence**: one paragraph plus a one-line "feels like".
2. **Use for / avoid for**
3. **Type**: Google Fonts families + weights, roles (display/body/mono/label), scale in px, tracking/case rules; install lines (`<link>`, `@fontsource/*`, `next/font`).
4. **Color**: tokens with roles (bg, surface, ink, muted, accent, danger, ok…), contrast notes.
5. **Tailwind v4 `@theme` block** mirroring tokens.
6. **Layout moves**: numbered, concrete (grid, where nav goes, how detail is shown).
7. **Signature details**: 3–5 moves that make it recognizably this style.
8. **Components**: buttons, inputs, tables/lists, nav, status, charts, empty/loading/error: how each is built in this style.
9. **Density & motion**
10. **Don'ts**: drift rules specific to this style (what turns it back into generic UI).

`build.py` fails if a section is missing, a specimen/tokens file is missing, or a primary font is on the banned list.

## ANTI-SLOP.md

Two parts. **Tells** (each with the concrete alternative): Inter/system-ui everywhere; purple/blue gradients; `rounded-2xl` + soft shadow on every container; hero + 3 feature cards; stat cards with an icon in a tinted circle; emoji as icons or entities; lucide icons next to every label; gray-500 body text on white; centered everything; glassmorphism/neumorphism; identical padding everywhere; "Welcome back, User!"; placeholder lorem/stock copy. **Craft rules** (from the old Precision workspace): aligned numerals (tabular-nums), real states (loading/empty/error/unknown vs zero), keyboard focus, long-content handling, hierarchy through type before color. Ends with a 10-item self-check the skill runs after building.

## Skill flow (`SKILL.md`)

Triggers when an agent builds or restyles any UI (page, dashboard, component set, app screen). Steps:

1. **Existing direction?** If the project has a `DESIGN.md`/design system, follow it; only apply ANTI-SLOP.md.
2. **Choose:** read the style table in SKILL.md (one line each + use-for), propose the 2–3 best fits with a reason each, and ask the user. If no one can be asked, pick one and say so.
3. **Persist:** copy the chosen `styles/<id>/DESIGN.md` into the project as `DESIGN.md` (or append to existing agent guidance) so later sessions stay consistent.
4. **Build:** read the style's `tokens.css` and one specimen's source for construction details; adapt to the project's stack (Tailwind block provided).
5. **Self-check:** run the ANTI-SLOP checklist and the style's Don'ts; fix before reporting.

`AGENTS.md` at repo root gives Codex the same pointer.

## Gallery (`index.html`)

Opens from `file://`, no server. The gallery itself uses a restrained, non-generic look (not one of the 12, so it doesn't bias). Grid of 12 entries, each a live scaled iframe of `dashboard.html` with the `app.html` phone overlapping at the corner, name, "feels like", and use-for tags (tools / consumer / reading / forms / data-dense). Filter by tag. Detail view: full-size dashboard and phone side by side, font and palette chips, the DESIGN.md rendered, **Copy brief** (clipboard, with select-text fallback) and **Open specimen**. Brief text comes from `gallery/data.js`, generated by `build.py`, because `file://` can't fetch sibling files.

## Verification

- `python tools/build.py`: structure and section checks, banned-font check, regenerates data.js.
- Visual review: every specimen screenshotted at target size (headless Edge, or the in-app browser) and inspected. Check for no horizontal overflow at 390px on `app.html`, all fixture content present, fonts actually load.
- Final pass: a fresh-context reviewer looks at the 12 dashboard thumbnails and flags any two that read as the same design recolored.

## Build approach

Styles are independent → authored in parallel by subagents (Opus), a few styles each, from this spec + FIXTURE.md + the DESIGN.md template, with ANTI-SLOP.md written first. I write the skill, anti-slop doc, fixture, template, gallery and tools myself and review every style's screenshots before accepting it.

## Addendum: phase 1 expansion (approved 2026-09-26)

- **Third screen:** `collection.html`, the Wildbook creature index + detail (FIXTURE Screen 3). It tests entity images, empty slots, silhouettes for seen-not-caught, a broken-image placeholder, and rarity as a system. Shared original art lives in `ui-direction/art/` and is the only imagery allowed. `build.py` requires the screen and rejects images from anywhere else.
- **Five new directions:** collector-binder, spatial-canvas, schematic-transit, windowed-desktop, dense-portal. Each owns a construction method none of the original 12 used: pocket grid with empty slots, 2D placement with connectors, diagram as layout, overlap as hierarchy, and packed modules.
- **Ceiling policy:** a new direction must own a distinct construction method and survive a fresh-context thumbnail review against every existing direction. Aesthetics that are palette/material/ornament only are covered as variants of their nearest direction (phase 3 index), not as new entries.
- **Next:** phase 2 builds the borderline candidates (game menu, horizontal panorama, spreadsheet, constructivist diagonal, official dossier, comic panels) and cuts any that read as a recolour. Phase 3 adds the aesthetic index and per-direction variant notes.

## Addendum: phases 2 and 3 (2026-09-26)

- **Phase 3 (aesthetic index):** `ui-direction/AESTHETICS.md` maps 95 named aesthetics to the direction that carries them, each with a `variant` or `partial` fit and a concrete recipe. Every DESIGN.md gained an eleventh section, **Variants** (dark or light, density, named aesthetics). `build.py` validates the table and the 11 headings. The skill looks up named aesthetics before choosing, and the gallery search matches aesthetic names.
- **Phase 2 (borderline candidates):** game-menu, horizontal-panorama, spreadsheet, constructivist, official-dossier and comic-panels were built, each with a pass condition against named neighbours. A fresh-context gate review kept all six. None read as a recolour, and none made an existing pair redundant. The densest neighbourhood is now technical-sheet / official-dossier / spreadsheet / dense-portal / raw-web. Each keeps a distinct hierarchy carrier.
- **Total:** 23 directions × 3 screens. The ceiling policy above still applies. Further additions need a construction method none of the 23 use.
