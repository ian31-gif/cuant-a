// Genera el <head> de cada página a partir de sus metadatos.
const SITE = require("../../data/site-config.js");

function headHtml(page) {
  const canonical = `${SITE.baseUrl}${page.path}`;
  const ogImage = `${SITE.baseUrl}/assets/img/og-default.png`;
  const schemaBlocks = (page.schema || []).map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n    ");

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(page.title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="${page.noindex ? "noindex, follow" : "index, follow"}">
  <link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${SITE.name}">
  <meta property="og:title" content="${escapeHtml(page.title)}">
  <meta property="og:description" content="${escapeHtml(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:locale" content="es_ES">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(page.title)}">
  <meta name="twitter:description" content="${escapeHtml(page.description)}">

  <link rel="preconnect" href="https://api.frankfurter.dev">
  <link rel="stylesheet" href="/assets/css/styles.css">
  ${schemaBlocks}
  <!--
    AdSense: una vez tengas la cuenta aprobada, añade aquí el script de
    verificación / auto ads de Google, o actívalo solo tras el consentimiento
    de cookies (ver src/assets/js/main.js -> evento "cuantia:consent").
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
  -->
</head>`;
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

module.exports = { headHtml, escapeHtml };
