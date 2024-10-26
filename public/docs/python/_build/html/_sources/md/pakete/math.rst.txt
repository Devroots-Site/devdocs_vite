Math
====

import math
------------

Um das `math`-Modul zu verwenden, müssen Sie es importieren:

.. code-block:: python

   import math

   print(math.pi)  # 3.141592653589793

Funktionen und Konstanten
-------------------------

.. list-table:: 
   :header-rows: 1
   :widths: 25 50 25

   * - **Funktion/Konstante**
     - **Beschreibung**
     - **Beispiel**
   * - ``math.pi``
     - Die Kreiszahl π (Pi), ungefähr 3.14159.
     - ``math.pi``
   * - ``math.e``
     - Die Eulersche Zahl e, die Basis der natürlichen Logarithmen, ungefähr 2.71828.
     - ``math.e``
   * - ``math.tau``
     - Der Wert von 2π, ungefähr 6.28318.
     - ``math.tau``
   * - ``math.inf``
     - Repräsentiert die mathematische Unendlichkeit.
     - ``math.inf``
   * - ``math.nan``
     - Repräsentiert "Not a Number" (NaN). Wird verwendet, um ungültige oder undefinierte mathematische Werte darzustellen.
     - ``math.nan``
   * - ``math.sqrt(x)``
     - Berechnet die Quadratwurzel von ``x``.
     - ``math.sqrt(16)`` ergibt ``4.0``
   * - ``math.pow(x, y)``
     - Berechnet ``x`` hoch ``y`` (x^y).
     - ``math.pow(2, 3)`` ergibt ``8.0``
   * - ``math.exp(x)``
     - Berechnet e^x, wobei ``e`` die Eulersche Zahl ist.
     - ``math.exp(1)`` ergibt ``2.71828``
   * - ``math.log(x)``
     - Berechnet den natürlichen Logarithmus von ``x`` (Basis ``e``).
     - ``math.log(10)`` ergibt ``2.30258``
   * - ``math.log10(x)``
     - Berechnet den Logarithmus zur Basis 10 von ``x``.
     - ``math.log10(100)`` ergibt ``2.0``
   * - ``math.log2(x)``
     - Berechnet den Logarithmus zur Basis 2 von ``x``.
     - ``math.log2(8)`` ergibt ``3.0``
   * - ``math.sin(x)``
     - Berechnet den Sinus von ``x`` (x im Bogenmaß).
     - ``math.sin(math.pi/2)`` ergibt ``1.0``
   * - ``math.cos(x)``
     - Berechnet den Kosinus von ``x`` (x im Bogenmaß).
     - ``math.cos(0)`` ergibt ``1.0``
   * - ``math.tan(x)``
     - Berechnet den Tangens von ``x`` (x im Bogenmaß).
     - ``math.tan(math.pi/4)`` ergibt ``1.0``
   * - ``math.asin(x)``
     - Berechnet den Arkussinus von ``x`` (Ergebnis im Bogenmaß).
     - ``math.asin(1)`` ergibt ``math.pi/2``
   * - ``math.acos(x)``
     - Berechnet den Arkuskosinus von ``x`` (Ergebnis im Bogenmaß).
     - ``math.acos(1)`` ergibt ``0.0``
   * - ``math.atan(x)``
     - Berechnet den Arkustangens von ``x`` (Ergebnis im Bogenmaß).
     - ``math.atan(1)`` ergibt ``math.pi/4``
   * - ``math.degrees(x)``
     - Konvertiert Winkel ``x`` von Bogenmaß in Grad.
     - ``math.degrees(math.pi)`` ergibt ``180.0``
   * - ``math.radians(x)``
     - Konvertiert Winkel ``x`` von Grad in Bogenmaß.
     - ``math.radians(180)`` ergibt ``math.pi``
   * - ``math.sinh(x)``
     - Berechnet den hyperbolischen Sinus von ``x``.
     - ``math.sinh(0)`` ergibt ``0.0``
   * - ``math.cosh(x)``
     - Berechnet den hyperbolischen Kosinus von ``x``.
     - ``math.cosh(0)`` ergibt ``1.0``
   * - ``math.tanh(x)``
     - Berechnet den hyperbolischen Tangens von ``x``.
     - ``math.tanh(0)`` ergibt ``0.0``
   * - ``math.factorial(x)``
     - Berechnet die Fakultät von ``x`` (x!).
     - ``math.factorial(5)`` ergibt ``120``
   * - ``math.gcd(x, y)``
     - Berechnet den größten gemeinsamen Teiler (GGT) von ``x`` und ``y``.
     - ``math.gcd(8, 12)`` ergibt ``4``
   * - ``math.lcm(x, y)``
     - Berechnet das kleinste gemeinsame Vielfache (KGV) von ``x`` und ``y``.
     - ``math.lcm(4, 6)`` ergibt ``12``
   * - ``math.isqrt(x)``
     - Berechnet die ganzzahlige Quadratwurzel von ``x``.
     - ``math.isqrt(10)`` ergibt ``3``
   * - ``math.ceil(x)``
     - Rundet ``x`` auf die nächste ganze Zahl nach oben auf.
     - ``math.ceil(4.2)`` ergibt ``5``
   * - ``math.floor(x)``
     - Rundet ``x`` auf die nächste ganze Zahl nach unten ab.
     - ``math.floor(4.7)`` ergibt ``4``
   * - ``math.trunc(x)``
     - Schneidet die Dezimalstellen von ``x`` ab und gibt den ganzzahligen Anteil zurück.
     - ``math.trunc(4.7)`` ergibt ``4``
   * - ``math.fabs(x)``
     - Gibt den absoluten Betrag von ``x`` als Gleitkommazahl zurück.
     - ``math.fabs(-4.7)`` ergibt ``4.7``
   * - ``math.modf(x)``
     - Zerlegt ``x`` in den ganzzahligen und den gebrochenen Anteil und gibt beides als Tupel zurück.
     - ``math.modf(4.7)`` ergibt ``(0.7, 4.0)``
   * - ``math.copysign(x, y)``
     - Gibt ``x`` mit dem Vorzeichen von ``y`` zurück.
     - ``math.copysign(3, -1)`` ergibt ``-3.0``
   * - ``math.fsum(iterable)``
     - Gibt die präzise Summe der Werte im iterierbaren Objekt zurück.
     - ``math.fsum([0.1, 0.2, 0.3])`` ergibt ``0.6``
   * - ``math.prod(iterable)``
     - Gibt das Produkt der Werte im iterierbaren Objekt zurück.
     - ``math.prod([1, 2, 3, 4])`` ergibt ``24``
