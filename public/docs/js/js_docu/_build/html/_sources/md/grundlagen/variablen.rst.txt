Variablen
=============

In diesem Bereich geht es um Variablen. Variablen sind Platzhalter für Werte. Sie können Werte speichern und verändern. In JavaScript gibt es verschiedene Arten von Variablen. In diesem Abschnitt werden wir uns mit den Grundlagen von Variablen in JavaScript befassen.

Variablen sind hier dynamisch typisiert ⇒ Der Typ wird durch die Verwendung bestimmt.

Variablen deklarieren
---------------------

Variablen werden in JavaScript mit dem Schlüsselwort ``var``, ``let`` oder ``const`` deklariert. Der Unterschied zwischen ``var``, ``let`` und ``const`` besteht darin, wie sie im Code verwendet werden können.

var
~~~

``var`` ist die alte Art, Variablen in JavaScript zu deklarieren. Variablen, die mit ``var`` deklariert werden, sind funktionsübergreifend sichtbar. Das bedeutet, dass sie innerhalb der Funktion, in der sie deklariert wurden, und in allen Funktionen, die innerhalb dieser Funktion definiert sind, sichtbar sind.

.. code-block:: javascript

    var x = 10;
    console.log(x); // 10

let
~~~

``let`` ist die moderne Art, Variablen in JavaScript zu deklarieren. Variablen, die mit ``let`` deklariert werden, sind blockübergreifend sichtbar. Das bedeutet, dass sie innerhalb des Blocks, in dem sie deklariert wurden, und in allen Blöcken, die innerhalb dieses Blocks definiert sind, sichtbar sind.

.. code-block:: javascript

    let x = 10;
    console.log(x); // 10

const
~~~~~

``const`` ist die moderne Art, Konstanten in JavaScript zu deklarieren. Konstanten, die mit ``const`` deklariert werden, können nicht neu zugewiesen werden. Sie müssen bei der Deklaration initialisiert werden.

.. code-block:: javascript

    const x = 10;
    console.log(x); // 10

Variablen initialisieren
------------------------

Variablen können bei der Deklaration initialisiert werden. Das bedeutet, dass ihnen ein Wert zugewiesen wird, wenn sie deklariert werden.

.. code-block:: javascript

    var x = 10; // Initialisierung von x mit dem Wert 10
    let y = 'Ich bin ein String'; // String
    const z = false; // Boolean
    let x ; // Undefined

Variablen zuweisen
------------------

Variablen können Werte zugewiesen werden. Der Wert einer Variablen kann geändert werden.

.. code-block:: javascript

    var x = 10;
    x = 20;
    console.log(x); // 20

Variablen verwenden
-------------------

Variablen können in Ausdrücken und Anweisungen verwendet werden.

.. code-block:: javascript

    var x = 10;
    var y = 20;
    var z = x + y;
    console.log(z); // 30

    // oder 

    let name = 'Max';

    console.log('Hallo, ' + name + '!'); // Hallo, Max!

    // oder

    let name = 'Max';

    console.log(`Hallo, ${name}!`); // Hallo, Max!

Hier sind einige Beispiele für die Verwendung.

1. Man kann sie ganz normal verwenden mit dem Aufruf.
2. Man kann diese mit ``+`` verknüpfen (String).
3. Man kann mit `` ` `` und ``${}`` verknüpfen (String).

Variablennamen
--------------

Variablennamen können Buchstaben, Zahlen, Unterstriche und Dollarzeichen enthalten. Sie dürfen nicht mit einer Zahl beginnen. Variablennamen sind case-sensitive.

.. code-block:: javascript

    var x = 10;
    var _y = 20;
    var $z = 30;
    var x_y = 40;
    var X = 50;
    console.log(x, _y, $z, x_y, X); // 10 20 30 40 50

Methoden für Variablen
----------------------

Variablen können auch Methoden aufrufen. Eine Methode ist eine Funktion, die zu einem Objekt gehört.

.. list-table:: 
   :header-rows: 1

   * - Methode
     - Beschreibung
     - Beispiel
   * - ``charAt()``
     - Gibt das Zeichen an einer bestimmten Position in einer Zeichenkette zurück
     - ``let text = "Hallo, Welt!";``\n``let char = text.charAt(1);``\n``// char = "a";``
   * - ``text.includes()``
     - Überprüft, ob eine Zeichenkette eine andere Zeichenkette enthält
     - ``let text = "Hallo, Welt!";``\n``let isInclude = text.includes("Welt");``\n``// isInclude = true;``
   * - ``indexOf()``
     - Gibt die Position des ersten Vorkommens eines angegebenen Wertes in einer Zeichenkette zurück
     - ``let text = "Hallo, Welt!";``\n``let pos = text.indexOf("Welt");``\n``// pos = 7;``
   * - ``lastIndexOf()``
     - Gibt die Position des letzten Vorkommens eines angegebenen Wertes in einer Zeichenkette zurück
     - ``let text = "Hallo, Welt!";``\n``let pos = text.lastIndexOf("l");``\n``// pos = 9;``
   * - ``replace()``
     - Ersetzt einen Teil einer Zeichenkette durch eine andere Zeichenkette
     - ``let text = "Hallo, Welt!";``\n``let textReplace = text.replace("Welt", "Mars");``\n``// textReplace = "Hallo, Mars!";``
   * - ``split(<zeichen>)``
     - Teilt eine Zeichenkette in ein Array von Zeichenketten auf
     - ``let text = "a,b,c,d,e";``\n``let textArray = text.split(",");``\n``// textArray = ["a", "b", "c", "d", "e"];``
   * - ``toUpperCase()``
     - Wandelt eine Zeichenkette in Großbuchstaben um
     - ``let text = "Hallo, Welt!";``\n``let textUpper = text.toUpperCase();``\n``// textUpper = "HALLO, WELT!";``
   * - ``toLowerCase()``
     - Wandelt eine Zeichenkette in Kleinbuchstaben um
     - ``let text = "Hallo, Welt!";``\n``let textLower = text.toLowerCase();``\n``// textLower = "hallo, welt!";``
   * - ``substring(start, end)``
     - Gibt die Zeichenkette zwischen zwei Indizes zurück
     - ``let text = "Hallo, Welt!";``\n``let textSub = text.substring(7, 12);``\n``// textSub = "Welt!";``
   * - ``trim()``
     - Entfernt Leerzeichen von beiden Enden einer Zeichenkette
     - ``let text = " Hallo, Welt! ";``\n``let textTrim = text.trim();``\n``// textTrim = "Hallo, Welt!";``

Variablen Parsen
----------------

Variablen können in verschiedene Datentypen geparst werden.

.. list-table:: 
   :header-rows: 1

   * - Methode
     - Beschreibung
     - Beispiel
   * - ``parseInt()``
     - Parst eine Zeichenkette in eine Ganzzahl
     - ``let text = "10";``\n``let number = parseInt(text);``\n``// number = 10;``
   * - ``parseFloat()``
     - Parst eine Zeichenkette in eine Gleitkommazahl
     - ``let text = "10.5";``\n``let number = parseFloat(text);``\n``// number = 10.5;``
   * - ``String()``
     - Parst eine Zahl in eine Zeichenkette
     - ``let number = 10;``\n``let text = String(number);``\n``// text = "10";``
   * - ``Boolean()``
     - Parst eine Zahl in einen Boolean
     - ``let number = 10;``\n``let bool = Boolean(number);``\n``// bool = true;``

Variablen Scope
---------------

Der Gültigkeitsbereich einer Variablen ist der Bereich, in dem die Variable sichtbar ist. In JavaScript gibt es zwei Arten von Gültigkeitsbereichen: global und lokal.

Globaler Scope
~~~~~~~~~~~~~~

Variablen, die außerhalb einer Funktion deklariert werden, haben einen globalen Gültigkeitsbereich. Sie sind überall im Code sichtbar.

.. code-block:: javascript

    var x = 10; // Globaler Scope
    function test() {
      console.log(x); // 10
    }
    test();

Lokaler Scope
~~~~~~~~~~~~~

Variablen, die innerhalb einer Funktion deklariert werden, haben einen lokalen Gültigkeitsbereich. Sie sind nur innerhalb der Funktion sichtbar.

.. code-block:: javascript

    function test() {
      var x = 10; // Lokaler Scope
      console.log(x); // 10
    }
    test();
    console.log(x); // ReferenceError: x is not defined

Abfragen des Typs einer Variablen
---------------------------------

Der Typ einer Variablen kann mit dem ``typeof``-Operator abgefragt werden.

.. code-block:: javascript

    var x = 10;
    console.log(typeof x); // number

    // oder 

    if (typeof x === 'number') {
      console.log('x ist eine Zahl');
    }

Instanceof Operator
-------------------

Der ``instanceof``-Operator wird verwendet, um zu überprüfen, ob ein Objekt eine Instanz eines bestimmten Typs ist.

.. code-block:: javascript

    var x = new String('Hallo, Welt!');
    console.log(x instanceof String); // true

Null und Undefined
------------------

``null`` und ``undefined`` sind spezielle Werte in JavaScript.

``null`` ist ein Wert, der auf ein Nichtvorhandensein von Wert hinweist.

``undefined`` ist ein Wert, der auf eine Variable hinweist, die deklariert, aber nicht initialisiert wurde.

.. code-block:: javascript

    var x = null;
    var y;
    console.log(x); // null

    console.log(y); // undefined

isNaN
-----

``isNaN`` ist eine Funktion, die prüft, ob ein Wert keine Zahl ist.

.. code-block:: javascript

    var x = '10';
    console.log(isNaN(x)); // false

Arrays
------

Ein Array ist ein spezieller Datentyp, der es ermöglicht, mehrere Werte in einer einzigen Variablen zu speichern.

.. note::
   💡 **Hinweis**: Besonderheit bei Arrays: Hier kann mit ``Array.isArray(übergabe)`` geprüft werden. Dieser gibt true / false zurück.

Verwendung von Arrays
---------------------

Arrays können Werte speichern und abrufen.

.. code-block:: javascript

    var fruits = ['Apfel', 'Banane', 'Orange'];
    console.log(fruits[0]); // Apfel

Array Methoden
--------------

.. list-table:: 
   :header-rows: 1

   * - Methode
     - Beschreibung
     - Beispiel
   * - ``concat()``
     - Verbindet zwei oder mehr Arrays
     - ``let cars3 = cars.concat(cars2);``\n``// cars3 ist jetzt eine Kombination aus cars und cars2``
   * - ``every()``
     - Überprüft, ob alle Elemente in einem Array eine Bedingung erfüllen
     - ``let allLargeNumbers = array.every(element ⇒ element > 4);``\n``// allLargeNumbers ist false, wenn nicht alle Elemente größer als 4 sind``
   * - ``filter()``
     - Erstellt ein neues Array, das aus den Elementen eines Arrays besteht, die eine Bedingung erfüllen
     - ``let numbers = [1, 2, 3, 4, 5];``\n``let numbers2 = numbers.filter(x ⇒ x > 3);``\n``// numbers2 ist jetzt [4, 5]``
   * - ``find()``
     - Gibt das erste Element in einem Array zurück, das eine Bedingung erfüllt
     - ``let found = array.find(element ⇒ element > 3);``\n``// found ist jetzt 4``
   * - ``forEach()``
     - Führt eine Funktion für jedes Element in einem Array aus
     - ``array.forEach(element ⇒ console.log(element));``\n``// Gibt jedes Element im Array aus``
   * - ``includes()``
     - Überprüft, ob ein Array ein bestimmtes Element enthält und gibt true oder false zurück
     - ``let x = cars.includes('Audi');``\n``// x ist true, wenn 'Audi' in cars enthalten ist``
   * - ``indexOf()``
     - Sucht nach dem ersten Vorkommen eines Elements in einem Array und gibt die Position zurück
     - ``let pos = cars.indexOf('Audi');``\n``// pos ist der Index von 'Audi' in cars``
   * - ``join()``
     - Verbindet alle Elemente eines Arrays in eine Zeichenkette
     - ``let carsString = cars.join(' - ');``\n``// carsString ist jetzt eine Zeichenkette mit allen Elementen von cars, getrennt durch ' - '`` 
   * - ``lastIndexOf()``
     - Sucht nach dem letzten Vorkommen eines Elements in einem Array und gibt die Position zurück
     - ``let pos = cars.lastIndexOf('Audi');``\n``// pos ist der Index des letzten Vorkommens von 'Audi' in cars``
   * - ``map()``
     - Erstellt ein neues Array, das aus den Ergebnissen einer Funktion für jedes Element eines Arrays besteht
     - ``let numbers = [1, 2, 3, 4, 5];``\n``let numbers2 = numbers.map(x ⇒ x * 2);``\n``// numbers2 ist jetzt [2, 4, 6, 8, 10]``
   * - ``pop()``
     - Entfernt das letzte Element eines Arrays
     - ``cars.pop();``\n``// Entfernt das letzte Element aus cars``
   * - ``push()``
     - Fügt ein neues Element am Ende eines Arrays hinzu
     - ``cars.push('Opel');``\n``// Fügt 'Opel' am Ende von cars hinzu``
   * - ``reduce()``
     - Verwendet eine Funktion, um ein einzelnes Wert aus den Elementen eines Arrays zu erstellen
     - ``let reduced = array.reduce((accumulator, currentValue) ⇒ accumulator + currentValue);``\n``// reduced ist jetzt die Summe aller Elemente in array``
   * - ``reverse()``
     - Kehrt die Reihenfolge der Elemente eines Arrays um
     - ``cars.reverse();``\n``// Die Reihenfolge der Elemente in cars ist jetzt umgekehrt``
   * - ``shift()``
     - Entfernt das erste Element eines Arrays
     - ``cars.shift();``\n``// Entfernt das erste Element aus cars``
   * - ``slice()``
     - Gibt eine Kopie eines Teils eines Arrays zurück
     - ``let cars2 = cars.slice(1, 3);``\n``// cars2 ist jetzt ein Array mit den Elementen an den Positionen 1 und 2 von cars``
   * - ``some()``
     - Überprüft, ob mindestens ein Element in einem Array eine Bedingung erfüllt
     - ``let hasLargeNumber = array.some(element ⇒ element > 4);``\n``// hasLargeNumber ist true, wenn mindestens ein Element größer als 4 ist``
   * - ``sort()``
     - Sortiert die Elemente eines Arrays
     - ``cars.sort();``\n``// Die Elemente in cars sind jetzt sortiert``
   * - ``splice()``
     - Fügt oder entfernt Elemente an einer bestimmten Position im Array
     - ``cars.splice(2, 0, 'Opel', 'Ford');``\n``// Fügt 'Opel' und 'Ford' an Position 2 in cars ein``
   * - ``unshift()``
     - Fügt ein neues Element am Anfang eines Arrays hinzu
     - ``cars.unshift('Opel');``\n``// Fügt 'Opel' am Anfang von cars hinzu``

Mehrdimensionale Arrays
-----------------------

Ein mehrdimensionales Array ist ein Array, das ein anderes Array enthält.

.. code-block:: javascript

    var cars = [
      ['Audi', 'BMW', 'Mercedes'],
      ['VW', 'Opel', 'Ford']
    ];
    console.log(cars[0][0]); // Audi

Consolen Ausgaben
-----------------

In der Konsole können verschiedene Ausgaben gemacht werden.

.. code-block:: javascript

    console.log('Hallo, Welt!'); // Hallo, Welt!
    console.error('Fehler!'); // Fehler!
    console.warn('Warnung!'); // Warnung!
    console.info('Information!'); // Information!
