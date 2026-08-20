#!/bin/bash
# Doble clic en este archivo para construir y abrir la web de Cuantía.
cd "$(dirname "$0")"

echo "Construyendo la web..."
node build.js

echo "Iniciando servidor local en http://localhost:8000 ..."
cd dist

# Abre el navegador un segundo después de arrancar el servidor.
( sleep 1 && open "http://localhost:8000" ) &

echo "Deja esta ventana abierta mientras navegas la web."
echo "Para cerrar el servidor, cierra esta ventana o pulsa Ctrl+C."
python3 -m http.server 8000
