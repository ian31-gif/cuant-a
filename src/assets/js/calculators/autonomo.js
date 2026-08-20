/* Calculadora de cuota de autónomo (RETA) */
(function () {
  "use strict";
  var form = document.getElementById("calc-form");
  if (!form) return;
  var UI = window.CuantiaUI, fmt = window.cuantiaFormat;
  var root = document;
  var TRAMOS = window.CUANTIA_TRAMOS_AUTONOMO || [];

  function findTramo(rendimiento) {
    for (var i = 0; i < TRAMOS.length; i++) {
      var t = TRAMOS[i];
      if (t.hasta === null || rendimiento < t.hasta) return t;
    }
    return TRAMOS[TRAMOS.length - 1];
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    UI.hideError(root);

    var rendimiento = UI.parseNumber(form.rendimiento.value);
    if (!(rendimiento >= 0)) {
      UI.showError(root, "Introduce unos rendimientos netos mensuales válidos (0 € o más).");
      return;
    }

    var tramo = findTramo(rendimiento);
    var idx = TRAMOS.indexOf(tramo);
    var rango = tramo.hasta === null
      ? "más de " + fmt.currency(tramo.desde)
      : fmt.currency(tramo.desde) + " – " + fmt.currency(tramo.hasta);

    UI.setText(root, "[data-cuota]", fmt.currency(tramo.cuotaMinima));
    UI.setText(root, "[data-tramo-num]", "Tramo " + (idx + 1) + " (tabla " + tramo.tabla + ")");
    UI.setText(root, "[data-tramo-rango]", rango);
    UI.setText(root, "[data-base-minima]", fmt.currency(tramo.baseMinima));
    UI.setText(root, "[data-cuota-anual]", fmt.currency(tramo.cuotaMinima * 12));

    document.querySelectorAll("[data-tramo-row]").forEach(function (rowEl) {
      rowEl.classList.toggle("is-active-tramo", Number(rowEl.getAttribute("data-tramo-row")) === idx);
    });

    UI.showResults(root);
    document.getElementById("resultado-cuota").scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
