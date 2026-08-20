module.exports = ({ SITE }) => ({
  path: "/cookies/",
  title: "Política de cookies | Cuantía",
  description: "Qué cookies utiliza Cuantía, con qué finalidad y cómo puedes aceptarlas, rechazarlas o eliminarlas.",
  activeNav: "/cookies/",
  priority: "0.3",
  changefreq: "yearly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Política de cookies", href: "/cookies/" },
  ],
  bodyHtml: `
    <div class="container">
      <article class="article-body" style="max-width:78ch;">
        <h1>Política de cookies</h1>
        <p class="text-soft">Última actualización: 19 de agosto de 2026</p>

        <div class="callout callout-warn">
          <p><strong>Antes de publicar:</strong> revisa esta tabla con las cookies que realmente utilices (analítica, publicidad) y ajústala a tu configuración real de Google AdSense/Analytics. Un CMP certificado (compatible con el marco de consentimiento de Google) es recomendable si vas a servir anuncios en la Unión Europea.</p>
        </div>

        <h2>¿Qué es una cookie?</h2>
        <p>
          Una cookie es un pequeño archivo que un sitio web guarda en tu navegador para recordar información sobre
          tu visita, como tus preferencias o, en el caso de las cookies de publicidad, tus intereses para mostrarte
          anuncios más relevantes.
        </p>

        <h2>Cookies que utilizamos</h2>
        <div class="table-wrap">
          <table class="fx">
            <thead><tr><th>Tipo</th><th>Finalidad</th><th>¿Requiere consentimiento?</th></tr></thead>
            <tbody>
              <tr><td>Técnicas / necesarias</td><td>Recordar tu elección de aceptar o rechazar cookies (banner de consentimiento) y el correcto funcionamiento del sitio.</td><td>No</td></tr>
              <tr><td>Analíticas</td><td>Medir visitas y uso del sitio para mejorar su contenido y rendimiento.</td><td>Sí</td></tr>
              <tr><td>Publicidad (Google AdSense)</td><td>Mostrar anuncios, en su caso personalizados según tus intereses, y medir su rendimiento.</td><td>Sí</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Cómo gestionar tu consentimiento</h2>
        <p>
          Al entrar por primera vez a ${SITE.name}, te mostramos un banner donde puedes aceptar todas las cookies o
          rechazar las no esenciales. Puedes cambiar tu decisión en cualquier momento borrando las cookies de este
          sitio desde la configuración de tu navegador, lo que hará que el banner vuelva a aparecer en tu próxima
          visita.
        </p>

        <h2>Cómo desactivar cookies desde tu navegador</h2>
        <ul>
          <li>Chrome: Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.</li>
          <li>Firefox: Ajustes → Privacidad y seguridad → Cookies y datos del sitio.</li>
          <li>Safari: Preferencias → Privacidad → Gestionar datos de sitios web.</li>
          <li>Edge: Configuración → Cookies y permisos del sitio.</li>
        </ul>

        <h2>Publicidad de Google</h2>
        <p>
          Si servimos anuncios a través de Google AdSense, Google puede utilizar cookies propias y de terceros para
          mostrar anuncios basados en tus visitas anteriores a este u otros sitios web. Puedes obtener más
          información sobre cómo Google usa estas cookies en
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">policies.google.com/technologies/ads</a>
          y gestionar tus preferencias de anuncios en
          <a href="https://myadcenter.google.com" target="_blank" rel="noopener">myadcenter.google.com</a>.
        </p>
      </article>
    </div>
  `,
});
