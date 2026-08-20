/* Calculadora de TAE a partir del TIN */
(function () {
  "use strict";
  var form = document.getElementById("calc-form");
  if (!form) return;
  var F = window.CuantiaFinance, UI = window.CuantiaUI, fmt = window.cuantiaFormat;
  var root = document;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    UI.hideError(root);

    var principal = UI.parseNumber(form.principal.value);
    var tin = UI.parseNumber(form.tin.value);
    var plazoMeses = UI.parseNumber(form.plazo.value);
    var comision = UI.parseNumber(form.comision.value) || 0;

    if (!(principal > 0) || !(tin >= 0) || !(plazoMeses > 0) || comision < 0 || comision >= 100) {
      UI.showError(root, "Revisa los datos: importe, TIN y plazo deben ser válidos, y la comisión debe estar entre 0 y 100.");
      return;
    }

    var result = F.aprFromTin(principal, tin, Math.round(plazoMeses), comision);

    UI.setText(root, "[data-tae]", fmt.percent(result.tae, 2));
    UI.setText(root, "[data-cuota]", fmt.currency(result.cuota));
    UI.setText(root, "[data-neto]", fmt.currency(result.netReceived));
    UI.setText(root, "[data-tin-ref]", fmt.percent(tin, 2));

    UI.showResults(root);
    document.getElementById("resultado-cuota").scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
