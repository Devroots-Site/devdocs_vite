Tabellen  📖
=================================

In reStructuredText gibt es zwei Hauptmethoden, um Tabellen zu erstellen: die einfache Tabellen-Syntax und die fortgeschrittene Methode mit der `.. table::` Directive. Diese Datei zeigt beide Methoden und erklärt ihre Verwendung.

Einfache Tabellen 📊
----------------------------

Die einfache Tabellen-Syntax ist gut geeignet für kleinere Tabellen mit fester Spaltenbreite. Diese Methode verwendet nur Zeichen wie `+`, `-` und `|` zur Strukturierung der Tabelle.

**Beispiel für eine einfache Tabelle:**

+-----------------+----------------+--------------------------+
| **Name**        | **Alter**      | **Beruf**                |
+=================+================+==========================+
| Max Mustermann  | 28             | Softwareentwickler       |
+-----------------+----------------+--------------------------+
| Erika Mustermann| 35             | Datenanalystin           |
+-----------------+----------------+--------------------------+
| John Doe        | 45             | Projektmanager           |
+-----------------+----------------+--------------------------+

**Erklärung der Syntax:**

- **Kopfzeile:** Wird durch eine Zeile mit `+`, `-` und `|` über und unter den Spaltenüberschriften gekennzeichnet. Die Trennzeichen `+` und `|` definieren die Spalten, während `-` die Trennlinien bilden.
- **Zeileninhalte:** Die Zelleninhalte werden ebenfalls durch `|` getrennt, und jede Zeile wird mit `+` und `-` abgeschlossen.

Syntax 🗒️
^^^^^^^^^^

.. code-block:: rst

    +-----------------+----------------+--------------------------+
    | **Name**        | **Alter**      | **Beruf**                |
    +=================+================+==========================+
    | Max Mustermann  | 28             | Softwareentwickler       |
    +-----------------+----------------+--------------------------+
    | Erika Mustermann| 35             | Datenanalystin           |
    +-----------------+----------------+--------------------------+
    | John Doe        | 45             | Projektmanager           |
    +-----------------+----------------+--------------------------+

.. important:: 
    Hier ist zu beachten das die Spaltenbreite fest ist und nicht variabel.
    Das heißt es + muss unter / über `|` sein und die Zeilen müssen gleich lang sein.


Fortgeschrittene Tabellen mit `.. table::` 🚀
--------------------------------------------------

Die `.. table::` Directive bietet mehr Flexibilität und Kontrolle über die Darstellung von Tabellen. Diese Methode ist besonders nützlich für komplexe Tabellen mit variablen Spaltenbreiten und erweiterter Formatierung.

**Beispiel für eine Tabelle mit `.. table::`:**

.. table:: Übersicht der Berufe
   :widths: 25 15 40
   :align: center
   :class: custom-table

   +-----------------------+------------------+--------------------------------+
   | **Name**              | **Alter**        | **Beruf**                      |
   +=======================+==================+================================+
   | Max Mustermann        | 28               | Softwareentwickler             |
   +-----------------------+------------------+--------------------------------+
   | Erika Mustermann      | 35               | Datenanalystin                 |
   +-----------------------+------------------+--------------------------------+
   | John Doe              | 45               | Projektmanager                 |
   +-----------------------+------------------+--------------------------------+

**Erklärung der Syntax:**

- **`.. table::` Directive:** Diese Directive leitet die Erstellung der Tabelle ein. Die Tabellenüberschrift kann optional durch einen Titel in der Direktive definiert werden.
  
- **Optionen:**
    - `:widths:` Diese Option definiert die relative Breite der Spalten. Hier werden die Breiten in Prozent angegeben.
    - `:align:` Diese Option legt die Ausrichtung der Spalten fest, z.B. `center`, `left` oder `right`.
    - `:class:` Diese Option ermöglicht die Verwendung von benutzerdefinierten CSS-Klassen für die Tabelle.
    - Weitere Optionen finden Sie in der Sphinx-Dokumentation.
        

  
- **Tabellenstruktur:** Innerhalb der Tabelle verwenden Sie `+`, `-` und `|` genau wie bei der einfachen Methode. 

Syntax Tabelle 🗒️
^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: rst

    .. table:: Übersicht der Berufe
       :widths: 25 15 40
       :align: center
       :class: custom-table

       +-----------------------+------------------+--------------------------------+
       | **Name**              | **Alter**        | **Beruf**                      |
       +=======================+==================+================================+
       | Max Mustermann        | 28               | Softwareentwickler             |
       +-----------------------+------------------+--------------------------------+
       | Erika Mustermann      | 35               | Datenanalystin                 |
       +-----------------------+------------------+--------------------------------+
       | John Doe              | 45               | Projektmanager                 |
       +-----------------------+------------------+--------------------------------+


Vergleich der Methoden 🔄
----------------------------------

- **Einfache Tabellen:**
  - Vorteil: Schnell und einfach zu erstellen.
  - Nachteil: Begrenzte Flexibilität bei der Gestaltung, insbesondere bei komplexeren Layouts.

- **Fortgeschrittene Tabellen mit `.. table::`:**
  - Vorteil: Mehr Kontrolle über das Layout und die Formatierung.
  - Nachteil: Erfordert eine detailliertere Syntax und Planung.

Anwendungsbeispiele 📝
-------------------------------

Hier sind einige Beispiele, wann welche Methode verwendet werden sollte:

1. **Einfache Tabellen:** Verwenden Sie diese Methode, wenn Sie einfache Daten präsentieren müssen, wie z.B. eine kurze Liste von Personen und deren Eigenschaften.

2. **Fortgeschrittene Tabellen:** Verwenden Sie diese Methode, wenn Sie komplexere Daten darstellen müssen, insbesondere wenn die Spaltenbreiten variieren oder wenn Sie erweiterte Formatierungen benötigen.


List Tabellen 📒
========================================

In reStructuredText können Sie Tabellen in Listenform erstellen, was eine einfache und flexible Möglichkeit bietet, strukturierte Daten darzustellen. Diese Methode ist besonders nützlich, wenn Sie eine kompakte Tabelle erstellen möchten, bei der die Zeilen als Listenelemente behandelt werden.

**Beispiel für eine Listen-Tabelle:** 

.. list-table:: Title
   :widths: 25 25 50
   :header-rows: 1

   * - Heading row 1, column 1
     - Heading row 1, column 2
     - Heading row 1, column 3
   * - Row 1, column 1
     - 
     - Row 1, column 3
   * - Row 2, column 1
     - Row 2, column 2
     - Row 2, column 3



Syntax List Tabelle 🗒️
-----------------------------

.. code-block:: rst

    .. list-table:: Title
       :widths: 25 25 50
       :header-rows: 1

       * - Heading row 1, column 1
         - Heading row 1, column 2
         - Heading row 1, column 3
       * - Row 1, column 1
         - 
         - Row 1, column 3
       * - Row 2, column 1
         - Row 2, column 2
         - Row 2, column 3

**Erklärung der Syntax:**

- **`.. list-table::` Directive:**
  - Diese Directive leitet die Erstellung der Liste-Tabelle ein. Der Titel nach `::` wird als Tabellenüberschrift verwendet und wird oberhalb der Tabelle angezeigt.
  
Optionen für Listen-Tabellen:
-----------------------------	

- **`:widths:`**
  - Diese Option definiert die relative Breite der Spalten. Die Breiten werden als Liste von Werten angegeben, die jeweils die relative Breite der entsprechenden Spalten in Prozent festlegen.
  - **Beispiel:** `:widths: 25 25 50` bedeutet, dass die erste Spalte 25%, die zweite 25% und die dritte 50% der Gesamtbreite einnimmt.

- **`:header-rows:`**
  - Diese Option legt fest, wie viele Zeilen als Kopfzeile(n) behandelt werden. Diese Zeilen werden typischerweise hervorgehoben.
  - **Beispiel:** `:header-rows: 1` bedeutet, dass die erste Zeile als Kopfzeile behandelt wird.

- **`:stub-columns:`**
  - Diese Option gibt an, wie viele Spalten als "stubs" behandelt werden, d.h., diese Spalten bleiben bei horizontalem Scrollen sichtbar (nützlich bei großen Tabellen).
  - **Beispiel:** `:stub-columns: 1` fixiert die erste Spalte der Tabelle, wenn sie gescrollt wird.

- **`:class:`**
  - Diese Option ermöglicht das Hinzufügen einer oder mehrerer CSS-Klassen zur Tabelle, um das Styling anzupassen.
  - **Beispiel:** `:class: custom-list-table` fügt der Tabelle die CSS-Klasse `custom-list-table` hinzu, die in Ihrer CSS-Datei definiert werden kann.

- **`:align:`**
  - Diese Option legt die Ausrichtung der Tabelle fest. Mögliche Werte sind `left`, `center` und `right`.
  - **Beispiel:** `:align: center` zentriert die Tabelle auf der Seite.

Tabellenstruktur:
-----------------------------	

- **Einträge:** Jede Zeile der Tabelle wird durch ein Listenelement (`* -`) dargestellt. Spalten innerhalb einer Zeile werden durch weitere Listenelemente (`-`) getrennt.
- **Leere Zellen:** Wenn eine Zelle leer bleiben soll, können Sie einfach nur das `-` verwenden, ohne weiteren Inhalt.

Anwendungsbeispiele:
-----------------------------	

Hier sind einige Beispiele, wann und wie Sie Listen-Tabellen verwenden könnten:

1. **Kompakte Datenanzeige:** Wenn Sie eine Tabelle mit wenigen Zeilen und Spalten haben und diese einfach und übersichtlich darstellen möchten.

2. **Flexible Formatierung:** Wenn Sie mehr Kontrolle über das Layout der Tabelle benötigen, beispielsweise durch die Angabe der Spaltenbreiten oder das Hinzufügen von CSS-Klassen für individuelles Styling.

3. **Kopfzeilen und Stubs:** Verwenden Sie die Optionen `:header-rows:` und `:stub-columns:`, um wichtige Teile der Tabelle beim Scrollen sichtbar zu halten und Kopfzeilen hervorzuheben.

Erweiterte Beispiel-Tabelle: 🏷️
---------------------------------

Hier ist ein erweitertes Beispiel mit allen Optionen:

.. list-table:: Erweiterte Tabelle
   :widths: 20 30 50
   :header-rows: 1
   :stub-columns: 1
   :class: custom-table
   :align: center

   * - Name
     - Position
     - Beschreibung
   * - Max Mustermann
     - Entwickler
     - Arbeitet an verschiedenen Softwareprojekten, einschließlich Webentwicklung und Datenanalyse.
   * - Erika Mustermann
     - Analystin
     - Führt umfassende Datenanalysen durch, um Geschäftsentscheidungen zu unterstützen.
   * - John Doe
     - Manager
     - Verantwortlich für das Projektmanagement und die Teamkoordination.

Mit diesen Informationen können Sie Listentabellen in reStructuredText effizient erstellen und anpassen, um den Bedürfnissen Ihrer Dokumentation gerecht zu werden.
