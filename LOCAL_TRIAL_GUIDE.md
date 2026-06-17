# Local Trial Guide

This guide is for running the MVP in a small shop without installing development tools.

## What To Send

Send the whole `wood-cutting-mvp` folder or the `wood-cutting-mvp.zip` file.

The shop only needs:

- `index.html`
- `app.js`
- `styles.css`

The markdown files are for trial guidance and feedback.

## How To Open

1. Unzip `wood-cutting-mvp.zip`.
2. Open the folder.
3. Double-click `index.html`.
4. Use Chrome or Edge if possible.

No npm, database, server, or internet connection is required.

## Recommended Trial Workflow

1. Open `index.html`.
2. Choose a sample order and click load sample.
3. Click automatic nesting.
4. Review layout, cut list, labels, offcuts, and stats.
5. Enter or import one real order.
6. Export:
   - project JSON for backup
   - cut list CSV
   - labels CSV
   - SVG layout
   - DXF layout
   - HTML report
7. Open the HTML report and print to PDF if needed.

## Backup Rules

Browser local storage is convenient but not a reliable long-term archive.

For every real order:

1. Click export project.
2. Save the JSON file with the order name and date.
3. Export the HTML report.
4. Keep the cut list CSV and labels CSV if the order goes to production.

Suggested folder structure:

```text
orders/
  2026-06-17-wardrobe-a/
    project.json
    nesting-report.html
    cut-list.csv
    part-labels.csv
    nesting-layout.dxf
```

## Trial Safety Notes

- Always let the cutting worker review dimensions before production.
- The DXF file is a layout/reference file, not CNC machine control code.
- Confirm kerf, margin, material, thickness, rotation, and edge banding before cutting.
- Keep the original customer order or drawing for comparison.

## What To Record

Use:

- `TRIAL_SCORECARD.md`
- `FEEDBACK_FORM.md`

Record:

- manual time vs tool time
- manual sheet count vs tool sheet count
- utilization
- mistakes found
- worker readability score
- payment or pilot interest

## Common Troubleshooting

If the file does not open:

- Use Chrome or Edge.
- Make sure the files were fully unzipped.
- Keep `index.html`, `app.js`, and `styles.css` in the same folder.

If exported files do not download:

- Check browser download permissions.
- Try Chrome or Edge.
- Avoid opening the file from a restricted network drive.

If Chinese text looks wrong:

- Use Chrome or Edge.
- Do not edit source files with old ANSI editors.
