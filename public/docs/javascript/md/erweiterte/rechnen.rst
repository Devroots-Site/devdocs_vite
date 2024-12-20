Rechnen mit Math
================

Die ``Math`` Klasse wird verwendet, um mathematische Operationen durchzuführen.

Math Methoden
-------------

.. list-table::
    :header-rows: 1

    * - Methode
      - Beschreibung
      - Beispiel
    * - ``abs()``
      - Gibt den absoluten Wert einer Zahl zurück
      - ``let a = -5;``\n``let b = Math.abs(a);``
    * - ``ceil()``
      - Rundet eine Zahl auf die nächste Ganzzahl auf
      - ``let a = 5.1;``\n``let b = Math.ceil(a);``
    * - ``floor()``
      - Rundet eine Zahl auf die nächste Ganzzahl ab
      - ``let a = 5.9;``\n``let b = Math.floor(a);``
    * - ``round()``
      - Rundet eine Zahl auf die nächste Ganzzahl
      - ``let a = 5.5;``\n``let b = Math.round(a);``
    * - ``max()``
      - Gibt die größte Zahl zurück
      - ``let a = 5;``\n``let b = 10;``\n``let c = Math.max(a, b);``
    * - ``min()``
      - Gibt die kleinste Zahl zurück
      - ``let a = 5;``\n``let b = 10;``\n``let c = Math.min(a, b);``
    * - ``pow()``
      - Gibt die Potenz einer Zahl zurück
      - ``let a = 2;``\n``let b = 3;``\n``let c = Math.pow(a, b);``
    * - ``random()``
      - Gibt eine zufällige Zahl zwischen 0 und 1 zurück
      - ``let a = Math.random();``
    * - ``sqrt()``
      - Gibt die Quadratwurzel einer Zahl zurück
      - ``let a = 16;``\n``let b = Math.sqrt(a);``

Konstanten
----------

.. list-table::
    :header-rows: 1

    * - Konstante
      - Beschreibung
      - Beispiel
    * - ``PI``
      - Die Kreiszahl Pi
      - ``let pi = Math.PI;``
    * - ``E``
      - Die Eulersche Zahl e
      - ``let e = Math.E;``

Beispiele
---------

.. code-block:: javascript

    let a = -5;
    let b = Math.abs(a);

    console.log(b); // 5
