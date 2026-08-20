/* =========================================================
   Escala general del IRPF 2026 (referencia estatal + autonómica
   supletoria) y mínimos personal/familiar. Datos normativos
   separados de la UI: si cambian los tramos o los mínimos, edita
   solo este archivo.

   IMPORTANTE: la escala autonómica real varía según la comunidad
   de residencia (algunas, como Madrid, aplican tipos más bajos;
   otras, como Cataluña, más altos). Esta tabla usa la escala
   general de referencia (estatal duplicada / supletoria), que es
   la aproximación estándar cuando no se conoce la comunidad
   autónoma exacta. Contrastado en agosto de 2026 con varias
   fuentes especializadas (Raisin, Holded).
   ========================================================= */
module.exports = {
  actualizado: "2026-08-01",
  tramos: [
    { hasta: 12450, tipo: 0.19 },
    { hasta: 20200, tipo: 0.24 },
    { hasta: 35200, tipo: 0.30 },
    { hasta: 60000, tipo: 0.37 },
    { hasta: 300000, tipo: 0.45 },
    { hasta: null, tipo: 0.47 },
  ],
  minimoPersonal: 5550,
  minimoPorHijo: [2400, 2700, 4000, 4500],
};
