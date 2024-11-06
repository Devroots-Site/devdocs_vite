TypeScript: Unterschied zwischen Type und Interface
===================================================

Einleitung
----------
In TypeScript gibt es zwei mögliche Wege, um die Struktur von Daten zu definieren: `type` und `interface`. Beide haben eine ähnliche Funktion und können verwendet werden, um Objekte, Funktionen oder andere Strukturen zu beschreiben. Doch wann verwendet man welches? In dieser Dokumentation erklären wir die Unterschiede, Gemeinsamkeiten und wann es sinnvoll ist, `type` oder `interface` zu verwenden.

Grundlagen: Type vs Interface
-----------------------------
Sowohl `type` als auch `interface` werden verwendet, um benutzerdefinierte Typen in TypeScript zu definieren. Sie können verwendet werden, um die Form von Objekten, Funktionen und anderen Konstrukten zu beschreiben. Obwohl sie oft austauschbar verwendet werden können, gibt es bestimmte Unterschiede, die sie in bestimmten Szenarien voneinander abheben.

Interface
---------
Ein `interface` beschreibt die Struktur eines Objekts. Interfaces sind ideal, um Verträge oder Vereinbarungen zwischen verschiedenen Teilen Ihres Codes zu definieren. Ein Interface kann erweitert ("erweitert" oder "geerbt") werden, was bedeutet, dass Sie neue Eigenschaften hinzufügen oder bestehende Strukturen wiederverwenden können.

Beispiel:

.. code-block:: typescript

   interface User {
     id: number;
     name: string;
     email: string;
   }

   function greetUser(user: User) {
     console.log(`Hallo, ${user.name}!`);
   }

Erweiterung eines Interfaces:

.. code-block:: typescript

   interface Admin extends User {
     permissions: string[];
   }

   const adminUser: Admin = {
     id: 1,
     name: "Alice",
     email: "alice@example.com",
     permissions: ["READ", "WRITE"]
   };

Interfaces sind auch gut geeignet, wenn Sie mit Klassen arbeiten, da sie den Vorteil bieten, dass Klassen mehrere Interfaces implementieren können:

.. code-block:: typescript

   interface Logger {
     log(message: string): void;
   }

   class MyLogger implements Logger {
     log(message: string) {
       console.log(message);
     }
   }

Type
----
`type` ist ein Schlüsselwort in TypeScript, das zur Definition von benutzerdefinierten Typen verwendet wird. Mit `type` können Sie nicht nur Objekte, sondern auch komplexere Typen wie Union- und Intersection-Typen definieren. `type` ist vielseitiger als `interface` und ermöglicht die Definition von Aliasen für primitive Typen, Funktionstypen und komplexe Strukturen.

Beispiel:

.. code-block:: typescript

   type Point = {
     x: number;
     y: number;
   };

   function printPoint(point: Point) {
     console.log(`Punkt (${point.x}, ${point.y})`);
   }

Ein weiteres Beispiel zeigt die Verwendung von Union-Typen mit `type`:

.. code-block:: typescript

   type Status = "active" | "inactive" | "pending";

   function setStatus(status: Status) {
     console.log(`Status gesetzt auf: ${status}`);
   }

`type` kann auch verwendet werden, um Intersection-Typen zu definieren, wodurch Sie verschiedene Typen kombinieren können:

.. code-block:: typescript

   type Person = {
     name: string;
     age: number;
   };

   type Employee = Person & {
     company: string;
   };

   const employee: Employee = {
     name: "Bob",
     age: 30,
     company: "TechCorp"
   };

Unterschiede und Gemeinsamkeiten
--------------------------------
Obwohl sowohl `type` als auch `interface` verwendet werden können, um Objekte zu beschreiben, gibt es einige wichtige Unterschiede:

1. **Erweiterbarkeit**: Interfaces können erweitert werden, was es einfacher macht, Hierarchien oder Verträge zu definieren. Mit `interface` können Sie sowohl von anderen Interfaces erben als auch diese erweitern. `type` hingegen unterstützt keine direkte Erweiterung, kann jedoch mit Intersection-Typen kombiniert werden.

2. **Vielseitigkeit**: `type` ist vielseitiger als `interface`, da es Union- und Intersection-Typen unterstützt und als Alias für primitive Typen verwendet werden kann. `interface` ist dagegen in seiner Verwendung eingeschränkt, jedoch oft einfacher zu erweitern und zu pflegen.

3. **Namensüberschneidung**: Interfaces können mehrfach deklariert werden, und TypeScript wird die Deklarationen automatisch zu einem Interface zusammenführen. Dies wird als "Declaration Merging" bezeichnet. `type` unterstützt diese Art der Zusammenführung nicht.

Beispiel für Declaration Merging mit `interface`:

.. code-block:: typescript

   interface Animal {
     name: string;
   }

   interface Animal {
     age: number;
   }

   const myPet: Animal = {
     name: "Bello",
     age: 5
   };

Wann sollte man was verwenden?
------------------------------
- Verwenden Sie **`interface`**, wenn Sie die Struktur eines Objekts beschreiben möchten und erwarten, dass diese Struktur erweitert oder mehrfach deklariert wird. Interfaces sind besonders nützlich, wenn Sie Klassen verwenden oder wenn Sie eine wiederverwendbare Vereinbarung für eine bestimmte Datenstruktur benötigen.

- Verwenden Sie **`type`**, wenn Sie komplexe Typen definieren möchten, wie Union- oder Intersection-Typen. `type` ist auch sinnvoll, wenn Sie Alias-Namen für bereits existierende Typen erstellen oder Funktionen und Tupel definieren wollen.

Zusammenfassung
---------------
Sowohl `type` als auch `interface` sind in TypeScript wertvolle Werkzeuge zur Typdefinition. Die Wahl zwischen beiden hängt oft von Ihrem spezifischen Anwendungsfall ab. `interface` eignet sich gut, um Verträge zu definieren und zu erweitern, während `type` durch seine Vielseitigkeit besticht, wenn komplexere Typen erforderlich sind. Wenn Sie die Unterschiede und Gemeinsamkeiten verstehen, können Sie die beste Wahl für Ihre Anwendung treffen.

