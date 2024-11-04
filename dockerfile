# Verwende node:18-alpine als Basis-Image
FROM node:18-alpine AS builder

# Installiere Git, da es standardmäßig in alpine Images nicht enthalten ist
RUN apk add --no-cache git

# Klone das Repository
RUN git clone https://github.com/Devroots-Site/devdocs_vite

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere den Inhalt des geklonten Repos ins Arbeitsverzeichnis
COPY . .

# Installiere Abhängigkeiten
RUN npm install

# Baue die Anwendung
RUN npm run build

# Installiere http-server global
RUN npm install -g http-server

# Wechsle in das Build-Verzeichnis
WORKDIR /app/dist

# Exponiere den Port
EXPOSE 3110

# Starte den Server
CMD ["http-server", "-p", "3110"]
