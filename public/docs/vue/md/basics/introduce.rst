Start
==========================

Vue.js ist ein modernes JavaScript-Framework, das es einfach macht, benutzerfreundliche und interaktive Webanwendungen zu erstellen. Vite ist ein Tool zum Erstellen von Projekten, das eine sehr schnelle Entwicklungsumgebung bietet. Zusammen ermöglichen sie es, moderne Webanwendungen effizient zu entwickeln.

Voraussetzungen 🦖
---------------------

Bevor wir anfangen, stellen Sie sicher, dass die folgenden Programme installiert sind:

- **Node.js**: Vue und Vite benötigen Node.js. Laden Sie es von https://nodejs.org/ herunter und installieren Sie es.

- **npm** (Node Package Manager): npm ist im Lieferumfang von Node.js enthalten und ermöglicht es uns, Vite und Vue zu installieren.

Projekt mit Vite starten 🛫
-----------------------------

Folgen Sie diesen Schritten, um ein neues Vue-Projekt mit Vite zu erstellen.

#. Öffnen Sie ein Terminal (oder die Kommandozeile).
#. Führen Sie folgenden Befehl aus, um ein neues Projekt zu erstellen:

.. code-block:: sh

    npm create vite@latest

#. Sie werden nach dem Projektnamen gefragt. Geben Sie einen Namen ein, zum Beispiel "mein-vue-projekt".
#. Danach wählen Sie das Framework. Wählen Sie ``Vue`` und die gewünschte Variante, z.B. ``Vue (JavaScript)``.
#. Wechseln Sie in das Projektverzeichnis:

.. code-block:: sh

    cd mein-vue-projekt

#. Installieren Sie die Abhängigkeiten:

.. code-block:: sh

    npm install

#. Starten Sie die Entwicklungsumgebung:

.. code-block:: sh

    npm run dev

#. Öffnen Sie Ihren Browser und geben Sie die angezeigte URL ein (meistens ``http://localhost:5173``). Jetzt sehen Sie die Startseite Ihrer Vue-Anwendung.

Projektstruktur verstehen 🫥
-------------------------------

Nach der Installation hat das Projekt folgende Struktur:

- **index.html**: Die Hauptdatei der Anwendung.
- **src/**: Der Ordner, in dem der Code Ihrer Anwendung liegt.
- **src/main.js**: Der Einstiegspunkt für Ihre Anwendung.
- **src/components/**: Der Ordner, in dem die Vue-Komponenten gespeichert werden.

Erstellung einer "Hallo Welt"-Komponente 🌍
-----------------------------------------------

Um eine einfache "Hallo Welt"-Komponente zu erstellen, folgen Sie diesen Schritten:

#. Erstellen Sie eine neue Datei namens ``HelloWorld.vue`` im ``src/components/`` Ordner. So sollte die Struktur aussehen:

.. code-block:: text

    src/
    └── components/
        └── HelloWorld.vue

#. Öffnen Sie die Datei ``HelloWorld.vue`` und fügen Sie folgenden Code ein:

.. code-block:: vue

    <template>
        <div class="hello-world">
          <h1>Hallo Welt!</h1>
        </div>
    </template>

    <style scoped>
    .hello-world {
        text-align: center;
        margin-top: 20px;
    }
    </style>

- **<template>**: Hier definieren wir das HTML, das die Komponente rendern soll.
- **<script>**: Hier exportieren wir die Komponente, damit wir sie in anderen Dateien nutzen können.
- **``<style scoped>``**: Styles, die nur für diese Komponente gelten.

Verwenden der Komponente in der Anwendung
-----------------------------------------

Um die neue ``HelloWorld``-Komponente in der App anzuzeigen, fügen wir sie in der Hauptdatei ein.

#. Öffnen Sie die Datei ``src/App.vue``. Sie sieht ungefähr so aus:

   .. code-block:: vue

    <script setup lang="ts">
    </script>

    <template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    </template>

    <style scoped>
    .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    }
    .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>


#. Bearbeiten Sie die Datei, um die ``HelloWorld``-Komponente einzubinden:

.. code-block:: vue

    <script setup lang="ts">
    import HelloWorld from './components/HelloWorld.vue'
    </script>

    <template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <HelloWorld  />
    </template>

    <style scoped>
    .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    }
    .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
    }
    </style>


- **``import HelloWorld from './components/HelloWorld.vue';``**: Importieren Sie die Komponente.
- **``components: { HelloWorld }``**: Registrieren Sie die Komponente, damit sie im Template verwendet werden kann.

Ergebnis überprüfen
--------------------

Speichern Sie alle Dateien und gehen Sie zu Ihrem Browser (normalerweise unter ``http://localhost:5173``). Sie sollten nun den Text "Hallo Welt!" zusammen mit dem ursprünglichen Text "Willkommen zu Vue + Vite!" sehen.

Zusammenfassung
---------------

- **Vite** ist ein Build-Tool, das Ihnen hilft, schnell mit der Entwicklung von Vue-Anwendungen zu starten.
- **Vue** ist ein leistungsfähiges Framework für die Erstellung von Benutzeroberflächen.
- Sie können neue Komponenten in **``src/components/``** erstellen und sie dann in **``src/App.vue``** verwenden.

Jetzt haben Sie die Grundlagen verstanden, um eine Vue-Anwendung mit Vite zu starten und eine erste Komponente zu erstellen. Viel Spaß beim Entwickeln!