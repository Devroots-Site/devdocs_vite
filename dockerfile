# 1. Verwende ein Node.js-Image als Basis
FROM node:18-alpine AS builder

# 2. Setze das Arbeitsverzeichnis im Container
WORKDIR /usr/src/app

# 3. Kopiere package.json und package-lock.json in das Arbeitsverzeichnis
COPY package*.json ./

# 4. Installiere die Abhängigkeiten
RUN npm install

# 5. Kopiere den Rest des Projekts in das Arbeitsverzeichnis
COPY . .

# 6. Baue das React-Projekt
RUN npm run build

# 7. Verwende ein leichtes Server-Image, um die gebauten Dateien zu servieren
FROM node:18-alpine

# 8. Installiere http-server, um die build-Dateien zu servieren
RUN npm install -g http-server

# 9. Setze das Arbeitsverzeichnis im neuen Image auf /app
WORKDIR /app

# 10. Kopiere das gebaute Projekt aus dem vorherigen Build-Schritt
COPY --from=builder /usr/src/app/dist /app

# 11. Exponiere den Port 8080
EXPOSE 8080

# 12. Starte den HTTP-Server
CMD ["http-server", "-p", "8080"]
