Push 🎚️
======================

Der Befehl **git push** wird verwendet, um lokale Änderungen auf ein Remote-Repository (z.B. GitHub, GitLab, Bitbucket) zu übertragen. Nachdem man lokal Änderungen vorgenommen und Commits erstellt hat, erlaubt es **git push**, diese Änderungen mit anderen Entwicklern zu teilen oder sie in das Hauptprojekt einzubinden.

Grundfunktion 🏠
--------------------

``git push`` sendet Commits vom lokalen Repository auf ein Remote-Repository und aktualisiert den entsprechenden Branch im Remote-Repository.

Beispiel:

.. code-block:: bash

    git push origin main

Dieser Befehl überträgt alle Commits vom lokalen Branch `main` auf den Remote-Branch `main` des Remote-Repositories `origin`.

Vorteile 🏆
-------------

- **Teamarbeit:** Ermöglicht es, Änderungen mit dem Team zu teilen, sodass alle auf demselben Stand arbeiten.
- **Backup:** Lokale Änderungen werden auf das Remote-Repository übertragen, was als externes Backup dient.
- **Kontinuierliche Integration:** Bei vielen Projekten wird das Pushen verwendet, um Änderungen automatisch zu testen und zu deployen.

Wichtige Informationen ℹ️
----------------------------

- **Remote-Repository:** Meistens verwendet man einen Remote-Namen wie `origin`, der auf das entfernte Repository verweist.
- **Branch:** Standardmäßig wird der aktuelle Branch gepusht, aber man kann auch gezielt einen anderen Branch pushen.

Wichtige Optionen 🔘
---------------------

Remote angeben 💻
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Um die Änderungen an ein spezifisches Remote-Repository zu senden, gibt man dessen Namen an. Der Standardname für ein Remote-Repository ist oft `origin`.

.. code-block:: bash

    git push <remote-name> <branch-name>

Beispiel:

.. code-block:: bash

    git push origin feature-login

Dieser Befehl überträgt den lokalen Branch `feature-login` auf den Remote-Branch `feature-login`.

.. tip:: 
    Man kann auch nur `git push` angeben dann wird an den hinterlegten gepusht 

Alle Branches pushen 🙆
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Um alle lokalen Branches auf ihre entsprechenden Remote-Branches zu pushen, verwendet man:

.. code-block:: bash

    git push --all

Neue Branches veröffentlichen 🌲
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wenn man einen neuen lokalen Branch erstellt hat und diesen zum ersten Mal pushen möchte, kann man ``git push --set-upstream`` oder die Kurzform verwenden, um den Branch sowohl lokal als auch remote zu synchronisieren:

.. code-block:: bash

    git push -u origin <branch-name>

Beispiel:

.. code-block:: bash

    git push -u origin feature-login

Der Schalter ``-u`` stellt eine Verknüpfung zwischen dem lokalen Branch `feature-login` und dem Remote-Branch `origin/feature-login` her, sodass zukünftige Pushes ohne Angabe von Remote und Branchnamen ausgeführt werden können.

Force Push 💣
~~~~~~~~~~~~~~~~~~~~~~~~~~

In manchen Fällen muss man Änderungen **erzwingen** (z.B. wenn man Änderungen rückgängig gemacht oder Rebase verwendet hat). Hierfür verwendet man den Force-Push:

.. code-block:: bash

    git push --force

**Achtung:** Ein Force-Push überschreibt Änderungen auf dem Remote-Repository, was zu Datenverlust führen kann, wenn andere Entwickler auf denselben Branch gearbeitet haben.

Wann sollte man **Force Push** verwenden?

- **Nach einem Rebase:** Wenn man einen Rebase auf einem Branch durchgeführt hat und die Commit-Historie geändert wurde, ist ein Force-Push erforderlich.
- **Fehlerhafte Commits:** Wenn versehentlich falsche Commits gepusht wurden und diese aus der Remote-Historie entfernt werden müssen.

Tags pushen 🏷️
~~~~~~~~~~~~~~~~~~~~~~~~~~

Git verwaltet auch **Tags**, die häufig verwendet werden, um Versionen zu markieren. Um ein spezifisches Tag zu pushen, verwendet man:

.. code-block:: bash

    git push origin <tag-name>

Beispiel:

.. code-block:: bash

    git push origin v1.0

Um alle lokalen Tags zu einem Remote-Repository zu übertragen, verwendet man:

.. code-block:: bash

    git push --tags

Pushen mit SSH oder HTTPS 💻
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Es gibt zwei gängige Methoden, um auf Remote-Repositories zuzugreifen: über HTTPS und über SSH.

- **HTTPS:** Ermöglicht den Zugriff durch Eingabe von Benutzername und Passwort oder Verwendung von Personal Access Tokens (PAT).
- **SSH:** Sicherer Zugriff mit SSH-Schlüsseln, der das Eingeben von Passwörtern überflüssig macht und besser für die langfristige Nutzung ist.

Konflikte und Fehler beim Push 🎉
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Manchmal kann ein Push fehlschlagen, wenn es zu einem **Konflikt** zwischen den lokalen Änderungen und den Änderungen auf dem Remote-Repository kommt. In diesem Fall fordert Git den Benutzer auf, ein ``git pull`` auszuführen, um die neuesten Änderungen vom Remote-Repository zu holen und mögliche Konflikte zu beheben, bevor der Push fortgesetzt werden kann.

Um diese Konflikte zu verhindern, sollte man regelmäßig den aktuellen Stand vom Remote-Repository holen:

.. code-block:: bash

    git pull

Best Practices für **git push** 🏆
-----------------------------------------

- **Regelmäßiges Pushen:** Push regelmäßig, um sicherzustellen, dass deine Arbeit gesichert und für andere verfügbar ist.
- **Vermeidung von Force-Pushes:** Verwende Force-Push nur, wenn es unbedingt notwendig ist, da es zu Problemen für andere Teammitglieder führen kann.
- **Verwende aussagekräftige Commit-Nachrichten:** So können andere Entwickler verstehen, was in den gepushten Commits geändert wurde.

Fazit 🤓
-------------

Der Befehl ``git push`` ist essenziell, um lokale Änderungen auf ein Remote-Repository zu übertragen und sie anderen Entwicklern zur Verfügung zu stellen. Verschiedene Optionen wie das Puschen von Branches, Tags und die Nutzung von Force-Push machen den Prozess flexibel, erfordern aber auch Sorgfalt. Ein regelmäßiges Puschen und das richtige Handling von Konflikten sind entscheidend für eine reibungslose Zusammenarbeit im Team.
