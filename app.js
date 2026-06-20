const STORAGE_KEY = "wood-cutting-mvp-state-v2";
const STOCK_PRESETS_KEY = "wood-cutting-mvp-stock-presets-v1";
const ORDER_HISTORY_KEY = "wood-cutting-mvp-order-history-v1";
const CUTTING_HISTORY_KEY = "wood-cutting-mvp-cutting-history-v1";
const DESIGN_HISTORY_KEY = "wood-cutting-mvp-design-history-v1";
const HISTORY_SERIAL_KEY = "wood-cutting-mvp-history-serial-v1";
const APP_MODE_KEY = "wood-cutting-mvp-app-mode-v1";

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

const quickStockSizeOptions = [
  { id: "quick-size-2440-1220", label: "2440x1220", length: 2440, width: 1220 },
  { id: "quick-size-2800-1220", label: "2800x1220", length: 2800, width: 1220 },
];

const defaultQuotePresets = [
  { id: "price-particle-18", category: "\u5e38\u7528\u67dc\u4f53", name: "\u9897\u7c92\u677f 18mm", material: "\u9897\u7c92\u677f", thickness: 18, mainBoardPrice: 180, backBoardPrice: 75, edgePrice: 1.8, laborPrice: 3, wasteRate: 8, profitRate: 25 },
  { id: "price-eco-18", category: "\u5e38\u7528\u67dc\u4f53", name: "\u751f\u6001\u677f 18mm", material: "\u751f\u6001\u677f", thickness: 18, mainBoardPrice: 220, backBoardPrice: 85, edgePrice: 2.2, laborPrice: 3.5, wasteRate: 8, profitRate: 28 },
  { id: "price-plywood-18", category: "\u7ed3\u6784/\u627f\u91cd", name: "\u591a\u5c42\u677f 18mm", material: "\u591a\u5c42\u677f", thickness: 18, mainBoardPrice: 260, backBoardPrice: 90, edgePrice: 2.4, laborPrice: 4, wasteRate: 10, profitRate: 30 },
  { id: "price-mdf-18", category: "\u95e8\u677f/\u9020\u578b", name: "\u5bc6\u5ea6\u677f 18mm", material: "\u5bc6\u5ea6\u677f", thickness: 18, mainBoardPrice: 160, backBoardPrice: 75, edgePrice: 2, laborPrice: 4, wasteRate: 10, profitRate: 30 },
  { id: "price-blockboard-18", category: "\u57fa\u5c42/\u6728\u82af", name: "\u7ec6\u6728\u5de5\u677f 18mm", material: "\u7ec6\u6728\u5de5\u677f", thickness: 18, mainBoardPrice: 210, backBoardPrice: 80, edgePrice: 2, laborPrice: 3.5, wasteRate: 9, profitRate: 28 },
  { id: "price-osb-18", category: "\u57fa\u5c42/\u7ed3\u6784", name: "OSB 18mm", material: "OSB", thickness: 18, mainBoardPrice: 150, backBoardPrice: 70, edgePrice: 1.8, laborPrice: 3.5, wasteRate: 10, profitRate: 28 },
  { id: "price-back-9", category: "\u80cc\u677f/\u8584\u677f", name: "\u80cc\u677f 9mm", material: "\u80cc\u677f", thickness: 9, mainBoardPrice: 90, backBoardPrice: 80, edgePrice: 1.2, laborPrice: 2.5, wasteRate: 8, profitRate: 25 },
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

const orderStatusOptions = {
  quote: { label: "\u5f85\u62a5\u4ef7", className: "status-quote" },
  quoted: { label: "\u5df2\u62a5\u4ef7", className: "status-quoted" },
  nesting: { label: "\u5df2\u6392\u6599", className: "status-nesting" },
  production: { label: "\u751f\u4ea7\u4e2d", className: "status-production" },
  done: { label: "\u5df2\u5b8c\u6210", className: "status-done" },
};

const cuttingModeOptions = {
  manual: { label: "\u63a8\u53f0\u952f/\u4eba\u5de5\u5f00\u6599", algorithm: "\u77e9\u5f62\u9884\u6392+\u4eba\u5de5\u590d\u6838\u5207\u5272\u987a\u5e8f" },
  beam: { label: "\u7535\u5b50\u952f/\u88c1\u677f\u952f", algorithm: "\u6279\u91cf\u77e9\u5f62\u88c1\u5207+\u540c\u6750\u8d28\u5206\u7ec4" },
  cnc: { label: "CNC\u5f00\u6599\u673a", algorithm: "\u4e8c\u7ef4\u5957\u6599+\u5200\u5f84/\u5b54\u69fd\u5de5\u827a" },
};

const manualCutWeights = {
  sheetCount: 35,
  fenceChanges: 22,
  materialYield: 18,
  reusableOffcut: 12,
  rotation: 8,
  cutLength: 5,
  totalCost: 50,
  cutPrice: 5,
};

const offcutRules = {
  minKeepSide: 120,
  minKeepArea: 120 * 300,
  minRegularSide: 180,
  minRegularLongSide: 450,
  shortTailLimit: 180,
  filledTailLimit: 80,
  minBelowRegular: 300,
};

const cuttingWeightPresets = {
  manual: manualCutWeights,
  beam: {
    sheetCount: 30,
    fenceChanges: 20,
    materialYield: 30,
    reusableOffcut: 12,
    rotation: 3,
    cutLength: 18,
    totalCost: 35,
    cutPrice: 4,
  },
  cnc: {
    sheetCount: 20,
    fenceChanges: 2,
    materialYield: 50,
    reusableOffcut: 8,
    rotation: 2,
    cutLength: 18,
    totalCost: 10,
    cutPrice: 2,
  },
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
    orderStatus: "quote",
    orderDueDate: "",
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
    orderStatus: "quoted",
    orderDueDate: "",
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
    orderStatus: "nesting",
    orderDueDate: "",
    sheetLength: 2440,
    sheetWidth: 1220,
    sheetThickness: 18,
    material: "\u751f\u6001\u677f",
    kerf: 4,
    margin: 5,
    parts: displayCabinetParts,
  },
];

const designTemplates = {
  "study-combo": {
    type: "combo",
    width: 2600,
    height: 2200,
    depth: 350,
    columns: 3,
    shelves: 4,
    deskWidth: 1200,
    deskHeight: 760,
    deskDepth: 600,
    doorMode: "lower",
    drawerCount: 2,
    includeBack: true,
    includeDrawers: true,
  },
  "open-bookcase": {
    type: "bookcase",
    width: 1800,
    height: 2200,
    depth: 350,
    columns: 4,
    shelves: 5,
    deskWidth: 1200,
    deskHeight: 760,
    deskDepth: 600,
    doorMode: "none",
    drawerCount: 0,
    includeBack: true,
    includeDrawers: false,
  },
  "desk-drawers": {
    type: "desk",
    width: 1400,
    height: 760,
    depth: 600,
    columns: 1,
    shelves: 0,
    deskWidth: 1400,
    deskHeight: 760,
    deskDepth: 600,
    doorMode: "none",
    drawerCount: 3,
    includeBack: false,
    includeDrawers: true,
  },
};

let state = {
  orderName: text.demoOrder,
  customerName: text.demoCustomer,
  orderStatus: "quote",
  orderDueDate: "",
  sheetLength: 2440,
  sheetWidth: 1220,
  sheetThickness: 18,
  material: text.defaultMaterial,
  kerf: 4,
  margin: 5,
  cuttingMode: "manual",
  manualWeights: { ...manualCutWeights },
  parts: structuredClone(wardrobeParts),
  result: null,
  resultDirty: false,
};

let activeSheetPreview = null;
let appMode = "quick";
let activeHistoryId = "";
let historyFilters = {
  query: "",
  status: "all",
  dueOnly: false,
};

const els = {
  modeButtons: [...document.querySelectorAll("[data-mode]")],
  modeHint: document.getElementById("modeHint"),
  quickStudyComboBtn: document.getElementById("quickStudyComboBtn"),
  saveOrderHistoryBtn: document.getElementById("saveOrderHistoryBtn"),
  orderName: document.getElementById("orderName"),
  customerName: document.getElementById("customerName"),
  orderStatus: document.getElementById("orderStatus"),
  orderDueDate: document.getElementById("orderDueDate"),
  sheetLength: document.getElementById("sheetLength"),
  sheetWidth: document.getElementById("sheetWidth"),
  sheetThickness: document.getElementById("sheetThickness"),
  material: document.getElementById("material"),
  kerf: document.getElementById("kerf"),
  margin: document.getElementById("margin"),
  cuttingMode: document.getElementById("cuttingMode"),
  quickStockPresetSelect: document.getElementById("quickStockPresetSelect"),
  quickCuttingMode: document.getElementById("quickCuttingMode"),
  weightSheetCount: document.getElementById("weightSheetCount"),
  weightFenceChanges: document.getElementById("weightFenceChanges"),
  weightMaterialYield: document.getElementById("weightMaterialYield"),
  weightReusableOffcut: document.getElementById("weightReusableOffcut"),
  weightRotation: document.getElementById("weightRotation"),
  weightCutLength: document.getElementById("weightCutLength"),
  weightTotalCost: document.getElementById("weightTotalCost"),
  weightCutPrice: document.getElementById("weightCutPrice"),
  sampleOrderSelect: document.getElementById("sampleOrderSelect"),
  stockPresetSelect: document.getElementById("stockPresetSelect"),
  orderDashboard: document.getElementById("orderDashboard"),
  orderHistorySearch: document.getElementById("orderHistorySearch"),
  orderHistoryStatusFilter: document.getElementById("orderHistoryStatusFilter"),
  orderHistoryDueFilter: document.getElementById("orderHistoryDueFilter"),
  historyList: document.getElementById("historyList"),
  designTemplateSelect: document.getElementById("designTemplateSelect"),
  designType: document.getElementById("designType"),
  designWidth: document.getElementById("designWidth"),
  designHeight: document.getElementById("designHeight"),
  designDepth: document.getElementById("designDepth"),
  designColumns: document.getElementById("designColumns"),
  designShelves: document.getElementById("designShelves"),
  designDeskWidth: document.getElementById("designDeskWidth"),
  designDeskHeight: document.getElementById("designDeskHeight"),
  designDeskDepth: document.getElementById("designDeskDepth"),
  designMaterial: document.getElementById("designMaterial"),
  designThickness: document.getElementById("designThickness"),
  designBackThickness: document.getElementById("designBackThickness"),
  designBack: document.getElementById("designBack"),
  designDoorMode: document.getElementById("designDoorMode"),
  designDrawerCount: document.getElementById("designDrawerCount"),
  designDrawers: document.getElementById("designDrawers"),
  designSummary: document.getElementById("designSummary"),
  designDetails: document.getElementById("designDetails"),
  designPreview: document.getElementById("designPreview"),
  quotePresetSelect: document.getElementById("quotePresetSelect"),
  quotePriceHint: document.getElementById("quotePriceHint"),
  simpleMainSheets: document.getElementById("simpleMainSheets"),
  simpleBackSheets: document.getElementById("simpleBackSheets"),
  simpleEdgeMeters: document.getElementById("simpleEdgeMeters"),
  simplePieceCount: document.getElementById("simplePieceCount"),
  simpleCalculateBtn: document.getElementById("simpleCalculateBtn"),
  mainBoardPrice: document.getElementById("mainBoardPrice"),
  backBoardPrice: document.getElementById("backBoardPrice"),
  edgePrice: document.getElementById("edgePrice"),
  laborPrice: document.getElementById("laborPrice"),
  wasteRate: document.getElementById("wasteRate"),
  profitRate: document.getElementById("profitRate"),
  quoteSummary: document.getElementById("quoteSummary"),
  quoteSheetView: document.getElementById("quoteSheetView"),
  productionSheetView: document.getElementById("productionSheetView"),
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
  layoutDialogTitle: document.getElementById("layoutDialogTitle"),
  layoutDialogContent: document.getElementById("layoutDialogContent"),
};

function part(name, length, width, quantity, material, thickness, allowRotate, edgeBanding, note) {
  return { name, length, width, quantity, material, thickness, allowRotate, edgeBanding, note };
}

function readSettings() {
  state.orderName = els.orderName.value.trim() || text.unnamedOrder;
  state.customerName = els.customerName.value.trim();
  state.orderStatus = els.orderStatus.value || "quote";
  state.orderDueDate = els.orderDueDate.value || "";
  state.sheetLength = toNumber(els.sheetLength.value, 2440);
  state.sheetWidth = toNumber(els.sheetWidth.value, 1220);
  state.sheetThickness = toNumber(els.sheetThickness.value, 18);
  state.material = els.material.value.trim() || text.defaultMaterial;
  state.kerf = toNumber(els.kerf.value, 0);
  state.margin = toNumber(els.margin.value, 0);
  const selectedCuttingMode = appMode === "pro" ? els.cuttingMode?.value : els.quickCuttingMode?.value;
  state.cuttingMode = cuttingModeOptions[selectedCuttingMode] ? selectedCuttingMode : "manual";
  if (appMode !== "pro" && state.cuttingMode === "cnc") state.cuttingMode = "manual";
  state.manualWeights = readManualWeights();
}

function writeSettings() {
  els.orderName.value = state.orderName;
  els.customerName.value = state.customerName;
  els.orderStatus.value = state.orderStatus || "quote";
  els.orderDueDate.value = state.orderDueDate || "";
  els.sheetLength.value = state.sheetLength;
  els.sheetWidth.value = state.sheetWidth;
  els.sheetThickness.value = state.sheetThickness;
  els.material.innerHTML = materialOptions(state.material);
  els.material.value = state.material;
  els.kerf.value = state.kerf;
  els.margin.value = state.margin;
  if (els.cuttingMode) els.cuttingMode.value = state.cuttingMode || "manual";
  if (els.quickCuttingMode) els.quickCuttingMode.value = state.cuttingMode === "beam" ? "beam" : "manual";
  writeManualWeights();
}

function manualWeightInputs() {
  return {
    sheetCount: els.weightSheetCount,
    fenceChanges: els.weightFenceChanges,
    materialYield: els.weightMaterialYield,
    reusableOffcut: els.weightReusableOffcut,
    rotation: els.weightRotation,
    cutLength: els.weightCutLength,
    totalCost: els.weightTotalCost,
    cutPrice: els.weightCutPrice,
  };
}

function readManualWeights() {
  const inputs = manualWeightInputs();
  return Object.fromEntries(Object.entries(manualCutWeights).map(([key, fallback]) => {
    return [key, Math.max(0, toNumber(inputs[key]?.value, fallback))];
  }));
}

function writeManualWeights() {
  const inputs = manualWeightInputs();
  const weights = { ...manualCutWeights, ...(state.manualWeights || {}) };
  Object.entries(inputs).forEach(([key, input]) => {
    if (input) input.value = weights[key];
  });
}

function activeManualWeights() {
  return { ...manualCutWeights, ...(state.manualWeights || {}) };
}

function activeCutWeights(mode = state.cuttingMode) {
  if (mode === "manual") return activeManualWeights();
  return { ...(cuttingWeightPresets[mode] || cuttingWeightPresets.manual) };
}

function loadAppMode() {
  try {
    const saved = localStorage.getItem(APP_MODE_KEY);
    return ["quick", "design", "pro"].includes(saved) ? saved : "quick";
  } catch {
    return "quick";
  }
}

function setAppMode(mode) {
  appMode = ["quick", "design", "pro"].includes(mode) ? mode : "quick";
  try {
    localStorage.setItem(APP_MODE_KEY, appMode);
  } catch {
    // Local storage can be unavailable in private or embedded contexts.
  }
  applyAppMode();
}

function applyAppMode() {
  document.body.dataset.mode = appMode;
  if (appMode !== "pro" && state.cuttingMode === "cnc") {
    state.cuttingMode = "manual";
  }
  if (els.cuttingMode) els.cuttingMode.value = state.cuttingMode || "manual";
  if (els.quickCuttingMode) els.quickCuttingMode.value = state.cuttingMode === "beam" ? "beam" : "manual";
  els.modeButtons.forEach((button) => {
    const active = button.dataset.mode === appMode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  if (els.modeHint) els.modeHint.textContent = modeHintText(appMode);
  if (els.quickStudyComboBtn) els.quickStudyComboBtn.textContent = modePrimaryActionText(appMode);
  if (els.saveOrderHistoryBtn) els.saveOrderHistoryBtn.textContent = historySaveButtonText(appMode);
  if (els.historyList) renderOrderHistory();
}

function modeHintText(mode) {
  if (mode === "design") return "\u9002\u5408\u95e8\u5e97\u9500\u552e\u6216\u65b0\u624b\uff1a\u9009\u62e9\u6a21\u677f\u3001\u8f93\u5165\u5c3a\u5bf8\u3001\u81ea\u52a8\u751f\u6210\u677f\u4ef6\uff0c\u518d\u62a5\u4ef7\u6392\u6599\u3002";
  if (mode === "pro") return "\u9002\u5408\u719f\u7ec3\u7528\u6237\uff1a\u540c\u5c4f\u7ba1\u7406\u8ba2\u5355\u3001\u6a21\u677f\u3001\u62a5\u4ef7\u3001\u677f\u4ef6\u3001\u6392\u6599\u548c\u751f\u4ea7\u5de5\u5355\u3002";
  return "\u9002\u5408\u6709\u677f\u4ef6\u5c3a\u5bf8\u7684\u5f00\u6599\u573a\u666f\uff1a\u5f55\u5165\u677f\u4ef6\u3001\u62a5\u4ef7\u3001\u6392\u6599\u3001\u6253\u5370\u751f\u4ea7\u5355\u3002";
}

function modePrimaryActionText(mode) {
  if (mode === "design") return "\u5feb\u901f\u4f7f\u7528\u4e66\u684c\u7ec4\u5408";
  if (mode === "pro") return "\u5feb\u901f\u8f7d\u5165\u5b8c\u6574\u6848\u4f8b";
  return "\u5feb\u901f\u8bd5\u7528\u5f00\u6599\u6837\u4f8b";
}

function historySaveButtonText(mode) {
  if (mode === "design") return "\u4fdd\u5b58\u8bbe\u8ba1";
  if (mode === "pro") return "\u4fdd\u5b58\u5f53\u524d\u8ba2\u5355";
  return "\u4fdd\u5b58\u5f00\u6599";
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
    allowRotate: parseBoolean(input.allowRotate),
    edgeBanding: normalizeEdgeBanding(input.edgeBanding || input.edge || ""),
    note: String(input.note || "").trim(),
  };
}

function parseBoolean(value) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  const textValue = String(value || "").trim().toLowerCase();
  if (!textValue) return false;
  return ["1", "true", "yes", "y", "是", "可", "允许", "旋转"].includes(textValue);
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
  return `<div class="board-param-line"><span class="board-param-chip">\u677f\u6750 ${state.sheetLength}x${state.sheetWidth}mm | \u952f\u7f1d ${state.kerf}mm | \u8fb9\u8ddd ${state.margin}mm | ${escapeHtml(cuttingModeLabel(state.cuttingMode))}</span></div>`;
}

function cuttingModeLabel(mode = state.cuttingMode) {
  return (cuttingModeOptions[mode] || cuttingModeOptions.manual).label;
}

function readDesignerConfig() {
  const type = els.designType.value || "bookcase";
  const width = Math.max(300, Math.round(toNumber(els.designWidth.value, 1800)));
  const height = Math.max(300, Math.round(toNumber(els.designHeight.value, 2200)));
  const depth = Math.max(120, Math.round(toNumber(els.designDepth.value, 350)));
  const columns = Math.max(1, Math.min(8, Math.round(toNumber(els.designColumns.value, 3))));
  const shelves = Math.max(0, Math.min(10, Math.round(toNumber(els.designShelves.value, 4))));
  const deskWidth = Math.max(600, Math.round(toNumber(els.designDeskWidth.value, 1200)));
  const deskHeight = Math.max(500, Math.round(toNumber(els.designDeskHeight.value, 760)));
  const deskDepth = Math.max(300, Math.round(toNumber(els.designDeskDepth.value, 600)));
  const material = els.designMaterial.value || state.material || text.defaultMaterial;
  const thickness = Math.max(9, Math.round(toNumber(els.designThickness.value, state.sheetThickness || 18)));
  const backThickness = Math.max(3, Math.round(toNumber(els.designBackThickness.value, 9)));
  const doorMode = els.designDoorMode.value || "none";
  const drawerCount = els.designDrawers.checked
    ? Math.max(1, Math.min(4, Math.round(toNumber(els.designDrawerCount.value, 2))))
    : Math.max(0, Math.min(4, Math.round(toNumber(els.designDrawerCount.value, 0))));
  return {
    type,
    width,
    height,
    depth,
    columns,
    shelves,
    deskWidth,
    deskHeight,
    deskDepth,
    material,
    thickness,
    backThickness,
    includeBack: els.designBack.checked,
    doorMode,
    includeDoors: doorMode !== "none",
    includeDrawers: els.designDrawers.checked,
    drawerCount,
  };
}

function renderDesigner() {
  if (!els.designPreview) return;
  const currentMaterial = els.designMaterial.value || state.material || text.defaultMaterial;
  els.designMaterial.innerHTML = materialOptions(currentMaterial);
  els.designMaterial.value = currentMaterial;
  const config = readDesignerConfig();
  const parts = generateDesignParts(config);
  const totalPieces = parts.reduce((sum, item) => sum + item.quantity, 0);
  const area = parts.reduce((sum, item) => sum + item.length * item.width * item.quantity, 0);
  const mainPieces = parts.filter((item) => item.thickness === config.thickness).reduce((sum, item) => sum + item.quantity, 0);
  els.designSummary.innerHTML = `
    <span>\u6a21\u5757 ${designTypeName(config.type)}</span>
    <span>\u677f\u4ef6 ${totalPieces}\u4ef6</span>
    <span>\u4e3b\u677f ${mainPieces}\u4ef6</span>
    <span>\u7406\u8bba ${areaText(area)}</span>
  `;
  renderDesignDetails(config, parts);
  els.designPreview.innerHTML = renderDesignPreview(config);
  renderQuoteSummary(parts, { mode: "\u8bbe\u8ba1\u9884\u4f30", useResult: false });
}

function syncDesignerOptionsAndRender(event) {
  if (event && event.target === els.designDrawers && els.designDrawers.checked && toNumber(els.designDrawerCount.value, 0) === 0) {
    els.designDrawerCount.value = 2;
  }
  if (event && event.target === els.designDrawerCount) {
    els.designDrawers.checked = toNumber(els.designDrawerCount.value, 0) > 0;
  }
  renderDesigner();
}

function applySelectedDesignTemplate(templateId = "study-combo") {
  const selectedTemplate = els.designTemplateSelect ? els.designTemplateSelect.value : templateId;
  const template = designTemplates[selectedTemplate] || designTemplates[templateId] || designTemplates["study-combo"];
  els.designType.value = template.type;
  els.designWidth.value = template.width;
  els.designHeight.value = template.height;
  els.designDepth.value = template.depth;
  els.designColumns.value = template.columns;
  els.designShelves.value = template.shelves;
  els.designDeskWidth.value = template.deskWidth;
  els.designDeskHeight.value = template.deskHeight;
  els.designDeskDepth.value = template.deskDepth;
  els.designDoorMode.value = template.doorMode;
  els.designDrawerCount.value = template.drawerCount;
  els.designBack.checked = template.includeBack;
  els.designDrawers.checked = template.includeDrawers;
  renderDesigner();
}

function quickStartStudyCombo() {
  if (appMode === "quick") {
    els.sampleOrderSelect.value = "cutting-shop";
    loadSelectedSampleOrder();
    return;
  }
  if (appMode === "pro") {
    els.sampleOrderSelect.value = "display-cabinet";
    loadSelectedSampleOrder();
    return;
  }
  setAppMode("design");
  applySelectedDesignTemplate("study-combo");
  applyDesignToParts();
  focusQuoteSheet();
}

function focusQuoteSheet() {
  if (!state.parts.length) {
    applySelectedDesignTemplate();
    applyDesignToParts();
    return;
  }
  if (!state.result || state.resultDirty) {
    runNesting();
  } else {
    renderQuoteSummary(state.parts, { mode: "\u6392\u6599\u540e" });
  }
  const target = els.quoteSheetView || els.resultStatus;
  if (target && target.scrollIntoView) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderDesignDetails(config, parts) {
  if (!els.designDetails) return;
  const backParts = parts.filter((item) => item.material === "\u80cc\u677f" || item.thickness <= config.backThickness);
  const doorText = config.doorMode === "full" ? "\u5168\u9ad8\u95e8\u677f" : config.doorMode === "lower" ? "\u4e0b\u534a\u95e8\u677f" : "\u65e0\u95e8\u677f";
  const drawerText = config.drawerCount > 0 ? `${config.drawerCount}\u4e2a\u62bd\u5c49` : "\u65e0\u62bd\u5c49";
  els.designDetails.innerHTML = `
    <div class="designer-detail-row"><b>\u7ed3\u6784</b><span>${config.columns}\u5217 / \u6bcf\u5217${config.shelves}\u5757\u5c42\u677f / ${doorText} / ${drawerText}</span></div>
    <div class="designer-detail-row"><b>\u5c3a\u5bf8</b><span>\u4e3b\u4f53 ${config.width}x${config.height}x${config.depth}mm\uff0c\u684c\u9762 ${config.deskWidth}x${config.deskDepth}x${config.deskHeight}mm</span></div>
    <div class="designer-detail-row"><b>\u80cc\u677f</b><span>${config.includeBack ? `\u5df2\u542f\u7528\uff0c${backParts.reduce((sum, item) => sum + item.quantity, 0)}\u5757\uff0c\u539a${config.backThickness}mm` : "\u672a\u542f\u7528"}</span></div>
  `;
}

function readQuoteConfig() {
  return {
    mainBoardPrice: Math.max(0, toNumber(els.mainBoardPrice.value, 180)),
    backBoardPrice: Math.max(0, toNumber(els.backBoardPrice.value, 80)),
    edgePrice: Math.max(0, toNumber(els.edgePrice.value, 1.8)),
    laborPrice: Math.max(0, toNumber(els.laborPrice.value, 3)),
    wasteRate: Math.max(0, toNumber(els.wasteRate.value, 8)) / 100,
    profitRate: Math.max(0, toNumber(els.profitRate.value, 25)) / 100,
  };
}

function renderQuotePresets() {
  if (!els.quotePresetSelect) return;
  const groups = new Map();
  defaultQuotePresets.forEach((preset) => {
    if (!groups.has(preset.category)) groups.set(preset.category, []);
    groups.get(preset.category).push(preset);
  });
  els.quotePresetSelect.innerHTML = [...groups.entries()].map(([category, presets]) => {
    const options = presets.map((preset) => {
      return `<option value="${escapeAttr(preset.id)}">${escapeHtml(quotePresetLabel(preset))}</option>`;
    }).join("");
    return `<optgroup label="${escapeAttr(category)}">${options}</optgroup>`;
  }).join("");
  syncQuotePresetSuggestion();
}

function quotePresetLabel(preset) {
  return `${preset.name} | \u4e3b\u677f${moneyText(preset.mainBoardPrice)}/\u5f20 | \u5c01\u8fb9${moneyText(preset.edgePrice)}/m`;
}

function suggestedQuotePreset() {
  const material = String(state.material || text.defaultMaterial).trim();
  const thickness = Math.round(toNumber(state.sheetThickness, 18));
  return defaultQuotePresets.find((preset) => preset.material === material && preset.thickness === thickness)
    || defaultQuotePresets.find((preset) => preset.material === material)
    || defaultQuotePresets[0];
}

function syncQuotePresetSuggestion() {
  if (!els.quotePresetSelect) return;
  const preset = suggestedQuotePreset();
  if (preset) els.quotePresetSelect.value = preset.id;
  if (els.quotePriceHint && preset) {
    els.quotePriceHint.textContent = `\u5efa\u8bae\u4ef7\u683c\u65b9\u6848\uff1a${preset.name}\uff0c\u53ef\u70b9\u51fb\u201c\u5957\u7528\u201d\u66f4\u65b0\u62a5\u4ef7\u53c2\u6570\u3002`;
  }
}

function applySelectedQuotePreset() {
  if (!els.quotePresetSelect) return;
  const preset = defaultQuotePresets.find((item) => item.id === els.quotePresetSelect.value) || suggestedQuotePreset();
  if (!preset) return;
  els.mainBoardPrice.value = preset.mainBoardPrice;
  els.backBoardPrice.value = preset.backBoardPrice;
  els.edgePrice.value = preset.edgePrice;
  els.laborPrice.value = preset.laborPrice;
  els.wasteRate.value = preset.wasteRate;
  els.profitRate.value = preset.profitRate;
  if (els.quotePriceHint) {
    els.quotePriceHint.textContent = `\u5df2\u5957\u7528\uff1a${preset.name}\uff0c\u53c2\u6570\u4ecd\u53ef\u624b\u52a8\u8c03\u6574\u3002`;
  }
  renderQuoteSummary(state.parts);
}

function renderQuoteSummary(parts = state.parts, options = {}) {
  if (!els.quoteSummary) return;
  const result = options.useResult === false ? null : (state.resultDirty ? null : state.result);
  const quote = calculateQuote(parts, result, readQuoteConfig());
  if (appMode !== "pro") {
    renderSimpleQuoteSummary(parts, result, quote, options);
    return;
  }
  els.quoteSummary.innerHTML = `
    ${quoteCard("\u9884\u8ba1\u677f\u6750", `${quote.totalSheets}\u5f20`, `${quote.mainSheets}\u4e3b\u677f / ${quote.backSheets}\u80cc\u677f`)}
    ${quoteCard("\u6210\u672c\u5408\u8ba1", moneyText(quote.totalCost), `\u6750\u6599 ${moneyText(quote.materialCost)} | \u52a0\u5de5 ${moneyText(quote.laborCost)}`)}
    ${quoteCard("\u5efa\u8bae\u62a5\u4ef7", moneyText(quote.suggestedPrice), `${Math.round(quote.profitRate * 100)}%\u5229\u6da6 | ${options.mode || (state.result ? "\u6392\u6599\u540e" : "\u9884\u4f30")}`, true)}
    ${quoteCard("\u5c01\u8fb9\u957f\u5ea6", `${quote.edgeMeters.toFixed(1)}m`, `\u5c01\u8fb9\u8d39 ${moneyText(quote.edgeCost)}`)}
  `;
  renderQuoteSheet(parts, quote, options.mode || (result ? "\u6392\u6599\u540e" : "\u9884\u4f30"));
}

function renderSimpleQuoteSummary(parts, result, quote, options = {}) {
  syncSimpleQuoteInputs(quote);
  const config = readQuoteConfig();
  const simple = readSimpleQuoteValues(quote);
  const mainCost = simple.mainSheets * config.mainBoardPrice;
  const backCost = simple.backSheets * config.backBoardPrice;
  const edgeCost = simple.edgeMeters * config.edgePrice;
  const laborCost = simple.pieceCount * config.laborPrice;
  const boardCost = mainCost + backCost;
  const serviceCost = edgeCost + laborCost;
  const estimatedTotal = mainCost + backCost + edgeCost + laborCost;
  els.quoteSummary.innerHTML = `
    ${quoteCard("\u9884\u8ba1\u603b\u8d39\u7528", moneyText(estimatedTotal), "\u603b\u8d39\u7528=\u677f\u6750\u8d39+\u5c01\u8fb9+\u5f00\u6599", true, "quote-card-total")}
    ${quoteCard("\u677f\u6750\u8d39", moneyText(boardCost), `\u4e3b\u677f\uff1a${moneyText(mainCost)}=${stripMoneyText(config.mainBoardPrice)}\u00d7${simple.mainSheets}<br>\u80cc\u677f\uff1a${moneyText(backCost)}=${stripMoneyText(config.backBoardPrice)}\u00d7${simple.backSheets}`, false, "quote-card-simple")}
    ${quoteCard("\u5c01\u8fb9+\u5f00\u6599", moneyText(serviceCost), `\u5c01\u8fb9\uff1a${moneyText(edgeCost)}=${stripMoneyText(config.edgePrice)}\u00d7${simple.edgeMeters.toFixed(1)}<br>\u5f00\u6599\uff1a${moneyText(laborCost)}=${stripMoneyText(config.laborPrice)}\u00d7${simple.pieceCount}`, false, "quote-card-simple")}
  `;
}

function syncSimpleQuoteInputs(quote) {
  const inputs = simpleQuoteInputs();
  if (!inputs.length || inputs.includes(document.activeElement)) return;
  const key = `${quote.mainSheets}|${quote.backSheets}|${quote.edgeMeters.toFixed(1)}|${quote.pieceCount}`;
  if (els.quoteSummary.dataset.simpleBaseKey === key) return;
  els.simpleMainSheets.value = quote.mainSheets;
  els.simpleBackSheets.value = quote.backSheets;
  els.simpleEdgeMeters.value = quote.edgeMeters.toFixed(1);
  els.simplePieceCount.value = quote.pieceCount;
  els.quoteSummary.dataset.simpleBaseKey = key;
}

function readSimpleQuoteValues(quote) {
  return {
    mainSheets: Math.max(0, Math.round(toNumber(els.simpleMainSheets?.value, quote.mainSheets))),
    backSheets: Math.max(0, Math.round(toNumber(els.simpleBackSheets?.value, quote.backSheets))),
    edgeMeters: Math.max(0, toNumber(els.simpleEdgeMeters?.value, quote.edgeMeters)),
    pieceCount: Math.max(0, Math.round(toNumber(els.simplePieceCount?.value, quote.pieceCount))),
  };
}

function simpleQuoteInputs() {
  return [els.simpleMainSheets, els.simpleBackSheets, els.simpleEdgeMeters, els.simplePieceCount].filter(Boolean);
}

function renderQuoteSheet(parts = state.parts, quote = calculateQuote(parts, state.resultDirty ? null : state.result, readQuoteConfig()), mode = "\u9884\u4f30") {
  if (!els.quoteSheetView) return;
  els.quoteSheetView.innerHTML = buildQuoteSheetHtml(parts, quote, mode);
}

function buildQuoteSheetHtml(parts, quote, mode = "\u9884\u4f30") {
  const normalized = (parts || []).map(normalizePart);
  const generatedAt = new Date().toLocaleString();
  const totalPieces = normalized.reduce((sum, item) => sum + item.quantity, 0);
  const totalArea = normalized.reduce((sum, item) => sum + item.length * item.width * item.quantity, 0);
  const productText = inferProductName();
  const materialGroups = renderBoardGroupLine(normalized, { showDetails: true }) || escapeHtml(state.material || text.defaultMaterial);
  return `
    <section class="quote-doc">
      <div class="quote-doc-title">
        <div>
          <h3>\u5ba2\u6237\u62a5\u4ef7\u5355</h3>
          <span>${escapeHtml(state.orderName || text.unnamedOrder)}</span>
        </div>
        <span>${escapeHtml(generatedAt)} | ${escapeHtml(mode)}</span>
      </div>
      <div class="quote-doc-meta">
        ${quoteDocBox("\u5ba2\u6237", state.customerName || "-")}
        ${quoteDocBox("\u4ea7\u54c1", productText)}
        ${quoteDocBox("\u72b6\u6001", orderStatusLabel(state.orderStatus))}
        ${quoteDocBox("\u4ea4\u671f", formatDueDate(state.orderDueDate))}
        ${quoteDocBox("\u677f\u6750", `${state.sheetLength}x${state.sheetWidth}mm`)}
        ${quoteDocBox("\u677f\u4ef6", `${totalPieces}\u4ef6`)}
      </div>
      <div class="board-group-line">${materialGroups}</div>
      <table class="quote-doc-table">
        <thead>
          <tr>
            <th>\u8d39\u7528\u9879</th>
            <th>\u6570\u91cf/\u53c2\u6570</th>
            <th>\u91d1\u989d</th>
            <th>\u8bf4\u660e</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>\u4e3b\u677f</td><td>${quote.mainSheets}\u5f20</td><td>${moneyText(quote.mainBoardCost)}</td><td>${moneyText(readQuoteConfig().mainBoardPrice)}/\u5f20</td></tr>
          <tr><td>\u80cc\u677f</td><td>${quote.backSheets}\u5f20</td><td>${moneyText(quote.backBoardCost)}</td><td>${moneyText(readQuoteConfig().backBoardPrice)}/\u5f20</td></tr>
          <tr><td>\u5c01\u8fb9</td><td>${quote.edgeMeters.toFixed(1)}m</td><td>${moneyText(quote.edgeCost)}</td><td>${moneyText(readQuoteConfig().edgePrice)}/m</td></tr>
          <tr><td>\u52a0\u5de5</td><td>${quote.pieceCount}\u4ef6</td><td>${moneyText(quote.laborCost)}</td><td>${moneyText(readQuoteConfig().laborPrice)}/\u4ef6</td></tr>
        </tbody>
      </table>
      <div class="quote-doc-total">
        ${quoteDocBox("\u7406\u8bba\u9762\u79ef", areaText(totalArea))}
        ${quoteDocBox("\u6210\u672c\u5408\u8ba1", moneyText(quote.totalCost))}
        ${quoteDocBox("\u76ee\u6807\u5229\u6da6", `${Math.round(quote.profitRate * 100)}%`)}
        ${quoteDocBox("\u5efa\u8bae\u62a5\u4ef7", moneyText(quote.suggestedPrice))}
      </div>
      <div class="quote-doc-note">
        <span>\u5907\u6ce8\uff1a\u62a5\u4ef7\u4e3a\u7cfb\u7edf\u4f30\u7b97\uff0c\u5b9e\u9645\u4ef7\u683c\u9700\u7ed3\u5408\u4e94\u91d1\u3001\u8fd0\u8f93\u3001\u5b89\u88c5\u548c\u73b0\u573a\u5c3a\u5bf8\u590d\u6838\u3002</span>
        <span>\u4ef7\u683c\u6709\u6548\u671f\uff1a7\u5929\u3002\u751f\u4ea7\u524d\u8bf7\u590d\u6838\u677f\u6750\u539a\u5ea6\u3001\u5c01\u8fb9\u65b9\u5411\u548c\u7eb9\u7406\u65b9\u5411\u3002</span>
      </div>
    </section>
  `;
}

function quoteDocBox(label, value) {
  return `<div class="quote-doc-box"><span>${label}</span><b>${escapeHtml(value)}</b></div>`;
}

function inferProductName() {
  const order = String(state.orderName || "");
  if (order.includes("\u4e66\u684c") && order.includes("\u4e66\u67dc")) return "\u4e66\u67dc+\u4e66\u684c";
  if (order.includes("\u4e66\u684c")) return "\u4e66\u684c";
  if (order.includes("\u4e66\u67dc")) return "\u4e66\u67dc";
  if (order.includes("\u8863\u67dc")) return "\u8863\u67dc";
  return "\u677f\u5f0f\u5b9a\u5236";
}

function calculateQuote(parts, result, config) {
  const normalized = (parts || []).map(normalizePart);
  const sheetArea = Math.max(1, state.sheetLength * state.sheetWidth);
  const grouped = new Map();
  normalized.forEach((item) => {
    const key = item.material === "\u80cc\u677f" || item.thickness <= 9 ? "back" : "main";
    const current = grouped.get(key) || { area: 0, pieces: 0 };
    current.area += item.length * item.width * item.quantity;
    current.pieces += item.quantity;
    grouped.set(key, current);
  });
  let mainSheets = Math.ceil(((grouped.get("main")?.area || 0) * (1 + config.wasteRate)) / sheetArea);
  let backSheets = Math.ceil(((grouped.get("back")?.area || 0) * (1 + config.wasteRate)) / sheetArea);
  if (result && result.sheets && result.sheets.length) {
    mainSheets = result.sheets.filter((sheet) => !(sheet.material === "\u80cc\u677f" || Number(sheet.thickness) <= 9)).length;
    backSheets = result.sheets.filter((sheet) => sheet.material === "\u80cc\u677f" || Number(sheet.thickness) <= 9).length;
  }
  const pieceCount = normalized.reduce((sum, item) => sum + item.quantity, 0);
  const edgeMeters = normalized.reduce((sum, item) => sum + edgeLengthForPart(item), 0) / 1000;
  const mainBoardCost = mainSheets * config.mainBoardPrice;
  const backBoardCost = backSheets * config.backBoardPrice;
  const materialCost = mainBoardCost + backBoardCost;
  const edgeCost = edgeMeters * config.edgePrice;
  const laborCost = pieceCount * config.laborPrice;
  const totalCost = materialCost + edgeCost + laborCost;
  const suggestedPrice = Math.ceil(totalCost * (1 + config.profitRate));
  return {
    mainSheets,
    backSheets,
    totalSheets: mainSheets + backSheets,
    pieceCount,
    edgeMeters,
    mainBoardCost,
    backBoardCost,
    materialCost,
    edgeCost,
    laborCost,
    totalCost,
    profitRate: config.profitRate,
    suggestedPrice,
  };
}

function edgeLengthForPart(item) {
  const edge = normalizeEdgeBanding(item.edgeBanding);
  if (!edge) return 0;
  let length = 0;
  if (edge.includes("F")) length += item.length;
  if (edge.includes("B")) length += item.length;
  if (edge.includes("L")) length += item.width;
  if (edge.includes("R")) length += item.width;
  return length * item.quantity;
}

function quoteCard(label, value, detail = "", strong = false, extraClass = "") {
  return `<div class="quote-card ${strong ? "is-strong" : ""} ${extraClass}"><span>${label}</span><b>${value}</b>${detail ? `<small>${detail}</small>` : ""}</div>`;
}

function currentQuoteParts() {
  if (appMode === "design" && (!state.parts.length || state.resultDirty)) {
    return generateDesignParts(readDesignerConfig());
  }
  return state.parts;
}

function currentQuoteUseResult() {
  return Boolean(state.result && !state.resultDirty && state.parts.length);
}

function moneyText(value) {
  return `\u00a5${Math.round(value)}`;
}

function unitMoneyText(value) {
  const num = Number(value) || 0;
  return `\u00a5${Number.isInteger(num) ? num : num.toFixed(1)}`;
}

function stripMoneyText(value) {
  const num = Number(value) || 0;
  return Number.isInteger(num) ? String(num) : num.toFixed(1);
}

function designTypeName(type) {
  const map = {
    bookcase: "\u200e\u4e66\u67dc",
    desk: "\u4e66\u684c",
    combo: "\u4e66\u67dc+\u4e66\u684c",
  };
  return map[type] || map.bookcase;
}

function applyDesignToParts() {
  readSettings();
  const config = readDesignerConfig();
  const parts = generateDesignParts(config).map(normalizePart);
  if (!parts.length) return;
  state.orderName = `${designTypeName(config.type)}-${config.width}x${config.height}x${config.depth}`;
  state.material = config.material;
  state.sheetThickness = config.thickness;
  state.parts = parts;
  state.result = null;
  writeSettings();
  runNesting();
}

function generateDesignParts(config) {
  if (config.type === "desk") return generateDeskParts(config, "\u4e66\u684c");
  if (config.type === "combo") return generateComboParts(config);
  return generateBookcaseParts(config, "\u4e66\u67dc");
}

function generateBookcaseParts(config, prefix, overrides = {}) {
  const width = Math.max(300, Math.round(overrides.width || config.width));
  const height = Math.max(300, Math.round(overrides.height || config.height));
  const depth = Math.max(120, Math.round(overrides.depth || config.depth));
  const columns = Math.max(1, Math.round(overrides.columns || config.columns));
  const shelves = Math.max(0, Math.round(overrides.shelves ?? config.shelves));
  const material = overrides.material || config.material;
  const thickness = Math.max(1, Math.round(overrides.thickness || config.thickness));
  const backThickness = Math.max(1, Math.round(overrides.backThickness || config.backThickness));
  const clearWidth = Math.max(80, width - thickness * (columns + 1));
  const columnWidth = Math.max(80, Math.floor(clearWidth / columns));
  const shelfDepth = Math.max(80, depth - 20);
  const parts = [
    part(`${prefix}-\u5de6\u4fa7\u677f`, height, depth, 1, material, thickness, false, "F,B", "\u7eb9\u7406\u7ad6\u5411"),
    part(`${prefix}-\u53f3\u4fa7\u677f`, height, depth, 1, material, thickness, false, "F,B", "\u7eb9\u7406\u7ad6\u5411"),
    part(`${prefix}-\u9876\u677f`, width, depth, 1, material, thickness, true, "F", ""),
    part(`${prefix}-\u5e95\u677f`, width, depth, 1, material, thickness, true, "F", ""),
  ];
  if (columns > 1) {
    parts.push(part(`${prefix}-\u4e2d\u7acb\u677f`, height, depth, columns - 1, material, thickness, false, "F,B", "\u7eb9\u7406\u7ad6\u5411"));
  }
  if (shelves > 0) {
    parts.push(part(`${prefix}-\u5c42\u677f`, columnWidth, shelfDepth, columns * shelves, material, thickness, true, "F", ""));
  }
  if (config.includeBack) {
    parts.push(...generateBackPanelParts(prefix, height, width, backThickness));
  }
  if (config.doorMode && config.doorMode !== "none") {
    const doorHeight = config.doorMode === "full"
      ? Math.max(320, height - thickness * 2 - 6)
      : Math.max(260, Math.floor((height - thickness * 2) * 0.48));
    const doorWidth = Math.max(120, Math.floor((width - 6) / 2));
    const doorName = config.doorMode === "full" ? "\u5168\u9ad8\u95e8\u677f" : "\u4e0b\u95e8\u677f";
    parts.push(part(`${prefix}-${doorName}`, doorHeight, doorWidth, 2, material, thickness, false, "F,B,L,R", "\u95e8\u7f1d\u9700\u73b0\u573a\u590d\u6838"));
  }
  if (config.drawerCount > 0) {
    parts.push(...generateDrawerParts(config, prefix, columnWidth, shelfDepth));
  }
  return parts;
}

function generateBackPanelParts(prefix, height, width, backThickness) {
  const maxBackWidth = Math.max(300, state.sheetWidth - state.margin * 2);
  const count = Math.max(1, Math.ceil(width / maxBackWidth));
  const panelWidth = Math.ceil(width / count);
  return [
    part(`${prefix}-\u80cc\u677f`, height, panelWidth, count, "\u80cc\u677f", backThickness, false, "", count > 1 ? `\u80cc\u677f\u5206${count}\u5757` : ""),
  ];
}

function generateDeskParts(config, prefix, overrides = {}) {
  const width = Math.max(600, Math.round(overrides.width || config.deskWidth || config.width));
  const height = Math.max(500, Math.round(overrides.height || config.deskHeight));
  const depth = Math.max(300, Math.round(overrides.depth || config.deskDepth || config.depth));
  const material = overrides.material || config.material;
  const thickness = Math.max(1, Math.round(overrides.thickness || config.thickness));
  const parts = [
    part(`${prefix}-\u684c\u9762`, width, depth, 1, material, thickness, true, "F,B,L,R", ""),
    part(`${prefix}-\u5de6\u4fa7\u677f`, height - thickness, depth, 1, material, thickness, false, "F", ""),
    part(`${prefix}-\u53f3\u4fa7\u677f`, height - thickness, depth, 1, material, thickness, false, "F", ""),
    part(`${prefix}-\u540e\u6321\u677f`, Math.max(120, width - thickness * 2), 260, 1, material, thickness, true, "F", "\u589e\u52a0\u684c\u4f53\u7a33\u5b9a"),
  ];
  if (config.drawerCount > 0) {
    parts.push(...generateDrawerParts(config, prefix, Math.min(420, width - thickness * 2), Math.max(260, depth - 80)));
  }
  return parts;
}

function generateComboParts(config) {
  const sideWidth = Math.max(360, Math.floor((config.width - config.deskWidth) / 2));
  const deskWidth = Math.max(600, Math.min(config.deskWidth, config.width - sideWidth));
  const parts = [
    ...generateBookcaseParts(config, "\u5de6\u4e66\u67dc", { width: sideWidth, columns: 1, shelves: config.shelves }),
    ...generateDeskParts(config, "\u4e2d\u95f4\u4e66\u684c", { width: deskWidth, height: config.deskHeight, depth: config.deskDepth }),
  ];
  if (config.width - sideWidth - deskWidth >= 300) {
    parts.push(...generateBookcaseParts(config, "\u53f3\u4e66\u67dc", { width: config.width - sideWidth - deskWidth, columns: 1, shelves: config.shelves }));
  }
  return parts;
}

function generateDrawerParts(config, prefix, boxWidth, boxDepth) {
  const material = config.material;
  const thickness = config.thickness;
  const drawerWidth = Math.max(260, Math.floor(boxWidth));
  const drawerDepth = Math.max(220, Math.floor(boxDepth - 40));
  const drawerHeight = 160;
  const count = Math.max(1, Math.min(4, Math.round(toNumber(config.drawerCount, 1))));
  return [
    part(`${prefix}-\u62bd\u5c49\u9762\u677f`, drawerWidth, 180, count, material, thickness, true, "F,B,L,R", ""),
    part(`${prefix}-\u62bd\u5c49\u4fa7\u677f`, drawerDepth, drawerHeight, count * 2, material, thickness, true, "F", ""),
    part(`${prefix}-\u62bd\u5c49\u524d\u540e\u677f`, Math.max(180, drawerWidth - thickness * 2), drawerHeight, count * 2, material, thickness, true, "F", ""),
    part(`${prefix}-\u62bd\u5c49\u5e95\u677f`, Math.max(180, drawerWidth - thickness * 2), drawerDepth, count, "\u80cc\u677f", Math.min(9, config.backThickness), true, "", ""),
  ];
}

function renderDesignPreview(config) {
  const pad = 28;
  const viewWidth = 540;
  const viewHeight = 260;
  const scale = Math.min((viewWidth - pad * 2) / Math.max(config.width, config.deskWidth), (viewHeight - pad * 2) / Math.max(config.height, config.deskHeight));
  const w = Math.max(1, Math.round(config.width * scale));
  const h = Math.max(1, Math.round(config.height * scale));
  const x = Math.round((viewWidth - w) / 2);
  const y = Math.round((viewHeight - h) / 2);
  const dimensionBox = getDesignDimensionBox(config, x, y, w, h, scale, viewWidth);
  const color = "#246bfe";
  const line = "#647084";
  const fills = {
    body: "#e8f0ff",
    desk: "#e9f8f0",
    back: "#f7efe4",
    door: "#fff7db",
    drawer: "#fce7f3",
  };
  const content = config.type === "desk"
    ? previewDesk(config, x, y, scale, fills, line)
    : config.type === "combo"
      ? previewCombo(config, x, y, scale, fills, line)
      : previewBookcase(config, x, y, w, h, scale, fills, line);
  return `
    <svg viewBox="0 0 ${viewWidth} ${viewHeight}" role="img" aria-label="design preview">
      <rect x="0" y="0" width="${viewWidth}" height="${viewHeight}" fill="#f8fafc" />
      ${content}
      ${previewDimensionMarks(dimensionBox, viewWidth, viewHeight, line)}
      <text x="${pad}" y="${viewHeight - 12}" font-size="12" fill="${line}">${escapeHtml(designTypeName(config.type))} ${config.width}x${config.height}x${config.depth}mm</text>
      <text x="${viewWidth - pad}" y="${viewHeight - 12}" font-size="12" text-anchor="end" fill="${color}">${escapeHtml(config.material)} ${config.thickness}mm</text>
    </svg>
  `;
}

function getDesignDimensionBox(config, x, y, w, h, scale, viewWidth) {
  if (config.type !== "desk") {
    return { x, y, w, h, widthLabel: `${config.width}mm`, heightLabel: `${config.height}mm` };
  }
  const deskW = Math.max(1, Math.round(config.deskWidth * scale));
  const deskH = Math.max(1, Math.round(config.deskHeight * scale));
  return {
    x: Math.round((viewWidth - deskW) / 2),
    y: y + Math.max(0, Math.round((config.height * scale - deskH) * 0.7)),
    w: deskW,
    h: deskH,
    widthLabel: `${config.deskWidth}mm`,
    heightLabel: `${config.deskHeight}mm`,
  };
}

function previewDimensionMarks(box, viewWidth, viewHeight, line) {
  const { x, y, w, h, widthLabel, heightLabel } = box;
  const widthY = Math.max(14, y - 12);
  const heightX = Math.min(viewWidth - 18, x + w + 14);
  return `
    <line x1="${x}" y1="${widthY}" x2="${x + w}" y2="${widthY}" stroke="${line}" stroke-width="1" />
    <line x1="${x}" y1="${widthY - 4}" x2="${x}" y2="${widthY + 4}" stroke="${line}" stroke-width="1" />
    <line x1="${x + w}" y1="${widthY - 4}" x2="${x + w}" y2="${widthY + 4}" stroke="${line}" stroke-width="1" />
    <text x="${x + w / 2}" y="${widthY - 4}" font-size="11" text-anchor="middle" fill="${line}">${widthLabel}</text>
    <line x1="${heightX}" y1="${y}" x2="${heightX}" y2="${y + h}" stroke="${line}" stroke-width="1" />
    <line x1="${heightX - 4}" y1="${y}" x2="${heightX + 4}" y2="${y}" stroke="${line}" stroke-width="1" />
    <line x1="${heightX - 4}" y1="${y + h}" x2="${heightX + 4}" y2="${y + h}" stroke="${line}" stroke-width="1" />
    <text x="${heightX + 4}" y="${y + h / 2}" font-size="11" fill="${line}" transform="rotate(90 ${heightX + 4} ${y + h / 2})">${heightLabel}</text>
  `;
}

function previewBookcase(config, x, y, w, h, scale, fills, line) {
  const t = Math.max(3, config.thickness * scale);
  const colW = (w - t * (config.columns + 1)) / config.columns;
  const shelfGap = (h - t * 2) / (config.shelves + 1);
  let lines = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${fills.body}" stroke="${line}" stroke-width="2" />`;
  for (let i = 1; i < config.columns; i += 1) {
    const vx = x + t + i * colW + (i - 1) * t;
    lines += `<rect x="${vx}" y="${y}" width="${t}" height="${h}" fill="#fff" stroke="${line}" stroke-width="1" />`;
  }
  for (let row = 1; row <= config.shelves; row += 1) {
    const sy = y + t + row * shelfGap;
    lines += `<rect x="${x}" y="${sy}" width="${w}" height="${t}" fill="#fff" stroke="${line}" stroke-width="1" />`;
  }
  if (config.doorMode && config.doorMode !== "none") {
    const doorY = config.doorMode === "full" ? y + t : y + h * 0.52;
    const doorH = config.doorMode === "full" ? h - t * 2 : h * 0.42;
    lines += `<rect x="${x + t}" y="${doorY}" width="${(w - t * 2) / 2}" height="${doorH}" fill="${fills.door}" stroke="${line}" stroke-width="1" />`;
    lines += `<rect x="${x + w / 2}" y="${doorY}" width="${(w - t * 2) / 2}" height="${doorH}" fill="${fills.door}" stroke="${line}" stroke-width="1" />`;
  }
  if (config.drawerCount > 0) {
    lines += `<rect x="${x + t + 6}" y="${y + h - h * 0.2}" width="${Math.max(36, colW - 12)}" height="${h * 0.08}" fill="${fills.drawer}" stroke="${line}" />`;
    lines += `<rect x="${x + t + 6}" y="${y + h - h * 0.1}" width="${Math.max(36, colW - 12)}" height="${h * 0.08}" fill="${fills.drawer}" stroke="${line}" />`;
  }
  return lines;
}

function previewDesk(config, x, y, scale, fills, line) {
  const w = Math.max(1, Math.round(config.deskWidth * scale));
  const h = Math.max(1, Math.round(config.deskHeight * scale));
  const d = Math.max(18, Math.round(config.deskDepth * scale * 0.18));
  const t = Math.max(4, config.thickness * scale);
  const dx = Math.round((540 - w) / 2);
  const dy = y + Math.max(0, Math.round((config.height * scale - h) * 0.7));
  let lines = `<rect x="${dx}" y="${dy}" width="${w}" height="${h}" fill="none" stroke="${line}" stroke-width="2" />`;
  lines += `<rect x="${dx}" y="${dy}" width="${w}" height="${t}" fill="${fills.desk}" stroke="${line}" />`;
  lines += `<rect x="${dx}" y="${dy + t}" width="${t}" height="${h - t}" fill="${fills.desk}" stroke="${line}" />`;
  lines += `<rect x="${dx + w - t}" y="${dy + t}" width="${t}" height="${h - t}" fill="${fills.desk}" stroke="${line}" />`;
  lines += `<rect x="${dx + t}" y="${dy + h * 0.38}" width="${w - t * 2}" height="${d}" fill="${fills.desk}" stroke="${line}" />`;
  if (config.drawerCount > 0) {
    lines += `<rect x="${dx + t + 10}" y="${dy + t + 18}" width="${Math.min(130, w * 0.35)}" height="28" fill="${fills.drawer}" stroke="${line}" />`;
    lines += `<rect x="${dx + t + 10}" y="${dy + t + 52}" width="${Math.min(130, w * 0.35)}" height="28" fill="${fills.drawer}" stroke="${line}" />`;
  }
  return lines;
}

function previewCombo(config, x, y, scale, fills, line) {
  const sideWidth = Math.max(360, Math.floor((config.width - config.deskWidth) / 2));
  const deskWidth = Math.max(600, Math.min(config.deskWidth, config.width - sideWidth));
  const leftW = Math.max(1, Math.round(sideWidth * scale));
  const deskW = Math.max(1, Math.round(deskWidth * scale));
  const rightW = Math.max(0, Math.round((config.width - sideWidth - deskWidth) * scale));
  const h = Math.max(1, Math.round(config.height * scale));
  const deskH = Math.max(1, Math.round(config.deskHeight * scale));
  const deskY = y + h - deskH;
  const t = Math.max(4, config.thickness * scale);
  const left = previewBookcase({ ...config, width: sideWidth, columns: 1 }, x, y, leftW, h, scale, fills, line);
  let desk = `<rect x="${x + leftW}" y="${deskY}" width="${deskW}" height="${deskH}" fill="none" stroke="${line}" stroke-width="2" />`;
  desk += `<rect x="${x + leftW}" y="${deskY}" width="${deskW}" height="${t}" fill="${fills.desk}" stroke="${line}" />`;
  desk += `<rect x="${x + leftW}" y="${deskY + t}" width="${t}" height="${deskH - t}" fill="${fills.desk}" stroke="${line}" />`;
  desk += `<rect x="${x + leftW + deskW - t}" y="${deskY + t}" width="${t}" height="${deskH - t}" fill="${fills.desk}" stroke="${line}" />`;
  desk += `<rect x="${x + leftW + t}" y="${deskY + deskH * 0.38}" width="${deskW - t * 2}" height="${Math.max(16, config.deskDepth * scale * 0.16)}" fill="${fills.desk}" stroke="${line}" />`;
  if (config.drawerCount > 0) {
    desk += `<rect x="${x + leftW + t + 8}" y="${deskY + t + 16}" width="${Math.min(120, deskW * 0.36)}" height="24" fill="${fills.drawer}" stroke="${line}" />`;
    desk += `<rect x="${x + leftW + t + 8}" y="${deskY + t + 46}" width="${Math.min(120, deskW * 0.36)}" height="24" fill="${fills.drawer}" stroke="${line}" />`;
  }
  const right = rightW > 0 ? previewBookcase({ ...config, width: config.width - sideWidth - deskWidth, columns: 1 }, x + leftW + deskW, y, rightW, h, scale, fills, line) : "";
  return `${left}${desk}${right}`;
}

function renderPrintPartsList() {
  if (!els.printPartsList) return;
  els.printPartsList.innerHTML = renderPrintablePartsList();
}

function bindEvents() {
  els.modeButtons.forEach((button) => {
    button.addEventListener("click", () => setAppMode(button.dataset.mode));
  });

  document.getElementById("addPartBtn").addEventListener("click", () => {
    readSettings();
    const previous = state.parts[state.parts.length - 1];
    state.parts.push(part(
      "\u65b0\u677f\u4ef6",
      previous?.length || 600,
      previous?.width || 300,
      1,
      previous?.material || state.material,
      previous?.thickness || state.sheetThickness,
      previous?.allowRotate ?? true,
      previous?.edgeBanding || "",
      ""
    ));
    markResultDirty();
    renderParts();
    renderQuoteSummary(state.parts);
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
  document.getElementById("applyStockPresetBtn").addEventListener("click", () => applySelectedStockPreset());
  if (els.quickStockPresetSelect) {
    els.quickStockPresetSelect.addEventListener("change", () => applySelectedStockPreset(els.quickStockPresetSelect));
  }
  document.getElementById("saveStockPresetBtn").addEventListener("click", saveCurrentStockPreset);
  document.getElementById("applyQuotePresetBtn").addEventListener("click", applySelectedQuotePreset);
  document.getElementById("saveOrderHistoryBtn").addEventListener("click", saveCurrentOrderHistory);
  document.getElementById("quickStudyComboBtn").addEventListener("click", quickStartStudyCombo);
  document.getElementById("quickQuoteBtn").addEventListener("click", focusQuoteSheet);
  const applyDesignTemplateBtn = document.getElementById("applyDesignTemplateBtn");
  if (applyDesignTemplateBtn) applyDesignTemplateBtn.addEventListener("click", () => applySelectedDesignTemplate());
  document.getElementById("generateDesignBtn").addEventListener("click", applyDesignToParts);
  document.getElementById("exportBtn").addEventListener("click", exportCsv);
  document.getElementById("importBtn").addEventListener("click", openImportDialog);
  document.getElementById("exportCutListBtn").addEventListener("click", exportCutListCsv);
  document.getElementById("exportLabelsBtn").addEventListener("click", exportLabelsCsv);
  document.getElementById("exportReportBtn").addEventListener("click", exportReportHtml);
  document.getElementById("printQuoteBtn").addEventListener("click", printQuoteSheet);
  document.getElementById("exportQuoteBtn").addEventListener("click", exportQuoteHtml);
  document.getElementById("printProductionBtn").addEventListener("click", printProductionSheet);
  document.getElementById("exportProductionBtn").addEventListener("click", exportProductionHtml);
  document.getElementById("fullscreenLayoutBtn").addEventListener("click", openLayoutFullscreen);
  document.getElementById("cutSequenceBtn").addEventListener("click", openCutSequenceDialog);
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

  [
    els.designType,
    els.designWidth,
    els.designHeight,
    els.designDepth,
    els.designColumns,
    els.designShelves,
    els.designDeskWidth,
    els.designDeskHeight,
    els.designDeskDepth,
    els.designMaterial,
    els.designThickness,
    els.designBackThickness,
    els.designBack,
    els.designDoorMode,
    els.designDrawerCount,
    els.designDrawers,
  ].forEach((input) => {
    input.addEventListener("input", syncDesignerOptionsAndRender);
    input.addEventListener("change", syncDesignerOptionsAndRender);
  });

  [
    els.mainBoardPrice,
    els.backBoardPrice,
    els.edgePrice,
    els.laborPrice,
    els.wasteRate,
    els.profitRate,
  ].forEach((input) => {
    input.addEventListener("input", () => renderQuoteSummary(currentQuoteParts(), { useResult: currentQuoteUseResult() }));
    input.addEventListener("change", () => renderQuoteSummary(currentQuoteParts(), { useResult: currentQuoteUseResult() }));
  });

  simpleQuoteInputs().forEach((input) => {
    input.addEventListener("input", () => renderQuoteSummary(currentQuoteParts(), { useResult: currentQuoteUseResult() }));
    input.addEventListener("change", () => renderQuoteSummary(currentQuoteParts(), { useResult: currentQuoteUseResult() }));
  });
  if (els.simpleCalculateBtn) {
    els.simpleCalculateBtn.addEventListener("click", () => renderQuoteSummary(currentQuoteParts(), { useResult: currentQuoteUseResult() }));
  }

  [els.sheetLength, els.sheetWidth, els.sheetThickness, els.material, els.margin, els.cuttingMode, els.quickCuttingMode].filter(Boolean).forEach((input) => {
    input.addEventListener("input", () => {
      readSettings();
      if (input === els.cuttingMode || input === els.quickCuttingMode) writeSettings();
      if (input === els.material || input === els.sheetThickness) {
        els.designMaterial.value = state.material;
        els.designThickness.value = state.sheetThickness;
        renderDesigner();
      }
      markResultDirty();
      renderPartsSummary();
      syncQuotePresetSuggestion();
      syncStockPresetSelects();
    });
    input.addEventListener("change", () => {
      readSettings();
      if (input === els.cuttingMode || input === els.quickCuttingMode) writeSettings();
      markResultDirty();
      renderPartsSummary();
      syncStockPresetSelects();
    });
  });

  Object.values(manualWeightInputs()).filter(Boolean).forEach((input) => {
    input.addEventListener("input", () => {
      state.manualWeights = readManualWeights();
      markResultDirty();
    });
    input.addEventListener("change", () => {
      state.manualWeights = readManualWeights();
      markResultDirty();
    });
  });

  [els.orderName, els.customerName, els.orderStatus, els.orderDueDate].forEach((input) => {
    const eventName = input === els.orderStatus || input === els.orderDueDate ? "change" : "input";
    input.addEventListener(eventName, () => {
      readSettings();
      renderQuoteSummary(state.parts);
      renderOrderDashboard();
    });
  });

  els.orderHistorySearch.addEventListener("input", () => {
    historyFilters.query = els.orderHistorySearch.value.trim();
    renderOrderHistory();
  });

  els.orderHistoryStatusFilter.addEventListener("change", () => {
    historyFilters.status = els.orderHistoryStatusFilter.value || "all";
    renderOrderHistory();
  });

  els.orderHistoryDueFilter.addEventListener("change", () => {
    historyFilters.dueOnly = els.orderHistoryDueFilter.checked;
    renderOrderHistory();
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
    renderQuoteSummary(state.parts);
  });

  els.partsBody.addEventListener("change", (event) => {
    const target = event.target;
    const index = Number(target.dataset.index);
    const field = target.dataset.field;
    if (!field || !Number.isInteger(index)) return;
    if (target.type === "checkbox") {
      state.parts[index].allowRotate = target.checked;
      markResultDirty();
      renderQuoteSummary(state.parts);
      return;
    }
    if (target.tagName === "SELECT") {
      state.parts[index][field] = target.value;
      state.parts[index] = normalizePart(state.parts[index]);
      markResultDirty();
      renderParts();
      renderQuoteSummary(state.parts);
    }
  });

  els.partsBody.addEventListener("click", (event) => {
    const deleteIndex = event.target.dataset.delete;
    if (deleteIndex === undefined) return;
    state.parts.splice(Number(deleteIndex), 1);
    markResultDirty();
    renderParts();
    renderQuoteSummary(state.parts);
  });

  els.historyList.addEventListener("click", (event) => {
    const loadId = event.target.dataset.loadHistory;
    const deleteId = event.target.dataset.deleteHistory;
    const statusId = event.target.dataset.statusHistory;
    if (statusId) return;
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

  els.historyList.addEventListener("change", (event) => {
    const statusId = event.target.dataset.statusHistory;
    if (!statusId) return;
    updateOrderHistoryStatus(statusId, event.target.value);
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
    cuttingMode: state.cuttingMode,
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

function nestParts({ sheetLength, sheetWidth, kerf, margin, cuttingMode = "manual", parts }) {
  const mode = cuttingModeOptions[cuttingMode] ? cuttingMode : "manual";
  const result = mode === "cnc"
    ? nestPartsFreeRectOptimized({ sheetLength, sheetWidth, kerf, margin, parts })
    : nestPartsGuillotineOptimized({ sheetLength, sheetWidth, kerf, margin, parts }, mode);
  result.cuttingMode = mode;
  result.algorithmNote = cuttingModeOptions[mode].algorithm;
  if (mode !== "cnc") result.weightAnalysis = manualWeightAnalysis(activeCutWeights(mode));
  return result;
}

function manualWeightAnalysis(weights = activeManualWeights()) {
  return [
    `\u677f\u6750\u5f20\u6570 ${weights.sheetCount}%`,
    `\u5c11\u8c03\u6321\u5c3a ${weights.fenceChanges}%`,
    `\u5229\u7528\u7387 ${weights.materialYield}%`,
    `\u53ef\u4fdd\u7559\u4f59\u6599 ${weights.reusableOffcut}%`,
    `\u5c11\u65cb\u8f6c ${weights.rotation}%`,
    `\u5207\u5272\u957f\u5ea6 ${weights.cutLength}%`,
    `\u603b\u4ef7\u6bd4\u91cd ${weights.totalCost}%`,
    `\u6bcf\u5200 \u00a5${weights.cutPrice}`,
  ];
}

function nestPartsFreeRectOptimized(params) {
  const strategies = ["area", "longSide", "shortSide", "height", "width"];
  const results = strategies.map((strategy) => {
    const result = nestPartsFreeRect({ ...params, strategy });
    result.algorithmStrategy = strategy;
    result.optimizationScore = scoreFreeRectResult(result);
    return result;
  });
  return results.sort((a, b) => a.optimizationScore - b.optimizationScore)[0];
}

function scoreFreeRectResult(result) {
  const freeRects = result.sheets.flatMap((sheet) => sheet.freeRects || []);
  const smallFragments = freeRects.filter((rect) => {
    const minSide = Math.min(rect.width, rect.height);
    return rect.width * rect.height > 0 && minSide < offcutRules.minKeepSide;
  }).length;
  const regularOffcutArea = freeRects.reduce((sum, rect) => {
    const minSide = Math.min(rect.width, rect.height);
    const maxSide = Math.max(rect.width, rect.height);
    return minSide >= offcutRules.minRegularSide && maxSide >= offcutRules.minRegularLongSide
      ? sum + rect.width * rect.height
      : sum;
  }, 0);
  const rotatedCount = result.sheets.reduce((sum, sheet) => sum + sheet.placements.filter((item) => item.rotated).length, 0);
  return result.stats.unplacedCount * 10000000 +
    result.stats.sheetCount * 900000 +
    result.stats.wasteArea / 1000 +
    smallFragments * 25000 +
    rotatedCount * 1200 -
    regularOffcutArea / 1000;
}

function nestPartsFreeRect({ sheetLength, sheetWidth, kerf, margin, parts, strategy = "area" }) {
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
    prepareFreeItems(items, usable, groupKey, strategy)
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

function prepareFreeItems(items, usable, groupKey, strategy = "area") {
  return items.map((item, index) => {
    const candidates = freeOrientationCandidates(item, usable);
    const preferred = candidates[0] || { width: item.length, height: item.width, rotated: false };
    return {
      ...item,
      instanceId: `${groupKey}-${index + 1}`,
      freePreferredWidth: preferred.width,
      freePreferredHeight: preferred.height,
      freePreferredArea: item.length * item.width,
    };
  }).sort((a, b) => {
    if (strategy === "longSide") {
      const diff = Math.max(b.freePreferredWidth, b.freePreferredHeight) - Math.max(a.freePreferredWidth, a.freePreferredHeight);
      if (diff) return diff;
    }
    if (strategy === "shortSide") {
      const diff = Math.min(b.freePreferredWidth, b.freePreferredHeight) - Math.min(a.freePreferredWidth, a.freePreferredHeight);
      if (diff) return diff;
    }
    if (strategy === "height") {
      const diff = b.freePreferredHeight - a.freePreferredHeight;
      if (diff) return diff;
    }
    if (strategy === "width") {
      const diff = b.freePreferredWidth - a.freePreferredWidth;
      if (diff) return diff;
    }
    return b.freePreferredArea - a.freePreferredArea;
  });
}

function freeOrientationCandidates(item, usable) {
  const candidates = [{ width: item.length, height: item.width, rotated: false }];
  if (item.allowRotate && item.length !== item.width) {
    candidates.push({ width: item.width, height: item.length, rotated: true });
  }
  return candidates
    .filter((candidate) => candidate.width <= usable.width && candidate.height <= usable.height)
    .sort((a, b) => {
      const areaDiff = b.width * b.height - a.width * a.height;
      if (areaDiff) return areaDiff;
      const rotateDiff = Number(a.rotated) - Number(b.rotated);
      if (rotateDiff) return rotateDiff;
      return Math.max(b.width, b.height) - Math.max(a.width, a.height);
    });
}

function nestPartsGuillotineOptimized(params, mode = "manual") {
  const weights = activeCutWeights(mode);
  const strategies = ["frequency", "batch", "balanced", "height", "area", "length"];
  const results = strategies.map((strategy) => {
    const result = nestPartsManualGuillotine({ ...params, strategy, weights });
    result.algorithmStrategy = strategy;
    result.optimizationScore = scoreGuillotineResult(result, weights);
    return result;
  });
  return results.sort((a, b) => a.optimizationScore - b.optimizationScore)[0];
}

function scoreGuillotineResult(result, weights) {
  const stripMetrics = manualStripMetrics(result);
  const rotatedCount = result.sheets.reduce((sum, sheet) => {
    return sum + sheet.placements.filter((item) => item.rotated).length;
  }, 0);
  const cutCount = manualCutCount(result);
  const cutCost = cutCount * toNumber(weights.cutPrice, 5);
  const cutLength = result.sheets.reduce((sum, sheet) => {
    return sum + sheet.placements.reduce((partSum, item) => partSum + item.width, 0);
  }, 0);
  return result.stats.unplacedCount * 10000000 +
    result.stats.sheetCount * weights.sheetCount * 100000 +
    stripMetrics.stripCount * weights.fenceChanges * 900 +
    stripMetrics.uniqueStripHeightCount * weights.fenceChanges * 450 +
    stripMetrics.shortTailCount * weights.materialYield * 180 +
    stripMetrics.tailWasteArea / 10000 * weights.materialYield * 0.8 +
    stripMetrics.stripHeightVariance * weights.fenceChanges * 18 +
    stripMetrics.fragmentedOffcutCount * weights.reusableOffcut * 140 -
    stripMetrics.regularOffcutArea / 100000 * weights.reusableOffcut * 2 -
    result.stats.wasteArea / 10000 * weights.materialYield -
    result.stats.reusableOffcutArea / 100000 * weights.reusableOffcut +
    rotatedCount * weights.rotation * 300 +
    cutCost * toNumber(weights.totalCost, 0) * 150 +
    cutLength / 1000 * weights.cutLength;
}

function manualCutCount(result) {
  return result.sheets.reduce((sum, sheet) => {
    const stripCount = sheet.strips ? sheet.strips.length : inferManualStrips(sheet).length;
    return sum + stripCount + sheet.placements.length;
  }, 0);
}

function manualStripMetrics(result) {
  const heights = new Set();
  const heightList = [];
  let stripCount = 0;
  let shortTailCount = 0;
  let tailWasteArea = 0;
  let fragmentedOffcutCount = 0;
  let regularOffcutArea = 0;
  result.sheets.forEach((sheet) => {
    const right = sheet.usable ? sheet.usable.x + sheet.usable.width : sheet.length;
    (sheet.strips || []).forEach((strip) => {
      stripCount += 1;
      const heightKey = manualDimensionKey(strip.height);
      heights.add(heightKey);
      heightList.push(heightKey);
      const tailWidth = Math.max(0, right - strip.nextX);
      tailWasteArea += tailWidth * strip.height;
      if (tailWidth > 0 && tailWidth < offcutRules.shortTailLimit) shortTailCount += 1;
    });
    (sheet.freeRects || []).forEach((rect) => {
      const minSide = Math.min(rect.width, rect.height);
      const maxSide = Math.max(rect.width, rect.height);
      if (rect.width * rect.height > 0 && minSide < offcutRules.minKeepSide) fragmentedOffcutCount += 1;
      if (minSide >= offcutRules.minRegularSide && maxSide >= offcutRules.minRegularLongSide) regularOffcutArea += rect.width * rect.height;
    });
  });
  const averageHeight = heightList.length ? heightList.reduce((sum, item) => sum + item, 0) / heightList.length : 0;
  const stripHeightVariance = heightList.length
    ? heightList.reduce((sum, item) => sum + Math.abs(item - averageHeight), 0) / heightList.length
    : 0;
  return {
    stripCount,
    uniqueStripHeightCount: heights.size,
    shortTailCount,
    tailWasteArea,
    stripHeightVariance,
    fragmentedOffcutCount,
    regularOffcutArea,
  };
}

function nestPartsManualGuillotine({ sheetLength, sheetWidth, kerf, margin, parts, strategy = "frequency", weights = activeManualWeights() }) {
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
    prepareManualItems(items, usable, groupKey, strategy)
      .forEach((item) => {
        const tooLarge = findTooLargeReason(item, usable);
        if (tooLarge) {
          unplaced.push({ ...item, reason: tooLarge, groupName: groupLabel(material, thickness) });
          return;
        }

        let placed = false;
        for (const sheet of groupSheets) {
          const placement = placeOnManualSheet(sheet, item, kerf, weights);
          if (placement) {
            sheet.placements.push(placement);
            placed = true;
            break;
          }
        }

        if (!placed) {
          const sheet = createManualSheet(sheets.length + groupSheets.length + 1, usable, sheetLength, sheetWidth, material, thickness);
          const placement = placeOnManualSheet(sheet, item, kerf, weights);
          if (placement) {
            sheet.placements.push(placement);
            groupSheets.push(sheet);
          } else {
            unplaced.push({ ...item, reason: "\u65e0\u6cd5\u6309\u63a8\u53f0\u952f\u6761\u6599\u5206\u5207\u653e\u7f6e", groupName: groupLabel(material, thickness) });
          }
        }
      });
    groupSheets.forEach(updateManualFreeRects);
    sheets.push(...groupSheets);
  });

  sheets.forEach((sheet, index) => {
    sheet.index = index + 1;
  });
  return buildStats(sheets, unplaced, sheetLength, sheetWidth);
}

function prepareManualItems(items, usable, groupKey, strategy = "frequency") {
  const enriched = items.map((item, index) => {
    const candidates = manualOrientationCandidates(item, usable);
    const preferred = candidates[0] || { width: item.length, height: item.width, rotated: false };
    return {
      ...item,
      instanceId: `${groupKey}-${index + 1}`,
      manualPreferredWidth: preferred.width,
      manualPreferredHeight: preferred.height,
      manualRotatedPreferred: preferred.rotated,
    };
  });
  const heightFrequency = new Map();
  const widthFrequency = new Map();
  enriched.forEach((item) => {
    const heightKey = manualDimensionKey(item.manualPreferredHeight);
    const widthKey = manualDimensionKey(item.manualPreferredWidth);
    heightFrequency.set(heightKey, (heightFrequency.get(heightKey) || 0) + 1);
    widthFrequency.set(widthKey, (widthFrequency.get(widthKey) || 0) + 1);
  });
  return enriched.sort((a, b) => {
    if (strategy === "frequency") {
      const freqDiff = (heightFrequency.get(manualDimensionKey(b.manualPreferredHeight)) || 0) -
        (heightFrequency.get(manualDimensionKey(a.manualPreferredHeight)) || 0);
      if (freqDiff) return freqDiff;
    }
    if (strategy === "batch") {
      const heightFreqDiff = (heightFrequency.get(manualDimensionKey(b.manualPreferredHeight)) || 0) -
        (heightFrequency.get(manualDimensionKey(a.manualPreferredHeight)) || 0);
      if (heightFreqDiff) return heightFreqDiff;
      const widthFreqDiff = (widthFrequency.get(manualDimensionKey(b.manualPreferredWidth)) || 0) -
        (widthFrequency.get(manualDimensionKey(a.manualPreferredWidth)) || 0);
      if (widthFreqDiff) return widthFreqDiff;
    }
    if (strategy === "balanced") {
      const groupScoreDiff = manualBatchScore(b, heightFrequency, widthFrequency) -
        manualBatchScore(a, heightFrequency, widthFrequency);
      if (groupScoreDiff) return groupScoreDiff;
    }
    if (strategy === "area") {
      const areaDiff = b.length * b.width - a.length * a.width;
      if (areaDiff) return areaDiff;
    }
    if (strategy === "length") {
      const lengthFirstDiff = b.manualPreferredWidth - a.manualPreferredWidth;
      if (lengthFirstDiff) return lengthFirstDiff;
    }
    const heightDiff = strategy === "height"
      ? b.manualPreferredHeight - a.manualPreferredHeight
      : b.manualPreferredHeight - a.manualPreferredHeight;
    if (heightDiff) return heightDiff;
    const lengthDiff = b.manualPreferredWidth - a.manualPreferredWidth;
    if (lengthDiff) return lengthDiff;
    return b.length * b.width - a.length * a.width;
  });
}

function manualDimensionKey(value) {
  return Math.round(toNumber(value, 0) / 5) * 5;
}

function manualBatchScore(item, heightFrequency, widthFrequency) {
  const heightFreq = heightFrequency.get(manualDimensionKey(item.manualPreferredHeight)) || 0;
  const widthFreq = widthFrequency.get(manualDimensionKey(item.manualPreferredWidth)) || 0;
  const areaScore = item.length * item.width / 100000;
  const noRotateBonus = item.manualRotatedPreferred ? 0 : 0.5;
  return heightFreq * 4 + widthFreq * 2 + areaScore + noRotateBonus;
}

function manualOrientationCandidates(item, usable) {
  const candidates = [{ width: item.length, height: item.width, rotated: false }];
  if (item.allowRotate && item.length !== item.width) {
    candidates.push({ width: item.width, height: item.length, rotated: true });
  }
  return candidates
    .filter((candidate) => candidate.width <= usable.width && candidate.height <= usable.height)
    .sort((a, b) => {
      const heightDiff = a.height - b.height;
      if (heightDiff) return heightDiff;
      const rotateDiff = Number(a.rotated) - Number(b.rotated);
      if (rotateDiff) return rotateDiff;
      return b.width - a.width;
    });
}

function preferredManualStripHeight(item, usable) {
  const candidate = manualOrientationCandidates(item, usable)[0] || { height: item.width };
  return candidate.height;
}

function preferredManualCutLength(item, usable) {
  const candidate = manualOrientationCandidates(item, usable)[0] || { width: item.length };
  return candidate.width;
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

function createManualSheet(index, usable, sheetLength, sheetWidth, material, thickness) {
  return {
    ...createSheet(index, usable, sheetLength, sheetWidth, material, thickness),
    usable: { ...usable },
    strips: [],
    nextY: usable.y,
  };
}

function placeOnManualSheet(sheet, item, kerf, weights = activeManualWeights()) {
  const candidates = manualOrientationCandidates(item, sheet.usable);
  const right = sheet.usable.x + sheet.usable.width;
  const bottom = sheet.usable.y + sheet.usable.height;
  let best = null;

  sheet.strips.forEach((strip, stripIndex) => {
    candidates.forEach((candidate) => {
      if (candidate.height <= strip.height && strip.nextX + candidate.width <= right) {
        const score = scoreManualPlacement({
          type: "existing-strip",
          sheet,
          strip,
          candidate,
          stripIndex,
          right,
          bottom,
          weights,
        });
        if (!best || score < best.score) {
          best = { type: "strip", strip, candidate, score };
        }
      }
    });
  });

  candidates.forEach((candidate) => {
    if (sheet.usable.x + candidate.width <= right && sheet.nextY + candidate.height <= bottom) {
      const score = scoreManualPlacement({
        type: "new-strip",
        sheet,
        candidate,
        right,
        bottom,
        weights,
      });
      if (!best || score < best.score) {
        best = { type: "new-strip", candidate, score };
      }
    }
  });

  if (!best) return null;
  const strip = best.type === "new-strip"
    ? createManualStrip(sheet, best.candidate, kerf)
    : best.strip;
  const placement = {
    id: item.instanceId,
    name: item.name,
    x: strip.nextX,
    y: strip.y,
    width: best.candidate.width,
    height: best.candidate.height,
    sourceLength: item.length,
    sourceWidth: item.width,
    material: item.material,
    thickness: item.thickness,
    allowRotate: item.allowRotate,
    rotated: best.candidate.rotated,
    note: item.note,
    edgeBanding: item.edgeBanding,
  };
  strip.nextX += best.candidate.width + kerf;
  updateManualFreeRects(sheet);
  return placement;
}

function createManualStrip(sheet, candidate, kerf) {
  const strip = {
    x: sheet.usable.x,
    y: sheet.nextY,
    height: candidate.height,
    nextX: sheet.usable.x,
  };
  sheet.strips.push(strip);
  sheet.nextY += candidate.height + kerf;
  return strip;
}

function scoreManualPlacement({ type, sheet, strip, candidate, stripIndex = 0, right, bottom, weights = activeManualWeights() }) {
  const existingStrip = type === "existing-strip";
  const stripHeightWaste = existingStrip ? Math.max(0, strip.height - candidate.height) : 0;
  const remainingLength = existingStrip
    ? right - (strip.nextX + candidate.width)
    : right - (sheet.usable.x + candidate.width);
  const remainingHeight = existingStrip ? bottom - (strip.y + strip.height) : bottom - (sheet.nextY + candidate.height);
  const reusableLengthBonus = reusableScore(remainingLength, existingStrip ? strip.height : candidate.height);
  const reusableHeightBonus = existingStrip ? 0 : reusableScore(sheet.usable.width, remainingHeight);
  const newStripPenalty = existingStrip ? 0 : weights.fenceChanges * 800;
  const heightWastePenalty = stripHeightWaste * weights.fenceChanges;
  const lengthWastePenalty = Math.max(0, remainingLength) * weights.materialYield * 0.08;
  const sheetHeightPenalty = Math.max(0, remainingHeight) * weights.sheetCount * 0.03;
  const rotationPenalty = candidate.rotated ? weights.rotation * 120 : 0;
  const cutLengthPenalty = candidate.width * weights.cutLength * 0.01;
  const sameStripHeightBonus = existingStrip && Math.abs(strip.height - candidate.height) <= 2 ? weights.fenceChanges * 65 : 0;
  const stripTailFillBonus = existingStrip && remainingLength >= 0 && remainingLength <= offcutRules.filledTailLimit ? weights.materialYield * 45 : 0;
  const awkwardTailPenalty = existingStrip && remainingLength > offcutRules.filledTailLimit && remainingLength < offcutRules.shortTailLimit ? weights.materialYield * 70 : 0;
  const fragmentedBelowPenalty = !existingStrip && remainingHeight > 0 && remainingHeight < offcutRules.shortTailLimit ? weights.reusableOffcut * 85 : 0;
  const regularBelowBonus = !existingStrip && remainingHeight >= offcutRules.minBelowRegular ? weights.reusableOffcut * 35 : 0;
  const reusableBonus = (reusableLengthBonus + reusableHeightBonus) * weights.reusableOffcut;
  return newStripPenalty +
    heightWastePenalty +
    lengthWastePenalty +
    sheetHeightPenalty +
    awkwardTailPenalty +
    fragmentedBelowPenalty +
    rotationPenalty +
    cutLengthPenalty +
    stripIndex * 0.1 -
    sameStripHeightBonus -
    stripTailFillBonus -
    regularBelowBonus -
    reusableBonus;
}

function reusableScore(width, height) {
  if (width < offcutRules.minKeepSide || height < offcutRules.minKeepSide || width * height < offcutRules.minKeepArea) return 0;
  return Math.min(100, (width * height) / 100000);
}

function updateManualFreeRects(sheet) {
  const right = sheet.usable.x + sheet.usable.width;
  const bottom = sheet.usable.y + sheet.usable.height;
  const rects = [];
  sheet.strips.forEach((strip) => {
    const remainingWidth = right - strip.nextX;
    if (remainingWidth > 0) {
      rects.push({
        x: strip.nextX,
        y: strip.y,
        width: remainingWidth,
        height: strip.height,
      });
    }
  });
  if (sheet.nextY < bottom) {
    rects.push({
      x: sheet.usable.x,
      y: sheet.nextY,
      width: sheet.usable.width,
      height: bottom - sheet.nextY,
    });
  }
  sheet.freeRects = rects.filter((rect) => rect.width > 0 && rect.height > 0);
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
    allowRotate: item.allowRotate,
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
  return sheets.flatMap((sheet) => sheet.freeRects
    .filter((rect) => rect.width >= offcutRules.minKeepSide && rect.height >= offcutRules.minKeepSide && rect.width * rect.height >= offcutRules.minKeepArea)
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
  renderQuotePresets();
  renderOrderHistory();
  renderDesigner();
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
    orderStatus: sample.orderStatus || "quote",
    orderDueDate: sample.orderDueDate || "",
    sheetLength: sample.sheetLength,
    sheetWidth: sample.sheetWidth,
    sheetThickness: sample.sheetThickness,
    material: sample.material,
    kerf: sample.kerf,
    margin: sample.margin,
    cuttingMode: sample.cuttingMode || "manual",
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
  const html = stockPresetOptionsHtml(presets);
  els.stockPresetSelect.innerHTML = html;
  if (els.quickStockPresetSelect) els.quickStockPresetSelect.innerHTML = quickStockPresetOptionsHtml();
  syncStockPresetSelects();
}

function quickStockPresetOptionsHtml() {
  return quickStockSizeOptions.map((item) => {
    return `<option value="${escapeAttr(item.id)}">${escapeHtml(item.label)}</option>`;
  }).join("");
}

function stockPresetOptionsHtml(presets) {
  const groups = new Map();
  presets.forEach((preset) => {
    const category = preset.category || "\u81ea\u5b9a\u4e49\u677f\u6750";
    if (!groups.has(category)) groups.set(category, []);
    groups.get(category).push(preset);
  });
  return [...groups.entries()].map(([category, items]) => {
    const options = items.map((preset) => {
      const label = `${preset.name} ${preset.length}x${preset.width}x${preset.thickness} ${preset.material}`;
      return `<option value="${escapeAttr(preset.id)}">${escapeHtml(label)}</option>`;
    }).join("");
    return `<optgroup label="${escapeAttr(category)}">${options}</optgroup>`;
  }).join("");
}

function syncStockPresetSelects(presetId = findMatchingStockPresetId(), quickValue = findMatchingQuickStockValue(presetId)) {
  if (presetId && els.stockPresetSelect) els.stockPresetSelect.value = presetId;
  if (quickValue && els.quickStockPresetSelect) els.quickStockPresetSelect.value = quickValue;
}

function findMatchingStockPresetId() {
  const presets = getStockPresets();
  const match = presets.find((item) => {
    return item.length === state.sheetLength &&
      item.width === state.sheetWidth &&
      item.thickness === state.sheetThickness &&
      item.material === state.material;
  });
  return match?.id || presets[0]?.id || "";
}

function findMatchingQuickStockValue(presetId = findMatchingStockPresetId()) {
  const sizeMatch = quickStockSizeOptions.find((item) => {
    return item.length === state.sheetLength && item.width === state.sheetWidth;
  });
  return sizeMatch?.id || presetId;
}

function applySelectedStockPreset(select = els.stockPresetSelect) {
  if (select === els.quickStockPresetSelect) {
    applySelectedQuickStockChoice();
    return;
  }
  const presets = getStockPresets();
  const preset = presets.find((item) => item.id === select?.value);
  if (!preset) return;
  state.sheetLength = preset.length;
  state.sheetWidth = preset.width;
  state.sheetThickness = preset.thickness;
  state.material = preset.material;
  writeSettings();
  syncStockPresetSelects(preset.id);
  markResultDirty();
  renderPartsSummary();
  renderDesigner();
  syncQuotePresetSuggestion();
  renderQuoteSummary(state.parts);
}

function applySelectedQuickStockChoice() {
  const value = els.quickStockPresetSelect?.value || "";
  const size = quickStockSizeOptions.find((item) => item.id === value);
  if (!size) return;
  state.sheetLength = size.length;
  state.sheetWidth = size.width;
  writeSettings();
  syncStockPresetSelects(findMatchingStockPresetId(), value);
  markResultDirty();
  renderPartsSummary();
  renderDesigner();
  syncQuotePresetSuggestion();
  renderQuoteSummary(state.parts);
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
  syncStockPresetSelects(preset.id);
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
  const quote = calculateQuote(state.parts, state.resultDirty ? null : state.result, readQuoteConfig());
  const historyName = historySnapshotName();
  return {
    historyName,
    historyMode: appMode,
    orderName: state.orderName,
    customerName: state.customerName,
    orderStatus: state.orderStatus || "quote",
    orderDueDate: state.orderDueDate || "",
    sheetLength: state.sheetLength,
    sheetWidth: state.sheetWidth,
    sheetThickness: state.sheetThickness,
    material: state.material,
    kerf: state.kerf,
    margin: state.margin,
    cuttingMode: state.cuttingMode || "manual",
    manualWeights: { ...activeManualWeights() },
    parts: state.parts.map(normalizePart),
    quote: {
      totalSheets: quote.totalSheets,
      pieceCount: quote.pieceCount,
      totalCost: quote.totalCost,
      suggestedPrice: quote.suggestedPrice,
      edgeMeters: quote.edgeMeters,
    },
  };
}

function historySnapshotName() {
  if (appMode === "design" || appMode === "quick") {
    const parts = state.parts.map(normalizePart);
    const partCount = parts.reduce((sum, item) => sum + item.quantity, 0);
    const material = state.material || text.defaultMaterial;
    const thickness = Math.round(toNumber(state.sheetThickness, 18));
    return `${material}${thickness}mm${partCount}\u4ef6${nextHistorySerial(appMode)}`;
  }
  return state.orderName || text.unnamedOrder;
}

function nextHistorySerial(mode) {
  const key = mode === "design" ? "design" : "quick";
  let serials = {};
  try {
    serials = JSON.parse(localStorage.getItem(HISTORY_SERIAL_KEY) || "{}");
  } catch {
    serials = {};
  }
  const next = Math.max(0, Number(serials[key] || 0)) + 1;
  serials[key] = next;
  localStorage.setItem(HISTORY_SERIAL_KEY, JSON.stringify(serials));
  return String(next).padStart(3, "0");
}

function getBoardGroups(parts = state.parts) {
  const map = new Map();
  parts.forEach((item) => {
    const material = item.material || state.material || text.defaultMaterial;
    const thickness = item.thickness || state.sheetThickness || 18;
    const key = groupKeyFor(material, thickness);
    if (!map.has(key)) map.set(key, { material, thickness });
  });
  return [...map.values()];
}

function activeHistoryKey() {
  if (appMode === "quick") return CUTTING_HISTORY_KEY;
  if (appMode === "design") return DESIGN_HISTORY_KEY;
  return ORDER_HISTORY_KEY;
}

function getOrderHistory(key = activeHistoryKey()) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function saveCurrentOrderHistory() {
  const snapshot = snapshotCurrentOrder();
  const key = activeHistoryKey();
  const history = getOrderHistory(key);
  const entry = {
    id: `${appMode}-history-${Date.now()}`,
    savedAt: new Date().toISOString(),
    snapshot,
  };
  localStorage.setItem(key, JSON.stringify([entry, ...history].slice(0, 20)));
  activeHistoryId = entry.id;
  renderOrderHistory();
}

function renderOrderHistory() {
  const history = getOrderHistory();
  if (appMode === "pro") renderOrderDashboard(history);
  if (!history.length) {
    els.historyList.innerHTML = `<div class="empty">${emptyHistoryText()}</div>`;
    return;
  }
  const simpleMode = appMode !== "pro";
  const filtered = simpleMode ? history.slice(0, 8) : filterOrderHistory(history);
  if (!filtered.length) {
    els.historyList.innerHTML = `<div class="empty">\u6ca1\u6709\u5339\u914d\u7684\u8ba2\u5355</div>`;
    return;
  }
  els.historyList.innerHTML = `
    ${simpleMode ? "" : `<div class="history-count">\u5df2\u663e\u793a ${filtered.length} / ${history.length} \u5355</div>`}
    ${filtered.map((entry) => {
    const snapshot = entry.snapshot || {};
    const partCount = (snapshot.parts || []).reduce((sum, item) => sum + Number(item.quantity || 0), 0);
    const savedAt = new Date(entry.savedAt).toLocaleString();
    const status = snapshot.orderStatus || "quote";
    const quotePrice = Number(snapshot.quote?.suggestedPrice || 0);
    const dueDate = formatDueDate(snapshot.orderDueDate);
    const dueState = orderDueState(snapshot.orderDueDate, status);
    const activeClass = entry.id === activeHistoryId ? "is-active" : "";
    return `
      <div class="history-item ${simpleMode ? "history-item-simple" : ""} ${dueState.className} ${activeClass}" data-history-id="${escapeAttr(entry.id)}">
        <div>
          <strong>${escapeHtml(snapshot.historyName || snapshot.orderName || text.unnamedOrder)}</strong>
          ${simpleMode ? "" : `<span>${escapeHtml(snapshot.customerName || "-")} | ${partCount} \u4ef6 | ${moneyText(quotePrice)} | \u4ea4\u671f ${escapeHtml(dueDate)}${dueState.label ? ` | ${dueState.label}` : ""} | ${savedAt}</span>`}
        </div>
        ${simpleMode ? "" : renderOrderStatusSelect(entry.id, status)}
        <button type="button" data-load-history="${escapeAttr(entry.id)}">\u8f7d\u5165</button>
        <button type="button" data-delete-history="${escapeAttr(entry.id)}">\u5220\u9664</button>
      </div>
    `;
  }).join("")}
  `;
}

function emptyHistoryText() {
  if (appMode === "design") return "\u6682\u65e0\u8bbe\u8ba1\u5386\u53f2";
  if (appMode === "quick") return "\u6682\u65e0\u5f00\u6599\u5386\u53f2";
  return "\u6682\u65e0\u4fdd\u5b58\u8ba2\u5355";
}

function filterOrderHistory(history) {
  const query = historyFilters.query.toLowerCase();
  return history.filter((entry) => {
    const snapshot = entry.snapshot || {};
    const status = snapshot.orderStatus || "quote";
    if (historyFilters.status !== "all" && status !== historyFilters.status) return false;
    if (historyFilters.dueOnly && !isDueAttention(snapshot.orderDueDate, status)) return false;
    if (!query) return true;
    const haystack = [
      snapshot.orderName,
      snapshot.customerName,
      snapshot.material,
      status,
      orderStatusLabel(status),
    ].join(" ").toLowerCase();
    return haystack.includes(query);
  });
}

function renderOrderDashboard(history = getOrderHistory()) {
  if (!els.orderDashboard) return;
  const orders = history.map((entry) => entry.snapshot || {});
  const activeCount = orders.filter((item) => (item.orderStatus || "quote") !== "done").length;
  const quotedAmount = orders.reduce((sum, item) => sum + Number(item.quote?.suggestedPrice || 0), 0);
  const dueSoonCount = orders.filter((item) => isDueAttention(item.orderDueDate, item.orderStatus)).length;
  els.orderDashboard.innerHTML = `
    ${orderDashboardCard("\u5386\u53f2\u8ba2\u5355", orders.length, "\u5355")}
    ${orderDashboardCard("\u5f85\u8ddf\u8fdb", activeCount, "\u5355")}
    ${orderDashboardCard("\u8fd1\u671f\u4ea4\u4ed8", dueSoonCount, "\u5355")}
    ${orderDashboardCard("\u62a5\u4ef7\u91d1\u989d", moneyText(quotedAmount), "")}
  `;
}

function orderDashboardCard(label, value, unit) {
  return `<div class="order-dashboard-card"><span>${label}</span><b>${escapeHtml(String(value))}${unit}</b></div>`;
}

function renderOrderStatusBadge(status) {
  const item = orderStatusOptions[status] || orderStatusOptions.quote;
  return `<span class="order-status-badge ${item.className}">${item.label}</span>`;
}

function renderOrderStatusSelect(id, status) {
  const current = orderStatusOptions[status] ? status : "quote";
  const className = orderStatusOptions[current].className;
  const options = Object.entries(orderStatusOptions).map(([value, item]) => {
    return `<option value="${escapeAttr(value)}"${value === current ? " selected" : ""}>${item.label}</option>`;
  }).join("");
  return `<select class="history-status-select ${className}" data-status-history="${escapeAttr(id)}">${options}</select>`;
}

function orderStatusLabel(status) {
  return (orderStatusOptions[status] || orderStatusOptions.quote).label;
}

function formatDueDate(value) {
  if (!value) return "-";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleDateString();
}

function isDueSoon(value, status) {
  if (!value || status === "done") return false;
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return false;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const days = Math.ceil((date - today) / 86400000);
  return days >= 0 && days <= 7;
}

function isDueAttention(value, status) {
  if (!value || status === "done") return false;
  const days = dueDays(value);
  return Number.isFinite(days) && days <= 7;
}

function dueDays(value) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return NaN;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.ceil((date - today) / 86400000);
}

function orderDueState(value, status) {
  if (!value || status === "done") return { label: "", className: "" };
  const days = dueDays(value);
  if (!Number.isFinite(days)) return { label: "", className: "" };
  if (days < 0) return { label: "\u5df2\u903e\u671f", className: "is-overdue" };
  if (days <= 2) return { label: "\u5373\u5c06\u4ea4\u4ed8", className: "is-urgent" };
  if (days <= 7) return { label: "\u4e34\u671f", className: "is-due-soon" };
  return { label: "", className: "" };
}

function loadOrderHistory(id) {
  const entry = getOrderHistory().find((item) => item.id === id);
  if (!entry || !entry.snapshot) return;
  activeHistoryId = id;
  state = {
    ...state,
    ...entry.snapshot,
    orderStatus: entry.snapshot.orderStatus || "quote",
    orderDueDate: entry.snapshot.orderDueDate || "",
    cuttingMode: entry.snapshot.cuttingMode || "manual",
    manualWeights: { ...manualCutWeights, ...(entry.snapshot.manualWeights || {}) },
    parts: (entry.snapshot.parts || []).map(normalizePart),
    result: null,
  };
  runNesting();
}

function deleteOrderHistory(id) {
  const key = activeHistoryKey();
  const history = getOrderHistory(key).filter((item) => item.id !== id);
  localStorage.setItem(key, JSON.stringify(history));
  if (activeHistoryId === id) activeHistoryId = "";
  renderOrderHistory();
}

function updateOrderHistoryStatus(id, status) {
  if (!orderStatusOptions[status]) return;
  const key = activeHistoryKey();
  const history = getOrderHistory(key).map((entry) => {
    if (entry.id !== id) return entry;
    return {
      ...entry,
      snapshot: {
        ...(entry.snapshot || {}),
        orderStatus: status,
      },
      updatedAt: new Date().toISOString(),
    };
  });
  localStorage.setItem(key, JSON.stringify(history));
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
    renderProductionSheet(null);
    els.sheetsView.innerHTML = `<div class="empty">\u70b9\u51fb\u201c\u81ea\u52a8\u6392\u6599\u201d\u540e\u751f\u6210\u6392\u6599\u56fe\u3002</div>`;
    renderQuoteSummary(state.parts, { mode: "\u6e05\u5355\u9884\u4f30" });
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
    ${appMode === "pro" ? statCard("\u5f00\u6599\u6a21\u5f0f", "", cuttingModeLabel(result.cuttingMode), result.algorithmNote || "") : ""}
  `;
  els.warnings.innerHTML = renderWarnings(result);
  els.cutList.innerHTML = renderCutList(result);
  els.labelsView.innerHTML = "";
  els.sheetsView.innerHTML = result.sheets.map(renderSheet).join("") + renderSheetLabelsSection(result);
  renderQuoteSummary(state.parts, { mode: "\u6392\u6599\u540e" });
  renderProductionSheet(result);
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
      <td>${row.allowRotate ? text.yes : text.no}</td>
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
      <span>\u590d\u6838 3\uff1a\u7981\u6b62\u65cb\u8f6c\u677f\u4ef6\u9700\u68c0\u67e5\u7eb9\u7406\u65b9\u5411</span>
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
          <th>\u5b9e\u9645\u65cb\u8f6c</th>
          <th>\u5c01\u8fb9</th>
          <th>\u5907\u6ce8</th>
        </tr>
      </thead>
      <tbody>${tableRows}</tbody>
    </table>
    ${renderResultOffcutTable(result, { showOffcutSerial: showPartSerial, printSerial })}
  `;
}

function renderProductionSheet(result = state.result) {
  if (!els.productionSheetView) return;
  els.productionSheetView.innerHTML = buildProductionSheetHtml(result);
}

function buildProductionSheetHtml(result = state.result, options = {}) {
  const generatedAt = new Date().toLocaleString();
  const parts = state.parts.map(normalizePart);
  const totalPieces = parts.reduce((sum, item) => sum + item.quantity, 0);
  const edgeMeters = parts.reduce((sum, item) => sum + edgeLengthForPart(item), 0) / 1000;
  const status = result && !state.resultDirty ? "\u53ef\u751f\u4ea7" : "\u5f85\u6392\u6599\u590d\u6838";
  const resultStats = result?.stats || {};
  const offcuts = result?.reusableOffcuts || [];
  const productionRows = result ? result.sheets.flatMap((sheet) => sheet.placements.map((item, index) => ({
    sheetIndex: sheet.index,
    partCode: partCodeFor(globalPartIndex(sheet.index, index)),
    cutCode: codeFor(sheet.index, index),
    boardGroup: groupBadge(sheet.material, sheet.thickness),
    material: sheet.material,
    thickness: sheet.thickness,
    ...item,
  }))) : [];
  return `
    <section class="production-doc">
      <div class="production-doc-title">
        <div>
          <h3>\u751f\u4ea7\u5de5\u5355</h3>
          <span>${escapeHtml(state.orderName || text.unnamedOrder)}</span>
        </div>
        <span>${escapeHtml(generatedAt)} | ${escapeHtml(status)}</span>
      </div>
      <div class="production-meta">
        ${quoteDocBox("\u5ba2\u6237", state.customerName || "-")}
        ${quoteDocBox("\u4ea4\u671f", formatDueDate(state.orderDueDate))}
        ${quoteDocBox("\u8ba2\u5355\u72b6\u6001", orderStatusLabel(state.orderStatus))}
        ${quoteDocBox("\u677f\u6750\u89c4\u683c", `${state.sheetLength}x${state.sheetWidth}mm`)}
      </div>
      <div class="board-group-line">${renderBoardGroupLine(parts, { showDetails: true }) || escapeHtml(state.material || text.defaultMaterial)}</div>
      <div class="production-kpis">
        ${productionKpi("\u677f\u6750", resultStats.sheetCount || 0, "\u5f20")}
        ${productionKpi("\u677f\u4ef6", totalPieces, "\u4ef6")}
        ${productionKpi("\u5c01\u8fb9", edgeMeters.toFixed(1), "m")}
        ${productionKpi("\u53ef\u4fdd\u7559\u4f59\u6599", offcuts.length, "\u5757")}
      </div>
      ${renderProductionChecklist(result)}
      ${renderProductionPartTable(productionRows, options)}
      ${renderProductionOffcutTable(offcuts, options)}
    </section>
  `;
}

function productionKpi(label, value, unit) {
  return `<div class="production-kpi"><span>${label}</span><b>${escapeHtml(String(value))}${unit}</b></div>`;
}

function renderProductionChecklist(result = state.result) {
  const unplacedCount = result?.stats?.unplacedCount || 0;
  const checks = [
    ["\u8ba2\u5355\u4fe1\u606f", state.customerName ? "\u5df2\u586b\u5ba2\u6237" : "\u5f85\u586b\u5ba2\u6237"],
    ["\u677f\u6750\u89c4\u683c", `${state.sheetLength}x${state.sheetWidth} / ${state.sheetThickness}mm`],
    ["\u6392\u6599\u72b6\u6001", result && !state.resultDirty ? (unplacedCount ? "\u6709\u672a\u6392\u5165" : "\u5df2\u5b8c\u6210") : "\u5f85\u81ea\u52a8\u6392\u6599"],
    ["\u5c01\u8fb9\u590d\u6838", "\u6309 F/B/L/R \u65b9\u5411\u68c0\u67e5"],
    ["\u6807\u7b7e\u7c98\u8d34", "\u6309 P00001 \u5e8f\u53f7\u5bf9\u5e94\u677f\u4ef6"],
    ["\u4f59\u6599\u5165\u5e93", "\u4ec5\u4fdd\u7559\u8fbe\u5230\u53ef\u7528\u5c3a\u5bf8\u7684\u4f59\u6599"],
  ];
  return `
    <div class="production-checklist">
      ${checks.map(([label, detail]) => `
        <label><input type="checkbox" /> <span>${escapeHtml(label)}</span><small>${escapeHtml(detail)}</small></label>
      `).join("")}
    </div>
  `;
}

function renderProductionPartTable(rows, options = {}) {
  if (!rows.length) return `<div class="empty production-empty">\u5b8c\u6210\u81ea\u52a8\u6392\u6599\u540e\u751f\u6210\u751f\u4ea7\u660e\u7ec6\u3002</div>`;
  return `
    <table class="production-table">
      <thead>
        <tr>
          <th>\u677f\u4ef6\u5e8f\u53f7</th>
          <th>\u5f00\u6599\u7f16\u53f7</th>
          <th>\u677f\u53f7</th>
          <th>\u677f\u7c7b</th>
          <th>\u540d\u79f0</th>
          <th>\u5c3a\u5bf8</th>
          <th>\u5750\u6807</th>
          <th>\u5c01\u8fb9</th>
          <th>\u5de5\u5e8f</th>
          <th>\u5907\u6ce8</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map((row) => `
          <tr>
            <td>${escapeHtml(row.partCode)}</td>
            <td>${escapeHtml(row.cutCode)}</td>
            <td>${row.sheetIndex}</td>
            <td>${row.boardGroup}</td>
            <td>${escapeHtml(row.name)}</td>
            <td>${row.sourceLength}x${row.sourceWidth}</td>
            <td>${Math.round(row.x)}, ${Math.round(row.y)}</td>
            <td>${escapeHtml(row.edgeBanding || "")}</td>
            <td>${escapeHtml(productionRoute(row))}</td>
            <td>${escapeHtml(row.note || "")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderProductionOffcutTable(offcuts, options = {}) {
  if (!offcuts.length) return "";
  return `
    <h4 class="production-subtitle">\u4f59\u6599\u5165\u5e93</h4>
    <table class="production-table production-offcut-table">
      <thead>
        <tr>
          <th>\u4f59\u6599\u7f16\u53f7</th>
          <th>\u4f59\u6599\u5e8f\u53f7</th>
          <th>\u677f\u53f7</th>
          <th>\u6750\u8d28/\u539a\u5ea6</th>
          <th>\u5c3a\u5bf8</th>
          <th>\u5750\u6807</th>
          <th>\u5907\u6ce8</th>
        </tr>
      </thead>
      <tbody>
        ${offcuts.map((item) => `
          <tr>
            <td>${escapeHtml(item.code)}</td>
            <td>${partCodeFor(globalOffcutIndex(item.code))}</td>
            <td>${item.sheetIndex}</td>
            <td>${escapeHtml(groupLabel(item.material, item.thickness))}</td>
            <td>${item.width}x${item.height}</td>
            <td>${item.x}, ${item.y}</td>
            <td>\u4f59\u6599\u5165\u5e93</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function productionRoute(row) {
  const steps = ["\u5f00\u6599"];
  if (String(row.edgeBanding || "").trim()) steps.push("\u5c01\u8fb9");
  if (String(row.name || "").includes("\u95e8") || String(row.note || "").includes("\u94f0")) steps.push("\u4e94\u91d1/\u5b54\u4f4d\u590d\u6838");
  steps.push("\u8d34\u6807");
  return steps.join(" -> ");
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
          <th>\u65cb\u8f6c</th>
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
  const hoverSummary = renderSheetHoverSummary(sheet, usedArea);
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
        ${hoverSummary}
        <div class="sheet-code-list"><b>\u677f\u4ef6\u7f16\u53f7</b><span>${escapeHtml(codes || "-")}</span></div>
      </div>
    </article>
  `;
}

function renderSheetHoverSummary(sheet, usedArea) {
  const offcuts = state.result ? state.result.reusableOffcuts.filter((item) => item.sheetIndex === sheet.index) : [];
  return `
    <div class="sheet-hover-summary">
      <span>\u677f\u4ef6 ${sheet.placements.length}\u4ef6</span>
      <span>\u53ef\u7559\u4f59\u6599 ${offcuts.length}\u5757</span>
      <span>\u5df2\u7528 ${areaText(usedArea)}</span>
      <span>\u603b\u9762\u79ef ${areaText(sheet.length * sheet.width)}</span>
    </div>
  `;
}

function positionSheetHoverPreview(event) {
  if (window.matchMedia && window.matchMedia("(max-width: 768px)").matches) {
    clearSheetHoverPreview();
    return;
  }
  const svg = event.target.closest ? event.target.closest(".sheet-card > .sheet-svg") : null;
  if (!svg) {
    clearSheetHoverPreview();
    return;
  }
  const card = svg.closest(".sheet-card");
  const preview = card ? card.querySelector(".sheet-hover-preview") : null;
  if (!preview) return;
  const samePreview = activeSheetPreview === preview;
  if (activeSheetPreview && !samePreview) {
    clearSheetHoverPreview();
  }
  const cardRect = card.getBoundingClientRect();
  const compactPreview = window.matchMedia && window.matchMedia("(max-width: 2530px) and (min-width: 980px)").matches;
  if (compactPreview && samePreview) {
    card.classList.add("is-hovering");
    preview.classList.add("is-visible");
    return;
  }
  const viewportPadding = compactPreview ? 16 : 12;
  const desiredWidth = compactPreview
    ? Math.min(1880, Math.max(1120, window.innerWidth - viewportPadding * 2))
    : Math.min(1880, Math.max(980, window.innerWidth - 24));
  const desiredHeight = compactPreview
    ? Math.min(1040, Math.max(680, window.innerHeight - 72))
    : Math.min(1280, Math.max(720, window.innerHeight - 24));
  const gap = compactPreview ? 18 : 14;
  const availableAbove = Math.max(0, cardRect.top - gap - viewportPadding);
  const availableBelow = Math.max(0, window.innerHeight - cardRect.bottom - gap - viewportPadding);
  const verticalSpace = compactPreview
    ? Math.max(availableAbove, availableBelow, 360)
    : desiredHeight;
  const height = compactPreview ? Math.min(desiredHeight, verticalSpace) : desiredHeight;
  const sheetRatio = getSheetPreviewRatio(preview);
  const chromeHeight = compactPreview ? 126 : 118;
  const widthByHeight = Math.max(520, Math.floor((height - chromeHeight) / sheetRatio));
  const width = compactPreview ? Math.min(desiredWidth, widthByHeight) : desiredWidth;
  let left = compactPreview
    ? cardRect.left + cardRect.width / 2 - width / 2
    : cardRect.left - width - gap;
  if (!compactPreview && left < 12) left = cardRect.right + gap;
  if (left + width > window.innerWidth - viewportPadding) left = Math.max(viewportPadding, window.innerWidth - width - viewportPadding);
  let top = compactPreview
    ? cardRect.top - height - gap
    : event.clientY - 42;
  if (compactPreview && top < 12) {
    top = availableBelow > availableAbove ? cardRect.bottom + gap : viewportPadding;
  }
  top = Math.min(Math.max(viewportPadding, top), window.innerHeight - height - viewportPadding);
  if (!Number.isFinite(top)) top = Math.min(Math.max(viewportPadding, cardRect.top), window.innerHeight - height - viewportPadding);
  activeSheetPreview = preview;
  card.classList.add("is-hovering");
  preview.classList.add("is-visible");
  preview.style.width = `${width}px`;
  preview.style.maxHeight = "none";
  preview.style.left = `${Math.max(12, left)}px`;
  preview.style.top = `${Math.max(12, top)}px`;
}

function getSheetPreviewRatio(preview) {
  const svg = preview.querySelector ? preview.querySelector(".sheet-svg") : null;
  const viewBox = svg && svg.getAttribute ? String(svg.getAttribute("viewBox") || "") : "";
  const values = viewBox.split(/\s+/).map(Number);
  if (values.length === 4 && values[2] > 0 && values[3] > 0) {
    return values[3] / values[2];
  }
  return 0.56;
}

function clearSheetHoverPreview() {
  activeSheetPreview = null;
  els.sheetsView.querySelectorAll(".sheet-card.is-hovering").forEach((card) => {
    card.classList.remove("is-hovering");
  });
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
  if (els.layoutDialogTitle) els.layoutDialogTitle.textContent = "\u6392\u6599\u56fe\u653e\u5927\u67e5\u770b";
  els.layoutDialogContent.innerHTML = state.result.sheets.map(renderFullscreenSheet).join("");
  els.layoutDialog.showModal();
}

function openCutSequenceDialog() {
  if (!state.result) {
    alert("\u8bf7\u5148\u81ea\u52a8\u6392\u6599\u3002");
    return;
  }
  if (els.layoutDialogTitle) els.layoutDialogTitle.textContent = "\u5f00\u6599\u987a\u5e8f\u56fe";
  els.layoutDialogContent.innerHTML = renderCutSequenceView(state.result);
  els.layoutDialog.showModal();
}

function printLayoutDialog() {
  if (!state.result) return;
  document.body.classList.add("print-layout-dialog");
  window.print();
  setTimeout(() => document.body.classList.remove("print-layout-dialog"), 250);
}

function renderCutSequenceView(result) {
  const mode = result.cuttingMode || "manual";
  const sheetSequences = result.sheets.map((sheet) => ({
    sheet,
    steps: sequenceStepsForMode(sheet, mode),
  }));
  const totalSteps = sheetSequences.reduce((sum, item) => sum + item.steps.length, 0);
  const cutCost = mode === "cnc" ? 0 : totalSteps * toNumber(activeCutWeights(mode).cutPrice, 5);
  const guideItems = sequenceGuideItems(mode);
  return `
    <section class="cut-sequence-view">
      <div class="sequence-summary">
        <span>${escapeHtml(cuttingModeLabel(mode))}</span>
        <span>${result.sheets.length}\u5f20\u677f | ${totalSteps}\u5200 | \u952f\u7f1d${state.kerf}mm</span>
        ${mode !== "cnc" ? `<span>\u4f30\u7b97\u5f00\u5200\u8d39 \u00a5${Math.round(cutCost)}</span>` : ""}
        <span>${escapeHtml(result.algorithmNote || "")}</span>
      </div>
      ${renderSequenceWeightPanel(result)}
      <div class="sequence-guide">
        ${guideItems.map((item, index) => `<div><b>${index + 1}</b><span>${escapeHtml(item)}</span></div>`).join("")}
      </div>
      <div class="sequence-legend">
        <span><i class="legend-strip"></i>\u957f\u6761/\u8d2f\u901a\u5207</span>
        <span><i class="legend-part"></i>\u677f\u4ef6/\u5206\u5207</span>
        <span><i class="legend-offcut"></i>\u53ef\u4fdd\u7559\u4f59\u6599</span>
        <span><i class="legend-index"></i>\u5706\u70b9\u6570\u5b57=\u5f00\u5200\u987a\u5e8f</span>
      </div>
      ${sheetSequences.map(({ sheet, steps }) => renderSheetCutSequence(sheet, mode, steps)).join("")}
    </section>
  `;
}

function sequenceStepsForMode(sheet, mode) {
  if (mode === "cnc") return cncSequenceSteps(sheet);
  if (mode === "beam") return beamSequenceSteps(sheet);
  return manualSequenceSteps(sheet);
}

function sequenceGuideItems(mode) {
  if (mode === "cnc") {
    return ["\u6309\u677f\u4ef6\u8f6e\u5ed3\u8def\u5f84\u52a0\u5de5", "\u540c\u6750\u8d28/\u539a\u5ea6\u8fde\u7eed\u52a0\u5de5", "\u6309\u6807\u7b7e\u5206\u62e3\u5e76\u590d\u6838\u5b54\u69fd"];
  }
  if (mode === "beam") {
    return ["\u5148\u6309\u6279\u91cf\u5bbd\u5ea6\u8d2f\u901a\u5207", "\u518d\u6309\u540c\u5c3a\u5bf8\u96c6\u4e2d\u622a\u65ad", "\u6309\u6279\u6b21\u5806\u53e0/\u8d34\u6807"];
  }
  return ["\u5148\u7eb5\u5411\u5f00\u957f\u6761", "\u518d\u6761\u5185\u6a2a\u5411\u5206\u5207", "\u6309\u677f\u4ef6\u7f16\u53f7\u8d34\u6807/\u5206\u62e3"];
}

function renderSequenceWeightPanel(result) {
  if (!result.weightAnalysis || !result.weightAnalysis.length) return "";
  return `
    <div class="sequence-weight-panel">
      <strong>\u6392\u6599\u6743\u91cd</strong>
      ${result.algorithmStrategy ? `<span>\u7b56\u7565 ${escapeHtml(result.algorithmStrategy)}</span>` : ""}
      ${result.weightAnalysis.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
    </div>
  `;
}

function renderSheetCutSequence(sheet, mode, steps) {
  const stripCount = mode === "cnc" ? steps.length : steps.filter((step) => step.type === "strip").length;
  const partCount = steps.filter((step) => step.type === "part").length;
  const stripLabel = mode === "beam" ? "\u6279\u91cf\u8d2f\u901a\u5207" : (mode === "cnc" ? "\u8def\u5f84" : "\u957f\u6761");
  return `
    <article class="cut-sequence-sheet" style="border-color:${groupColor(sheet.material, sheet.thickness)}">
      <div class="sheet-head">
        <div>
          <strong>${text.sheet} ${sheet.index} ${text.sheetSuffix}</strong>
          <span>${steps.length}\u6b65</span>
        </div>
        <span>${groupPill(sheet.material, sheet.thickness)} | ${sheet.length}x${sheet.width} mm</span>
      </div>
      <div class="sequence-sheet-brief">
        <span>${stripLabel} ${stripCount}\u6761</span>
        <span>\u677f\u4ef6 ${partCount}\u4ef6</span>
        <span>\u56fe\u4e0a\u6570\u5b57=\u5f00\u5200\u987a\u5e8f\uff0c\u6309\u8868\u683c\u9010\u5200\u64cd\u4f5c</span>
      </div>
      ${sequenceSvg(sheet, steps, sequenceOffcutsForSheet(sheet))}
      ${renderSequenceTable(steps)}
      ${renderSequencePartCodeTable(sheet)}
      ${renderSequenceOffcutCodeTable(sheet)}
    </article>
  `;
}

function manualSequenceSteps(sheet) {
  const strips = sheet.strips && sheet.strips.length
    ? sheet.strips
    : inferManualStrips(sheet);
  const steps = [];
  strips.forEach((strip, stripIndex) => {
    const stripParts = sheet.placements
      .filter((item) => Math.abs(item.y - strip.y) < 1)
      .sort((a, b) => a.x - b.x);
    const stripPartCodes = stripParts.map((part) => codeFor(sheet.index, sheet.placements.indexOf(part))).join(", ");
    const stripTailWidth = manualStripTailWidth(sheet, strip);
    const tailText = stripTailWidth >= offcutRules.minKeepSide
      ? `\uff0c\u6761\u5c3e\u53ef\u7559${Math.round(stripTailWidth)}x${Math.round(strip.height)}mm`
      : (stripTailWidth > 0 ? `\uff0c\u6761\u5c3e${Math.round(stripTailWidth)}mm\u4f5c\u635f\u8017` : "\uff0c\u672c\u6761\u7528\u5c3d");
    steps.push({
      type: "strip",
      label: `\u7b2c${steps.length + 1}\u5200`,
      phase: "\u5f00\u957f\u6761",
      action: "\u7eb5\u5411\u8d2f\u901a\u5207",
      target: `\u6761\u6599${stripIndex + 1}`,
      detail: `\u5148\u5f00${Math.round(strip.height)}mm\u5bbd\u957f\u6761\uff0c\u5305\u542b ${stripPartCodes || "-"}${tailText}`,
      x: sheet.usable ? sheet.usable.x : state.margin,
      y: strip.y,
      width: sheet.usable ? sheet.usable.width : sheet.length - state.margin * 2,
      height: strip.height,
    });
    stripParts.forEach((part) => {
      steps.push({
        type: "part",
        label: `\u7b2c${steps.length + 1}\u5200`,
        phase: "\u6761\u5185\u5206\u5207",
        action: "\u6a2a\u5411\u622a\u65ad",
        target: codeFor(sheet.index, sheet.placements.indexOf(part)),
        detail: `${part.name}\uff1a${part.sourceLength}x${part.sourceWidth}mm${part.rotated ? "\uff0c\u65cb\u8f6c" : ""}`,
        x: part.x,
        y: part.y,
        width: part.width,
        height: part.height,
      });
    });
  });
  return steps;
}

function manualStripTailWidth(sheet, strip) {
  const right = sheet.usable ? sheet.usable.x + sheet.usable.width : sheet.length - state.margin;
  return Math.max(0, right - strip.nextX);
}

function beamSequenceSteps(sheet) {
  const strips = sheet.strips && sheet.strips.length
    ? sheet.strips
    : inferManualStrips(sheet);
  const steps = [];
  strips.forEach((strip, stripIndex) => {
    const stripParts = sheet.placements
      .filter((item) => Math.abs(item.y - strip.y) < 1)
      .sort((a, b) => a.x - b.x);
    const sizeGroups = new Map();
    stripParts.forEach((part) => {
      const key = `${part.sourceLength}x${part.sourceWidth}`;
      if (!sizeGroups.has(key)) sizeGroups.set(key, []);
      sizeGroups.get(key).push(part);
    });
    const batchText = [...sizeGroups.entries()].map(([size, parts]) => `${size}\u00d7${parts.length}`).join(" / ");
    const stripTailWidth = manualStripTailWidth(sheet, strip);
    steps.push({
      type: "strip",
      label: `\u7b2c${steps.length + 1}\u5200`,
      phase: "\u6279\u91cf\u8d2f\u901a\u5207",
      action: "\u7535\u5b50\u952f\u5b9a\u4f4d\u7eb5\u5207",
      target: `\u6279\u6b21${stripIndex + 1}`,
      detail: `\u9760\u5c3a\u5b9a\u4f4d${Math.round(strip.height)}mm\uff0c\u6279\u91cf\uff1a${batchText || "-"}${stripTailWidth >= offcutRules.minKeepSide ? `\uff0c\u5c3e\u6599${Math.round(stripTailWidth)}x${Math.round(strip.height)}mm` : ""}`,
      x: sheet.usable ? sheet.usable.x : state.margin,
      y: strip.y,
      width: sheet.usable ? sheet.usable.width : sheet.length - state.margin * 2,
      height: strip.height,
    });
    stripParts.forEach((part) => {
      steps.push({
        type: "part",
        label: `\u7b2c${steps.length + 1}\u5200`,
        phase: "\u6279\u5185\u622a\u65ad",
        action: "\u81ea\u52a8\u9760\u5c3a\u6a2a\u5207",
        target: codeFor(sheet.index, sheet.placements.indexOf(part)),
        detail: `${part.name}\uff1a${part.sourceLength}x${part.sourceWidth}mm\uff0c\u6279\u6b21${stripIndex + 1}`,
        x: part.x,
        y: part.y,
        width: part.width,
        height: part.height,
      });
    });
  });
  return steps;
}

function inferManualStrips(sheet) {
  const map = new Map();
  sheet.placements.forEach((item) => {
    const key = String(Math.round(item.y));
    const current = map.get(key) || { y: item.y, height: item.height };
    current.height = Math.max(current.height, item.height);
    map.set(key, current);
  });
  return [...map.values()].sort((a, b) => a.y - b.y);
}

function cncSequenceSteps(sheet) {
  return sheet.placements
    .slice()
    .sort((a, b) => (a.y - b.y) || (a.x - b.x))
    .map((part, index) => ({
    type: "part",
    label: `\u7b2c${index + 1}\u5200`,
    phase: "\u8f6e\u5ed3\u8def\u5f84",
    action: "\u81ea\u7531\u8f6e\u5ed3\u5207\u5272",
    target: codeFor(sheet.index, sheet.placements.indexOf(part)),
    detail: `${part.name}\uff1a${part.sourceLength}x${part.sourceWidth}mm${part.rotated ? "\uff0c\u5b9e\u9645\u65cb\u8f6c" : ""}`,
    x: part.x,
    y: part.y,
    width: part.width,
    height: part.height,
  }));
}

function sequenceOffcutsForSheet(sheet) {
  return state.result ? state.result.reusableOffcuts.filter((item) => item.sheetIndex === sheet.index) : [];
}

function sequenceSvg(sheet, steps, offcuts = []) {
  const colors = { strip: "rgba(36,107,254,0.16)", part: "rgba(12,143,87,0.2)" };
  const marks = steps.map((step, index) => sequenceStepMark(step, index, colors)).join("");
  const offcutMarks = offcuts.map((item) => {
    const fontSize = Math.max(12, Math.min(18, Math.min(item.width, item.height) / 8));
    return `
      <g>
        <rect x="${item.x}" y="${item.y}" width="${item.width}" height="${item.height}" fill="rgba(245,158,11,0.18)" stroke="#b75f00" stroke-width="3" stroke-dasharray="18 10" />
        <text x="${item.x + item.width / 2}" y="${item.y + item.height / 2 - 8}" text-anchor="middle" font-size="${fontSize}" font-weight="800" fill="#92400e">${escapeHtml(item.code)}</text>
        <text x="${item.x + item.width / 2}" y="${item.y + item.height / 2 + 14}" text-anchor="middle" font-size="${Math.max(12, fontSize - 2)}" fill="#92400e">${item.width}x${item.height}</text>
      </g>
    `;
  }).join("");
  return `
    <svg class="sheet-svg sequence-svg" viewBox="0 0 ${sheet.length} ${sheet.width}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${sheet.length}" height="${sheet.width}" fill="#ffffff" />
      <rect x="${state.margin}" y="${state.margin}" width="${sheet.length - state.margin * 2}" height="${sheet.width - state.margin * 2}" fill="none" stroke="#9aa6b6" stroke-width="2" stroke-dasharray="12 10" />
      ${marks}
      ${offcutMarks}
    </svg>
  `;
}

function sequenceStepMark(step, index, colors) {
  const stroke = step.type === "strip" ? "#246bfe" : "#0c8f57";
  const dash = step.type === "strip" ? "18 10" : "0";
  const labelX = step.x + Math.min(76, Math.max(42, step.width / 2));
  const labelY = Math.max(24, step.y + Math.min(26, step.height / 2));
  const cutLine = step.type === "strip"
    ? `<line x1="${step.x}" y1="${step.y + step.height}" x2="${step.x + step.width}" y2="${step.y + step.height}" stroke="#246bfe" stroke-width="4" stroke-dasharray="22 10" />`
    : `<line x1="${step.x + step.width}" y1="${step.y}" x2="${step.x + step.width}" y2="${step.y + step.height}" stroke="#0c8f57" stroke-width="4" stroke-dasharray="12 8" />`;
  const labelWidth = 118;
  return `
    <g>
      <rect x="${step.x}" y="${step.y}" width="${step.width}" height="${step.height}" fill="${colors[step.type] || "rgba(217,232,255,0.35)"}" stroke="${stroke}" stroke-width="3" stroke-dasharray="${dash}" />
      ${cutLine}
      <rect class="sequence-cut-label-bg" x="${labelX - labelWidth / 2}" y="${labelY - 18}" width="${labelWidth}" height="28" rx="5" fill="#111827" />
      <text x="${labelX}" y="${labelY + 1}" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">\u7b2c${index + 1}\u5200</text>
      ${step.type === "part" ? `<text x="${step.x + step.width / 2}" y="${step.y + step.height / 2 - 8}" text-anchor="middle" font-size="${sequenceLabelFontSize(step)}" font-weight="700" fill="#111827">${escapeHtml(compactSequenceLabel(step))}</text><text x="${step.x + step.width / 2}" y="${step.y + step.height / 2 + 14}" text-anchor="middle" font-size="${Math.max(12, sequenceLabelFontSize(step) - 2)}" fill="#475569">${Math.round(step.width)}x${Math.round(step.height)}</text>` : `<text x="${step.x + step.width / 2}" y="${step.y + step.height / 2 + 8}" text-anchor="middle" font-size="${Math.max(13, Math.min(20, step.height / 7))}" font-weight="800" fill="#1d4ed8">${Math.round(step.height)}mm\u6761\u6599</text>`}
    </g>
  `;
}

function sequenceLabelFontSize(step) {
  return Math.max(12, Math.min(18, Math.min(step.width, step.height) / 8));
}

function compactSequenceLabel(step) {
  const target = String(step.target || "");
  return target.length > 10 ? `${target.slice(0, 10)}...` : target;
}

function renderSequenceTable(steps) {
  return `
    <table class="fullscreen-part-table sequence-table">
      <thead>
        <tr>
          <th>\u987a\u5e8f</th>
          <th>\u9636\u6bb5</th>
          <th>\u64cd\u4f5c</th>
          <th>\u76ee\u6807</th>
          <th>\u5c3a\u5bf8</th>
          <th>\u4f4d\u7f6e</th>
          <th>\u8bf4\u660e</th>
        </tr>
      </thead>
      <tbody>
        ${steps.map((step) => `
          <tr>
            <td>${escapeHtml(step.label)}</td>
            <td><span class="sequence-phase ${step.type === "strip" ? "is-strip" : "is-part"}">${escapeHtml(step.phase || "")}</span></td>
            <td>${escapeHtml(step.action)}</td>
            <td>${escapeHtml(step.target || "")}</td>
            <td>${Math.round(step.width)}x${Math.round(step.height)}</td>
            <td>${Math.round(step.x)}, ${Math.round(step.y)}</td>
            <td>${escapeHtml(step.detail)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderSequencePartCodeTable(sheet) {
  const rows = sheet.placements.map((item, index) => `
    <tr>
      <td>${codeFor(sheet.index, index)}</td>
      <td>${partCodeFor(globalPartIndex(sheet.index, index))}</td>
      <td>${escapeHtml(item.name)}</td>
      <td>${item.sourceLength}x${item.sourceWidth}</td>
      <td>${Math.round(item.x)}, ${Math.round(item.y)}</td>
      <td>${item.allowRotate ? text.yes : text.no}</td>
      <td>${escapeHtml(item.edgeBanding || "-")}</td>
      <td>${escapeHtml(item.note || "")}</td>
    </tr>
  `).join("");
  return `
    <h4 class="sequence-subtitle">\u677f\u4ef6\u7f16\u7801\u6838\u5bf9</h4>
    <table class="fullscreen-part-table sequence-code-table">
      <thead>
        <tr>
          <th>\u677f\u4ef6\u7f16\u7801</th>
          <th>\u677f\u4ef6\u5e8f\u53f7</th>
          <th>\u540d\u79f0</th>
          <th>\u5c3a\u5bf8</th>
          <th>\u5750\u6807</th>
          <th>\u65cb\u8f6c</th>
          <th>\u5c01\u8fb9</th>
          <th>\u5907\u6ce8</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderSequenceOffcutCodeTable(sheet) {
  const offcuts = state.result ? state.result.reusableOffcuts.filter((item) => item.sheetIndex === sheet.index) : [];
  if (!offcuts.length) {
    return `<div class="empty sequence-empty">\u672c\u677f\u65e0\u53ef\u4fdd\u7559\u4f59\u6599</div>`;
  }
  const rows = offcuts.map((item) => `
    <tr>
      <td>${escapeHtml(item.code)}</td>
      <td>${partCodeFor(globalOffcutIndex(item.code))}</td>
      <td>${escapeHtml(groupLabel(item.material, item.thickness))}</td>
      <td>${item.width}x${item.height}</td>
      <td>${item.x}, ${item.y}</td>
    </tr>
  `).join("");
  return `
    <h4 class="sequence-subtitle">\u4f59\u6599\u7f16\u7801\u6838\u5bf9</h4>
    <table class="fullscreen-part-table sequence-code-table">
      <thead>
        <tr>
          <th>\u4f59\u6599\u7f16\u53f7</th>
          <th>\u4f59\u6599\u5e8f\u53f7</th>
          <th>\u6750\u8d28/\u539a\u5ea6</th>
          <th>\u5c3a\u5bf8</th>
          <th>\u5750\u6807</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
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
      <td>${item.allowRotate ? text.yes : text.no}</td>
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
  const header = ["\u540d\u79f0", "\u957f\u5ea6", "\u5bbd\u5ea6", "\u6570\u91cf", "\u6750\u8d28", "\u539a\u5ea6", "\u5c01\u8fb9", "\u65cb\u8f6c", "\u5907\u6ce8"];
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
  const header = ["\u7f16\u53f7", "\u677f\u53f7", "\u6750\u8d28", "\u539a\u5ea6", "\u540d\u79f0", "\u539f\u59cb\u957f\u5ea6", "\u539f\u59cb\u5bbd\u5ea6", "\u6392\u6599\u5bbd", "\u6392\u6599\u9ad8", "X", "Y", "\u65cb\u8f6c", "\u5b9e\u9645\u65cb\u8f6c", "\u5c01\u8fb9", "\u5907\u6ce8"];
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
    item.allowRotate ? text.yes : text.no,
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

function printQuoteSheet() {
  renderQuoteSummary(state.parts, { mode: state.result && !state.resultDirty ? "\u6392\u6599\u540e" : "\u9884\u4f30", useResult: Boolean(state.result && !state.resultDirty) });
  document.body.classList.add("print-quote-sheet");
  window.print();
  setTimeout(() => document.body.classList.remove("print-quote-sheet"), 250);
}

function exportQuoteHtml() {
  const result = state.result && !state.resultDirty ? state.result : null;
  const quote = calculateQuote(state.parts, result, readQuoteConfig());
  const mode = result ? "\u6392\u6599\u540e" : "\u9884\u4f30";
  downloadText("customer-quote.html", buildQuoteHtml(state.parts, quote, mode), "text/html;charset=utf-8");
}

function printProductionSheet() {
  if (!state.result || state.resultDirty) runNesting();
  renderProductionSheet(state.result);
  document.body.classList.add("print-production-sheet");
  window.print();
  setTimeout(() => document.body.classList.remove("print-production-sheet"), 250);
}

function exportProductionHtml() {
  if (!state.result || state.resultDirty) runNesting();
  renderProductionSheet(state.result);
  downloadText("production-sheet.html", buildProductionHtml(), "text/html;charset=utf-8");
}

function buildQuoteHtml(parts, quote, mode) {
  return `<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(state.orderName)} - Quote</title>
  <style>
    body{font-family:Arial,sans-serif;margin:24px;color:#111827}
    .quote-doc{display:grid;gap:10px}
    .quote-doc-title{display:flex;justify-content:space-between;gap:12px;border-bottom:2px solid #111827;padding-bottom:8px}
    .quote-doc-title h3{margin:0;font-size:22px}
    .quote-doc-title span,.quote-doc-meta span,.quote-doc-note{color:#6b7280;font-size:12px}
    .quote-doc-meta,.quote-doc-total{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
    .quote-doc-box{border:1px solid #d1d5db;border-radius:6px;padding:8px;background:#fff}
    .quote-doc-box span{display:block;color:#6b7280;font-size:12px}
    .quote-doc-box b{display:block;margin-top:4px;font-size:16px}
    .quote-doc-total .quote-doc-box:last-child{border-color:#0c8f57;background:#f1fbf6}
    .quote-doc-table{width:100%;border-collapse:collapse;font-size:12px}
    .quote-doc-table th,.quote-doc-table td{border:1px solid #d1d5db;padding:6px;text-align:left}
    .board-group-line{display:flex;flex-wrap:wrap;gap:6px}
    .board-group-chip{display:inline-flex;align-items:center;padding:4px 8px;border:1px solid #d1d5db;border-left:4px solid var(--group-color,#111827);border-radius:6px;background:#fff;font-weight:700}
    .group-badge{display:inline-flex;align-items:center;justify-content:center;padding:3px;border-radius:3px;color:#fff;font-size:12px;font-weight:800;line-height:1}
    .quote-doc-note{display:grid;gap:4px;padding:8px;border:1px dashed #b8c2d2;border-radius:6px;background:#fbfcfe}
  </style>
</head>
<body>
  ${buildQuoteSheetHtml(parts, quote, mode)}
</body>
</html>`;
}

function buildProductionHtml() {
  return `<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(state.orderName)} - Production</title>
  <style>${productionPrintStyles()}</style>
</head>
<body>
  ${buildProductionSheetHtml(state.result, { print: true })}
</body>
</html>`;
}

function productionPrintStyles() {
  return `
    body{font-family:Arial,"Microsoft YaHei",sans-serif;margin:24px;color:#111827}
    .production-doc{display:grid;gap:10px}
    .production-doc-title{display:flex;justify-content:space-between;gap:12px;border-bottom:2px solid #111827;padding-bottom:8px}
    .production-doc-title h3{margin:0;font-size:22px}.production-doc-title span{color:#6b7280;font-size:12px}
    .production-meta,.production-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
    .quote-doc-box,.production-kpi{border:1px solid #d1d5db;border-radius:6px;padding:8px;background:#fff}
    .quote-doc-box span,.production-kpi span{display:block;color:#6b7280;font-size:12px}.quote-doc-box b,.production-kpi b{display:block;margin-top:4px;font-size:16px}
    .board-group-line{display:flex;flex-wrap:wrap;gap:6px}.board-group-chip{display:inline-flex;align-items:center;padding:4px 8px;border:1px solid #d1d5db;border-left:4px solid var(--group-color,#111827);border-radius:6px;background:#fff;font-weight:700}
    .group-badge{display:inline-flex;align-items:center;justify-content:center;padding:3px;border-radius:3px;color:#fff;font-size:12px;font-weight:800;line-height:1}
    .production-checklist{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.production-checklist label{display:grid;grid-template-columns:auto 92px 1fr;align-items:center;gap:6px;border:1px solid #d1d5db;border-radius:6px;padding:7px;font-size:12px}.production-checklist small{color:#6b7280}
    .production-table{width:100%;border-collapse:collapse;font-size:12px}.production-table th,.production-table td{border:1px solid #d1d5db;padding:5px;text-align:left;vertical-align:top}
    .production-subtitle{margin:8px 0 0;font-size:14px}.empty{color:#6b7280;font-size:13px}
    @media print{body{margin:10mm}.production-doc,.production-table{break-inside:auto}.production-table tr{break-inside:avoid}}
  `;
}

function buildReportHtml(result) {
  const stats = result.stats;
  const generatedAt = new Date().toLocaleString();
  const sheetCards = result.sheets.map((sheet) => renderDetailedSheet(sheet, result.reusableOffcuts)).join("");
  const quote = calculateQuote(state.parts, result, readQuoteConfig());
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
    .quote{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:14px 0}
    .quote .box:last-child{border-color:#0c8f57;background:#f1fbf6}
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
    ${productionPrintStyles()}
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
  <h2>Quote estimate</h2>
  ${renderQuoteReport(quote)}
  ${buildQuoteSheetHtml(state.parts, quote, "\u6392\u6599\u540e")}
  <h2>Production order</h2>
  ${buildProductionSheetHtml(result, { print: true })}
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

function renderQuoteReport(quote) {
  return `
    <div class="quote">
      <div class="box">Sheets<b>${quote.totalSheets}</b><span>${quote.mainSheets} main / ${quote.backSheets} back</span></div>
      <div class="box">Material<b>${moneyText(quote.materialCost)}</b><span>Edge ${moneyText(quote.edgeCost)}</span></div>
      <div class="box">Labor<b>${moneyText(quote.laborCost)}</b><span>${quote.pieceCount} pieces</span></div>
      <div class="box">Suggested price<b>${moneyText(quote.suggestedPrice)}</b><span>${Math.round(quote.profitRate * 100)}% margin</span></div>
    </div>
  `;
}

function openImportDialog() {
  els.csvText.value = "\u540d\u79f0,\u957f\u5ea6,\u5bbd\u5ea6,\u6570\u91cf,\u6750\u8d28,\u539a\u5ea6,\u5c01\u8fb9,\u65cb\u8f6c,\u5907\u6ce8\n\u4fa7\u677f,2200,580,2,\u9897\u7c92\u677f,18,\"F,B\",\u5426,\u7eb9\u7406\u7ad6\u5411\n\u5c42\u677f,860,560,4,\u9897\u7c92\u677f,18,F,\u662f,";
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
  return parseBoolean(value);
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
  appMode = loadAppMode();
  loadLocal();
  writeSettings();
  applyAppMode();
  bindEvents();
  runNesting();
}

init();
