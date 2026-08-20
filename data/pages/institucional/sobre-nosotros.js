module.exports = ({ SITE }) => ({
  path: "/sobre-nosotros/",
  title: "Sobre nosotros | Cuantía",
  description: "Quiénes somos, cómo construimos nuestras calculadoras financieras y qué metodología seguimos para que los resultados sean fiables.",
  activeNav: "/sobre-nosotros/",
  priority: "0.4",
  changefreq: "yearly",
  crumbs: [
    { label: "Inicio", href: "/" },
    { label: "Sobre nosotros", href: "/sobre-nosotros/" },
  ],
  bodyHtml: `
    <div class="container">
      <article class="article-body" style="max-width:78ch;">
        <h1>Sobre ${SITE.name}</h1>
        <p>
          ${SITE.name} nace con un objetivo sencillo: que cualquier persona pueda calcular en segundos, sin
          registrarse y sin letra pequeña, la cuota real de un préstamo o hipoteca, cuánto puede crecer su ahorro
          o a cuánto equivale su dinero en otra divisa.
        </p>

        <h2>Nuestra metodología</h2>
        <p>
          Todas nuestras calculadoras usan fórmulas financieras estándar y públicamente documentadas: el sistema de
          amortización francés para préstamos e hipotecas, el cálculo estándar de la TAE a partir del TIN y las
          comisiones, y la fórmula clásica del interés compuesto para el ahorro. No usamos "cajas negras": en cada
          calculadora explicamos qué fórmula aplicamos y qué simplificaciones hacemos.
        </p>
        <p>
          El conversor de divisas utiliza los tipos de cambio de referencia que publica el Banco Central Europeo a
          través de la API pública de Frankfurter, actualizados en cada día hábil.
        </p>

        <h2>Lo que no somos</h2>
        <p>
          No somos un banco, ni una entidad financiera, ni ofrecemos asesoramiento personalizado. Nuestras
          calculadoras son herramientas informativas de apoyo a tu propia decisión: siempre debes contrastar los
          resultados con la oferta vinculante de tu entidad antes de firmar cualquier producto financiero.
        </p>

        <h2>Contacto</h2>
        <p>
          Si detectas un error en alguna calculadora o quieres proponernos una nueva, escríbenos a
          <a href="mailto:${SITE.email}">${SITE.email}</a> o visita nuestra <a href="/contacto/">página de contacto</a>.
        </p>
      </article>
    </div>
  `,
});
