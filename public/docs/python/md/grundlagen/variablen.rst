Variablen
=========

Variablen sind Speicherorte, in denen Werte gespeichert werden können. In Python werden Variablen durch Zuweisung erstellt. Eine Zuweisung wird mit dem Zuweisungsoperator ``=`` durchgeführt. Der Variablenname wird auf der linken Seite des Zuweisungsoperators und der Wert, der gespeichert werden soll, auf der rechten Seite des Zuweisungsoperators geschrieben.

.. code-block:: python

   x = 5
   y = "Hello, World!"

In diesem Beispiel wird der Wert ``5`` der Variablen ``x`` zugewiesen und der Wert ``"Hello, World!"`` der Variablen ``y`` zugewiesen.

Arten von Variablen
-------------------

In Python gibt es verschiedene Arten von Variablen, die unterschiedliche Datentypen speichern können. Einige der häufigsten Datentypen in Python sind:

- ``int``: Ganzzahlen
- ``float``: Gleitkommazahlen
- ``str``: Zeichenketten
- ``bool``: Boolesche Werte (``True`` oder ``False``)

.. code-block:: python

   x = 5  # int
   y = 3.14  # float
   z = "Hello, World!"  # str
   w = True  # bool

Hinweis
-------
Datentypen brauchen hier nicht vor der Variablen stehen, da Python die Datentypen automatisch erkennt.

Werte zuweisen
--------------

``x : datentyp = wert``

.. code-block:: python

   x = 5  # int
   x : int = 5

Wenn diese Schreibweise verwendet wird, wird der Variablen ``x`` der Wert ``5`` zugewiesen und der Datentyp der Variablen ``x`` auf ``int`` festgelegt. Wenn nun versucht wird, der Variablen ``x`` einen Wert eines anderen Datentyps zuzuweisen, wird ein Fehler angezeigt.

Datentypmanipulation
--------------------

In Python können Sie den Datentyp einer Variablen ändern, indem Sie die Variable mit einem anderen Datentyp neu zuweisen. Python wird den Datentyp der Variablen automatisch ändern, um den neuen Wert zu akzeptieren.

.. code-block:: python

   x = 5  # int
   int(x)  # int
   float(x)  # float
   str(x)  # str
   bool(x)  # bool

In diesem Beispiel wird der Wert der Variablen ``x`` von ``5`` in einen Gleitkommawert, eine Zeichenkette und einen booleschen Wert umgewandelt.

Erweiterter Zuweisungsoperator
------------------------------

.. code-block:: python

   id(x)  # Speicheradresse von x
   type(x)  # Datentyp von x
   datentyp(x)  # Datentyp von x ändern
   isnumeric(x)  # Überprüfen, ob x eine Zahl ist
   isinstance(x, int)  # Überprüfen, ob x ein Integer ist

Komplexe Datentypen in Python
-----------------------------

- Listen (eine Liste von Elementen)
- Tupel (eine Liste von Elementen, die nicht geändert werden kann)
- Dictionaries (eine Sammlung von Schlüssel-Wert-Paaren)
- Sets (eine Sammlung von eindeutigen Elementen)
- Frozensets (eine Sammlung von eindeutigen Elementen, die nicht geändert werden kann)
