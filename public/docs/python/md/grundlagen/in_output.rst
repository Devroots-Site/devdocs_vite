Eingaben / Ausgaben 📨
==================================

In diesem Kapitel geht es um die Ein- und Ausgaben in Python. Wir werden uns mit den Funktionen `input()` und `print()` beschäftigen.

Eingaben
--------------

Die Funktion `input()` wird verwendet, um Benutzereingaben in Python zu erhalten. Sie erwartet eine Zeichenkette als Argument, die als Eingabeaufforderung für den Benutzer dient. Der Benutzer kann dann eine Eingabe eingeben, die von der Funktion zurückgegeben wird.

.. code-block:: python

    name = input("Wie ist dein Name? ")
    print(f"Hallo, {name}!")


In diesem Beispiel wird der Benutzer aufgefordert, seinen Namen einzugeben, und der eingegebene Name wird dann mit einer Begrüßung ausgegeben.

Ausgaben
-----------------------

Die Funktion `print()` wird verwendet, um Ausgaben in Python zu drucken. Sie erwartet eine oder mehrere Argumente, die gedruckt werden sollen. Die Argumente können Zeichenketten, Zahlen oder andere Datenstrukturen sein.

.. code-block:: python

    print("Hello, World!")
    print(42)
    print(3.14)


In diesem Beispiel werden verschiedene Arten von Ausgaben mit der Funktion `print()` gezeigt. Die Funktion kann verwendet werden, um Text, Zahlen und andere Datenstrukturen auf dem Bildschirm auszugeben.

>💡 **Hinweis:** mit `printf` können im Kontext Variablen mit `{variable}` verwedet werden

.. code-block:: python

    name = "Alice"
    age = 30
    print(f"Name: {name}, Age: {age}")


Formatierung von Ausgaben
---------------------------------

Die Funktion `print()` unterstützt auch die Formatierung von Ausgaben mit speziellen Zeichenfolgen. Hier sind einige Beispiele:

- `%s`: Zeichenkette
- `%d`: Ganzzahl
- `%f`: Gleitkommazahl

.. code-block:: python

    name = "Alice"
    age = 30
    print("Name: %s, Age: %d" % (name, age))


In diesem Beispiel wird die Formatierung `%s` für Zeichenketten und `%d` für Ganzzahlen verwendet, um die Ausgabe zu formatieren.

Mehrere Argumente
-----------------------------

Die Funktion `print()` kann auch mehrere Argumente akzeptieren, die durch Kommas getrennt sind. Die Argumente werden dann nacheinander auf dem Bildschirm ausgegeben.

.. code-block:: python

    name = "Alice"
    age = 30
    print("Name:", name, "Age:", age)


Übergabeparameter in der Ausgabe
---------------------------------------

Die Funktion `print()` kann auch Übergabeparameter akzeptieren, die die Art und Weise steuern, wie die Ausgabe gedruckt wird. Hier sind einige Beispiele:

- `sep`: Trennzeichen zwischen den Argumenten
- `end`: Zeichenfolge, die am Ende der Ausgabe hinzugefügt wird

.. code-block:: python
    name = "Alice"
    age = 30
    print("Name:", name, "Age:", age, sep=" | ", end="!\n")

