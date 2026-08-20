const SS = require("../../cotizaciones-ss-2026.js");
const IRPF = require("../../irpf-tramos-2026.js");

module.exports = ({ adSlot }) => ({
  path: "/calculadoras-fiscales/calculadora-nomina/",
  title: "Calculadora de nómina 2026: bruto a neto | Cuantía",
  description: "Calcula tu salario neto mensual y anual a partir del bruto: cotizaciones a la Seguridad Social, IRPF estimado y desglose completo.",
  activeNav: "/calculadoras/",
  priority: "0.9",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Calculadoras fiscales y de autónomos", href: "/calculadoras-fiscales/" },
    { label: "Calculadora de nómina", href: "/calculadoras-fiscales/calculadora-nomina/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Calculadora de nómina",
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
          "name": "¿Qué descuentos se aplican en una nómina española?",
          "acceptedAnswer": { "@type": "Answer", "text": "Dos grandes bloques: las cotizaciones a la Seguridad Social a cargo del trabajador (contingencias comunes, desempleo, formación profesional y el Mecanismo de Equidad Intergeneracional, un 6,50 % en total para contrato indefinido en 2026) y la retención de IRPF a cuenta, que depende de tu salario y tu situación personal." },
        },
        {
          "@type": "Question",
          "name": "¿Por qué mi nómina real puede tener otro neto?",
          "acceptedAnswer": { "@type": "Answer", "text": "Porque esta calculadora no incluye complementos salariales variables, embargos, anticipos, cuotas sindicales, aportaciones a planes de pensiones de empresa, ni la escala de IRPF específica de tu comunidad autónoma. Es una estimación orientativa del cálculo estándar." },
        },
        {
          "@type": "Question",
          "name": "¿Qué diferencia hay entre 12 y 14 pagas?",
          "acceptedAnswer": { "@type": "Answer", "text": "Con 14 pagas, las dos pagas extra (verano y Navidad) se cobran aparte, así que cada una de las 12 mensualidades es más alta. Con 12 pagas, las pagas extra se prorratean y se reparten dentro de las 12 mensualidades, que son más bajas pero constantes todo el año. El neto anual total es el mismo en ambos casos." },
        },
      ],
    },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Calculadora de nómina: de bruto a neto</h1>
      <p class="text-soft">Introduce tu salario bruto anual para calcular las cotizaciones a la Seguridad Social, el IRPF estimado y tu neto.</p>

      ${adSlot("top")}

      <div class="tool-layout">
        <div>
          <div class="tool-card">
            <form id="calc-form" novalidate>
              <div class="field">
                <label for="bruto">Salario bruto anual</label>
                <div class="input-wrap">
                  <input type="text" inputmode="decimal" id="bruto" name="bruto" placeholder="24.000" value="24000" required>
                  <span class="suffix">€</span>
                </div>
              </div>
              <div class="field-row">
                <div class="field">
                  <label for="pagas">Número de pagas</label>
                  <div class="input-wrap">
                    <select id="pagas" name="pagas">
                      <option value="12">12 pagas (extras prorrateadas)</option>
                      <option value="14" selected>14 pagas</option>
                    </select>
                  </div>
                </div>
                <div class="field">
                  <label for="contrato">Tipo de contrato</label>
                  <div class="input-wrap">
                    <select id="contrato" name="contrato">
                      <option value="indefinido" selected>Indefinido</option>
                      <option value="temporal">Temporal</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label for="hijos">Hijos a cargo</label>
                <div class="input-wrap">
                  <select id="hijos" name="hijos">
                    <option value="0" selected>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4 o más</option>
                  </select>
                </div>
              </div>
              <p class="status-msg error" data-error hidden></p>
              <button type="submit" class="btn">Calcular nómina</button>
            </form>

            <div class="result-panel" data-results hidden id="resultado-cuota">
              <div class="result-hero">
                <div class="value" data-neto-mensual>—</div>
                <div class="label">Neto por paga</div>
              </div>
              <div class="result-grid">
                <div class="result-stat"><div class="value" data-bruto>—</div><div class="label">Bruto anual</div></div>
                <div class="result-stat"><div class="value" data-cotizacion-ss>—</div><div class="label">Cotizaciones SS (anual)</div></div>
                <div class="result-stat"><div class="value" data-cuota-irpf>—</div><div class="label">IRPF estimado (anual)</div></div>
                <div class="result-stat"><div class="value" data-neto-anual>—</div><div class="label">Neto anual</div></div>
                <div class="result-stat"><div class="value" data-tipo-ss>—</div><div class="label">Tipo SS trabajador</div></div>
                <div class="result-stat"><div class="value" data-tipo-retencion>—</div><div class="label">Tipo de retención IRPF</div></div>
              </div>

              <h3>Reparto del bruto</h3>
              <div class="split-bar">
                <div class="seg-principal" data-seg-principal style="width:0%"></div>
                <div class="seg-interes" data-seg-interes style="width:0%"></div>
              </div>
              <div class="split-legend">
                <span><span class="dot dot-principal"></span>Neto (<span data-pct-principal>—</span>)</span>
                <span><span class="dot dot-interes"></span>SS + IRPF (<span data-pct-interes>—</span>)</span>
              </div>
            </div>
          </div>

          ${adSlot("incontent")}

          <div class="article-body">
            <h2>Qué descuenta tu empresa de la nómina</h2>
            <p>
              De tu salario bruto se descuentan dos bloques: las <strong>cotizaciones a la Seguridad Social</strong>
              a cargo del trabajador (contingencias comunes 4,70 %, desempleo 1,55 % en contrato indefinido o 1,60 %
              en temporal, formación profesional 0,10 % y el Mecanismo de Equidad Intergeneracional 0,15 %; en total
              un 6,50 % para indefinido), y la <strong>retención de IRPF</strong> a cuenta, calculada sobre tu
              rendimiento neto del trabajo (bruto menos cotizaciones SS y un gasto deducible genérico de 2.000 €)
              una vez aplicado tu mínimo personal y familiar.
            </p>
            <div class="callout callout-warn">
              <p><strong>Simplificaciones:</strong> este cálculo no incluye reducciones adicionales para rentas bajas, complementos variables, ni la escala de IRPF específica de tu comunidad autónoma (usa la escala general de referencia). Las cotizaciones se calculan sobre la base máxima de ${fmtEur(SS.baseMaximaMensual)}/mes si tu bruto la supera.</p>
            </div>
            <p class="text-soft" style="font-size:0.82rem;">Tipos de cotización actualizados a ${SS.actualizado}; escala de IRPF actualizada a ${IRPF.actualizado}.</p>

            <h2>Preguntas frecuentes</h2>
            <div class="faq-item">
              <h3>¿Qué descuentos se aplican en una nómina española?</h3>
              <p>Cotizaciones a la Seguridad Social del trabajador (6,50 % en indefinido) y la retención de IRPF a cuenta, que depende de tu salario y situación personal.</p>
            </div>
            <div class="faq-item">
              <h3>¿Por qué mi nómina real puede tener otro neto?</h3>
              <p>No incluye complementos variables, embargos, aportaciones a planes de pensiones de empresa ni la escala autonómica exacta de tu comunidad.</p>
            </div>
            <div class="faq-item">
              <h3>¿Qué diferencia hay entre 12 y 14 pagas?</h3>
              <p>Con 14 pagas cobras las extras aparte; con 12, se prorratean dentro de cada mensualidad. El neto anual total es el mismo.</p>
            </div>
          </div>

          ${adSlot("bottom")}
        </div>

        <aside class="sidebar">
          <div class="card">
            <h4>Calculadoras relacionadas</h4>
            <ul class="related-list">
              <li><a href="/calculadoras-fiscales/calculadora-irpf/">IRPF y retenciones</a></li>
              <li><a href="/calculadoras-fiscales/calculadora-cuota-autonomo/">Cuota de autónomo</a></li>
              <li><a href="/calculadoras-ahorro/calculadora-ahorro-objetivo/">Ahorro objetivo</a></li>
            </ul>
          </div>
          ${adSlot("sidebar")}
        </aside>
      </div>
    </div>
    <script>
      window.CUANTIA_SS = ${JSON.stringify({ ...SS.desglose, baseMaximaMensual: SS.baseMaximaMensual, gastoDeducibleGenerico: SS.gastoDeducibleGenerico })};
      window.CUANTIA_IRPF_NOMINA = ${JSON.stringify({ tramos: IRPF.tramos, minimoPersonal: IRPF.minimoPersonal, minimoPorHijo: IRPF.minimoPorHijo })};
    </script>
    ${adSlot("anchor")}
  `,
  extraScripts: [
    "/assets/js/calculators/ui-helpers.js",
    "/assets/js/calculators/nomina.js",
  ],
});

function fmtEur(value) {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(value);
}
