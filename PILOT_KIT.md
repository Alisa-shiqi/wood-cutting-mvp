# Pilot Kit

This document is for first customer validation. Use it with small woodworking shops, board cutting shops, and small custom-furniture teams.

## Positioning

One sentence:

Wood Cutting Nesting Assistant turns a part list into a readable cutting layout, cut list, labels, offcut hints, and export files.

Boundary:

This is an assisted nesting and review tool. It does not directly control a CNC machine.

## 10-Minute Demo Script

1. Open `index.html`.
2. Click "Load Demo" if demo data is not already visible.
3. Show stock panel settings: length, width, material, thickness, kerf, margin.
4. Show part list: name, length, width, quantity, material, thickness, edge banding, rotation.
5. Click automatic nesting.
6. Show result stats: sheet count, group count, placed parts, utilization, offcut count.
7. Show cutting layout.
8. Show cut list and review checklist.
9. Show labels.
10. Export CSV, SVG, DXF, and project JSON.

Close with:

Can we try one real order from your workshop and compare it with your current method?

## Field Interview Checklist

Record answers during the visit.

Shop name:

Contact:

Role:

Current workflow:

- Handwritten
- Excel
- CAD
- Existing software
- Master worker experience

Daily/weekly order volume:

Common stock panels:

Common materials:

Common thicknesses:

Kerf:

Edge banding workflow:

Rotation/grain rules:

Most painful mistakes:

- Wrong size
- Wrong quantity
- Missing part
- Wrong direction
- Wrong edge banding
- Label confusion
- Offcut waste

Preferred output:

- Paper
- Excel/CSV
- PDF
- DXF/CAD
- Labels

Deployment preference:

- Browser only
- Local offline
- Private deployment
- Cloud account

## Real Order Collection Form

For each pilot order, collect:

Order name:

Customer/product type:

Stock panel size:

Material:

Thickness:

Kerf:

Margin:

Part list source:

- Excel
- CAD
- Paper
- Photo
- Verbal

Existing cutting list available:

Existing layout available:

Actual result comparison:

- Manual nesting time:
- Tool nesting time:
- Manual sheet count:
- Tool sheet count:
- Manual utilization:
- Tool utilization:
- Mistakes found:
- Worker feedback:

## Trial Success Criteria

Count the trial as promising if at least three are true:

1. The user can enter/import an order within 10 minutes.
2. The worker understands the cutting layout without explanation.
3. The cut list can be printed and used for review.
4. The tool saves noticeable manual layout time.
5. The result uses the same or fewer sheets than the current method.
6. The user asks to test another real order.
7. The user discusses price, deployment, or customization.

## Pricing Hypotheses

Do not lead with price. Ask about value first.

Option A: Local annual license

- Starter: 999-1999 CNY/year
- Pro: 2999-5999 CNY/year

Option B: One-time local tool

- 3999-9999 CNY
- Optional yearly support: 1000-3000 CNY/year

Option C: Pilot customization

- 3000-10000 CNY for a 2-4 week paid pilot
- Includes format cleanup, label template, and workflow adjustment

Option D: Service-first validation

- 20-100 CNY per order for assisted nesting
- Useful before the software is polished enough for self-service

## Follow-Up Sequence

Day 0:

- Demo with sample data.
- Collect one real order.

Day 1-2:

- Run the order through the MVP.
- Export layout, cut list, labels, and DXF.
- Ask the worker to review.
- Fill `TRIAL_SCORECARD.md`.

Day 3-5:

- Record mistakes, missing fields, unclear labels, and output preferences.
- Ask the worker or owner to fill `FEEDBACK_FORM.md`.

Week 2:

- Test a second order.
- Ask if they would pay for local use or a paid pilot.

## Pilot Notes Template

Date:

Shop:

Order tested:

What worked:

What failed:

Must-have before payment:

Nice-to-have:

Price reaction:

Next action:

## Related Templates

- `DEMO_SCRIPT.md`
- `TRIAL_SCORECARD.md`
- `FEEDBACK_FORM.md`
