Toctree
=================

📚 **Toctree**, bekannt auch als Inhaltsverzeichnis, ist ein wichtiger Bestandteil von Sphinx-Dokumentationen. Es ermöglicht Ihnen, eine hierarchische Struktur für Ihre Dokumentation zu erstellen und die Navigation zwischen den einzelnen Abschnitten zu erleichtern.

Ein Toctree kann in einer RST-Datei mit dem Befehl ``toctree`` erstellt werden. Hier ist ein Beispiel:

.. code-block:: rst

   .. toctree::
      :maxdepth: 2
      :caption: Inhaltsverzeichnis

      abschnitt1
      abschnitt2
      abschnitt3
      abschnitt

Dieses Beispiel muss in die `index.rst`-Datei eingebunden werden, und die Abschnitte werden dann dargestellt.

🔧 **Toctree Optionen**
---------------------------

Der `toctree`-Befehl unterstützt eine Vielzahl von Optionen, die das Verhalten und das Aussehen des Inhaltsverzeichnisses beeinflussen:

- **:maxdepth:** 🎚️ Legt die maximale Tiefe der Verzeichnisstruktur fest, die im Inhaltsverzeichnis angezeigt wird. Standardmäßig wird die gesamte Tiefe angezeigt.

  Beispiel:

  .. code-block:: rst

     :maxdepth: 2

- **:caption:** 🏷️ Fügt eine Überschrift zum Toctree hinzu. Diese Überschrift wird über der Liste der verknüpften Dokumente angezeigt.

  Beispiel:

  .. code-block:: rst

     :caption: Inhaltsverzeichnis

- **:numbered:** 🔢 Fügt Nummerierungen zu den Einträgen im Inhaltsverzeichnis hinzu. Dies ist nützlich, um eine klare Struktur der Dokumentation zu schaffen.

  Beispiel:

  .. code-block:: rst

     :numbered:

- **:titlesonly:** 📜 Zeigt nur die Titel der Dokumente an und nicht die Unterabschnitte. Dies ist hilfreich, um das Inhaltsverzeichnis kompakt zu halten.

  Beispiel:

  .. code-block:: rst

     :titlesonly:

- **:hidden:** 👁️ Versteckt das Toctree aus der generierten Dokumentation. Es wird nicht angezeigt, aber die Seiten werden weiterhin verarbeitet und eingebunden.

  Beispiel:

  .. code-block:: rst

     :hidden:

- **:glob:** 🌍 Ermöglicht die Verwendung von Platzhaltern (Wildcards) für Dateinamen, um mehrere Dateien auf einmal einzubinden.

  Beispiel:

  .. code-block:: rst

     :glob:

- **:includehidden:** 🕵️ Zeigt auch versteckte `toctrees` an, die normalerweise ausgeblendet sind.

  Beispiel:

  .. code-block:: rst

     :includehidden:

📑 **Dropdown in Toctree**
----------------------------

Manchmal kann es sinnvoll sein, ein Dropdown-Menü im Toctree zu erstellen, um die Navigation zu verbessern. Dies kann gemacht werden, indem in der `index.rst`-Datei ein Toctree eingebunden wird und die Abschnitte in einer anderen Datei sind.

.. code-block:: rst

    Toctree in index.rst
   .. toctree::
      :maxdepth: 2
      :caption: Inhaltsverzeichnis

      abschnitt1
      abschnitt2
      abschnitt3
      abschnittdatei

    Abschnittsdatei
    .. toctree::
       :maxdepth: 2
       :caption: Abschnitt 1

       unterabschnitt1
       unterabschnitt2
       unterabschnitt3

In diesem Beispiel wird ein Toctree normal von Abschnitt 1 bis 3 gemacht, und bei der Abschnittsdatei wird ein Dropdown-Menü erstellt, das die Unterabschnitte 1 bis 3 enthält.

🗂️ **Mehrere Toctrees in einer Datei**
--------------------------------------------

Es ist auch möglich, mehrere Toctrees in einer Datei zu erstellen, um verschiedene Abschnitte oder Themen zu gruppieren. Dies kann hilfreich sein, um die Dokumentation übersichtlicher zu gestalten und die Navigation zu verbessern.

.. code-block:: rst

   .. toctree::
      :maxdepth: 2
      :caption: Abschnitt 1

      abschnitt1
      abschnitt2
      abschnitt3

   .. toctree::
      :maxdepth: 2
      :caption: Abschnitt 2

      abschnitt4
      abschnitt5
      abschnitt6
