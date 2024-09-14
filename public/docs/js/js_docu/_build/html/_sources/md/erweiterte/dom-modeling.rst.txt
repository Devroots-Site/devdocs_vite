DOM Modeling
==========================

Das DOM (Document Object Model) ist eine Programmierschnittstelle für HTML- und XML-Dokumente. Es stellt die Struktur des Dokuments als Baum dar, wobei jedes Element, Attribut und Textknoten als Knoten im Baum dargestellt wird. Das DOM-Modell ermöglicht es Entwicklern, auf die Struktur und den Inhalt eines Dokuments zuzugreifen und es zu ändern.

Zugriffs- und Änderungsmethoden
---------------------------------------------

Das DOM-Modell bietet verschiedene Methoden zum Zugriff und zur Änderung von Dokumenten. Einige der häufig verwendeten Methoden sind:

- **getElementById(id)** - gibt das Element mit der angegebenen ID zurück
- **getElementsByTagName(name)** - gibt eine Liste von Elementen mit dem angegebenen Tag-Namen zurück
- **getElementsByClassName(name)** - gibt eine Liste von Elementen mit der angegebenen Klasse zurück
- **querySelector(selector)** - gibt das erste Element zurück, das mit dem angegebenen CSS-Selektor übereinstimmt
- **querySelectorAll(selector)** - gibt eine Liste von Elementen zurück, die mit dem angegebenen CSS-Selektor übereinstimmen

Beispiel:

.. code-block:: javascript

    // Zugriff auf ein Element mit der ID "demo"
    var element = document.getElementById("demo");

    // Zugriff auf alle Elemente mit dem Tag-Namen "p"
    var elements = document.getElementsByTagName("p");

    // Zugriff auf alle Elemente mit der Klasse "example"
    var elements = document.getElementsByClassName("example");

    // Zugriff auf das erste Element mit der Klasse "example"
    var element = document.querySelector(".example");

    // Zugriff auf alle Elemente mit der Klasse "example"
    var elements = document.querySelectorAll(".example");

Elemente erstellen und hinzufügen
----------------------------------------

Das DOM-Modell ermöglicht es Entwicklern auch, neue Elemente zu erstellen und sie einem Dokument hinzuzufügen. Einige der häufig verwendeten Methoden sind:

- **createElement(tagName)** - erstellt ein neues Element mit dem angegebenen Tag-Namen
- **createTextNode(text)** - erstellt einen neuen Textknoten mit dem angegebenen Text
- **appendChild(node)** - fügt ein neues Kindknoten zum angegebenen Element hinzu
- **insertBefore(newNode, referenceNode)** - fügt ein neues Kindknoten vor dem angegebenen Referenzknoten hinzu
- **removeChild(node)** - entfernt ein Kindknoten aus dem angegebenen Element
- **replaceChild(newNode, oldNode)** - ersetzt ein Kindknoten durch einen anderen
- **cloneNode(deep)** - erstellt eine Kopie des angegebenen Elements
- **setAttribute(name, value)** - legt den Wert eines Attributs fest
- **getAttribute(name)** - gibt den Wert eines Attributs zurück
- **removeAttribute(name)** - entfernt ein Attribut
- **classList** - ermöglicht den Zugriff auf die Klassenliste eines Elements


HTML Elemente beeinflussen
----------------------------------------

Das DOM-Modell ermöglicht es Entwicklern auch, den Inhalt und das Aussehen von HTML-Elementen zu ändern. Einige der häufig verwendeten Methoden sind:

- **innerHTML** - gibt den HTML-Inhalt eines Elements zurück oder legt ihn fest
- **innerText** - gibt den Textinhalt eines Elements zurück oder legt ihn fest
- **style** - ermöglicht den Zugriff auf die CSS-Stile eines Elements
- **classList** - ermöglicht den Zugriff auf die Klassenliste eines Elements

Beispiel:

.. code-block:: javascript

    // Ändern des HTML-Inhalts eines Elements
    document.getElementById("demo").innerHTML = "Hello World";

    // Ändern des Textinhalts eines Elements
    document.getElementById("demo").innerText = "Hello World";

    // Ändern des CSS-Stils eines Elements
    document.getElementById("demo").style.color = "red";

    // Hinzufügen einer Klasse zu einem Element
    document.getElementById("demo").classList.add("example");

    // Entfernen einer Klasse von einem Element
    document.getElementById("demo").classList.remove("example");

    // Überprüfen, ob ein Element eine bestimmte Klasse hat
    var hasClass = document.getElementById("demo").classList.contains("example");

    // Umschalten einer Klasse für ein Element
    document.getElementById("demo").classList.toggle("example");

Das DOM-Modell bietet eine leistungsstarke Möglichkeit, auf HTML- und XML-Dokumente zuzugreifen und sie zu ändern. Entwickler können das DOM verwenden, um dynamische Webseiten zu erstellen, Benutzerinteraktionen zu implementieren und Inhalte zu aktualisieren. Durch die Verwendung von DOM-Methoden und -Eigenschaften können Entwickler die Struktur und den Inhalt von Webseiten effizient verwalten und anpassen.

Event-Handling
----------------------------------------

Das DOM-Modell ermöglicht es Entwicklern auch, auf Benutzerinteraktionen zu reagieren und Ereignisse zu behandeln. Einige der häufig verwendeten Methoden sind:

- **addEventListener(event, function)** - fügt einen Event-Listener zu einem Element hinzu
- **removeEventListener(event, function)** - entfernt einen Event-Listener von einem Element
- **onclick** - behandelt das Klicken auf ein Element
- **onmouseover** - behandelt das Bewegen der Maus über ein Element
- **onmouseout** - behandelt das Verlassen eines Elements mit der Maus
- **onchange** - behandelt das Ändern des Werts eines Elements

Beispiel:

.. code-blocK:: javascript

    // Hinzufügen eines Event-Listeners zu einem Element
    document.getElementById("demo").addEventListener("click", function() {
        alert("Hello World");
    });

    // Entfernen eines Event-Listeners von einem Element
    document.getElementById("demo").removeEventListener("click", function() {
        alert("Hello World");
    });

    // Behandeln des Klickens auf ein Element
    document.getElementById("demo").onclick = function() {
        alert("Hello World");
    };

    // Behandeln des Bewegens der Maus über ein Element
    document.getElementById("demo").onmouseover = function() {
        alert("Hello World");
    };

    // Behandeln des Verlassens eines Elements mit der Maus
    document.getElementById("demo").onmouseout = function() {
        alert("Hello World");
    };

    // Behandeln des Änderns des Werts eines Elements
    document.getElementById("demo").onchange = function() {
        alert("Hello World");
    };




