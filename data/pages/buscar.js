module.exports = ({ adSlot }) => ({
  path: "/buscar/",
  title: "Buscar en Cuantía",
  description: "Busca entre todas las calculadoras, plantillas y artículos de Cuantía.",
  activeNav: "/buscar/",
  priority: "0.3",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Buscar", href: "/buscar/" },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Buscar</h1>
      <p class="text-soft">Busca entre todas las calculadoras, plantillas y artículos de Cuantía.</p>

      <div class="tool-card" style="max-width:640px;">
        <div class="field" style="margin-bottom:8px;">
          <label for="buscar-input" class="visually-hidden">Buscar</label>
          <div class="input-wrap">
            <input type="search" id="buscar-input" placeholder="Ej. hipoteca, factura, autónomo…" autofocus>
          </div>
        </div>
        <p class="text-soft" id="buscar-count" style="font-size:0.88rem;"></p>
      </div>

      ${adSlot("incontent")}

      <ul class="tool-list" id="buscar-resultados" style="margin-top:22px;"></ul>
    </div>
  `,
  extraScripts: ["/assets/js/buscar.js"],
});
