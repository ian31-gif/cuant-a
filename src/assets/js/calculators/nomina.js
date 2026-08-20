/* Calculadora de nómina: cotizaciones SS + IRPF + neto */
(function () {
  "use strict";
  var form = document.getElementById("calc-form");
  if (!form) return;
  var UI = window.CuantiaUI, fmt = window.cuantiaFormat;
  var root = document;
  var SS = window.CUANTIA_SS || {};
  var IRPF = window.CUANTIA_IRPF_NOMINA || {};
  var TRAMOS = IRPF.tramos || [];
  var MIN_PERSONAL = IRPF.minimoPersonal || 0;
  var MIN_HIJOS = IRPF.minimoPorHijo || [];

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

    var bruto = UI.parseNumber(form.bruto.value);
    var pagas = UI.parseNumber(form.pagas.value) || 12;
    var hijos = UI.parseNumber(form.hijos.value) || 0;
    var temporal = form.contrato.value === "temporal";

    if (!(bruto > 0) || hijos < 0) {
      UI.showError(root, "Introduce un salario bruto anual válido (mayor que 0 €).");
      return;
    }

    var tipoSS = SS.contingenciasComunes + (temporal ? SS.desempleoTemporal : SS.desempleoIndefinido) + SS.formacion + SS.mei;
    var baseMaximaAnual = SS.baseMaximaMensual * 12;
    var baseCotizable = Math.min(bruto, baseMaximaAnual);
    var cotizacionSS = baseCotizable * tipoSS;

    var rendimientoNeto = Math.max(0, bruto - cotizacionSS - (SS.gastoDeducibleGenerico || 0));
    var minimoTotal = MIN_PERSONAL + minimoPorHijos(hijos);
    var baseLiquidable = Math.max(0, rendimientoNeto - minimoTotal);
    var cuotaIrpf = cuotaProgresiva(baseLiquidable);
    var tipoRetencion = bruto > 0 ? (cuotaIrpf / bruto) * 100 : 0;

    var netoAnual = bruto - cotizacionSS - cuotaIrpf;
    var netoPorPaga = netoAnual / pagas;

    UI.setText(root, "[data-neto-mensual]", fmt.currency(netoPorPaga));
    UI.setText(root, "[data-neto-anual]", fmt.currency(netoAnual));
    UI.setText(root, "[data-cotizacion-ss]", fmt.currency(cotizacionSS));
    UI.setText(root, "[data-cuota-irpf]", fmt.currency(cuotaIrpf));
    UI.setText(root, "[data-tipo-ss]", fmt.number(tipoSS * 100, 2) + " %");
    UI.setText(root, "[data-tipo-retencion]", fmt.number(tipoRetencion, 1) + " %");
    UI.setText(root, "[data-bruto]", fmt.currency(bruto));

    var netoPct = bruto > 0 ? Math.max(0, Math.min(100, (netoAnual / bruto) * 100)) : 0;
    var descuentosPct = 100 - netoPct;
    UI.renderSplitBar(root, netoPct, descuentosPct);
    UI.setText(root, "[data-pct-principal]", fmt.number(netoPct, 1) + " %");
    UI.setText(root, "[data-pct-interes]", fmt.number(descuentosPct, 1) + " %");

    UI.showResults(root);
    document.getElementById("resultado-cuota").scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
