module.exports = ({ SITE }) => ({
  path: "/contacto/",
  title: "Contacto | Cuantía",
  description: "Ponte en contacto con el equipo de Cuantía para dudas, sugerencias o para reportar un error en alguna calculadora.",
  activeNav: "/contacto/",
  priority: "0.3",
  changefreq: "yearly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Contacto", href: "/contacto/" },
  ],
  bodyHtml: `
    <div class="container">
      <article class="article-body" style="max-width:78ch;">
        <h1>Contacto</h1>
        <p>
          ¿Has encontrado un error en alguna calculadora, tienes una sugerencia o quieres proponernos una nueva
          herramienta? Escríbenos, leemos todos los mensajes.
        </p>
        <div class="card" style="max-width:420px;">
          <h3>Correo electrónico</h3>
          <p><a href="mailto:${SITE.email}">${SITE.email}</a></p>
        </div>
        <p class="text-soft" style="margin-top:20px;">
          Nota: no ofrecemos asesoramiento financiero personalizado a través de este canal. Para decisiones
          concretas sobre tu situación financiera, consulta con tu entidad bancaria o con un asesor cualificado.
        </p>
      </article>
    </div>
  `,
});
