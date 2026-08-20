/* =========================================================
   Tabla de cotización RETA (autónomos) 2026.
   Datos normativos separados de la UI: si el Gobierno actualiza
   los tramos o el tipo de cotización, solo hay que editar este
   archivo (no hace falta tocar ningún componente).

   Fuente: tramos de rendimientos netos mensuales y bases mínimas
   del sistema de cotización por ingresos reales (RDL 13/2022),
   con los tramos de 2026 congelados respecto a 2025 y el tipo de
   cotización general incrementado al 31,5 % por el Mecanismo de
   Equidad Intergeneracional (MEI). Contrastado entre varias
   fuentes especializadas (Cuéntica, Infoautónomos) en agosto de 2026.
   Verifica siempre el tramo vigente en sede.seg-social.gob.es antes
   de tomar una decisión, ya que estas cifras pueden actualizarse.
   ========================================================= */
module.exports = {
  actualizado: "2026-08-01",
  tipoGeneral: 0.315,
  fuenteLabel: "Tramos RETA 2026 (Seguridad Social)",
  tramos: [
    { tabla: "reducida", desde: 0, hasta: 670, baseMinima: 653.59, cuotaMinima: 205.88 },
    { tabla: "reducida", desde: 670, hasta: 900, baseMinima: 718.95, cuotaMinima: 226.47 },
    { tabla: "reducida", desde: 900, hasta: 1166.70, baseMinima: 849.68, cuotaMinima: 267.65 },
    { tabla: "general", desde: 1166.70, hasta: 1300, baseMinima: 950.98, cuotaMinima: 299.56 },
    { tabla: "general", desde: 1300, hasta: 1500, baseMinima: 960.78, cuotaMinima: 302.65 },
    { tabla: "general", desde: 1500, hasta: 1700, baseMinima: 960.78, cuotaMinima: 302.65 },
    { tabla: "general", desde: 1700, hasta: 1850, baseMinima: 1143.79, cuotaMinima: 360.29 },
    { tabla: "general", desde: 1850, hasta: 2030, baseMinima: 1209.15, cuotaMinima: 380.88 },
    { tabla: "general", desde: 2030, hasta: 2330, baseMinima: 1274.51, cuotaMinima: 401.47 },
    { tabla: "general", desde: 2330, hasta: 2760, baseMinima: 1356.21, cuotaMinima: 427.21 },
    { tabla: "general", desde: 2760, hasta: 3190, baseMinima: 1437.91, cuotaMinima: 452.94 },
    { tabla: "general", desde: 3190, hasta: 3620, baseMinima: 1519.61, cuotaMinima: 478.68 },
    { tabla: "general", desde: 3620, hasta: 4050, baseMinima: 1601.31, cuotaMinima: 504.41 },
    { tabla: "general", desde: 4050, hasta: 6000, baseMinima: 1732.03, cuotaMinima: 545.59 },
    { tabla: "general", desde: 6000, hasta: null, baseMinima: 1928.10, cuotaMinima: 607.35 },
  ],
};
