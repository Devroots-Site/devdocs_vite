# Verwende node:18-alpine als Basis-Image
FROM node:18-alpine AS builder

# Installiere Git, da es in Alpine-Images nicht enthalten ist
RUN apk add --no-cache git

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Klone das Repository direkt in das Arbeitsverzeichnis
RUN git clone https://github.com/Devroots-Site/devdocs_vite .

# Installiere Abhängigkeiten im geklonten Repository
RUN npm install

# Baue die Anwendung
RUN npm run build

# Installiere http-server global für den statischen Build
RUN npm install -g http-server

# Wechsle in das Verzeichnis mit dem Build
WORKDIR /app/dist



# Starte den Server
CMD ["sh", "-c", "npm start -- -p ${PORT:-3000}"]
