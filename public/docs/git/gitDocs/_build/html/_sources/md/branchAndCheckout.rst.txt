Branch & Checkout 🌴
=====================================

Git Branching ermöglicht die parallele Entwicklung in verschiedenen Versionen eines Projekts. Branches sind Abzweigungen vom Hauptverlauf (z.B. `main` oder `master`), auf denen Änderungen vorgenommen werden können, ohne den Hauptverlauf zu beeinflussen. Mit Branches kann man also neue Features entwickeln, Fehler beheben oder experimentieren, ohne den stabilen Code zu gefährden. Der Befehl ``git checkout`` wird verwendet, um zwischen Branches zu wechseln oder auf einen spezifischen Zustand des Repositories zurückzugreifen.

Git Branch 🌲
-----------------

Ein Branch in Git ist ein Zeiger auf einen spezifischen Commit. Das Erstellen von Branches ist extrem einfach und ermöglicht es, neue Funktionen oder Änderungen isoliert vom Hauptzweig zu entwickeln.

Branch erstellen 🪵
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Um einen neuen Branch zu erstellen, verwendet man den Befehl:

.. code-block:: bash

    git branch <branch-name>

Beispiel:

.. code-block:: bash

    git branch feature-login

Dies erstellt einen neuen Branch namens `feature-login`, der vom aktuellen Commit des Hauptbranches (z.B. `main`) abzweigt.

Branch anzeigen 👁️
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Um alle vorhandenen Branches im Repository anzuzeigen, benutzt man:

.. code-block:: bash

    git branch

Die Ausgabe zeigt alle existierenden Branches. Der aktuelle Branch, auf dem man sich befindet, wird mit einem **Stern (*)** markiert.

Zu einem Branch wechseln (Checkout) 💱
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Um auf einen anderen Branch zu wechseln, wird der Befehl ``git checkout`` verwendet:

.. code-block:: bash

    git checkout <branch-name>

Beispiel:

.. code-block:: bash

    git checkout feature-login

Damit wird auf den Branch `feature-login` gewechselt. Ab diesem Moment arbeiten alle Änderungen auf diesem Branch.

Alternativ kann der Befehl ``git switch`` zum Wechseln der Branches verwendet werden:

.. code-block:: bash

    git switch <branch-name>

Branch erstellen und direkt wechseln 🪓
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Man kann einen Branch erstellen und direkt zu diesem wechseln, indem man den Befehl kombiniert:

.. code-block:: bash

    git checkout -b <branch-name>

Beispiel:

.. code-block:: bash

    git checkout -b feature-dashboard

Dies erstellt den neuen Branch `feature-dashboard` und wechselt sofort zu diesem.

Branch löschen 🧯
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Nachdem ein Branch nicht mehr benötigt wird, kann er gelöscht werden. Dies hilft dabei, Ordnung zu halten, insbesondere wenn alte Feature-Branches abgeschlossen sind.

Um einen lokalen Branch zu löschen, verwendet man:

.. code-block:: bash

    git branch -d <branch-name>

Beispiel:

.. code-block:: bash

    git branch -d feature-login

Dieser Befehl löscht den `feature-login` Branch **nur**, wenn alle Änderungen in diesem Branch bereits gemergt wurden. Wenn man den Branch erzwingen möchte (z.B. wenn der Branch noch nicht vollständig gemergt wurde), nutzt man:

.. code-block:: bash

    git branch -D <branch-name>

Beispiel:

.. code-block:: bash

    git branch -D feature-login

☁️ Remote-Branches löschen 🧯
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Um einen Branch auf einem Remote-Repository (z.B. GitHub oder GitLab) zu löschen, verwendet man:

.. code-block:: bash

    git push origin --delete <branch-name>

Beispiel:

.. code-block:: bash

    git push origin --delete feature-login

Dadurch wird der Branch `feature-login` auf dem Remote-Server gelöscht.

Wann sollte man Branches löschen? 🤔
--------------------------------------

Es ist sinnvoll, Branches zu löschen, wenn:

- **Feature abgeschlossen ist:** Sobald ein Feature entwickelt und in den Hauptbranch gemergt wurde, sollte der Feature-Branch gelöscht werden, um Verwirrung zu vermeiden.
- **Branch ist überholt:** Wenn ein Branch obsolet geworden ist oder ein Experiment gescheitert ist, sollte er gelöscht werden, um die Übersichtlichkeit im Repository zu wahren.
- **Vermeidung von Branch-Ansammlungen:** Wenn zu viele Branches im Repository existieren, kann dies die Übersicht erschweren. Daher ist es empfehlenswert, regelmäßig alte Branches zu entfernen.

Git Remote Branches ☁️
----------------------------

Branches existieren sowohl lokal als auch auf Remote-Repositories. Es ist wichtig zu wissen, wie man mit Remote-Branches arbeitet, um im Team effektiv zusammenzuarbeiten.

Remote-Branches abrufen 🤙
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Um die aktuellsten Branches von einem Remote-Repository zu holen, benutzt man:

.. code-block:: bash

    git fetch

Dieser Befehl lädt die neuesten Informationen des Remote-Repositories, einschließlich neuer Branches, herunter, aktualisiert aber noch nicht den Arbeitsstand im lokalen Repository.

Remote-Branch auschecken 🪟
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wenn man auf einen Branch wechseln möchte, der nur auf dem Remote-Repository existiert, verwendet man:

.. code-block:: bash

    git checkout -b <branch-name> origin/<branch-name>

Beispiel:

.. code-block:: bash

    git checkout -b feature-search origin/feature-search

Dies erstellt einen neuen lokalen Branch namens `feature-search`, der auf dem Remote-Branch `origin/feature-search` basiert.

Remote-Branches anzeigen 👁️
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Um alle Remote-Branches anzuzeigen, kann man den Befehl benutzen:

.. code-block:: bash

    git branch -r

Dies zeigt alle Branches, die auf dem Remote-Repository existieren.

Best Practices für Branches 🍴
--------------------------------

- **Namenskonventionen:** Verwende eindeutige und aussagekräftige Branch-Namen wie `feature-login`, `bugfix-authentication`, oder `hotfix-crash`.
- **Regelmäßige Merges:** Branches sollten regelmäßig in den Hauptbranch gemergt werden, um große Konflikte zu vermeiden.
- **Kleinere Branches:** Statt riesige Änderungen auf einem Branch zu machen, ist es oft besser, kleinere und spezifische Branches zu erstellen, die nur ein Feature oder einen Fix enthalten.
- **Frühzeitig löschen:** Alte Branches, die nicht mehr benötigt werden, sollten frühzeitig gelöscht werden, um Verwirrung und Ansammlungen zu vermeiden.

Fazit 🤓
---------

Das Arbeiten mit Branches in Git ist eine der größten Stärken des Versionskontrollsystems. Sie ermöglichen es, parallel an verschiedenen Funktionen oder Fehlerbehebungen zu arbeiten, ohne den Hauptcode zu beeinträchtigen. Der Befehl ``git checkout`` (bzw. ``git switch``) erlaubt dabei den nahtlosen Wechsel zwischen Branches, und durch Remote-Branches kann effektiv im Team zusammengearbeitet werden.
