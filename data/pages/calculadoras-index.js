module.exports = ({ adSlot }) => ({
  path: "/calculadoras/",
  title: "Todas las calculadoras financieras gratuitas | Cuantía",
  description: "Índice completo de calculadoras gratuitas de Cuantía: préstamos, hipotecas, ahorro, divisas, autónomos e IRPF. Sin registro.",
  activeNav: "/calculadoras/",
  priority: "0.9",
  changefreq: "weekly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Calculadoras", href: "/calculadoras/" },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Todas las calculadoras</h1>
      <p class="text-soft">
        Diez calculadoras financieras gratuitas, agrupadas por categoría. Todas funcionan al instante en tu
        navegador, sin registro ni envío de datos a ningún servidor.
      </p>

      ${adSlot("incontent")}

      <div class="article-body">
        <h2>Préstamos e hipotecas</h2>
        <ul class="tool-list">
          <li><a href="/calculadoras-prestamos/calculadora-cuota-prestamo-personal/">Cuota de préstamo personal <span class="arrow">→</span></a></li>
          <li><a href="/calculadoras-prestamos/calculadora-tae-tin/">TAE a partir del TIN <span class="arrow">→</span></a></li>
          <li><a href="/calculadoras-hipotecas/calculadora-cuota-hipotecaria/">Cuota hipotecaria <span class="arrow">→</span></a></li>
        </ul>

        <h2>Ahorro y divisas</h2>
        <ul class="tool-list">
          <li><a href="/calculadoras-ahorro/calculadora-interes-compuesto/">Interés compuesto <span class="arrow">→</span></a></li>
          <li><a href="/calculadoras-ahorro/calculadora-ahorro-objetivo/">Ahorro objetivo <span class="arrow">→</span></a></li>
          <li><a href="/conversor-divisas/">Conversor de divisas <span class="arrow">→</span></a></li>
        </ul>

        <h2>Autónomos y fiscal</h2>
        <ul class="tool-list">
          <li><a href="/calculadoras-fiscales/calculadora-cuota-autonomo/">Cuota de autónomo (RETA) <span class="arrow">→</span></a></li>
          <li><a href="/calculadoras-fiscales/calculadora-irpf/">IRPF y retenciones <span class="arrow">→</span></a></li>
          <li><a href="/calculadoras-fiscales/calculadora-nomina/">Nómina (bruto a neto) <span class="arrow">→</span></a></li>
        </ul>

        <h2>Plantillas</h2>
        <ul class="tool-list">
          <li><a href="/plantillas/factura/">Generador de factura <span class="arrow">→</span></a></li>
          <li><a href="/plantillas/presupuesto/">Generador de presupuesto <span class="arrow">→</span></a></li>
        </ul>
        <p><a href="/plantillas/">Ver todas las plantillas →</a></p>
      </div>
    </div>
  `,
});
