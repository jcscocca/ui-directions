# Shared content

Every style shows exactly this content on both screens. The style decides layout, hierarchy, emphasis and component construction; it does not add, drop or invent data. Copy is plain and specific — no "Welcome back!", no marketing lines.

---

## Screen 1 — `dashboard.html`: **Evals** (1440 × 900)

An ML evaluation run monitor. The viewer is checking last night's runs and deciding whether the regression on `summarize-v3` is real.

### Navigation

Product name: **Evals**. Workspace: **atlas-research**. Sections: **Runs** (current), Datasets, Models, Baselines, Settings. A search field: placeholder `Search runs, models, datasets`. A keyboard hint for search: `/`.

### Runs (8)

| ID | Model | Dataset | Score | Δ vs baseline | Status | Duration | Triggered by | Started |
|---|---|---|---|---|---|---|---|---|
| r-2291 | summarize-v3 | news-digest-2k | 0.812 | −0.041 | Passed | 14m 02s | schedule | 02:00 |
| r-2290 | summarize-v3 | multilingual-legal-contracts-longform-eval-2026-q3 | 0.774 | +0.006 | Passed | 41m 55s | M. Okafor | 01:12 |
| r-2289 | router-small | intent-routing-v7 | 0.931 | +0.012 | Passed | 3m 48s | schedule | 01:00 |
| r-2288 | router-small | adversarial-prompts | — | — | Running (62%) | 9m 10s so far | CI #4812 | 00:51 |
| r-2287 | extract-json | invoices-ocr | 0.000 | −0.884 | Failed | 0m 41s | CI #4809 | 00:40 |
| r-2286 | extract-json | receipts-small | 0.902 | +0.000 | Passed | 2m 15s | L. Brandt | 23:58 |
| r-2285 | chat-core-8b | helpfulness-pairwise | 0.668 | +0.021 | Passed | 1h 06m | schedule | 23:00 |
| r-2284 | chat-core-8b | safety-refusals | — | — | Queued | — | schedule | — |

Notes that must be visible somewhere:
- `—` means **not computed**, which is different from `0.000`. Show that distinction (e.g., a legend or tooltip text).
- r-2287 error message: `KeyError: 'line_items' — 212 of 212 samples failed schema validation`.
- r-2291 is a **regression** (Δ −0.041, beyond the ±0.02 noise band). r-2287 is failed, not a regression.
- Summary counts (format is the style's choice): 8 runs, 5 passed, 1 failed, 1 running, 1 queued.

### Selected run: r-2291 (detail)

- Title: **summarize-v3 on news-digest-2k**. Baseline: `summarize-v2 @ r-2203 (0.853)`.
- Metrics breakdown:

| Metric | Score | Baseline | Δ |
|---|---|---|---|
| ROUGE-L | 0.412 | 0.447 | −0.035 |
| Faithfulness | 0.861 | 0.902 | −0.041 |
| Coverage | 0.790 | 0.801 | −0.011 |
| Length ratio | 1.18 | 1.02 | +0.16 |

- Score over the last 12 runs of summarize-v3 on news-digest-2k (oldest → newest): `0.846, 0.851, 0.849, 0.855, 0.853, 0.850, 0.857, 0.852, 0.848, 0.851, 0.853, 0.812`. Show a chart (inline SVG or CSS) with the noise band 0.833–0.873.
- Log tail (monospace, last 5 lines):
  ```
  02:13:48  eval  1996/2000 samples scored
  02:13:55  eval  2000/2000 samples scored
  02:13:55  warn  length_ratio above 1.15 on 38% of samples
  02:14:01  agg   faithfulness=0.861 (baseline 0.902)
  02:14:02  done  run r-2291 finished in 14m 02s
  ```
- Actions: **Rerun**, **Compare with baseline**, **Cancel** (Cancel is disabled here because the run is finished; show that it's disabled).

### State hint

Somewhere on the screen, show one non-happy state: e.g., the Datasets count loading, or an empty "Pinned comparisons — none yet" area. Keep it small and real.

---

## Screen 2 — `app.html`: **Shelf** (390 × 844, mobile)

A personal reading tracker. The viewer opens it in the evening.

- App name: **Shelf**. Date: **Thu 24 Sep**.
- **Currently reading:** *The Left Hand of Darkness* — Ursula K. Le Guin. Page **184 of 304** (61%). Last read: yesterday.
  - Cover must be drawn with CSS/SVG (color block + type), never an image or emoji.
- **Streak:** 11 days. **Today's goal:** 20 pages — **8 read**, 12 to go (unfinished; show it honestly, not as a success).
- **Up next (3):**
  1. *Piranesi* — Susanna Clarke · 272 pp
  2. *The Remains of the Day* — Kazuo Ishiguro · 245 pp
  3. *A Very Long Book Title That Will Absolutely Need To Wrap Onto Several Lines On A Phone* — J. Placeholder-Smythe · 1,104 pp
- **Saved highlight** (from the current book): “Light is the left hand of darkness and darkness the right hand of light.” — p. 222
- Primary action: **Log pages**.
- Navigation (bottom bar or style-appropriate equivalent): **Today** (current), Library, Highlights, Stats.

---

## Screen 3 — `collection.html`: **Wildbook** (1440 × 900)

A creature-collection tracker (the kind of companion app people build for monster-collecting games). The viewer is checking what's left to catch in one region and looking at one creature in detail.

### Chrome

App name: **Wildbook**. Region: **Saltmarsh Reach**. Sections: **Index** (current), Team, Map, Items. Search placeholder: `Search by name, number or type`.

Completion: **10 of 16 caught** (62%), 3 seen but not caught, 3 never seen.

Filters: Status (All / Caught / Seen / Unknown), Type (Tide, Moss, Ember, Gale, Stone), Rarity (Common, Uncommon, Rare, Mythic). Sort: by number (current), name, rarity.

### The index (16 slots)

| No. | Name | Type | Rarity | Status | Caught |
|---|---|---|---|---|---|
| 001 | Reedling | Moss | Common | Caught | 14 |
| 002 | Bogwhistle | Moss / Gale | Uncommon | Caught | 3 |
| 003 | Cindermoth | Ember | Common | Caught | 9 |
| 004 | Pebblepup | Stone | Common | Caught | 22 |
| 005 | Saltcrab | Tide / Stone | Common | Caught | 6 |
| 006 | Glimmerfry | Tide | Uncommon | Caught | 5 |
| 007 | Lanternfin | Tide / Ember | Rare | Caught | 3 |
| 008 | — | — | — | Unknown | — |
| 009 | Mistheron | Gale | Uncommon | Seen | 0 |
| 010 | Greater Spotted Marsh Wobbler | Moss / Tide | Uncommon | Caught | 1 |
| 011 | Emberkit | Ember | Common | Caught | 7 |
| 012 | Stormgull | Gale / Tide | Rare | Seen | 0 |
| 013 | — | — | — | Unknown | — |
| 014 | Cragback | Stone | Rare | Caught | 2 |
| 015 | Duskmote | Gale / Ember | Mythic | Seen | 0 |
| 016 | — | — | — | Unknown | — |

The three states must look clearly different:
- **Caught**: full artwork, name, number, type, rarity.
- **Seen**: the artwork as a **silhouette** (e.g. CSS `filter: brightness(0)` plus an opacity or tint that fits the direction), name and number, "seen, not caught".
- **Unknown**: an **empty slot** with only the number. No name, no art, no type.

**Image failure (required):** #011 Emberkit's artwork fails to load. Point its `<img>` at `../../art/emberkit.svg`, which does not exist. Show the direction's neutral placeholder: a plain box or neutral silhouette with the name. **Never an emoji.** Handle it the way a real app would: `onerror` swaps in the placeholder, or the placeholder sits behind the image.

Rarity is a system, not decoration. Each direction decides how rarity reads (a mark, a border, a label, a foil…), but Mythic must be unmistakable and Common must be quiet.

### Selected creature: #007 Lanternfin (detail)

- Number and name: **#007 Lanternfin**. Types: Tide / Ember. Rarity: **Rare**.
- Artwork, large.
- Description: *Hangs motionless in tidal caves at night, glowing to lure glimmerfry close. The light fades if it's kept out of salt water for more than a day.*
- Stats (bars or equivalent, max 100): HP 62, Attack 48, Defense 55, Speed 81.
- Habitat: Tidal caves, night only. First caught: 12 Aug. Caught: 3.
- Evolution line: #006 Glimmerfry → **#007 Lanternfin** → #008 (unknown: show as an empty slot, not a name).
- Drops: Lantern scale (common), Deep pearl (rare, 4% chance).
- Actions: **Show on map**, **Mark as favourite**, **Add to team**. Add to team is **disabled**: "Team is full (6 of 6). Remove one to add Lanternfin."

### Artwork

Use the shared illustrations in `ui-direction/art/<slug>.svg` via `<img>` (relative path from a style folder: `../../art/<slug>.svg`). Slugs: `reedling`, `bogwhistle`, `cindermoth`, `pebblepup`, `saltcrab`, `glimmerfry`, `lanternfin`, `mistheron`, `marsh-wobbler`, `stormgull`, `cragback`, `duskmote`. They are flat, transparent-background SVGs. Frame, mat, tint-behind, or crop them in the direction's own way, but don't redraw them. These images are the only images allowed in any specimen.
