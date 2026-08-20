import os
import http.server
import socketserver

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist"))

PORT = 4173

class Handler(http.server.SimpleHTTPRequestHandler):
    pass

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
