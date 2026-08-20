module.exports = ({ adSlot }) => ({
  path: "/plantillas/",
  title: "Plantillas gratis para autónomos: factura, presupuesto y contrato | Cuantía",
  description: "Genera y descarga en PDF tu factura y presupuesto profesional en segundos, sin registro. Incluye plantilla de contrato de freelance.",
  activeNav: "/plantillas/",
  priority: "0.8",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Plantillas", href: "/plantillas/" },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Plantillas gratis para autónomos</h1>
      <p class="text-soft">
        Rellena los datos, mira el resultado en tiempo real y descárgalo como PDF con el botón de imprimir de tu
        navegador. Sin registro, sin instalar nada y sin que tus datos salgan de tu ordenador.
      </p>

      <ul class="tool-list">
        <li><a href="/plantillas/factura/">Generador de factura <span class="arrow">→</span></a></li>
        <li><a href="/plantillas/presupuesto/">Generador de presupuesto <span class="arrow">→</span></a></li>
        <li><a href="/plantillas/contrato-freelance/">Plantilla de contrato de freelance <span class="arrow">→</span></a></li>
      </ul>

      ${adSlot("incontent")}

      <div class="article-body">
        <h2>¿Cómo descargo el PDF?</h2>
        <p>
          Cada plantilla se genera directamente en tu navegador: no subimos tus datos a ningún servidor. Cuando
          termines de rellenarla, pulsa "Imprimir / Guardar como PDF" y, en el cuadro de impresión de tu navegador,
          elige <strong>"Guardar como PDF"</strong> como destino en lugar de una impresora física.
        </p>
        <p>
          Estas plantillas son un punto de partida orientativo. Si tienes dudas sobre qué debe incluir legalmente
          una factura o un contrato en tu caso concreto, consulta con una gestoría o asesoría.
        </p>
      </div>
    </div>
  `,
});
