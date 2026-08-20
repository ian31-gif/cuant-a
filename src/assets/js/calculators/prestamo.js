/* Calculadora de cuota de préstamo personal */
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

    if (!(principal > 0) || !(tin >= 0) || !(plazoMeses > 0)) {
      UI.showError(root, "Revisa los datos: importe, TIN y plazo deben ser números válidos mayores que cero (el TIN puede ser 0).");
      return;
    }
    if (plazoMeses > 600) {
      UI.showError(root, "El plazo introducido parece demasiado alto. Prueba con un número de meses realista para un préstamo personal (hasta 600).");
      return;
    }

    var i = F.monthlyRateFromAnnualPct(tin);
    var schedule = F.amortizationSchedule(principal, i, Math.round(plazoMeses));
    var totals = F.amortizationTotals(schedule);
    var cuota = schedule[0].payment;

    UI.setText(root, "[data-cuota]", fmt.currency(cuota));
    UI.setText(root, "[data-total-pagado]", fmt.currency(totals.totalPaid));
    UI.setText(root, "[data-total-interes]", fmt.currency(totals.totalInterest));
    UI.setText(root, "[data-importe]", fmt.currency(principal));

    var principalPct = (principal / totals.totalPaid) * 100;
    var interesPct = 100 - principalPct;
    UI.renderSplitBar(root, principalPct, interesPct);
    UI.setText(root, "[data-pct-principal]", fmt.number(principalPct, 1) + " %");
    UI.setText(root, "[data-pct-interes]", fmt.number(interesPct, 1) + " %");

    renderTable(schedule);
    UI.showResults(root);
    document.getElementById("resultado-cuota").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  function renderTable(schedule) {
    var tbody = document.querySelector("[data-amort-body]");
    if (!tbody) return;
    tbody.innerHTML = "";
    var rowsToShow = schedule.length <= 24 ? schedule : schedule.slice(0, 12).concat(schedule.slice(-3));
    var truncated = schedule.length > 24;
    rowsToShow.forEach(function (r, idx) {
      if (truncated && idx === 12) {
        var trEllipsis = document.createElement("tr");
        trEllipsis.innerHTML = '<td colspan="5" style="text-align:center;color:#97a3b3;">⋯</td>';
        tbody.appendChild(trEllipsis);
      }
      var tr = document.createElement("tr");
      tr.innerHTML =
        "<td>" + r.month + "</td>" +
        "<td>" + fmt.currency(r.payment) + "</td>" +
        "<td>" + fmt.currency(r.principal) + "</td>" +
        "<td>" + fmt.currency(r.interest) + "</td>" +
        "<td>" + fmt.currency(r.balance) + "</td>";
      tbody.appendChild(tr);
    });
  }
})();
