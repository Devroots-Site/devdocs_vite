

Installieren von Sphinx 📦
===============================

:date: 2024-08-14
:author: Bichler Bastian

.. note:: Diese Dokumentation führt Sie Schritt für Schritt durch die Installation und Einrichtung von Sphinx für Ihre Dokumentationsprojekte. 📚

Voraussetzungen 📜
----------------------------------

Stellen Sie sicher, dass **Python** installiert ist. Sie können dies überprüfen, indem Sie folgendes in Ihrem Terminal oder in Ihrer Eingabeaufforderung eingeben:

.. code-block:: bash

   python --version

Falls Python nicht installiert ist, können Sie es `hier <https://www.python.org/downloads/>`_ herunterladen und installieren. 🔧

Installation von Sphinx 📦
----------------------------------

Sphinx wird über pip installiert:

.. code-block:: bash

   pip install sphinx 

Überprüfen, ob Sphinx installiert wurde 🔍
--------------------------------------------------

Nach der Installation können Sie überprüfen, ob Sphinx korrekt installiert wurde:

.. code-block:: bash

   sphinx-build --version

Dies sollte Ihnen die installierte Version von Sphinx anzeigen. ✅

Erstellen eines Sphinx-Projekts ✍️
---------------------------------------------------------

Um ein neues Sphinx-Dokumentationsprojekt zu starten, navigieren Sie zu dem gewünschten Verzeichnis und führen Sie den folgenden Befehl aus:

.. code-block:: bash

   sphinx-quickstart

Während des Setups werden Sie nach bestimmten Konfigurationen gefragt. Hier sind einige empfohlene Einstellungen:

1. **Separate source and build directories**: ``No``
2. **Project name**: Geben Sie den Namen Ihres Projekts ein
3. **Author name**: Ihr Name
4. **Project release/version**: Geben Sie die Versionsnummer ein
5. **Project language**: ``de`` für Deutsch oder die gewünschte Sprache

Erstellen einer  Rst datei ✍️
---------------------------------------------------------

Es wird empfohlen, einen Ordner zu erstellen, in dem alle rst-Dateien organisiert werden, z.B. einen Ordner namens ``rst``. In diesem Ordner können Sie dann alle Ihre Markdown-Dateien ablegen.

Einbinden der Startdatei als Rst 🪢
---------------------------------------------------------

Um eine bestimmte Markdown-Datei als Startdatei festzulegen, müssen Sie diese in der ``index.rst``-Datei einbinden. Dies geschieht mit dem Befehl ``include`` oder ``toctree``. Zum Beispiel:

.. code-block:: rst

   .. include:: your_startfile.md

Oder, wenn Sie eine Datei in das Inhaltsverzeichnis (``toctree``) aufnehmen möchten:

.. code-block:: rst

   .. toctree::
      :maxdepth: 2
      :caption: Inhaltsverzeichnis

      your_startfile.md

Ersetzen Sie ``your_startfile.md`` durch den Namen der gewünschten Markdown-Datei, die als Startdatei dienen soll.

Die Ordnerstruktur 📂
---------------------------------------------------------

Hier eine Übersicht der typischen Ordnerstruktur eines Sphinx-Projekts:

- ``_build``: Hier werden die fertigen HTML-Dateien gespeichert
- ``static``: Hier werden Bilder und andere statische Dateien gespeichert, die in die Markdown-Dateien eingebunden werden

Erstellen der Dokumentation 📄
---------------------------------------------------------

Um die Dokumentation zu erstellen, verwenden Sie den folgenden Befehl:

.. code-block:: bash

   ./make.bat html

Anstelle von ``html`` können Sie auch andere Ausgabeformate wie ``xml`` angeben. Beachten Sie, dass Sie möglicherweise zusätzliche Extensions benötigen. 📂
