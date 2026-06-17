const STORAGE_KEY = "wood-cutting-mvp-state-v2";
const STOCK_PRESETS_KEY = "wood-cutting-mvp-stock-presets-v1";
const ORDER_HISTORY_KEY = "wood-cutting-mvp-order-history-v1";

const defaultStockPresets = [
  { id: "std-particle-2440-1220-18", category: "\u5228\u82b1/\u9897\u7c92\u677f", name: "\u6807\u51c6\u67dc\u4f53", length: 2440, width: 1220, thickness: 18, material: "\u9897\u7c92\u677f" },
  { id: "std-particle-2800-1220-18", category: "\u5228\u82b1/\u9897\u7c92\u677f", name: "\u52a0\u957f\u67dc\u4f53", length: 2800, width: 1220, thickness: 18, material: "\u9897\u7c92\u677f" },
  { id: "std-mdf-2440-1220-18", category: "\u5bc6\u5ea6\u7ea4\u7ef4\u677f", name: "\u95e8\u677f/\u9020\u578b", length: 2440, width: 1220, thickness: 18, material: "\u5bc6\u5ea6\u677f" },
  { id: "std-plywood-2440-1220-18", category: "\u591a\u5c42/\u80f6\u5408\u677f", name: "\u627f\u91cd\u7ed3\u6784", length: 2440, width: 1220, thickness: 18, material: "\u591a\u5c42\u677f" },
  { id: "std-blockboard-2440-1220-18", category: "\u7ec6\u6728\u5de5\u677f", name: "\u57fa\u5c42/\u6728\u82af", length: 2440, width: 1220, thickness: 18, material: "\u7ec6\u6728\u5de5\u677f" },
  { id: "std-osb-2440-1220-18", category: "OSB/\u5b9a\u5411\u5206\u7247\u677f", name: "\u57fa\u5c42/\u7ed3\u6784", length: 2440, width: 1220, thickness: 18, material: "OSB" },
  { id: "std-eco-2800-1220-18", category: "\u751f\u6001/\u514d\u6f06\u677f", name: "\u67dc\u4f53/\u9970\u9762", length: 2800, width: 1220, thickness: 18, material: "\u751f\u6001\u677f" },
  { id: "std-back-2440-1220-9", category: "\u80cc\u677f/\u8584\u677f", name: "\u539a\u80cc\u677f", length: 2440, width: 1220, thickness: 9, material: "\u80cc\u677f" },
  { id: "std-back-2440-1220-5", category: "\u80cc\u677f/\u8584\u677f", name: "\u8584\u80cc\u677f", length: 2440, width: 1220, thickness: 5, material: "\u80cc\u677f" },
];

const text = {
  unnamedOrder: "\u672a\u547d\u540d\u8ba2\u5355",
  unnamedPart: "\u672a\u547d\u540d\u677f\u4ef6",
  defaultMaterial: "\u9897\u7c92\u677f",
  demoOrder: "\u8863\u67dc\u5f00\u6599-20260617-001",
  demoCustomer: "\u4e0a\u6d77\u6837\u677f\u95f4\u5ba2\u6237",
  pending: "\u5f85\u6392\u6599",
  complete: "\u6392\u6599\u5b8c\u6210",
  unplaced: "\u6709\u672a\u6392\u5165\u677f\u4ef6",
  sheet: "\u7b2c",
  sheetSuffix: "\u5f20\u677f",
  yes: "\u662f",
  no: "\u5426",
};

const wardrobeParts = [
  part("\u5de6\u4fa7\u677f", 2200, 580, 1, "\u9897\u7c92\u677f", 18, false, "F,B", "\u7eb9\u7406\u7ad6\u5411"),
  part("\u53f3\u4fa7\u677f", 2200, 580, 1, "\u9897\u7c92\u677f", 18, false, "F,B", "\u7eb9\u7406\u7ad6\u5411"),
  part("\u9876\u677f", 900, 580, 1, "\u9897\u7c92\u677f", 18, true, "F", ""),
  part("\u5e95\u677f", 900, 580, 1, "\u9897\u7c92\u677f", 18, true, "F", ""),
  part("\u5c42\u677f", 860, 560, 4, "\u9897\u7c92\u677f", 18, true, "F", ""),
  part("\u80cc\u677f", 2200, 900, 1, "\u80cc\u677f", 9, false, "", "\u8584\u677f\u793a\u4f8b"),
  part("\u8e22\u811a\u7ebf", 900, 90, 2, "\u9897\u7c92\u677f", 18, true, "F", ""),
];

const cuttingShopParts = [
  part("\u684c\u9762", 1200, 600, 2, "\u591a\u5c42\u677f", 18, true, "F,B,L,R", "\u5ba2\u6237\u81ea\u63d0\u5c3a\u5bf8"),
  part("\u67b6\u677f", 800, 300, 6, "\u591a\u5c42\u677f", 18, true, "F", ""),
  part("\u4fa7\u6761", 1200, 80, 4, "\u591a\u5c42\u677f", 18, true, "", ""),
  part("\u80cc\u677f", 1000, 500, 2, "\u80cc\u677f", 9, true, "", ""),
  part("\u5c0f\u9694\u677f", 450, 280, 8, "\u591a\u5c42\u677f", 18, true, "F", ""),
];

const displayCabinetParts = [
  part("\u5c55\u67dc\u5de6\u4fa7", 1800, 450, 1, "\u751f\u6001\u677f", 18, false, "F,B", "\u7eb9\u7406\u7ad6\u5411"),
  part("\u5c55\u67dc\u53f3\u4fa7", 1800, 450, 1, "\u751f\u6001\u677f", 18, false, "F,B", "\u7eb9\u7406\u7ad6\u5411"),
  part("\u5c55\u67dc\u9876\u677f", 1200, 450, 1, "\u751f\u6001\u677f", 18, true, "F", ""),
  part("\u5c55\u67dc\u5e95\u677f", 1200, 450, 1, "\u751f\u6001\u677f", 18, true, "F", ""),
  part("\u5c42\u677f", 1160, 420, 5, "\u751f\u6001\u677f", 18, true, "F", ""),
  part("\u95e8\u677f", 1780, 390, 2, "\u5438\u5851\u95e8\u677f", 18, false, "F,B,L,R", "\u5355\u72ec\u6750\u8d28"),
  part("\u80cc\u677f", 1800, 1180, 1, "\u80cc\u677f", 9, false, "", ""),
];

const sampleOrders = [
  {
    id: "wardrobe",
    name: "Wardrobe sample",
    orderName: text.demoOrder,
    customerName: text.demoCustomer,
    sheetLength: 2440,
    sheetWidth: 1220,
    sheetThickness: 18,
    material: text.defaultMaterial,
    kerf: 4,
    margin: 5,
    parts: wardrobeParts,
  },
  {
    id: "cutting-shop",
    name: "Board cutting shop sample",
    orderName: "\u677f\u6750\u52a0\u5de5\u5e97\u8bd5\u6392\u5355",
    customerName: "\u95e8\u5e97\u5ba2\u6237",
    sheetLength: 2440,
    sheetWidth: 1220,
    sheetThickness: 18,
    material: "\u591a\u5c42\u677f",
    kerf: 4,
    margin: 5,
    parts: cuttingShopParts,
  },
  {
    id: "display-cabinet",
    name: "Display cabinet multi-material sample",
    orderName: "\u5c55\u67dc\u591a\u6750\u8d28\u8bd5\u6392\u5355",
    customerName: "\u5c55\u67dc\u5ba2\u6237",
    sheetLength: 2440,
    sheetWidth: 1220,
    sheetThickness: 18,
    material: "\u751f\u6001\u677f",
    kerf: 4,
    margin: 5,
    parts: displayCabinetParts,
  },
];

let state = {
  orderName: text.demoOrder,
  customerName: text.demoCustomer,
  sheetLength: 2440,
  sheetWidth: 1220,
  sheetThickness: 18,
  material: text.defaultMaterial,
  kerf: 4,
  margin: 5,
  parts: structuredClone(wardrobeParts),
  result: null,
  resultDirty: false,
};

const els = {
  orderName: document.getElementById("orderName"),
  customerName: document.getElementById("customerName"),
  sheetLength: document.getElementById("sheetLength"),
  sheetWidth: document.getElementById("sheetWidth"),
  sheetThickness: document.getElementById("sheetThickness"),
  material: document.getElementById("material"),
  kerf: document.getElementById("kerf"),
  margin: document.getElementById("margin"),
  sampleOrderSelect: document.getElementById("sampleOrderSelect"),
  stockPresetSelect: document.getElementById("stockPresetSelect"),
  historyList: document.getElementById("historyList"),
  partsSummary: document.getElementById("partsSummary"),
  partsGroupLine: document.getElementById("partsGroupLine"),
  printPartsList: document.getElementById("printPartsList"),
  partsBody: document.getElementById("partsBody"),
  stats: document.getElementById("stats"),
  warnings: document.getElementById("warnings"),
  cutList: document.getElementById("cutList"),
  labelsView: document.getElementById("labelsView"),
  sheetsView: document.getElementById("sheetsView"),
  resultStatus: document.getElementById("resultStatus"),
  csvDialog: document.getElementById("csvDialog"),
  csvText: document.getElementById("csvText"),
  projectDialog: document.getElementById("projectDialog"),
  projectText: document.getElementById("projectText"),
  layoutDialog: document.getElementById("layoutDialog"),
  layoutDialogContent: document.getElementById("layoutDialogContent"),
};

function part(name, length, width, quantity, material, thickness, allowRotate, edgeBanding, note) {
  return { name, length, width, quantity, material, thickness, allowRotate, edgeBanding, note };
}

function readSettings() {
  state.orderName = els.orderName.value.trim() || text.unnamedOrder;
  state.customerName = els.customerName.value.trim();
  state.sheetLength = toNumber(els.sheetLength.value, 2440);
  state.sheetWidth = toNumber(els.sheetWidth.value, 1220);
  state.sheetThickness = toNumber(els.sheetThickness.value, 18);
  state.material = els.material.value.trim() || text.defaultMaterial;
  state.kerf = toNumber(els.kerf.value, 0);
  state.margin = toNumber(els.margin.value, 0);
}

function writeSettings() {
  els.orderName.value = state.orderName;
  els.customerName.value = state.customerName;
  els.sheetLength.value = state.sheetLength;
  els.sheetWidth.value = state.sheetWidth;
  els.sheetThickness.value = state.sheetThickness;
  els.material.innerHTML = materialOptions(state.material);
  els.material.value = state.material;
  els.kerf.value = state.kerf;
  els.margin.value = state.margin;
}

function toNumber(value, fallback = 0) {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
}

function normalizePart(input) {
  return {
    name: String(input.name || text.unnamedPart).trim(),
    length: Math.max(1, Math.round(toNumber(input.length, 1))),
    width: Math.max(1, Math.round(toNumber(input.width, 1))),
    quantity: Math.max(1, Math.round(toNumber(input.quantity, 1))),
    material: String(input.material || state.material || text.defaultMaterial).trim(),
    thickness: Math.max(1, Math.round(toNumber(input.thickness, state.sheetThickness || 18))),
    allowRotate: Boolean(input.allowRotate),
    edgeBanding: normalizeEdgeBanding(input.edgeBanding || input.edge || ""),
    note: String(input.note || "").trim(),
  };
}

function normalizeEdgeBanding(value) {
  return String(value || "")
    .replaceAll("\uff0c", ",")
    .split(/[,\s/]+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      const upper = item.toUpperCase();
      const map = {
        "\u524d": "F",
        "\u540e": "B",
        "\u5de6": "L",
        "\u53f3": "R",
        "\u4e0a": "F",
        "\u4e0b": "B",
      };
      return map[item] || upper;
    })
    .filter((item, index, list) => ["F", "B", "L", "R"].includes(item) && list.indexOf(item) === index)
    .join(",");
}

function renderParts() {
  els.partsBody.innerHTML = "";
  state.parts.forEach((item, index) => {
    const row = document.createElement("tr");
    row.className = "part-row";
    row.style.setProperty("--group-color", groupColor(item.material, item.thickness));
    row.innerHTML = `
      <td><input class="part-name" data-field="name" data-index="${index}" value="${escapeAttr(item.name)}" /></td>
      <td><input type="number" min="1" data-field="length" data-index="${index}" value="${item.length}" /></td>
      <td><input type="number" min="1" data-field="width" data-index="${index}" value="${item.width}" /></td>
      <td><input type="number" min="1" data-field="quantity" data-index="${index}" value="${item.quantity}" /></td>
      <td class="group-cell">${groupBadge(item.material, item.thickness)}</td>
      <td><select class="part-material" data-field="material" data-index="${index}">${materialOptions(item.material)}</select></td>
      <td><input type="number" min="1" data-field="thickness" data-index="${index}" value="${item.thickness}" /></td>
      <td><input class="part-edge" data-field="edgeBanding" data-index="${index}" value="${escapeAttr(item.edgeBanding)}" placeholder="F,B,L,R" /></td>
      <td><input class="check-cell" type="checkbox" data-field="allowRotate" data-index="${index}" ${item.allowRotate ? "checked" : ""} /></td>
      <td><input class="part-note" data-field="note" data-index="${index}" value="${escapeAttr(item.note)}" /></td>
      <td><button class="icon-btn" type="button" data-delete="${index}" title="delete">x</button></td>
    `;
    els.partsBody.appendChild(row);
  });
  renderPartsSummary();
  renderPrintPartsList();
}

function materialOptions(currentMaterial) {
  const current = String(currentMaterial || state.material || text.defaultMaterial).trim();
  const materials = new Set(defaultStockPresets.map((item) => item.material));
  materials.add(state.material || text.defaultMaterial);
  state.parts.forEach((item) => materials.add(item.material || text.defaultMaterial));
  materials.add(current);
  return [...materials].filter(Boolean).map((material) => {
    const selected = material === current ? " selected" : "";
    return `<option value="${escapeAttr(material)}"${selected}>${escapeHtml(material)}</option>`;
  }).join("");
}

function renderPartsSummary() {
  if (!els.partsSummary) return;
  const rows = state.parts.length;
  const totalPieces = state.parts.reduce((sum, item) => sum + Math.max(0, Math.round(toNumber(item.quantity, 0))), 0);
  const totalArea = state.parts.reduce((sum, item) => {
    return sum + Math.max(0, toNumber(item.length, 0) * toNumber(item.width, 0) * toNumber(item.quantity, 0));
  }, 0);
  const groups = new Map();
  state.parts.forEach((item) => {
    const material = String(item.material || state.material || text.defaultMaterial).trim();
    const thickness = Math.max(1, Math.round(toNumber(item.thickness, state.sheetThickness || 18)));
    groups.set(groupKeyFor(material, thickness), { material, thickness });
  });
  const usable = {
    width: Math.max(0, state.sheetLength - state.margin * 2),
    height: Math.max(0, state.sheetWidth - state.margin * 2),
  };
  const riskyParts = state.parts.filter((item) => findTooLargeReason(normalizePart(item), usable)).length;
  els.partsSummary.innerHTML = `
    ${summaryCard("\u6e05\u5355\u884c\u6570", rows, "\u884c")}
    ${summaryCard("\u677f\u4ef6\u603b\u6570", totalPieces, "\u4ef6")}
    ${summaryCard("\u7406\u8bba\u9762\u79ef", areaText(totalArea), "")}
    ${summaryCard("\u8d85\u89c4\u98ce\u9669", riskyParts, "\u9879")}
    ${summaryCard("\u677f\u6750\u5206\u7c7b", groups.size, "\u7c7b")}
  `;
  renderPartsGroupLine();
}

function summaryCard(label, value, unit, detail = "") {
  return `<div class="summary-card"><span>${label}</span><b>${value}${unit}</b>${detail ? `<small>${detail}</small>` : ""}</div>`;
}

function renderPartsGroupLine() {
  if (!els.partsGroupLine) return;
  els.partsGroupLine.innerHTML = renderBoardGroupLine(state.parts, {
    emptyText: "\u6682\u65e0\u677f\u6750\u5206\u7c7b",
  });
}

function renderBoardGroupLine(parts, options = {}) {
  const emptyText = options.emptyText || "";
  const groups = new Map();
  parts.forEach((item) => {
    const material = String(item.material || state.material || text.defaultMaterial).trim();
    const thickness = Math.max(1, Math.round(toNumber(item.thickness, state.sheetThickness || 18)));
    const key = groupKeyFor(material, thickness);
    const current = groups.get(key) || { material, thickness, count: 0, area: 0 };
    current.count += Math.max(0, Math.round(toNumber(item.quantity, 0)));
    current.area += Math.max(0, toNumber(item.length, 0) * toNumber(item.width, 0) * toNumber(item.quantity, 0));
    groups.set(key, current);
  });
  if (!groups.size) return emptyText ? `<span>${emptyText}</span>` : "";
  const groupItems = options.limitOne === true ? [...groups.values()].slice(0, 1) : [...groups.values()];
  const chips = groupItems.map((item) => {
    const detail = options.showDetails === true ? ` | ${item.count}\u4ef6 | ${areaText(item.area)}` : "";
    return `<span class="board-group-chip" style="--group-color:${groupColor(item.material, item.thickness)}">${groupBadge(item.material, item.thickness)} ${escapeHtml(item.material)}/${item.thickness}mm${detail}</span>`;
  }).join("");
  return chips;
}

function renderBoardParamLine() {
  return `<div class="board-param-line"><span class="board-param-chip">\u677f\u6750 ${state.sheetLength}x${state.sheetWidth}mm | \u952f\u7f1d ${state.kerf}mm | \u8fb9\u8ddd ${state.margin}mm</span></div>`;
}

function renderPrintPartsList() {
  if (!els.printPartsList) return;
  els.printPartsList.innerHTML = renderPrintablePartsList();
}

function bindEvents() {
  document.getElementById("addPartBtn").addEventListener("click", () => {
    readSettings();
    state.parts.push(part("\u65b0\u677f\u4ef6", 600, 300, 1, state.material, state.sheetThickness, true, "", ""));
    markResultDirty();
    renderParts();
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    if (!confirm("\u786e\u8ba4\u6e05\u7a7a\u677f\u4ef6\u6e05\u5355\uff1f")) return;
    state.parts = [];
    state.result = null;
    renderAll();
  });

  document.getElementById("loadDemoBtn").addEventListener("click", () => {
    loadSelectedSampleOrder();
  });

  document.getElementById("nestBtn").addEventListener("click", runNesting);
  els.resultStatus.addEventListener("click", () => {
    if (state.resultDirty || !state.result) runNesting();
  });
  document.getElementById("saveBtn").addEventListener("click", saveLocal);
  document.getElementById("printBtn").addEventListener("click", () => window.print());
  document.getElementById("applyStockPresetBtn").addEventListener("click", applySelectedStockPreset);
  document.getElementById("saveStockPresetBtn").addEventListener("click", saveCurrentStockPreset);
  document.getElementById("saveOrderHistoryBtn").addEventListener("click", saveCurrentOrderHistory);
  document.getElementById("exportBtn").addEventListener("click", exportCsv);
  document.getElementById("importBtn").addEventListener("click", openImportDialog);
  document.getElementById("exportCutListBtn").addEventListener("click", exportCutListCsv);
  document.getElementById("exportLabelsBtn").addEventListener("click", exportLabelsCsv);
  document.getElementById("exportReportBtn").addEventListener("click", exportReportHtml);
  document.getElementById("fullscreenLayoutBtn").addEventListener("click", openLayoutFullscreen);
  document.getElementById("printLayoutDialogBtn").addEventListener("click", printLayoutDialog);
  document.getElementById("downloadSvgBtn").addEventListener("click", downloadSvg);
  document.getElementById("downloadDxfBtn").addEventListener("click", downloadDxf);
  document.getElementById("exportProjectBtn").addEventListener("click", exportProjectJson);
  document.getElementById("importProjectBtn").addEventListener("click", openProjectDialog);
  document.getElementById("confirmImportBtn").addEventListener("click", importCsv);
  document.getElementById("confirmProjectImportBtn").addEventListener("click", importProjectJson);
  els.layoutDialog.addEventListener("click", (event) => {
    if (event.target === els.layoutDialog) {
      els.layoutDialog.close();
    }
  });
  els.sheetsView.addEventListener("mousemove", positionSheetHoverPreview);
  els.sheetsView.addEventListener("mouseleave", clearSheetHoverPreview);

  [els.sheetLength, els.sheetWidth, els.sheetThickness, els.material, els.margin].forEach((input) => {
    input.addEventListener("input", () => {
      readSettings();
      markResultDirty();
      renderPartsSummary();
    });
  });

  els.partsBody.addEventListener("input", (event) => {
    const target = event.target;
    const index = Number(target.dataset.index);
    const field = target.dataset.field;
    if (!field || !Number.isInteger(index)) return;
    state.parts[index][field] = target.type === "checkbox" ? target.checked : target.value;
    state.parts[index] = normalizePart(state.parts[index]);
    markResultDirty();
    if (["material", "thickness"].includes(field)) {
      renderParts();
    } else {
      renderPartsSummary();
    }
  });

  els.partsBody.addEventListener("change", (event) => {
    const target = event.target;
    const index = Number(target.dataset.index);
    const field = target.dataset.field;
    if (!field || !Number.isInteger(index)) return;
    if (target.type === "checkbox") {
      state.parts[index].allowRotate = target.checked;
      markResultDirty();
      return;
    }
    if (target.tagName === "SELECT") {
      state.parts[index][field] = target.value;
      state.parts[index] = normalizePart(state.parts[index]);
      markResultDirty();
      renderParts();
    }
  });

  els.partsBody.addEventListener("click", (event) => {
    const deleteIndex = event.target.dataset.delete;
    if (deleteIndex === undefined) return;
    state.parts.splice(Number(deleteIndex), 1);
    markResultDirty();
    renderParts();
  });

  els.historyList.addEventListener("click", (event) => {
    const loadId = event.target.dataset.loadHistory;
    const deleteId = event.target.dataset.deleteHistory;
    if (deleteId) {
      deleteOrderHistory(deleteId);
      return;
    }
    if (loadId) {
      loadOrderHistory(loadId);
      return;
    }
    const item = event.target.closest ? event.target.closest("[data-history-id]") : null;
    if (item && item.dataset.historyId) loadOrderHistory(item.dataset.historyId);
  });
}

function runNesting() {
  readSettings();
  state.parts = state.parts.map(normalizePart).filter((item) => item.quantity > 0);
  state.result = nestParts({
    sheetLength: state.sheetLength,
    sheetWidth: state.sheetWidth,
    kerf: state.kerf,
    margin: state.margin,
    parts: state.parts,
  });
  state.resultDirty = false;
  renderAll();
}

function markResultDirty() {
  if (!state.result) return;
  state.resultDirty = true;
  renderResult();
}

function nestParts({ sheetLength, sheetWidth, kerf, margin, parts }) {
  const usable = {
    x: margin,
    y: margin,
    width: sheetLength - margin * 2,
    height: sheetWidth - margin * 2,
  };
  const groups = groupParts(expandParts(parts));
  const sheets = [];
  const unplaced = [];

  groups.forEach((items, groupKey) => {
    const [material, thickness] = groupKey.split("::");
    const groupSheets = [];
    items
      .map((item, index) => ({ ...item, instanceId: `${groupKey}-${index + 1}` }))
      .sort((a, b) => b.length * b.width - a.length * a.width)
      .forEach((item) => {
        const tooLarge = findTooLargeReason(item, usable);
        if (tooLarge) {
          unplaced.push({ ...item, reason: tooLarge, groupName: groupLabel(material, thickness) });
          return;
        }

        let placed = false;
        for (const sheet of groupSheets) {
          const placement = placeOnSheet(sheet, item, kerf);
          if (placement) {
            sheet.placements.push(placement);
            placed = true;
            break;
          }
        }

        if (!placed) {
          const sheet = createSheet(sheets.length + groupSheets.length + 1, usable, sheetLength, sheetWidth, material, thickness);
          const placement = placeOnSheet(sheet, item, kerf);
          if (placement) {
            sheet.placements.push(placement);
            groupSheets.push(sheet);
          } else {
            unplaced.push({ ...item, reason: "\u65e0\u6cd5\u5728\u65b0\u677f\u200b\u4e0a\u653e\u7f6e", groupName: groupLabel(material, thickness) });
          }
        }
      });
    sheets.push(...groupSheets);
  });

  sheets.forEach((sheet, index) => {
    sheet.index = index + 1;
  });
  return buildStats(sheets, unplaced, sheetLength, sheetWidth);
}

function groupParts(items) {
  const map = new Map();
  items.forEach((item) => {
    const normalized = normalizePart(item);
    const key = `${normalized.material}::${normalized.thickness}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(normalized);
  });
  return map;
}

function groupLabel(material, thickness) {
  return `${material} ${thickness}mm`;
}

function groupKeyFor(material, thickness) {
  return `${material}::${thickness}`;
}

const groupPalette = ["#246bfe", "#0c8f57", "#b75f00", "#8b5cf6", "#d14343", "#0891b2", "#4f46e5", "#6b7280"];

function getActiveGroups() {
  const groups = new Map();
  const add = (material, thickness) => {
    const cleanMaterial = String(material || state.material || text.defaultMaterial).trim();
    const cleanThickness = Math.max(1, Math.round(toNumber(thickness, state.sheetThickness || 18)));
    groups.set(groupKeyFor(cleanMaterial, cleanThickness), { material: cleanMaterial, thickness: cleanThickness });
  };
  state.parts.forEach((item) => add(item.material, item.thickness));
  if (state.result) {
    state.result.sheets.forEach((sheet) => add(sheet.material, sheet.thickness));
    state.result.reusableOffcuts.forEach((item) => add(item.material, item.thickness));
  }
  return [...groups.values()];
}

function groupIndex(material, thickness) {
  const key = groupKeyFor(material, thickness);
  const groups = getActiveGroups();
  const index = groups.findIndex((item) => groupKeyFor(item.material, item.thickness) === key);
  return index >= 0 ? index : 0;
}

function groupLetter(index) {
  return index < 26 ? String.fromCharCode(65 + index) : `A${index - 25}`;
}

function groupColor(material, thickness) {
  return groupPalette[groupIndex(material, thickness) % groupPalette.length];
}

function groupBadge(material, thickness) {
  const index = groupIndex(material, thickness);
  const color = groupColor(material, thickness);
  return `<i class="group-badge" style="background:${color};border-color:${color}">${groupLetter(index)}</i>`;
}

function groupPill(material, thickness) {
  return `<span class="group-pill">${groupBadge(material, thickness)}${escapeHtml(groupLabel(material, thickness))}</span>`;
}

function groupDots(items) {
  if (!items.length) return "";
  return `<span class="group-badge-list">${items.map((item) => groupPill(item.material, item.thickness)).join("")}</span>`;
}

function groupBadgeList(items) {
  if (!items.length) return "";
  return `<span class="group-badge-list">${items.map((item) => groupBadge(item.material, item.thickness)).join("")}</span>`;
}

function findTooLargeReason(item, usable) {
  const normalFits = item.length <= usable.width && item.width <= usable.height;
  const rotateFits = item.allowRotate && item.width <= usable.width && item.length <= usable.height;
  if (normalFits || rotateFits) return "";
  return `\u5c3a\u5bf8 ${item.length}x${item.width} \u8d85\u51fa\u53ef\u7528\u533a ${usable.width}x${usable.height}`;
}

function createSheet(index, usable, sheetLength, sheetWidth, material, thickness) {
  return {
    index,
    length: sheetLength,
    width: sheetWidth,
    material,
    thickness,
    freeRects: [{ ...usable }],
    placements: [],
  };
}

function placeOnSheet(sheet, item, kerf) {
  const candidates = [{ width: item.length, height: item.width, rotated: false }];
  if (item.allowRotate && item.length !== item.width) {
    candidates.push({ width: item.width, height: item.length, rotated: true });
  }

  let best = null;
  sheet.freeRects.forEach((rect) => {
    candidates.forEach((candidate) => {
      if (candidate.width <= rect.width && candidate.height <= rect.height) {
        const areaFit = rect.width * rect.height - candidate.width * candidate.height;
        const shortSideFit = Math.min(rect.width - candidate.width, rect.height - candidate.height);
        const longSideFit = Math.max(rect.width - candidate.width, rect.height - candidate.height);
        const topLeftBias = rect.y * 0.01 + rect.x * 0.001;
        const score = areaFit * 100 + shortSideFit * 10 + longSideFit + topLeftBias;
        if (!best || score < best.score) best = { rect, candidate, score };
      }
    });
  });

  if (!best) return null;
  const { rect, candidate } = best;
  const placement = {
    id: item.instanceId,
    name: item.name,
    x: rect.x,
    y: rect.y,
    width: candidate.width,
    height: candidate.height,
    sourceLength: item.length,
    sourceWidth: item.width,
    material: item.material,
    thickness: item.thickness,
    rotated: candidate.rotated,
    note: item.note,
    edgeBanding: item.edgeBanding,
  };

  splitFreeRects(sheet, {
    x: rect.x,
    y: rect.y,
    width: Math.min(candidate.width + kerf, rect.width),
    height: Math.min(candidate.height + kerf, rect.height),
  });
  pruneFreeRects(sheet);
  return placement;
}

function splitFreeRects(sheet, used) {
  const next = [];
  sheet.freeRects.forEach((rect) => {
    if (!rectsIntersect(rect, used)) {
      next.push(rect);
      return;
    }

    const rectRight = rect.x + rect.width;
    const rectBottom = rect.y + rect.height;
    const usedRight = used.x + used.width;
    const usedBottom = used.y + used.height;

    if (used.y > rect.y) {
      next.push({ x: rect.x, y: rect.y, width: rect.width, height: used.y - rect.y });
    }
    if (usedBottom < rectBottom) {
      next.push({ x: rect.x, y: usedBottom, width: rect.width, height: rectBottom - usedBottom });
    }
    if (used.x > rect.x) {
      next.push({ x: rect.x, y: rect.y, width: used.x - rect.x, height: rect.height });
    }
    if (usedRight < rectRight) {
      next.push({ x: usedRight, y: rect.y, width: rectRight - usedRight, height: rect.height });
    }
  });
  sheet.freeRects = next;
}

function rectsIntersect(a, b) {
  return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
}

function pruneFreeRects(sheet) {
  sheet.freeRects = sheet.freeRects
    .filter((rect) => rect.width > 0 && rect.height > 0)
    .filter((rect, index, rects) => !rects.some((other, otherIndex) => {
      if (index === otherIndex) return false;
      return rect.x >= other.x &&
        rect.y >= other.y &&
        rect.x + rect.width <= other.x + other.width &&
        rect.y + rect.height <= other.y + other.height;
    }))
    .sort((a, b) => (a.y - b.y) || (a.x - b.x) || (a.width * a.height - b.width * b.height));
}

function expandParts(parts) {
  return parts.flatMap((item) => Array.from({ length: item.quantity }, () => ({ ...item })));
}

function buildStats(sheets, unplaced, sheetLength, sheetWidth) {
  const sheetArea = sheetLength * sheetWidth;
  const usedArea = sheets.reduce((sum, sheet) => {
    return sum + sheet.placements.reduce((partSum, item) => partSum + item.width * item.height, 0);
  }, 0);
  const totalArea = sheets.length * sheetArea;
  const reusableOffcuts = collectReusableOffcuts(sheets);
  return {
    sheets,
    unplaced,
    reusableOffcuts,
    stats: {
      sheetCount: sheets.length,
      placedCount: sheets.reduce((sum, sheet) => sum + sheet.placements.length, 0),
      unplacedCount: unplaced.length,
      groupCount: new Set(sheets.map((sheet) => `${sheet.material}::${sheet.thickness}`)).size,
      usedArea,
      totalArea,
      wasteArea: Math.max(0, totalArea - usedArea),
      reusableOffcutCount: reusableOffcuts.length,
      reusableOffcutArea: reusableOffcuts.reduce((sum, item) => sum + item.width * item.height, 0),
      utilizationRate: totalArea ? usedArea / totalArea : 0,
    },
  };
}

function collectReusableOffcuts(sheets) {
  const minSide = 120;
  const minArea = 120 * 300;
  return sheets.flatMap((sheet) => sheet.freeRects
    .filter((rect) => rect.width >= minSide && rect.height >= minSide && rect.width * rect.height >= minArea)
    .map((rect, index) => ({
      sheetIndex: sheet.index,
      code: `O${sheet.index}-${String(index + 1).padStart(2, "0")}`,
      material: sheet.material,
      thickness: sheet.thickness,
      x: Math.round(rect.x),
      y: Math.round(rect.y),
      width: Math.round(rect.width),
      height: Math.round(rect.height),
    })));
}

function renderAll() {
  writeSettings();
  renderSampleOrders();
  renderStockPresets();
  renderOrderHistory();
  renderParts();
  renderResult();
}

function renderSampleOrders() {
  els.sampleOrderSelect.innerHTML = sampleOrders.map((sample) => {
    return `<option value="${escapeAttr(sample.id)}">${escapeHtml(sample.name)}</option>`;
  }).join("");
}

function loadSelectedSampleOrder() {
  const sample = sampleOrders.find((item) => item.id === els.sampleOrderSelect.value) || sampleOrders[0];
  state = {
    ...state,
    orderName: sample.orderName,
    customerName: sample.customerName,
    sheetLength: sample.sheetLength,
    sheetWidth: sample.sheetWidth,
    sheetThickness: sample.sheetThickness,
    material: sample.material,
    kerf: sample.kerf,
    margin: sample.margin,
    parts: structuredClone(sample.parts).map(normalizePart),
    result: null,
  };
  runNesting();
}

function getStockPresets() {
  try {
    const custom = JSON.parse(localStorage.getItem(STOCK_PRESETS_KEY) || "[]");
    return uniqueStockPresets([...defaultStockPresets, ...custom]);
  } catch {
    return uniqueStockPresets([...defaultStockPresets]);
  }
}

function uniqueStockPresets(presets) {
  const map = new Map();
  presets.forEach((item) => {
    const key = `${item.length}::${item.width}::${item.thickness}::${item.material}`;
    if (!map.has(key)) map.set(key, item);
  });
  return [...map.values()];
}

function renderStockPresets() {
  const presets = getStockPresets();
  const groups = new Map();
  presets.forEach((preset) => {
    const category = preset.category || "\u81ea\u5b9a\u4e49\u677f\u6750";
    if (!groups.has(category)) groups.set(category, []);
    groups.get(category).push(preset);
  });
  els.stockPresetSelect.innerHTML = [...groups.entries()].map(([category, items]) => {
    const options = items.map((preset) => {
      const label = `${preset.name} ${preset.length}x${preset.width}x${preset.thickness} ${preset.material}`;
      return `<option value="${escapeAttr(preset.id)}">${escapeHtml(label)}</option>`;
    }).join("");
    return `<optgroup label="${escapeAttr(category)}">${options}</optgroup>`;
  }).join("");
}

function applySelectedStockPreset() {
  const presets = getStockPresets();
  const preset = presets.find((item) => item.id === els.stockPresetSelect.value);
  if (!preset) return;
  state.sheetLength = preset.length;
  state.sheetWidth = preset.width;
  state.sheetThickness = preset.thickness;
  state.material = preset.material;
  writeSettings();
  markResultDirty();
  renderPartsSummary();
}

function saveCurrentStockPreset() {
  readSettings();
  const custom = getCustomStockPresets();
  const preset = {
    id: `custom-${Date.now()}`,
    category: "\u81ea\u5b9a\u4e49\u677f\u6750",
    name: "\u81ea\u5b9a\u4e49",
    length: state.sheetLength,
    width: state.sheetWidth,
    thickness: state.sheetThickness,
    material: state.material,
  };
  localStorage.setItem(STOCK_PRESETS_KEY, JSON.stringify([...custom, preset]));
  renderStockPresets();
  els.stockPresetSelect.value = preset.id;
}

function getCustomStockPresets() {
  try {
    return JSON.parse(localStorage.getItem(STOCK_PRESETS_KEY) || "[]");
  } catch {
    return [];
  }
}

function snapshotCurrentOrder() {
  readSettings();
  return {
    orderName: state.orderName,
    customerName: state.customerName,
    sheetLength: state.sheetLength,
    sheetWidth: state.sheetWidth,
    sheetThickness: state.sheetThickness,
    material: state.material,
    kerf: state.kerf,
    margin: state.margin,
    parts: state.parts.map(normalizePart),
  };
}

function getOrderHistory() {
  try {
    return JSON.parse(localStorage.getItem(ORDER_HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCurrentOrderHistory() {
  const snapshot = snapshotCurrentOrder();
  const history = getOrderHistory();
  const entry = {
    id: `order-${Date.now()}`,
    savedAt: new Date().toISOString(),
    snapshot,
  };
  localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify([entry, ...history].slice(0, 20)));
  renderOrderHistory();
}

function renderOrderHistory() {
  const history = getOrderHistory();
  if (!history.length) {
    els.historyList.innerHTML = `<div class="empty">\u6682\u65e0\u4fdd\u5b58\u8ba2\u5355</div>`;
    return;
  }
  els.historyList.innerHTML = history.map((entry) => {
    const snapshot = entry.snapshot || {};
    const partCount = (snapshot.parts || []).reduce((sum, item) => sum + Number(item.quantity || 0), 0);
    const savedAt = new Date(entry.savedAt).toLocaleString();
    return `
      <div class="history-item" data-history-id="${escapeAttr(entry.id)}">
        <div>
          <strong>${escapeHtml(snapshot.orderName || text.unnamedOrder)}</strong>
          <span>${escapeHtml(snapshot.customerName || "")} | ${partCount} \u4ef6 | ${savedAt}</span>
        </div>
        <button type="button" data-load-history="${escapeAttr(entry.id)}">\u8f7d\u5165</button>
        <button type="button" data-delete-history="${escapeAttr(entry.id)}">\u5220\u9664</button>
      </div>
    `;
  }).join("");
}

function loadOrderHistory(id) {
  const entry = getOrderHistory().find((item) => item.id === id);
  if (!entry || !entry.snapshot) return;
  state = {
    ...state,
    ...entry.snapshot,
    parts: (entry.snapshot.parts || []).map(normalizePart),
    result: null,
  };
  runNesting();
}

function deleteOrderHistory(id) {
  const history = getOrderHistory().filter((item) => item.id !== id);
  localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify(history));
  renderOrderHistory();
}

function renderResult() {
  const result = state.result;
  if (!result) {
    els.resultStatus.textContent = text.pending;
    els.resultStatus.className = "status-pill";
    els.stats.innerHTML = "";
    els.warnings.innerHTML = "";
    els.cutList.innerHTML = "";
    els.labelsView.innerHTML = "";
    els.sheetsView.innerHTML = `<div class="empty">\u70b9\u51fb\u201c\u81ea\u52a8\u6392\u6599\u201d\u540e\u751f\u6210\u6392\u6599\u56fe\u3002</div>`;
    return;
  }

  els.resultStatus.textContent = state.resultDirty ? "\u672a\u5b8c\u6210\u6392\u6599" : (result.stats.unplacedCount ? text.unplaced : text.complete);
  els.resultStatus.className = state.resultDirty ? "status-pill status-action primary" : "status-pill";
  els.stats.innerHTML = `
    ${statCard("\u677f\u6750\u5f20\u6570", result.stats.sheetCount, "\u5f20")}
    ${statCard("\u5df2\u6392\u677f\u4ef6", result.stats.placedCount, "\u4ef6")}
    ${statCard("\u5229\u7528\u7387", (result.stats.utilizationRate * 100).toFixed(1), "%", `${areaText(result.stats.usedArea)} / ${areaText(result.stats.totalArea)}`)}
    ${statCard("\u53ef\u4fdd\u7559\u4f59\u6599", result.stats.reusableOffcutCount, "\u5757", areaText(result.stats.wasteArea))}
    ${statCard("\u677f\u6750\u5206\u7c7b", result.stats.groupCount, "\u7c7b")}
  `;
  els.warnings.innerHTML = renderWarnings(result);
  els.cutList.innerHTML = renderCutList(result);
  els.labelsView.innerHTML = "";
  els.sheetsView.innerHTML = result.sheets.map(renderSheet).join("") + renderSheetLabelsSection(result);
}

function statCard(label, value, unit, detail = "") {
  return `<div class="stat-card"><span>${label}</span><b>${value}${unit}</b>${detail ? `<small>${detail}</small>` : ""}</div>`;
}

function getResultGroups(result) {
  const groups = new Map();
  result.sheets.forEach((sheet) => {
    groups.set(groupKeyFor(sheet.material, sheet.thickness), { material: sheet.material, thickness: sheet.thickness });
  });
  return [...groups.values()];
}

function renderWarnings(result) {
  const lines = [];
  if (result.unplaced.length) {
    const unplaced = result.unplaced.map((item) => {
      return `${escapeHtml(item.name)}(${item.length}x${item.width}, ${escapeHtml(item.groupName || "")}) - ${escapeHtml(item.reason || "")}`;
    }).join("<br />");
    lines.push(`\u672a\u6392\u5165\uff1a<br />${unplaced}`);
  }
  return lines.join("<br />");
}

function renderCutList(result, options = {}) {
  const showPartSerial = options.showPartSerial === true;
  const showGroupLine = options.showGroupLine === true;
  const printSerial = options.printSerial !== false;
  const rows = result.sheets.flatMap((sheet) => sheet.placements.map((item, index) => ({
    sheetIndex: sheet.index,
    code: codeFor(sheet.index, index),
    partCode: partCodeFor(globalPartIndex(sheet.index, index)),
    sheetGroup: groupLabel(sheet.material, sheet.thickness),
    sheetMaterial: sheet.material,
    sheetThickness: sheet.thickness,
    ...item,
  })));
  const tableRows = rows.map((row) => `
    <tr class="sheet-row ${row.sheetIndex % 2 === 0 ? "sheet-row-even" : ""}" style="--sheet-row-color:${groupColor(row.sheetMaterial, row.sheetThickness)}">
      <td>${row.code}</td>
      ${showPartSerial ? `<td>${row.partCode}</td>` : (printSerial ? `<td class="print-serial-col">${row.partCode}</td>` : "")}
      <td>${groupBadge(row.sheetMaterial, row.sheetThickness)}</td>
      <td>${escapeHtml(row.sheetGroup)}</td>
      <td>${escapeHtml(row.name)}</td>
      <td>${row.sourceLength}x${row.sourceWidth}</td>
      <td>${Math.round(row.x)}, ${Math.round(row.y)}</td>
      <td>${row.rotated ? text.yes : text.no}</td>
      <td>${escapeHtml(row.edgeBanding || "")}</td>
      <td>${escapeHtml(row.note || "")}</td>
    </tr>
  `).join("");
  return `
    ${showGroupLine ? `<div class="board-group-line report-group-line">${renderBoardGroupLine(state.parts, { showDetails: true })}</div>${renderBoardParamLine()}` : ""}
    <div class="review-list">
      <span>\u590d\u6838 1\uff1a\u677f\u6750\u89c4\u683c ${state.sheetLength}x${state.sheetWidth}</span>
      <span>\u590d\u6838 2\uff1a\u952f\u7f1d ${state.kerf}mm\uff0c\u8fb9\u8ddd ${state.margin}mm</span>
      <span>\u590d\u6838 3\uff1a\u4e0d\u53ef\u65cb\u8f6c\u677f\u4ef6\u9700\u68c0\u67e5\u7eb9\u7406\u65b9\u5411</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>\u677f\u4ef6\u7f16\u53f7</th>
          ${showPartSerial ? `<th>\u677f\u4ef6\u5e8f\u53f7</th>` : (printSerial ? `<th class="print-serial-col">\u677f\u4ef6\u5e8f\u53f7</th>` : "")}
          <th>\u677f\u7c7b</th>
          <th>\u6750\u8d28/\u539a\u5ea6</th>
          <th>\u540d\u79f0</th>
          <th>\u5c3a\u5bf8</th>
          <th>\u5de6\u4e0a\u5750\u6807</th>
          <th>\u65cb\u8f6c</th>
          <th>\u5c01\u8fb9</th>
          <th>\u5907\u6ce8</th>
        </tr>
      </thead>
      <tbody>${tableRows}</tbody>
    </table>
    ${renderResultOffcutTable(result, { showOffcutSerial: showPartSerial, printSerial })}
  `;
}

function renderResultOffcutTable(result, options = {}) {
  const showOffcutSerial = options.showOffcutSerial === true;
  const printSerial = options.printSerial !== false;
  if (!result.reusableOffcuts.length) return "";
  const rows = result.reusableOffcuts.map((item) => `
      <tr class="sheet-row ${item.sheetIndex % 2 === 0 ? "sheet-row-even" : ""}" style="--sheet-row-color:${groupColor(item.material, item.thickness)}">
        <td>${escapeHtml(item.code)}</td>
        ${showOffcutSerial ? `<td>${partCodeFor(globalOffcutIndex(item.code))}</td>` : (printSerial ? `<td class="print-serial-col">${partCodeFor(globalOffcutIndex(item.code))}</td>` : "")}
        <td>${groupBadge(item.material, item.thickness)}</td>
        <td>${escapeHtml(groupLabel(item.material, item.thickness))}</td>
        <td></td>
        <td>${item.width}x${item.height}</td>
        <td>${item.x}, ${item.y}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    `).join("");
  return `
    <table class="offcut-table">
      <thead>
        <tr>
          <th>\u4f59\u6599\u7f16\u53f7</th>
          ${showOffcutSerial ? `<th>\u4f59\u6599\u5e8f\u53f7</th>` : (printSerial ? `<th class="print-serial-col">\u4f59\u6599\u5e8f\u53f7</th>` : "")}
          <th>\u677f\u7c7b</th>
          <th>\u6750\u8d28/\u539a\u5ea6</th>
          <th>\u540d\u79f0</th>
          <th>\u5c3a\u5bf8</th>
          <th>\u5de6\u4e0a\u5750\u6807</th>
          <th>\u65cb\u8f6c</th>
          <th>\u5c01\u8fb9</th>
          <th>\u5907\u6ce8</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderPrintablePartsList() {
  const rows = state.parts.map((item) => {
    const partItem = normalizePart(item);
    return `
      <tr class="part-row" style="--group-color:${groupColor(partItem.material, partItem.thickness)}">
        <td>${escapeHtml(partItem.name)}</td>
        <td>${partItem.length}</td>
        <td>${partItem.width}</td>
        <td>${partItem.quantity}</td>
        <td>${groupBadge(partItem.material, partItem.thickness)}</td>
        <td>${escapeHtml(partItem.material)}</td>
        <td>${partItem.thickness}</td>
        <td>${escapeHtml(partItem.edgeBanding || "")}</td>
        <td>${partItem.allowRotate ? text.yes : text.no}</td>
        <td>${escapeHtml(partItem.note || "")}</td>
      </tr>
    `;
  }).join("");
  return `
    <div class="board-group-line report-group-line print-part-group-line">${renderBoardGroupLine(state.parts, { showDetails: false })}</div>
    <table class="print-parts-table">
      <thead>
        <tr>
          <th>\u540d\u79f0</th>
          <th>\u957f</th>
          <th>\u5bbd</th>
          <th>\u6570\u91cf</th>
          <th>\u677f\u7c7b</th>
          <th>\u6750\u8d28</th>
          <th>\u539a\u5ea6</th>
          <th>\u5c01\u8fb9</th>
          <th>\u53ef\u65cb\u8f6c</th>
          <th>\u5907\u6ce8</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderOffcutList(offcuts) {
  if (!offcuts.length) return "";
  const rows = offcuts.map((item) => `
    <tr>
      <td>${item.code}</td>
      <td>${text.sheet} ${item.sheetIndex} ${text.sheetSuffix}</td>
      <td>${escapeHtml(groupLabel(item.material, item.thickness))}</td>
      <td>${item.width}x${item.height}</td>
      <td>${item.x}, ${item.y}</td>
    </tr>
  `).join("");
  return `
    <table class="offcut-table">
      <thead>
        <tr>
          <th>\u4f59\u6599\u7f16\u53f7</th>
          <th>\u677f\u53f7</th>
          <th>\u6750\u8d28/\u539a\u5ea6</th>
          <th>\u5c3a\u5bf8</th>
          <th>\u5de6\u4e0a\u5750\u6807</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function getLabelRows(result) {
  let serial = 0;
  return result.sheets.flatMap((sheet) => sheet.placements.map((item, index) => ({
    code: codeFor(sheet.index, index),
    partCode: partCodeFor(serial++),
    sheetIndex: sheet.index,
    sheetGroup: groupLabel(sheet.material, sheet.thickness),
    name: item.name,
    size: `${item.sourceLength}x${item.sourceWidth}`,
    material: item.material,
    thickness: item.thickness,
    edgeBanding: item.edgeBanding || "",
    rotated: item.rotated,
    note: item.note || "",
  })));
}

function renderLabels(result) {
  const rows = getLabelRows(result);
  if (!rows.length) return "";
  return `
    <div class="panel-title">
      <h2>\u677f\u4ef6\u6807\u7b7e</h2>
    </div>
    <div class="labels-grid">
      ${rows.map((row) => `
        <div class="part-label">
          <strong>${escapeHtml(row.code)} ${escapeHtml(row.name)}</strong>
          <span>${text.sheet} ${row.sheetIndex} ${text.sheetSuffix} | ${groupPill(row.material, row.thickness)}</span>
          <span>${row.size} | ${row.rotated ? "R" : "-"}</span>
          <span>Edge: ${escapeHtml(row.edgeBanding || "-")}</span>
          <span>${escapeHtml(row.note || "")}</span>
          <span>\u677f\u4ef6\u5e8f\u53f7\uff1a${escapeHtml(row.partCode)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSheet(sheet) {
  const usedArea = sheet.placements.reduce((sum, item) => sum + item.width * item.height, 0);
  const rate = (usedArea / (sheet.length * sheet.width) * 100).toFixed(1);
  const codes = sheet.placements.map((item, index) => codeFor(sheet.index, index)).join(", ");
  const color = groupColor(sheet.material, sheet.thickness);
  return `
    <article class="sheet-card" style="border-color:${color}">
      <div class="sheet-head">
        <div>
          <strong>${text.sheet} ${sheet.index} ${text.sheetSuffix}</strong>
          <span>${rate}%</span>
        </div>
        <span>${groupPill(sheet.material, sheet.thickness)} | ${sheet.length}x${sheet.width} mm</span>
      </div>
      ${sheetSvg(sheet)}
      <div class="sheet-code-list"><b>\u677f\u4ef6\u7f16\u53f7</b><span>${escapeHtml(codes || "-")}</span></div>
      <div class="sheet-hover-preview">
        <div class="sheet-head">
          <div>
            <strong>${text.sheet} ${sheet.index} ${text.sheetSuffix}</strong>
            <span>${rate}%</span>
          </div>
          <span>${groupPill(sheet.material, sheet.thickness)} | ${sheet.length}x${sheet.width} mm</span>
        </div>
        ${sheetSvg(sheet)}
        <div class="sheet-code-list"><b>\u677f\u4ef6\u7f16\u53f7</b><span>${escapeHtml(codes || "-")}</span></div>
      </div>
    </article>
  `;
}

function positionSheetHoverPreview(event) {
  if (window.matchMedia && window.matchMedia("(max-width: 768px)").matches) return;
  const svg = event.target.closest ? event.target.closest(".sheet-card > .sheet-svg") : null;
  clearSheetHoverPreview();
  if (!svg) return;
  const card = svg.closest(".sheet-card");
  const preview = card ? card.querySelector(".sheet-hover-preview") : null;
  if (!preview) return;
  const cardRect = card.getBoundingClientRect();
  const compactPreview = window.matchMedia && window.matchMedia("(max-width: 2530px) and (min-width: 980px)").matches;
  const width = compactPreview
    ? Math.min(980, Math.max(560, window.innerWidth - 96))
    : Math.min(1880, Math.max(980, window.innerWidth - 8));
  const height = compactPreview
    ? Math.min(720, Math.max(420, window.innerHeight - 80))
    : Math.min(1280, Math.max(720, window.innerHeight - 12));
  const gap = 14;
  let left = cardRect.left - width - gap;
  if (left < 12) left = Math.min(window.innerWidth - width - 12, cardRect.right + gap);
  let top = Math.min(Math.max(12, cardRect.top), window.innerHeight - height - 12);
  preview.classList.add("is-visible");
  preview.style.width = `${width}px`;
  preview.style.maxHeight = `${height}px`;
  preview.style.left = `${Math.max(12, left)}px`;
  preview.style.top = `${Math.max(12, top)}px`;
}

function clearSheetHoverPreview() {
  els.sheetsView.querySelectorAll(".sheet-hover-preview").forEach((preview) => {
    preview.classList.remove("is-visible");
    preview.removeAttribute("style");
  });
}

function renderSheetLabelsSection(result) {
  return `
    <section class="label-section print-only">
      ${renderLabels(result)}
      ${renderOffcutLabels(result.reusableOffcuts)}
    </section>
  `;
}

function openLayoutFullscreen() {
  if (!state.result) {
    alert("\u8bf7\u5148\u81ea\u52a8\u6392\u6599\u3002");
    return;
  }
  els.layoutDialogContent.innerHTML = state.result.sheets.map(renderFullscreenSheet).join("");
  els.layoutDialog.showModal();
}

function printLayoutDialog() {
  if (!state.result) return;
  document.body.classList.add("print-layout-dialog");
  window.print();
  setTimeout(() => document.body.classList.remove("print-layout-dialog"), 250);
}

function renderFullscreenSheet(sheet) {
  return renderDetailedSheet(sheet, state.result ? state.result.reusableOffcuts : []);
}

function renderDetailedSheet(sheet, offcuts = []) {
  const usedArea = sheet.placements.reduce((sum, item) => sum + item.width * item.height, 0);
  const rate = (usedArea / (sheet.length * sheet.width) * 100).toFixed(1);
  return `
    <article class="fullscreen-sheet" style="border-color:${groupColor(sheet.material, sheet.thickness)}">
      <div class="sheet-head">
        <div>
          <strong>${text.sheet} ${sheet.index} ${text.sheetSuffix}</strong>
          <span>${rate}%</span>
        </div>
        <span>${groupPill(sheet.material, sheet.thickness)} | ${sheet.length}x${sheet.width} mm</span>
      </div>
      ${sheetSvg(sheet)}
      ${renderSheetPartTable(sheet)}
      ${renderSheetOffcutTable(sheet, offcuts)}
    </article>
  `;
}

function renderSheetPartTable(sheet) {
  const rows = sheet.placements.map((item, index) => `
    <tr>
      <td>${codeFor(sheet.index, index)}</td>
      <td>${partCodeFor(globalPartIndex(sheet.index, index))}</td>
      <td>${escapeHtml(groupLabel(item.material, item.thickness))}</td>
      <td>${escapeHtml(item.name)}</td>
      <td>${item.sourceLength}x${item.sourceWidth}</td>
      <td>${Math.round(item.x)}, ${Math.round(item.y)}</td>
      <td>${item.rotated ? text.yes : text.no}</td>
      <td>${escapeHtml(item.edgeBanding || "")}</td>
      <td>${escapeHtml(item.note || "")}</td>
    </tr>
  `).join("");
  return `
    <table class="fullscreen-part-table">
      <thead>
        <tr>
          <th>\u677f\u4ef6\u7f16\u7801</th>
          <th>\u677f\u4ef6\u5e8f\u53f7</th>
          <th>\u6750\u8d28/\u539a\u5ea6</th>
          <th>\u540d\u79f0</th>
          <th>\u5c3a\u5bf8</th>
          <th>\u5de6\u4e0a\u5750\u6807</th>
          <th>\u65cb\u8f6c</th>
          <th>\u5c01\u8fb9</th>
          <th>\u5907\u6ce8</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderSheetOffcutTable(sheet, offcuts) {
  const rows = offcuts.filter((item) => item.sheetIndex === sheet.index).map((item) => `
    <tr>
      <td>${escapeHtml(item.code)}</td>
      <td>${partCodeFor(globalOffcutIndex(item.code))}</td>
      <td>${escapeHtml(groupLabel(item.material, item.thickness))}</td>
      <td></td>
      <td>${item.width}x${item.height}</td>
      <td>${item.x}, ${item.y}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  `).join("");
  if (!rows) return `<div class="empty detail-empty">\u672c\u677f\u65e0\u53ef\u4fdd\u7559\u4f59\u6599</div>`;
  return `
    <table class="fullscreen-part-table offcut-detail-table">
      <thead>
        <tr>
          <th>\u4f59\u6599\u7f16\u53f7</th>
          <th>\u677f\u4ef6\u5e8f\u53f7</th>
          <th>\u6750\u8d28/\u539a\u5ea6</th>
          <th>\u540d\u79f0</th>
          <th>\u5c3a\u5bf8</th>
          <th>\u5de6\u4e0a\u5750\u6807</th>
          <th>\u65cb\u8f6c</th>
          <th>\u5c01\u8fb9</th>
          <th>\u5907\u6ce8</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderOffcutLabels(offcuts) {
  if (!offcuts.length) return "";
  return `
    <div class="panel-title">
      <h2>\u4f59\u6599\u6807\u7b7e</h2>
    </div>
    <div class="labels-grid">
      ${offcuts.map((item) => `
        <div class="part-label offcut-label">
          <strong>${escapeHtml(item.code)} \u4f59\u6599</strong>
          <span>${text.sheet} ${item.sheetIndex} ${text.sheetSuffix} | ${groupPill(item.material, item.thickness)}</span>
          <span>${item.width}x${item.height}</span>
          <span>${item.x}, ${item.y}</span>
          <span>\u4f59\u6599\u5e8f\u53f7\uff1a${partCodeFor(globalOffcutIndex(item.code))}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function sheetSvg(sheet) {
  const colors = ["#d9e8ff", "#ddf7e9", "#fff0c2", "#f7d9ff", "#ffd9d9", "#dcf6ff", "#ebe0ff"];
  const labels = sheet.placements.map((item, index) => {
    const fill = colors[index % colors.length];
    const fontSize = Math.max(18, Math.min(42, Math.min(item.width, item.height) / 6));
    const code = codeFor(sheet.index, index);
    return `
      <g>
        <rect x="${item.x}" y="${item.y}" width="${item.width}" height="${item.height}" fill="${fill}" stroke="#24364f" stroke-width="2" />
        <text x="${item.x + 12}" y="${item.y + fontSize}" text-anchor="start" font-size="${Math.max(14, fontSize * 0.62)}" fill="#18212f">${code}</text>
        <text x="${item.x + item.width / 2}" y="${item.y + item.height / 2 - fontSize / 3}" text-anchor="middle" font-size="${fontSize}" fill="#18212f">${escapeHtml(item.name)}</text>
        <text x="${item.x + item.width / 2}" y="${item.y + item.height / 2 + fontSize}" text-anchor="middle" font-size="${Math.max(14, fontSize * 0.72)}" fill="#41516a">${item.sourceLength}x${item.sourceWidth}${item.rotated ? " R" : ""}</text>
      </g>
    `;
  }).join("");

  return `
    <svg class="sheet-svg" viewBox="0 0 ${sheet.length} ${sheet.width}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${sheet.length}" height="${sheet.width}" fill="#ffffff" />
      <rect x="${state.margin}" y="${state.margin}" width="${sheet.length - state.margin * 2}" height="${sheet.width - state.margin * 2}" fill="none" stroke="#9aa6b6" stroke-width="2" stroke-dasharray="12 10" />
      ${labels}
    </svg>
  `;
}

function codeFor(sheetIndex, itemIndex) {
  return `S${sheetIndex}-${String(itemIndex + 1).padStart(2, "0")}`;
}

function partCodeFor(serialIndex) {
  return `P${String(serialIndex + 1).padStart(5, "0")}`;
}

function globalPartIndex(sheetIndex, itemIndex) {
  if (!state.result) return itemIndex;
  let offset = 0;
  for (const sheet of state.result.sheets) {
    if (sheet.index === sheetIndex) return offset + itemIndex;
    offset += sheet.placements.length;
  }
  return itemIndex;
}

function globalOffcutIndex(code) {
  if (!state.result) return 0;
  const partCount = state.result.sheets.reduce((sum, sheet) => sum + sheet.placements.length, 0);
  const offcutIndex = state.result.reusableOffcuts.findIndex((item) => item.code === code);
  return partCount + Math.max(0, offcutIndex);
}

function areaText(mm2) {
  return `${(mm2 / 1000000).toFixed(2)}m2`;
}

function saveLocal() {
  readSettings();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  alert("\u5df2\u4fdd\u5b58\u5230\u6d4f\u89c8\u5668\u672c\u5730\u3002");
}

function loadLocal() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return false;
  try {
    const saved = JSON.parse(raw);
    state = { ...state, ...saved, parts: (saved.parts || []).map(normalizePart) };
    return true;
  } catch (error) {
    console.warn(error);
    return false;
  }
}

function exportCsv() {
  readSettings();
  const header = ["\u540d\u79f0", "\u957f\u5ea6", "\u5bbd\u5ea6", "\u6570\u91cf", "\u6750\u8d28", "\u539a\u5ea6", "\u5c01\u8fb9", "\u53ef\u65cb\u8f6c", "\u5907\u6ce8"];
  const rows = state.parts.map((item) => [
    item.name,
    item.length,
    item.width,
    item.quantity,
    item.material,
    item.thickness,
    item.edgeBanding,
    item.allowRotate ? text.yes : text.no,
    item.note,
  ]);
  downloadText("parts.csv", toCsv([header, ...rows]), "text/csv;charset=utf-8");
}

function exportCutListCsv() {
  if (!state.result || !state.result.sheets.length) {
    alert("\u8bf7\u5148\u81ea\u52a8\u6392\u6599\u3002");
    return;
  }
  const header = ["\u7f16\u53f7", "\u677f\u53f7", "\u6750\u8d28", "\u539a\u5ea6", "\u540d\u79f0", "\u539f\u59cb\u957f\u5ea6", "\u539f\u59cb\u5bbd\u5ea6", "\u6392\u6599\u5bbd", "\u6392\u6599\u9ad8", "X", "Y", "\u65cb\u8f6c", "\u5c01\u8fb9", "\u5907\u6ce8"];
  const rows = state.result.sheets.flatMap((sheet) => sheet.placements.map((item, index) => [
    codeFor(sheet.index, index),
    sheet.index,
    item.material,
    item.thickness,
    item.name,
    item.sourceLength,
    item.sourceWidth,
    item.width,
    item.height,
    Math.round(item.x),
    Math.round(item.y),
    item.rotated ? text.yes : text.no,
    item.edgeBanding || "",
    item.note || "",
  ]));
  const offcutHeader = ["\u4f59\u6599\u7f16\u53f7", "\u677f\u53f7", "\u6750\u8d28", "\u539a\u5ea6", "\u5bbd", "\u9ad8", "X", "Y"];
  const offcutRows = state.result.reusableOffcuts.map((item) => [
    item.code,
    item.sheetIndex,
    item.material,
    item.thickness,
    item.width,
    item.height,
    item.x,
    item.y,
  ]);
  const csvRows = [header, ...rows];
  if (offcutRows.length) {
    csvRows.push([], ["Reusable offcuts"], offcutHeader, ...offcutRows);
  }
  downloadText("cut-list.csv", toCsv(csvRows), "text/csv;charset=utf-8");
}

function exportLabelsCsv() {
  if (!state.result || !state.result.sheets.length) {
    alert("\u8bf7\u5148\u81ea\u52a8\u6392\u6599\u3002");
    return;
  }
  const header = ["\u6807\u7b7e\u7f16\u53f7", "\u677f\u53f7", "\u6750\u8d28/\u539a\u5ea6", "\u540d\u79f0", "\u5c3a\u5bf8", "\u5c01\u8fb9", "\u65cb\u8f6c", "\u5907\u6ce8"];
  const rows = getLabelRows(state.result).map((item) => [
    item.code,
    item.sheetIndex,
    item.sheetGroup,
    item.name,
    item.size,
    item.edgeBanding,
    item.rotated ? text.yes : text.no,
    item.note,
  ]);
  downloadText("part-labels.csv", toCsv([header, ...rows]), "text/csv;charset=utf-8");
}

function exportReportHtml() {
  if (!state.result || !state.result.sheets.length) {
    alert("\u8bf7\u5148\u81ea\u52a8\u6392\u6599\u3002");
    return;
  }
  downloadText("nesting-report.html", buildReportHtml(state.result), "text/html;charset=utf-8");
}

function buildReportHtml(result) {
  const stats = result.stats;
  const generatedAt = new Date().toLocaleString();
  const sheetCards = result.sheets.map((sheet) => renderDetailedSheet(sheet, result.reusableOffcuts)).join("");
  return `<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(state.orderName)} - Nesting Report</title>
  <style>
    body{font-family:Arial,sans-serif;margin:24px;color:#111827}
    h1{font-size:24px;margin:0 0 6px}
    h2{font-size:16px;margin:24px 0 8px}
    .meta,.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:14px 0}
    .box{border:1px solid #d1d5db;border-radius:6px;padding:8px;font-size:12px}
    .box b{display:block;font-size:18px;margin-top:4px}
    table{width:100%;border-collapse:collapse;font-size:12px;margin:8px 0 18px}
    th,td{border:1px solid #d1d5db;padding:5px;text-align:left}
    .review-list,.board-group-line,.board-param-line{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
    .board-group-chip,.board-param-chip{display:inline-flex;align-items:center;padding:4px 8px;border:1px solid #d1d5db;border-left:4px solid var(--group-color,#111827);border-radius:6px;background:#fff;font-weight:700;white-space:nowrap}
    .board-param-chip{border-left-width:1px;background:#f7f9fc;font-weight:600}
    .sheet{break-inside:avoid;page-break-inside:avoid;margin-bottom:18px}
    .sheet-svg{width:100%;height:auto;border:1px solid #111827}
    .fullscreen-sheet{break-inside:avoid;page-break-inside:avoid;margin-bottom:18px;border:2px solid #111827;border-radius:6px;padding:8px}
    .fullscreen-part-table{width:100%;border-collapse:collapse;font-size:12px;margin:8px 0 12px}
    .labels-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
    .part-label{border:1px solid #111827;border-radius:6px;padding:8px;min-height:82px;break-inside:avoid}
    .part-label strong{display:block;font-size:15px;margin-bottom:4px}
    .part-label span{display:block;font-size:12px;line-height:1.4}
    @media print{html,body{height:auto;overflow:visible}body{margin:10mm}table,.fullscreen-part-table{height:auto;max-height:none;overflow:visible}.sheet,.fullscreen-sheet{page-break-inside:avoid;break-inside:avoid}}
  </style>
</head>
<body>
  <h1>${escapeHtml(state.orderName)}</h1>
  <div>${escapeHtml(state.customerName || "")} | Generated: ${escapeHtml(generatedAt)}</div>
  <div class="meta">
    <div class="box">Stock<b>${state.sheetLength}x${state.sheetWidth}</b></div>
    <div class="box">Kerf<b>${state.kerf}mm</b></div>
    <div class="box">Margin<b>${state.margin}mm</b></div>
    <div class="box">Default material<b>${escapeHtml(state.material)}</b></div>
  </div>
  <div class="stats">
    <div class="box">Sheets<b>${stats.sheetCount}</b></div>
    <div class="box">Groups<b>${stats.groupCount}</b></div>
    <div class="box">Placed parts<b>${stats.placedCount}</b></div>
    <div class="box">Utilization<b>${(stats.utilizationRate * 100).toFixed(1)}%</b></div>
  </div>
  <h2>Part list</h2>
  ${renderPrintablePartsList()}
  <h2>Cut list</h2>
      ${renderCutList(result, { showPartSerial: true, showGroupLine: true })}
  <h2>Labels</h2>
  ${renderLabels(result)}
  ${renderOffcutLabels(result.reusableOffcuts)}
  <h2>Layouts</h2>
  ${sheetCards}
</body>
</html>`;
}

function openImportDialog() {
  els.csvText.value = "\u540d\u79f0,\u957f\u5ea6,\u5bbd\u5ea6,\u6570\u91cf,\u6750\u8d28,\u539a\u5ea6,\u5c01\u8fb9,\u53ef\u65cb\u8f6c,\u5907\u6ce8\n\u4fa7\u677f,2200,580,2,\u9897\u7c92\u677f,18,\"F,B\",\u5426,\u7eb9\u7406\u7ad6\u5411\n\u5c42\u677f,860,560,4,\u9897\u7c92\u677f,18,F,\u662f,";
  els.csvDialog.showModal();
}

function importCsv() {
  const rows = parseCsv(els.csvText.value.trim());
  if (!rows.length) return;
  const first = rows[0].map((cell) => cell.trim());
  const hasHeader = first.includes("\u540d\u79f0") || first.includes("\u957f\u5ea6") || first.includes("name");
  const dataRows = hasHeader ? rows.slice(1) : rows;
  state.parts = dataRows
    .filter((row) => row.length >= 4)
    .map((row) => normalizePart({
      name: row[0],
      length: row[1],
      width: row[2],
      quantity: row[3],
      material: row[4] || state.material,
      thickness: row[5] || state.sheetThickness,
      edgeBanding: row[6] || "",
      allowRotate: parseYes(row[7]),
      note: row[8] || "",
    }));
  els.csvDialog.close();
  renderParts();
}

function exportProjectJson() {
  readSettings();
  const payload = {
    version: 2,
    exportedAt: new Date().toISOString(),
    state: { ...state, result: null },
  };
  downloadText("wood-cutting-project.json", JSON.stringify(payload, null, 2), "application/json;charset=utf-8");
}

function openProjectDialog() {
  els.projectText.value = "";
  els.projectDialog.showModal();
}

function importProjectJson() {
  try {
    const payload = JSON.parse(els.projectText.value);
    const incoming = payload.state || payload;
    state = {
      ...state,
      ...incoming,
      parts: (incoming.parts || []).map(normalizePart),
      result: null,
    };
    els.projectDialog.close();
    runNesting();
  } catch (error) {
    alert("JSON import failed: " + error.message);
  }
}

function parseYes(value) {
  return ["\u662f", "true", "1", "yes", "y"].includes(String(value || "").trim().toLowerCase());
}

function toCsv(rows) {
  return rows.map((row) => row.map(csvCell).join(",")).join("\n");
}

function csvCell(value) {
  const cell = String(value ?? "");
  return /[",\n]/.test(cell) ? `"${cell.replaceAll('"', '""')}"` : cell;
}

function parseCsv(input) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    const next = input[i + 1];
    if (quoted) {
      if (char === '"' && next === '"') {
        cell += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        cell += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (char !== "\r") {
      cell += char;
    }
  }
  row.push(cell);
  rows.push(row);
  return rows.filter((item) => item.some((cellText) => cellText.trim()));
}

function downloadSvg() {
  if (!state.result || !state.result.sheets.length) {
    alert("\u8bf7\u5148\u81ea\u52a8\u6392\u6599\u3002");
    return;
  }
  const content = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="${state.result.sheets.length * 700}" viewBox="0 0 1200 ${state.result.sheets.length * 700}">
      ${state.result.sheets.map((sheet, index) => {
        const scale = Math.min(1100 / sheet.length, 620 / sheet.width);
        return `<g transform="translate(50 ${50 + index * 700}) scale(${scale})">${sheetSvg(sheet).replace(/<svg[^>]*>|<\/svg>/g, "")}</g>`;
      }).join("")}
    </svg>
  `;
  downloadText("nesting.svg", content, "image/svg+xml;charset=utf-8");
}

function downloadDxf() {
  if (!state.result || !state.result.sheets.length) {
    alert("\u8bf7\u5148\u81ea\u52a8\u6392\u6599\u3002");
    return;
  }
  downloadText("nesting-layout.dxf", buildDxf(state.result), "application/dxf;charset=utf-8");
}

function buildDxf(result) {
  const lines = [
    "0", "SECTION",
    "2", "HEADER",
    "9", "$INSUNITS",
    "70", "4",
    "0", "ENDSEC",
    "0", "SECTION",
    "2", "TABLES",
    "0", "TABLE",
    "2", "LAYER",
    "70", "4",
    ...dxfLayer("SHEET", 7),
    ...dxfLayer("PART", 3),
    ...dxfLayer("TEXT", 1),
    ...dxfLayer("OFFCUT", 5),
    "0", "ENDTAB",
    "0", "ENDSEC",
    "0", "SECTION",
    "2", "ENTITIES",
  ];
  const gap = 180;
  let offsetX = 0;
  result.sheets.forEach((sheet) => {
    const ox = offsetX;
    const oy = 0;
    lines.push(...dxfRect(ox, oy, sheet.length, sheet.width, "SHEET"));
    lines.push(...dxfText(ox + 20, oy + sheet.width + 40, 36, `S${sheet.index} ${groupLabel(sheet.material, sheet.thickness)} ${sheet.length}x${sheet.width}`, "TEXT"));
    sheet.placements.forEach((item, index) => {
      const x = ox + item.x;
      const y = oy + item.y;
      const code = codeFor(sheet.index, index);
      lines.push(...dxfRect(x, y, item.width, item.height, "PART"));
      lines.push(...dxfText(x + 12, y + Math.min(item.height - 12, 36), 24, `${code} ${item.name}`, "TEXT"));
      lines.push(...dxfText(x + 12, y + Math.min(item.height - 12, 66), 18, `${item.sourceLength}x${item.sourceWidth}${item.rotated ? " R" : ""}`, "TEXT"));
    });
    result.reusableOffcuts
      .filter((item) => item.sheetIndex === sheet.index)
      .forEach((item) => {
        lines.push(...dxfRect(ox + item.x, oy + item.y, item.width, item.height, "OFFCUT"));
      });
    offsetX += sheet.length + gap;
  });
  lines.push("0", "ENDSEC", "0", "EOF");
  return lines.join("\n");
}

function dxfLayer(name, color) {
  return ["0", "LAYER", "2", name, "70", "0", "62", String(color), "6", "CONTINUOUS"];
}

function dxfRect(x, y, width, height, layer) {
  return [
    ...dxfLine(x, y, x + width, y, layer),
    ...dxfLine(x + width, y, x + width, y + height, layer),
    ...dxfLine(x + width, y + height, x, y + height, layer),
    ...dxfLine(x, y + height, x, y, layer),
  ];
}

function dxfLine(x1, y1, x2, y2, layer) {
  return [
    "0", "LINE",
    "8", layer,
    "10", formatDxfNumber(x1),
    "20", formatDxfNumber(y1),
    "30", "0",
    "11", formatDxfNumber(x2),
    "21", formatDxfNumber(y2),
    "31", "0",
  ];
}

function dxfText(x, y, height, value, layer) {
  return [
    "0", "TEXT",
    "8", layer,
    "10", formatDxfNumber(x),
    "20", formatDxfNumber(y),
    "30", "0",
    "40", formatDxfNumber(height),
    "1", dxfSafeText(value),
  ];
}

function formatDxfNumber(value) {
  return Number(value).toFixed(3).replace(/\.?0+$/, "");
}

function dxfSafeText(value) {
  return String(value || "").replace(/[^\x20-\x7E]/g, "?").slice(0, 80);
}

function downloadText(filename, content, type) {
  const blob = new Blob(["\ufeff", content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("\n", " ");
}

function init() {
  loadLocal();
  writeSettings();
  bindEvents();
  runNesting();
}

init();
