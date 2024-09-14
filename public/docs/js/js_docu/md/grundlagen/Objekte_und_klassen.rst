Objekte und Klassen
===================

In JavaScript gibt es zwei Arten von Objekten: **vordefinierte Objekte** und **benutzerdefinierte Objekte**.

Vordefinierte Objekte
---------------------

Vordefinierte Objekte sind Objekte, die bereits in JavaScript definiert sind. Einige Beispiele für vordefinierte Objekte sind:

- ``Math``
- ``Date``
- ``Array``
- ``String``
- ``Number``
- ``Boolean``
- ``Function``
- ``Object``

Benutzerdefinierte Objekte
--------------------------

Benutzerdefinierte Objekte sind Objekte, die vom Benutzer definiert werden. Ein benutzerdefiniertes Objekt kann mit einer Funktion oder einer Klasse erstellt werden.

Objekte werden verwendet, um viele Werte in einer einzigen Variablen zu speichern.

Objekte erstellen
-----------------

Ein Objekt kann mit geschweiften Klammern ``{}`` erstellt werden.

.. code-block:: javascript

    let person = {
        name: 'Max',
        alter: 30,
        wohnort: 'Berlin'
    };

Eigenschaften zugreifen
-----------------------

Auf die Eigenschaften eines Objekts kann mit einem Punkt ``.`` zugegriffen werden.

.. code-block:: javascript

    console.log(person.name); // Max
    console.log(person.alter); // 30
    console.log(person.wohnort); // Berlin

Eigenschaften ändern & leeres Objekt
------------------------------------

Ein Objekt kann auch leer erstellt und später Eigenschaften hinzugefügt werden.

.. code-block:: javascript

    let person = {};

    person.name = 'Max';
    person.alter = 30;
    person.wohnort = 'Berlin';

    person.name = 'Moritz';

Methoden
--------

.. list-table:: 
   :header-rows: 1

   * - Methode
     - Beschreibung
     - Beispiel
   * - ``Object.keys(obj)``
     - Gibt ein Array mit allen Schlüsseln eines Objekts zurück
     - ``let keys = Object.keys({a: 1, b: 2});``\n``// keys = ["a", "b"]``
   * - ``Object.values(obj)``
     - Gibt ein Array mit allen Werten eines Objekts zurück
     - ``let values = Object.values({a: 1, b: 2});``\n``// values = [1, 2]``
   * - ``Object.entries(obj)``
     - Gibt ein Array von Schlüssel-Wert-Paaren eines Objekts zurück
     - ``let entries = Object.entries({a: 1, b: 2});``\n``// entries = [["a", 1], ["b", 2]]``
   * - ``Object.assign(target, ...sources)``
     - Kopiert alle Eigenschaften von einem oder mehreren Objekten in ein Zielobjekt
     - ``let obj = Object.assign({}, {a: 1}, {b: 2});``\n``// obj = {a: 1, b: 2}``
   * - ``delete obj[key]``
     - Entfernt eine Eigenschaft aus einem Objekt
     - ``delete obj.a;``\n``// Entfernt die Eigenschaft "a" aus obj``
   * - ``hasOwnProperty(key)``
     - Überprüft, ob das Objekt eine bestimmte Eigenschaft hat
     - ``obj.hasOwnProperty('a');``\n``// true, wenn "a" eine Eigenschaft von obj ist``
   * - ``Object.freeze(obj)``
     - Verhindert jegliche Änderungen an den Eigenschaften eines Objekts
     - ``Object.freeze(obj);``\n``// obj ist jetzt unveränderlich``
   * - ``Object.seal(obj)``
     - Verhindert das Hinzufügen oder Entfernen von Eigenschaften
     - ``Object.seal(obj);``\n``// obj kann keine neuen Eigenschaften erhalten``
   * - ``Object.getOwnPropertyNames(obj)``
     - Gibt ein Array mit allen Eigenschaften eines Objekts zurück, auch nicht-enumerable
     - ``let props = Object.getOwnPropertyNames(obj);``\n``// props = ["a", "b"]``
   * - ``Object.create(proto)``
     - Erstellt ein neues Objekt mit dem angegebenen Prototypobjekt
     - ``let newObj = Object.create(proto);``\n``// newObj hat proto als Prototyp``

Konstruktorfunktion
-------------------

Eine Konstruktorfunktion wird verwendet, um ein Objekt zu erstellen. Eine Konstruktorfunktion ist eine normale Funktion, die mit dem ``new`` Schlüsselwort aufgerufen wird.

.. code-block:: javascript

    function Person(name, alter, wohnort) {
        this.name = name;
        this.alter = alter;
        this.wohnort = wohnort;
    }

    let person = new Person('Max', 30, 'Berlin');

Prototyp
--------

Der Prototyp wird verwendet, um Methoden und Eigenschaften zu einem Objekt hinzuzufügen.

.. code-block:: javascript

    function Person(name, alter, wohnort) {
        this.name = name;
        this.alter = alter;
        this.wohnort = wohnort;
    }

    Person.prototype.sayHello = function() {
        console.log('Hello ' + this.name);
    }

    let person = new Person('Max', 30, 'Berlin');
    person.sayHello(); // Hello Max

Klasse
------

Eine Klasse ist eine spezielle Funktion, die verwendet wird, um ein Objekt zu erstellen. Eine Klasse wird mit dem ``class`` Schlüsselwort erstellt.

.. code-block:: javascript

    class Person {
        constructor(name, alter, wohnort) {
            this.name = name;
            this.alter = alter;
            this.wohnort = wohnort;
        }

        sayHello() {
            console.log('Hello ' + this.name);
        }
    }

Getter und Setter
-----------------

Getter und Setter werden verwendet, um den Zugriff auf Eigenschaften eines Objekts zu steuern.

.. code-block:: javascript

    class Mensch {
        static art = "Homo Sapiens"; // Statisches Attribut

        constructor(name) {
            this._name = name;
        }

        get name() {
            return this._name;
        }

        set name(name) {
            this._name = name;
        }

        static hallo() { // Statische Methode
            console.log("Hallo, ich bin ein Mensch!");
        }
    }

    let person = new Mensch("Hans");

    console.log(person.name); // Hans
    console.log(Mensch.art); // Homo Sapiens
    Mensch.hallo(); // Hallo, ich bin ein Mensch!

.. note::
   ⚠️ **Warnung** Hier werden ``_name`` verwendet, um den Zugriff auf das Attribut ``name`` zu steuern. Heißt ``this._name`` ist der neue Name.
   Bei Setter werden immer Getter gebraucht! 

Statische Methoden
-------------------

Statische Methoden sind Methoden, die auf der Klasse selbst aufgerufen werden, nicht auf einem Objekt.

.. code-block:: javascript

    function Mensch(name){
        this.name = name;
        Mensch.anzahl++; // Statische Eigenschaft
    }

    Mensch.anzahl = 0; // Statische Eigenschaft
    Mensch.getAnzahl = function(){ // Statische Methode
        return Mensch.anzahl;
    }

    class Person {
        constructor(name, alter, wohnort) {
            this.name = name;
            this.alter = alter;
            this.wohnort = wohnort;
        }

        static createPerson(name, alter, wohnort) {
            return new Person(name, alter, wohnort);
        }
    }

Vererbung
---------

Die Vererbung erfolgt in JavaScript mithilfe von ``extends``. Zum Beispiel:

.. code-block:: javascript

    class Vieh {
        constructor(name, gewicht) {
            this.name = name;
            this.gewicht = gewicht;
        }

        sagWas(x) {
            return "Ich bin ein " + this.name + " und wiege " + this.gewicht + " kg. " + x;
        }
    }

    class Pferd extends Vieh {
        constructor(name, gewicht, farbe) {
            super(name, gewicht);
            this.farbe = farbe;
        }

        sagWas(x) {
            return "Hallo, ich bin ein " + this.farbe + " Pferd, " + super.sagWas(x);
        }
    }

    let pferd = new Pferd("Hans", 500, "braun");

    console.log(pferd.sagWas("Ich liebe Äpfel!")); // Hallo, ich bin ein braun Pferd, Ich bin ein Hans und wiege 500 kg. Ich liebe Äpfel!

Abstrakte Klassen
-----------------

Abstrakte Klassen sind Klassen, die nicht direkt instanziiert werden können. Sie werden verwendet, um andere Klassen zu erweitern.

.. code-block:: javascript

    class Tier {
        constructor(name, gewicht) {
            if (this.constructor === Tier) {
                throw new Error("Abstract classes can't be instantiated.");
            }
            this.name = name;
            this.gewicht = gewicht;
        }

        sagWas() {
            throw new Error("Method 'sagWas' must be implemented.");
        }
    }

    class Hund extends Tier {
        constructor(name, gewicht, rasse) {
            super(name, gewicht);
            this.rasse = rasse;
        }

        sagWas() {
            return "Wuff!";
        }
    }

    let hund = new Hund("Bello", 10, "Dackel");

.. note::
   Hier wird mit ``if (this.constructor === Tier)`` überprüft, ob die Klasse direkt instanziiert wird. Wenn ja, wird ein Fehler geworfen.

Objekte konvertieren
--------------------

Objekte können in Strings konvertiert werden, indem sie in eine JSON-Zeichenfolge umgewandelt werden.

.. code-block:: javascript

    let person = {
        name: 'Max',
        alter: 30,
        wohnort: 'Berlin'
    };

    let json = JSON.stringify(person); // {"name":"Max","alter":30,"wohnort":"Berlin"} aus einem Objekt wird ein JSON String erstellt

    let person2 = JSON.parse(json); // {name: 'Max', alter: 30, wohnort: 'Berlin'} Aus einem JSON String wird ein Objekt erstellt

    // Objekte aus JSON-Objekten erstellen
    let viehArray = objekteArray.map(obj => new Vieh(obj.typ, obj._gewicht));

Objekte vergleichen
--------------------

Objekte können nicht direkt miteinander verglichen werden. Sie können jedoch in JSON-Zeichenfolgen umgewandelt und dann verglichen werden.

.. code-block:: javascript

    let person1 = {
        name: 'Max',
        alter: 30,
        wohnort: 'Berlin'
    };

    let person2 = {
        name: 'Max',
        alter: 30,
        wohnort: 'Berlin'
    };

    let json1 = JSON.stringify(person1);
    let json2 = JSON.stringify(person2);

    console.log(json1 === json2); // true

Objekte kopieren
----------------

Objekte können mit ``Object.assign()`` kopiert werden.

.. code-block:: javascript

    let person = {
        name: 'Max',
        alter: 30,
        wohnort: 'Berlin'
    };

    let person2 = Object.assign({}, person);

Objekte verschachteln
---------------------

Objekte können verschachtelt werden, indem ein Objekt in einem anderen Objekt gespeichert wird.

.. code-block:: javascript

    let person = {
        name: 'Max',
        alter: 30,
        adresse: {
            strasse: 'Hauptstrasse',
            hausnummer: 1,
            plz: 12345,
            ort: 'Berlin'
        }
    };

    console.log(person.adresse.strasse); // Hauptstrasse
