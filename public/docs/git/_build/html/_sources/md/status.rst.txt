Status 🟢
=====================

**git status** ist ein wichtiger Befehl in Git, der den aktuellen Zustand des Repositories anzeigt. Er gibt einen Überblick über Änderungen, die zum Commit anstehen, untracked Files sowie den Zustand des Arbeitsverzeichnisses und des Staging-Bereichs.

Grundfunktion ✨
-----------------

Der Befehl ``git status`` wird genutzt, um Informationen über den Arbeitsbaum und den Staging-Bereich eines Repositories abzurufen. Dies ist hilfreich, um zu verstehen, welche Änderungen noch nicht versioniert (committed) wurden und welche Dateien neu hinzugefügt oder gelöscht wurden.

Beispiel:

.. code-block:: bash

    git status

Dieser Befehl gibt eine Übersicht über den Zustand des Repositories, etwa ob Dateien geändert oder hinzugefügt wurden, ob sie bereits im Staging-Bereich liegen oder noch untracked sind.

Vorteile 👍
-----------

- **Überblick:** Bietet einen schnellen und klaren Überblick über den Status des Arbeitsverzeichnisses.
- **Fehlervermeidung:** Zeigt, ob Änderungen vergessen wurden zu committen oder Dateien noch nicht versioniert sind.
- **Effizientes Arbeiten:** Git-Nutzer können mit ``git status`` sicherstellen, dass sie keine wichtigen Schritte übersehen.

Wichtige Informationen ℹ️
--------------------------

Der ``git status`` Befehl zeigt verschiedene Zustände von Dateien an:

- **Untracked Files:** Dateien, die im Repository-Verzeichnis existieren, aber nicht versioniert (nicht im Staging-Bereich).
- **Modified Files:** Dateien, die geändert wurden, aber noch nicht in den Staging-Bereich verschoben wurden.
- **Staged Files:** Dateien, die für den nächsten Commit vorgemerkt sind.

Wichtige Optionen 🔘
---------------------

Während ``git status`` oft ohne Parameter verwendet wird, gibt es einige nützliche Optionen:

- ``git status -s`` / ``--short``: Zeigt eine kurze und kompakte Übersicht über den Status.

  Beispiel:

  .. code-block:: bash

      git status -s

- ``git status -b``: Zeigt zusätzliche Informationen über den aktuellen Branch, auf dem man sich befindet.

  Beispiel:

  .. code-block:: bash

      git status -b

Fazit 🤓
--------

Der Befehl ``git status`` ist unverzichtbar, um den aktuellen Zustand des Arbeitsverzeichnisses und des Staging-Bereichs zu überprüfen. Mit den zusätzlichen Optionen kann der Status noch kompakter und detaillierter dargestellt werden.