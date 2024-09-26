Stash 🔒
=========

Was ist ein Git Stash?
-------------------------
Git *Stash* ermöglicht es dir, lokale Änderungen temporär zu speichern, ohne sie zu committen. Es ist nützlich, wenn du an etwas arbeitest und kurzfristig auf einen anderen Branch wechseln oder den aktuellen Stand aufräumen musst, ohne deine ungesicherten Änderungen zu verlieren.

Vorteile 🤌
-----------
- **Flexibilität**: Du kannst jederzeit zu einem sauberen Zustand zurückkehren und später deine Arbeit fortsetzen.
- **Mehrere Stashes**: Es ist möglich, mehrere Stashes zu speichern und bei Bedarf darauf zuzugreifen.
- **Branch-Wechsel ohne Commit**: Du kannst den Branch wechseln, ohne deine aktuellen Änderungen zu committen oder zu verlieren.

Nachteile 💣
------------
- **Vergessene Stashes**: Wenn du nicht aufpasst, kannst du gestashte Änderungen vergessen, was zu Verwirrung führen kann.
- **Kein automatisches Tracking**: Im Gegensatz zu Commits gibt es keine automatische Sichtbarkeit für gestashte Änderungen. Du musst selbst den Überblick behalten.
- **Komplexe Konflikte**: Bei Konflikten beim Anwenden eines Stashes kann die Wiederherstellung schwierig werden.

Stash erstellen 🥇
-------------------
Um deine aktuellen Änderungen zu stashen:

.. code-block:: bash

   git stash

Du kannst auch Änderungen inklusive der untracked Dateien stashen:

.. code-block:: bash

   git stash -u

Stash anzeigen 👀
------------------
Um alle gespeicherten Stashes anzuzeigen:

.. code-block:: bash

   git stash list

Stash anwenden 🫦
---------------------
Um die zuletzt gestashte Änderung wieder anzuwenden:

.. code-block:: bash

   git stash apply

Falls du einen bestimmten Stash anwenden möchtest:

.. code-block:: bash

   git stash apply stash@{index}

Beachte: `index` ist die Nummer des Stashes in der Liste.

Stash löschen 💣
-----------------
Nachdem du einen Stash angewendet hast, kannst du ihn löschen:

.. code-block:: bash

   git stash drop

Um alle Stashes zu löschen:

.. code-block:: bash

   git stash clear

Stash in einen Commit umwandeln 🫂
---------------------------------------
Wenn du einen Stash direkt in einen Commit umwandeln möchtest:

.. code-block:: bash

   git stash pop

Dieser Befehl wendet den Stash an und entfernt ihn gleichzeitig aus der Stash-Liste.

Fazit 🤓
---------
Git Stash ist ein mächtiges Werkzeug, um temporäre Änderungen zu speichern und bei Bedarf wiederherzustellen. Es bietet eine große Flexibilität, erfordert aber auch etwas Disziplin, um die Übersicht über gestashte Änderungen zu behalten.
