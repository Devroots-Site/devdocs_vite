# 1. Verwende ein Node-Image für den Build-Prozess
FROM node:18-alpine AS builder

# 2. Setze das Arbeitsverzeichnis im Container
WORKDIR /usr/src/app

# 3. Kopiere package.json und package-lock.json in das Arbeitsverzeichnis
COPY package*.json ./

# 4. Installiere die Abhängigkeiten
RUN npm install

# 5. Kopiere den Rest des Projekts in das Arbeitsverzeichnis
COPY . .

# Stelle sicher, dass das dist-Verzeichnis existiert und die richtigen Berechtigungen hat
RUN mkdir -p /usr/src/app/dist/docs && chown -R node:node /usr/src/app/dist

# 6. Baue das React-Projekt für die Produktion
RUN npm run build

# 7. Verwende ein leichtes Node-Image für den HTTP-Server
FROM node:18-alpine

# 8. Installiere den http-server global, um das gebaute Projekt zu servieren
RUN npm install -g http-server

# 9. Setze das Arbeitsverzeichnis im neuen Image auf /app
WORKDIR /app

# 10. Kopiere das gebaute Projekt aus dem Build-Container
COPY --from=builder /usr/src/app/dist /app

# 11. Exponiere den Port 80, damit der Server darauf lauscht
EXPOSE 80

# 12. Starte den HTTP-Server und weise ihm den Port 80 zu
CMD ["http-server", "-p", "80"]
