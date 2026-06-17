# Wood Cutting Nesting Assistant MVP

This is a pure frontend MVP for validating the workflow:

Part list input/import -> automatic nesting -> cutting layout -> cut list export.

The UI renders Chinese labels in the browser, while source files are kept encoding-safe for Windows tooling.

## Current Features

- Order and default stock panel settings
- Part list create/edit/delete
- Full-width part list workspace with live list summary
- Left-side order history with right-side ordered production workspace
- Part-list-centered actions for nesting, adding parts, and clearing
- Print layout hides order history and prints one sheet layout per row
- Fixed-height production screen with independent scrolling work areas
- Header plus left/right workspace shell for complete on-screen display
- Material/thickness group colors shared across list, result, layout, and labels
- Prominent A/B/C material-thickness group badges
- Three-column right workspace with print-only labels
- Material dropdown editing and board-group columns
- Dense three-column tuning with mobile flowing fallback
- Board-group naming, edit-dirty status, and categorized stock presets
- Board category badges and result dirty-action button
- Fullscreen nesting layout viewer with per-sheet part details
- Global P00001-style part serials and aligned offcut tables
- Result/offcut numbering cleanup with continued fullscreen offcut serials
- Per-sheet part code lists plus final part/offcut label sections
- Per-part material and thickness
- CSV import/export
- Material + thickness grouped nesting
- Edge banding field
- Kerf, margin, and rotation settings
- Max-rect style free-space splitting for denser nesting
- SVG cutting layout
- Numbered cut list
- Printable part labels
- Part label CSV export
- Review checklist
- Reusable offcut hints
- Utilization and waste statistics
- Local browser save
- Project JSON export/import
- Stock panel presets
- Local order history
- Basic DXF layout export
- Printable HTML report export
- Sample order library
- Workshop workspace layout with full-width part list
- Print layout

## How To Use

Open `index.html` directly in a browser.

No build step, server, database, or npm install is required.

## Pilot Materials

- `DEMO_SCRIPT.md`: short live-demo script for workshop visits.
- `PILOT_KIT.md`: interview checklist, real-order collection form, trial success criteria, and pricing hypotheses.
- `TRIAL_SCORECARD.md`: quantitative comparison template for real-order trials.
- `FEEDBACK_FORM.md`: short feedback form for workers or shop owners.
- `LOCAL_TRIAL_GUIDE.md`: local offline trial, backup, and troubleshooting guide.

## Product Boundary

This version is an assisted nesting and review tool. It does not directly generate CNC machine control code.

The DXF export is a simple intermediate layout file containing sheet outlines, part rectangles, text labels, and offcut outlines. It is meant for review or downstream CAD/CAM import tests.

The report export generates a self-contained HTML file. Open it in a browser and use print-to-PDF when a PDF is needed.

Future iterations can add native PDF export, stronger DXF export, offcut management, edge banding refinements, labels, and machine-format adapters.
