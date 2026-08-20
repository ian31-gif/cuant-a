module.exports = ({ adSlot }) => ({
  path: "/calculadoras-prestamos/calculadora-tae-tin/",
  title: "Calculadora de TAE a partir del TIN — coste real del préstamo | Cuantía",
  description: "Calcula la TAE real de tu préstamo a partir del TIN, el plazo y la comisión de apertura. Descubre el coste efectivo antes de firmar.",
  activeNav: "/calculadoras/",
  priority: "0.8",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Calculadoras de préstamos", href: "/calculadoras-prestamos/" },
    { label: "Calculadora de TAE", href: "/calculadoras-prestamos/calculadora-tae-tin/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Calculadora de TAE a partir del TIN",
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
          "name": "¿Por qué la TAE es siempre mayor que el TIN?",
          "acceptedAnswer": { "@type": "Answer", "text": "Porque la TAE reparte el coste de las comisiones (por ejemplo, la de apertura) entre todas las cuotas del préstamo, además de tener en cuenta la frecuencia de pago. El TIN, en cambio, solo refleja el interés que se aplica sobre el capital pendiente." },
        },
        {
          "@type": "Question",
          "name": "¿Es obligatorio que el banco me muestre la TAE?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sí. Por normativa, las entidades financieras están obligadas a incluir la TAE en la oferta vinculante y en la publicidad de préstamos e hipotecas, precisamente para facilitar la comparación entre distintas ofertas." },
        },
        {
          "@type": "Question",
          "name": "¿Qué gastos no incluye esta calculadora de TAE?",
          "acceptedAnswer": { "@type": "Answer", "text": "Esta calculadora usa el TIN, el plazo y la comisión de apertura. No incorpora otros costes que a veces son obligatorios para conceder el préstamo, como un seguro de amortización vinculado, que sí formarían parte de la TAE oficial que te indique el banco." },
        },
        {
          "@type": "Question",
          "name": "¿Puedo usar la TAE para comparar un préstamo y una hipoteca?",
          "acceptedAnswer": { "@type": "Answer", "text": "La TAE permite comparar de forma homogénea ofertas del mismo tipo de producto y plazo similar, pero comparar directamente un préstamo personal con una hipoteca tiene poco sentido porque son productos con garantías, plazos y riesgos muy distintos." },
        },
      ],
    },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Calculadora de TAE a partir del TIN</h1>
      <p class="text-soft">Introduce el TIN, el plazo y la comisión de apertura para calcular la TAE real de tu préstamo.</p>

      ${adSlot("top")}

      <div class="tool-layout">
        <div>
          <div class="tool-card">
            <form id="calc-form" novalidate>
              <div class="field">
                <label for="principal">Importe del préstamo</label>
                <div class="input-wrap">
                  <input type="text" inputmode="decimal" id="principal" name="principal" value="10000" required>
                  <span class="suffix">€</span>
                </div>
              </div>
              <div class="field-row">
                <div class="field">
                  <label for="tin">TIN anual</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="tin" name="tin" value="9.5" required>
                    <span class="suffix">%</span>
                  </div>
                </div>
                <div class="field">
                  <label for="plazo">Plazo</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="plazo" name="plazo" value="60" required>
                    <span class="suffix">meses</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <label for="comision">Comisión de apertura</label>
                <div class="input-wrap">
                  <input type="text" inputmode="decimal" id="comision" name="comision" value="1.5">
                  <span class="suffix">%</span>
                </div>
                <p class="hint">Déjalo en 0 si tu préstamo no tiene comisión de apertura.</p>
              </div>
              <p class="status-msg error" data-error hidden></p>
              <button type="submit" class="btn">Calcular TAE</button>
            </form>

            <div class="result-panel" data-results hidden id="resultado-cuota">
              <div class="result-hero">
                <div class="value" data-tae>—</div>
                <div class="label">TAE estimada</div>
              </div>
              <div class="result-grid">
                <div class="result-stat"><div class="value" data-tin-ref>—</div><div class="label">TIN de referencia</div></div>
                <div class="result-stat"><div class="value" data-cuota>—</div><div class="label">Cuota mensual</div></div>
                <div class="result-stat"><div class="value" data-neto>—</div><div class="label">Importe neto recibido</div></div>
              </div>
              <div class="callout callout-info">
                <p>La TAE siempre es igual o superior al TIN cuando hay comisiones, porque reparte su coste entre todas las cuotas del préstamo.</p>
              </div>
            </div>
          </div>

          ${adSlot("incontent")}

          <div class="article-body">
            <h2>Cómo se calcula la TAE</h2>
            <p>
              La TAE es la tasa que iguala el importe neto que realmente recibes (el capital menos la comisión de
              apertura) con el valor actual de todas las cuotas que vas a pagar. Es decir, "reparte" el coste de la
              comisión entre todas las cuotas del préstamo, lo que hace que la TAE sea siempre mayor que el TIN
              cuando existen comisiones u otros gastos vinculados.
            </p>
            <p>
              Esta calculadora usa el método estándar de la TAE basado en el TIN, el plazo y la comisión de apertura.
              Si tu préstamo incluye otros costes obligatorios (por ejemplo, un seguro de amortización vinculado a la
              concesión), la TAE real que indique tu banco puede ser algo superior a la que se calcula aquí, ya que
              esos gastos también deberían incorporarse al cálculo.
            </p>
            <div class="callout callout-warn">
              <p><strong>Importante:</strong> por normativa, las entidades financieras están obligadas a mostrarte la TAE oficial en la oferta vinculante. Usa esta calculadora para entender de dónde sale ese número y comparar ofertas, no como sustituto del dato oficial.</p>
            </div>

            <h2>Preguntas frecuentes</h2>
            <div class="faq-item">
              <h3>¿Por qué la TAE es siempre mayor que el TIN?</h3>
              <p>Porque reparte el coste de las comisiones entre todas las cuotas del préstamo, además de tener en cuenta la frecuencia de pago.</p>
            </div>
            <div class="faq-item">
              <h3>¿Es obligatorio que el banco me muestre la TAE?</h3>
              <p>Sí, por normativa debe figurar en la oferta vinculante y en la publicidad, precisamente para facilitar la comparación entre ofertas.</p>
            </div>
            <div class="faq-item">
              <h3>¿Qué gastos no incluye esta calculadora de TAE?</h3>
              <p>No incorpora costes adicionales como un seguro de amortización vinculado, que si son obligatorios para conceder el préstamo sí formarían parte de la TAE oficial.</p>
            </div>
            <div class="faq-item">
              <h3>¿Puedo usar la TAE para comparar un préstamo y una hipoteca?</h3>
              <p>Sirve para comparar ofertas del mismo tipo de producto y plazo similar; comparar un préstamo personal con una hipoteca tiene poco sentido porque son productos muy distintos.</p>
            </div>
          </div>

          ${adSlot("bottom")}
        </div>

        <aside class="sidebar">
          <div class="card">
            <h4>Calculadoras relacionadas</h4>
            <ul class="related-list">
              <li><a href="/calculadoras-prestamos/calculadora-cuota-prestamo-personal/">Cuota de préstamo personal</a></li>
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
    "/assets/js/calculators/tae.js",
  ],
});
