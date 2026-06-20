# Changelog

## 2026-06-19 local execution plan and price library iteration

Workflow progress:

- Added `EXECUTION_TASKS_2026.md` with phased tasks for trial usability, revenue-critical features, and pilot acquisition.
- Added material price preset library to quote quick-calc.
- Added quote price scheme selector and one-click apply action.
- Added recommended price hint based on current default stock material/thickness.
- Quote presets now set main board, back board, edge banding, labor, waste, and profit parameters.
- Quick/design quote panels now hide price schemes, waste rate, and profit rate to keep beginner workflows simple.
- Professional quote preset apply action now sits in the quote panel title bar, and the preset dropdown is constrained to its container.
- Design template button text shortened to `Apply`.
- Cutting/design history names now use default material, default thickness, part count, and a non-repeating serial; simple histories show only the generated name.
- Cutting/design history names now follow the compact format like `18mm11件001` with a three-digit serial and no separators.
- Cutting/design history cards use a denser list layout so more records fit in the left history panel.
- The design quick action is now `快速使用书桌组合`; the professional demo action is now `快速载入完整案例`.
- Removed the visible design template selector/apply row from module design while keeping quick desk-combo generation available from the header action.
- Quick/design quote quick-calc is now a consumer-facing cost estimator instead of a professional cost/profit quote: it shows estimated total cost, board fee, edge/cutting fee, and a reference range.
- Quote input changes now calculate against the active workflow parts, so quick cutting no longer falls back to module-design parts.
- Quick/design cost estimator now lets users directly edit main-board sheets, back-board sheets, edge meters, and processing piece count, and shows the total-cost formula.
- Cutting/design/order history rows now highlight the currently loaded or selected history item.
- Simple cost-estimator cards now show equation-style amounts, with estimated total occupying a full row.
- Simple cost estimator now has a calculate button, removes the separate formula block, and moves formulas into card subtitles.
- Simple cost-estimator calculate action now sits in the panel title bar, and detail formulas use unit-price times quantity.
- Added cutting-mode state with quick/design fixed to push-table/manual cutting and professional mode exposing manual, beam saw, and CNC choices.
- Nesting results now record and display the selected cutting mode and current algorithm note.
- Bound the previous free-rectangle nesting algorithm to CNC mode and added a push-table/manual guillotine strip-cut algorithm for quick/design and manual professional mode.
- Quick/design nesting results no longer show the cutting-mode stat card.
- Added a cut-sequence dialog from the nesting drawing panel, reusing the enlarged layout dialog to show manual strip-cut order or CNC part order.
- Improved the cut-sequence dialog with workflow cards, legend, per-sheet step summary, clearer SVG labels, and a stage-based sequence table.
- Reduced cut-sequence SVG label density and added per-sheet part-code and offcut-code verification tables.
- Cut-sequence diagrams now draw reusable offcuts with orange dashed regions and offcut codes for easier verification.
- Refined manual cutting into horizontal strip ripping plus crosscut order, with cut numbers and strip-width-first sorting to reduce fence changes.
- Added weighted manual-cut optimization for sheet count, fence changes, yield, reusable offcuts, rotation, and cut length; sequence dialog now shows the weight analysis and caches sheet steps for faster rendering.
- Fixed rotate-permission parsing for string values such as `false` and `否`, and exposed manual-cut weights for professional mode tuning.
- Renamed user-facing part-list rotate permission label from `可旋转` to `旋转` across the table, CSV hint, CSV export, and printable part list.
- Upgraded guillotine nesting to run multiple ordering strategies and select the best result by the active mode weights; beam-saw mode now uses its own efficiency-focused preset.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- Local static HTTP smoke test confirms quote preset controls render.
- Static document checks confirm execution plan and README references.
- Mock DOM flow: render quote presets, apply plywood price scheme, update quote inputs, and refresh quote summary.
- Mock DOM flow: quick/design histories use material-thickness-count-serial naming, render only the generated name, and professional price preset still applies correctly.

## 2026-06-19 local mobile and growth iteration

Workflow progress:

- Added `GROWTH_PLAN_2026.md` with TO B / TO C acquisition, revenue strategy, packaging, and 30-day execution plan.
- Improved mobile layout to use full-page document scrolling instead of nested panel scrolling.
- Changed mobile forms to single-column layout for better select/input usability.
- Set mobile input/select font size to 16px to reduce browser zoom and tap issues.
- Changed mobile right workspace to block flow so modules render completely.
- Added horizontal scrolling only to data-heavy areas such as tables, quote sheets, production sheets, and layouts.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- Local static HTTP smoke test confirms the main page renders key controls.
- Static CSS checks confirm mobile full-page scroll, single-column forms, 16px controls, and local horizontal scrolling rules exist.
- In-app browser mobile verification was attempted but blocked by the Windows sandbox process launcher.

## 2026-06-19 local role-based workspace iteration

Workflow progress:

- Added role-based workspace modes: quick cutting, design generation, and professional mode.
- Added a header mode switch with persisted local preference.
- Added contextual mode guidance text below the header.
- Quick cutting hides the module designer for users who already have part dimensions.
- Design generation hides the default-stock order panel and highlights the module designer.
- Professional mode keeps the full workstation visible for experienced users.
- Quick-start design action now switches into design generation mode automatically.
- Moved the mode switch into the workflow strip near the numbered steps.
- Simplified quick/design modes by hiding order dashboards, history filters, customer quote document, and production work order.
- Quick/design history now shows recent orders with readonly status badges, while professional mode keeps status editing and filters.
- Quick cutting mode now renames the order/default-stock module to default stock, hides order/customer/status/due-date fields, hides save-as-preset, and keeps apply preset inline with the stock preset selector.
- Quote calculator labels now use shorter main board, back board, and edge banding wording.
- History title changes by mode: cutting history, design history, or order history.
- Stock preset apply action now sits on the same row as the stock preset selector on desktop.
- Moved mode switching back to the app header as the primary navigation.
- Hid sample/load/save/import/export utility actions from the main header to reduce beginner noise.
- The primary trial button now changes by mode: cutting sample, study-desk design, or complete professional sample.
- Moved the mode-linked primary sample action into the header after the mode switch and before print.
- Hid the standalone quote-generation action from the main workflow strip.
- Removed the workflow hint/step strip from the visible UI.
- Split local history storage by mode: cutting history, design history, and professional order history are now separate.
- Cutting/design histories use generated names instead of order status: cutting uses material/thickness, part count, and time; design uses product type, dimensions, and time.
- Simple histories no longer show quote/order status badges such as pending quote.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- Static HTML/CSS check confirms mode controls and mode selectors render.
- Mock DOM flow: initialize quick mode, switch design/pro modes, persist mode preference, and quick-start design flow switches to design mode.

## 2026-06-19 local business plan and production packet iteration

Workflow progress:

- Added `BUSINESS_PLAN_2026.md` with market reading, target users, product wedge, pricing hypothesis, GTM plan, risks, and 12-week roadmap.
- Added a production work order block after the customer quote sheet.
- Added production work order print and standalone HTML export actions.
- Added production KPIs, production checklist, board-group context, part operation routes, and reusable offcut warehouse rows.
- Embedded the production work order into the full exported nesting report.
- Added print-only mode for production work orders.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- Static HTML check confirms production work order controls render.
- Mock DOM flow: initialize app, run nesting, render production work order, and export `production-sheet.html`.

## 2026-06-19 local order workflow refinement

Workflow progress:

- Added search, status filtering, and due-attention filtering for local order history.
- Added inline status editing for saved orders, so quotes can move through quoted, nesting, production, and done without reloading the order.
- Added overdue, urgent, and due-soon visual states for saved orders.
- Updated the order dashboard to count both overdue and near-term orders as delivery attention items.
- Tightened panel title styling and history controls for a cleaner workspace layout.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- Local static HTTP smoke test confirms the order-history filters render.
- Mock DOM flow: save a quoted order, update it to production, filter by status, filter by due attention, and render the filtered history list.
- In-app browser verification was attempted but blocked by the Windows sandbox process launcher.

## 2026-06-18 local order operations iteration

Workflow progress:

- Added order status and due date fields to the order/default-stock panel.
- Added a compact order dashboard for saved orders, active follow-ups, near-term delivery, and quoted amount.
- Saved quote summary, status, and due date into local order-history snapshots.
- Enhanced order-history rows with customer, part count, quote amount, due date, status badge, and fixed Chinese action labels.
- Added status and due date into the customer quote sheet metadata.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- Local static HTTP smoke test confirms order status and dashboard markup render.
- Mock DOM flow: initialize app, save a quoted order with due date, persist quote summary, render order dashboard, and render quote metadata.

## 2026-06-18 local trial workflow strip

Workflow progress:

- Added a compact trial workflow strip under the header.
- Added quick-start action for the study-desk bookcase combo template.
- Added a quote-sheet focus action that ensures nesting is current before jumping to the customer quote sheet.
- Made quote-sheet focus generate the selected template automatically when the part list is empty.
- Hid the trial strip in print and adapted it for mobile flow.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- Local static HTTP smoke test confirms trial controls render.
- Mock DOM flow: quick-start combo, run nesting, and render quote sheet.

## 2026-06-18 local modular designer enhancement

Workflow progress:

- Added door mode options: no doors, lower doors, and full-height doors.
- Added configurable drawer count from 0 to 4 while keeping the old drawer checkbox convenient.
- Added design detail rows for structure, dimensions, and back panel breakdown.
- Added dimension marks to the 2D design preview.
- Updated generated order names to include product type and full body dimensions.
- Added design templates for study-desk combo, open bookcase, and drawer desk.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- Mock DOM flow: configure combo design with full-height doors and drawers, generate parts, run nesting, render design details, render preview dimension marks, and generate quote sheet.

## 2026-06-18 local customer quote sheet iteration

Workflow progress:

- Added a customer quote sheet block inside the nesting result panel.
- Added quote sheet preview with customer, order, product type, stock size, material groups, fee rows, total cost, target margin, suggested price, and commercial notes.
- Added print-only quote sheet mode.
- Added standalone HTML quote export.
- Embedded the full customer quote sheet into exported HTML reports.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- Mock DOM flow: generate combo design, run nesting, render quote sheet preview, export standalone quote HTML, and confirm the report contains the quote sheet.

## 2026-06-18 local sheet hover preview refinement

Workflow progress:

- Reduced sheet hover flicker by keeping the active preview until the pointer leaves the SVG or switches sheets.
- Added viewport-aware preview placement with left/right fallback and cursor-relative vertical positioning.
- Enlarged the 980px-2530px hover preview and positioned it above the pointer when space allows.
- In the 980px-2530px range, widened the preview again and anchored it above the active sheet card so it stays fixed while moving inside the same sheet.
- Widened the 980px-2530px preview again and capped its height by the space above the active sheet card to avoid covering the hovered sheet.
- Removed hover preview scrollbars by fitting preview width to the available vertical space and sheet SVG ratio.
- Added active sheet highlighting while hovering.
- Added a hover summary for part count, reusable offcuts, used area, and total sheet area.
- Switched preview visibility to opacity/visibility transitions instead of display toggling.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- Local static HTTP smoke test.
- Mock DOM flow: generate combo design, render nesting sheets, and confirm hover preview summary output.

## 2026-06-18 local quote iteration

Workflow progress:

- Added a quote calculator panel for main boards, back boards, edge banding, labor, waste, and target profit.
- Added live quote cards for estimated sheets, cost, suggested price, and edge length.
- Used actual nesting sheet counts when a fresh nesting result exists, and theoretical area estimates while designing.
- Split generated back panels into smaller pieces so wide bookcases fit standard stock panels more reliably.
- Added quote summary to exported HTML reports.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- Local static HTTP smoke test for the quote UI.
- Mock DOM flow: generate combo design, run nesting, confirm zero unplaced parts, calculate suggested price, and confirm report quote section.

## 2026-06-18 modular bookcase and desk designer

Workflow progress:

- Added a modular design panel for bookcases, desks, and bookcase-plus-desk combinations.
- Added configurable dimensions, material, thickness, back panel, doors, shelves, and drawer options.
- Added a live 2D design preview and generated-part summary.
- Added one-click generation from design parameters into the existing part list and nesting workflow.
- Ignored the local GitHub CLI helper directory with `.gitignore`.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- Mock DOM flow: initialize app, generate combo design parts, run nesting, and confirm preview output.

## 2026-06-18 responsive preview and print result serials

Workflow progress:

- Enlarged the default sheet hover preview again.
- Added a smaller hover preview size for the 980px-2530px layout range.
- Added print-only serial columns to the on-page nesting result part and offcut tables.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 larger preview and result serial labels

Workflow progress:

- Enlarged the sheet hover preview again.
- Confirmed the printed result part table has part serial directly after part code.
- Changed the printed result offcut table serial column to offcut serial directly after offcut code.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 full print categories and larger preview

Workflow progress:

- Enlarged the sheet hover preview again.
- Restored all board categories in the printed part-list category row while keeping it rendered only once.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 preview size and print category dedupe

Workflow progress:

- Enlarged the sheet hover preview again.
- Hid the screen-only part-list category row in print so the printable part list shows the board category only once.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 larger preview and offcut serial label

Workflow progress:

- Enlarged the sheet SVG hover preview again.
- Kept the printed part-list board category display to a single line.
- Renamed offcut label serial text from part serial to offcut serial while preserving the serial value.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 svg-only sheet preview and print serials

Workflow progress:

- Limited sheet hover preview to the SVG area only and disabled it on mobile.
- Enlarged the preview and positioned it beside the active sheet card, preferring the left side.
- Kept the printed part-list board category line to one group only.
- Kept detailed board group totals under the printed nesting-result section.
- Renamed the printed offcut-list serial column to part serial.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 print parameter placement and hover preview

Workflow progress:

- Moved the printed stock size, kerf, and margin parameter row from the part-list section to the nesting-result category section.
- Kept the printed part-list category row focused on board class and material/thickness only.
- Improved sheet hover preview so it follows the cursor and avoids viewport overflow.
- Hid hover previews from print output.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 sheet hover preview and print cleanup

Workflow progress:

- Added hover zoom preview for each sheet card in the nesting layout area.
- Made clicking an order history row load that order, matching the load button.
- Added a text-only print part list so printed output does not show inputs or selects.
- Removed fixed height/scroll constraints from the part list and nesting result panels.
- Removed the part-code line from printed part labels while keeping the part serial line.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 printable part list and material select

Workflow progress:

- Changed the default material field from free text to a preset-backed dropdown.
- Localized order history empty/load/delete text.
- Added a printable part-list section to exported reports.
- Allowed browser print to include the part-list panel while hiding part-list command buttons and delete column.
- Increased the layout zoom dialog height again.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 label serial and dirty status polish

Workflow progress:

- Renamed the dirty result action from auto-nest request to unfinished nesting.
- Increased the zoom dialog height again.
- Added part serial as the final line on part and offcut labels.
- Included offcut labels in the exported print report.
- Reverified printed result tables keep serial columns immediately after code columns and keep board group context before the part list.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 board group print detail upgrade

Workflow progress:

- Added a board category and material/thickness line before the part-list table.
- Moved the zoom dialog print and close actions to the right and allowed backdrop-click close.
- Increased the zoom dialog height again for more layout visibility.
- Put print-only part serial and offcut serial columns directly after their code columns.
- Added board category and stock parameter context before the printed part list and relaxed print height limits.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 zoom print and numbering cleanup

Workflow correction:

- Renamed the layout fullscreen action to zoom and changed the dialog title to zoom review.
- Added a print action inside the zoom review dialog that prints only the enlarged layout view.
- Fixed the result offcut table column mismatch and kept the screen list final column as note.
- Added extra nesting/offcut serial columns to the printed result lists while keeping the screen lists focused on working codes.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 code versus serial cleanup

Workflow correction:

- Restored the result part list first column to the correct layout part code.
- Kept P00001-style values as part/offcut serials rather than part codes.
- Changed the result offcut table final column from note to offcut serial.
- Removed the extra trailing blank cell from fullscreen offcut rows so the last column is note.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 result and offcut numbering cleanup

Workflow progress:

- Changed the result part list first column from layout code to part code.
- Changed the result offcut list first column to offcut code, followed by board class.
- Removed part serials from the on-screen result offcut list.
- Moved fullscreen offcut part serials directly after offcut code.
- Continued fullscreen offcut serials after all part serials using the same P00001-style sequence.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 category summary and serial codes

Workflow progress:

- Kept the part-list board category summary from wrapping by showing count only.
- Removed A/B/C badges from the result board category stat.
- Changed part serial codes to global `P00001`, `P00002` style values.
- Removed the utilization label text from sheet headers while keeping the percentage.
- Aligned result offcut table and fullscreen offcut table headers with the part-list table shape, leaving unavailable fields blank.
- Updated smoke tests for the new stat and part serial behavior.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-18 result tables and fullscreen print parity

Workflow progress:

- Kept board category badges on one line in the part summary.
- Removed the word waste from the reusable-offcut result metric detail.
- Added board class to the result table and kept part sequence codes generated but hidden there.
- Added a reusable-offcut result table with code, board class, material/thickness, size, top-left coordinate, and related part codes.
- Expanded fullscreen nesting review and aligned print report sheet sections with the same detailed view.
- Fullscreen sheet sections now show utilization and include part details plus offcut details.
- Added part sequence codes to labels and fullscreen detail tables.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 fullscreen nesting details

Workflow progress:

- Changed board category badges back to plain A/B/C labels.
- Reordered part summary so oversized risk appears before board category.
- Reordered result stats so reusable offcuts appear before board category.
- Added fullscreen nesting layout viewer.
- Fullscreen view shows each sheet with all contained parts and details: code, material/thickness, name, size, top-left coordinate, rotation, edge banding, and note.
- Added part code to printed/screen-generated part labels.
- Added smoke-test coverage for fullscreen part detail rendering.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 board category result action

Workflow polish:

- Renamed board grouping to board category and changed badges to `A class`, `B class`, etc.
- Renamed table board-group headers to the shorter board-class label.
- Made the part-list column wider and the result column slightly narrower.
- Changed the dirty result status into a primary action button that runs auto nesting.
- Removed the board-category column from the result table.
- Changed result row left-border color to use the board category color.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 board group and adaptive header

Workflow polish:

- Renamed material/thickness grouping to board grouping in the part summary and result stats.
- Moved result status beside the result title and added a dirty state that says `please auto nest` after edits.
- Removed the board-number column from the result table.
- Highlighted even-numbered sheet rows with a light gray background.
- Increased the part-list and result column share while keeping the drawing column smaller.
- Made the app header adapt when actions wrap, including mobile layouts.
- Reworked stock preset categories and dropdown labels to avoid repeated category/material text.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 dense three-column tuning

Layout polish:

- Reduced workspace gaps from 16px to 8px.
- Made part-list and result columns wider while reducing the drawing column.
- Deduplicated stock preset dropdown entries by size, thickness, and material.
- Removed the colored border from part-list table rows.
- Added sheet-number visual grouping in the nesting result table.
- Changed sheet drawing cards to use a full colored border instead of only a left border.
- Kept mobile layout as a single-column flowing view.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 material select and board group columns

Workflow layout progress:

- Changed part-list material editing from free text input to a material dropdown.
- Added a board-group column in the part list between quantity and material.
- Changed cut-list board numbers to plain `1`, `2`, `3` values.
- Added a board-group column to the nesting result table.
- Limited the result summary material/thickness group display to A/B/C badges.
- Made the three right-side modules fill the page-height workspace with internal scrolling.
- Forced the nesting drawing module to show one sheet per row.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 three-column right workspace

Layout progress:

- Changed the right workspace into three columns: part list, nesting result, and nesting drawing.
- Removed on-screen part/offcut label sections from the drawing area.
- Kept part labels and offcut labels available for print output.
- Converted the part summary area into compact wrapping chips for the narrower part-list column.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 group badges and natural modules

Layout and visual grouping progress:

- Removed fixed height rules from part list, nesting result, and nesting drawing modules.
- Switched material/thickness markers from small dots to prominent A/B/C color badges.
- Assigned group badge letters automatically from the current order groups.
- Reused the same badge color across list rows, stats, cut list, drawings, labels, and offcut labels.
- Tightened part summary spacing so metric labels and values sit closer together.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 material group color system

Layout and visual grouping progress:

- Renamed the part summary metric to material/thickness groups.
- Added stable color dots for every material/thickness group.
- Reused the same group color in part rows, result stats, cut list rows, sheet cards, part labels, and offcut labels.
- Tightened part summary cards so label and value sit close together.
- Let the right workspace scroll as one complete content area instead of clipping each module with fixed inner heights.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 two-column workspace shell

Layout correction:

- Rebuilt the page shell as a header plus two content columns.
- Wrapped order settings and order history inside a dedicated left workspace.
- Wrapped part list, nesting result, and nesting drawing inside a dedicated right workspace.
- Reduced right-side minimum row heights so all modules remain visible within the screen-height layout.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 fixed-height production screen

Workflow layout and output progress:

- Fixed the app to one screen height with independent scrolling in order history, part list, result, and layout areas.
- Reworked default stock presets with more realistic board materials and thicknesses.
- Compressed the order/default stock form for one-line desktop use where space allows.
- Reordered result stats as sheet count, placed parts, utilization, material/thickness groups, and reusable offcuts.
- Added utilization detail showing used area versus total sheet area.
- Moved waste area into the reusable-offcut stat and removed separate waste/offcut warning modules.
- Added per-sheet part code lists under each nesting drawing.
- Moved total part labels and offcut labels to the end of the nesting drawing area.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 single-workbench print cleanup

Workflow layout progress:

- Kept the app as one workbench: order history on the left and a free-flowing right workspace.
- Redesigned the order/default stock block into a denser production-order form.
- Moved `Auto nesting`, `Add part`, and `Clear` actions into the part-list module.
- Hid order history from printed pages.
- Forced printed nesting drawings to render one sheet per row.
- Updated the default demo order/customer names to look closer to a real trial order.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 ordered workbench layout

Workflow layout progress:

- Moved order history into a persistent left-side column.
- Reordered the right workspace as settings, part list, nesting result, and nesting drawing.
- Compressed order and default stock fields into a denser one-to-two-line grid on desktop widths.
- Kept the part list as the main full-width module within the right workspace.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 full part-list workspace

Workflow progress:

- Redesigned the page around a full-width part list so desktop users can see the complete sheet without a narrow side-panel table.
- Added live part-list summary cards for row count, total pieces, theoretical area, material groups, and oversized-part risk.
- Updated the responsive layout so order/history, part input, results, and sheet drawings have clearer production-workbench placement.
- Added smoke-test coverage for the new part-list summary.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 nesting and layout optimization

Usability and algorithm progress:

- Replaced the simple right/bottom split with max-rect style free-space splitting.
- Added deterministic free-rectangle pruning and ordering after every placement.
- Adjusted the desktop UI into a three-column workshop layout: settings/history, parts, and results/layout.
- Added smoke-test checks for placement bounds and overlap prevention.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17

V0.2 progress:

- Rewrote `index.html` and `app.js` in encoding-safe ASCII form.
- Added per-part material and thickness fields.
- Added grouped nesting by material and thickness.
- Added project JSON export/import.
- Added unplaced reason hints for oversized parts.
- Added grouped cut list output.
- Added a Node smoke test in `work/smoke-wood-mvp.js`.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 labels

V0.3 groundwork:

- Added printable part labels generated from nesting placements.
- Added label CSV export.
- Added smoke-test coverage for label rendering.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 local trial readiness

Trial-readiness groundwork:

- Added sample order selector with wardrobe, board-cutting-shop, and display-cabinet examples.
- Added `LOCAL_TRIAL_GUIDE.md` with offline use, backup, safety, and troubleshooting notes.
- Added smoke-test coverage for sample order selector rendering.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 report export

Delivery groundwork:

- Added printable HTML report export.
- Report includes order metadata, stats, cut list, labels, and SVG layouts.
- Added smoke-test coverage for report HTML, cut list, labels, and SVG layout.

Boundary:

- This is print-to-PDF capable HTML, not native PDF generation.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 trial metrics

Validation groundwork:

- Added `TRIAL_SCORECARD.md` for real-order comparison of time, sheet count, utilization, errors, and payment signal.
- Added `FEEDBACK_FORM.md` for quick worker/shop-owner review.
- Linked the new templates from `README.md` and `PILOT_KIT.md`.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 pilot materials

Go-to-market groundwork:

- Added `PILOT_KIT.md` with interview checklist, real-order collection form, trial success criteria, pricing hypotheses, and follow-up sequence.
- Added `DEMO_SCRIPT.md` for live workshop demos.
- Linked pilot materials from `README.md`.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 DXF

V0.3 groundwork:

- Added basic DXF export for sheet outlines, part rectangles, labels, and offcut outlines.
- Added `Download DXF` action near the layout export tools.
- Added smoke-test coverage for DXF `SECTION`, `LINE`, and `TEXT` entities.

Boundary:

- DXF is an intermediate review/import format, not CNC machine control code.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node --check work/smoke-wood-mvp.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 order workflow

V0.3 groundwork:

- Added stock panel presets with local custom preset saving.
- Added local order history save/load/delete.
- Added history and stock preset smoke-test coverage.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node work/smoke-wood-mvp.js`

## 2026-06-17 continued

V0.2 progress:

- Added edge banding field to part table, CSV import/export, and cut list export.
- Added reusable offcut detection from remaining free rectangles.
- Added reusable offcut section to on-screen/printed cut list.
- Added reusable offcuts to exported cut-list CSV.
- Improved print layout so cut lists and sheet cards expand cleanly.

Verification:

- `node --check outputs/wood-cutting-mvp/app.js`
- `node work/smoke-wood-mvp.js`
