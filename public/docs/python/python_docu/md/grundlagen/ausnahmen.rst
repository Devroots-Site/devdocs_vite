Ausnahmen
===========================

In Python gibt es verschiedene Arten von Ausnahmen. Eine Ausnahme ist ein Ereignis, das während der Ausführung eines Programms auftritt und das normale Verhalten des Programms unterbricht. Wenn ein Fehler auftritt, wird eine Ausnahme erzeugt, die das Programm stoppt und eine Fehlermeldung ausgibt.

## Arten von Ausnahmen

Einige der häufigsten Arten von Ausnahmen in Python sind:

- `SyntaxError`: Ein Fehler in der Syntax des Codes
- `IndentationError`: Einrückungsfehler im Code
- `NameError`: Eine nicht definierte Variable wird verwendet
- `TypeError`: Ein unerwarteter Datentyp wird verwendet
- `ValueError`: Ein unerwarteter Wert wird verwendet
- `ZeroDivisionError`: Eine Division durch Null wird versucht
- `IndexError`: Ein ungültiger Index wird verwendet
- `KeyError`: Ein ungültiger Schlüssel wird verwendet
- `FileNotFoundError`: Eine Datei kann nicht gefunden werden
- `ImportError`: Ein Modul kann nicht importiert werden
- `AttributeError`: Ein Attribut wird auf einem Objekt nicht gefunden

Behandlung von Ausnahmen
---------------------------------------

In Python können Sie Ausnahmen mit `try`, `except` und `finally` behandeln. Der `try`-Block enthält den Code, der ausgeführt werden soll, und der `except`-Block enthält den Code, der ausgeführt werden soll, wenn eine Ausnahme auftritt. Der `finally`-Block enthält den Code, der immer ausgeführt werden soll, unabhängig davon, ob eine Ausnahme auftritt oder nicht.

.. code-block:: python
    
    try:
        # Code, der möglicherweise eine Ausnahme auslöst
        x = 5 / 0
    except ValueError as e:
        # Code, der ausgeführt wird, wenn eine ZeroDivisionError-Ausnahme auftritt
        print("eine ZeroDivisionError-Ausnahme ist aufgetreten")
    finally:
        # Code, der immer ausgeführt wird
        print("Das Programm wurde beendet")

