const SITE = require("../../data/site-config.js");
const { headHtml, escapeHtml } = require("./head.js");

function headerHtml(activePath) {
  const links = SITE.nav.map(item => {
    const active = activePath === item.href;
    return `<a href="${item.href}"${active ? ' aria-current="page"' : ""}>${item.label}</a>`;
  }).join("\n        ");

  return `<a class="skip-link" href="#main">Saltar al contenido</a>
  <header class="site-header">
    <div class="container">
      <a class="brand" href="/">
        <span class="brand-mark">C</span>
        <span>${SITE.name}</span>
      </a>
      <nav class="main-nav" aria-label="Navegación principal">
        ${links}
      </nav>
      <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button>
    </div>
  </header>`;
}

function breadcrumbsHtml(crumbs) {
  if (!crumbs || crumbs.length < 2) return "";
  const items = crumbs.map((c, idx) => {
    if (idx === crumbs.length - 1) {
      return `<li aria-current="page">${escapeHtml(c.label)}</li>`;
    }
    return `<li><a href="${c.href}">${escapeHtml(c.label)}</a></li>`;
  }).join("");
  return `<nav class="breadcrumbs container" aria-label="Migas de pan">
    <ol>${items}</ol>
  </nav>`;
}

function footerHtml() {
  const cols = SITE.footerColumns.map(col => {
    const links = col.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("\n          ");
    return `<div>
        <h5>${col.title}</h5>
        <ul>
          ${links}
        </ul>
      </div>`;
  }).join("\n      ");

  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="brand" style="color:#fff;">
            <span class="brand-mark">C</span>
            <span>${SITE.name}</span>
          </div>
          <p style="margin-top:12px;font-size:0.9rem;color:#aebbcc;max-width:32ch;">${SITE.tagline}</p>
        </div>
        ${cols}
      </div>
      <div class="footer-bottom">
        <span>© <span data-year>${SITE.year}</span> ${SITE.name}. Todos los derechos reservados.</span>
        <span>Contacto: <a href="mailto:${SITE.email}">${SITE.email}</a></span>
      </div>
      <p class="footer-disclaimer">
        Las calculadoras de ${SITE.name} ofrecen estimaciones orientativas con fines informativos y no constituyen
        asesoramiento financiero, legal ni fiscal. Los resultados dependen de los datos introducidos y de
        simplificaciones metodológicas (ver la nota de cada calculadora); antes de tomar una decisión financiera,
        contrasta las cifras con tu entidad bancaria o un asesor cualificado.
      </p>
    </div>
  </footer>`;
}

function cookieBannerHtml() {
  return `<div class="cookie-banner" id="cookie-banner" role="dialog" aria-label="Aviso de cookies" hidden>
    <p>
      Usamos cookies propias y, en su caso, de terceros para analizar el uso del sitio y mostrar publicidad
      relevante. Puedes aceptar todas, rechazar las no esenciales o leer más en nuestra
      <a href="/cookies/">política de cookies</a>.
    </p>
    <div class="cookie-actions">
      <button class="btn" data-consent-accept style="width:auto;">Aceptar todas</button>
      <button class="btn btn-secondary" data-consent-reject style="width:auto;">Rechazar no esenciales</button>
    </div>
  </div>`;
}

function adSlot(kind, label) {
  const labels = {
    leaderboard: "Espacio reservado para anuncio (cabecera)",
    top: "Espacio reservado para anuncio (superior)",
    incontent: "Espacio reservado para anuncio (contenido)",
    bottom: "Espacio reservado para anuncio (inferior)",
    sidebar: "Espacio reservado para anuncio (lateral)",
    multiplex: "Espacio reservado para anuncio (relacionado)",
    anchor: "Espacio reservado para anuncio (anclado móvil)",
  };
  return `<div class="ad-slot ad-slot--${kind}" data-ad-slot="${kind}" aria-hidden="true">
    <span class="ad-slot-label">
      <span>${label || labels[kind] || "Publicidad"}</span>
    </span>
  </div>`;
}

/**
 * Compone la página completa.
 * @param {object} page { path, title, description, schema, crumbs, bodyHtml, activeNav, extraScripts }
 */
function breadcrumbSchema(crumbs) {
  if (!crumbs || crumbs.length < 2) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((c, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": c.label,
      "item": `${SITE.baseUrl}${c.href}`,
    })),
  };
}

function siteWideSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": SITE.name,
      "url": SITE.baseUrl,
      "logo": `${SITE.baseUrl}/assets/img/og-default.png`,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE.name,
      "url": SITE.baseUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${SITE.baseUrl}/buscar/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];
}

function renderPage(page) {
  const bcSchema = breadcrumbSchema(page.crumbs);
  page = Object.assign({}, page, { schema: [...siteWideSchema(), ...(page.schema || []), ...(bcSchema ? [bcSchema] : [])] });
  const head = headHtml(page);
  const header = headerHtml(page.activeNav || page.path);
  const crumbs = breadcrumbsHtml(page.crumbs);
  const footer = footerHtml();
  const cookieBanner = cookieBannerHtml();
  const extraScripts = (page.extraScripts || []).map(src => `<script src="${src}" defer></script>`).join("\n  ");

  return `${head}
<body>
  ${header}
  ${crumbs}
  <main id="main">
    ${page.bodyHtml}
  </main>
  ${footer}
  ${cookieBanner}
  <script src="/assets/js/main.js" defer></script>
  ${extraScripts}
</body>
</html>
`;
}

module.exports = { renderPage, adSlot, escapeHtml };
