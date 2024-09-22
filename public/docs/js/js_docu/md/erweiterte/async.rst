Async und Await
=======================

Async und Await sind zwei Schlüsselwörter in JavaScript, die es ermöglichen, asynchrone Funktionen zu schreiben, die wie synchroner Code aussehen. Sie sind eine moderne Alternative zu Callbacks und Promises und machen den Code lesbarer und einfacher zu schreiben.

Async-Funktionen
-------------------

Eine Async-Funktion ist eine Funktion, die asynchronen Code enthält und das Schlüsselwort `async` verwendet. Async-Funktionen geben immer ein Promise zurück und können mit dem Schlüsselwort `await` auf ein Promise warten. Die Syntax für eine Async-Funktion lautet:

.. code-block:: javascript

    async function functionName() {
        // Code
    }

Beispiel:

.. code-block:: javascript

    async function fetchData() {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        return data;
    }

In diesem Beispiel wird die Funktion fetchData als Async-Funktion definiert, die Daten von einer API abruft. Die `await`-Anweisung wird verwendet, um auf die Antwort des fetch-Aufrufs zu warten und die Daten in JSON-Format zu konvertieren.

Await
-------------------

Das Schlüsselwort `await` kann nur innerhalb einer Async-Funktion verwendet werden und wartet auf die Auflösung eines Promise. Es pausiert die Ausführung der Funktion, bis das Promise erfüllt ist, und gibt den Wert des Promise zurück. Die Syntax für `await` lautet:

.. code-block:: javascript

    let result = await promise;

Beispiel:

.. code-block:: javascript

    async function fetchData() {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        return data;
    }

In diesem Beispiel wird die `await`-Anweisung verwendet, um auf die Antwort des fetch-Aufrufs zu warten und die Daten in JSON-Format zu konvertieren. Die Funktion gibt die Daten zurück, sobald sie verfügbar sind.