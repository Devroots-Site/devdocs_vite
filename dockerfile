# Verwende node:18-alpine als Basis-Image für den Build
FROM node:18-alpine AS builder

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere den gesamten Code in das Arbeitsverzeichnis
COPY . .

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
CMD ["sh", "-c", "http-server -p ${PORT}"]
