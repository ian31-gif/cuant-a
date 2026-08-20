module.exports = ({ adSlot }) => ({
  path: "/blog/amortizacion-anticipada-merece-la-pena/",
  title: "Amortización anticipada de un préstamo: ¿merece la pena? | Cuantía",
  description: "Cuándo compensa adelantar capital de un préstamo o hipoteca y cuándo puede ser mejor destinar ese dinero a otra cosa.",
  activeNav: "/blog/",
  priority: "0.6",
  changefreq: "yearly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Amortización anticipada", href: "/blog/amortizacion-anticipada-merece-la-pena/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Amortización anticipada de un préstamo: ¿merece la pena?",
      "description": "Cuándo compensa adelantar capital de un préstamo y cuándo puede ser mejor destinar ese dinero a otra cosa.",
      "author": { "@type": "Organization", "name": "Cuantía" },
    },
  ],
  bodyHtml: `
    <div class="container">
      <article class="article-body" style="max-width:78ch;">
        <h1>Amortización anticipada de un préstamo: ¿merece la pena?</h1>
        <p class="text-soft">Actualizado en 2026 · Lectura de 5 minutos</p>

        <p>
          Cuando tienes un dinero extra —una paga extra, una herencia, un ahorro acumulado—, una de las decisiones
          más habituales es si conviene usarlo para reducir el préstamo o la hipoteca por adelantado. La respuesta
          depende de tres factores: en qué punto del préstamo estás, el tipo de interés que pagas y qué alternativa
          tienes para ese dinero.
        </p>

        <h2>Por qué importa el momento del préstamo</h2>
        <p>
          En el sistema de amortización francés (el más habitual), al principio del préstamo cada cuota está
          compuesta mayoritariamente por intereses, y esa proporción se invierte según avanza el plazo. Por eso,
          amortizar anticipadamente en los primeros años reduce más intereses futuros que hacerlo cerca del final,
          cuando ya queda poco capital pendiente y, por tanto, poco interés que "ahorrarte".
        </p>

        <h2>Reducir cuota vs. reducir plazo</h2>
        <p>
          Al amortizar anticipadamente, normalmente puedes elegir entre dos opciones:
        </p>
        <ul>
          <li><strong>Reducir la cuota</strong>, manteniendo el plazo: alivia tu presupuesto mensual desde ya.</li>
          <li><strong>Reducir el plazo</strong>, manteniendo la cuota: terminas de pagar antes y ahorras más intereses en términos totales, porque el capital pendiente baja más rápido en las cuotas siguientes.</li>
        </ul>
        <p>
          Si tu objetivo es pagar menos intereses en total y tu presupuesto mensual no está ajustado, reducir plazo
          suele ser la opción que más ahorra a largo plazo.
        </p>

        ${adSlot("incontent")}

        <h2>¿Y si el interés de tu préstamo es bajo?</h2>
        <p>
          Aquí es donde entra la comparación con alternativas: si tu préstamo tiene un tipo de interés bajo (por
          ejemplo, una hipoteca fija a un 3 %) y tienes acceso a productos de ahorro o inversión con una rentabilidad
          esperada superior a ese tipo, en términos puramente numéricos podría compensar más invertir ese dinero que
          amortizar anticipadamente. La contrapartida es que invertir implica asumir riesgo, mientras que amortizar
          deuda es un "ahorro" garantizado equivalente al tipo de interés que dejas de pagar.
        </p>
        <p>
          Antes de decidir, comprueba también si tu préstamo tiene comisión por amortización anticipada (algunos
          productos la incluyen, especialmente hipotecas a tipo fijo) y resta ese coste al ahorro esperado.
        </p>

        <h2>Cómo estimar el ahorro real</h2>
        <p>
          La forma más directa de verlo es comparar el cuadro de amortización con y sin el pago anticipado: calcula
          tu préstamo actual en la <a href="/calculadoras-prestamos/calculadora-cuota-prestamo-personal/">calculadora de cuota de préstamo</a>
          o en la <a href="/calculadoras-hipotecas/calculadora-cuota-hipotecaria/">calculadora de cuota hipotecaria</a>,
          y repite el cálculo simulando un importe de préstamo menor (el capital pendiente en el momento en que
          harías la amortización) para ver cuánto cambia el total de intereses.
        </p>

        <div class="callout callout-info">
          <p><strong>En resumen:</strong> amortizar anticipadamente suele compensar más cuanto antes se hace en la vida del préstamo y cuanto más alto es el tipo de interés que pagas. Compara siempre con comisiones incluidas y con la alternativa real que tengas para ese dinero.</p>
        </div>
      </article>
    </div>
  `,
});
