# Working in this repository

This repo is a UI direction library. `ui-direction/` is a Claude Code skill; `index.html` is the gallery.

- **Using a direction in another project:** follow `ui-direction/SKILL.md`.
- **Editing a direction:** read `docs/STYLE-BRIEFS.md`, `docs/DESIGN-TEMPLATE.md`, `content/FIXTURE.md` and `ui-direction/ANTI-SLOP.md` first. Specimens must show all of FIXTURE.md, use no emoji or images, and keep `app.html` free of horizontal overflow at 390px.
- **After any change to a style:** run `python tools/shoot.py <id>` and `python tools/build.py`, then look at the screenshots. `gallery/data.js` and the table in `SKILL.md` are generated; don't edit them by hand.
- Each direction owns its markup. Don't introduce a shared app shell or shared component CSS across styles; that is how every style turns into the same layout in different colors.
- Don't add a direction unless it's distinguishable from every existing one by layout, type and component construction, not palette.
