module.exports = ({ adSlot }) => ({
  path: "/calculadoras-ahorro/",
  title: "Calculadoras de ahorro e interés compuesto | Cuantía",
  description: "Calcula cuánto crecerá tu capital con interés compuesto o cuánto tienes que ahorrar cada mes para alcanzar tu objetivo financiero.",
  activeNav: "/calculadoras/",
  priority: "0.8",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Calculadoras de ahorro", href: "/calculadoras-ahorro/" },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Calculadoras de ahorro e inversión</h1>
      <p class="text-soft">
        Dos preguntas distintas, dos calculadoras: "¿cuánto voy a tener si ahorro X al mes?" y "¿cuánto tengo que
        ahorrar al mes para llegar a X?". Ambas usan la misma base matemática del interés compuesto.
      </p>

      <ul class="tool-list">
        <li><a href="/calculadoras-ahorro/calculadora-interes-compuesto/">Calculadora de interés compuesto <span class="arrow">→</span></a></li>
        <li><a href="/calculadoras-ahorro/calculadora-ahorro-objetivo/">Calculadora de ahorro objetivo <span class="arrow">→</span></a></li>
      </ul>

      ${adSlot("incontent")}

      <div class="article-body">
        <h2>Por qué el tiempo importa más que el importe</h2>
        <p>
          Con interés compuesto, los intereses generados también generan intereses en los periodos siguientes.
          Por eso, empezar a ahorrar antes suele pesar más en el resultado final que aportar cantidades más altas
          durante menos tiempo. Puedes ver ejemplos numéricos en
          <a href="/blog/que-es-el-interes-compuesto/">interés compuesto explicado con ejemplos</a>.
        </p>
      </div>
    </div>
  `,
});
