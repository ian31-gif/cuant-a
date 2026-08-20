module.exports = ({ adSlot }) => ({
  path: "/plantillas/contrato-freelance/",
  title: "Plantilla de contrato de freelance (Word/PDF) gratis | Cuantía",
  description: "Plantilla gratuita de contrato de prestación de servicios para freelances y autónomos. Descárgala en PDF o cópiala para adaptarla a tu caso.",
  activeNav: "/plantillas/",
  priority: "0.7",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Plantillas", href: "/plantillas/" },
    { label: "Contrato de freelance", href: "/plantillas/contrato-freelance/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Es obligatorio firmar un contrato con cada cliente?",
          "acceptedAnswer": { "@type": "Answer", "text": "No es obligatorio por ley para prestar servicios como autónomo, pero es muy recomendable: deja por escrito el alcance del trabajo, el precio, los plazos y qué pasa si algo sale mal, lo que evita malentendidos y te da respaldo legal si hay una disputa." },
        },
        {
          "@type": "Question",
          "name": "¿Qué cláusulas no debería faltar en un contrato de freelance?",
          "acceptedAnswer": { "@type": "Answer", "text": "El objeto del contrato (qué se va a hacer), el precio y la forma de pago, los plazos de entrega, la propiedad intelectual del trabajo entregado, la confidencialidad, y las condiciones de cancelación o modificación del encargo." },
        },
        {
          "@type": "Question",
          "name": "¿Esta plantilla sustituye a un abogado?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Es un punto de partida orientativo para encargos sencillos. Para proyectos de importe alto, con clientes internacionales o con cláusulas complejas de propiedad intelectual, es recomendable que un abogado revise el contrato." },
        },
      ],
    },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Plantilla de contrato de freelance</h1>
      <p class="text-soft">Un modelo de contrato de prestación de servicios que puedes rellenar, adaptar e imprimir o guardar en PDF.</p>

      ${adSlot("top")}

      <div class="tool-layout">
        <div>
          <div class="invoice-doc" id="doc-preview" contenteditable="true" spellcheck="false">
            <h2 style="text-align:center;margin-top:0;">CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES</h2>
            <p>En <strong>[ciudad]</strong>, a <strong>[fecha]</strong>.</p>

            <p><strong>REUNIDOS</strong></p>
            <p>
              De una parte, <strong>[nombre del cliente o empresa]</strong>, con NIF <strong>[NIF]</strong> y domicilio en
              <strong>[dirección]</strong>, en adelante "el Cliente".
            </p>
            <p>
              De otra parte, <strong>[tu nombre]</strong>, con NIF <strong>[tu NIF]</strong> y domicilio en
              <strong>[tu dirección]</strong>, en adelante "el Profesional".
            </p>
            <p>Ambas partes se reconocen mutuamente capacidad legal suficiente para suscribir el presente contrato y, a tal efecto,</p>

            <p><strong>ACUERDAN</strong></p>

            <p><strong>Primera. Objeto del contrato.</strong><br>
            El Profesional se compromete a prestar al Cliente los siguientes servicios: <strong>[descripción detallada del trabajo, entregables y alcance]</strong>.</p>

            <p><strong>Segunda. Plazo de ejecución.</strong><br>
            Los servicios se prestarán entre el <strong>[fecha de inicio]</strong> y el <strong>[fecha de finalización o entrega]</strong>, salvo acuerdo posterior de modificación por escrito entre las partes.</p>

            <p><strong>Tercera. Precio y forma de pago.</strong><br>
            El precio total de los servicios asciende a <strong>[importe]</strong> € (IVA no incluido), que se abonará de la siguiente forma: <strong>[por ejemplo: 50 % a la firma del contrato y 50 % a la entrega final, mediante transferencia bancaria a la cuenta que indique el Profesional]</strong>.</p>

            <p><strong>Cuarta. Propiedad intelectual.</strong><br>
            Los derechos de propiedad intelectual sobre los materiales entregados se transmitirán al Cliente una vez efectuado el pago íntegro del precio pactado, salvo que se indique lo contrario en este contrato.</p>

            <p><strong>Quinta. Confidencialidad.</strong><br>
            Ambas partes se comprometen a mantener la confidencialidad de la información intercambiada con motivo de este contrato, tanto durante su vigencia como una vez finalizado.</p>

            <p><strong>Sexta. Resolución y cancelación.</strong><br>
            Cualquiera de las partes podrá resolver el contrato mediante comunicación escrita con <strong>[nº de días]</strong> días de antelación. En caso de cancelación por parte del Cliente una vez iniciados los trabajos, el Profesional tendrá derecho al pago proporcional del trabajo ya realizado.</p>

            <p><strong>Séptima. Legislación y jurisdicción.</strong><br>
            El presente contrato se rige por la legislación española. Para cualquier controversia derivada de su interpretación o cumplimiento, ambas partes se someten a los juzgados y tribunales de <strong>[ciudad]</strong>.</p>

            <p>Y en prueba de conformidad, ambas partes firman el presente contrato por duplicado en el lugar y fecha indicados.</p>

            <div style="display:flex;justify-content:space-between;margin-top:50px;">
              <div>______________________<br>El Cliente</div>
              <div>______________________<br>El Profesional</div>
            </div>
          </div>

          <button type="button" id="print-btn-contrato" class="btn no-print" style="width:auto;margin-top:18px;padding:13px 26px;">🖨️ Imprimir / Guardar como PDF</button>
          <p class="hint no-print" style="margin-top:8px;">Puedes hacer clic directamente sobre el texto para editarlo antes de imprimir.</p>

          ${adSlot("incontent")}

          <div class="article-body">
            <h2>Cómo adaptar esta plantilla</h2>
            <p>
              Sustituye cada campo entre corchetes por los datos reales del encargo. Presta especial atención a la
              cláusula de <strong>objeto del contrato</strong>: cuanto más detallado sea el alcance del trabajo (qué
              incluye y qué no), menos margen hay para malentendidos si el cliente pide cambios más adelante.
            </p>

            <h2>Preguntas frecuentes</h2>
            <div class="faq-item">
              <h3>¿Es obligatorio firmar un contrato con cada cliente?</h3>
              <p>No por ley, pero es muy recomendable para dejar por escrito el alcance, el precio y los plazos, y tener respaldo si hay una disputa.</p>
            </div>
            <div class="faq-item">
              <h3>¿Qué cláusulas no deberían faltar?</h3>
              <p>Objeto del contrato, precio y forma de pago, plazos, propiedad intelectual, confidencialidad y condiciones de cancelación.</p>
            </div>
            <div class="faq-item">
              <h3>¿Esta plantilla sustituye a un abogado?</h3>
              <p>No. Es un punto de partida para encargos sencillos; para proyectos de importe alto o cláusulas complejas, conviene una revisión legal.</p>
            </div>

            <div class="callout callout-warn">
              <p><strong>Aviso:</strong> esta plantilla tiene fines informativos y no constituye asesoramiento legal. Antes de firmar un contrato importante, revísalo con un abogado.</p>
            </div>
          </div>

          ${adSlot("bottom")}
        </div>

        <aside class="sidebar">
          <div class="card">
            <h4>Relacionado</h4>
            <ul class="related-list">
              <li><a href="/plantillas/factura/">Generador de factura</a></li>
              <li><a href="/plantillas/presupuesto/">Generador de presupuesto</a></li>
              <li><a href="/calculadoras-fiscales/calculadora-cuota-autonomo/">Cuota de autónomo</a></li>
            </ul>
          </div>
          ${adSlot("sidebar")}
        </aside>
      </div>
    </div>
    <script>
      document.getElementById("print-btn-contrato").addEventListener("click", function () { window.print(); });
    </script>
    ${adSlot("anchor")}
  `,
});
