#!/usr/bin/env node
/* =========================================================
   Cuantía — build.js
   Sistema de build estático minimalista (sin dependencias).
   Lee data/pages/**.js, envuelve cada página con el layout
   compartido (src/partials/layout.js) y escribe HTML plano
   en dist/. También copia los assets y genera sitemap.xml y
   robots.txt.
   Uso: node build.js
   ========================================================= */
const fs = require("fs");
const path = require("path");
const { renderPage, adSlot, escapeHtml } = require("./src/partials/layout.js");
const SITE = require("./data/site-config.js");

const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");
const PAGES_DIR = path.join(ROOT, "data/pages");

function walk(dir, ext) {
  let results = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walk(full, ext));
    } else if (entry.name.endsWith(ext)) {
      results.push(full);
    }
  });
  return results;
}

function rimraf(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
}
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src, { withFileTypes: true }).forEach(entry => {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  });
}

function main() {
  rimraf(DIST);
  fs.mkdirSync(DIST, { recursive: true });

  // 1. Copiar assets estáticos.
  copyDir(path.join(ROOT, "src/assets"), path.join(DIST, "assets"));

  // 2. Cargar y renderizar todas las páginas.
  const pageFiles = walk(PAGES_DIR, ".js");
  const builtPages = [];

  pageFiles.forEach(file => {
    delete require.cache[require.resolve(file)];
    const mod = require(file);
    const page = typeof mod === "function" ? mod({ adSlot, escapeHtml, SITE }) : mod;

    if (!page || !page.path) {
      throw new Error(`Página inválida (falta "path") en ${file}`);
    }
    const html = renderPage(page);
    const outDir = path.join(DIST, page.path.replace(/^\//, ""));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
    builtPages.push(page);
    console.log("✓", page.path);
  });

  // 3. sitemap.xml
  const urls = builtPages
    .filter(p => p.noindex !== true)
    .map(p => `  <url><loc>${SITE.baseUrl}${p.path}</loc><changefreq>${p.changefreq || "monthly"}</changefreq><priority>${p.priority || "0.5"}</priority></url>`)
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(DIST, "sitemap.xml"), sitemap, "utf8");

  // 4. robots.txt
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE.baseUrl}/sitemap.xml\n`;
  fs.writeFileSync(path.join(DIST, "robots.txt"), robots, "utf8");

  // 5. 404.html en la raíz (convención de la mayoría de hostings estáticos).
  const notFoundSrc = path.join(DIST, "404/index.html");
  if (fs.existsSync(notFoundSrc)) {
    fs.copyFileSync(notFoundSrc, path.join(DIST, "404.html"));
  }

  // 6. Índice de búsqueda interno (usado por /buscar/).
  const searchIndex = builtPages
    .filter(p => p.noindex !== true && p.path !== "/buscar/")
    .map(p => ({
      title: p.title.replace(/\s*\|\s*Cuantía\s*$/, ""),
      description: p.description,
      path: p.path,
    }));
  fs.writeFileSync(path.join(DIST, "assets/search-index.json"), JSON.stringify(searchIndex), "utf8");

  console.log(`\nBuild completo: ${builtPages.length} páginas generadas en /dist`);
}

main();
