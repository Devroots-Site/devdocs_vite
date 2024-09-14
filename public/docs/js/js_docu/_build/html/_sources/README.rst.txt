JavaScript 🚀
==============

JavaScript ist eine leistungsstarke Skriptsprache, die in Webseiten eingebettet wird, um Interaktivität und Benutzerfreundlichkeit zu steigern. 🌐 JavaScript ist eine der drei Kerntechnologien des World Wide Web, neben HTML und CSS. Mit JavaScript können Webseiten auf Benutzereingaben reagieren, Inhalte dynamisch ändern, Cookies setzen und auslesen und vieles mehr. JavaScript ist auch lokal auf deinem PC **ausführbar** – dafür muss jedoch `Node.js` installiert sein. 🖥️

## JavaScript in HTML einbinden

JavaScript-Code kann direkt in HTML-Dokumente eingebettet werden:

.. code-block:: html
    
    <!DOCTYPE html>
    <html>
        <body>
            <script>
                // JavaScript code goes here
            </script>
        </body>
    </html>

Oder du kannst den Code in einer externen Datei auslagern:

.. code-block:: html

    <!DOCTYPE html>
    <html>
        <head>
            <script src="script.js"></script>
        </head>
        <body>
        </body>
    </html>

## JavaScript in einer Datei ausführen 📂

JavaScript-Code kann in einer `.js`-Datei gespeichert und ausgeführt werden. Speichere den Code in einer Datei und führe ihn mit dem Befehl `node` aus:

.. code-block:: bash
    
    node script.js

## JavaScript in der Konsole ausführen 🖥️

Du kannst JavaScript-Code auch direkt in der Konsole ausführen. Starte die Node.js-Konsole und gib deinen Code ein:

.. code-block:: bash
    
    node
    > console.log("Hello World")
    Hello World

💡 **Tipp:** Die Node.js-Konsole ist ein großartiges Werkzeug, um schnell kleine JavaScript-Snippets zu testen!
