Module
================

Module sind eine Möglichkeit, den Code in mehrere Dateien aufzuteilen. Dies ist besonders nützlich, wenn der Code sehr groß wird und es schwierig wird, ihn zu verwalten. Module können Funktionen, Klassen und Variablen enthalten. Ein Modul ist eine Datei, die Python-Code enthält.

Es gibt verschiedene Möglichkeiten, Module in JavaScript zu erstellen und zu verwenden:

- **CommonJS-Module** - Dies ist eine der ältesten Methoden, um Module in JavaScript zu erstellen. Es verwendet die `require`- und `module.exports`-Syntax, um Module zu importieren und zu exportieren.
- **ES6-Module** - Dies ist die neueste Methode, um Module in JavaScript zu erstellen. Es verwendet die `import`- und `export`-Syntax, um Module zu importieren und zu exportieren.

Um das Modul verwenden zu können muss dies in der HTML datei auch eingebunden werden.

Beispiel:

.. code-block:: javascript
    
    <script type="module" src="main.mjs"></script>



.. code-block:: javascript

    // Modul exportieren
    export function add(a, b) {
        return a + b;
    }

    // Modul importieren
    import { add } from './module.js';
