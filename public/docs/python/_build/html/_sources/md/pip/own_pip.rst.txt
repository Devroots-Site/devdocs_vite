Veröffentlichen Modul
===================================================================

Diese Dokumentation erklärt, wie man ein Python-Paket erstellt, es lokal und auf TestPyPI testet und es schließlich auf PyPI veröffentlicht. Sie beschreibt alle erforderlichen Schritte, von der Paketstruktur über das Hochladen bis hin zur Installation.

Paketstruktur
-------------

Um ein Python-Paket zu erstellen, benötigen Sie eine definierte Verzeichnisstruktur und einige wichtige Dateien:

.. code-block:: plaintext

   my_package/
   ├── my_package/
   │   ├── __init__.py
   │   └── my_module.py
   ├── tests/
   │   └── test_my_module.py
   ├── README.rst
   ├── setup.py
   ├── LICENSE
   └── MANIFEST.in

Erklärung der Struktur:

- **`my_package/`**: Das eigentliche Paket, das verteilt wird.
- **`__init__.py`**: Markiert das Verzeichnis als Python-Paket.
- **`my_module.py`**: Enthält den Python-Code des Pakets.
- **`tests/`**: Tests für das Paket.
- **`README.rst`**: Beschreibung des Pakets in reStructuredText-Format.
- **`setup.py`**: Das Skript zur Erstellung und Verwaltung des Pakets.
- **`LICENSE`**: Die Lizenz für Ihr Paket.
- **`MANIFEST.in`**: Stellt sicher, dass zusätzliche Dateien (wie `README.rst` und `LICENSE`) im Paket enthalten sind.


Beispiel: Erstellen eines einfachen CLI-Moduls
----------------------------------------------

Hier ist ein Beispiel für ein CLI-Modul, das Eingabe- und Ausgabeoptionen akzeptiert:

1. Erstellen Sie eine Python-Datei für das CLI, z.B. `cli.py` in Ihrem Paketordner:

.. code-block:: python

   import argparse

   def main():
       parser = argparse.ArgumentParser(description="Ein einfaches CLI-Tool")
       parser.add_argument("-i", "--input", help="Eingabedatei", required=True)
       parser.add_argument("-o", "--output", help="Ausgabedatei", required=True)

       args = parser.parse_args()

       print(f"Eingabedatei: {args.input}")
       print(f"Ausgabedatei: {args.output}")

   if __name__ == "__main__":
       main()


Erstellen von `setup.py`
------------------------

Die Datei `setup.py` ist der Kern Ihres Python-Pakets. Sie enthält Metadaten über Ihr Paket und Anweisungen, wie es installiert wird.

Beispiel einer `setup.py`:

.. code-block:: python

   from setuptools import setup, find_packages

   setup(
       name="my_package",
       version="0.1.0",
       author="Dein Name",
       author_email="email@example.com",
       description="Beschreibung des Pakets",
       long_description=open("README.rst").read(),
       long_description_content_type="text/x-rst",
       url="https://github.com/your_username/my_package",
       packages=find_packages(),
       classifiers=[
           "Programming Language :: Python :: 3",
           "License :: OSI Approved :: MIT License",
           "Operating System :: OS Independent",
       ],
       python_requires='>=3.6',
   )

Erklärung:

- **`name`**: Der Name des Pakets, unter dem es auf PyPI veröffentlicht wird.
- **`version`**: Die aktuelle Version des Pakets.
- **`author` und `author_email`**: Name und E-Mail-Adresse des Autors.
- **`description`**: Eine kurze Beschreibung des Pakets.
- **`long_description`**: Ausführliche Beschreibung, oft aus der `README.rst` gelesen.
- **`url`**: URL zur Projektseite (z.B. GitHub).
- **`packages`**: Findet automatisch alle Unterpakete.
- **`classifiers`**: Metadaten zur Python-Version, Lizenz, und mehr.
- **`python_requires`**: Gibt die Python-Versionen an, mit denen das Paket kompatibel ist.

Erstellen der `MANIFEST.in`
---------------------------

Um sicherzustellen, dass Dateien wie `README.rst` und `LICENSE` im Paket enthalten sind, verwenden Sie eine `MANIFEST.in`:

.. code-block:: plaintext

   include README.rst
   include LICENSE

Lokales Testen des Pakets
-------------------------

Bevor Sie das Paket veröffentlichen, testen Sie es lokal, indem Sie es installieren und sicherstellen, dass es wie erwartet funktioniert.

1. Erstellen Sie ein lokales Paket mit `setup.py`:

.. code-block:: bash

   python setup.py sdist bdist_wheel

2. Installieren Sie das Paket lokal:

.. code-block:: bash

   pip install .

Testen mit TestPyPI
-------------------

Bevor Sie das Paket auf PyPI veröffentlichen, sollten Sie es auf TestPyPI hochladen und testen.

1. Installieren Sie das Paket `twine`, um Pakete sicher hochzuladen:

.. code-block:: bash

   pip install twine

2. Erstellen Sie ein Distributionspaket:

.. code-block:: bash

   python setup.py sdist bdist_wheel

3. Laden Sie das Paket auf TestPyPI hoch:

.. code-block:: bash

   twine upload --repository-url https://test.pypi.org/legacy/ dist/*

4. Installieren Sie das Paket von TestPyPI:

.. code-block:: bash

   pip install --index-url https://test.pypi.org/simple/ my-package

Veröffentlichen auf PyPI
------------------------

Nachdem Sie das Paket auf TestPyPI erfolgreich getestet haben, können Sie es auf das echte PyPI hochladen.

1. Erstellen Sie die Distribution erneut, falls nötig:

.. code-block:: bash

   python setup.py sdist bdist_wheel

2. Laden Sie das Paket auf PyPI hoch:

.. code-block:: bash

   twine upload dist/*

Installation und Verwendung
---------------------------

Nach der Veröffentlichung können Sie das Paket wie jedes andere PyPI-Paket installieren:

.. code-block:: bash

   pip install my-package

Weitere nützliche Tools
-----------------------

- **`twine`**: Wird zum Hochladen von Paketen auf PyPI verwendet.
- **`setuptools`**: Ein wichtiges Tool zum Erstellen und Verwalten von Python-Paketen.
- **`wheel`**: Ermöglicht das Erstellen von `.whl`-Dateien (Wheel-Distributionen), die die Installation beschleunigen.
- **`pytest`**: Ein Test-Framework, das häufig verwendet wird, um Pakete vor der Veröffentlichung zu testen.

Fazit
-----

Mit den oben beschriebenen Schritten können Sie Python-Pakete einfach erstellen, lokal testen, auf TestPyPI validieren und schließlich auf PyPI veröffentlichen. Das lokale Testen und das Hochladen auf TestPyPI hilft, Fehler zu vermeiden, bevor das Paket für die breite Öffentlichkeit verfügbar gemacht wird.
