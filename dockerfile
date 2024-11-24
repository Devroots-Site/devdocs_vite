# Verwende node:18-alpine als Basis-Image für den Build
FROM node:18-alpine AS builder

# Installiere Git, um das Repository zu klonen
RUN apk add --no-cache git

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Klone das Repository
RUN git clone https://github.com/Devroots-Site/devdocs_vite .

# Überprüfen, ob package.json vorhanden ist
RUN ls -la /app/package.json

# Installiere Abhängigkeiten und baue die Anwendung
RUN npm install && npm run build

# Zweites, schlankes Image für den Server
FROM alpine:latest

# Installiere http-server für den statischen Build
RUN apk add --no-cache nodejs npm && npm install -g http-server

# Kopiere das Build-Verzeichnis aus dem vorherigen Schritt
COPY --from=builder /app/dist /app/dist

# Setze das Arbeitsverzeichnis auf das Build-Verzeichnis
WORKDIR /app/dist

# Starte den Server
CMD ["http-server", "-p", "3000", "-a", "0.0.0.0"]
