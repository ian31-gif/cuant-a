/* =========================================================
   Cuantía — finance.js
   Funciones financieras compartidas por las calculadoras.
   Sistema de amortización francés (cuota constante), estándar
   en préstamos e hipotecas al consumo en España y Latinoamérica.
   ========================================================= */
(function (global) {
  "use strict";

  /** Convierte un tipo de interés nominal anual (%) a tasa mensual (decimal). */
  function monthlyRateFromAnnualPct(annualPct) {
    return (annualPct / 100) / 12;
  }

  /**
   * Cuota mensual constante (sistema francés).
   * @param {number} principal Importe del préstamo.
   * @param {number} i Tasa de interés mensual (decimal, p.ej. 0.004167).
   * @param {number} n Número de cuotas (meses).
   */
  function loanPayment(principal, i, n) {
    if (n <= 0) return 0;
    if (i === 0) return principal / n;
    var factor = Math.pow(1 + i, n);
    return (principal * i * factor) / (factor - 1);
  }

  /**
   * Genera el cuadro de amortización completo.
   * Devuelve un array de { month, payment, interest, principal, balance }.
   */
  function amortizationSchedule(principal, i, n) {
    var payment = loanPayment(principal, i, n);
    var balance = principal;
    var rows = [];
    for (var m = 1; m <= n; m++) {
      var interest = balance * i;
      var principalPaid = payment - interest;
      balance = Math.max(0, balance - principalPaid);
      rows.push({
        month: m,
        payment: payment,
        interest: interest,
        principal: principalPaid,
        balance: balance
      });
    }
    return rows;
  }

  /** Totales agregados de un cuadro de amortización. */
  function amortizationTotals(schedule) {
    var totalInterest = 0, totalPrincipal = 0, totalPaid = 0;
    schedule.forEach(function (r) {
      totalInterest += r.interest;
      totalPrincipal += r.principal;
      totalPaid += r.payment;
    });
    return { totalInterest: totalInterest, totalPrincipal: totalPrincipal, totalPaid: totalPaid };
  }

  /**
   * Interés compuesto con aportaciones periódicas constantes.
   * @param {number} principal Capital inicial.
   * @param {number} i Tasa periódica (decimal, mensual).
   * @param {number} n Número de periodos (meses).
   * @param {number} contribution Aportación por periodo (0 si no aplica).
   * @param {boolean} atStart Si la aportación se realiza al inicio de cada periodo.
   */
  function compoundGrowth(principal, i, n, contribution, atStart) {
    contribution = contribution || 0;
    var futureOfPrincipal = principal * Math.pow(1 + i, n);
    var futureOfContributions;
    if (i === 0) {
      futureOfContributions = contribution * n;
    } else {
      futureOfContributions = contribution * ((Math.pow(1 + i, n) - 1) / i);
      if (atStart) futureOfContributions *= (1 + i);
    }
    var futureValue = futureOfPrincipal + futureOfContributions;
    var totalContributed = principal + contribution * n;
    return {
      futureValue: futureValue,
      totalContributed: totalContributed,
      interestEarned: futureValue - totalContributed
    };
  }

  /**
   * Aportación periódica necesaria para alcanzar un objetivo (valor futuro),
   * partiendo de un capital inicial opcional.
   */
  function requiredContribution(goal, i, n, initial) {
    initial = initial || 0;
    var remaining = goal - initial * Math.pow(1 + i, n);
    if (remaining <= 0) return 0;
    if (i === 0) return remaining / n;
    return remaining * i / (Math.pow(1 + i, n) - 1);
  }

  /**
   * TAE (Tasa Anual Equivalente) a partir del TIN, el plazo y una comisión
   * de apertura, mediante búsqueda de la tasa mensual que iguala el importe
   * neto recibido al valor actual de las cuotas (método estándar, análogo
   * al usado por el Banco de España; no incluye otros gastos ligados
   * -seguros, correo- que también deberían añadirse a la TAE real).
   */
  function aprFromTin(principal, tinAnnualPct, months, feesPct) {
    feesPct = feesPct || 0;
    var i = monthlyRateFromAnnualPct(tinAnnualPct);
    var payment = loanPayment(principal, i, months);
    var netReceived = principal * (1 - feesPct / 100);

    // Búsqueda por bisección de la tasa mensual "im" que cumple:
    // netReceived = payment * sum_{k=1..n} 1/(1+im)^k
    function pv(rate) {
      if (rate === 0) return payment * months;
      return payment * (1 - Math.pow(1 + rate, -months)) / rate;
    }

    var lo = -0.01, hi = 1; // rango amplio de tasas mensuales
    for (var iter = 0; iter < 100; iter++) {
      var mid = (lo + hi) / 2;
      var diff = pv(mid) - netReceived;
      if (Math.abs(diff) < 1e-8) { lo = hi = mid; break; }
      // pv(rate) es decreciente en rate
      if (diff > 0) lo = mid; else hi = mid;
    }
    var monthlyApr = (lo + hi) / 2;
    var annualApr = (Math.pow(1 + monthlyApr, 12) - 1) * 100;
    return { tae: annualApr, cuota: payment, netReceived: netReceived };
  }

  global.CuantiaFinance = {
    monthlyRateFromAnnualPct: monthlyRateFromAnnualPct,
    loanPayment: loanPayment,
    amortizationSchedule: amortizationSchedule,
    amortizationTotals: amortizationTotals,
    compoundGrowth: compoundGrowth,
    requiredContribution: requiredContribution,
    aprFromTin: aprFromTin
  };

  // Exportación para Node (usada en los tests de verificación).
  if (typeof module !== "undefined" && module.exports) {
    module.exports = global.CuantiaFinance;
  }
})(typeof window !== "undefined" ? window : global);
