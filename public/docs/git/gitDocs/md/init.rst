Init + Repo with SSH ⬛
======================================

Das Kommando ``git init`` dient dazu, ein neues Git-Repository zu initialisieren. Dies ist der erste Schritt, um die Versionskontrolle für ein Projekt zu starten.

**Grundsyntax:**

.. code-block:: bash

    git init

Dies erstellt ein leeres Git-Repository im aktuellen Verzeichnis. Von hier aus können Dateien hinzugefügt und Commits durchgeführt werden.

Beispiel: Git-Repository auf GitHub mit SSH aufsetzen 🎲
---------------------------------------------------------

1. Initialisiere das lokale Git-Repository 🛫
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Im Projektverzeichnis den folgenden Befehl ausführen:

.. code-block:: bash

    git init

2. Lokale Dateien hinzufügen und committen ➕
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Füge Dateien zur Staging-Area hinzu und führe einen ersten Commit durch:

.. code-block:: bash

    git add .
    git commit -m "Initial commit"

3. GitHub Repository erstellen 🥇
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Erstelle ein Repository auf GitHub über die Webseite (https://github.com) und wähle **SSH** als Verbindungsprotokoll.

4. Remote-Repository hinzufügen (mit SSH) ➕
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Füge das GitHub-Repository als Remote hinzu. Ersetze `your-username` und `your-repository` mit deinen spezifischen GitHub-Daten:

.. code-block:: bash

    git remote add origin git@github.com:your-username/your-repository.git

5. Push zum Remote-Repository 🧩
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Nachdem das Remote hinzugefügt wurde, kann das lokale Repository zum Remote gepusht werden:

.. code-block:: bash

    git push -u origin master

SSH-Schlüssel einrichten 🗝️
---------------------------

Falls noch kein SSH-Schlüssel vorhanden ist, folge diesen Schritten, um einen zu erstellen und zu GitHub hinzuzufügen:

1. SSH-Schlüssel generieren 🤖
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

    ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

Dies erstellt einen neuen SSH-Schlüssel. Folge den Anweisungen und speichere den Schlüssel im Standardverzeichnis.

2. SSH-Agent starten und Schlüssel hinzufügen 🗝️
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_rsa

3. SSH-Schlüssel zu GitHub hinzufügen ➕
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Kopiere den öffentlichen Schlüssel:

.. code-block:: bash

    cat ~/.ssh/id_rsa.pub

Füge diesen Schlüssel zu GitHub unter **Einstellungen > SSH and GPG keys** hinzu.

4. Verbindung testen 🪢
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Überprüfe, ob die SSH-Verbindung zu GitHub erfolgreich ist:

.. code-block:: bash

    ssh -T git@github.com

Wenn die Verbindung erfolgreich ist, kannst du dein Repository mit SSH verwenden.
"""
