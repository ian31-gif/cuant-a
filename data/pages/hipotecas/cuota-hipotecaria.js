module.exports = ({ adSlot }) => ({
  path: "/calculadoras-hipotecas/calculadora-cuota-hipotecaria/",
  title: "Calculadora de cuota hipotecaria y gastos de compraventa | Cuantía",
  description: "Calcula la cuota de tu hipoteca, los gastos de compraventa estimados y el dinero que necesitas de entrada. Incluye cuadro de amortización anual.",
  activeNav: "/calculadoras/",
  priority: "0.9",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Calculadoras de hipotecas", href: "/calculadoras-hipotecas/" },
    { label: "Calculadora de cuota hipotecaria", href: "/calculadoras-hipotecas/calculadora-cuota-hipotecaria/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Calculadora de cuota hipotecaria",
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
          "name": "¿Qué porcentaje del precio de la vivienda financia el banco?",
          "acceptedAnswer": { "@type": "Answer", "text": "Lo habitual es que los bancos financien hasta el 80 % del valor de tasación o compraventa (el menor de los dos) en primera vivienda. Para segunda vivienda o inversión, ese porcentaje suele bajar al 60-70 %. El resto (entrada) tienes que aportarlo tú." },
        },
        {
          "@type": "Question",
          "name": "¿Qué gastos de compraventa hay que tener en cuenta además de la entrada?",
          "acceptedAnswer": { "@type": "Answer", "text": "Notaría, registro de la propiedad, gestoría y el impuesto correspondiente: ITP en vivienda usada (varía por comunidad autónoma, normalmente 6-10 %) o IVA (10 %) + AJD en vivienda nueva. En total suelen sumar entre un 10 % y un 12 % del precio." },
        },
        {
          "@type": "Question",
          "name": "¿Hipoteca fija o variable, cuál me conviene?",
          "acceptedAnswer": { "@type": "Answer", "text": "La fija da certeza total sobre la cuota durante toda la vida del préstamo; la variable suele partir de un tipo más bajo pero puede subir o bajar con el euríbor. Depende de tu tolerancia al riesgo y del plazo. Puedes leer más en nuestra guía sobre hipoteca fija vs. variable." },
        },
        {
          "@type": "Question",
          "name": "¿Puedo mejorar el TIN de mi hipoteca vinculando productos?",
          "acceptedAnswer": { "@type": "Answer", "text": "Muchos bancos ofrecen una bonificación del tipo de interés a cambio de domiciliar la nómina, contratar seguros de hogar o vida, o usar tarjetas del banco. Esta calculadora no incluye esas bonificaciones: introduce el TIN final que te ofrezca la entidad, ya con o sin bonificar." },
        },
      ],
    },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Calculadora de cuota hipotecaria</h1>
      <p class="text-soft">Introduce el precio de la vivienda, el porcentaje de financiación, el TIN y el plazo para calcular tu cuota y los gastos estimados.</p>

      ${adSlot("top")}

      <div class="tool-layout">
        <div>
          <div class="tool-card">
            <form id="calc-form" novalidate>
              <div class="field">
                <label for="precio">Precio de la vivienda</label>
                <div class="input-wrap">
                  <input type="text" inputmode="decimal" id="precio" name="precio" value="220000" required>
                  <span class="suffix">€</span>
                </div>
              </div>
              <div class="field-row">
                <div class="field">
                  <label for="financiacion">Financiación</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="financiacion" name="financiacion" value="80" required>
                    <span class="suffix">%</span>
                  </div>
                  <p class="hint">% del precio que financia el banco (habitual: 80 %).</p>
                </div>
                <div class="field">
                  <label for="tin">TIN anual</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="tin" name="tin" value="3.2" required>
                    <span class="suffix">%</span>
                  </div>
                </div>
              </div>
              <div class="field-row">
                <div class="field">
                  <label for="plazo">Plazo</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="plazo" name="plazo" value="25" required>
                    <span class="suffix">años</span>
                  </div>
                </div>
                <div class="field">
                  <label for="gastos">Gastos de compraventa</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="gastos" name="gastos" value="11" required>
                    <span class="suffix">%</span>
                  </div>
                  <p class="hint">Notaría, registro, gestoría e impuestos (orientativo: 10–12 % del precio).</p>
                </div>
              </div>
              <p class="status-msg error" data-error hidden></p>
              <button type="submit" class="btn">Calcular cuota</button>
            </form>

            <div class="result-panel" data-results hidden id="resultado-cuota">
              <div class="result-hero">
                <div class="value" data-cuota>—</div>
                <div class="label">Cuota mensual estimada</div>
              </div>
              <div class="result-grid">
                <div class="result-stat"><div class="value" data-importe-prestamo>—</div><div class="label">Importe del préstamo</div></div>
                <div class="result-stat"><div class="value" data-total-interes>—</div><div class="label">Total de intereses</div></div>
                <div class="result-stat"><div class="value" data-total-pagado>—</div><div class="label">Total a devolver</div></div>
                <div class="result-stat"><div class="value" data-entrada>—</div><div class="label">Entrada necesaria</div></div>
                <div class="result-stat"><div class="value" data-gastos>—</div><div class="label">Gastos estimados</div></div>
                <div class="result-stat"><div class="value" data-cash-necesario>—</div><div class="label">Total inicial necesario</div></div>
              </div>

              <h3>Reparto entre capital e intereses</h3>
              <div class="split-bar">
                <div class="seg-principal" data-seg-principal style="width:0%"></div>
                <div class="seg-interes" data-seg-interes style="width:0%"></div>
              </div>
              <div class="split-legend">
                <span><span class="dot dot-principal"></span>Capital (<span data-pct-principal>—</span>)</span>
                <span><span class="dot dot-interes"></span>Intereses (<span data-pct-interes>—</span>)</span>
              </div>

              <h3>Cuadro de amortización (resumen anual)</h3>
              <div class="table-wrap">
                <table class="amort">
                  <thead><tr><th>Año</th><th>Capital amortizado</th><th>Intereses pagados</th><th>Pendiente</th></tr></thead>
                  <tbody data-amort-body></tbody>
                </table>
              </div>
            </div>
          </div>

          ${adSlot("incontent")}

          <div class="article-body">
            <h2>Qué incluye (y qué no) esta calculadora</h2>
            <p>
              La cuota se calcula con el sistema de amortización francés sobre el importe financiado (precio ×
              porcentaje de financiación). Los "gastos de compraventa" son una estimación orientativa sobre el
              precio de la vivienda: notaría, registro de la propiedad, gestoría y el impuesto correspondiente
              (ITP en vivienda usada o IVA + AJD en vivienda nueva, que varían según la comunidad autónoma). El
              "total inicial necesario" suma la parte no financiada (entrada) más esos gastos estimados.
            </p>
            <p>
              No incluye la tasación, el seguro de hogar o de vida (a veces exigidos por el banco para la
              bonificación del tipo), ni las posibles bonificaciones del TIN por vincular productos. Ajusta el
              porcentaje de gastos si en tu comunidad autónoma o tipo de operación es distinto.
            </p>
            <div class="callout callout-info">
              <p>Resultado con fines informativos. Antes de firmar, contrasta siempre la cuota, la TAE y los gastos con la oferta vinculante que te entregue tu entidad.</p>
            </div>

            <h2>Preguntas frecuentes</h2>
            <div class="faq-item">
              <h3>¿Qué porcentaje del precio de la vivienda financia el banco?</h3>
              <p>Habitualmente hasta el 80 % del valor de tasación o compraventa (el menor de los dos) en primera vivienda; en segunda vivienda suele bajar al 60-70 %.</p>
            </div>
            <div class="faq-item">
              <h3>¿Qué gastos de compraventa hay que tener en cuenta además de la entrada?</h3>
              <p>Notaría, registro, gestoría y el impuesto correspondiente (ITP o IVA + AJD según el tipo de vivienda), que en total suelen sumar entre un 10 % y un 12 % del precio.</p>
            </div>
            <div class="faq-item">
              <h3>¿Hipoteca fija o variable, cuál me conviene?</h3>
              <p>La fija da certeza total sobre la cuota; la variable suele partir de un tipo más bajo pero puede subir o bajar con el euríbor. Depende de tu tolerancia al riesgo.</p>
            </div>
            <div class="faq-item">
              <h3>¿Puedo mejorar el TIN vinculando productos?</h3>
              <p>Muchos bancos bonifican el tipo si domicilias la nómina o contratas seguros. Esta calculadora no incluye esa bonificación: introduce el TIN final que te ofrezcan.</p>
            </div>
          </div>

          ${adSlot("bottom")}
        </div>

        <aside class="sidebar">
          <div class="card">
            <h4>Calculadoras relacionadas</h4>
            <ul class="related-list">
              <li><a href="/calculadoras-prestamos/calculadora-cuota-prestamo-personal/">Cuota de préstamo personal</a></li>
              <li><a href="/calculadoras-ahorro/calculadora-ahorro-objetivo/">Ahorro objetivo (para la entrada)</a></li>
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
    "/assets/js/calculators/hipoteca.js",
  ],
});
