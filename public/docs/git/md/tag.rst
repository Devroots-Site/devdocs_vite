Tags 🏷️
============

Was ist ein Git Tag? 🤔
--------------------------
Ein *Tag* in Git ist ein spezieller Referenzpunkt in der Versionshistorie. Tags werden häufig verwendet, um Meilensteine wie Software-Releases zu kennzeichnen. Tags sind unveränderlich, was bedeutet, dass sie fest mit einem bestimmten Commit verbunden sind.

Typen von Tags 😱
-----------------------
- **Leichte Tags**: Ein einfacher Verweis auf einen Commit.
- **Annotierte Tags**: Enthalten zusätzliche Informationen wie Ersteller, Datum, eine Nachricht und werden als separate Objekte im Repository gespeichert.

Vorteile 🤌
-----------------
- **Versionsverwaltung**: Ermöglicht die einfache Rückverfolgung von Versionen oder Releases.
- **Sichtbarkeit**: Markiert wichtige Meilensteine wie `v1.0`, `v2.0`, usw.
- **Unveränderbarkeit**: Einmal erstellt, kann ein Tag nicht mehr verändert werden, was die Integrität bewahrt.
- **Integration**: Wird oft in CI/CD-Systemen genutzt, um z.B. automatische Releases auszulösen.

Nachteile 💣
-------------------
- **Statische Natur**: Tags sind unveränderlich, was bedeutet, dass Fehler in einem Tag durch Löschen und Neuanlegen korrigiert werden müssen.
- **Kein Branching**: Tags bieten keine Möglichkeit zur Weiterentwicklung wie Branches; sie dienen nur als Markierungen.
- **Kein automatisches Merging**: Tags enthalten keinen Mechanismus zur Zusammenführung von Änderungen wie Branches.

Tag erstellen ✒️
-----------------------
So erstellst du einen Tag:

.. code-block:: bash

   git tag <tagname>

Um einen annotierten Tag zu erstellen:

.. code-block:: bash

   git tag -a <tagname> -m "Nachricht"

Tag anzeigen 🫵
-------------------
Um alle Tags anzuzeigen:

.. code-block:: bash

   git tag

Tag löschen 🚮
--------------------
Um einen lokalen Tag zu löschen:

.. code-block:: bash

   git tag -d <tagname>

Um einen entfernten Tag zu löschen:

.. code-block:: bash

   git push origin --delete <tagname>

Tag veröffentlichen 💯
--------------------------
Um einen Tag ins Remote-Repository zu pushen:

.. code-block:: bash

   git push origin <tagname>

Fazit 🤓
------------
Git Tags sind ein nützliches Tool zur Versionsverwaltung, vor allem für Releases. Sie sind unveränderlich und leicht zu erstellen, bringen jedoch auch Einschränkungen mit sich, wenn es um Flexibilität und Änderungen geht.
