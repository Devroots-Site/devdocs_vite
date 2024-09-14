Schleifen & Methoden
====================

Schleifen werden verwendet, um eine Aktion mehrmals auszuführen, bis ein bestimmtes Kriterium erfüllt ist.

Schleifen
---------

While
~~~~~

Die ``while`` Schleife wird verwendet, um eine Aktion so lange auszuführen, wie eine Bedingung wahr ist.

.. code-block:: javascript

    let i = 0;

    while (i < 5) {
        console.log(i);
        i++;
    }

Do-While
~~~~~~~~

Die ``do-while`` Schleife wird verwendet, um eine Aktion mindestens einmal auszuführen, bevor die Bedingung überprüft wird.

.. code-block:: javascript

    let i = 0;

    do {
        console.log(i);
        i++;
    } while (i < 5);

For
~~~

Die ``for`` Schleife wird verwendet, um eine Aktion eine bestimmte Anzahl von Malen auszuführen.

.. code-block:: javascript

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

Foreach
~~~~~~~

Die ``foreach`` Schleife wird verwendet, um über ein Array zu iterieren.

.. code-block:: javascript

    let arr = [1, 2, 3, 4, 5];

    arr.forEach((item) => {
        console.log(item);
    });

Filter
~~~~~~

Die ``filter`` Methode wird verwendet, um ein Array zu filtern.

.. code-block:: javascript

    let arr = [1, 2, 3, 4, 5];

    let filtered = arr.filter((item) => {
        return item > 2;
    });

    console.log(filtered);

.. note::
   💡 **Hinweis** Filter filtert nicht das aktuelle Array, sondern erstellt daraus ein neues.

Find
~~~~

Die ``find`` Methode wird verwendet, um das erste Element in einem Array zu finden, das eine Bedingung erfüllt.

.. code-block:: javascript

    let arr = [1, 2, 3, 4, 5];

    let found = arr.find((item) => {
        return item > 2;
    });

    console.log(found);

Map
~~~

Die ``map`` Methode wird verwendet, um ein Array zu transformieren.

.. code-block:: javascript

    let arr = [1, 2, 3, 4, 5];

    let mapped = arr.map((item) => {
        return item * 2;
    });

    console.log(mapped); // [2, 4, 6, 8, 10]

Reduce
~~~~~~

Die ``reduce`` Methode wird verwendet, um ein Array auf einen einzigen Wert zu reduzieren.

.. code-block:: javascript

    let arr = [1, 2, 3, 4, 5];

    let reduced = arr.reduce((acc, item) => {
        return acc + item;
    }, 0); // 0 ist der Startwert

    console.log(reduced); // 15

Hier wird der Startwert ``0`` übergeben und dann wird jedes Element des Arrays aufaddiert.

Some
~~~~

Die ``some`` Methode wird verwendet, um zu überprüfen, ob mindestens ein Element in einem Array eine Bedingung erfüllt.

.. code-block:: javascript

    let arr = [1, 2, 3, 4, 5];

    let some = arr.some((item) => {
        return item > 2;
    });

    console.log(some); // true

Every
~~~~~

Die ``every`` Methode wird verwendet, um zu überprüfen, ob alle Elemente in einem Array eine Bedingung erfüllen.

.. code-block:: javascript

    let arr = [1, 2, 3, 4, 5];

    let every = arr.every((item) => {
        return item > 2;
    });

    console.log(every); // false

Funktionen
----------

Funktionen werden verwendet, um eine Aktion auszuführen oder einen Wert zurückzugeben.

.. note::
   💡 **Hinweis** Funktionen sind wiederverwendbar
   - Eine Funktion kann Parameter entgegennehmen
   - Eine Funktion kann einen Wert zurückgeben
   - Das Ergebnis kann mit ``return`` zurückgegeben werden

.. note::
   💡 **Hinweis**
   - Globale Variablen: Die auf oberster Ebene, also außerhalb von Funktionen, Schleifen und Bedingungen angelegte Variablen sind global ⇒ sparsam verwenden
   - Alle in Funktionen angelegte Variablen sind lokal und können nur innerhalb der Funktion verwendet werden

Normale Funktionen
~~~~~~~~~~~~~~~~~~

.. code-block:: javascript

    function add(a, b) {
        return a + b;
    }

    console.log(add(2, 3)); // 5

Lokale Funktionen
~~~~~~~~~~~~~~~~~

.. code-block:: javascript

    let sayHello = function() {
        let name = 'Max';
        console.log('Hello ' + name);
    }

    sayHello(); // Hello Max

Der Nachteil bei lokalen Funktionen ist, dass sie nicht wiederverwendbar sind. Das bedeutet, dass sie nur innerhalb der Funktion verwendet werden können.
