module.exports = ({ adSlot }) => ({
  path: "/plantillas/factura/",
  title: "Generador de facturas gratis para autónomos (PDF) | Cuantía",
  description: "Crea tu factura de autónomo online, con IVA y retención de IRPF, y descárgala en PDF gratis. Sin registro, se genera en tu navegador.",
  activeNav: "/plantillas/",
  priority: "0.9",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Plantillas", href: "/plantillas/" },
    { label: "Generador de factura", href: "/plantillas/factura/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Generador de facturas",
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
          "name": "¿Qué datos tiene que llevar obligatoriamente una factura?",
          "acceptedAnswer": { "@type": "Answer", "text": "Como mínimo: número de factura correlativo, fecha de expedición, tus datos identificativos (nombre/razón social, NIF y dirección), los del cliente, una descripción de la operación, la base imponible, el tipo y la cuota de IVA, y el total. Si estás sujeto a retención de IRPF, también debe figurar el porcentaje y el importe retenido." },
        },
        {
          "@type": "Question",
          "name": "¿Cuándo aplico retención de IRPF en la factura?",
          "acceptedAnswer": { "@type": "Answer", "text": "Cuando facturas a otra empresa o profesional (no a un particular), lo habitual es aplicar una retención a cuenta del IRPF del 15 %, o del 7 % durante el año de inicio de actividad y los dos siguientes. Si facturas a un particular, normalmente no se aplica retención." },
        },
        {
          "@type": "Question",
          "name": "¿Se guardan mis datos en algún servidor?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Esta herramienta calcula y genera la factura por completo en tu navegador; no se envía ningún dato a ningún servidor. El PDF se crea con la función de imprimir de tu propio navegador." },
        },
      ],
    },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Generador de facturas</h1>
      <p class="text-soft">Rellena tus datos y los de tu cliente, añade las líneas de la factura y descárgala en PDF. Se genera en tu navegador, sin registro.</p>

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
                <h2>FACTURA</h2>
                <div class="invoice-meta-row"><span>Nº</span><input type="text" class="invoice-input" id="numero" value="2026-001" style="text-align:right;"></div>
                <div class="invoice-meta-row"><span>Fecha</span><input type="date" id="fecha"></div>
                <div class="invoice-meta-row"><span>Vencimiento</span><input type="date" id="fecha2"></div>
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
              <div class="invoice-totals-row"><span>Retención IRPF (<input type="text" inputmode="decimal" class="invoice-input invoice-input--sm" id="retencion" value="15">%)</span><span id="out-retencion">−0,00 €</span></div>
              <div class="invoice-totals-row invoice-totals-final"><span>TOTAL</span><span id="out-total">0,00 €</span></div>
            </div>

            <textarea id="notas" class="invoice-notas" placeholder="Notas: forma de pago, IBAN, referencia del pedido…"></textarea>
          </div>

          <button type="button" id="print-btn" class="btn no-print" style="width:auto;margin-top:18px;padding:13px 26px;">🖨️ Imprimir / Guardar como PDF</button>

          ${adSlot("incontent")}

          <div class="article-body">
            <h2>Qué debe incluir una factura</h2>
            <p>
              Como mínimo, una factura debe llevar un número correlativo, la fecha de expedición, los datos
              identificativos del emisor y del cliente (nombre o razón social, NIF y dirección), una descripción
              clara de la operación, la base imponible, el tipo de IVA aplicado y su importe, la retención de IRPF
              si corresponde, y el total. Este generador incluye todos estos campos.
            </p>
            <div class="callout callout-info">
              <p>Si facturas a otra empresa o profesional, recuerda aplicar la retención de IRPF que corresponda (habitualmente 15 %, o 7 % si estás en tus primeros años de actividad). Si facturas a un particular, normalmente no se aplica.</p>
            </div>

            <h2>Preguntas frecuentes</h2>
            <div class="faq-item">
              <h3>¿Qué datos tiene que llevar obligatoriamente una factura?</h3>
              <p>Número correlativo, fecha, datos del emisor y del cliente, descripción de la operación, base imponible, IVA y, si corresponde, retención de IRPF.</p>
            </div>
            <div class="faq-item">
              <h3>¿Cuándo aplico retención de IRPF en la factura?</h3>
              <p>Al facturar a empresas o profesionales: 15 % con carácter general, o 7 % durante el año de inicio de actividad y los dos siguientes.</p>
            </div>
            <div class="faq-item">
              <h3>¿Se guardan mis datos en algún servidor?</h3>
              <p>No, todo se genera en tu navegador. El PDF se crea con la función de imprimir de tu propio navegador.</p>
            </div>

            <div class="callout callout-warn">
              <p><strong>Aviso:</strong> esta plantilla es un punto de partida orientativo y no sustituye el asesoramiento de una gestoría sobre las obligaciones de facturación específicas de tu actividad.</p>
            </div>
          </div>

          ${adSlot("bottom")}
        </div>

        <aside class="sidebar">
          <div class="card">
            <h4>Relacionado</h4>
            <ul class="related-list">
              <li><a href="/plantillas/presupuesto/">Generador de presupuesto</a></li>
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
