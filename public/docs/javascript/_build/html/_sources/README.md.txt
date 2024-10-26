# JavaScript

JavaScript ist eine Skriptsprache, die in Webseiten eingebettet wird, um die Interaktivität und Benutzerfreundlichkeit zu erhöhen. JavaScript ist eine der drei Kern-Technologien des World Wide Web neben HTML und CSS. JavaScript ermöglicht es, dass Webseiten auf Benutzereingaben reagieren, den Inhalt dynamisch ändern, Cookies setzen und auslesen und vieles mehr. Man kann JavaScript auch Local auf seinen Pc **ausführen** dazu muss aber `node.js` Installiert sein.

## JavaScript in HTML einbinden

JavaScript-Code kann in HTML-Dokumente eingebettet werden

```html
<!DOCTYPE html>
<html>
    <body>
        <script>

        // JavaScript code goes here

        </script>
    </body>
</html>
```

oder in einer externen Datei

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="script.js"></script>
    </head>
    <body>
    </body>
</html>
```

## JavaScript in einer Datei ausführen

JavaScript-Code kann in einer Datei gespeichert und ausgeführt werden. Der Code wird in einer Datei mit der Dateiendung `.js` gespeichert. Der Code kann dann mit dem Befehl `node` ausgeführt werden.

```bash
node script.js
```

## JavaScript in der Konsole ausführen

JavaScript-Code kann auch in der Konsole ausgeführt werden

```bash
node
> console.log("Hello World")
Hello World
```
