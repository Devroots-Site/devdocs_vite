
Commits rückgängig machen 🔙
=====================================

.. note::
   Diese Dokumentation beschreibt, wie man Git Commits rückgängig machen und ein Repository auf einen bestimmten Zeitpunkt zurücksetzen kann.

Einleitung 🤌
--------------------------

In der täglichen Arbeit mit Git kann es vorkommen, dass Fehler passieren, sei es durch einen falschen Commit, unerwünschte Änderungen oder durch das versehentliche Pushen von Code. Git bietet leistungsstarke Befehle, um diese Fehler zu korrigieren. In diesem Dokument behandeln wir verschiedene Methoden, um Commits rückgängig zu machen und das Repository auf einen bestimmten Zustand zurückzusetzen.

Grundlagen 🏠
--------------------------

Git verfolgt den gesamten Verlauf eines Projekts und ermöglicht es, diesen Verlauf zu verändern oder wiederherzustellen. Hier sind einige wichtige Begriffe und Befehle:

* **HEAD**: Zeigt auf den aktuellen Commit, auf dem man sich befindet.
* **Branch**: Ein Zweig im Projektverlauf.
* **Commit**: Ein Schnappschuss der Änderungen im Projekt.

Commits rückgängig machen 🚴‍♂️
------------------------------------

Es gibt verschiedene Möglichkeiten, einen Commit rückgängig zu machen. Welche Methode verwendet wird, hängt davon ab, ob der Commit bereits gepusht wurde und ob der Commit lokal bleiben oder gelöscht werden soll.

Methode 1: `git reset`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Mit dem `git reset`-Befehl kann man einen oder mehrere Commits vollständig zurücksetzen. Es gibt drei Varianten:

1. **`git reset --soft <Commit-ID>`**:

   - Setzt die Änderungen zurück, lässt sie jedoch im Staging-Bereich, sodass sie wieder committet werden können.

.. code-block:: bash 

   git reset --soft HEAD~1

2. **`git reset --mixed <Commit-ID>`** (Standard):

   - Setzt die Änderungen zurück und entfernt sie aus dem Staging-Bereich, sodass sie noch lokal vorhanden sind, aber erneut gestaged werden müssen.


.. code-block:: bash 

   git reset --mixed HEAD~1

3. **`git reset --hard <Commit-ID>`**:

   - Setzt die Änderungen vollständig zurück, einschließlich der Arbeitskopie. Alle Änderungen gehen verloren.

.. code-block:: bash 

    git reset --hard HEAD~1

.. warning::
   Seid vorsichtig mit `--hard`, da es nicht rückgängig gemacht werden kann und Änderungen unwiederbringlich verloren gehen.

Methode 2: `git revert`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Im Gegensatz zu `git reset` erstellt `git revert` einen neuen Commit, der die Änderungen eines bestimmten Commits rückgängig macht, ohne den Git-Verlauf zu ändern. Dies ist ideal, wenn man bereits gepushte Änderungen rückgängig machen möchte.

- Um einen Commit rückgängig zu machen::

  git revert <Commit-ID>

.. code-block:: bash 

    git revert HEAD~1

Dies erstellt einen neuen Commit, der die Änderungen des letzten Commits rückgängig macht.

.. note::
   `git revert` wird häufig in Teams verwendet, da der Verlauf konsistent bleibt und es keine Konflikte beim Pushen gibt.

Repository auf einen bestimmten Zeitpunkt zurücksetzen 🪖
---------------------------------------------------------------------

Um das Repository auf einen bestimmten Commit oder Zeitpunkt zurückzusetzen, kann man `git reset` oder `git checkout` verwenden.

Methode 1: `git reset --hard`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Mit `git reset --hard` kann man das Repository auf einen bestimmten Commit zurücksetzen. Alle nachfolgenden Commits und Änderungen gehen verloren.

.. code-block:: bash 

  git reset --hard <Commit-ID>

Hierdurch wird das gesamte Projekt auf den angegebenen Commit zurückgesetzt.

Methode 2: `git checkout`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Eine alternative Methode ist `git checkout`, um das Repository auf einen früheren Zustand zu setzen, ohne den Verlauf zu ändern.

- Um eine ältere Version des Projekts zu überprüfen::

  git checkout <Commit-ID>

- Wenn du wieder zurück zum aktuellen Stand wechseln möchtest::

.. code-block:: bash 

  git checkout main

.. warning::
   Änderungen, die nicht committet wurden, gehen verloren, wenn man von einem Branch zum anderen wechselt.

Bestimmten Zeitpunkt zurückspulen 🕵️
--------------------------------------------------

Manchmal möchte man nicht auf einen bestimmten Commit, sondern auf einen Zeitpunkt in der Vergangenheit zurückspulen. Dazu verwendet man `git reflog`, um den Verlauf der HEAD-Pointer zu überprüfen.

- Überprüfe den Verlauf von HEAD::

.. code-block:: bash 

   git reflog

- Suche den gewünschten Eintrag und notiere dir die entsprechende Commit-ID. Dann kannst du das Repository auf diesen Zeitpunkt zurücksetzen::

.. code-block::bash 
    
   git reset --hard <Commit-ID>

Zusammenfassung 🤓
-----------------------------------

Git bietet verschiedene leistungsstarke Werkzeuge, um Commits rückgängig zu machen oder das Projekt auf einen früheren Zustand zurückzusetzen. Je nach Situation können `git reset`, `git revert`
