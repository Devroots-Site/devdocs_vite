.. _nuetzliche-extensions:

===============================
Extensions 📊
===============================

:date: 2024-08-14
:author: Bichler Bastian

Sphinx unterstützt eine Vielzahl von Erweiterungen (Extensions), die die Arbeit mit Markdown-Dateien erleichtern und zusätzliche Funktionen bieten. 🚀 Hier sind einige besonders nützliche Extensions und wie man sie in Sphinx einbindet.

1. `recommonmark` 📝
=================

`recommonmark` ermöglicht die Verwendung von Markdown-Dateien in Sphinx. Es konvertiert Markdown in reStructuredText, was die Integration von Markdown-Dateien in Sphinx-Dokumentationen erheblich vereinfacht. 

🔧 **Installation:**

.. code-block:: bash

   pip install recommonmark

📦 **Einbinden in Sphinx:**

In Ihrer ``conf.py``-Datei fügen Sie folgende Zeile hinzu, um `recommonmark` zu aktivieren:

.. code-block:: python

   extensions = [
       'recommonmark',
   ]

Damit Sphinx Ihre Markdown-Dateien erkennt, fügen Sie außerdem diesen Abschnitt in die ``conf.py``-Datei ein:

.. code-block:: python

   source_suffix = {
       '.rst': 'restructuredtext',
       '.md': 'markdown',
   }

2. `myst-parser` 🌟
================

Der `myst-parser` ist eine leistungsstarke Alternative zu `recommonmark`. Er bietet erweiterte Unterstützung für Markdown und zusätzliche Funktionen wie verbesserte Syntax für Referenzen, Tabellen und vieles mehr. 🌟

🔧 **Installation:**

.. code-block:: bash

   pip install myst-parser

📦 **Einbinden in Sphinx:**

Aktivieren Sie den `myst-parser` in Ihrer ``conf.py``:

.. code-block:: python

   extensions = [
       'myst_parser',
   ]

Falls Sie erweiterte MyST-Syntax verwenden möchten, können Sie zusätzlich folgende Konfigurationen in der ``conf.py`` vornehmen:

.. code-block:: python

   myst_enable_extensions = [
       "deflist",       # Für Definitionslisten
       "colon_fence",   # Für Kolon-Zäune
   ]

🔍 **Erweiterte MyST-Syntax:**

- **"deflist" - Definitionslisten** 📚

  Ermöglicht die Verwendung von Definitionslisten in Markdown:

  .. code-block:: markdown

     Begriff
     :   Definition für den Begriff.

     Ein weiterer Begriff
     :   Die Definition für diesen weiteren Begriff.

- **"colon_fence" - Kolon-Zäune** 🧱

  Ermöglicht es, Inhalte wie Code-Blöcke oder Zitate mit doppelten Doppelpunkten (`:::`) einzuschließen:

  .. code-block:: markdown

     :::
        Dies ist ein Block, der von Kolon-Zäunen umschlossen ist.
     :::

3. `sphinx_markdown_tables` 🧩
===========================

Wenn Sie komplexere Tabellenstrukturen benötigen, bietet `sphinx_markdown_tables` eine hervorragende Erweiterung zu den grundlegenden Tabellensupports von `recommonmark` und `myst-parser`. 🧩

🔧 **Installation:**

.. code-block:: bash

   pip install sphinx-markdown-tables

📦 **Einbinden in Sphinx:**

Aktivieren Sie die Erweiterung in Ihrer ``conf.py``:

.. code-block:: python

   extensions = [
       'sphinx_markdown_tables',
   ]

4. `sphinx.ext.autosectionlabel` 🏷️
================================

Diese Extension generiert automatisch Labels für Ihre Überschriften, was die Verlinkung innerhalb der Dokumentation vereinfacht. 🔗

📦 **Einbinden in Sphinx:**

Diese Extension ist bereits in Sphinx integriert. Fügen Sie sie einfach in Ihre ``conf.py`` hinzu:

.. code-block:: python

   extensions = [
       'sphinx.ext.autosectionlabel', 
   ]

Um die Labelerzeugung für alle Abschnitte zu aktivieren, können Sie folgendes hinzufügen:

.. code-block:: python

   autosectionlabel_prefix_document = True

5. `sphinx_rtd_theme` 🎨
=====================

Das `sphinx_rtd_theme` (Read the Docs Theme) bietet eine ansprechende und benutzerfreundliche Oberfläche für Ihre Dokumentation. Es ist eines der beliebtesten Themes für Sphinx. 🎨

🔧 **Installation:**

.. code-block:: bash

   pip install sphinx_rtd_theme

📦 **Einbinden in Sphinx:**

Um das Theme zu aktivieren, setzen Sie in Ihrer ``conf.py``:

.. code-block:: python

   html_theme = "sphinx_rtd_theme"

📚 **Weitere Themes:**

[Hier](https://sphinx-themes.org/#themes) finden Sie eine Vielzahl weiterer Themes, die Sie verwenden können.

6. `sphinx_copybutton` ✂️
======================

Die `sphinx_copybutton` Extension fügt ein praktisches "Kopieren"-Symbol zu Ihren Code-Blöcken hinzu, sodass Leser den Code mit einem Klick kopieren können. ✂️

🔧 **Installation:**

.. code-block:: bash

   pip install sphinx-copybutton

📦 **Einbinden in Sphinx:**

Aktivieren Sie die Extension in Ihrer ``conf.py``:

.. code-block:: python

   extensions = [
       'sphinx_copybutton',
   ]

Weitere Nützliche Extensions 🛠️
============================

Sphinx bietet eine Vielzahl weiterer nützlicher Extensions. Entdecken Sie sie in der offiziellen Dokumentation: [Hier](https://www.sphinx-doc.org/en/master/usage/extensions/index.html) 🌐

