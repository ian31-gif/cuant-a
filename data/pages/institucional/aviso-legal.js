module.exports = ({ SITE }) => ({
  path: "/aviso-legal/",
  title: "Aviso legal | Cuantía",
  description: "Información legal sobre el titular de Cuantía, condiciones de uso del sitio y limitación de responsabilidad.",
  activeNav: "/aviso-legal/",
  priority: "0.3",
  changefreq: "yearly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Aviso legal", href: "/aviso-legal/" },
  ],
  bodyHtml: `
    <div class="container">
      <article class="article-body" style="max-width:78ch;">
        <h1>Aviso legal</h1>
        <p class="text-soft">Última actualización: 19 de agosto de 2026</p>

        <div class="callout callout-warn">
          <p><strong>Antes de publicar:</strong> completa los datos identificativos reales y haz revisar este texto por un profesional legal; es una plantilla orientativa, no asesoramiento jurídico.</p>
        </div>

        <h2>1. Datos identificativos</h2>
        <p>
          En cumplimiento del deber de información de la Ley 34/2002, de Servicios de la Sociedad de la Información
          y de Comercio Electrónico (LSSI-CE), se informa de que ${SITE.name} (${SITE.baseUrl}) es un sitio web
          titularidad de:
        </p>
        <ul>
          <li>Titular: Ian Roure</li>
          <li>NIF: 43588037R</li>
          <li>Domicilio: El Vendrell, Tarragona</li>
          <li>Correo electrónico de contacto: <a href="mailto:${SITE.email}">${SITE.email}</a></li>
        </ul>

        <h2>2. Objeto y naturaleza informativa</h2>
        <p>
          ${SITE.name} ofrece calculadoras y contenidos informativos sobre finanzas personales con carácter
          orientativo. No constituye asesoramiento financiero, legal ni fiscal individualizado, y no sustituye la
          oferta vinculante ni el asesoramiento de una entidad financiera o un profesional cualificado.
        </p>

        <h2>3. Propiedad intelectual e industrial</h2>
        <p>
          Los textos, el diseño, el código y el resto de contenidos de ${SITE.name} son propiedad de Ian Roure
          o de sus licenciantes, salvo que se indique lo contrario. Queda prohibida su reproducción
          total o parcial sin autorización previa, salvo cita con enlace a la fuente original.
        </p>

        <h2>4. Limitación de responsabilidad</h2>
        <p>
          Los resultados de las calculadoras son estimaciones basadas en los datos que introduce el usuario y en
          fórmulas financieras estándar; pueden no coincidir exactamente con la oferta final de una entidad
          financiera, que puede aplicar comisiones, gastos o condiciones adicionales. ${SITE.name} no se
          responsabiliza de las decisiones que el usuario tome basándose en los resultados de estas herramientas.
        </p>
        <p>
          El conversor de divisas utiliza datos de terceros (tipos de cambio de referencia del Banco Central
          Europeo, vía la API pública de Frankfurter) que pueden sufrir interrupciones o retrasos ajenos a nuestro
          control.
        </p>

        <h2>5. Enlaces a terceros</h2>
        <p>
          Este sitio puede contener enlaces a páginas de terceros. No nos hacemos responsables del contenido,
          exactitud o políticas de privacidad de esos sitios externos.
        </p>

        <h2>6. Legislación aplicable</h2>
        <p>
          Este aviso legal se rige por la legislación española. Para cualquier controversia derivada del acceso o
          uso de este sitio web, las partes se someten a los juzgados y tribunales que correspondan conforme a
          derecho.
        </p>
      </article>
    </div>
  `,
});
