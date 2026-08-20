module.exports = ({ adSlot }) => ({
  path: "/calculadoras-ahorro/calculadora-ahorro-objetivo/",
  title: "Calculadora de ahorro objetivo: ¿cuánto ahorrar al mes? | Cuantía",
  description: "Calcula cuánto tienes que ahorrar cada mes para alcanzar tu objetivo financiero, según el plazo y la rentabilidad estimada.",
  activeNav: "/calculadoras/",
  priority: "0.8",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Calculadoras de ahorro", href: "/calculadoras-ahorro/" },
    { label: "Calculadora de ahorro objetivo", href: "/calculadoras-ahorro/calculadora-ahorro-objetivo/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Calculadora de ahorro objetivo",
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
          "name": "¿Cómo calcula esta herramienta la aportación mensual?",
          "acceptedAnswer": { "@type": "Answer", "text": "Resuelve la fórmula del interés compuesto de forma inversa: en vez de partir de una aportación para saber cuánto tendrás, parte de tu meta de ahorro para decirte cuánto debes aportar cada mes, dado el plazo y la rentabilidad que indiques." },
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si pongo una rentabilidad de 0 %?",
          "acceptedAnswer": { "@type": "Answer", "text": "La calculadora reparte el objetivo (menos el capital inicial) entre el número de meses del plazo, sin sumar ningún interés. Es el escenario correcto si vas a ahorrar en una cuenta corriente sin remuneración." },
        },
        {
          "@type": "Question",
          "name": "¿Para qué tipo de metas sirve esta calculadora?",
          "acceptedAnswer": { "@type": "Answer", "text": "Para cualquier objetivo con una cantidad y un plazo definidos: la entrada de una vivienda, un fondo de emergencia, un viaje o cualquier compra importante que quieras planificar con antelación." },
        },
        {
          "@type": "Question",
          "name": "¿Qué ocurre si ya tengo parte del objetivo ahorrado?",
          "acceptedAnswer": { "@type": "Answer", "text": "Indícalo en el campo «capital inicial»: la calculadora lo tendrá en cuenta y reducirá la aportación mensual necesaria, ya que ese dinero también generará intereses durante el plazo." },
        },
      ],
    },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Calculadora de ahorro objetivo</h1>
      <p class="text-soft">Indica tu meta de ahorro, el plazo y una rentabilidad estimada, y calcula cuánto necesitas aportar cada mes.</p>

      ${adSlot("top")}

      <div class="tool-layout">
        <div>
          <div class="tool-card">
            <form id="calc-form" novalidate>
              <div class="field">
                <label for="objetivo">Objetivo de ahorro</label>
                <div class="input-wrap">
                  <input type="text" inputmode="decimal" id="objetivo" name="objetivo" value="15000" required>
                  <span class="suffix">€</span>
                </div>
              </div>
              <div class="field-row">
                <div class="field">
                  <label for="capital">Capital inicial (si ya tienes ahorrado)</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="capital" name="capital" value="0">
                    <span class="suffix">€</span>
                  </div>
                </div>
                <div class="field">
                  <label for="plazo">Plazo</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="plazo" name="plazo" value="4" required>
                    <span class="suffix">años</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <label for="interes">Rentabilidad anual estimada</label>
                <div class="input-wrap">
                  <input type="text" inputmode="decimal" id="interes" name="interes" value="3" required>
                  <span class="suffix">%</span>
                </div>
                <p class="hint">Pon 0 si vas a ahorrar en una cuenta sin remuneración.</p>
              </div>
              <p class="status-msg error" data-error hidden></p>
              <button type="submit" class="btn">Calcular aportación necesaria</button>
            </form>

            <div class="result-panel" data-results hidden id="resultado-cuota">
              <div class="result-hero">
                <div class="value" data-aportacion>—</div>
                <div class="label">Aportación mensual necesaria</div>
              </div>
              <div class="result-grid">
                <div class="result-stat"><div class="value" data-objetivo>—</div><div class="label">Objetivo</div></div>
                <div class="result-stat"><div class="value" data-total-aportado>—</div><div class="label">Total aportado</div></div>
                <div class="result-stat"><div class="value" data-interes-generado>—</div><div class="label">Interés generado</div></div>
              </div>

              <h3>Composición del objetivo</h3>
              <div class="split-bar">
                <div class="seg-principal" data-seg-principal style="width:0%"></div>
                <div class="seg-interes" data-seg-interes style="width:0%"></div>
              </div>
              <div class="split-legend">
                <span><span class="dot dot-principal"></span>Aportado (<span data-pct-principal>—</span>)</span>
                <span><span class="dot dot-interes"></span>Interés generado (<span data-pct-interes>—</span>)</span>
              </div>
            </div>
          </div>

          ${adSlot("incontent")}

          <div class="article-body">
            <h2>Cómo se calcula la aportación necesaria</h2>
            <p>
              Esta calculadora resuelve la fórmula del interés compuesto "al revés": en vez de partir de una
              aportación para saber cuánto tendrás, parte de la meta para decirte cuánto debes aportar cada mes.
              Cuanto mayor sea el plazo o la rentabilidad estimada, menor será la aportación mensual necesaria para
              llegar al mismo objetivo.
            </p>
            <p>
              Es una herramienta útil para metas concretas: la entrada de una vivienda, un fondo de emergencia o un
              viaje importante. Si ya tienes parte del objetivo ahorrado, indícalo en "capital inicial" para que el
              cálculo lo tenga en cuenta.
            </p>

            <h2>Preguntas frecuentes</h2>
            <div class="faq-item">
              <h3>¿Cómo calcula esta herramienta la aportación mensual?</h3>
              <p>Resuelve el interés compuesto de forma inversa: parte de tu meta para decirte cuánto debes aportar cada mes, dado el plazo y la rentabilidad indicados.</p>
            </div>
            <div class="faq-item">
              <h3>¿Qué pasa si pongo una rentabilidad de 0 %?</h3>
              <p>Reparte el objetivo (menos el capital inicial) entre los meses del plazo, sin sumar interés. Es el escenario correcto para una cuenta sin remuneración.</p>
            </div>
            <div class="faq-item">
              <h3>¿Para qué tipo de metas sirve?</h3>
              <p>Para cualquier objetivo con cantidad y plazo definidos: entrada de vivienda, fondo de emergencia, un viaje o una compra importante.</p>
            </div>
            <div class="faq-item">
              <h3>¿Qué ocurre si ya tengo parte del objetivo ahorrado?</h3>
              <p>Indícalo en "capital inicial": la calculadora lo tendrá en cuenta y reducirá la aportación mensual necesaria.</p>
            </div>
          </div>

          ${adSlot("bottom")}
        </div>

        <aside class="sidebar">
          <div class="card">
            <h4>Calculadoras relacionadas</h4>
            <ul class="related-list">
              <li><a href="/calculadoras-ahorro/calculadora-interes-compuesto/">Interés compuesto</a></li>
              <li><a href="/calculadoras-hipotecas/calculadora-cuota-hipotecaria/">Cuota hipotecaria</a></li>
            </ul>
          </div>
          ${adSlot("sidebar")}
        </aside>
      </div>
    </div>
    ${adSlot("anchor")}
  `,
  extraScripts: [
    "/assets/js/calculators/finance.js",
    "/assets/js/calculators/ui-helpers.js",
    "/assets/js/calculators/ahorro.js",
  ],
});
