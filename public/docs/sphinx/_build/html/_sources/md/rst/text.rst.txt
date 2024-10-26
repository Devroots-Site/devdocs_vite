Formatierungen 🔖
============================

Texte  📰
-------------------


+-------------------+-------------------+-------------------+
| Usage             | syntax            | HTML Rednering    |
+===================+===================+===================+
| italic            | `*italic*`        | *italic*          |
+-------------------+-------------------+-------------------+
| bold              | `**bold**`        | **bold**          |
+-------------------+-------------------+-------------------+

Bilder und Links 🖼️
---------------------------

In reStructuredText können Sie Bilder und Links mit spezifischen Directives einbinden. Hier ist eine Übersicht, wie dies funktioniert:

.. list-table:: 
   :widths: 20 40 40
   :header-rows: 1

   * - **Usage**
     - **Syntax**
     - **Beispiel**
   * - **Bild**
     - ``.. image::``
     - .. code-block:: rst

          .. image:: /path/to/image.png
             :alt: Bildbeschreibung
             :target: https://example.com
             :width: 100px
             :height: 100px
   * - **Link**
     - `` `Text <URL>`_ ``
     - .. code-block:: rst

          `Google <https://www.google.com>`_


Kommentare und Zitate 🗨️
---------------------------

+-------------------+-------------------+
| Usage             | syntax            |
+===================+===================+
| Kommentar         | `.. comment::`    |
|                   |                   | 
+-------------------+-------------------+
| Zitat             | `.. quote::`      |
|                   |                   |
+-------------------+-------------------+
