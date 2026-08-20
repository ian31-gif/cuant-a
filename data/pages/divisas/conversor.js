module.exports = ({ adSlot }) => ({
  path: "/conversor-divisas/",
  title: "Conversor de divisas en tiempo real | Cuantía",
  description: "Convierte entre euro, dólar, libra, peso mexicano, peso argentino y otras divisas con el tipo de cambio actualizado del Banco Central Europeo.",
  activeNav: "/calculadoras/",
  priority: "0.9",
  changefreq: "daily",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Conversor de divisas", href: "/conversor-divisas/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Conversor de divisas",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿De dónde salen los tipos de cambio de este conversor?",
          "acceptedAnswer": { "@type": "Answer", "text": "De la API pública de Frankfurter, que publica los tipos de cambio de referencia del Banco Central Europeo, actualizados una vez cada día hábil (no incluye fines de semana ni festivos del BCE)." },
        },
        {
          "@type": "Question",
          "name": "¿Es el tipo de cambio que me van a aplicar en el banco?",
          "acceptedAnswer": { "@type": "Answer", "text": "No exactamente: es un tipo de referencia. En una operación real (transferencia, cambio de efectivo, tarjeta en el extranjero) la entidad suele aplicar un margen o comisión sobre este tipo, por lo que el cambio efectivo será algo distinto." },
        },
        {
          "@type": "Question",
          "name": "¿Con qué frecuencia se actualizan los tipos?",
          "acceptedAnswer": { "@type": "Answer", "text": "El Banco Central Europeo publica un tipo de referencia por cada día hábil, alrededor de las 16:00 CET. Fuera de ese horario o en fines de semana, la calculadora muestra el último tipo publicado." },
        },
      ],
    },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Conversor de divisas</h1>
      <p class="text-soft">Convierte entre las principales divisas con el tipo de cambio de referencia del Banco Central Europeo, actualizado en días hábiles.</p>

      ${adSlot("top")}

      <div class="tool-layout">
        <div>
          <div class="tool-card">
            <form id="calc-form" novalidate>
              <div class="field">
                <label for="cantidad">Cantidad</label>
                <div class="input-wrap">
                  <input type="text" inputmode="decimal" id="cantidad" name="cantidad" value="100" required>
                </div>
              </div>
              <div class="field-row">
                <div class="field">
                  <label for="origen">De</label>
                  <div class="input-wrap">
                    ${currencySelect("origen", "EUR")}
                  </div>
                </div>
                <div class="field">
                  <label for="destino">A</label>
                  <div class="input-wrap">
                    ${currencySelect("destino", "USD")}
                  </div>
                </div>
              </div>
              <p class="status-msg error" data-error hidden></p>
              <p class="status-msg" data-fx-status hidden></p>
              <button type="submit" class="btn">Convertir</button>
            </form>

            <div class="result-panel" data-results hidden id="resultado-cuota">
              <div class="result-hero">
                <div class="value" data-fx-result>—</div>
                <div class="label" data-fx-rate>—</div>
              </div>
              <p class="text-soft" data-fx-date style="font-size:0.85rem;text-align:center;"></p>

              <h3>Misma cantidad en otras divisas</h3>
              <div class="table-wrap">
                <table class="fx">
                  <thead><tr><th>Divisa</th><th>Equivalencia</th></tr></thead>
                  <tbody data-fx-table-body></tbody>
                </table>
              </div>
            </div>
          </div>

          ${adSlot("incontent")}

          <div class="article-body">
            <h2>De dónde salen los tipos de cambio</h2>
            <p>
              Esta calculadora consulta en tiempo real la API pública de Frankfurter, que a su vez publica los
              tipos de cambio de referencia del Banco Central Europeo, actualizados una vez cada día hábil (no
              incluye fines de semana ni festivos del BCE). Son tipos de referencia, no el tipo exacto que
              obtendrías en una operación de cambio real, que suele incluir un margen o comisión de la entidad que
              hace el cambio.
            </p>
            <div class="callout callout-info">
              <p>Si vas a viajar o a hacer una transferencia internacional, compara este tipo de referencia con el que te ofrezca tu banco o plataforma de cambio: la diferencia entre ambos es, en la práctica, el coste real de la operación.</p>
            </div>

            <h2>Preguntas frecuentes</h2>
            <div class="faq-item">
              <h3>¿De dónde salen los tipos de cambio de este conversor?</h3>
              <p>De la API pública de Frankfurter, que publica los tipos de referencia del Banco Central Europeo, actualizados cada día hábil.</p>
            </div>
            <div class="faq-item">
              <h3>¿Es el tipo de cambio que me van a aplicar en el banco?</h3>
              <p>No exactamente: es un tipo de referencia. En una operación real la entidad suele aplicar un margen o comisión sobre este tipo.</p>
            </div>
            <div class="faq-item">
              <h3>¿Con qué frecuencia se actualizan los tipos?</h3>
              <p>El BCE publica un tipo por cada día hábil, en torno a las 16:00 CET. Fuera de ese horario se muestra el último tipo publicado.</p>
            </div>
          </div>

          ${adSlot("bottom")}
        </div>

        <aside class="sidebar">
          <div class="card">
            <h4>Calculadoras relacionadas</h4>
            <ul class="related-list">
              <li><a href="/calculadoras-ahorro/calculadora-interes-compuesto/">Interés compuesto</a></li>
              <li><a href="/calculadoras-prestamos/calculadora-cuota-prestamo-personal/">Cuota de préstamo</a></li>
            </ul>
          </div>
          ${adSlot("sidebar")}
        </aside>
      </div>
    </div>
    ${adSlot("anchor")}
  `,
  extraScripts: [
    "/assets/js/calculators/ui-helpers.js",
    "/assets/js/calculators/divisas.js",
  ],
});

function currencySelect(name, selected) {
  const options = [
    ["EUR", "Euro (EUR)"], ["USD", "Dólar estadounidense (USD)"], ["GBP", "Libra esterlina (GBP)"],
    ["JPY", "Yen japonés (JPY)"], ["MXN", "Peso mexicano (MXN)"], ["ARS", "Peso argentino (ARS)"],
    ["COP", "Peso colombiano (COP)"], ["CLP", "Peso chileno (CLP)"], ["BRL", "Real brasileño (BRL)"],
    ["CHF", "Franco suizo (CHF)"],
  ];
  const opts = options.map(([value, label]) => `<option value="${value}"${value === selected ? " selected" : ""}>${label}</option>`).join("");
  return `<select id="${name}" name="${name}">${opts}</select>`;
}
