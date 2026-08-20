/* Calculadora de IRPF / retenciones (escala general de referencia) */
(function () {
  "use strict";
  var form = document.getElementById("calc-form");
  if (!form) return;
  var UI = window.CuantiaUI, fmt = window.cuantiaFormat;
  var root = document;
  var TRAMOS = (window.CUANTIA_IRPF || {}).tramos || [];
  var MIN_PERSONAL = (window.CUANTIA_IRPF || {}).minimoPersonal || 0;
  var MIN_HIJOS = (window.CUANTIA_IRPF || {}).minimoPorHijo || [];

  function cuotaProgresiva(base) {
    if (base <= 0) return 0;
    var cuota = 0;
    var desde = 0;
    for (var i = 0; i < TRAMOS.length; i++) {
      var hasta = TRAMOS[i].hasta === null ? Infinity : TRAMOS[i].hasta;
      var tramoBase = Math.max(0, Math.min(base, hasta) - desde);
      cuota += tramoBase * TRAMOS[i].tipo;
      if (base <= hasta) break;
      desde = hasta;
    }
    return cuota;
  }

  function minimoPorHijos(numHijos) {
    var total = 0;
    for (var i = 0; i < numHijos; i++) {
      total += MIN_HIJOS[Math.min(i, MIN_HIJOS.length - 1)];
    }
    return total;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    UI.hideError(root);

    var ingresos = UI.parseNumber(form.ingresos.value);
    var hijos = UI.parseNumber(form.hijos.value) || 0;

    if (!(ingresos >= 0) || hijos < 0) {
      UI.showError(root, "Introduce unos ingresos anuales válidos (0 € o más) y un número de hijos no negativo.");
      return;
    }

    var minimoTotal = MIN_PERSONAL + minimoPorHijos(hijos);
    var baseImponible = Math.max(0, ingresos - minimoTotal);
    var cuota = cuotaProgresiva(baseImponible);
    var tipoEfectivo = ingresos > 0 ? (cuota / ingresos) * 100 : 0;
    var neto = ingresos - cuota;

    UI.setText(root, "[data-cuota]", fmt.currency(cuota));
    UI.setText(root, "[data-tipo-efectivo]", fmt.number(tipoEfectivo, 1) + " %");
    UI.setText(root, "[data-neto-anual]", fmt.currency(neto));
    UI.setText(root, "[data-neto-mensual]", fmt.currency(neto / 12));
    UI.setText(root, "[data-minimo-total]", fmt.currency(minimoTotal));

    var brutoPct = ingresos > 0 ? Math.min(100, (neto / ingresos) * 100) : 0;
    var irpfPct = 100 - brutoPct;
    UI.renderSplitBar(root, brutoPct, irpfPct);
    UI.setText(root, "[data-pct-principal]", fmt.number(brutoPct, 1) + " %");
    UI.setText(root, "[data-pct-interes]", fmt.number(irpfPct, 1) + " %");

    UI.showResults(root);
    document.getElementById("resultado-cuota").scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
