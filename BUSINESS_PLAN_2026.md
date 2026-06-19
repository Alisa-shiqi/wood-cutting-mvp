# Wood Cutting MVP Business Plan 2026

> Local working draft. Do not commit or publish before founder review.

## 1. Positioning

Build a lightweight browser-based workflow tool for small and mid-sized panel-furniture shops:

Customer order -> parametric cabinet/bookcase/desk design -> part list -> quote -> nesting -> printable production packet -> delivery follow-up.

The first paid product should not compete head-on with full enterprise CAD/CAM suites. It should win in the smaller, messier segment where owners still use Excel, WeChat, manual drawings, generic cut-list tools, and scattered local files.

## 2. Market Reading

### Demand Signals

- The furniture industry is under margin pressure. Recent reporting on Foshan, a major Chinese furniture hub, describes export pressure, weak domestic demand, and factories responding through automation, higher-end products, and direct-to-consumer channels.
- Leading customized-home companies have moved toward integrated design, quote, production, and full-home workflows. This validates the workflow direction, but their software usually serves their own dealer/factory ecosystems rather than independent small shops.
- Global cabinet software already prices around a clear willingness-to-pay band. Mozaik lists subscription plans at USD 125/month for non-CNC shops, USD 225/month for CNC shops, and USD 325/month for enterprise needs.
- Mature products such as Cabinet Vision bundle design, rendering, pricing, optimizer, reporting, CRM, bidding, and CNC/machining modules. This proves the workflow map, while also showing a large complexity gap that a lightweight tool can exploit.
- Free/generic cutting optimizers exist, including online panel optimizers and libraries. They validate demand for optimization, but they do not solve the whole local business workflow: customer quote, reusable order history, Chinese shop-floor documents, board categories, labels, delivery follow-up, and simple product templates.

### Sources Checked

- WSJ, Foshan furniture hub pressure and automation/direct-to-consumer response: https://www.wsj.com/world/asia/the-factory-town-known-as-chinas-furniture-capital-is-fighting-to-survive-0875bc99
- Mozaik product/pricing/workflow: https://www.mozaiksoftware.com/
- Cabinet Vision product modules: https://hexagon.com/products/product-groups/computer-aided-manufacturing-cad-cam-software/cabinet-vision
- Optimalon cutting optimization solutions: https://www.optimalon.com/
- CutList Optimizer online cutting tool: https://www.cutlistoptimizer.com/
- Fabrication-aware flat-pack furniture design research: https://arxiv.org/abs/2104.05052
- AI-driven customized manufacturing factory review: https://arxiv.org/abs/2108.03383
- Draw2Cut CNC usability research: https://arxiv.org/abs/2501.18951

## 3. Target Users

### Beachhead User

Small cabinet/bookcase/desk customization shops with 2-20 people:

- Owner quotes and manages customers.
- One experienced master handles dimensions and cutting logic.
- Workers need clear printouts, labels, and simple status tracking.
- CNC may or may not exist; many still need table-saw style cut plans.

### Secondary Users

- Board-cutting stores serving carpenters and decorators.
- Small studios doing custom bookcases, study desks, wardrobes, utility cabinets.
- Designers who sell simple custom furniture but outsource fabrication.

## 4. Core Pain Points

1. Quote uncertainty: owners quote by experience and later discover material/labor gaps.
2. Repeated manual work: same cabinet/bookcase styles are recalculated repeatedly.
3. Production handoff errors: customer, material, board thickness, edge banding, and part codes are scattered.
4. Waste visibility: shops know waste hurts margins but do not always quantify it at quote time.
5. Existing software barrier: full CAD/CAM tools are powerful but expensive, Windows-heavy, training-heavy, and too broad for small shops.
6. Mobile/shop-floor mismatch: workers need readable print/phone views, not a complex engineering workstation.

## 5. Product Wedge

The wedge is not "best nesting algorithm" alone. The wedge is:

Simple Chinese business workflow + realistic cabinet templates + printable production packet + quote confidence + enough nesting.

This is more defensible for a solo founder than trying to build a full CAD/CAM engine immediately.

## 6. MVP Offer

### Version 0.1: Free Trial Tool

- Browser-only, no install.
- Bookcase/desk/combo templates.
- Part list editing/import/export.
- Quote sheet.
- Nesting diagram and labels.
- Local order history.
- Printable production packet.

Goal: collect real orders and validate output usefulness.

### Version 0.2: Paid Local Pro

- Save more order history.
- More templates: wardrobe, base cabinet, wall cabinet, drawer cabinet, TV cabinet.
- Material/price library.
- Production order print/export.
- Batch order dashboard.
- Better offcut reuse and stock presets.
- Branding on quote sheet.

Pricing hypothesis:

- Starter: RMB 19-39/month, solo carpenter/light user.
- Pro: RMB 99-199/month, shop owner, unlimited local orders/templates.
- Factory Lite: RMB 299-599/month, multiple workers, batch jobs, labels, exports.
- Service revenue: RMB 499-1999 setup/training/template customization for first pilot shops.

## 7. Competitive Position

### Against Full CAD/CAM

We do not beat Cabinet Vision/Mozaik on depth. We beat them on:

- Chinese lightweight workflow.
- Lower learning cost.
- Mobile and print-first shop-floor output.
- Fast quote-to-production loop for common panel furniture.
- Local small-shop pricing.
- Founder-led customization speed.

### Against Generic Cut Optimizers

We beat them by owning the whole order:

- Customer/order/quote context.
- Board category and material/thickness grouping.
- Labels and production documents.
- Design templates that create parts automatically.
- Workflow status and delivery follow-up.

## 8. Go-To-Market

### First 30 Days

- Visit 10 local board-cutting shops/custom cabinet shops.
- Ask each shop for one real order and reproduce it in the tool.
- Compare their manual cut list vs tool output:
  - time saved
  - material waste
  - quoting confidence
  - printout readability
  - whether workers can follow it
- Record before/after photos and anonymized cases.

### First 90 Days

- Convert 3 pilot shops to paid setup/service.
- Build templates only from real repeated jobs.
- Publish short videos:
  - "3 minutes generate bookcase cut list"
  - "quote sheet to cutting labels"
  - "small shop order dashboard"
- Target WeChat groups, Douyin/Bilibili short demos, local board material merchants, and CNC machine sellers.

### Sales Script

"Give me one order you already know how to make. I will use the tool to produce a quote, part list, nesting diagram, labels, and production packet. If it saves you 30 minutes or prevents one wrong board, it is already worth the monthly fee."

## 9. 12-Week Roadmap

### Weeks 1-2: Pilot-Ready Reliability

- Production packet with checklist.
- Material price library.
- Quote sheet branding.
- Stronger print layout.
- Import/export backups.

### Weeks 3-4: Real Templates

- Wardrobe template.
- Base cabinet/wall cabinet templates.
- Drawer box options.
- Door/back-panel rules.
- Edge-band defaults by part type.

### Weeks 5-6: Shop Validation

- Run 10 real orders.
- Improve fields and printouts from feedback.
- Build pilot case studies.
- Add "manual adjustment notes" rather than trying to automate everything.

### Weeks 7-8: Paid Pro Shape

- Local license flag or hosted lightweight auth.
- Branded quote exports.
- Saved material/price presets.
- Order archive/export package.

### Weeks 9-12: Manufacturing Depth

- Better offcut inventory.
- Batch nesting across orders.
- Drill/hole placeholders.
- CNC export research: DXF first, machine-specific post-process later.

## 10. Metrics

Early validation metrics:

- 10 pilot shops interviewed.
- 30 real orders reproduced.
- 70% of pilots say printout can be used by workers after minor edits.
- At least 3 shops willing to pay setup/training.
- Average quote-to-cutlist time reduced by 50%.
- One documented case of material/waste savings or error prevention.

## 11. Risk Register

- Algorithm expectations: users may expect industrial-grade nesting. Mitigation: position as assistant, not certified CNC post-processor.
- Domain complexity: cabinet hardware, holes, hinges, connectors, and machine post-processing can explode scope. Mitigation: templates and print-first workflow first.
- Trust: shops will not trust software until it matches their habits. Mitigation: real order reproduction and editable output.
- Distribution: solo founder cannot run enterprise sales. Mitigation: local shops, short videos, setup service, channel partners.

## 12. Recommended Next Iterations

1. Split the product experience into role-based modes before adding more features:
   - Quick cutting: for users who already have part dimensions.
   - Design generation: for sales/new users who need templates to generate parts.
   - Professional mode: full workstation for experienced users.
2. Add material price presets and per-material quote config.
3. Add wardrobe/base cabinet/wall cabinet templates.
4. Add order archive export package.
5. Add pilot demo dataset and one-click reset.
6. Improve mobile print and shop-floor readability.
7. Start real pilot interview script and scorecard updates.
