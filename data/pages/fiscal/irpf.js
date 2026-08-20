const IRPF = require("../../irpf-tramos-2026.js");

module.exports = ({ adSlot }) => {
  const tramosRows = IRPF.tramos.map((t, idx) => {
    const desde = idx === 0 ? 0 : IRPF.tramos[idx - 1].hasta;
    const rango = t.hasta === null ? `Más de ${fmtEur(desde)}` : `${fmtEur(desde)} – ${fmtEur(t.hasta)}`;
    return `<tr><td>${idx + 1}</td><td>${rango}</td><td>${(t.tipo * 100).toFixed(0)} %</td></tr>`;
  }).join("");

  return {
    path: "/calculadoras-fiscales/calculadora-irpf/",
    title: "Calculadora de IRPF y retenciones 2026 | Cuantía",
    description: "Calcula tu IRPF estimado, el tipo efectivo y tu neto anual y mensual según tus ingresos, situación personal e hijos a cargo. Gratis y sin registro.",
    activeNav: "/calculadoras/",
    priority: "0.9",
    changefreq: "monthly",
    crumbs: [
      { label: "Inicio", href: "/" },
      { label: "Calculadoras fiscales y de autónomos", href: "/calculadoras-fiscales/" },
      { label: "Calculadora de IRPF y retenciones", href: "/calculadoras-fiscales/calculadora-irpf/" },
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Calculadora de IRPF y retenciones",
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
            "name": "¿Por qué mi retención real puede ser distinta a la de esta calculadora?",
            "acceptedAnswer": { "@type": "Answer", "text": "Porque el IRPF real depende también de tu comunidad autónoma de residencia (cada una aprueba su propia escala, con tipos algo más bajos o más altos que la media), de reducciones específicas (planes de pensiones, rendimientos del trabajo, alquiler de vivienda habitual) y de tu situación familiar completa, que esta calculadora simplifica." },
          },
          {
            "@type": "Question",
            "name": "¿Qué es el mínimo personal y familiar?",
            "acceptedAnswer": { "@type": "Answer", "text": "Es la parte de tus ingresos que no tributa, porque se considera necesaria para cubrir tus necesidades básicas y las de tu familia. En 2026 es de 5.550 € para el contribuyente, más una cantidad adicional por cada hijo a cargo (2.400 € el primero, 2.700 € el segundo, 4.000 € el tercero y 4.500 € el cuarto y siguientes)." },
          },
          {
            "@type": "Question",
            "name": "¿Qué diferencia hay entre la retención y el IRPF final?",
            "acceptedAnswer": { "@type": "Answer", "text": "La retención es un pago a cuenta que tu empresa o pagador adelanta a Hacienda cada mes. El IRPF final se calcula en la declaración de la renta con tus ingresos y deducciones reales del año completo; si has retenido de más, Hacienda te devuelve la diferencia, y si has retenido de menos, tienes que pagarla." },
          },
          {
            "@type": "Question",
            "name": "¿Esta calculadora sirve para autónomos?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí, como estimación orientativa de tu IRPF anual sobre el rendimiento neto de tu actividad. Ten en cuenta que si facturas a empresas, sueles aplicar una retención del 15 % (7 % los dos primeros años de alta) en cada factura, que luego se regulariza en la declaración anual." },
          },
        ],
      },
    ],
    bodyHtml: `
    <div class="container">
      <h1>Calculadora de IRPF y retenciones 2026</h1>
      <p class="text-soft">Introduce tus ingresos anuales y tu situación familiar para estimar tu IRPF, tu tipo efectivo y tu neto anual.</p>

      ${adSlot("top")}

      <div class="tool-layout">
        <div>
          <div class="tool-card">
            <form id="calc-form" novalidate>
              <div class="field">
                <label for="ingresos">Ingresos anuales (brutos o rendimiento neto si eres autónomo)</label>
                <div class="input-wrap">
                  <input type="text" inputmode="decimal" id="ingresos" name="ingresos" placeholder="28.000" value="28000" required>
                  <span class="suffix">€</span>
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
                <p class="hint">Aplica el mínimo por descendientes correspondiente a cada hijo.</p>
              </div>
              <p class="status-msg error" data-error hidden></p>
              <button type="submit" class="btn">Calcular IRPF</button>
            </form>

            <div class="result-panel" data-results hidden id="resultado-cuota">
              <div class="result-hero">
                <div class="value" data-cuota>—</div>
                <div class="label">IRPF anual estimado</div>
              </div>
              <div class="result-grid">
                <div class="result-stat"><div class="value" data-tipo-efectivo>—</div><div class="label">Tipo efectivo</div></div>
                <div class="result-stat"><div class="value" data-neto-anual>—</div><div class="label">Neto anual estimado</div></div>
                <div class="result-stat"><div class="value" data-neto-mensual>—</div><div class="label">Neto mensual (÷12)</div></div>
                <div class="result-stat"><div class="value" data-minimo-total>—</div><div class="label">Mínimo personal y familiar</div></div>
              </div>

              <h3>Reparto entre neto e IRPF</h3>
              <div class="split-bar">
                <div class="seg-principal" data-seg-principal style="width:0%"></div>
                <div class="seg-interes" data-seg-interes style="width:0%"></div>
              </div>
              <div class="split-legend">
                <span><span class="dot dot-principal"></span>Neto (<span data-pct-principal>—</span>)</span>
                <span><span class="dot dot-interes"></span>IRPF (<span data-pct-interes>—</span>)</span>
              </div>
            </div>
          </div>

          ${adSlot("incontent")}

          <div class="article-body">
            <h2>Escala general de referencia 2026</h2>
            <p>
              El IRPF se calcula aplicando un tipo progresivo por tramos: cada tramo de tus ingresos tributa a su
              propio tipo, no todo tu sueldo al tipo más alto que alcances. Esta calculadora usa la escala general
              de referencia (estatal + autonómica supletoria), que es la aproximación estándar cuando no se conoce
              la comunidad autónoma exacta:
            </p>
            <div class="table-wrap">
              <table class="amort">
                <thead><tr><th>Tramo</th><th>Base liquidable</th><th>Tipo aplicable</th></tr></thead>
                <tbody>${tramosRows}</tbody>
              </table>
            </div>
            <div class="callout callout-warn">
              <p><strong>Importante:</strong> tu comunidad autónoma aprueba su propia escala, con tipos algo más bajos (por ejemplo, Madrid) o más altos (por ejemplo, Cataluña) que esta referencia. Esta calculadora no pregunta por tu comunidad porque no aplicaríamos una tabla específica y verificada por región; úsala como estimación de partida, no como cálculo definitivo.</p>
            </div>
            <p class="text-soft" style="font-size:0.82rem;">Datos actualizados a ${IRPF.actualizado}.</p>

            <h2>Preguntas frecuentes</h2>
            <div class="faq-item">
              <h3>¿Por qué mi retención real puede ser distinta?</h3>
              <p>Porque depende también de tu comunidad autónoma, de reducciones específicas (planes de pensiones, alquiler) y de tu situación familiar completa.</p>
            </div>
            <div class="faq-item">
              <h3>¿Qué es el mínimo personal y familiar?</h3>
              <p>La parte de tus ingresos que no tributa: 5.550 € para el contribuyente, más una cantidad adicional por cada hijo a cargo.</p>
            </div>
            <div class="faq-item">
              <h3>¿Qué diferencia hay entre la retención y el IRPF final?</h3>
              <p>La retención es un pago a cuenta mensual; el IRPF final se ajusta en la declaración de la renta con tus datos reales del año.</p>
            </div>
            <div class="faq-item">
              <h3>¿Esta calculadora sirve para autónomos?</h3>
              <p>Sí, como estimación sobre tu rendimiento neto anual. Si facturas a empresas, aplicas normalmente una retención del 15 % (7 % de alta) por factura, regularizada luego en la declaración.</p>
            </div>
          </div>

          ${adSlot("bottom")}
        </div>

        <aside class="sidebar">
          <div class="card">
            <h4>Calculadoras relacionadas</h4>
            <ul class="related-list">
              <li><a href="/calculadoras-fiscales/calculadora-nomina/">Nómina</a></li>
              <li><a href="/calculadoras-fiscales/calculadora-cuota-autonomo/">Cuota de autónomo</a></li>
              <li><a href="/calculadoras-ahorro/calculadora-ahorro-objetivo/">Ahorro objetivo</a></li>
            </ul>
          </div>
          ${adSlot("sidebar")}
        </aside>
      </div>
    </div>
    <script>window.CUANTIA_IRPF = ${JSON.stringify({ tramos: IRPF.tramos, minimoPersonal: IRPF.minimoPersonal, minimoPorHijo: IRPF.minimoPorHijo })};</script>
    ${adSlot("anchor")}
  `,
    extraScripts: [
      "/assets/js/calculators/ui-helpers.js",
      "/assets/js/calculators/irpf.js",
    ],
  };
};

function fmtEur(value) {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}
