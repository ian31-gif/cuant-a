module.exports = ({ adSlot }) => ({
  path: "/calculadoras-fiscales/",
  title: "Calculadoras fiscales y para autónomos: cuota, IRPF, nómina | Cuantía",
  description: "Calculadoras gratuitas para autónomos y asalariados: cuota de autónomo por tramos, IRPF y retenciones, y nómina de bruto a neto.",
  activeNav: "/calculadoras/",
  priority: "0.8",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Calculadoras fiscales y de autónomos", href: "/calculadoras-fiscales/" },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Calculadoras fiscales y para autónomos</h1>
      <p class="text-soft">
        Tres herramientas pensadas para autónomos y asalariados: cuánto pagas de cuota a la Seguridad Social,
        cuánto se lleva Hacienda de tus ingresos y qué neto te queda de tu nómina.
      </p>

      <ul class="tool-list">
        <li><a href="/calculadoras-fiscales/calculadora-cuota-autonomo/">Calculadora de cuota de autónomo (RETA) <span class="arrow">→</span></a></li>
        <li><a href="/calculadoras-fiscales/calculadora-irpf/">Calculadora de IRPF y retenciones <span class="arrow">→</span></a></li>
        <li><a href="/calculadoras-fiscales/calculadora-nomina/">Calculadora de nómina (bruto a neto) <span class="arrow">→</span></a></li>
      </ul>

      ${adSlot("incontent")}

      <div class="article-body">
        <h2>¿Por qué estas tres calculadoras juntas?</h2>
        <p>
          Si eres autónomo, tu cuota a la Seguridad Social y tu IRPF dependen ambos de tus rendimientos netos, así
          que suele interesarte revisarlos juntos al planificar precios o previsiones. Si eres asalariado, la
          calculadora de nómina te muestra en un solo cálculo las cotizaciones y la retención que ya aplica tu
          empresa cada mes.
        </p>
        <p>
          Todas las cifras normativas (tramos de cotización, escala de IRPF) están fechadas y se revisan cada año;
          consulta siempre la fuente oficial antes de tomar una decisión importante.
        </p>
      </div>
    </div>
  `,
});
