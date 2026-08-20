/* Calculadora de ahorro objetivo */
(function () {
  "use strict";
  var form = document.getElementById("calc-form");
  if (!form) return;
  var F = window.CuantiaFinance, UI = window.CuantiaUI, fmt = window.cuantiaFormat;
  var root = document;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    UI.hideError(root);

    var objetivo = UI.parseNumber(form.objetivo.value);
    var capitalInicial = UI.parseNumber(form.capital.value) || 0;
    var plazoAnios = UI.parseNumber(form.plazo.value);
    var interes = UI.parseNumber(form.interes.value);

    if (!(objetivo > 0) || capitalInicial < 0 || !(plazoAnios > 0) || !(interes >= 0)) {
      UI.showError(root, "Revisa los datos: el objetivo y el plazo deben ser mayores que cero, y el capital inicial no puede ser negativo.");
      return;
    }

    var i = F.monthlyRateFromAnnualPct(interes);
    var n = Math.round(plazoAnios * 12);
    var aportacion = F.requiredContribution(objetivo, i, n, capitalInicial);
    var totalAportado = capitalInicial + aportacion * n;
    var interesGenerado = objetivo - totalAportado;

    UI.setText(root, "[data-aportacion]", fmt.currency(aportacion));
    UI.setText(root, "[data-total-aportado]", fmt.currency(totalAportado));
    UI.setText(root, "[data-interes-generado]", fmt.currency(Math.max(0, interesGenerado)));
    UI.setText(root, "[data-objetivo]", fmt.currency(objetivo));

    var aportadoPct = Math.min(100, (totalAportado / objetivo) * 100);
    var interesPct = 100 - aportadoPct;
    UI.renderSplitBar(root, aportadoPct, interesPct);
    UI.setText(root, "[data-pct-principal]", fmt.number(aportadoPct, 1) + " %");
    UI.setText(root, "[data-pct-interes]", fmt.number(interesPct, 1) + " %");

    UI.showResults(root);
    document.getElementById("resultado-cuota").scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
