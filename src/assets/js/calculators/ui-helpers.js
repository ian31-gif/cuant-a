/* =========================================================
   Cuantía — ui-helpers.js
   Utilidades compartidas por los scripts de cada calculadora.
   ========================================================= */
(function (global) {
  "use strict";

  function parseNumber(value) {
    if (value == null || value === "") return NaN;
    var normalized = String(value).replace(/\./g, "").replace(",", ".");
    // Si el usuario ya usa punto decimal (ej. "1000.50"), el reemplazo anterior
    // podría romperlo; probamos primero el valor tal cual.
    var direct = parseFloat(value);
    if (!isNaN(direct) && String(value).indexOf(",") === -1 && (String(value).match(/\./g) || []).length <= 1) {
      return direct;
    }
    return parseFloat(normalized);
  }

  function setText(root, selector, text) {
    var el = root.querySelector(selector);
    if (el) el.textContent = text;
  }

  function showError(root, message) {
    var el = root.querySelector("[data-error]");
    if (el) {
      el.textContent = message;
      el.hidden = false;
    }
  }
  function hideError(root) {
    var el = root.querySelector("[data-error]");
    if (el) el.hidden = true;
  }

  function showResults(root) {
    var panel = root.querySelector("[data-results]");
    if (panel) panel.hidden = false;
  }

  function renderSplitBar(root, principalPct, interestPct) {
    var segP = root.querySelector("[data-seg-principal]");
    var segI = root.querySelector("[data-seg-interes]");
    if (segP) segP.style.width = principalPct.toFixed(2) + "%";
    if (segI) segI.style.width = interestPct.toFixed(2) + "%";
  }

  global.CuantiaUI = {
    parseNumber: parseNumber,
    setText: setText,
    showError: showError,
    hideError: hideError,
    showResults: showResults,
    renderSplitBar: renderSplitBar
  };
})(window);
