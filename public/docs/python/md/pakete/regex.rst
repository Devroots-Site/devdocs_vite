re Modul
========

Das `re`-Modul in Python bietet Funktionen zur Arbeit mit regulären Ausdrücken (Regular Expressions). Es ermöglicht das Suchen, Ersetzen und Manipulieren von Zeichenfolgen basierend auf Mustern. Die folgende Tabelle bietet eine Übersicht der wichtigsten Funktionen und Methoden.

Übersicht der `re`-Funktionen und -Methoden
-------------------------------------------

.. list-table:: 
   :header-rows: 1
   :widths: 25 50 25

   * - **Funktion/Methode**
     - **Beschreibung**
     - **Beispiel**
   * - ``re.compile(pattern, flags=0)``
     - Kompiliert ein reguläres Ausdrucksmuster ``pattern`` in ein Regex-Objekt, das für spätere Suchen verwendet werden kann.
     - ``pattern = re.compile(r'\d+')``
   * - ``re.search(pattern, string, flags=0)``
     - Sucht das Muster ``pattern`` in der Zeichenkette ``string`` und gibt das erste gefundene Match-Objekt zurück.
     - ``re.search(r'\d+', 'abc123def')`` gibt ``<Match object>`` zurück
   * - ``re.match(pattern, string, flags=0)``
     - Überprüft, ob das Muster ``pattern`` am Anfang der Zeichenkette ``string`` gefunden wird.
     - ``re.match(r'abc', 'abcdef')`` gibt ``<Match object>`` zurück
   * - ``re.fullmatch(pattern, string, flags=0)``
     - Überprüft, ob das Muster ``pattern`` die gesamte Zeichenkette ``string`` abdeckt.
     - ``re.fullmatch(r'\d+', '123')`` gibt ``<Match object>`` zurück
   * - ``re.findall(pattern, string, flags=0)``
     - Gibt eine Liste aller nicht überlappenden Übereinstimmungen des Musters ``pattern`` in der Zeichenkette ``string`` zurück.
     - ``re.findall(r'\d+', 'abc123def456')`` gibt ``['123', '456']`` zurück
   * - ``re.finditer(pattern, string, flags=0)``
     - Gibt einen Iterator über alle nicht überlappenden Übereinstimmungen des Musters ``pattern`` in der Zeichenkette ``string`` zurück.
     - ``for match in re.finditer(r'\d+', 'abc123def'):`` 
   * - ``re.sub(pattern, repl, string, count=0, flags=0)``
     - Ersetzt alle Vorkommen des Musters ``pattern`` in der Zeichenkette ``string`` durch ``repl``.
     - ``re.sub(r'\d+', '#', 'abc123def')`` ergibt ``'abc#def'``
   * - ``re.subn(pattern, repl, string, count=0, flags=0)``
     - Ersetzt alle Vorkommen des Musters ``pattern`` in der Zeichenkette ``string`` durch ``repl`` und gibt die Anzahl der Ersetzungen zurück.
     - ``re.subn(r'\d+', '#', 'abc123def')`` ergibt ``('abc#def', 1)``
   * - ``re.split(pattern, string, maxsplit=0, flags=0)``
     - Teilt die Zeichenkette ``string`` an allen Vorkommen des Musters ``pattern`` und gibt eine Liste der Resultate zurück.
     - ``re.split(r'\d+', 'abc123def456')`` gibt ``['abc', 'def', '']`` zurück
   * - ``re.escape(string)``
     - Maskiert alle nicht-alphanumerischen Zeichen in der Zeichenkette ``string``, damit sie als Literale im Muster verwendet werden können.
     - ``re.escape('a.b*c')`` ergibt ``'a\\.b\\*c'``
   * - ``re.purge()``
     - Leert den regulären Ausdrucks-Cache.
     - ``re.purge()``

Erzeugen eines Regex-Objekts
----------------------------

Um ein Regex-Objekt zu erzeugen, kannst du die Funktion ``re.compile()`` verwenden. Dies ist nützlich, wenn du ein Muster mehrfach verwenden möchtest. Hier ist ein Beispiel:

.. code-block:: python

   import re

   # Ein reguläres Ausdrucksmuster kompilieren
   pattern = re.compile(r'\d+')

   # Ein Regex-Objekt verwenden, um nach dem Muster in einer Zeichenkette zu suchen
   match = pattern.search('abc123def')

   if match:
       print(match.group())  # Ausgabe: 123
