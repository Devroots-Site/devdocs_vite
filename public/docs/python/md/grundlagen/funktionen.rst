Funktionen ✨
==================

In diesem Kapitel geht es um Funktionen in Python. Wir werden uns damit beschäftigen, wie Funktionen definiert und aufgerufen werden, wie Argumente übergeben werden und wie Funktionen Werte zurückgeben können.

## Funktionen definieren

In Python können Sie Funktionen definieren, um Code zu organisieren und wiederzuverwenden. Eine Funktion ist eine benannte Sequenz von Anweisungen, die eine bestimmte Aufgabe ausführen. Sie können Funktionen definieren, indem Sie das Schlüsselwort `def` gefolgt von dem Funktionsnamen und den Argumenten verwenden.

.. code-block:: python

    def greet(name : str):
        print(f"Hello, {name}!")


In diesem Beispiel wird eine Funktion `greet` definiert, die einen Namen als Argument erwartet und eine Begrüßung ausgibt.

Funktionen aufrufen 🤙
----------------------------

Nachdem Sie eine Funktion definiert haben, können Sie sie aufrufen, indem Sie den Funktionsnamen gefolgt von Klammern verwenden. Wenn die Funktion Argumente erwartet, müssen Sie die Argumente in den Klammern angeben.

.. code-block:: python
        
    greet("Alice")


In diesem Beispiel wird die Funktion `greet` mit dem Argument `"Alice"` aufgerufen, was die Ausgabe `"Hello, Alice!"` erzeugt.

Argumente übergeben 🫱
--------------------------------

Sie können Funktionen Argumente übergeben, um Werte an die Funktion zu übergeben, die sie verarbeiten kann. Sie können Argumente an Funktionen übergeben, indem Sie sie in den Klammern angeben, wenn Sie die Funktion aufrufen.

.. code-block:: python

    def add(x : int, y : int):
        return x + y

    result = add(5, 3)
    print(result)


In diesem Beispiel wird eine Funktion `add` definiert, die zwei Argumente `x` und `y` erwartet und die Summe der beiden Argumente zurückgibt. Die Funktion wird dann mit den Argumenten `5` und `3` aufgerufen, was `8` zurückgibt.
