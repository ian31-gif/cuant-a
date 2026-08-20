/* Búsqueda interna: filtrado simple en el cliente sobre un índice JSON */
(function () {
  "use strict";
  var input = document.getElementById("buscar-input");
  var resultsEl = document.getElementById("buscar-resultados");
  var countEl = document.getElementById("buscar-count");
  if (!input || !resultsEl) return;

  var INDEX = [];

  function normalize(str) {
    return String(str || "")
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function render(query) {
    var q = normalize(query).trim();
    if (!q) {
      resultsEl.innerHTML = "";
      countEl.textContent = "Escribe una palabra clave para buscar entre todas las calculadoras, plantillas y artículos.";
      return;
    }
    var matches = INDEX.filter(function (item) {
      return normalize(item.title).indexOf(q) !== -1 || normalize(item.description).indexOf(q) !== -1;
    }).slice(0, 30);

    countEl.textContent = matches.length
      ? matches.length + " resultado" + (matches.length === 1 ? "" : "s") + " para “" + query + "”"
      : "Sin resultados para “" + query + "”. Prueba con otra palabra.";

    resultsEl.innerHTML = matches.map(function (item) {
      return '<li><a href="' + item.path + '"><strong>' + escapeHtml(item.title) + "</strong>" +
        '<span class="text-soft" style="display:block;font-size:0.88rem;font-weight:400;">' + escapeHtml(item.description) + "</span></a></li>";
    }).join("");
  }

  function escapeHtml(str) {
    return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  fetch("/assets/search-index.json")
    .then(function (res) { return res.json(); })
    .then(function (data) {
      INDEX = data;
      var params = new URLSearchParams(window.location.search);
      var q = params.get("q");
      if (q) {
        input.value = q;
        render(q);
      } else {
        render("");
      }
    });

  input.addEventListener("input", function () { render(input.value); });
})();
