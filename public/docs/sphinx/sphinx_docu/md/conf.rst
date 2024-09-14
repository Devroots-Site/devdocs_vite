.. _conf_py:

==============================
conf.py 🔧
==============================

Die `conf.py`-Datei ist das Herzstück jeder Sphinx-Dokumentation. In dieser Datei werden alle wichtigen Einstellungen und Parameter festgelegt, die das Verhalten und das Aussehen der generierten Dokumentation steuern. Hier wird alles Wesentliche beschrieben, was Sie in der `conf.py`-Datei konfigurieren können.

Grundlegende Einstellungen
===========================

Projektinformationen
---------------------

In diesem Abschnitt werden grundlegende Projektinformationen definiert, die in der Dokumentation angezeigt werden.

- **project**: Der Name des Projekts.
- **author**: Der Name des Autors oder der Autoren des Projekts.
- **release**: Die aktuelle Version des Projekts.

Beispiel:

.. code-block:: rst

    project = 'Mein Projekt'
    author = 'Max Mustermann'
    release = '1.0.0'

Allgemeine Konfigurationen
==========================

- **extensions**: Eine Liste der Sphinx-Erweiterungen, die für das Projekt aktiviert sind.
- **templates_path**: 📂 Ein Verzeichnis, in dem benutzerdefinierte Templates abgelegt werden können. Diese Templates können verwendet werden, um das Aussehen von Dokumentationsseiten individuell anzupassen. Typischerweise können Sie hier HTML-Dateien oder andere Dateien ablegen, die Sphinx bei der Generierung der Seiten verwenden soll.

- **exclude_patterns**: 🚫 Eine Liste von Dateipfaden, die von der Dokumentation ausgeschlossen werden sollen. Dies ist nützlich, um bestimmte Dateien oder Verzeichnisse (z.B. Build-Ordner, temporäre Dateien) vom Dokumentationsprozess auszuschließen, um die Ausgabe sauber zu halten.

Beispiel:

.. code-block:: rst

    extensions = ['sphinx.ext.autodoc', 'sphinx.ext.napoleon']
    templates_path = ['_templates']  # 📂 Hier liegen die benutzerdefinierten Templates
    exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']  # 🚫 Diese Dateien werden ausgeschlossen

HTML-Einstellungen
==================

Sphinx bietet umfangreiche Anpassungsmöglichkeiten für das HTML-Layout und das Design Ihrer Dokumentation.

HTML-Theme
----------

- **html_theme**: Der Name des Themes, das für die HTML-Ausgabe verwendet wird. Beliebte Optionen sind "alabaster", "sphinx_rtd_theme", usw.

Beispiel:

.. code-block:: rst

    html_theme = 'sphinx_rtd_theme'

Logo und Favicon
----------------

- **html_logo**: Der Pfad zum Logo-Bild, das in der HTML-Dokumentation angezeigt wird.
- **html_favicon**: Der Pfad zum Favicon, das im Browser-Tab angezeigt wird.

Beispiel:

.. code-block:: rst

    html_logo = '_static/logo.png'
    html_favicon = '_static/favicon.ico'

Weitere HTML-Einstellungen
---------------------------

- **html_static_path**: Ein Verzeichnis, in dem statische Dateien (z.B. CSS, Bilder) abgelegt werden.
- **html_title**: Der Titel der HTML-Seite.
- **html_show_sourcelink**: Ein Boolean-Wert, der bestimmt, ob ein Link zum Quellcode angezeigt wird.

Beispiel:

.. code-block:: rst

    html_static_path = ['_static']
    html_title = 'Mein Projekt Dokumentation'
    html_show_sourcelink = True

Spezielle Konfigurationen
==========================

Es gibt eine Reihe weiterer Optionen, die spezifische Anforderungen und Funktionen in Sphinx anpassen können.

- **autodoc_member_order**: Die Reihenfolge, in der die Mitglieder in der Dokumentation angezeigt werden.
- **napoleon_google_docstring**: Legt fest, ob Google-Style Docstrings verwendet werden.

Beispiel:

.. code-block:: rst

    autodoc_member_order = 'bysource'
    napoleon_google_docstring = True

Abschluss
=========

Die `conf.py`-Datei bietet eine leistungsstarke Möglichkeit, Ihre Sphinx-Dokumentation genau auf Ihre Bedürfnisse abzustimmen. Es ist ratsam, die Sphinx-Dokumentation zu den einzelnen Optionen zu konsultieren, um ein vollständiges Verständnis der verfügbaren Konfigurationsmöglichkeiten zu erhalten.

Weitere Informationen finden Sie in der offiziellen Sphinx-Dokumentation: https://www.sphinx-doc.org/en/master/usage/configuration.html
