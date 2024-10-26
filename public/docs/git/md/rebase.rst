Rebase  ⚾
========================

Der Befehl **git rebase** wird verwendet, um die Commit-Historie neu zu schreiben. Rebase bietet eine Möglichkeit, Änderungen von einem Branch auf einen anderen zu "verschieben" und dabei eine lineare Commit-Historie zu erhalten. Im Gegensatz zu **git merge**, das einen Merge-Commit erstellt und die Historien beider Branches beibehält, sorgt **git rebase** dafür, dass die Historie so aussieht, als wäre die Arbeit direkt auf dem Ziel-Branch durchgeführt worden.

Grundfunktion 🏠
-----------------

Der Befehl `git rebase` nimmt alle Commits aus einem Branch und wendet sie auf einen anderen Branch an, als wären sie dort direkt gemacht worden. Dies kann nützlich sein, um eine klarere und linearere Historie zu erzeugen.

Beispiel:

.. code-block:: bash

    git checkout feature-branch
    git rebase main

Dieser Befehl nimmt alle Commits des `feature-branch` und wendet sie auf den `main` Branch an, wodurch die Commit-Historie neu geschrieben wird.

Vorteile 🏆
--------------

- **Lineare Historie:** Rebase verhindert die Entstehung von Merge-Commits und führt zu einer saubereren, lineareren Historie.
- **Vermeidung von Merge-Konflikten:** Durch das Neuanwenden von Commits können potenzielle Konflikte frühzeitig gelöst werden, bevor sie in einem großen Merge auftreten.
- **Saubere Commit-Struktur:** Mit Rebase können kleinere und unnötige Commits in der Historie entfernt oder zusammengefasst werden.

Arten von Rebase 😮‍💨
----------------------------

Interactive Rebase
~~~~~~~~~~~~~~~~~~

Der **interaktive Rebase** ist eine der nützlichsten Varianten von Rebase, da er es ermöglicht, die Commit-Historie anzupassen. Man kann Commits bearbeiten, löschen, umsortieren oder zusammenfassen (Squash).

Beispiel:

.. code-block:: bash

    git rebase -i <commit-hash>

Dabei wird der Rebase-Editor geöffnet, und man kann die Commits manuell bearbeiten. Typische Aktionen sind:

- **pick**: Den Commit unverändert lassen.
- **squash**: Den Commit mit dem vorherigen zusammenfassen.
- **reword**: Die Commit-Nachricht ändern.
- **drop**: Den Commit komplett entfernen.

Beispiel für den interaktiven Rebase:

.. code-block:: bash

    git rebase -i HEAD~4

Hiermit wird ein interaktiver Rebase auf die letzten 4 Commits gestartet.

Rebase vs. Merge
~~~~~~~~~~~~~~~~~

Der wesentliche Unterschied zwischen Rebase und Merge liegt in der Art und Weise, wie die Commit-Historie behandelt wird:

- **Merge**: Behält beide Commit-Historien und erstellt einen Merge-Commit, um die Arbeit zusammenzuführen.
- **Rebase**: "Replays" die Commits auf dem Ziel-Branch und erstellt eine lineare Commit-Historie.

Wann sollte man Rebase verwenden?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **Lineare Historie bevorzugt:** Wenn man eine klare und leicht nachvollziehbare Historie ohne Merge-Commits benötigt.
- **Vor dem Pushen:** Bevor man Änderungen auf einen Remote-Branch pusht, ist es oft hilfreich, einen Rebase durchzuführen, um Konflikte zu vermeiden und die Änderungen direkt auf den aktuellen Stand des Hauptbranches anzupassen.
- **Auf Feature-Branches:** Während der Arbeit auf Feature-Branches hilft Rebase dabei, die Änderungen des Hauptbranches (z.B. `main`) in den eigenen Branch zu integrieren, ohne die Historie zu fragmentieren.

Wann sollte man **nicht** Rebase verwenden?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **Nach dem Pushen:** Wenn die Commits bereits auf einem Remote-Repository gepusht wurden und andere Entwickler darauf basieren, sollte man Rebase vermeiden, um Konflikte und Probleme beim Synchronisieren zu verhindern.
- **Wenn die Historie bewahrt werden muss:** In Fällen, in denen die Commit-Historie eine wichtige Rolle spielt, sollte Rebase vermieden werden, da es die Commit-Struktur verändert.

Wichtige Optionen  🔘
-------------------------

--onto
~~~~~~

Mit `--onto` kann man einen spezifischen Startpunkt für den Rebase definieren.

Beispiel:

.. code-block:: bash

    git rebase --onto <new-base> <old-base> <branch>

Hierbei wird der Branch so neu aufgesetzt, als ob er von `new-base` statt von `old-base` gestartet wäre.

--continue
~~~~~~~~~~

Falls während eines Rebase ein Konflikt auftritt, kann man diesen lösen und den Rebase mit dem Befehl `git rebase --continue` fortsetzen.

Beispiel:

.. code-block:: bash

    git rebase --continue

Dieser Befehl setzt den Rebase nach dem Lösen von Konflikten fort.

--abort 
~~~~~~~~~~~

Wenn ein Rebase unerwartete Konflikte verursacht oder man den Rebase-Prozess abbrechen möchte, kann `git rebase --abort` verwendet werden, um den Branch in seinen ursprünglichen Zustand zurückzusetzen.

Beispiel:

.. code-block:: bash

    git rebase --abort

Dieser Befehl verwirft alle Änderungen, die während des Rebase-Prozesses gemacht wurden, und stellt den Branch wieder her.

Git Rebuild 🔨
-----------------

Im Kontext von Git wird **Rebuild** oft informell verwendet, um den Vorgang zu beschreiben, bei dem ein Repository oder Projekt komplett neu aufgebaut wird. In der Praxis ist dies kein Git-spezifischer Befehl, sondern bezieht sich auf das Neuladen oder Erstellen der Umgebung, oft in Kombination mit der Verwendung von **Rebase** oder **Reset**.

Beispiele für Rebuild-Szenarien:

- **Löschen und Neuklonen:** Wenn es zu vielen Konflikten oder Problemen im Repository kommt, kann man es komplett neu klonen, um die saubere Struktur wiederherzustellen.
  
  .. code-block:: bash

      git clone <repository-url>

- **Rebase zur Bereinigung der Historie:** Durch Rebase können unnötige Commits zusammengeführt oder bereinigt werden, um das Projekt in einen konsistenten Zustand zu bringen.

Best Practices für Rebase 🤌
-----------------------------

- **Nicht nach dem Pushen verwenden:** Ein Rebase sollte **niemals** auf Branches durchgeführt werden, die bereits auf einem Remote-Repository gepusht wurden und auf denen andere Entwickler basieren.
- **Konflikte sofort lösen:** Falls Konflikte auftreten, sollten diese direkt gelöst und der Rebase-Prozess mit `--continue` fortgesetzt werden.
- **Squash vor dem Pushen:** Bevor man Feature-Branches pusht, kann man mit einem interaktiven Rebase kleine, unnötige Commits zu einem einzigen Commit zusammenfassen.
- **Rebase für Features und Forks:** Besonders nützlich bei der Arbeit auf Forks und Feature-Branches, um diese auf den neuesten Stand des Hauptprojekts zu bringen.

Fazit 🤓
--------

Der Befehl **git rebase** bietet eine kraftvolle Möglichkeit, die Commit-Historie neu zu schreiben und Projekte sauber zu halten. Rebase hilft, eine lineare Historie zu erstellen, Konflikte frühzeitig zu lösen und die Commit-Struktur zu vereinfachen. Rebuild hingegen beschreibt informelle Prozesse, bei denen das Projekt komplett neu aufgesetzt wird. Der Einsatz von Rebase erfordert jedoch Vorsicht, insbesondere nach dem Pushen von Änderungen, da es potenziell zu Problemen bei der Synchronisation führen kann.
