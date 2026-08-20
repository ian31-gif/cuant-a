module.exports = ({ adSlot }) => ({
  path: "/blog/hipoteca-fija-vs-variable/",
  title: "Hipoteca fija vs. variable: ¿cuál conviene más? | Cuantía",
  description: "Comparamos la hipoteca fija y la variable: cómo funciona cada una, sus riesgos y en qué situaciones suele convenir más una u otra.",
  activeNav: "/blog/",
  priority: "0.6",
  changefreq: "yearly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Hipoteca fija vs. variable", href: "/blog/hipoteca-fija-vs-variable/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Hipoteca fija vs. variable: cómo elegir",
      "description": "Comparamos la hipoteca fija y la variable, sus riesgos y en qué situaciones conviene más cada una.",
      "author": { "@type": "Organization", "name": "Cuantía" },
    },
  ],
  bodyHtml: `
    <div class="container">
      <article class="article-body" style="max-width:78ch;">
        <h1>Hipoteca fija vs. variable: ¿cuál conviene más?</h1>
        <p class="text-soft">Actualizado en 2026 · Lectura de 6 minutos</p>

        <p>
          Es una de las primeras decisiones que hay que tomar al pedir una hipoteca, y no tiene una respuesta única:
          depende de tu tolerancia al riesgo, del plazo y de cómo estén los tipos de interés en el momento de
          contratar. Aquí tienes las claves para decidir con criterio.
        </p>

        <h2>Hipoteca fija: cuota que no cambia</h2>
        <p>
          En una hipoteca fija, el TIN se pacta al firmar y no cambia durante toda la vida del préstamo. Eso
          significa que la cuota mensual es siempre la misma, sin sorpresas si suben los tipos de interés. A
          cambio, el TIN de partida suele ser algo más alto que el de una hipoteca variable en el momento de la
          firma, porque el banco asume el riesgo de que los tipos suban en el futuro.
        </p>

        <h2>Hipoteca variable: cuota ligada al Euríbor</h2>
        <p>
          En una hipoteca variable, el TIN se compone de un índice de referencia (normalmente el Euríbor) más un
          diferencial fijo que pone el banco. La cuota se revisa cada 6 o 12 meses según marque el contrato, así
          que puede subir o bajar con el tiempo. Si el Euríbor baja, tu cuota baja; si sube, tu cuota sube también.
        </p>

        <h2>¿Y la hipoteca mixta?</h2>
        <p>
          Combina ambos mundos: un periodo inicial (por ejemplo, 5 o 10 años) a tipo fijo, y el resto del plazo a
          tipo variable. Es una forma de tener certeza en los primeros años, cuando la cuota suele pesar más sobre
          el presupuesto, asumiendo variabilidad más adelante.
        </p>

        ${adSlot("incontent")}

        <h2>¿En qué situaciones conviene cada una?</h2>
        <ul>
          <li><strong>Fija:</strong> si prefieres previsibilidad total y tu presupuesto no admite sorpresas, o si el plazo es muy largo y prefieres no exponerte a décadas de variación de tipos.</li>
          <li><strong>Variable:</strong> si el diferencial es claramente más bajo que el TIN fijo equivalente, si el plazo es corto o medio, o si puedes asumir cierta variación en la cuota sin que afecte a tu economía.</li>
          <li><strong>Mixta:</strong> si quieres estabilidad en los primeros años (por ejemplo, mientras se estabilizan otros gastos) sin renunciar a un tipo potencialmente más bajo a largo plazo.</li>
        </ul>

        <h2>Compara la cuota real de cada opción</h2>
        <p>
          Más allá de la teoría, lo más útil es comparar números concretos: introduce el TIN fijo que te ofrezcan y,
          por separado, una estimación del TIN variable actual (Euríbor + diferencial) en la
          <a href="/calculadoras-hipotecas/calculadora-cuota-hipotecaria/">calculadora de cuota hipotecaria</a> y
          compara la cuota resultante y el total de intereses en ambos escenarios.
        </p>

        <div class="callout callout-warn">
          <p><strong>Ten en cuenta:</strong> en una hipoteca variable, el escenario que calcules con el Euríbor actual es solo una foto fija; el índice puede moverse en cualquier dirección durante los años siguientes.</p>
        </div>
      </article>
    </div>
  `,
});
