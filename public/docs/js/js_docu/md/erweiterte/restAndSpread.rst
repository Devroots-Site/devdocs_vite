Spread und Rest Operatoren
=====================================

In JavaScript sind sowohl der Spread- als auch der Rest-Operator moderne ES6-Funktionen, die oft verwendet werden, um Arrays und Objekte eleganter zu manipulieren. In diesem Dokument werden beide Operatoren anhand von Beispielen mit Obst und Essen erklärt. Du wirst verstehen, was sie tun und wie man sie in der Praxis einsetzt.

📖 **Spread-Operator (`...`)**
---------------------------------

Der Spread-Operator wird verwendet, um Elemente eines Arrays oder Objekts zu "entpacken" und in einem anderen Kontext zu verwenden. Er kann ein Array aufbrechen und seine Einzelteile an einer neuen Stelle einsetzen. Bei Objekten kann er ebenfalls die Eigenschaften entpacken und kopieren.

**Beispiel:**
Stell dir vor, du hast zwei Arrays: eines mit Obst und eines mit verschiedenen Essenssorten. Du möchtest beide Arrays kombinieren.

.. code-block:: javascript

    const obst = ['Apfel', 'Banane', 'Kirsche'];
    const essen = ['Pizza', 'Burger', 'Salat'];

    const kombination = [...obst, ...essen];
    console.log(kombination); 

📌 **Ergebnis:**

    ['Apfel', 'Banane', 'Kirsche', 'Pizza', 'Burger', 'Salat']


💡 **Was passiert hier?**

Der Spread-Operator `...` "entpackt" die Inhalte der Arrays `obst` und `essen` und kombiniert sie in einem neuen Array. Es ist eine elegante Methode, um Arrays zusammenzuführen, ohne explizit eine Schleife zu verwenden.

📝 **Weitere Beispiele:**
- **Kopieren eines Arrays:** 

.. code-block:: javascript

    const obstKopie = [...obst];

- **Funktion mit mehreren Argumenten:** 

.. code-block:: javascript

    Math.max(...zahlenArray);

📖 **Rest-Operator (`...`)**
-----------------------------

Der Rest-Operator wird verwendet, um mehrere Elemente zu einem einzigen Array zusammenzufassen. Dies geschieht häufig in Funktionsdefinitionen, wenn man eine unbestimmte Anzahl von Argumenten akzeptieren möchte.

**Beispiel:**
Angenommen, du hast eine Funktion, die eine bestimmte Anzahl von Obstsorten entgegennimmt, aber du möchtest alle zusätzlichen Argumente als "Essen" kategorisieren.

.. code-block:: javascript

    function kategorisiereObstUndEssen(obst1, obst2, ...essen) {
        console.log(`Obst: ${obst1}, ${obst2}`);
        console.log(`Essen: ${essen}`);
    }

    kategorisiereObstUndEssen('Apfel', 'Banane', 'Pizza', 'Burger', 'Salat');

📌 **Ergebnis:**
    Obst: Apfel, Banane Essen: ['Pizza', 'Burger', 'Salat']


💡 **Was passiert hier?**

In diesem Fall werden die ersten beiden Argumente (`obst1` und `obst2`) als feste Werte für Obst verwendet, während der Rest-Operator `...essen` den Rest der übergebenen Argumente in ein Array namens `essen` aufnimmt. So können wir eine flexible Anzahl von Argumenten übergeben, ohne sie manuell aufteilen zu müssen.

📝 **Weitere Beispiele:**
- **Summieren einer beliebigen Anzahl von Zahlen:** 

.. code-block:: javascript

    function summe(...zahlen) {
        return zahlen.reduce((a, b) => a + b, 0);
    }

    console.log(summe(1, 2, 3, 4)); // Ausgabe: 10
