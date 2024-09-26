Log 🔐
=====================

Diese Dokumentation beschreibt die Verwendung des `git log`-Befehls zur Anzeige von Commit-Verläufen in Git,
einschließlich der Option zur Darstellung als grafischer Verlauf sowie weiterer nützlicher Schalter, um 
spezifische Informationen anzuzeigen.

Grundlegende Darstellung eines Git Logs 🎯
-------------------------------------------------

Um eine einfache grafische Darstellung des Commit-Verlaufs inklusive Branches und Merge-Punkten zu erhalten,
kann folgender Befehl verwendet werden:

.. code-block:: bash

   git log --graph --all --decorate --oneline

Beschreibung der verwendeten Schalter:

- ``--graph``: Zeigt den Commit-Verlauf als ASCII-Graph an.
- ``--all``: Zeigt alle Branches an (nicht nur den aktuellen).
- ``--decorate``: Zeigt Referenzen wie Branches und Tags bei den Commits an.
- ``--oneline``: Zeigt jede Commit-Zeile in einer kompakten Form (eine Zeile pro Commit).

Erweiterte Optionen für git log 🤍
-----------------------------------------

Git bietet eine Reihe von Schaltern, um den Commit-Verlauf nach unterschiedlichen Kriterien anzuzeigen. Hier sind 
einige nützliche Optionen, um die Ausgabe zu verfeinern.

Commit-Details anzeigen
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Um mehr Details über die Commits anzuzeigen, kann man `git log` mit folgenden Schaltern kombinieren:

- ``--pretty=format:"%h - %an, %ar : %s"``  
  Formatierte Ausgabe der Commits: zeigt den Commit-Hash, den Autor, das relative Datum und die Commit-Nachricht an.

- ``--stat``  
  Zeigt die Statistik der geänderten Dateien an (welche Dateien geändert wurden und wie viele Zeilen hinzugefügt oder 
  gelöscht wurden).

- ``-p``  
  Zeigt den kompletten Patch für jeden Commit, also die tatsächlichen Codeänderungen.

Einschränkung auf einen bestimmten Zeitraum
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Mit den folgenden Optionen kann die Ausgabe auf bestimmte Zeiträume oder Kriterien eingeschränkt werden:

- ``--since="2 weeks ago"`` oder ``--since="2023-01-01"``  
  Zeigt nur Commits, die nach einem bestimmten Datum gemacht wurden.

- ``--author="Name"``  
  Zeigt nur Commits, die von einem bestimmten Autor gemacht wurden.

- ``--grep="Bugfix"``  
  Filtert nach Commit-Nachrichten, die ein bestimmtes Schlüsselwort enthalten.

Branch- und dateispezifische Logs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wenn man nur den Verlauf eines bestimmten Branches oder einer Datei sehen möchte, helfen diese Schalter:

- ``git log master..feature-branch``  
  Zeigt alle Commits, die im Branch ``feature-branch`` vorhanden sind, aber nicht im ``master``.

- ``git log -- <filename>``  
  Zeigt den Verlauf für eine bestimmte Datei an.

Beispiel für detaillierte Commit-Logs 🧬
-----------------------------------------------

Der folgende Befehl zeigt eine detaillierte Ausgabe der Commits mit einem ASCII-Graphen:

.. code-block:: bash

   git log --graph --all --decorate --pretty=format:"%h %ad | %s%d [%an]" --date=short

Dieser Befehl zeigt:

- Den ASCII-Graphen des Commits.
- Den Commit-Hash (``%h``), das Datum (``%ad``), die Commit-Nachricht (``%s``), Referenzen wie Branches und Tags 
  (``%d``) und den Autor (``%an``).
- Das Datum wird im kurzen Format (YYYY-MM-DD) angezeigt durch ``--date=short``.

Beispielhafte Ausgabe:

.. code-block:: bash

   * 9fceb02 (HEAD -> master) 2023-09-25 | Update README.md (HEAD -> master) [John Doe]
   * 7d2d76a 2023-09-23 | Initial commit [Jane Doe]

Fazit 🤓
--------------

Mit den vielfältigen Optionen des `git log`-Befehls kann der Commit-Verlauf genau an die individuellen Bedürfnisse 
angepasst werden. Ob eine kompakte Übersicht oder detaillierte Informationen über Änderungen, Autoren und Zeiträume 
erforderlich sind, `git log` bietet eine flexible und leistungsfähige Möglichkeit, den Projektverlauf zu analysieren.