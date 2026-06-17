# Product Research And Validation Plan

## Goal

Move the Wood Cutting Nesting Assistant from a static MVP to a trial-ready and eventually paid tool.

The first validation target is simple:

Can a small woodworking shop use a part list to generate a readable layout and cut list, reducing manual calculation and cutting mistakes?

## Target Users

Prioritize users who have real pain but do not already run a heavy CAD/CAM system.

1. Small panel furniture workshops
2. Board cutting shops
3. Woodworking studios and renovation teams
4. Small custom-furniture teams using Excel/CAD/manual workflows

## Interview Questions

Keep each interview around 20-30 minutes. The main goal is to collect real orders.

1. How do you make cutting lists today: handwritten, Excel, CAD, software, or master-worker experience?
2. How many orders and parts do you process per day or week?
3. What stock panel sizes, materials, and thicknesses are most common?
4. What kerf value do you normally use?
5. Which parts cannot rotate because of grain direction?
6. How do you record edge banding today?
7. Where do mistakes happen most often: size, quantity, missing parts, direction, edge banding, or labels?
8. Which output is easiest for workers: paper, Excel, PDF, CAD, or labels?
9. If a tool saves 3%-5% material or reduces rework, how would you prefer to pay?
10. Would you accept a browser tool, or do you prefer a local offline tool?

## Real Samples To Collect

For each pilot user, collect:

- Original order or drawing
- Existing cutting list
- Stock panel specification
- Current layout/cutting result
- Worker feedback after review

Do not promise direct machine cutting in early trials. Position this as an assisted nesting and review tool.

## Competitor Signals

Lightweight nesting tools often cover:

- Stock panels
- Kerf/cut thickness
- Orientation or rotation constraints
- Edge banding
- Utilization statistics
- PDF/image export

Professional systems continue into CAD/CAM, drilling, labels, and machine post-processing. This MVP avoids that broad competition and focuses on small-shop usability.

## Validation Metrics

Continue only if the MVP can prove these:

1. A user can enter or import one real order within 10 minutes.
2. The layout can be understood by a cutting worker.
3. The cut list can be printed and reviewed.
4. The tool reduces manual nesting time.
5. At least one user is willing to pay or continue a paid pilot.

## Next Priorities

P0:

- Part numbering
- Cut list export
- Review checklist
- Material/thickness grouping
- Project JSON import/export

P1:

- Edge banding fields: done in MVP data flow
- Stock panel library
- Reusable offcut hints: started
- PDF export
- Better print layout

P2:

- Order history
- Customer management
- Label printing: started
- Multiple plan comparison

P3:

- DXF export: started as basic rectangle layout
- DXF import
- Machine format adapters
- AI-assisted drawing interpretation
