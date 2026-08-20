module.exports = ({ adSlot }) => ({
  path: "/plantillas/presupuesto/",
  title: "Generador de presupuestos gratis para autónomos (PDF) | Cuantía",
  description: "Crea un presupuesto profesional para tu cliente y descárgalo en PDF gratis, sin registro. Se genera directamente en tu navegador.",
  activeNav: "/plantillas/",
  priority: "0.9",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Plantillas", href: "/plantillas/" },
    { label: "Generador de presupuesto", href: "/plantillas/presupuesto/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Generador de presupuestos",
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
          "name": "¿Qué diferencia hay entre un presupuesto y una factura?",
          "acceptedAnswer": { "@type": "Answer", "text": "El presupuesto es una propuesta económica que envías antes de realizar el trabajo, sin efectos fiscales ni contables. La factura se emite una vez realizado el servicio o entregado el producto, y sí tiene efectos fiscales (declaras el IVA y, en su caso, la retención de IRPF)." },
        },
        {
          "@type": "Question",
          "name": "¿Es obligatorio incluir un plazo de validez en el presupuesto?",
          "acceptedAnswer": { "@type": "Answer", "text": "No es obligatorio por ley, pero es muy recomendable: indica hasta cuándo mantienes esos precios, para protegerte de subidas de costes si el cliente tarda en aceptar la propuesta." },
        },
        {
          "@type": "Question",
          "name": "Si el cliente acepta el presupuesto, ¿tengo que facturar lo mismo?",
          "acceptedAnswer": { "@type": "Answer", "text": "Normalmente sí, aunque en la factura final debes añadir el IVA y, si corresponde, la retención de IRPF con los porcentajes vigentes en el momento de facturar, que pueden no haber estado detallados igual en el presupuesto." },
        },
      ],
    },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Generador de presupuestos</h1>
      <p class="text-soft">Rellena tus datos y los de tu cliente, añade las líneas del presupuesto y descárgalo en PDF. Se genera en tu navegador, sin registro.</p>

      ${adSlot("top")}

      <div class="tool-layout">
        <div>
          <div class="invoice-doc" id="doc-preview">
            <div class="invoice-head">
              <div class="invoice-party">
                <span class="mini-label">De (tus datos)</span>
                <input type="text" class="invoice-input invoice-input--lg" id="emisorNombre" placeholder="Tu nombre o razón social">
                <input type="text" class="invoice-input" id="emisorNif" placeholder="NIF/CIF">
                <input type="text" class="invoice-input" id="emisorDireccion" placeholder="Dirección">
                <input type="text" class="invoice-input" id="emisorEmail" placeholder="Email de contacto">
              </div>
              <div class="invoice-meta">
                <h2>PRESUPUESTO</h2>
                <div class="invoice-meta-row"><span>Nº</span><input type="text" class="invoice-input" id="numero" value="2026-001" style="text-align:right;"></div>
                <div class="invoice-meta-row"><span>Fecha</span><input type="date" id="fecha"></div>
                <div class="invoice-meta-row"><span>Válido hasta</span><input type="date" id="fecha2"></div>
              </div>
            </div>

            <div class="invoice-party" style="margin-top:22px;">
              <span class="mini-label">Para (cliente)</span>
              <input type="text" class="invoice-input invoice-input--lg" id="clienteNombre" placeholder="Nombre o razón social del cliente">
              <input type="text" class="invoice-input" id="clienteNif" placeholder="NIF/CIF del cliente">
              <input type="text" class="invoice-input" id="clienteDireccion" placeholder="Dirección del cliente">
            </div>

            <table class="invoice-table">
              <thead><tr><th>Concepto</th><th>Cant.</th><th>Precio</th><th>Importe</th><th class="no-print"></th></tr></thead>
              <tbody id="doc-rows"></tbody>
            </table>
            <button type="button" id="add-row" class="btn btn-secondary no-print" style="width:auto;padding:8px 16px;font-size:0.88rem;">+ Añadir línea</button>

            <div class="invoice-totals">
              <div class="invoice-totals-row"><span>Subtotal</span><span id="out-subtotal">0,00 €</span></div>
              <div class="invoice-totals-row"><span>IVA (<input type="text" inputmode="decimal" class="invoice-input invoice-input--sm" id="iva" value="21">%)</span><span id="out-iva">0,00 €</span></div>
              <div class="invoice-totals-row invoice-totals-final"><span>TOTAL ESTIMADO</span><span id="out-total">0,00 €</span></div>
            </div>

            <textarea id="notas" class="invoice-notas" placeholder="Notas: condiciones, plazos de entrega, forma de pago…"></textarea>
          </div>

          <button type="button" id="print-btn" class="btn no-print" style="width:auto;margin-top:18px;padding:13px 26px;">🖨️ Imprimir / Guardar como PDF</button>

          ${adSlot("incontent")}

          <div class="article-body">
            <h2>Cómo usar este presupuesto</h2>
            <p>
              Un buen presupuesto deja claro qué incluye el precio, cuánto tiempo se mantiene esa oferta y en qué
              condiciones se acepta. Añade una línea por cada concepto, indica el plazo de validez y usa las notas
              para condiciones de pago o de entrega. Cuando el cliente lo acepte, puedes usar este mismo generador
              de <a href="/plantillas/factura/">factura</a> para emitir el documento final.
            </p>

            <h2>Preguntas frecuentes</h2>
            <div class="faq-item">
              <h3>¿Qué diferencia hay entre un presupuesto y una factura?</h3>
              <p>El presupuesto es una propuesta previa sin efectos fiscales; la factura se emite tras el servicio y sí tiene efectos fiscales.</p>
            </div>
            <div class="faq-item">
              <h3>¿Es obligatorio incluir un plazo de validez?</h3>
              <p>No por ley, pero es muy recomendable para protegerte de subidas de costes si el cliente tarda en aceptar.</p>
            </div>
            <div class="faq-item">
              <h3>Si el cliente acepta, ¿facturo lo mismo?</h3>
              <p>Normalmente sí, añadiendo el IVA y la retención de IRPF vigentes en el momento de facturar.</p>
            </div>

            <div class="callout callout-warn">
              <p><strong>Aviso:</strong> esta plantilla es un punto de partida orientativo; adapta las condiciones a tu actividad y, si tienes dudas legales, consulta con una gestoría.</p>
            </div>
          </div>

          ${adSlot("bottom")}
        </div>

        <aside class="sidebar">
          <div class="card">
            <h4>Relacionado</h4>
            <ul class="related-list">
              <li><a href="/plantillas/factura/">Generador de factura</a></li>
              <li><a href="/plantillas/contrato-freelance/">Contrato de freelance</a></li>
              <li><a href="/calculadoras-fiscales/calculadora-cuota-autonomo/">Cuota de autónomo</a></li>
            </ul>
          </div>
          ${adSlot("sidebar")}
        </aside>
      </div>
    </div>
    ${adSlot("anchor")}
  `,
  extraScripts: [
    "/assets/js/calculators/plantilla-documento.js",
  ],
});
