/* Calculadora de interés compuesto */
(function () {
  "use strict";
  var form = document.getElementById("calc-form");
  if (!form) return;
  var F = window.CuantiaFinance, UI = window.CuantiaUI, fmt = window.cuantiaFormat;
  var root = document;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    UI.hideError(root);

    var capitalInicial = UI.parseNumber(form.capital.value) || 0;
    var aportacion = UI.parseNumber(form.aportacion.value) || 0;
    var interes = UI.parseNumber(form.interes.value);
    var plazoAnios = UI.parseNumber(form.plazo.value);

    if (capitalInicial < 0 || aportacion < 0 || !(interes >= 0) || !(plazoAnios > 0)) {
      UI.showError(root, "Revisa los datos: capital inicial y aportación no pueden ser negativos, y el interés y plazo deben ser válidos.");
      return;
    }
    if (capitalInicial === 0 && aportacion === 0) {
      UI.showError(root, "Introduce un capital inicial y/o una aportación mensual mayores que cero.");
      return;
    }

    var i = F.monthlyRateFromAnnualPct(interes);
    var n = Math.round(plazoAnios * 12);
    var result = F.compoundGrowth(capitalInicial, i, n, aportacion, false);

    UI.setText(root, "[data-valor-final]", fmt.currency(result.futureValue));
    UI.setText(root, "[data-total-aportado]", fmt.currency(result.totalContributed));
    UI.setText(root, "[data-interes-generado]", fmt.currency(result.interestEarned));

    var aportadoPct = (result.totalContributed / result.futureValue) * 100;
    var interesPct = 100 - aportadoPct;
    UI.renderSplitBar(root, aportadoPct, interesPct);
    UI.setText(root, "[data-pct-principal]", fmt.number(aportadoPct, 1) + " %");
    UI.setText(root, "[data-pct-interes]", fmt.number(interesPct, 1) + " %");

    UI.showResults(root);
    document.getElementById("resultado-cuota").scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
