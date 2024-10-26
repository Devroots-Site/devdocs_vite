Fetch vs.  Pull 🫀
====================================

**git fetch** und **git pull** sind zwei wichtige Befehle in Git, die verwendet werden, um Änderungen von einem Remote-Repository in ein lokales Repository zu holen. Obwohl beide Befehle zur Synchronisation verwendet werden, gibt es wesentliche Unterschiede in ihrer Funktionsweise und in den Situationen, in denen sie angewendet werden sollten.

Grundfunktion von Git Fetch 🏠
----------------------------------

**git fetch** holt alle Änderungen vom Remote-Repository, ohne sie in den aktuellen Branch zu integrieren. Es lädt die neuesten Commits, Branches und Tags herunter und aktualisiert die Remote-Tracking-Branches, aber es ändert nichts am aktuellen Arbeitsverzeichnis oder an den aktiven lokalen Branches.

Beispiel:

.. code-block:: bash

    git fetch origin

Dieser Befehl lädt alle Änderungen von `origin` (dem Remote-Repository) herunter, ohne sie mit dem aktuellen Branch zu mergen oder zu verändern.

Vorteile von Fetch 🏆
~~~~~~~~~~~~~~~~~~~~~~~

- **Sichere Vorschau:** Mit `git fetch` kann man die neuesten Änderungen vom Remote-Repository abrufen und sich diese ansehen, bevor man entscheidet, ob und wann man sie in den eigenen Branch integriert.
- **Keine Änderungen am Arbeitsverzeichnis:** Da der aktuelle Arbeitsstand nicht beeinflusst wird, kann man in Ruhe die Änderungen prüfen oder sogar gezielt bestimmte Branches aktualisieren.
- **Übersicht über Remote-Änderungen:** Git-Fetch aktualisiert die Informationen über alle Remote-Branches, sodass man stets einen Überblick über den aktuellen Stand des Remote-Repositories hat.

Grundfunktion von Git Pull  🏠
-------------------------------

**git pull** kombiniert zwei Schritte: Zuerst führt es einen `git fetch` durch, um die neuesten Änderungen vom Remote-Repository herunterzuladen. Anschließend wird ein **Merge** oder **Rebase** durchgeführt, um die heruntergeladenen Änderungen sofort in den aktuellen Branch zu integrieren.

Beispiel:

.. code-block:: bash

    git pull origin main

Dieser Befehl holt alle Änderungen des `main` Branches vom Remote-Repository `origin` und führt diese in den lokalen `main` Branch zusammen.

Vorteile von Pull 🏆
~~~~~~~~~~~~~~~~~~~~~~~~

- **Schnell und effizient:** `git pull` holt die Änderungen und integriert sie in einem einzigen Schritt, was die Synchronisation beschleunigt.
- **Automatisierter Merge/Rebase:** Nach dem Abrufen der Änderungen werden sie sofort mit dem aktuellen Branch zusammengeführt, was den Prozess vereinfacht.
- **Ideal für einfache Synchronisation:** Wenn man sicher ist, dass keine Konflikte auftreten oder man direkt auf dem aktuellen Branch weiterarbeiten möchte, ist `git pull` die schnellste Option.

Unterschiede zwischen Git Fetch und Git Pull 🆚
----------------------------------------------------

1. **Fetch lädt nur herunter, Pull integriert sofort:**
   - **git fetch** lädt nur die Änderungen herunter und lässt den aktuellen Branch unangetastet.
   - **git pull** lädt die Änderungen herunter und integriert sie sofort in den aktuellen Branch (via Merge oder Rebase).

2. **Sicherheit und Kontrolle:**
   - **git fetch** ist sicherer, weil man die Änderungen vor der Integration prüfen kann. Es erlaubt, den aktuellen Stand zu sehen, ohne gleich die Änderungen in den eigenen Code zu übernehmen.
   - **git pull** ist schneller, weil es die Änderungen sofort übernimmt. Dies kann jedoch problematisch sein, wenn es zu Konflikten kommt, die unvorbereitet auftreten.

3. **Konflikte vermeiden:**
   - Mit **git fetch** kann man die Änderungen vom Remote prüfen und eventuelle Konflikte manuell und kontrolliert lösen.
   - **git pull** kann Konflikte sofort verursachen, da es die Änderungen ohne Vorwarnung integriert. Dies kann den Arbeitsfluss stören, wenn man mitten in einer Entwicklung steckt.

Wann verwendet man Git Fetch? ⚗️
--------------------------------------

- **Vorbereitung vor dem Mergen:** Wenn du die Änderungen vom Remote-Repository überprüfen möchtest, bevor du sie in deinen lokalen Branch übernimmst, ist `git fetch` die bessere Wahl.
- **Überblick über die Remote-Änderungen:** Fetch ist nützlich, um regelmäßig den Stand des Remote-Repositories zu verfolgen, ohne dein eigenes Arbeitsverzeichnis zu verändern.
- **Konflikte vermeiden:** Wenn du viele lokale Änderungen hast und dir nicht sicher bist, ob diese mit den Remote-Änderungen konfliktfrei gemerged werden können, ist ein `git fetch` der sichere Weg, um die Remote-Änderungen zuerst zu sehen.

Wann verwendet man Git Pull? 📦
--------------------------------

- **Schnelle Synchronisation:** Wenn du sicher bist, dass es keine Konflikte gibt und du die neuesten Änderungen schnell in deinen aktuellen Branch integrieren möchtest, ist `git pull` die schnellere Option.
- **Regelmäßige Updates:** Wenn du in einem Team arbeitest und dein lokaler Branch immer auf dem neuesten Stand sein soll, kann `git pull` regelmäßig verwendet werden.
- **Keine aktiven lokalen Änderungen:** `git pull` ist besonders nützlich, wenn du keine laufenden Änderungen im aktuellen Branch hast, da es die Änderungen direkt integriert, ohne potenzielle Konflikte zu verursachen.

Wichtige Optionen 🔘
---------------------

Git Fetch Optionen
~~~~~~~~~~~~~~~~~~

- `git fetch --all`: Lädt die Änderungen von **allen** Remote-Repositories herunter.

  Beispiel:

  .. code-block:: bash

      git fetch --all

  Dieser Befehl aktualisiert alle Remotes (z.B. `origin`, `upstream` etc.).

- `git fetch <remote> <branch>`: Lädt die Änderungen eines spezifischen Branches von einem Remote herunter.

  Beispiel:

  .. code-block:: bash

      git fetch origin main

  Dieser Befehl lädt nur die Änderungen des `main` Branches von `origin`.

Git Pull Optionen
~~~~~~~~~~~~~~~~~

- `git pull --rebase`: Statt einen Merge durchzuführen, wendet `git pull --rebase` die Änderungen aus dem Remote-Repository auf deinen lokalen Branch an und setzt danach deine lokalen Änderungen oben drauf.

  Beispiel:

  .. code-block:: bash

      git pull --rebase origin main

  Dieser Befehl führt einen Rebase anstelle eines Merges durch, was eine lineare Commit-Historie bewahrt.

- `git pull --no-commit`: Mit dieser Option wird der Pull-Prozess ausgeführt, aber es wird kein Commit erstellt. Dies erlaubt dir, die Änderungen manuell zu überprüfen, bevor du den Merge abschließt.

  Beispiel:

  .. code-block:: bash

      git pull --no-commit origin main

  Dieser Befehl lädt die Änderungen herunter, führt den Merge durch, erstellt aber keinen automatischen Merge-Commit.


Wichtige Schalter für Fetch und Pull
------------------------------------

--all
~~~~~

- Verfügbar für: `git fetch`, `git pull`
- Lädt Änderungen von **allen** Remote-Repositories (nicht nur von `origin`) herunter.

  Beispiel:

  .. code-block:: bash

      git fetch --all

--prune
~~~~~~~

- Verfügbar für: `git fetch`, `git pull`
- Entfernt lokale Referenzen zu Remote-Branches, die auf dem Remote-Repository gelöscht wurden. Hilft, das lokale Repository sauber zu halten.

  Beispiel:

  .. code-block:: bash

      git fetch --prune

  Dies löscht lokale Branch-Referenzen, die nicht mehr auf dem Remote-Repository existieren.

--dry-run
~~~~~~~~~

- Verfügbar für: `git fetch`, `git pull`
- Führt den Befehl "trocken" aus, d.h. es wird angezeigt, was heruntergeladen werden würde, ohne tatsächlich etwas zu verändern.

  Beispiel:

  .. code-block:: bash

      git fetch --dry-run

--rebase
~~~~~~~~

- Verfügbar für: `git pull`
- Stellt sicher, dass nach dem Abrufen der Änderungen der aktuelle Branch per **Rebase** aktualisiert wird, anstatt einen Merge-Commit zu erzeugen. Dies sorgt für eine lineare Commit-Historie.

  Beispiel:

  .. code-block:: bash

      git pull --rebase origin main

--no-commit
~~~~~~~~~~~

- Verfügbar für: `git pull`
- Führt den Pull-Vorgang durch, ohne direkt einen Merge-Commit zu erstellen. Dies ermöglicht es, den Merge manuell zu prüfen, bevor der Commit abgeschlossen wird.

  Beispiel:

  .. code-block:: bash

      git pull --no-commit origin main


Best Practices 🤌
----------------------

- **Verwende `git fetch`, wenn du Kontrolle über den Integrationsprozess behalten möchtest:** `git fetch` gibt dir die Möglichkeit, die heruntergeladenen Änderungen zu prüfen, bevor sie in deinen Branch integriert werden. Dies ist besonders nützlich, wenn du sicherstellen möchtest, dass du Konflikte vermeidest.
  
- **Verwende `git pull`, wenn du sicher bist, dass es keine Konflikte gibt und eine schnelle Synchronisation brauchst:** `git pull` eignet sich gut für Fälle, in denen du schnell auf den neuesten Stand kommen willst und keine offenen Änderungen hast, die zu Konflikten führen könnten.

- **Verwende `git fetch` regelmäßig, um den Überblick zu behalten:** Auch wenn du keine unmittelbaren Änderungen integrieren willst, hilft dir `git fetch`, über den Stand des Remote-Repositories informiert zu bleiben.

- **Verwende `git pull --rebase` für eine saubere Historie:** Wenn du eine lineare Commit-Historie ohne Merge-Commits bevorzugst, ist `git pull --rebase` die bessere Wahl.

Fazit 🤓
--------

Der wesentliche Unterschied zwischen **git fetch** und **git pull** liegt darin, dass `git fetch` die Änderungen vom Remote-Repository herunterlädt, ohne sie direkt zu integrieren, während `git pull` die Änderungen sowohl herunterlädt als auch sofort in den aktuellen Branch integriert. **Git fetch** bietet mehr Kontrolle und ist nützlich, um Konflikte zu vermeiden, während **git pull** eine schnellere Synchronisation ermöglicht. Beide Befehle sind wichtige Werkzeuge in der Zusammenarbeit mit Remote-Repositories, und das Verständnis ihrer Unterschiede hilft, die richtigen Entscheidungen für den Arbeitsfluss zu treffen.
