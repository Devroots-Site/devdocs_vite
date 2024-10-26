Listen & Co. :sparkles:
========================

In Python gibt es verschiedene Arten von Datentypen, die mehrere Werte speichern können. Einige der häufigsten Datentypen in Python sind:

- **Listen**: Eine Liste von Elementen :page_facing_up:
- **Tupel**: Eine geordnete Sammlung von Elementen :pushpin:
- **Dictionaries**: Eine Sammlung von Schlüssel-Wert-Paaren :key:
- **Sets**: Eine Sammlung von eindeutigen Elementen :mag_right:
- **Frozensets**: Eine unveränderliche Menge von eindeutigen Elementen :lock:

Listen und Tupel 
----------------------------

Definieren von Listen und Tupeln 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   # Liste
   liste = [1, 2, 3, 4, 5]

   # Tupel
   tupel = (1, 2, 3, 4, 5)

Auf Elemente zugreifen 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   # Liste
   print(liste[0]) # 1

   # Tupel
   print(tupel[0]) # 1

Elemente hinzufügen 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   # Liste
   liste.append(6)

   # Tupel
   tupel.append(6) # TypeError: 'tuple' object has no attribute 'append'

.. warning:: Tupel sind unveränderlich und daher kann man ihnen keine neuen Elemente hinzufügen!

Methoden für Listen 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table:: Methoden für Listen in Python
   :header-rows: 1
   :widths: 20 80

   * - Methode
     - Beschreibung
   * - ``append()``
     - Fügt ein Element am Ende der Liste hinzu.
   * - ``insert(position, element)``
     - Fügt ein Element an einer bestimmten Position in der Liste ein.
   * - ``remove(element)``
     - Entfernt das erste Vorkommen eines Elements aus der Liste.
   * - ``pop()``
     - Entfernt und gibt das letzte Element der Liste zurück.
   * - ``clear()``
     - Entfernt alle Elemente aus der Liste.
   * - ``index(element)``
     - Gibt den Index des ersten Vorkommens eines Elements in der Liste zurück.
   * - ``count(element)``
     - Zählt, wie oft ein Element in der Liste vorkommt.
   * - ``sort()``
     - Sortiert die Liste in aufsteigender Reihenfolge.
   * - ``reverse()``
     - Kehrt die Reihenfolge der Elemente in der Liste um.

Dictionaries 
----------------------------

Definieren von Dictionaries 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   # Dictionary
   dictionary = {
       "name": "Alice",
       "age": 25,
       "city": "New York"
   }

Auf Elemente zugreifen von Dictionaries 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   print(dictionary["name"])  # Alice
   print(dictionary["age"])   # 25
   print(dictionary["city"])  # New York

Elemente hinzufügen von Dictionaries 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   dictionary["email"] = "test@gmail.com"

Methoden für Dictionaries 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table:: Methoden für Dictionaries in Python
   :header-rows: 1
   :widths: 20 80

   * - Methode
     - Beschreibung
   * - ``get(key)``
     - Gibt den Wert des angegebenen Schlüssels zurück.
   * - ``keys()``
     - Gibt eine Liste aller Schlüssel im Dictionary.
   * - ``values()``
     - Gibt eine Liste aller Werte im Dictionary.
   * - ``items()``
     - Gibt eine Liste der Schlüssel-Wert-Paare im Dictionary.
   * - ``pop(key)``
     - Entfernt und gibt den Wert des angegebenen Schlüssels zurück.
   * - ``clear()``
     - Entfernt alle Elemente aus dem Dictionary.

Sets 
-------------

Definieren von Sets
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   # Set
   set = {1, 2, 3, 4, 5}

Methoden für Sets 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table:: Methoden für Sets in Python
   :header-rows: 1
   :widths: 20 80

   * - Methode
     - Beschreibung
   * - ``add(element)``
     - Fügt ein Element zum Set hinzu.
   * - ``remove(element)``
     - Entfernt ein Element aus dem Set, gibt aber einen Fehler aus, wenn das Element nicht existiert.
   * - ``discard(element)``
     - Entfernt ein Element aus dem Set, ohne einen Fehler auszugeben, wenn es nicht vorhanden ist.
   * - ``pop()``
     - Entfernt und gibt ein zufälliges Element aus dem Set zurück.
   * - ``clear()``
     - Entfernt alle Elemente aus dem Set.

Iterieren über ein Dictionary in Python 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In Python gibt es mehrere Möglichkeiten, über ein Dictionary zu iterieren. Hier ist ein Beispiel, bei dem die Hauptstädte deutscher Bundesländer in einem Dictionary gespeichert sind:

.. code-block:: python

   capitals = {
       "Hessen": "Wiesbaden",
       "Saarland": "Saarbrücken",
       "Baden-Württemberg": "Stuttgart",
       "Rheinland-Pfalz": "Mainz",
       "Nordrhein-Westfalen": "Düsseldorf"
   }

Iterieren über Schlüssel 🗝️
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   for state in capitals:
       print(state)

Iterieren über Werte 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   for capital in capitals.values():
       print(capital)

   for key in capitals.keys():
       print(key, ":", capitals[key])

Iterieren über Schlüssel und Werte 💘
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   for state, capital in capitals.items():
       print(f"Die Hauptstadt von {state} ist {capital}")
