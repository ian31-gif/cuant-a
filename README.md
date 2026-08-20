# Cuantía — calculadoras financieras y plantillas para autónomos

Sitio estático (HTML/CSS/JS puro, sin frameworks ni servidor) con 9 calculadoras financieras,
un generador de factura/presupuesto/contrato en PDF, buscador interno, 4 artículos de blog y las
páginas legales/institucionales necesarias para solicitar la revisión de Google AdSense.

## Requisitos

- Node.js 18+ (solo para el script de build; el sitio final no necesita Node ni servidor).
- Si tu máquina no tiene Node.js instalado (por ejemplo `node: command not found`), no hace falta
  instalarlo con privilegios de administrador: descarga el binario portable oficial y apúntale
  con el PATH solo para este proyecto:
  ```bash
  curl -sL -o /tmp/node.tar.gz "https://nodejs.org/dist/v20.18.1/node-v20.18.1-darwin-arm64.tar.gz"
  mkdir -p ~/.local/cuantia-tools && tar -xzf /tmp/node.tar.gz -C ~/.local/cuantia-tools
  mv ~/.local/cuantia-tools/node-v20.18.1-darwin-arm64 ~/.local/cuantia-tools/node
  export PATH="$HOME/.local/cuantia-tools/node/bin:$PATH"   # añádelo a tu ~/.zshrc para no repetirlo
  ```
  (cambia `darwin-arm64` por tu plataforma si no usas un Mac Apple Silicon). El proyecto no usa
  ninguna dependencia de npm, así que no hace falta `npm install`.

## Comandos

```bash
node build.js        # genera el sitio estático completo en /dist
```

Cada vez que edites algo en `data/`, `src/partials/` o `src/assets/`, vuelve a ejecutar
`node build.js`. La carpeta `dist/` se borra y se regenera entera en cada build: no edites nada
directamente ahí.

### Previsualizar en local

```bash
cd dist
python3 -m http.server 8000
# abre http://localhost:8000
```

(o cualquier otro servidor estático: `npx serve dist`, la extensión "Live Server" de VS Code, etc.)

## Estructura del proyecto

```
data/
  site-config.js               # nombre de marca, dominio, menú, enlaces del footer
  cuotas-autonomo-2026.js       # tabla RETA por tramos (dato normativo, separado de la UI)
  irpf-tramos-2026.js           # escala general de IRPF + mínimo personal/familiar
  cotizaciones-ss-2026.js       # tipos de cotización SS a cargo del trabajador
  pages/                        # una página = un archivo JS que devuelve { path, title, bodyHtml, ... }
    fiscal/                     # cuota de autónomo, IRPF, nómina + hub /calculadoras-fiscales/
    plantillas/                 # factura, presupuesto, contrato de freelance + hub /plantillas/
    calculadoras-index.js       # índice /calculadoras/ con las 9 calculadoras
    buscar.js                   # página de búsqueda interna
src/
  partials/
    head.js             # <head>, metadatos, Open Graph, schema.org
    layout.js            # header, footer, breadcrumbs, banner de cookies, slots de anuncio,
                          # schema Organization+WebSite+SearchAction sitewide
  assets/
    css/styles.css       # sistema de diseño (todo el CSS del sitio)
    js/main.js            # menú móvil, banner de cookies, utilidades de formato
    js/buscar.js           # buscador interno (filtra /assets/search-index.json en el cliente)
    js/calculators/       # lógica de cada calculadora + fórmulas financieras compartidas
    img/                  # favicon y og-default.png (imagen de compartir en redes)
build.js                 # script de build (sin dependencias externas); también genera
                          # /assets/search-index.json para el buscador
dist/                     # ⚠️ generado — no editar a mano, se borra en cada build
```

## Cómo añadir una página nueva

1. Crea un archivo en `data/pages/` (o en una subcarpeta) que exporte una función:
   ```js
   module.exports = ({ adSlot, SITE }) => ({
     path: "/mi-nueva-pagina/",
     title: "Título para <title> y Open Graph",
     description: "Meta description",
     crumbs: [{ label: "Inicio", href: "/" }, { label: "Mi página", href: "/mi-nueva-pagina/" }],
     bodyHtml: `<div class="container"><h1>...</h1></div>`,
   });
   ```
2. Ejecuta `node build.js`. La página aparece automáticamente en `dist/` y en `sitemap.xml`.

## Antes de publicar — checklist obligatorio

1. **Dominio y marca**
   - El nombre "Cuantía" y el dominio `cuantia.example` en `data/site-config.js` son un
     **placeholder**. Verifica la disponibilidad real del dominio en un registrador (Namecheap,
     OVH, Nominalia…) antes de registrarlo — esta sesión no tiene acceso para comprobar el WHOIS.
   - Cambia `baseUrl` y `email` en `data/site-config.js` por los reales.

2. **Páginas legales** (`data/pages/institucional/privacidad.js`, `cookies.js`, `aviso-legal.js`)
   - Contienen placeholders `[NOMBRE O RAZÓN SOCIAL]`, `[NIF]`, `[DIRECCIÓN]`, `[FECHA]`.
   - Rellénalos con tus datos reales y, si puedes, haz que un profesional legal revise el texto:
     estas plantillas son un punto de partida orientativo, no asesoramiento jurídico.

3. **Google AdSense**
   - El sitio incluye "espacios reservados" (`ad-slot`) en las posiciones definidas en el mapa de
     calor del plan, pero **sin código de AdSense activo todavía** (a propósito: es buena práctica
     solicitar la revisión con el sitio ya terminado y sin anuncios rotos).
   - Cuando tengas la cuenta de AdSense aprobada:
     1. Añade tu script de verificación en `src/partials/head.js` (línea con el comentario `AdSense:`).
     2. Sustituye cada `<div class="ad-slot ...">` de `src/partials/layout.js` (función `adSlot`)
        por tu bloque `<ins class="adsbygoogle">` real, o inyecta el anuncio dentro de ese div por JS.
     3. Activa la carga condicionada al consentimiento de cookies: escucha el evento
        `document.addEventListener("cuantia:consent", e => { if (e.detail === "accepted") {...} })`
        en `src/assets/js/main.js` (ya está preparado, solo falta el código real del anuncio).
   - No actives los anuncios hasta tener el consentimiento (RGPD) resuelto con un CMP si vas a
     recibir tráfico de la Unión Europea.

4. **Conversor de divisas**
   - Usa la API pública y gratuita de Frankfurter (`api.frankfurter.dev`), sin API key. Pruébalo
     en un navegador real con acceso a internet normal (el entorno donde se generó este sitio
     bloquea peticiones salientes a dominios externos, así que no se pudo probar el fetch en vivo
     aquí — el código está verificado por lógica y sigue el formato documentado de la API).

5. **Contenido mínimo antes de pedir la revisión de AdSense**
   - El sitio ya tiene más de 30 páginas de contenido propio (9 calculadoras + generador de
     factura/presupuesto/contrato, 5 hubs de categoría, 4 artículos de blog, home, buscador y
     5 páginas institucionales/legales), por encima del mínimo orientativo del plan.
   - Todas las calculadoras tienen su propio bloque de FAQ visible + schema `FAQPage`.
   - Revisa que no queden textos entre corchetes `[...]` sin rellenar antes de publicar (el
     contrato de freelance los usa intencionadamente como campos a rellenar por el usuario final,
     así que esos sí se quedan).

6. **Despliegue**
   - `dist/` es un sitio 100% estático: puedes subirlo tal cual a Netlify, Vercel, GitHub Pages,
     Cloudflare Pages o cualquier hosting con FTP/SFTP. No necesita Node.js en producción.
   - Después de desplegar, envía `sitemap.xml` en Google Search Console y en Bing Webmaster Tools.

## Alcance de este MVP (Fase 1 del plan)

Este sitio corresponde a la **Fase 1** del roadmap del plan de nicho: 6 calculadoras núcleo con
contenido 100% único y revisado, sin páginas programáticas todavía. Antes de escalar con páginas
programáticas (Fase 2–3 del plan), recuerda seguir el framework seguro descrito allí: solo generar
combinaciones con demanda de búsqueda real, con datos/resultados únicos por página y una capa
editorial de 100–150 palabras por página — no plantillas de texto reescrito, por la política de
Google contra el "scaled content abuse" (marzo 2026).

## Calculadoras incluidas

| Calculadora | Fórmula |
|---|---|
| Cuota de préstamo personal | Amortización francesa (cuota constante) |
| TAE a partir del TIN | Búsqueda por bisección de la tasa que iguala VA de cuotas al importe neto |
| Cuota hipotecaria | Amortización francesa + estimación de gastos de compraventa |
| Interés compuesto | Capitalización mensual con aportaciones periódicas |
| Ahorro objetivo | Cálculo inverso: aportación necesaria para un valor futuro objetivo |
| Conversor de divisas | API pública de Frankfurter (tipos de referencia del BCE) |
| Cuota de autónomo (RETA) | Búsqueda del tramo por rendimientos netos en `data/cuotas-autonomo-2026.js` |
| IRPF y retenciones | Escala progresiva por tramos sobre la base tras mínimo personal/familiar |
| Nómina (bruto a neto) | Cotizaciones SS + IRPF progresivo sobre el rendimiento neto del trabajo |

Todas las fórmulas de préstamos/hipotecas/ahorro están en `src/assets/js/calculators/finance.js`
y fueron verificadas con casos de prueba en Node antes de integrarlas en la interfaz. Los datos
normativos (tramos RETA, escala IRPF, tipos de cotización SS) están separados en `data/*.js`,
contrastados en agosto de 2026 con varias fuentes especializadas — revísalos cada año, ya que
tanto los tramos como los tipos pueden cambiar por normativa.

## Generador de factura, presupuesto y contrato (`/plantillas/`)

Sin backend ni librerías de PDF: el formulario y la vista previa son el mismo documento HTML
(`src/assets/js/calculators/plantilla-documento.js` calcula los totales en vivo), y el botón
"Imprimir / Guardar como PDF" llama a `window.print()` con una hoja de estilos `@media print`
que oculta cabecera, pie, anuncios y controles de edición. El usuario elige "Guardar como PDF"
como destino en el diálogo de impresión de su propio navegador.

## Buscador interno (`/buscar/`)

`build.js` genera `dist/assets/search-index.json` con título, descripción y URL de cada página
indexable. `src/assets/js/buscar.js` lo descarga en el cliente y filtra por texto sin ninguna
librería externa (ni Algolia ni Fuse.js). El schema `WebSite` incluye un `SearchAction` que
apunta a `/buscar/?q=`, así que el buscador funciona también como destino del `Sitelinks
Search Box` de Google si el sitio gana suficiente autoridad.
