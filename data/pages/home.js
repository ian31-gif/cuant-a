module.exports = ({ adSlot, SITE }) => ({
  path: "/",
  title: "Cuantía — Calculadoras financieras y plantillas para autónomos",
  description: "Calculadoras gratuitas de préstamos, hipotecas, ahorro, IRPF, nómina y cuota de autónomo, más plantillas de factura y presupuesto en PDF. Sin registro.",
  activeNav: "/",
  priority: "1.0",
  changefreq: "weekly",
  bodyHtml: `
    <section class="hero">
      <div class="container">
        <p class="eyebrow">Calculadoras financieras y plantillas para autónomos</p>
        <h1>Haz cuentas claras antes de firmar</h1>
        <p class="lead">
          Calcula en segundos la cuota real de un préstamo o hipoteca, tu cuota de autónomo, tu IRPF o el neto
          de tu nómina, y genera tu factura o presupuesto en PDF. Sin registro, sin letra pequeña y con el
          desglose completo de cada resultado.
        </p>
      </div>
    </section>

    ${adSlot("leaderboard")}

    <section class="section">
      <div class="container">
        <h2>Elige tu calculadora</h2>
        <div class="grid grid-3">
          ${toolCard("💳", "Cuota de préstamo personal", "Calcula la cuota mensual, el total de intereses y el cuadro de amortización completo.", "/calculadoras-prestamos/calculadora-cuota-prestamo-personal/")}
          ${toolCard("📊", "TAE de un préstamo", "Convierte el TIN, el plazo y las comisiones en la TAE real que vas a pagar.", "/calculadoras-prestamos/calculadora-tae-tin/")}
          ${toolCard("🏠", "Cuota hipotecaria", "Simula la cuota, los gastos de compraventa y el dinero que necesitas de entrada.", "/calculadoras-hipotecas/calculadora-cuota-hipotecaria/")}
          ${toolCard("📈", "Interés compuesto", "Descubre cuánto puede crecer tu capital con aportaciones periódicas.", "/calculadoras-ahorro/calculadora-interes-compuesto/")}
          ${toolCard("🎯", "Ahorro objetivo", "Calcula cuánto tienes que aportar cada mes para llegar a tu meta de ahorro.", "/calculadoras-ahorro/calculadora-ahorro-objetivo/")}
          ${toolCard("💱", "Conversor de divisas", "Tipo de cambio actualizado entre las principales divisas, con conversión inmediata.", "/conversor-divisas/")}
        </div>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <h2>Para autónomos: fiscal y plantillas</h2>
        <div class="grid grid-3">
          ${toolCard("🧾", "Cuota de autónomo (RETA)", "Descubre tu tramo y tu cuota mensual según tus rendimientos netos, con la tabla oficial completa.", "/calculadoras-fiscales/calculadora-cuota-autonomo/")}
          ${toolCard("📄", "IRPF y retenciones", "Estima tu IRPF anual, tu tipo efectivo y tu neto según tus ingresos y tu situación familiar.", "/calculadoras-fiscales/calculadora-irpf/")}
          ${toolCard("💼", "Nómina: bruto a neto", "Cotizaciones a la Seguridad Social, IRPF estimado y neto mensual a partir de tu salario bruto.", "/calculadoras-fiscales/calculadora-nomina/")}
          ${toolCard("🧮", "Generador de factura", "Crea y descarga tu factura en PDF en segundos, con IVA y retención de IRPF calculados al vuelo.", "/plantillas/factura/")}
          ${toolCard("📋", "Generador de presupuesto", "Genera un presupuesto profesional para tu cliente y descárgalo en PDF.", "/plantillas/presupuesto/")}
          ${toolCard("📝", "Contrato de freelance", "Plantilla de contrato de prestación de servicios, lista para adaptar e imprimir.", "/plantillas/contrato-freelance/")}
        </div>
      </div>
    </section>

    ${adSlot("multiplex")}

    <section class="section-tight">
      <div class="container">
        <h2>¿Por qué usar las calculadoras de ${SITE.name}?</h2>
        <div class="grid grid-3">
          <div class="card">
            <h3>Fórmulas transparentes</h3>
            <p>Cada calculadora explica el método de cálculo que usa (sistema de amortización francés, interés compuesto mensual, etc.), sin cajas negras.</p>
          </div>
          <div class="card">
            <h3>Sin registro ni datos personales</h3>
            <p>Todos los cálculos se hacen en tu propio navegador. No guardamos los importes ni los datos que introduces.</p>
          </div>
          <div class="card">
            <h3>Resultado completo, no solo un número</h3>
            <p>Cuadro de amortización, reparto entre capital e intereses y explicación de cada resultado, no solo una cifra suelta.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <h2>Últimas guías del blog</h2>
        <div class="grid grid-3">
          ${toolCard("📘", "¿Cómo se calcula la TAE de un préstamo?", "La diferencia entre TIN y TAE explicada paso a paso, con ejemplo numérico.", "/blog/como-se-calcula-la-tae/")}
          ${toolCard("📘", "Hipoteca fija vs. variable: cómo elegir", "Ventajas, riesgos y en qué escenarios conviene cada tipo de hipoteca.", "/blog/hipoteca-fija-vs-variable/")}
          ${toolCard("📘", "Interés compuesto explicado con ejemplos", "Por qué el tiempo pesa más que el importe al ahorrar o invertir.", "/blog/que-es-el-interes-compuesto/")}
        </div>
      </div>
    </section>
  `,
});

function toolCard(icon, title, desc, href) {
  return `<a class="card card-link" href="${href}">
    <div class="card-icon">${icon}</div>
    <h3>${title}</h3>
    <p>${desc}</p>
  </a>`;
}
