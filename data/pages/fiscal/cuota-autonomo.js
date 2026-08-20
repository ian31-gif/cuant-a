const CUOTAS = require("../../cuotas-autonomo-2026.js");

module.exports = ({ adSlot }) => {
  const tramosRows = CUOTAS.tramos.map((t, idx) => {
    const rango = t.hasta === null ? `Más de ${fmtEur(t.desde)}` : `${fmtEur(t.desde)} – ${fmtEur(t.hasta)}`;
    return `<tr data-tramo-row="${idx}"><td>${idx + 1}</td><td>${rango}</td><td>${fmtEur(t.baseMinima)}</td><td>${fmtEur(t.cuotaMinima)}</td></tr>`;
  }).join("");

  return {
    path: "/calculadoras-fiscales/calculadora-cuota-autonomo/",
    title: "Calculadora de cuota de autónomo 2026 (RETA por tramos) | Cuantía",
    description: "Calcula tu cuota mensual de autónomo 2026 según tus rendimientos netos y la tabla oficial de 15 tramos del RETA. Gratis y actualizada.",
    activeNav: "/calculadoras/",
    priority: "0.9",
    changefreq: "monthly",
    crumbs: [
      { label: "Inicio", href: "/" },
      { label: "Calculadoras fiscales y de autónomos", href: "/calculadoras-fiscales/" },
      { label: "Calculadora de cuota de autónomo", href: "/calculadoras-fiscales/calculadora-cuota-autonomo/" },
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Calculadora de cuota de autónomo",
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
            "name": "¿Cómo se calcula la cuota de autónomo en 2026?",
            "acceptedAnswer": { "@type": "Answer", "text": "Desde 2023 la cuota depende de tus rendimientos netos mensuales (ingresos menos gastos deducibles, con una reducción adicional del 7 % por gastos de difícil justificación si eres persona física, o del 3 % si eres autónomo societario). Según en qué tramo caigan esos rendimientos, se aplica una base mínima de cotización y un tipo del 31,5 %." },
          },
          {
            "@type": "Question",
            "name": "¿Puedo pagar una cuota más alta de la mínima?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí. Dentro de cada tramo puedes elegir una base de cotización superior a la mínima (hasta el máximo permitido) para aumentar tu cuota, lo que mejora tu base reguladora de cara a prestaciones como el paro o la jubilación." },
          },
          {
            "@type": "Question",
            "name": "¿Cuántas veces al año puedo cambiar mi base de cotización?",
            "acceptedAnswer": { "@type": "Answer", "text": "Hasta 6 veces al año, para ajustarla a la evolución real de tus ingresos. Si a final de año tus rendimientos reales fueron distintos a los previstos, la Seguridad Social regulariza la diferencia (te devuelve o te cobra el ajuste)." },
          },
          {
            "@type": "Question",
            "name": "¿Qué pasa si estoy en tarifa plana?",
            "acceptedAnswer": { "@type": "Answer", "text": "La tarifa plana (bonificación para nuevos autónomos) sustituye a esta tabla por tramos durante los primeros 12-24 meses de alta. Esta calculadora muestra la cuota general por tramos, aplicable una vez finalizada la tarifa plana." },
          },
        ],
      },
    ],
    bodyHtml: `
    <div class="container">
      <h1>Calculadora de cuota de autónomo 2026</h1>
      <p class="text-soft">Introduce tus rendimientos netos mensuales estimados y calcula en qué tramo del RETA estás y cuál es tu cuota mínima.</p>

      ${adSlot("top")}

      <div class="tool-layout">
        <div>
          <div class="tool-card">
            <form id="calc-form" novalidate>
              <div class="field">
                <label for="rendimiento">Rendimientos netos mensuales</label>
                <div class="input-wrap">
                  <input type="text" inputmode="decimal" id="rendimiento" name="rendimiento" placeholder="1.800" value="1800" required>
                  <span class="suffix">€</span>
                </div>
                <p class="hint">Ingresos menos gastos deducibles del mes (ya con la reducción del 7 %/3 % por gastos genéricos aplicada).</p>
              </div>
              <p class="status-msg error" data-error hidden></p>
              <button type="submit" class="btn">Calcular cuota</button>
            </form>

            <div class="result-panel" data-results hidden id="resultado-cuota">
              <div class="result-hero">
                <div class="value" data-cuota>—</div>
                <div class="label">Cuota mensual mínima estimada</div>
              </div>
              <div class="result-grid">
                <div class="result-stat"><div class="value" data-tramo-num>—</div><div class="label">Tramo aplicable</div></div>
                <div class="result-stat"><div class="value" data-tramo-rango>—</div><div class="label">Rango de rendimientos</div></div>
                <div class="result-stat"><div class="value" data-base-minima>—</div><div class="label">Base mínima de cotización</div></div>
                <div class="result-stat"><div class="value" data-cuota-anual>—</div><div class="label">Coste anual estimado</div></div>
              </div>
              <div class="callout callout-info">
                <p>Puedes elegir una base de cotización superior a la mínima dentro de tu tramo para aumentar tu futura pensión o prestación, a cambio de pagar una cuota más alta.</p>
              </div>
            </div>
          </div>

          ${adSlot("incontent")}

          <div class="article-body">
            <h2>Tabla completa de tramos RETA 2026</h2>
            <p>
              Desde 2023, la cuota de autónomos ya no es una cantidad fija: depende de tus <strong>rendimientos netos
              mensuales</strong> (ingresos menos gastos deducibles de la actividad). La normativa distingue 15 tramos,
              agrupados en una tabla reducida (para rendimientos por debajo del SMI) y una tabla general. Esta es la
              tabla vigente en 2026, con tipo de cotización general del ${(CUOTAS.tipoGeneral * 100).toFixed(1).replace(".", ",")} %:
            </p>
            <div class="table-wrap">
              <table class="amort">
                <thead><tr><th>Tramo</th><th>Rendimientos netos mensuales</th><th>Base mínima</th><th>Cuota mínima</th></tr></thead>
                <tbody>${tramosRows}</tbody>
              </table>
            </div>
            <p class="text-soft" style="font-size:0.82rem;margin-top:10px;">Datos actualizados a ${CUOTAS.actualizado}. ${CUOTAS.fuenteLabel}; verifica siempre el tramo vigente en la Sede Electrónica de la Seguridad Social antes de decidir tu base de cotización, ya que estas cifras se revisan cada año.</p>

            <h2>Preguntas frecuentes</h2>
            <div class="faq-item">
              <h3>¿Cómo se calcula la cuota de autónomo en 2026?</h3>
              <p>Según tus rendimientos netos mensuales (ingresos menos gastos deducibles, con una reducción adicional del 7 %/3 %). El tramo en el que caigan determina tu base mínima de cotización y, con el tipo del 31,5 %, tu cuota.</p>
            </div>
            <div class="faq-item">
              <h3>¿Puedo pagar una cuota más alta de la mínima?</h3>
              <p>Sí, dentro de tu tramo puedes elegir una base superior a la mínima para mejorar tu base reguladora de prestaciones futuras.</p>
            </div>
            <div class="faq-item">
              <h3>¿Cuántas veces al año puedo cambiar mi base de cotización?</h3>
              <p>Hasta 6 veces al año. Si tus rendimientos reales difieren de la previsión, la Seguridad Social regulariza la diferencia a final de año.</p>
            </div>
            <div class="faq-item">
              <h3>¿Qué pasa si estoy en tarifa plana?</h3>
              <p>La tarifa plana sustituye esta tabla durante los primeros 12-24 meses de alta. Esta calculadora aplica una vez finalizada esa bonificación.</p>
            </div>

            <div class="callout callout-warn">
              <p><strong>Aviso:</strong> esta es una estimación orientativa con fines informativos, basada en la normativa vigente en ${CUOTAS.actualizado}, y no sustituye el asesoramiento de una gestoría o el simulador oficial de la Seguridad Social. No incluye recargos, bonificaciones específicas (tarifa plana, familia numerosa, discapacidad) ni el régimen de autónomos societarios.</p>
            </div>
          </div>

          ${adSlot("bottom")}
        </div>

        <aside class="sidebar">
          <div class="card">
            <h4>Calculadoras relacionadas</h4>
            <ul class="related-list">
              <li><a href="/calculadoras-fiscales/calculadora-irpf/">IRPF y retenciones</a></li>
              <li><a href="/calculadoras-fiscales/calculadora-nomina/">Nómina</a></li>
              <li><a href="/calculadoras-ahorro/calculadora-ahorro-objetivo/">Ahorro objetivo</a></li>
            </ul>
          </div>
          ${adSlot("sidebar")}
        </aside>
      </div>
    </div>
    <script>window.CUANTIA_TRAMOS_AUTONOMO = ${JSON.stringify(CUOTAS.tramos)};</script>
    ${adSlot("anchor")}
  `,
    extraScripts: [
      "/assets/js/calculators/ui-helpers.js",
      "/assets/js/calculators/autonomo.js",
    ],
  };
};

function fmtEur(value) {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(value);
}
