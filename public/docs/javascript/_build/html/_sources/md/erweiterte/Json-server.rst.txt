Json Server
====================

Json server ist ein einfacher Server, der auf JSON-Dateien basiert. Er kann verwendet werden, um eine REST-API zu erstellen, ohne eine Datenbank zu verwenden.

Installation
-------------------

.. code-block:: bash

    npm install -g json-server

Verwendung
-------------------

Um Json Server zu starten, erstellen Sie eine JSON-Datei mit den gewünschten Daten und starten Sie den Server mit dem Befehl `json-server` gefolgt von dem Dateinamen.

Beispiel:

.. code-block:: bash

    json-server --watch db.json

In diesem Beispiel wird der Json Server gestartet und die Daten aus der Datei `db.json` werden als REST-API verfügbar gemacht.

Json Server kann verwendet werden, um Mock-Daten für Frontend-Entwicklung, Tests oder Demos bereitzustellen. Es ist eine einfache Möglichkeit, eine REST-API zu erstellen, ohne eine Datenbank oder einen Server einrichten zu müssen.

.. code-block:: bash

    json-server --watch db.json -s public

In diesem Beispiel wird der Json Server gestartet und die Daten aus der Datei `db.json` werden als REST-API verfügbar gemacht. Die Dateien im Ordner `public` werden auch als statische Dateien bereitgestellt.

Json Server ist ein nützliches Werkzeug, um eine REST-API schnell und einfach zu erstellen. Es kann verwendet werden, um Mock-Daten für Frontend-Entwicklung, Tests oder Demos bereitzustellen.

Verwendung in JavaScript
------------------------------------

Json Server kann auch in JavaScript verwendet werden, um Daten von der REST-API abzurufen. Dazu kann die `fetch`-Funktion verwendet werden, um Daten von der Json Server-URL abzurufen.

Beispiel:

.. code-block:: javascript

    // Daten abrufen
    fetch('http://localhost:3000/personen')
    .then(response => response.json())
    .then(data => console.log(data));

    // Daten erstellen
    fetch('http://localhost:3000/personen', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Peter', alter: 35 })
    });

    // Daten aktualisieren
    fetch('http://localhost:3000/personen/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'John', alter: 31 })
    });

    // Daten löschen
    fetch('http://localhost:3000/personen/2', {
    method: 'DELETE'
    });
