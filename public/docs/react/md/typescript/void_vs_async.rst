Void vs. Async - Wann welche Funktion sinnvoll ist
===========================================================

Wenn man mit TypeScript arbeitet, stellt sich oft die Frage, wann man ``void`` verwenden sollte und wann eine Funktion ``async`` sein sollte. Beide Konzepte haben ihre spezifischen Anwendungsfälle, und um sie richtig einzusetzen, ist es wichtig, deren Unterschiede und Eigenheiten zu verstehen. In diesem Artikel erklären wir, wann du ``void`` verwenden solltest, wann du eine Funktion mit ``async`` deklarierst und warum nicht jede Funktion ``async`` sein kann oder sollte.

Void - Was ist das und wann nutze ich es? 🤔
--------------------------------------------

In TypeScript beschreibt der Typ ``void``, dass eine Funktion keinen Rückgabewert liefert. Das bedeutet, dass der Fokus der Funktion auf der Ausführung von Operationen liegt, ohne dass ein explizites Ergebnis zurückgegeben wird.

Typischerweise wird ``void`` verwendet, wenn der Hauptzweck der Funktion eine Aufgabe ist, wie das Verändern von Zustand, das Loggen von Nachrichten oder das Manipulieren von DOM-Elementen. Hier ist ein Beispiel:

.. code-block:: typescript

  function logMessage(message: string): void {
    console.log(message);
  }

Hier wird ``void`` verwendet, weil ``logMessage`` keinen Rückgabewert hat – sie druckt lediglich eine Nachricht auf die Konsole. In solchen Fällen ist ``void`` perfekt, da es klar signalisiert, dass diese Funktion keine weiteren Werte zurückgibt.

Async - Wann und warum? ⌛
---------------------------

``async`` ist ein wichtiges Schlüsselwort in TypeScript (und JavaScript), das dir hilft, asynchrone Operationen sauber und effizient zu handhaben. Eine Funktion, die als ``async`` deklariert ist, gibt immer ein ``Promise`` zurück. Das bedeutet, dass du eine Funktion für Operationen nutzen kannst, die Zeit benötigen, wie das Abrufen von Daten aus einer Datenbank, das Laden von Dateien oder das Aufrufen von APIs.

Hier ist ein einfaches Beispiel für eine ``async``-Funktion:

.. code-block:: typescript

  async function fetchData(url: string): Promise<void> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Fehler beim Abrufen der Daten", error);
    }
  }

In diesem Beispiel wird ``async`` verwendet, weil die ``fetch``-Operation Zeit benötigt. Durch die Verwendung von ``async`` und ``await`` wird der Code lesbarer, da er wie synchroner Code aussieht, während im Hintergrund dennoch asynchron gearbeitet wird.

Async-Funktionen mit void aufrufen 🫵
----------------------------------------

In TypeScript kannst du eine ``async``-Funktion aufrufen und explizit angeben, dass der Rückgabewert ignoriert werden soll, indem du ``void`` verwendest. Dadurch wird das ``Promise``, das die ``async``-Funktion zurückgibt, nicht weiterverfolgt. Dies kann nützlich sein, wenn du sicher bist, dass du das Ergebnis nicht benötigst oder wenn der Aufruf der Funktion nicht auf ein Ergebnis angewiesen ist.

Hier ein Beispiel:

.. code-block:: typescript

  async function performAsyncTask(): Promise<void> {
    // Eine asynchrone Aufgabe ausführen
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Asynchrone Aufgabe abgeschlossen');
  }

  function callAsyncTask(): void {
    // Aufruf der async-Funktion, ohne das Promise weiter zu verfolgen
    void performAsyncTask();
  }

Durch die Verwendung von ``void`` wird das ``Promise`` von ``performAsyncTask`` nicht weiter behandelt. Das kann sinnvoll sein, wenn du sicher bist, dass Fehler oder Ergebnisse der asynchronen Funktion keine weiteren Auswirkungen haben.

Wann benutze ich async und wann nicht? 🧪
--------------------------------------------

Eine Funktion sollte als ``async`` deklariert werden, wenn sie eine oder mehrere asynchrone Operationen ausführt. Das sind Operationen, die nicht sofort abgeschlossen werden können, wie Netzwerkanfragen, Datenbankzugriffe oder zeitgesteuerte Verzögerungen.

Der Grund, warum nicht jede Funktion ``async`` sein sollte, ist, dass ``async``-Funktionen immer ein ``Promise`` zurückgeben, was nicht immer nötig oder erwünscht ist. Bei einfachen Aufgaben, die synchron und sofort erledigt werden können (wie das Verändern einer Variable oder das Loggen von Nachrichten), wäre es unnötig und sogar unübersichtlich, diese Funktionen als ``async`` zu deklarieren.

Hier sind einige Richtlinien, wann du ``async`` verwenden solltest und wann nicht:

- **Verwende ``async``, wenn die Funktion eine asynchrone Operation enthält.** Das hilft dabei, den Code lesbar und wartbar zu halten.
- **Verwende ``void``, wenn die Funktion synchron ist und keinen Rückgabewert liefert.** Damit wird klar signalisiert, dass der Fokus auf der Ausführung von Aktionen liegt und kein Ergebnis zurückerwartet wird.
- **Vermeide ``async``, wenn die Funktion keine asynchronen Operationen enthält.** Ein unnötiges ``async`` kann den Code komplexer machen und Missverständnisse verursachen.

Praktische Beispiele 🎲
------------------------

Hier sind einige Beispiele, die die Unterschiede veranschaulichen:

- Eine **synchron ausgeführte Funktion**, die eine Nachricht loggt:

  .. code-block:: typescript

    function updateUserName(name: string): void {
      console.log(`Username updated to: ${name}`);
    }

  Diese Funktion benötigt kein ``async``, weil sie sofort und ohne asynchrone Operationen ausgeführt wird.

- Eine **asynchrone Funktion**, die Daten von einem Server lädt:

  .. code-block:: typescript

    async function getUserData(userId: string): Promise<void> {
      const user = await getUserFromDatabase(userId);
      console.log(user);
    }

- Eine **asynchrone Funktion**, die mit ``void`` aufgerufen wird:

  .. code-block:: typescript

    function triggerAsyncProcess(): void {
      void getUserData('123');
    }

  In diesem Fall wird das Ergebnis von ``getUserData`` ignoriert, und die Funktion wird ausgeführt, ohne dass auf das ``Promise`` gewartet wird.