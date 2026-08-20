module.exports = ({ adSlot }) => ({
  path: "/blog/",
  title: "Blog de finanzas personales | Cuantía",
  description: "Guías claras sobre préstamos, hipotecas, ahorro e interés compuesto, escritas para tomar decisiones de dinero con más información.",
  activeNav: "/blog/",
  priority: "0.7",
  changefreq: "weekly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog/" },
  ],
  bodyHtml: `
    <div class="container">
      <h1>Blog de finanzas personales</h1>
      <p class="text-soft">Guías breves y sin tecnicismos innecesarios para entender los números detrás de tus decisiones financieras.</p>

      <div class="grid grid-3">
        ${article("Cómo se calcula la TAE de un préstamo", "La diferencia entre TIN y TAE explicada paso a paso, con ejemplo numérico.", "/blog/como-se-calcula-la-tae/")}
        ${article("Hipoteca fija vs. variable: cómo elegir", "Ventajas, riesgos y en qué escenarios conviene cada tipo de hipoteca.", "/blog/hipoteca-fija-vs-variable/")}
        ${article("Interés compuesto explicado con ejemplos", "Por qué el tiempo pesa más que el importe al ahorrar o invertir.", "/blog/que-es-el-interes-compuesto/")}
        ${article("Amortización anticipada: ¿merece la pena?", "Cuándo compensa adelantar capital de un préstamo y cuándo es mejor invertir ese dinero.", "/blog/amortizacion-anticipada-merece-la-pena/")}
      </div>

      ${adSlot("multiplex")}
    </div>
  `,
});

function article(title, desc, href) {
  return `<a class="card card-link" href="${href}">
    <h3>${title}</h3>
    <p>${desc}</p>
  </a>`;
}
