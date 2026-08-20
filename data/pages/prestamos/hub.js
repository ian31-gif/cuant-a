module.exports = ({ adSlot }) => ({
  path: "/calculadoras-prestamos/",
  title: "Calculadoras de préstamos: cuota, TAE y amortización | Cuantía",
  description: "Calculadoras gratuitas para préstamos personales: cuota mensual, cuadro de amortización y TAE real a partir del TIN y las comisiones.",
  activeNav: "/calculadoras/",
  priority: "0.8",
  changefreq: "monthly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Calculadoras de préstamos", href: "/calculadoras-prestamos/" },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Calculadoras de préstamos personales</h1>
      <p class="text-soft">
        Antes de firmar un préstamo personal conviene saber tres cosas: cuánto vas a pagar cada mes, cuánto pagarás
        en total de intereses y cuál es el coste real (TAE) una vez sumadas las comisiones. Estas dos calculadoras
        te lo muestran en segundos.
      </p>

      <ul class="tool-list">
        <li><a href="/calculadoras-prestamos/calculadora-cuota-prestamo-personal/">Calculadora de cuota de préstamo personal <span class="arrow">→</span></a></li>
        <li><a href="/calculadoras-prestamos/calculadora-tae-tin/">Calculadora de TAE a partir del TIN <span class="arrow">→</span></a></li>
      </ul>

      ${adSlot("incontent")}

      <div class="article-body">
        <h2>¿Qué debes mirar al comparar préstamos personales?</h2>
        <p>
          La cuota mensual es solo una parte de la ecuación. Dos préstamos con la misma cuota pueden tener plazos
          y costes totales muy distintos, así que conviene comparar siempre estos tres datos juntos:
        </p>
        <ul>
          <li><strong>TIN (Tipo de Interés Nominal):</strong> el porcentaje que se aplica sobre el capital pendiente.</li>
          <li><strong>TAE (Tasa Anual Equivalente):</strong> incluye comisiones y frecuencia de pago; es el mejor indicador del coste real.</li>
          <li><strong>Plazo:</strong> a más plazo, cuota más baja pero más intereses totales pagados.</li>
        </ul>
        <p>
          Puedes leer más en nuestra guía <a href="/blog/como-se-calcula-la-tae/">cómo se calcula la TAE de un préstamo</a>.
        </p>
      </div>
    </div>
  `,
});
