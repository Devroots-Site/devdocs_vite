=========================================
`useState` 
=========================================

.. note:: Diese Dokumentation bietet eine umfassende Übersicht zum `useState` Hook in React und erklärt seine Funktionsweise, insbesondere im Hinblick auf die Handhabung und Aktualisierung von Zuständen (State) in funktionalen Komponenten.

Überblick
=========
Der `useState` Hook in React ermöglicht es, **Zustand (State)** in funktionalen Komponenten zu verwalten. Anders als in Klassenkomponenten, bei denen der State durch `this.state` verwaltet wird, bietet `useState` eine einfache Möglichkeit, den lokalen Zustand einer Komponente in funktionalen Komponenten zu implementieren.

Syntax des `useState` Hooks </>
----------------------------------------------------

.. code-block:: javascript

   const [state, setState] = useState(initialState);

- **state**: Der aktuelle Zustand der Komponente.
- **setState**: Eine Funktion, die zum Aktualisieren des Zustands verwendet wird.
- **initialState**: Der anfängliche Wert des Zustands. Dieser wird nur beim initialen Rendern verwendet.

Wann `useState` verwendet wird 🔨
----------------------------------------------------

1. **Initialisierung von Zustand**:
   Der `useState` Hook wird verwendet, um den anfänglichen Zustand einer Komponente zu setzen. Dieser Zustand kann ein primitiver Wert (wie `string`, `number`, `boolean`) oder eine komplexe Datenstruktur (wie ein `object` oder `array`) sein.

.. code-block:: javascript

   const [count, setCount] = useState(0);  // count ist initial 0

2. **Aktualisierung des Zustands**:
   Der Zustand einer Komponente kann durch Aufrufen der Funktion `setState` geändert werden. Dies führt zu einem erneuten Rendering der Komponente mit dem neuen Zustand.

.. code-block:: javascript

   setCount(count + 1);  // count wird um 1 erhöht

   Wenn `setState` aufgerufen wird, wird die Komponente neu gerendert, und der neue Zustandwert wird verwendet.

3. **Beibehaltung von Zustand zwischen Renderings**:
   Der Wert, der durch `useState` gespeichert wird, bleibt über mehrere Renderings hinweg erhalten. Das bedeutet, dass bei jedem erneuten Rendern der Komponente der Zustand den zuletzt gesetzten Wert behält.

.. warning::
   Es ist wichtig zu beachten, dass das Ändern des Zustands durch `setState` asynchron sein kann, was bedeutet, dass der neue Zustand möglicherweise nicht sofort nach dem Aufruf von `setState` verfügbar ist.

Verwendung von Funktionen im Initialzustand ⚙️
------------------------------------------------------------------

In manchen Fällen kann die Berechnung des anfänglichen Zustands teuer sein (z.B. komplexe Berechnungen oder API-Abfragen). Um dies zu optimieren, kann der Initialzustand durch eine Funktion gesetzt werden, die nur einmal beim ersten Rendern ausgeführt wird.

.. code-block:: javascript

   const [count, setCount] = useState(() => {
     console.log('Initiale Berechnung des Zustands');
     return teureBerechnung();
   });

In diesem Beispiel wird `teureBerechnung()` nur einmal ausgeführt, auch wenn die Komponente mehrfach gerendert wird.

Aktualisierung des Zustands basierend auf dem vorherigen Zustand 🌑
----------------------------------------------------------------------------

Wenn der neue Zustand von dem vorherigen Zustand abhängt, ist es besser, eine **Funktion** an `setState` zu übergeben. Diese Funktion erhält den aktuellen Zustand als Argument und gibt den neuen Zustand zurück.

.. code-block:: javascript

   setCount(prevCount => prevCount + 1);

In diesem Beispiel sorgt die Verwendung der Funktion dafür, dass der vorherige Zustand korrekt berücksichtigt wird, selbst wenn mehrere Zustandsänderungen gleichzeitig geschehen.

Besonderheiten des `useState` Hooks 🍀
------------------------------------------------

1. **Unterschiede zu Klassenkomponenten**:
   Anders als in Klassenkomponenten, in denen der Zustand als Objekt verwaltet wird, erlaubt `useState`, jeden Zustand einzeln zu verwalten, ohne ihn in einem Objekt zu gruppieren.

2. **Mehrere Zustandsvariablen**:
   Du kannst in einer Komponente mehrere `useState` Hooks verwenden, um verschiedene Stücke von Zustand zu verwalten.

.. code-block:: javascript

   const [name, setName] = useState('');
   const [age, setAge] = useState(0);

   Hier werden `name` und `age` separat verwaltet, was die Logik klarer und einfacher macht.

3. **Zustand-Updates führen zu Re-Renders**:
   Jedes Mal, wenn der Zustand durch `setState` geändert wird, führt React ein erneutes Rendering der Komponente durch, um den neuen Zustand in der UI widerzuspiegeln.

4. **Initialisierung des Zustands**:
   Der anfängliche Zustand wird nur beim ersten Rendern der Komponente berücksichtigt. Wenn du den Zustand nachträglich ändern willst, musst du `setState` verwenden.

Typische Einsatzszenarien von `useState` 🏝️
------------------------------------------------------

1. **Formulareingaben**:
   Oft wird `useState` verwendet, um Formulardaten zu verwalten, da sich der Zustand eines Formularfeldes ändern muss, wenn der Benutzer Eingaben macht.

.. code-block:: javascript

   const [name, setName] = useState('');

   const handleChange = (event) => {
     setName(event.target.value);
   };

2. **Zähler (Counter)**:
   Ein einfacher Zähler ist ein klassisches Beispiel für die Verwendung von `useState`.

.. code-block:: javascript

   const [count, setCount] = useState(0);

   const increment = () => {
     setCount(count + 1);
   };

3. **UI-Zustände verwalten**:
   Der `useState` Hook wird oft verwendet, um den Zustand der Benutzeroberfläche zu verwalten, wie z.B. das Ein- oder Ausblenden von Modal-Fenstern oder das Aktivieren/Deaktivieren von Schaltflächen.

.. code-block:: javascript

   const [isVisible, setIsVisible] = useState(false);

   const toggleVisibility = () => {
     setIsVisible(!isVisible);
   };

Best Practices 🧑‍🏭
---------------------------

- Vermeide es, **Zustand in globalen Variablen** zu speichern, da dieser nicht zwischen Renderings beibehalten wird. Nutze immer `useState` oder andere React Hooks für den Zustand.
- Gruppiere nicht zu viele Zustandsvariablen in einem Hook. Es ist besser, **separate Hooks** für verschiedene Stücke von Zustand zu verwenden, um die Logik klar und übersichtlich zu halten.
- Nutze die **funktionale Form** von `setState`, wenn der neue Zustand vom vorherigen abhängt.

.. tip:: Nutze React Developer Tools, um den Zustand deiner Komponenten zu überwachen und zu debuggen.

Zusammenfassung 📑
-----------------------
Der `useState` Hook ist der grundlegende Weg, um Zustand in funktionalen Komponenten zu verwalten. Er bietet eine einfache API, um lokale Zustände zu definieren und zu aktualisieren. Durch das richtige Verständnis, wie und wann der Zustand geändert wird, kannst du sicherstellen, dass deine Komponente effizient und reaktiv bleibt. Stelle sicher, dass du die Best Practices beachtest, um unnötige Renderings und komplizierte Logik zu vermeiden.
