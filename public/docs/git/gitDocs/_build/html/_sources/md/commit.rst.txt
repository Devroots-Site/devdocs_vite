Commit 📦
=================

**git commit** ist ein grundlegender Befehl in Git, der es ermöglicht, Änderungen im Staging-Bereich dauerhaft in das Repository zu übernehmen. Jeder Commit speichert einen neuen Snapshot des Projektzustands und enthält eine Nachricht, die die Änderungen beschreibt.

Grundfunktion
----------------

Der Befehl ``git commit`` nimmt alle Änderungen, die sich im Staging-Bereich befinden, und speichert sie dauerhaft im lokalen Repository. Jeder Commit erstellt dabei eine eindeutige Version des Projekts, die jederzeit wiederhergestellt werden kann.

Beispiel:

.. code-block:: bash

    git commit 

In diesem Beispiel wird ein Commit erstellt der hinterlegte Editor wird dann geöffnet um eine Commit Message zu hinterlegen. 

Vorteile
--------

- **Versionierung:** Jeder Commit erstellt eine neue Version des Projekts, die bei Bedarf wiederhergestellt werden kann.
- **Nachverfolgbarkeit:** Durch Commit-Nachrichten lässt sich der Verlauf von Änderungen leicht nachvollziehen.
- **Zusammenarbeit:** Commits ermöglichen es, Änderungen strukturiert zu teilen und so eine effiziente Zusammenarbeit im Team zu fördern.

Wichtige Informationen
----------------------

- **Commit-Nachricht:** Die Nachricht sollte kurz und prägnant den Zweck der Änderungen beschreiben.
- **Commit-Objekte:** Ein Commit enthält Informationen über den aktuellen Stand des Repositories, die Commit-Nachricht, den Autor und den Eltern-Commit (den vorherigen Zustand).

Wichtige Optionen
-----------------

Es gibt verschiedene Optionen, um den Commit-Prozess zu verfeinern:

- ``git commit -m "Nachricht"``: Erlaubt es, direkt eine Commit-Nachricht anzugeben, ohne einen Editor zu öffnen.

  Beispiel:

  .. code-block:: bash

      git commit -m "Fehlerbehebung in der Login-Logik"

- ``git commit -a``: Automatisch alle geänderten und bereits versionierten Dateien dem Commit hinzufügen, ohne sie explizit stagen zu müssen.

  Beispiel:

  .. code-block:: bash

      git commit -a -m "Alle Änderungen committed"

- ``git commit --amend``: Erlaubt es, den letzten Commit zu ändern, entweder um die Commit-Nachricht oder den Inhalt anzupassen.

  Beispiel:

  .. code-block:: bash

      git commit --amend -m "Verbesserte Commit-Nachricht"

Fazit
-----

Der Befehl ``git commit`` ist essenziell, um Änderungen im Repository zu speichern. Mit verschiedenen Optionen kann der Commit-Prozess angepasst und effizienter gestaltet werden. Eine gut formulierte Commit-Nachricht ist dabei entscheidend, um die Nachverfolgbarkeit zu gewährleisten.