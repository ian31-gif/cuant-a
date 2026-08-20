module.exports = ({ adSlot }) => ({
  path: "/calculadoras-prestamos/calculadora-cuota-prestamo-personal/",
  title: "Calculadora de cuota de préstamo personal — cuadro de amortización | Cuantía",
  description: "Calcula la cuota mensual de tu préstamo personal, el total de intereses y el cuadro de amortización completo, mes a mes. Gratis y sin registro.",
  activeNav: "/calculadoras/",
  priority: "0.9",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Calculadoras de préstamos", href: "/calculadoras-prestamos/" },
    { label: "Calculadora de cuota de préstamo personal", href: "/calculadoras-prestamos/calculadora-cuota-prestamo-personal/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Calculadora de cuota de préstamo personal",
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
          "name": "¿Qué diferencia hay entre el TIN y la TAE?",
          "acceptedAnswer": { "@type": "Answer", "text": "El TIN (Tipo de Interés Nominal) es el porcentaje que aplica el banco solo sobre el capital pendiente. La TAE (Tasa Anual Equivalente) incluye además las comisiones y la frecuencia de pago, por lo que refleja mejor el coste real del préstamo. Puedes calcularla con nuestra calculadora de TAE." },
        },
        {
          "@type": "Question",
          "name": "¿Cómo se calcula la cuota mensual de un préstamo?",
          "acceptedAnswer": { "@type": "Answer", "text": "La mayoría de préstamos personales usan el sistema de amortización francés, en el que la cuota mensual es constante durante todo el préstamo, pero la proporción entre capital e intereses cambia mes a mes: al principio se paga más interés y menos capital, y al final ocurre lo contrario." },
        },
        {
          "@type": "Question",
          "name": "¿Amortizar anticipadamente reduce mucho los intereses?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sí, especialmente si se hace en los primeros años del préstamo, cuando el peso de los intereses en cada cuota es mayor. Amortizar antes reduce el capital pendiente sobre el que se calculan los intereses futuros." },
        },
      ],
    },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Calculadora de cuota de préstamo personal</h1>
      <p class="text-soft">Introduce el importe, el TIN anual y el plazo para calcular tu cuota mensual y el cuadro de amortización completo.</p>

      ${adSlot("top")}

      <div class="tool-layout">
        <div>
          <div class="tool-card">
            <form id="calc-form" novalidate>
              <div class="field">
                <label for="principal">Importe del préstamo</label>
                <div class="input-wrap">
                  <input type="text" inputmode="decimal" id="principal" name="principal" placeholder="10.000" value="10000" required>
                  <span class="suffix">€</span>
                </div>
              </div>
              <div class="field-row">
                <div class="field">
                  <label for="tin">TIN anual</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="tin" name="tin" placeholder="9,5" value="9.5" required>
                    <span class="suffix">%</span>
                  </div>
                  <p class="hint">Tipo de interés nominal que indica tu banco (no la TAE).</p>
                </div>
                <div class="field">
                  <label for="plazo">Plazo</label>
                  <div class="input-wrap">
                    <input type="text" inputmode="decimal" id="plazo" name="plazo" placeholder="60" value="60" required>
                    <span class="suffix">meses</span>
                  </div>
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
                <div class="result-stat"><div class="value" data-importe>—</div><div class="label">Capital solicitado</div></div>
                <div class="result-stat"><div class="value" data-total-interes>—</div><div class="label">Total de intereses</div></div>
                <div class="result-stat"><div class="value" data-total-pagado>—</div><div class="label">Total a devolver</div></div>
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

              <h3>Cuadro de amortización</h3>
              <div class="table-wrap">
                <table class="amort">
                  <thead>
                    <tr><th>Mes</th><th>Cuota</th><th>Capital</th><th>Interés</th><th>Pendiente</th></tr>
                  </thead>
                  <tbody data-amort-body></tbody>
                </table>
              </div>
            </div>
          </div>

          ${adSlot("incontent")}

          <div class="article-body">
            <h2>Cómo funciona esta calculadora</h2>
            <p>
              Esta calculadora utiliza el sistema de <strong>amortización francés</strong>, el más habitual en préstamos
              personales en España y Latinoamérica: la cuota mensual se mantiene constante durante todo el préstamo,
              pero la parte que corresponde a intereses va bajando mes a mes (porque se calcula sobre un capital
              pendiente cada vez menor), mientras que la parte que amortiza capital va subiendo.
            </p>
            <p>
              El resultado se basa únicamente en el TIN, el importe y el plazo que introduces: no incluye comisiones
              de apertura, estudio ni seguros asociados, que si existen incrementan el coste real (la TAE). Si tu
              oferta incluye comisiones, usa la <a href="/calculadoras-prestamos/calculadora-tae-tin/">calculadora de TAE</a>
              para ver el coste efectivo completo.
            </p>

            <h2>Preguntas frecuentes</h2>
            <div class="faq-item">
              <h3>¿Qué diferencia hay entre el TIN y la TAE?</h3>
              <p>El TIN es el porcentaje que aplica el banco solo sobre el capital pendiente. La TAE añade comisiones y frecuencia de pago, y refleja mejor el coste real.</p>
            </div>
            <div class="faq-item">
              <h3>¿Cómo se calcula la cuota mensual de un préstamo?</h3>
              <p>Con la fórmula de amortización francesa: cuota = capital × tipo mensual / (1 − (1 + tipo mensual)^−nº de cuotas). La cuota resultante es constante en todo el préstamo.</p>
            </div>
            <div class="faq-item">
              <h3>¿Amortizar anticipadamente reduce mucho los intereses?</h3>
              <p>Sí, sobre todo en los primeros años del préstamo, cuando el peso de los intereses en cada cuota es más alto.</p>
            </div>

            <div class="callout callout-info">
              <p><strong>Nota:</strong> esta herramienta ofrece una estimación con fines informativos y no sustituye la oferta vinculante de tu entidad financiera. Los importes reales pueden variar por comisiones, seguros o redondeos de la entidad.</p>
            </div>
          </div>

          ${adSlot("bottom")}
        </div>

        <aside class="sidebar">
          <div class="card">
            <h4>Calculadoras relacionadas</h4>
            <ul class="related-list">
              <li><a href="/calculadoras-prestamos/calculadora-tae-tin/">TAE de un préstamo</a></li>
              <li><a href="/calculadoras-hipotecas/calculadora-cuota-hipotecaria/">Cuota hipotecaria</a></li>
              <li><a href="/calculadoras-ahorro/calculadora-ahorro-objetivo/">Ahorro objetivo</a></li>
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
    "/assets/js/calculators/prestamo.js",
  ],
});
