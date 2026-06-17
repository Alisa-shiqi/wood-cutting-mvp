# Demo Script

Goal: get a real order for validation, not to sell a finished platform.

## Opening

I made a small tool for board cutting layout. It is for assisted nesting, cut list review, labels, and export files. It does not directly control CNC machines.

Can I use one simple order to show the workflow?

## Demo Flow

1. Open `index.html`.
2. Explain stock panel settings:
   - length
   - width
   - material
   - thickness
   - kerf
   - margin
3. Explain part list:
   - name
   - length
   - width
   - quantity
   - material
   - thickness
   - edge banding
   - rotation
4. Click automatic nesting.
5. Show grouped nesting by material and thickness.
6. Show utilization and reusable offcuts.
7. Show cut list and review checklist.
8. Show labels.
9. Export:
   - CSV part list
   - CSV cut list
   - CSV labels
   - SVG layout
   - DXF layout
   - project JSON

## Questions To Ask During Demo

1. Is this layout readable for your cutting worker?
2. Is the cut list missing any field you need?
3. Are the labels useful after cutting?
4. Is the edge banding notation acceptable?
5. What output do you actually use today?
6. Would a local offline version be preferred?

## Close

Can you give me one real order? I will run it through this tool and compare:

- time spent
- sheet count
- utilization
- mistakes found
- worker feedback

If it helps, we can test a second order and discuss a small paid pilot.
