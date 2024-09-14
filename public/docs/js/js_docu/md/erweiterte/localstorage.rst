LocalStorage
===================

Die **Web Storage API** stellt zwei Objekte bereit, die es ermöglichen, Daten im Browser zu speichern und abzurufen. Diese sind:

- **localStorage** - speichert Daten ohne Ablaufdatum
- **sessionStorage** - speichert Daten für eine Sitzung (Daten werden gelöscht, wenn der Browser geschlossen wird)

Die **localStorage**-Eigenschaft ermöglicht es, Daten im Browser zu speichern und abzurufen. Die gespeicherten Daten bleiben auch nach dem Schließen des Browsers erhalten.

Die **localStorage**-Eigenschaft ist schreibgeschützt.

Beispiel:

.. code-block:: javascript

    // Speichern von Daten
    localStorage.setItem("key", "value");

    // Abrufen von Daten
    var value = localStorage.getItem("key");

    // Löschen von Daten
    localStorage.removeItem("key");

    // Löschen aller Daten
    localStorage.clear();

    // Anzahl der gespeicherten Daten
    var length = localStorage.length;

Verwendung mit Json 
--------------------

Die **localStorage**-Eigenschaft kann auch verwendet werden, um Objekte zu speichern und abzurufen. Dazu muss das Objekt in einen JSON-String konvertiert werden.

Beispiel:

.. code-block:: javascript

    //Daten als Objekt speichern
    var obj = {name: "John", age: 30, city: "New York"};
    localStorage.setItem("user", JSON.stringify(obj));

    //Daten als Objekt abrufen
    var user = JSON.parse(localStorage.getItem("user"));


.. note::
    
        Die **localStorage**-Eigenschaft ist nur im Browser verfügbar und kann nicht auf dem Server verwendet werden.

    
FromJson
-------------------

.. code-block:: javascript

        class Benutzer {
        constructor(name, passwort) {
            this._name = name;
            this._passwort = passwort;
        }

        set name(name) {
            this._name = name;
        }

        get name() {
            return this._name;
        }

        set passwort(passwort) {
            this._passwort = passwort;
        }

        get passwort() {
            return this._passwort;
        }

        toString() {
            return this._name + " " + this._passwort;
        }

        // Statische Methode, um ein Benutzerobjekt aus einem JSON-String zu erstellen
        static fromJSON(jsonString) {
            let daten = JSON.parse(jsonString);
            return new Benutzer(daten.name, daten.passwort);
        }
    }

    // Verwendung der statischen Methode
    if (localStorage.Benutzer) {
        let b1 = Benutzer.fromJSON(localStorage.Benutzer);
        console.log(b1.toString());
    } else {
        let b1 = new Benutzer("admin", "admin");
        console.log(b1.toString());
        localStorage.setItem("Benutzer", JSON.stringify(b1));
    }

    console.log("Run");
