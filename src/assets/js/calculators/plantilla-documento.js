/* Generador de factura / presupuesto: totales en vivo + impresión a PDF */
(function () {
  "use strict";
  var doc = document.getElementById("doc-preview");
  if (!doc) return;
  var fmt = window.cuantiaFormat;
  var rowsBody = document.getElementById("doc-rows");
  var addRowBtn = document.getElementById("add-row");
  var printBtn = document.getElementById("print-btn");
  var ivaInput = document.getElementById("iva");
  var retencionInput = document.getElementById("retencion");

  function parseNum(v) {
    if (!v) return 0;
    var n = parseFloat(String(v).replace(",", "."));
    return isNaN(n) ? 0 : n;
  }
  function currency(v) { return fmt.currency(isNaN(v) ? 0 : v); }

  function addRow(concepto, cantidad, precio) {
    var tr = document.createElement("tr");
    tr.innerHTML =
      '<td><input type="text" class="invoice-input row-concepto" placeholder="Descripción del producto o servicio" value="' + escapeAttr(concepto || "") + '"></td>' +
      '<td><input type="text" inputmode="decimal" class="invoice-input row-cantidad" value="' + (cantidad != null ? cantidad : 1) + '"></td>' +
      '<td><input type="text" inputmode="decimal" class="invoice-input row-precio" value="' + (precio != null ? precio : "") + '" placeholder="0,00"></td>' +
      '<td class="row-subtotal">0,00 €</td>' +
      '<td class="no-print"><button type="button" class="row-remove" aria-label="Eliminar línea">✕</button></td>';
    rowsBody.appendChild(tr);
  }

  function escapeAttr(str) {
    return String(str).replace(/"/g, "&quot;");
  }

  function recalc() {
    var subtotal = 0;
    rowsBody.querySelectorAll("tr").forEach(function (tr) {
      var cantidad = parseNum(tr.querySelector(".row-cantidad").value);
      var precio = parseNum(tr.querySelector(".row-precio").value);
      var lineTotal = cantidad * precio;
      tr.querySelector(".row-subtotal").textContent = currency(lineTotal);
      subtotal += lineTotal;
    });

    var ivaPct = ivaInput ? parseNum(ivaInput.value) : 0;
    var iva = subtotal * (ivaPct / 100);
    var retPct = retencionInput ? parseNum(retencionInput.value) : 0;
    var retencion = subtotal * (retPct / 100);
    var total = subtotal + iva - retencion;

    setText("out-subtotal", currency(subtotal));
    setText("out-iva", currency(iva));
    if (retencionInput) setText("out-retencion", "−" + currency(retencion));
    setText("out-total", currency(total));
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  addRowBtn.addEventListener("click", function () { addRow(); recalc(); });
  rowsBody.addEventListener("click", function (e) {
    if (e.target.classList.contains("row-remove")) {
      e.target.closest("tr").remove();
      recalc();
    }
  });
  doc.addEventListener("input", recalc);

  if (printBtn) {
    printBtn.addEventListener("click", function () { window.print(); });
  }

  // Filas iniciales de ejemplo.
  addRow("", 1, "");
  addRow("", 1, "");
  recalc();

  // Fecha de hoy por defecto.
  var fechaInput = document.getElementById("fecha");
  if (fechaInput && !fechaInput.value) {
    fechaInput.value = new Date().toISOString().slice(0, 10);
  }
})();
