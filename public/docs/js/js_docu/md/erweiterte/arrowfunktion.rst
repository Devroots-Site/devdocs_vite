Arrow function
========================

Arrow Funktion ist eine kürzere Syntax für die Funktionen in JavaScript. Sie ermöglichen es, Funktionen in einer kompakten und prägnanten Weise zu definieren. Die Syntax für die Pfeilfunktion lautet:

.. code-block:: javascript

    (param1, param2, ..., paramN) => { statements }

    oder

    (param1, param2, ..., paramN) => expression

    oder

    (param1, param2, ..., paramN) => { return expression; }

Beispiel:

.. code-block:: javascript

    // Normale Funktion
    function add(a, b) {
        return a + b;
    }

    // Pfeilfunktion
    var add = (a, b) => a + b;

In diesem Beispiel wird die Funktion add mit einer Pfeilfunktion definiert, die zwei Parameter a und b akzeptiert und die Summe der beiden zurückgibt. Die Pfeilfunktion ist kürzer und prägnanter als die normale Funktion.

Vorteile von Arrow-Funktionen:

- Kürzere Syntax: Pfeilfunktionen bieten eine kürzere und prägnantere Syntax im Vergleich zu normalen Funktionen.
- Kein Bindungskontext: Pfeilfunktionen haben keinen eigenen Bindungskontext (this), was zu weniger Verwirrung führt.
- Implizite Rückgabe: Pfeilfunktionen ermöglichen eine implizite Rückgabe, wenn nur ein Ausdruck vorhanden ist.

Arrow-Funktionen sind eine nützliche Funktionssyntax in JavaScript, die es Entwicklern ermöglicht, Funktionen auf eine kürzere und prägnantere Weise zu definieren. Sie sind besonders nützlich für einfache Funktionen, die nur eine Zeile Code enthalten.

