Merge 🙏
==============

Der Befehl **git merge** wird verwendet, um die Änderungen aus einem Branch mit einem anderen Branch zusammenzuführen. Typischerweise werden Feature-Branches in den Hauptbranch (`main` oder `master`) gemergt, nachdem die Entwicklung eines Features abgeschlossen ist. Der Merge-Befehl spielt eine zentrale Rolle bei der Integration von parallelen Arbeitsabläufen und der Zusammenführung der Arbeit mehrerer Entwickler.

Grundfunktion 🤌
-----------------

Ein Merge kombiniert die Änderungen eines Ziel-Branches (z.B. `feature-login`) in den aktuellen Branch (z.B. `main`).

Beispiel:

.. code-block:: bash

    git checkout main
    git merge feature-login

Dieser Befehl führt den `feature-login` Branch in den `main` Branch zusammen. Dabei bleiben die Commit-Historien beider Branches erhalten.

.. tip:: 
    Im generell muss man den Branch auschecken in den man Mergen will 

Vorteile 🏆
-------------

- **Zusammenführung paralleler Entwicklung:** Entwickler können unabhängig voneinander arbeiten und ihre Änderungen später zusammenführen.
- **Kontrollierte Integration:** Nur getestete und abgeschlossene Features werden in den Hauptbranch gemergt, was die Stabilität des Codes sicherstellt.
- **Nachverfolgbare Historie:** Der Merge-Befehl behält die Commit-Historie beider Branches, was eine detaillierte Versionskontrolle ermöglicht.

Arten von Merges 🔀
--------------------

Fast-Forward Merge 🎢
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ein **Fast-Forward Merge** passiert, wenn der Ziel-Branch (z.B. `main`) keine zusätzlichen Commits hat, die nicht auch im Branch sind, der gemergt wird. In diesem Fall bewegt Git einfach den Zeiger des `main` Branches auf den neuesten Commit des `feature` Branches.

Beispiel:

.. code-block:: bash

    git checkout main
    git merge feature-login

Wenn keine Konflikte oder Zwischencommits im `main` Branch vorhanden sind, wird Git den Fast-Forward Merge durchführen. Dieser Typ des Merges ist einfach und hinterlässt keine Merge-Commits.

Three-Way Merge 💨
~~~~~~~~~~~~~~~~~~~~~~

Ein **Three-Way Merge** wird verwendet, wenn beide Branches (z.B. `main` und `feature-login`) zusätzliche Commits haben, die im jeweils anderen Branch nicht vorhanden sind. Git vergleicht den gemeinsamen Vorfahren beider Branches und kombiniert die Änderungen.

Beispiel:

.. code-block:: bash

    git checkout main
    git merge feature-login

In diesem Fall erstellt Git einen **Merge-Commit**, der die Änderungen beider Branches zusammenführt. Die Historie bleibt vollständig erhalten, da die Commit-Verläufe beider Branches erhalten bleiben.

Merge-Commit 📦
~~~~~~~~~~~~~~~~~~~~~~

Bei einem Three-Way-Merge wird automatisch ein Merge-Commit erstellt, um die Zusammenführung der beiden Branches zu dokumentieren. Ein Merge-Commit enthält beide Eltern-Commits und führt die Änderungen in einen neuen Commit zusammen.

Wichtige Optionen 🔘
--------------------------

--no-ff (Kein Fast-Forward Merge) 🦺
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Um immer einen Merge-Commit zu erzwingen, selbst wenn ein Fast-Forward Merge möglich wäre, verwendet man die Option `--no-ff`. Dies sorgt dafür, dass ein Merge-Commit erstellt wird, selbst wenn Git die Branches einfach zusammenführen könnte.

Beispiel:

.. code-block:: bash

    git merge --no-ff feature-login

Mit dieser Option bleibt in der Historie klar erkennbar, wann ein Branch zusammengeführt wurde, was für die Nachvollziehbarkeit nützlich ist.

--squash (Änderungen zusammenfassen) 💀
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Der **Squash Merge** fasst alle Commits eines Branches zu einem einzigen Commit zusammen, ohne die Commit-Historie des Branches zu erhalten. Dies wird oft verwendet, um kleinere oder nichtssagende Commits in einem Feature-Branch zu einem einzigen, sauberen Commit zu konsolidieren.

Beispiel:

.. code-block:: bash

    git merge --squash feature-login

Nach dem Zusammenfassen muss man den Commit manuell ausführen:

.. code-block:: bash

    git commit -m "Füge Feature-Login hinzu"

Mit diesem Befehl wird die gesamte Arbeit des Branches in einem einzigen Commit in den Hauptbranch übernommen.

--abort (Merge abbrechen) ❌
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Falls während eines Merges Konflikte auftreten oder man den Merge nicht mehr fortsetzen möchte, kann der Befehl `--abort` verwendet werden, um den Merge abzubrechen und den Zustand vor dem Merge wiederherzustellen.

Beispiel:

.. code-block:: bash

    git merge --abort

Dieser Befehl stellt sicher, dass keine Änderungen aus dem Merge übernommen werden und der Branch in seinen ursprünglichen Zustand zurückgesetzt wird.

Konflikte beim Merge 💢
--------------------------

Beim Zusammenführen zweier Branches kann es zu **Merge-Konflikten** kommen, wenn dieselbe Datei an verschiedenen Stellen in beiden Branches verändert wurde. Git erkennt solche Konflikte und markiert die problematischen Stellen in den Dateien.

Merge-Konflikte lösen 🚒
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Git gibt eine Liste der Dateien aus, die in Konflikt stehen. Diese Dateien werden mit Konflikt-Markierungen (<<<<<< und >>>>>>) versehen.
2. Man muss die Datei manuell bearbeiten und entscheiden, welche Änderungen beibehalten werden sollen.
3. Nach dem Lösen der Konflikte markiert man die Datei als gelöst:

   .. code-block:: bash

       git add <konflikt-datei>

4. Sobald alle Konflikte gelöst wurden, schließt man den Merge mit einem Commit ab:

   .. code-block:: bash

       git commit

Konflikte anzeigen 👀
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Um eine Liste der Dateien anzuzeigen, die während eines Merges in Konflikt stehen, verwendet man:

.. code-block:: bash

    git status

Die Konfliktdateien werden als "unmerged" markiert. Sie müssen manuell bearbeitet und dann als gelöst hinzugefügt werden.

Wann sollte man Merges durchführen? 😣
-----------------------------------------------

- **Feature abgeschlossen:** Sobald ein Feature in einem separaten Branch entwickelt wurde, kann es in den Hauptbranch gemergt werden.
- **Stabile Zwischenstände:** Wenn ein Branch wichtige stabile Änderungen enthält, die auch auf anderen Branches benötigt werden, kann ein Merge durchgeführt werden.
- **Vor wichtigen Releases:** Bevor ein Release erstellt wird, sollten alle relevanten Feature-Branches in den Hauptbranch gemergt werden, um die finale Version zu erstellen.

Best Practices für Merges 🤌
-----------------------------------

- **Regelmäßige Merges:** Es ist empfehlenswert, regelmäßig zu mergen, um Konflikte gering zu halten.
- **Kleine Branches:** Arbeite in kleineren Branches, die spezifische Features oder Fixes enthalten. Dies reduziert die Komplexität beim Merge.
- **Merge-Konflikte sofort lösen:** Wenn es zu Konflikten kommt, sollten diese zeitnah und sorgfältig gelöst werden, um die Stabilität des Codes zu gewährleisten.
- **Merge-Commits beibehalten:** Vermeide es, die Commit-Historie zu stark zu vereinfachen, indem du Merge-Commits beibehältst (besonders bei Teamprojekten).

Fazit 🤓
--------------

Der Befehl ``git merge`` ist unverzichtbar, um parallele Entwicklungen in Git zusammenzuführen. Verschiedene Merge-Strategien wie Fast-Forward, Three-Way und Squash Merges bieten Flexibilität, je nachdem, ob die Historie beibehalten oder konsolidiert werden soll. Durch das richtige Anwenden des Merge-Befehls und das frühzeitige Lösen von Konflikten kann die Zusammenarbeit in Teams effizient und produktiv gestaltet werden.
