module.exports = ({ adSlot }) => ({
  path: "/blog/como-se-calcula-la-tae/",
  title: "¿Cómo se calcula la TAE de un préstamo? Guía con ejemplo | Cuantía",
  description: "Explicamos qué es la TAE, en qué se diferencia del TIN y cómo se calcula paso a paso, con un ejemplo numérico completo.",
  activeNav: "/blog/",
  priority: "0.6",
  changefreq: "yearly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Cómo se calcula la TAE", href: "/blog/como-se-calcula-la-tae/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "¿Cómo se calcula la TAE de un préstamo?",
      "description": "Explicamos qué es la TAE, en qué se diferencia del TIN y cómo se calcula paso a paso.",
      "author": { "@type": "Organization", "name": "Cuantía" },
    },
  ],
  bodyHtml: `
    <div class="container">
      <article class="article-body" style="max-width:78ch;">
        <h1>¿Cómo se calcula la TAE de un préstamo?</h1>
        <p class="text-soft">Actualizado en 2026 · Lectura de 5 minutos</p>

        <p>
          Cuando pides un préstamo, el banco te da dos porcentajes que a menudo se confunden: el TIN y la TAE. Son
          números distintos, calculados de forma distinta, y la diferencia entre ambos puede suponerte varios
          cientos de euros a lo largo del préstamo si no la tienes en cuenta al comparar ofertas.
        </p>

        <h2>TIN: el tipo de interés "puro"</h2>
        <p>
          El TIN (Tipo de Interés Nominal) es el porcentaje que el banco aplica sobre el capital que todavía te
          queda por devolver. Es el dato que se usa directamente en la fórmula de la cuota mensual: cuanto más alto
          el TIN, mayor la cuota (a igualdad de importe y plazo). Pero el TIN no dice nada sobre las comisiones que
          puede llevar el préstamo.
        </p>

        <h2>TAE: el coste real, comisiones incluidas</h2>
        <p>
          La TAE (Tasa Anual Equivalente) parte del TIN y le añade el efecto de las comisiones (normalmente, la
          comisión de apertura) y de la frecuencia con la que pagas las cuotas. El resultado es una tasa que
          representa el coste financiero total del préstamo expresado en términos anuales, y es el número que
          deberías usar para comparar ofertas de bancos distintos, porque tiene en cuenta más variables que el TIN
          por sí solo.
        </p>

        <h2>Cómo se calcula, paso a paso</h2>
        <p>El cálculo, simplificado, sigue esta lógica:</p>
        <ol>
          <li>Se calcula la cuota mensual constante a partir del TIN, el importe y el plazo (sistema de amortización francés).</li>
          <li>Se calcula el importe neto que realmente recibes: el capital solicitado menos la comisión de apertura.</li>
          <li>
            Se busca la tasa mensual que hace que el valor actual de todas las cuotas futuras sea exactamente igual
            a ese importe neto recibido (en la práctica, se prueban distintas tasas hasta encontrar la que cuadra;
            nuestra <a href="/calculadoras-prestamos/calculadora-tae-tin/">calculadora de TAE</a> lo hace de forma automática).
          </li>
          <li>Esa tasa mensual se convierte a un equivalente anual: esa es la TAE.</li>
        </ol>

        <h2>Ejemplo numérico</h2>
        <p>
          Un préstamo de 10.000 € a 5 años (60 meses) con un TIN del 9,5 % y una comisión de apertura del 1,5 %
          tiene una cuota mensual de unos 210 €. Sin comisión, la TAE sería prácticamente igual al TIN capitalizado
          mensualmente (~9,93 %). Con la comisión de apertura del 1,5 % repartida entre las 60 cuotas, la TAE sube
          por encima del 10,5 %. Puedes reproducir este cálculo con tus propios números en la
          <a href="/calculadoras-prestamos/calculadora-tae-tin/">calculadora de TAE</a>.
        </p>

        ${adSlot("incontent")}

        <h2>Por qué la TAE puede no ser 100 % comparable entre bancos</h2>
        <p>
          Aunque la TAE es obligatoria por normativa en la oferta vinculante, algunos gastos asociados (por ejemplo,
          un seguro de amortización que el banco exige para conceder el préstamo) no siempre se incluyen de la
          misma manera en el cálculo. Al comparar dos ofertas, revisa no solo la TAE final, sino también qué gastos
          están incluidos en ella.
        </p>

        <div class="callout callout-info">
          <p><strong>En resumen:</strong> el TIN te dice el tipo de interés "de etiqueta"; la TAE te dice lo que realmente vas a pagar. Compara siempre la TAE entre ofertas, no solo el TIN.</p>
        </div>
      </article>
    </div>
  `,
});
