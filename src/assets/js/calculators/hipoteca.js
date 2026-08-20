/* Calculadora de cuota hipotecaria */
(function () {
  "use strict";
  var form = document.getElementById("calc-form");
  if (!form) return;
  var F = window.CuantiaFinance, UI = window.CuantiaUI, fmt = window.cuantiaFormat;
  var root = document;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    UI.hideError(root);

    var precio = UI.parseNumber(form.precio.value);
    var financiacionPct = UI.parseNumber(form.financiacion.value);
    var tin = UI.parseNumber(form.tin.value);
    var plazoAnios = UI.parseNumber(form.plazo.value);
    var gastosPct = UI.parseNumber(form.gastos.value);

    if (!(precio > 0) || !(financiacionPct > 0) || financiacionPct > 100 || !(tin >= 0) || !(plazoAnios > 0) || !(gastosPct >= 0)) {
      UI.showError(root, "Revisa los datos: precio de la vivienda, % de financiación (máx. 100), TIN, plazo y gastos deben ser válidos.");
      return;
    }
    if (plazoAnios > 40) {
      UI.showError(root, "El plazo introducido parece demasiado alto para una hipoteca residencial (máx. orientativo: 40 años).");
      return;
    }

    var importePrestamo = precio * (financiacionPct / 100);
    var plazoMeses = Math.round(plazoAnios * 12);
    var i = F.monthlyRateFromAnnualPct(tin);
    var schedule = F.amortizationSchedule(importePrestamo, i, plazoMeses);
    var totals = F.amortizationTotals(schedule);
    var cuota = schedule[0].payment;

    var entrada = precio - importePrestamo;
    var gastosEstimados = precio * (gastosPct / 100);
    var cashNecesario = entrada + gastosEstimados;

    UI.setText(root, "[data-cuota]", fmt.currency(cuota));
    UI.setText(root, "[data-importe-prestamo]", fmt.currency(importePrestamo));
    UI.setText(root, "[data-total-interes]", fmt.currency(totals.totalInterest));
    UI.setText(root, "[data-total-pagado]", fmt.currency(totals.totalPaid));
    UI.setText(root, "[data-entrada]", fmt.currency(entrada));
    UI.setText(root, "[data-gastos]", fmt.currency(gastosEstimados));
    UI.setText(root, "[data-cash-necesario]", fmt.currency(cashNecesario));

    var principalPct = (importePrestamo / totals.totalPaid) * 100;
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
    var yearly = [];
    for (var y = 0; y * 12 < schedule.length; y++) {
      var idx = Math.min(schedule.length - 1, y * 12 + 11);
      var row = schedule[idx];
      var yearPaidInterest = 0, yearPaidPrincipal = 0;
      for (var m = y * 12; m <= idx; m++) {
        yearPaidInterest += schedule[m].interest;
        yearPaidPrincipal += schedule[m].principal;
      }
      yearly.push({ year: y + 1, interest: yearPaidInterest, principal: yearPaidPrincipal, balance: row.balance });
    }
    yearly.forEach(function (r) {
      var tr = document.createElement("tr");
      tr.innerHTML =
        "<td>Año " + r.year + "</td>" +
        "<td>" + fmt.currency(r.principal) + "</td>" +
        "<td>" + fmt.currency(r.interest) + "</td>" +
        "<td>" + fmt.currency(r.balance) + "</td>";
      tbody.appendChild(tr);
    });
  }
})();
