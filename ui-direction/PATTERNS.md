# Layout patterns

Structures, not styles. Each works inside any direction. The direction decides how a pattern looks (rules or blocks, dense or airy), and the pattern decides how the content is arranged. Pick the pattern from the task, not from habit. "Sidebar + table + right panel" is not the answer to every screen.

## Master / detail (adjacent inspector)
**When:** comparing many records and inspecting one without losing your place.
**Structure:** list or table on one side, the selected record's detail beside it. The selection stays visibly marked in the list. The detail has its own actions. On mobile, the detail becomes a separate view with an explicit back.
**Watch:** the detail panel should not repeat the row. Show what the row can't (breakdown, history, log).

## Table
**When:** the user compares values across records.
**Structure:** right-aligned tabular numerals, left-aligned text, sortable headers that say they're sortable. Keep the row count visible. Long values wrap in their cell or truncate with the full value on hover/focus.
**Watch:** a table of 8 things doesn't need pagination, and a table of 8,000 does.

## Board (grouped columns)
**When:** items move through states and the user acts on state (triage, review, pipelines).
**Structure:** one column per state with a count in each header. Say explicitly whether order within a column is meaningful.
**Watch:** a board with one item per column is a list pretending.

## Calendar / timeline
**When:** time is the primary axis (schedules, runs by night, releases).
**Structure:** time on one axis, with a visible "now". Items sit where and when they happen, with gaps shown as gaps.
**Watch:** a date column in a table is often enough.

## Matrix
**When:** two categorical dimensions matter at once (model × dataset, owner × status).
**Structure:** rows × columns with values or states in cells. Empty cells mean "no data", and that's different from zero, so style them differently.

## Stepper / one thing per page
**When:** a task the user does rarely, must get right, or does under stress (forms, setup, payments).
**Structure:** one question per step, a clear label, hint text, error messages attached to the field, and a check-answers summary at the end.

## Small multiples
**When:** comparing the shape of many series (the score trend for each model).
**Structure:** identical tiny charts with shared axes, in a grid, each labelled directly.

## Command palette
**When:** power users navigate or act faster by name than by pointing.
**Structure:** a keyboard shortcut opens an input, results group by type, and the selected result shows its shortcut. It's an addition to visible navigation, never a replacement for it.

## Long-form reading
**When:** the screen is mostly prose (docs, articles, reports).
**Structure:** measure of 60–75 characters, a real type scale, sidenotes or footnotes instead of tooltips, and a contents rail for long pages.
