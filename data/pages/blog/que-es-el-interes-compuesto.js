module.exports = ({ adSlot }) => ({
  path: "/blog/que-es-el-interes-compuesto/",
  title: "Interés compuesto explicado con ejemplos | Cuantía",
  description: "Qué es el interés compuesto, en qué se diferencia del interés simple y por qué el tiempo es la variable más importante al ahorrar.",
  activeNav: "/blog/",
  priority: "0.6",
  changefreq: "yearly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Interés compuesto explicado", href: "/blog/que-es-el-interes-compuesto/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Interés compuesto explicado con ejemplos",
      "description": "Qué es el interés compuesto y por qué el tiempo es la variable más importante al ahorrar.",
      "author": { "@type": "Organization", "name": "Cuantía" },
    },
  ],
  bodyHtml: `
    <div class="container">
      <article class="article-body" style="max-width:78ch;">
        <h1>Interés compuesto explicado con ejemplos</h1>
        <p class="text-soft">Actualizado en 2026 · Lectura de 5 minutos</p>

        <p>
          "El interés compuesto es la octava maravilla del mundo" es una frase que se repite mucho y que, aunque
          suene exagerada, tiene una base real: pequeñas diferencias en el tiempo de ahorro o en la rentabilidad
          generan diferencias muy grandes en el resultado final. Vamos a verlo con números.
        </p>

        <h2>Interés simple vs. interés compuesto</h2>
        <p>
          Con interés simple, los intereses se calculan siempre sobre el capital inicial. Con interés compuesto, los
          intereses generados en un periodo se suman al capital, y en el periodo siguiente también generan
          intereses. Esa es toda la diferencia, pero su efecto acumulado a largo plazo es muy distinto.
        </p>

        <h2>Ejemplo: 1.000 € a un 5 % anual durante 20 años</h2>
        <p>
          Con interés simple, 1.000 € al 5 % anual generarían 50 € cada año, sin variar: en 20 años tendrías 2.000 €
          (los 1.000 € iniciales más 1.000 € de intereses). Con interés compuesto (capitalización anual), esos
          mismos 1.000 € se convertirían en unos 2.653 €: los intereses de cada año se han ido sumando al capital y
          generando, a su vez, más intereses.
        </p>

        <h2>El efecto de las aportaciones periódicas</h2>
        <p>
          El interés compuesto es todavía más potente cuando, además del capital inicial, aportas una cantidad fija
          cada mes. Por ejemplo, empezar con 1.000 € y aportar 150 € al mes durante 15 años a un 5 % anual estimado
          da como resultado un capital final de unos 41.000 €, de los cuales "solo" 28.000 € son aportaciones
          propias: el resto es interés generado por esas aportaciones a lo largo del tiempo. Puedes comprobarlo (y
          cambiar los números por los tuyos) en la
          <a href="/calculadoras-ahorro/calculadora-interes-compuesto/">calculadora de interés compuesto</a>.
        </p>

        ${adSlot("incontent")}

        <h2>Por qué empezar antes importa más que aportar más</h2>
        <p>
          Si comparas a dos personas que ahorran la misma cantidad total, pero una empieza 10 años antes que la
          otra, la que empezó antes acaba con un capital notablemente mayor, porque sus primeras aportaciones han
          tenido más tiempo para generar interés sobre interés. Es la razón por la que, en ahorro a largo plazo, el
          tiempo suele pesar más que el importe mensual exacto.
        </p>

        <h2>Una advertencia importante</h2>
        <p>
          Todo lo anterior asume una rentabilidad constante, algo que no existe en la mayoría de productos de
          inversión reales (sí es más realista en depósitos a tipo fijo). Usa un interés estimado prudente y
          recuerda que rentabilidades pasadas no garantizan resultados futuros.
        </p>

        <div class="callout callout-info">
          <p>Si tienes una meta concreta (por ejemplo, ahorrar 15.000 € en 4 años), prueba también la <a href="/calculadoras-ahorro/calculadora-ahorro-objetivo/">calculadora de ahorro objetivo</a>, que calcula la aportación mensual necesaria para llegar a ella.</p>
        </div>
      </article>
    </div>
  `,
});
