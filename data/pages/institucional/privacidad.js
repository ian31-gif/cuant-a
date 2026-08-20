module.exports = ({ SITE }) => ({
  path: "/privacidad/",
  title: "Política de privacidad | Cuantía",
  description: "Cómo tratamos tus datos personales en Cuantía: qué información recogemos, con qué finalidad y qué derechos tienes.",
  activeNav: "/privacidad/",
  priority: "0.3",
  changefreq: "yearly",
  noindex: false,
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Política de privacidad", href: "/privacidad/" },
  ],
  bodyHtml: `
    <div class="container">
      <article class="article-body" style="max-width:78ch;">
        <h1>Política de privacidad</h1>
        <p class="text-soft">Última actualización: 19 de agosto de 2026</p>

        <div class="callout callout-warn">
          <p><strong>Antes de publicar:</strong> esta plantilla es un punto de partida orientativo, no asesoramiento legal. Complétala con los datos reales de tu empresa/titular y haz que la revise un profesional antes de publicarla, especialmente en lo relativo al RGPD, la LOPDGDD y la LSSI-CE.</p>
        </div>

        <h2>1. Responsable del tratamiento</h2>
        <p>
          Ian Roure, con NIF 43588037R, y domicilio en El Vendrell, Tarragona, es el responsable del tratamiento
          de los datos personales que se recogen a través de ${SITE.name} (${SITE.baseUrl}). Puedes contactar con
          nosotros en <a href="mailto:${SITE.email}">${SITE.email}</a> para cualquier cuestión relacionada con esta
          política.
        </p>

        <h2>2. Qué datos tratamos</h2>
        <p>${SITE.name} está diseñada para minimizar la recogida de datos personales. En concreto:</p>
        <ul>
          <li><strong>Cálculos de las calculadoras:</strong> los importes y datos que introduces en las calculadoras se procesan en tu propio navegador y no se envían ni se almacenan en nuestros servidores.</li>
          <li><strong>Datos de navegación:</strong> si aceptas las cookies no esenciales, podemos recoger datos analíticos y de publicidad (ver nuestra <a href="/cookies/">política de cookies</a>).</li>
          <li><strong>Formulario de contacto / correo electrónico:</strong> si nos escribes, tratamos tu dirección de correo y el contenido de tu mensaje para poder responderte.</li>
        </ul>

        <h2>3. Finalidad y base legal</h2>
        <ul>
          <li><strong>Prestación del servicio</strong> (funcionamiento de las calculadoras): interés legítimo en ofrecer el servicio solicitado.</li>
          <li><strong>Analítica y mejora del sitio:</strong> consentimiento del usuario, otorgado a través del banner de cookies.</li>
          <li><strong>Publicidad personalizada</strong> (Google AdSense, si está activo): consentimiento del usuario a través del banner de cookies / plataforma de gestión de consentimiento (CMP).</li>
          <li><strong>Atención de consultas:</strong> ejecución de la relación precontractual/contractual iniciada por el usuario al contactarnos.</li>
        </ul>

        <h2>4. Publicidad y terceros (Google AdSense)</h2>
        <p>
          Cuando la monetización con Google AdSense esté activa, Google y sus socios publicitarios pueden utilizar
          cookies y tecnologías similares para mostrar anuncios basados en tus visitas a este y otros sitios web.
          Puedes obtener más información y gestionar tus preferencias de anuncios personalizados en
          <a href="https://myadcenter.google.com" target="_blank" rel="noopener">myadcenter.google.com</a> y en
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">google.com/settings/ads</a>.
        </p>

        <h2>5. Conservación de los datos</h2>
        <p>
          Conservamos los datos de contacto durante el tiempo necesario para atender tu consulta y, salvo que la
          normativa exija otra cosa, los eliminamos posteriormente. Los datos de analítica/publicidad se conservan
          según los plazos que definan las propias cookies (ver <a href="/cookies/">política de cookies</a>).
        </p>

        <h2>6. Tus derechos</h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y
          portabilidad escribiendo a <a href="mailto:${SITE.email}">${SITE.email}</a>, indicando el derecho que
          quieres ejercer y adjuntando un documento que acredite tu identidad. También tienes derecho a presentar
          una reclamación ante la Agencia Española de Protección de Datos (aepd.es) si consideras que el
          tratamiento no se ajusta a la normativa.
        </p>

        <h2>7. Transferencias internacionales</h2>
        <p>
          Algunos proveedores que utilizamos (por ejemplo, Google, para publicidad o alojamiento) pueden tratar
          datos fuera del Espacio Económico Europeo. En esos casos, se apoyan en las garantías previstas por el
          RGPD, como las cláusulas contractuales tipo.
        </p>

        <h2>8. Cambios en esta política</h2>
        <p>Podemos actualizar esta política para adaptarla a cambios normativos o del propio sitio. Publicaremos aquí cualquier cambio relevante junto con su fecha de actualización.</p>
      </article>
    </div>
  `,
});
