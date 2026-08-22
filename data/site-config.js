module.exports = {
  name: "Cuantía",
  tagline: "Calculadoras financieras y plantillas claras para autónomos y decisiones de dinero del día a día",
  baseUrl: "https://www.cuantía.com",
  email: "ian.roureramis@gmail.com",
  year: new Date().getFullYear(),

  nav: [
    { label: "Calculadoras", href: "/calculadoras/" },
    { label: "Plantillas", href: "/plantillas/" },
    { label: "Blog", href: "/blog/" },
    { label: "Buscar", href: "/buscar/" },
  ],

  footerColumns: [
    {
      title: "Calculadoras",
      links: [
        { label: "Cuota de préstamo personal", href: "/calculadoras-prestamos/calculadora-cuota-prestamo-personal/" },
        { label: "TAE de un préstamo", href: "/calculadoras-prestamos/calculadora-tae-tin/" },
        { label: "Cuota hipotecaria", href: "/calculadoras-hipotecas/calculadora-cuota-hipotecaria/" },
        { label: "Interés compuesto", href: "/calculadoras-ahorro/calculadora-interes-compuesto/" },
        { label: "Ahorro objetivo", href: "/calculadoras-ahorro/calculadora-ahorro-objetivo/" },
        { label: "Conversor de divisas", href: "/conversor-divisas/" },
      ],
    },
    {
      title: "Autónomos y fiscal",
      links: [
        { label: "Cuota de autónomo", href: "/calculadoras-fiscales/calculadora-cuota-autonomo/" },
        { label: "IRPF y retenciones", href: "/calculadoras-fiscales/calculadora-irpf/" },
        { label: "Nómina", href: "/calculadoras-fiscales/calculadora-nomina/" },
        { label: "Generador de factura", href: "/plantillas/factura/" },
        { label: "Generador de presupuesto", href: "/plantillas/presupuesto/" },
        { label: "Contrato de freelance", href: "/plantillas/contrato-freelance/" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Blog", href: "/blog/" },
        { label: "Buscar", href: "/buscar/" },
        { label: "Sobre nosotros", href: "/sobre-nosotros/" },
        { label: "Contacto", href: "/contacto/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Política de privacidad", href: "/privacidad/" },
        { label: "Política de cookies", href: "/cookies/" },
        { label: "Aviso legal", href: "/aviso-legal/" },
      ],
    },
  ],
};
