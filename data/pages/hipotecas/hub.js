module.exports = ({ adSlot }) => ({
  path: "/calculadoras-hipotecas/",
  title: "Calculadora de hipoteca: cuota, gastos y amortización | Cuantía",
  description: "Calcula la cuota de tu hipoteca, los gastos de compraventa estimados y el dinero que necesitas de entrada, con cuadro de amortización anual.",
  activeNav: "/calculadoras/",
  priority: "0.8",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Calculadoras de hipotecas", href: "/calculadoras-hipotecas/" },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Calculadoras de hipotecas</h1>
      <p class="text-soft">
        Comprar una vivienda implica más gastos que la cuota mensual del banco. Esta calculadora te muestra la
        cuota, el reparto entre capital e intereses y una estimación del dinero que necesitas antes de firmar
        (entrada más gastos de compraventa).
      </p>

      <ul class="tool-list">
        <li><a href="/calculadoras-hipotecas/calculadora-cuota-hipotecaria/">Calculadora de cuota hipotecaria <span class="arrow">→</span></a></li>
      </ul>

      ${adSlot("incontent")}

      <div class="article-body">
        <h2>Hipoteca fija, variable o mixta</h2>
        <p>
          El tipo de interés de tu hipoteca influye directamente en la cuota que vas a calcular aquí. En una
          hipoteca fija, el TIN que introduzcas se mantiene constante durante toda la vida del préstamo; en una
          variable, el TIN cambia cada cierto tiempo (normalmente ligado al Euríbor más un diferencial), así que
          el resultado de la calculadora es una foto fija con el tipo actual. Puedes leer la comparativa completa
          en <a href="/blog/hipoteca-fija-vs-variable/">hipoteca fija vs. variable: cómo elegir</a>.
        </p>
      </div>
    </div>
  `,
});
