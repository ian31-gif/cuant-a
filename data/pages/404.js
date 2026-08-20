module.exports = () => ({
  path: "/404/",
  title: "Página no encontrada | Cuantía",
  description: "La página que buscas no existe o se ha movido.",
  noindex: true,
  bodyHtml: `
    <div class="container">
      <div class="section" style="text-align:center;">
        <h1>404 — Página no encontrada</h1>
        <p class="text-soft">La página que buscas no existe o se ha movido de dirección.</p>
        <a class="btn" style="width:auto;display:inline-flex;margin-top:12px;" href="/">Volver al inicio</a>
      </div>
    </div>
  `,
});
