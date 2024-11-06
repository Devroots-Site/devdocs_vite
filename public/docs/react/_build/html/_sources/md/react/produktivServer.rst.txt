Produktiv Server 🔨
===================================

Da wir nur auf einen Entwicklungsserver entwicklen wollen wir später den Kunden eine Richtige Seite übergeben und nicht eine die nur auf der Entwicklungsebene läuft.

.. tip:: 
    Diese Anleitung ist nur für **Vite**. Es kann aber auch für andere vllt genutzt werden. 

1. Build 
-----------------

.. code-block:: bash

    npm run build 

Nun wird ein dist Ordner erstellt. Hier wird die fertige Seite geladen 


2. HTTP Server 
-----------------------------

Um nun den Server in der Produktiv umgebung zu starten brauchen wir einen http-server diesen können wir ganz einfach installieren mit 

.. warning:: 

    node und NPM muss bereits installiert sein

.. code-block:: 

    sudo apt update 
    npm install -g http-server

Start: 

.. code-block:: 

    http-server


Hier können wir nun noch einige eigenschaften mitgeben. 

.. list-table:: Eigenschaften HTTP-Server
   :widths: 25 25
   :header-rows: 1

   * - Option
     - Beschreibung
   * - ``-p 3000``
     - Portnummer für den Server (Standard: 3000)
   * - ``-h localhost``
     - Hostname, auf dem der Server läuft (Standard: localhost)
   * - ``--dir /path/to/dir``
     - Verzeichnis, aus dem der Server Dateien bereitstellt
   * - ``-l access.log``
     - Pfad zur Datei, in der Zugriffsprotokolle gespeichert werden
   * - ``--cors``
     - Aktiviert CORS (Cross-Origin Resource Sharing) für den Server
   * - ``--https``
     - Startet den Server mit HTTPS anstelle von HTTP
   * - ``--cert /path/to/cert``
     - Pfad zur SSL-Zertifikatsdatei für HTTPS
   * - ``--key /path/to/key``
     - Pfad zur SSL-Schlüsseldatei für HTTPS
   * - ``-v``
     - Aktiviert den Verbose-Modus für detaillierte Ausgabe
   * - ``-d``
     - Aktiviert den Debug-Modus für Fehlersuche

