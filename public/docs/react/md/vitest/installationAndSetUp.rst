Installation und Einrichtung von Vitest 🛠️
===========================================

Vitest ist ein schneller und leichter Test-Runner, der speziell für Vite-basierte Projekte entwickelt wurde. Er bietet eine reibungslose Integration mit Vite und ermöglicht es, Tests in einer modernen Entwicklungsumgebung auszuführen.

Schritte zur Installation und Einrichtung von Vitest:

1. Voraussetzungen
-------------------

Bevor du Vitest verwenden kannst, solltest du sicherstellen, dass du die folgenden Software-Tools installiert hast:

- **Node.js**: Stelle sicher, dass Node.js installiert ist. Du kannst es von der offiziellen Webseite herunterladen: https://nodejs.org
- **Vite**: Da Vitest eng mit Vite integriert ist, wird empfohlen, dass dein Projekt bereits Vite verwendet.

2. Vitest installieren
-----------------------

Um Vitest in deinem Projekt zu installieren, führe den folgenden Befehl in deinem Projektverzeichnis aus:

.. code-block:: bash

   npm install vitest --save-dev

Dieser Befehl fügt Vitest als Entwicklungsabhängigkeit zu deinem Projekt hinzu. Du kannst auch `yarn` oder `pnpm` verwenden, je nachdem, welches Paketverwaltungstool du bevorzugst:

.. code-block:: bash

   yarn add vitest --dev

   pnpm add vitest --save-dev

3. Konfiguration von Vitest
----------------------------

Nach der Installation von Vitest musst du sicherstellen, dass es richtig in dein Projekt integriert ist. Du kannst dazu das `vite.config.ts` oder `vite.config.js` Konfigurationsfile anpassen.

Füge Vitest zur Vite-Konfiguration hinzu:

.. code-block:: typescript

   // vite.config.ts
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue' // Beispiel für Vue-Projekte
   import { configDefaults } from 'vitest/config'

   export default defineConfig({
     plugins: [vue()],
     test: {
       // Hier kannst du Vitest-spezifische Optionen definieren
       globals: true,  // Ermöglicht globale Funktionen wie 'describe' und 'it'
       environment: 'jsdom',  // Simuliert eine Browserumgebung
       exclude: [...configDefaults.exclude, 'e2e/*'],  // Passe an deine Bedürfnisse an
     },
   })

### Erklärung der Optionen:

- **globals**: Wenn auf `true` gesetzt, kannst du globale Testfunktionen wie `describe` und `it` verwenden, ohne sie zu importieren.
- **environment**: Bestimmt die Testumgebung. `jsdom` simuliert eine Browserumgebung, während `node` für reine Node.js-Umgebungen verwendet wird.
- **exclude**: Definiert die Dateien oder Verzeichnisse, die von den Tests ausgeschlossen werden sollen.

4. Tests ausführen
--------------------

Nachdem Vitest installiert und konfiguriert wurde, kannst du deine Tests einfach mit folgendem Befehl ausführen:

.. code-block:: bash

   npx vitest

Oder du fügst ein Skript in deine `package.json` hinzu, um es einfacher zu machen:

.. code-block:: json

   {
     "scripts": {
       "test": "vitest"
     }
   }

Nun kannst du die Tests in deinem Projekt mit dem folgenden Befehl starten:

.. code-block:: bash

   npm run test

5. Testdateien erstellen
--------------------------

Vitest erkennt automatisch Dateien mit bestimmten Namenskonventionen. Du kannst deine Tests in Dateien mit den Endungen `.test.ts`, `.spec.ts`, `.test.js`, oder `.spec.js` schreiben.

Beispiel für eine einfache Testdatei:

.. code-block:: typescript

   import { describe, it, expect } from 'vitest'

   describe('Mathe-Test', () => {
     it('sollte 2 plus 2 gleich 4 sein', () => {
       expect(2 + 2).toBe(4)
     })
   })

In diesem Beispiel wird die Funktion `describe` verwendet, um eine Testgruppe zu erstellen, und die Funktion `it`, um einen einzelnen Testfall zu definieren.

6. Vorteile von Vitest
-----------------------

- **Schnell**: Da Vitest auf Vite basiert, nutzt es die Vite-Engine für blitzschnelle Starts und schnelles Feedback.
- **Moderne Syntax**: Vitest unterstützt TypeScript und moderne JavaScript-Syntax direkt out-of-the-box.
- **Browser-Unterstützung**: Durch die Verwendung von `jsdom` kannst du Tests schreiben, die im Browser laufen, ohne dass du einen echten Browser benötigst.

7. Optional: Vitest mit CI/CD verwenden
-----------------------------------------

Vitest lässt sich leicht in CI/CD-Pipelines integrieren. Füge einfach den Testbefehl zu deinem CI/CD-Workflow hinzu, um sicherzustellen, dass alle Tests während der Bereitstellung ausgeführt werden.

Beispiel für ein GitHub Actions-Setup:

.. code-block:: yaml

   name: Node.js CI

   on:
     push:
       branches:
         - main

   jobs:
     test:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Install Dependencies
           run: npm install
         - name: Run Tests
           run: npm run test

Zusammenfassung
----------------

Vitest ist eine leistungsstarke und schnelle Test-Runner-Lösung für moderne JavaScript- und TypeScript-Projekte, die mit Vite arbeiten. Mit der einfachen Integration und der Unterstützung für moderne Features wie TypeScript, JSX und `jsdom` bietet Vitest eine großartige Umgebung für effizientes Testen. Folge den oben genannten Schritten, um Vitest in deinem Projekt zu installieren und Tests auszuführen.
