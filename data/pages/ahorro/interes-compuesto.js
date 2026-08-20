module.exports = ({ adSlot }) => ({
  path: "/calculadoras-ahorro/calculadora-interes-compuesto/",
  title: "Calculadora de interés compuesto con aportaciones mensuales | Cuantía",
  description: "Calcula cuánto crecerá tu capital con interés compuesto, aportando una cantidad fija cada mes. Incluye el reparto entre lo aportado y los intereses generados.",
  activeNav: "/calculadoras/",
  priority: "0.9",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Calculadoras de ahorro", href: "/calculadoras-ahorro/" },
    { label: "Calculadora de interés compuesto", href: "/calculadoras-ahorro/calculadora-interes-compuesto/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Calculadora de interés compuesto",
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
          "name": "¿Qué es el interés compuesto?",
          "acceptedAnswer": { "@type": "Answer", "text": "Es el interés que se calcula no solo sobre el capital inicial, sino también sobre los intereses ya generados en periodos anteriores. Esto hace que el capital crezca de forma acelerada (exponencial) cuanto más tiempo pasa, a diferencia del interés simple." },
        },
        {
          "@type": "Question",
          "name": "¿Qué frecuencia de capitalización usa esta calculadora?",
          "acceptedAnswer": { "@type": "Answer", "text": "Capitaliza mensualmente: cada mes se suman al capital tanto la aportación como los intereses generados ese mes. Es una aproximación razonable para productos con capitalización mensual o compuesta." },
        },
        {
          "@type": "Question",
          "name": "¿El interés anual que introduzco está garantizado?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Es una estimación que decides tú para comparar escenarios. Ningún depósito, fondo indexado ni otro producto de inversión garantiza una rentabilidad futura; los rendimientos pasados tampoco garantizan resultados futuros." },
        },
        {
          "@type": "Question",
          "name": "¿Cuánto influye empezar a ahorrar unos años antes?",
          "acceptedAnswer": { "@type": "Answer", "text": "Mucho: con interés compuesto, el tiempo es el factor que más pesa. Empezar unos años antes, aunque sea con aportaciones pequeñas, suele generar más capital final que aportar más dinero durante menos años." },
        },
      ],
    },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Calculadora de interés compuesto</h1>
      <p class="text-soft">Introduce tu capital inicial, tu aportación mensual y un interés anual estimado para ver cuánto puede crecer tu dinero.</p>

      ${adSlot("top")}

      <div class="tool-layout">
        <div>
          <div class="tool-card">
            <form id="calc-form" novalidate>
              <div class="field-row">
                <div class="field">
                  <label for="capital">Capital inicial</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="capital" name="capital" value="1000">
                    <span class="suffix">€</span>
                  </div>
                </div>
                <div class="field">
                  <label for="aportacion">Aportación mensual</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="aportacion" name="aportacion" value="150">
                    <span class="suffix">€</span>
                  </div>
                </div>
              </div>
              <div class="field-row">
                <div class="field">
                  <label for="interes">Interés anual estimado</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="interes" name="interes" value="5" required>
                    <span class="suffix">%</span>
                  </div>
                </div>
                <div class="field">
                  <label for="plazo">Plazo</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="plazo" name="plazo" value="15" required>
                    <span class="suffix">años</span>
                  </div>
                </div>
              </div>
              <p class="status-msg error" data-error hidden></p>
              <button type="submit" class="btn">Calcular</button>
            </form>

            <div class="result-panel" data-results hidden id="resultado-cuota">
              <div class="result-hero">
                <div class="value" data-valor-final>—</div>
                <div class="label">Capital final estimado</div>
              </div>
              <div class="result-grid">
                <div class="result-stat"><div class="value" data-total-aportado>—</div><div class="label">Total aportado</div></div>
                <div class="result-stat"><div class="value" data-interes-generado>—</div><div class="label">Interés generado</div></div>
              </div>

              <h3>Reparto del capital final</h3>
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
            <h2>Cómo se calcula</h2>
            <p>
              La calculadora capitaliza el interés mensualmente: cada mes se suman los intereses generados tanto por
              el capital inicial como por las aportaciones ya realizadas, y esos intereses pasan a formar parte del
              capital sobre el que se calculan los intereses del mes siguiente. Es una simplificación razonable de
              productos con capitalización mensual o compuesta; algunos productos reales capitalizan con otra
              frecuencia (trimestral, anual), lo que puede dar resultados ligeramente distintos.
            </p>
            <p>
              El interés anual que introduzcas es una <strong>estimación</strong> que tú decides: ni los depósitos,
              ni los fondos indexados, ni ningún otro producto garantizan una rentabilidad futura. Usa esta
              calculadora para comparar escenarios ("¿y si aporto 50 € más al mes?"), no como una promesa de
              rentabilidad.
            </p>

            <h2>Preguntas frecuentes</h2>
            <div class="faq-item">
              <h3>¿Qué es el interés compuesto?</h3>
              <p>El interés que se calcula sobre el capital inicial y también sobre los intereses ya generados, lo que hace que el capital crezca de forma acelerada con el tiempo.</p>
            </div>
            <div class="faq-item">
              <h3>¿Qué frecuencia de capitalización usa esta calculadora?</h3>
              <p>Capitaliza mensualmente: cada mes se suman la aportación y los intereses generados ese mes al capital.</p>
            </div>
            <div class="faq-item">
              <h3>¿El interés anual que introduzco está garantizado?</h3>
              <p>No, es una estimación que tú decides para comparar escenarios. Ningún producto de inversión garantiza una rentabilidad futura.</p>
            </div>
            <div class="faq-item">
              <h3>¿Cuánto influye empezar a ahorrar unos años antes?</h3>
              <p>Mucho: con interés compuesto el tiempo es el factor que más pesa, más incluso que aportar cantidades mayores durante menos años.</p>
            </div>
          </div>

          ${adSlot("bottom")}
        </div>

        <aside class="sidebar">
          <div class="card">
            <h4>Calculadoras relacionadas</h4>
            <ul class="related-list">
              <li><a href="/calculadoras-ahorro/calculadora-ahorro-objetivo/">Ahorro objetivo</a></li>
              <li><a href="/conversor-divisas/">Conversor de divisas</a></li>
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
    "/assets/js/calculators/interes-compuesto.js",
  ],
});
