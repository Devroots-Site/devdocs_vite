regex
============

Regex ist die Kurzform für **Regular Expressions**, also reguläre Ausdrücke. Diese sind eine mächtige Möglichkeit, um Texte zu durchsuchen und zu bearbeiten. Sie sind in vielen Programmiersprachen verfügbar und können auch in JavaScript verwendet werden.

Erstellen eines regulären Ausdrucks
-----------------------------------

Reguläre Ausdrücke werden in JavaScript durch den Konstruktor ``RegExp`` erstellt. Es gibt zwei Möglichkeiten, einen regulären Ausdruck zu erstellen:

.. list-table::
   :header-rows: 1

   * - Einflusssuche
     - Beschreibung
     - Beispiel
   * - ``[abc]``
     - Findet eines der Zeichen zwischen den Klammern
     - .. code-block:: javascript

            let regEx = /[abc]/;
            let text = 'abcde';
            console.log(regEx.test(text)); // true
   * - ``[0-9]``
     - Findet eines der Zeichen zwischen den Klammern
     - .. code-block:: javascript

            let regEx = /[0-9]/;
            let text = 'abcde';
            console.log(regEx.test(text)); // false
   * - ``[a-z]``
     - Findet eines der Zeichen zwischen den Klammern (Kleinschreibung)
     - .. code-block:: javascript

            let regEx = /[a-z]/;
            let text = 'abcde';
            console.log(regEx.test(text)); // true
   * - ``[A-Z]``
     - Findet eines der Zeichen zwischen den Klammern (Großschreibung)
     - .. code-block:: javascript

            let regEx = /[A-Z]/;
            let text = 'abcde';
            console.log(regEx.test(text)); // false
   * - ``[A-z]``
     - Findet eines der Zeichen zwischen den Klammern (Klein und Groß)
     - .. code-block:: javascript

            let regEx = /[A-z]/;
            let text = 'abcde';
            console.log(regEx.test(text)); // true
   * - ``[^abc]``
     - Findet eines der Zeichen, die nicht zwischen den Klammern stehen
     - .. code-block:: javascript

            let regEx = /[^abc]/;
            let text = 'abcde';
            console.log(regEx.test(text)); // false
   * - ``[^0-9]``
     - Findet eines der Zeichen, die nicht zwischen den Klammern stehen
     - .. code-block:: javascript

            let regEx = /[^0-9]/;
            let text = 'abcde';
            console.log(regEx.test(text)); // true
   * - ``[^a-z]``
     - Findet eines der Zeichen, die nicht zwischen den Klammern stehen
     - .. code-block:: javascript

            let regEx = /[^a-z]/;
            let text = 'abcde';
            console.log(regEx.test(text)); // false
   * - ``[\W_]``
     - Findet eines der Zeichen, die nicht alphanumerisch sind
     - .. code-block:: javascript

            let regEx = /[\W_]/;
            let text = 'abcde';
            console.log(regEx.test(text)); // false
   * - ``\d``
     - Findet eine Ziffer
     - .. code-block:: javascript

            let regEx = /\d/;
            let text = 'abcde';
            console.log(regEx.test(text)); // false
   * - ``\D``
     - Findet eine Nicht-Ziffer
     - .. code-block:: javascript

            let regEx = /\D/;
            let text = 'abcde';
            console.log(regEx.test(text)); // true
   * - ``\w``
     - Findet ein alphanumerisches Zeichen
     - .. code-block:: javascript

            let regEx = /\w/;
            let text = 'abcde';
            console.log(regEx.test(text)); // true
   * - ``\W``
     - Findet ein Nicht-alphanumerisches Zeichen
     - .. code-block:: javascript

            let regEx = /\W/;
            let text = 'abcde';
            console.log(regEx.test(text)); // false

Sonderzeichen
-------------------

In regulären Ausdrücken gibt es einige Sonderzeichen, die eine besondere Bedeutung haben. Hier sind einige Beispiele:

.. code-block:: javascript

    let regEx = /@/;
    let text = 'abc@de';
    console.log(regEx.test(text)); // true

Testen von RegEx
-------------------

Um zu überprüfen, ob ein regulärer Ausdruck in einem Text vorhanden ist, kann die Methode ``test()`` verwendet werden. Diese gibt ``true`` zurück, wenn der reguläre Ausdruck gefunden wurde, und ``false``, wenn nicht.

.. code-block:: javascript

    let regEx = /abc/;
    let text = 'abcde';
    console.log(regEx.test(text)); // true

Suchen von RegEx
-----------------------

Um alle Vorkommen eines regulären Ausdrucks in einem Text zu finden, kann die Methode ``match()`` verwendet werden. Diese gibt ein Array mit den gefundenen Übereinstimmungen zurück.

.. code-block:: javascript

    let regEx = /abc/;
    let text = 'abcdeabc';
    console.log(text.match(regEx)); // ['abc', 'abc']
    // oder 

    let regEx = /abc/g;
    let text = 'abcdeabc';
    console.log(text.search(regEx)); // 0


Ersetzen von RegEx
-------------------------

Um alle Vorkommen eines regulären Ausdrucks in einem Text zu ersetzen, kann die Methode ``replace()`` verwendet werden. Diese gibt den Text mit den ersetzen Übereinstimmungen zurück.

.. code-block:: javascript

    let regEx = /abc/;
    let text = 'abcdeabc';
    console.log(text.replace(regEx, 'xyz')); // 'xyzdeabc'

    // oder

    let regEx = /abc/g;
    let text = 'abcdeabc';
    console.log(text.replace(regEx, 'xyz')); // 'xyzdexyz'

Regex-Flags
-----------------

Reguläre Ausdrücke können auch mit Flags versehen werden, um das Verhalten zu steuern. Hier sind einige Beispiele:

.. list-table::
   :header-rows: 1

   * - Flag
     - Beschreibung
     - Beispiel
   * - ``g``
     - Globale Suche (findet alle Vorkommen)
     - .. code-block:: javascript

            let regEx = /abc/g;
            let text = 'abcdeabc';
            console.log(text.match(regEx)); // ['abc', 'abc']
   * - ``i``
     - Groß-/Kleinschreibung ignorieren
     - .. code-block:: javascript

            let regEx = /abc/i;
            let text = 'Abcdeabc';
            console.log(text.match(regEx)); // ['Abc', 'abc']
   * - ``m``
     - Mehrzeilensuche
     - .. code-block:: javascript

            let regEx = /^abc/m;
            let text = 'abcde\nabc';
            console.log(text.match(regEx)); // ['abc', 'abc']


Modifyer
---------------

Reguläre Ausdrücke können auch mit Modifyern versehen werden, um das Verhalten zu steuern. Hier sind einige Beispiele:

.. list-table::
   :header-rows: 1

   * - Modifikator
     - Beschreibung
     - Beispiel
   * - ``.`` 
     - Steht für ein beliebiges Zeichen außer Zeilenumbrüche
     - .. code-block:: javascript

            let regEx = /a.c/;
            let text = 'abc';
            console.log(regEx.test(text)); // true
   * - ``^``
     - Startet mit einem bestimmten Zeichen oder Muster
     - .. code-block:: javascript

            let regEx = /^a/;
            let text = 'abc';
            console.log(regEx.test(text)); // true
   * - ``$``
     - Endet mit einem bestimmten Zeichen oder Muster
     - .. code-block:: javascript

            let regEx = /c$/;
            let text = 'abc';
            console.log(regEx.test(text)); // true
   * - ``*``
     - Findet 0 oder mehr Wiederholungen des vorherigen Zeichens oder Musters
     - .. code-block:: javascript

            let regEx = /ab*c/;
            let text = 'abc';
            console.log(regEx.test(text)); // true
   * - ``+``
     - Findet 1 oder mehr Wiederholungen des vorherigen Zeichens oder Musters
     - .. code-block:: javascript

            let regEx = /ab+c/;
            let text = 'abc';
            console.log(regEx.test(text)); // true
   * - ``?``
     - Findet 0 oder 1 Wiederholung des vorherigen Zeichens oder Musters (macht das Zeichen oder Muster optional)
     - .. code-block:: javascript

            let regEx = /ab?c/;
            let text = 'abc';
            console.log(regEx.test(text)); // true
   * - ``\``
     - Maskiert spezielle Zeichen, um sie als Literale zu verwenden
     - .. code-block:: javascript

            let regEx = /\./;
            let text = 'a.c';
            console.log(regEx.test(text)); // true
   * - ``|``
     - Logisches ODER; findet entweder das eine oder das andere Muster
     - .. code-block:: javascript

            let regEx = /a|b/;
            let text = 'a';
            console.log(regEx.test(text)); // true
   * - ``{}``
     - Bestimmt eine genaue Anzahl oder einen Bereich von Wiederholungen für das vorherige Zeichen oder Muster
     - .. code-block:: javascript

            let regEx = /a{2}/;
            let text = 'aa';
            console.log(regEx.test(text)); // true
   * - ``[]``
     - Findet eines der Zeichen zwischen den Klammern
     - .. code-block:: javascript

            let regEx = /[abc]/;
            let text = 'a';
            console.log(regEx.test(text)); // true
   * - ``()`` 
     - Gruppiert Zeichen oder Muster
     - .. code-block:: javascript

            let regEx = /(abc)/;
            let text = 'abc';
            console.log(regEx.test(text)); // true
   * - ``\b``
     - Findet eine Wortgrenze
     - .. code-block:: javascript

            let regEx = /\bword\b/;
            let text = 'word';
            console.log(regEx.test(text)); // true
   * - ``\B``
     - Findet keine Wortgrenze
     - .. code-block:: javascript

            let regEx = /\Bword/;
            let text = 'password';
            console.log(regEx.test(text)); // true
   * - ``\d``
     - Findet eine Ziffer
     - .. code-block:: javascript

            let regEx = /\d/;
            let text = '123';
            console.log(regEx.test(text)); // true
   * - ``\D``
     - Findet eine Nicht-Ziffer
     - .. code-block:: javascript

            let regEx = /\D/;
            let text = 'abc';
            console.log(regEx.test(text)); // true
   * - ``\w``
     - Findet ein alphanumerisches Zeichen (einschließlich Unterstrich)
     - .. code-block:: javascript

            let regEx = /\w/;
            let text = 'abc';
            console.log(regEx.test(text)); // true
   * - ``\W``
     - Findet ein Nicht-alphanumerisches Zeichen
     - .. code-block:: javascript

            let regEx = /\W/;
            let text = '@';
            console.log(regEx.test(text)); // true
   * - ``\s``
     - Findet ein Leerzeichen, Tabulator oder Zeilenumbruch
     - .. code-block:: javascript

            let regEx = /\s/;
            let text = ' ';
            console.log(regEx.test(text)); // true
   * - ``\S``
     - Findet ein Nicht-Leerzeichen
     - .. code-block:: javascript

            let regEx = /\S/;
            let text = 'a';
            console.log(regEx.test(text)); // true
            


Include statt Regex 
---------------------------

.. code-block:: javascript
    
        let text = 'abcde';
        console.log(text.includes('abc')); // true
    
        let text = 'abcde';
        console.log(text.includes('xyz')); // false
