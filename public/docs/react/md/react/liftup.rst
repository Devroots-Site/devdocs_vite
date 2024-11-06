Lift Up 🛗 
======================================================================

Lift up bedeutet: Teilen von State zwischen Komponenten

.. important::
    **Thema**: "Lifting State Up" ist eine zentrale Technik in React, um State zwischen mehreren Komponenten zu teilen. Dabei wird der State aus den Komponenten, die ihn nutzen, in eine gemeinsame Elternkomponente verschoben, um eine einheitliche Datenquelle zu schaffen.

Was bedeutet "Lifting State Up"?  😓
--------------------------------------------
In React hat jede Komponente ihren eigenen lokalen State. Manchmal gibt es aber Situationen, in denen mehrere Komponenten denselben State benötigen. Um sicherzustellen, dass diese Komponenten synchron bleiben, wird der State in die nächste gemeinsame Elternkomponente verschoben. Diese Elternkomponente verwaltet den State und gibt ihn über **Props** an ihre Kinder weiter.

📌 **Beispiel**: Stell dir zwei **Input-Felder** vor, die beide einen Wert anzeigen, aber synchronisiert sein müssen, damit Änderungen im einen Feld sofort im anderen Feld sichtbar sind. Um dies zu erreichen, würde man den gemeinsamen Zustand in eine übergeordnete Komponente verlagern, die diesen verwaltet und an beide Input-Felder über Props weitergibt.

Warum den State "liften"? ⁉️
--------------------------------------------
Das Anheben von State in eine gemeinsame Elternkomponente hat mehrere Vorteile:

.. hint::
    - **Konsistenz**: Da der State an einem zentralen Ort verwaltet wird, sind alle betroffenen Komponenten auf dem gleichen Stand und es gibt keine Dateninkonsistenzen.
    - **Bessere Kontrolle**: Die zentrale Verwaltung des States erleichtert das Synchronisieren und Kontrollieren von Zustandsänderungen, besonders wenn mehrere Komponenten davon abhängig sind.
    - **Wiederverwendbarkeit**: Kinderkomponenten werden wiederverwendbarer, da sie keinen eigenen State mehr verwalten müssen, sondern nur noch Daten über Props erhalten.

Nachteile des "Lifting State Up" 👎
--------------------------------------------
Während das Anheben von State viele Vorteile bietet, gibt es auch Herausforderungen:

:warning: **Erhöhte Komplexität**: Das Verschieben von State in eine Elternkomponente kann den Code komplexer machen, insbesondere bei vielen Zustandsänderungen.

:warning: **Prop Drilling**: Wenn Props über mehrere Ebenen von Komponenten weitergegeben werden, kann dies zu unübersichtlichem Code führen. Besonders in tief verschachtelten Komponentenstrukturen kann es schwierig sein, den Überblick zu behalten, welche Props wohin gehen.

Voraussetzungen für erfolgreiches "Lifting State Up" 😱
----------------------------------------------------------
Um den State effektiv zu liften, sollten folgende Punkte beachtet werden:

1. **Gemeinsame Elternkomponente finden**: Der State muss in die nächste gemeinsame Elternkomponente der betroffenen Komponenten verschoben werden.
2. **Props-Vererbung**: Der geliftete State wird über Props an die Kinderkomponenten weitergegeben.
3. **Event-Handler**: Um State-Änderungen von den Kinderkomponenten aus zu ermöglichen, müssen Event-Handler ebenfalls über Props an diese weitergereicht werden.


Wann sollte man State "liften"? 🪖
-----------------------------------
Das "Lifting State Up" ist besonders dann sinnvoll, wenn mehrere Komponenten denselben State benötigen, um synchron zu bleiben. Ein häufiges Szenario ist, wenn das Verhalten einer Komponente die Darstellung einer anderen beeinflussen soll.

📌 **Beispiel**: Angenommen, du entwickelst eine Shopping-App. Du hast eine **Suchleiste** und eine **Produktliste**. Beide benötigen denselben State für den Suchbegriff, da die Produktliste nur die Produkte anzeigen soll, die zum Suchbegriff passen. In diesem Fall ist es sinnvoll, den State für den Suchbegriff in eine übergeordnete Komponente zu verschieben, die sowohl die Suchleiste als auch die Produktliste steuert.

Schritt-für-Schritt Beispiel: Temperaturkonverter 👟
-------------------------------------------------------
Um das Konzept besser zu verstehen, schauen wir uns ein einfaches Beispiel an: Ein **Temperaturkonverter**, der Celsius in Fahrenheit umwandelt. Angenommen, wir haben zwei Eingabefelder: eines für Celsius und eines für Fahrenheit. Beide müssen synchronisiert sein.

1. **Komponenten ohne State-Lifting**: Beide Eingabefelder haben ihren eigenen State, sind aber nicht miteinander verbunden. Wenn der Nutzer einen Wert in Celsius eingibt, bleibt das Fahrenheit-Feld unverändert.
   
2. **Komponenten mit State-Lifting**: Wir heben den State in eine Elternkomponente an, die sowohl den Celsius- als auch den Fahrenheit-Wert verwaltet. Wenn der Nutzer einen Wert in eines der beiden Felder eingibt, wird der State in der Elternkomponente aktualisiert und beide Felder werden synchronisiert.

Der Code dazu könnte in etwa so aussehen:

.. code-block:: jsx

    function TemperatureInput({ scale, temperature, onTemperatureChange }) {
        return (
            <fieldset>
                <legend>Enter temperature in {scale === 'c' ? 'Celsius' : 'Fahrenheit'}:</legend>
                <input 
                    value={temperature} 
                    onChange={e => onTemperatureChange(e.target.value)} 
                />
            </fieldset>
        );
    }

    function TemperatureConverter() {
        const [temperature, setTemperature] = useState('');

        const handleCelsiusChange = (value) => {
            setTemperature(value);
        };

        return (
            <div>
                <TemperatureInput 
                    scale="c" 
                    temperature={temperature} 
                    onTemperatureChange={handleCelsiusChange} 
                />
            </div>
        );
    }

Zusammenfassung 🤓
----------------------------
Das "Lifting State Up"-Konzept ist ein leistungsstarkes Werkzeug, um State zwischen Komponenten zu teilen und deren Synchronisierung zu erleichtern. Es ist besonders nützlich, wenn mehrere Komponenten denselben State benötigen oder wenn das Verhalten einer Komponente die Darstellung einer anderen beeinflusst. Aber wie bei jeder Technik bringt es auch Herausforderungen mit sich, vor allem bei der Komplexität und dem Prop Drilling. Eine sorgfältige Planung ist notwendig, um den Code wartbar zu halten.
