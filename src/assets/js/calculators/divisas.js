/* Conversor de divisas — usa la API pública y gratuita Frankfurter
   (https://frankfurter.dev), sin necesidad de clave de API, con datos
   del Banco Central Europeo actualizados en días hábiles. */
(function () {
  "use strict";
  var form = document.getElementById("calc-form");
  if (!form) return;
  var UI = window.CuantiaUI, fmt = window.cuantiaFormat;
  var root = document;

  var TARGET_CURRENCIES = ["USD", "GBP", "JPY", "MXN", "ARS", "COP", "CLP", "BRL", "CHF"];
  var CURRENCY_NAMES = {
    EUR: "Euro", USD: "Dólar estadounidense", GBP: "Libra esterlina", JPY: "Yen japonés",
    MXN: "Peso mexicano", ARS: "Peso argentino", COP: "Peso colombiano", CLP: "Peso chileno",
    BRL: "Real brasileño", CHF: "Franco suizo"
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    UI.hideError(root);

    var cantidad = UI.parseNumber(form.cantidad.value);
    var origen = form.origen.value;
    var destino = form.destino.value;

    if (!(cantidad > 0)) {
      UI.showError(root, "Introduce una cantidad válida mayor que cero.");
      return;
    }
    if (origen === destino) {
      UI.showError(root, "Elige dos monedas distintas para convertir.");
      return;
    }

    fetchAndRender(cantidad, origen, destino);
  });

  function fetchAndRender(cantidad, origen, destino) {
    var statusEl = document.querySelector("[data-fx-status]");
    if (statusEl) { statusEl.hidden = false; statusEl.className = "status-msg"; statusEl.textContent = "Consultando el tipo de cambio actual…"; }

    var url = "https://api.frankfurter.dev/v1/latest?base=" + origen + "&symbols=" + destino;
    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function (data) {
        var rate = data.rates && data.rates[destino];
        if (!rate) throw new Error("Sin datos para ese par de divisas");
        var converted = cantidad * rate;

        UI.setText(root, "[data-fx-result]", fmt.number(converted, 2) + " " + destino);
        UI.setText(root, "[data-fx-rate]", "1 " + origen + " = " + fmt.number(rate, 4) + " " + destino);
        UI.setText(root, "[data-fx-date]", "Fecha del tipo de cambio: " + (data.date || "—") + " (fuente: Banco Central Europeo, vía Frankfurter API)");
        UI.showResults(root);

        if (statusEl) statusEl.hidden = true;

        renderTable(cantidad, origen);
      })
      .catch(function () {
        if (statusEl) {
          statusEl.className = "status-msg error";
          statusEl.textContent = "No hemos podido obtener el tipo de cambio en vivo en este momento. Inténtalo de nuevo en unos segundos.";
        }
      });
  }

  function renderTable(cantidad, origen) {
    var tbody = document.querySelector("[data-fx-table-body]");
    if (!tbody) return;
    var targets = TARGET_CURRENCIES.filter(function (c) { return c !== origen; }).slice(0, 6);
    if (origen !== "EUR") targets.unshift("EUR");
    var symbols = targets.join(",");
    fetch("https://api.frankfurter.dev/v1/latest?base=" + origen + "&symbols=" + symbols)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        tbody.innerHTML = "";
        targets.forEach(function (c) {
          var rate = data.rates && data.rates[c];
          if (!rate) return;
          var tr = document.createElement("tr");
          tr.innerHTML =
            "<td>" + (CURRENCY_NAMES[c] || c) + " (" + c + ")</td>" +
            "<td>" + fmt.number(cantidad * rate, 2) + " " + c + "</td>";
          tbody.appendChild(tr);
        });
      })
      .catch(function () { /* tabla secundaria: fallo silencioso, el resultado principal ya se mostró */ });
  }
})();
