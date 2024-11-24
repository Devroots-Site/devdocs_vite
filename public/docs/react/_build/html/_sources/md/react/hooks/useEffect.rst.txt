=========================================
`useEffect` 
=========================================

.. note:: Diese Dokumentation bietet eine umfassende Übersicht zum `useEffect` Hook in React und erklärt seine Funktionsweise, insbesondere im Hinblick auf Rendering und Updates.

Überblick
=========
Der `useEffect` Hook ist eine essentielle Funktion in React, die es erlaubt, **Nebeneffekte** in funktionalen Komponenten auszuführen. Dazu zählen das Abrufen von Daten, direkte DOM-Manipulationen, das Setzen von Timern und vieles mehr.

Syntax des `useEffect` Hooks </>
----------------------------------------------

.. code-block:: javascript

   useEffect(() => {
     // Effekt Logik
     return () => {
       // Cleanup Logik (optional)
     };
   }, [dependencies]);

- **Effekt-Logik**: Wird bei bestimmten Bedingungen (siehe Abhängigkeiten) ausgeführt.
- **Cleanup Logik (optional)**: Führt Aufräumarbeiten aus, bevor der Effekt erneut aufgerufen oder die Komponente entfernt wird.
- **Dependencies**: Eine Liste von Abhängigkeiten, die den Hook steuern. Änderungen an diesen Werten lösen den Effekt erneut aus.
 
Wann `useEffect` ausgeführt wird ⏲️
----------------------------------------------

1. **Initiales Rendering**:
   Beim ersten Rendering der Komponente wird der Effekt ausgeführt. Zu diesem Zeitpunkt ist die Komponente bereits in den DOM gerendert.

2. **Bei Änderungen von Abhängigkeiten**:
   Wenn in der Abhängigkeitsliste des `useEffect` Hooks eine Variable verändert wird, wird der Effekt erneut aufgerufen. Diese Liste wird als **Dependencies Array** bezeichnet.

.. code-block:: javascript

   useEffect(() => {
     console.log('Dieser Effekt wird ausgeführt, wenn `count` sich ändert.');
   }, [count]);

   In diesem Beispiel wird der Effekt jedes Mal ausgeführt, wenn sich die Variable `count` ändert.

3. **Kein Dependencies Array**:
   Wenn kein Dependencies Array angegeben wird, wird der Effekt nach jedem Rendern der Komponente ausgeführt.

.. warning::
   Wenn du kein Dependencies Array angibst, führt das dazu, dass der Effekt **nach jedem Render** aufgerufen wird. Dies kann zu Performance-Problemen führen.

.. code-block:: javascript

   useEffect(() => {
     console.log('Dieser Effekt wird bei jedem Rendern ausgeführt.');
   });

4. **Leeres Dependencies Array**:
   Wenn du ein leeres Array als Dependency übergibst (`[]`), wird der Effekt nur einmal beim initialen Rendern der Komponente aufgerufen.

.. code-block:: javascript

   useEffect(() => {
     console.log('Dieser Effekt wird nur einmal ausgeführt.');
   }, []);

   Das leere Array signalisiert, dass es keine Abhängigkeiten gibt, die sich ändern könnten.

5. **Cleanup-Funktion**:
   Falls eine Cleanup-Funktion im `useEffect` definiert ist, wird diese ausgeführt, bevor der Effekt erneut aufgerufen wird (z. B. bei einem erneuten Rendern oder vor dem Entfernen der Komponente aus dem DOM).

.. code-block:: javascript

   useEffect(() => {
     const timer = setTimeout(() => {
       console.log('Effekt ausgeführt');
     }, 1000);

     // Cleanup: Timer wird gelöscht, bevor der Effekt erneut aufgerufen wird
     return () => clearTimeout(timer);
   }, [count]);

Abhängigkeiten und Optimierung ⚙️
----------------------------------------------
Das Setzen von Abhängigkeiten im `useEffect` ist ein entscheidender Faktor für die Leistung und das Verhalten einer Komponente. Es ist wichtig, nur die **notwendigen Abhängigkeiten** in das Dependencies Array aufzunehmen, um unnötige Neuberechnungen und Renderings zu vermeiden.

- **Überflüssige Abhängigkeiten** können zu Performance-Problemen führen.
- **Fehlende Abhängigkeiten** können unerwartetes Verhalten verursachen, da der Effekt nicht ausgeführt wird, wenn sich relevante Daten ändern.

Typische Einsatzszenarien von `useEffect` 🔨
----------------------------------------------

1. **Datenabruf** (Fetching von API-Daten):
   Der `useEffect` Hook wird oft verwendet, um Daten beim Initialrendering zu laden.

.. code-block:: javascript

   useEffect(() => {
     fetchData();
   }, []);

2. **Abonnements**:
   Abonnements wie WebSocket-Verbindungen werden oft in einem `useEffect` erstellt, und in der Cleanup-Funktion wieder entfernt.

.. code-block:: javascript

   useEffect(() => {
     const subscription = subscribeToData();

     return () => {
       subscription.unsubscribe();
     };
   }, []);

3. **Direkte DOM-Manipulation**:
   In seltenen Fällen, wenn direkte DOM-Manipulationen erforderlich sind, kann `useEffect` verwendet werden.

Best Practices 👾
----------------------------------------------

- Vermeide es, **zustandsabhängige Logik** in den Haupt-Renderfluss zu legen. Nutze dafür `useEffect`.
- Achte auf **korrekte Abhängigkeiten** im Dependencies Array, um unnötige oder fehlende Neuberechnungen zu vermeiden.
- Verwende Cleanup-Funktionen, um **Speicherlecks** und unerwartete Nebenwirkungen zu verhindern.

.. tip:: Nutze `eslint-plugin-react-hooks`, um sicherzustellen, dass du deine Abhängigkeiten korrekt setzt.

Zusammenfassung 📑
----------------------------------------------
Der `useEffect` Hook ist ein mächtiges Werkzeug in React, das das Ausführen von Nebeneffekten in funktionalen Komponenten ermöglicht. Indem du verstehst, wann und warum der Effekt erneut ausgeführt wird, kannst du sicherstellen, dass deine Komponente optimal arbeitet, ohne überflüssige Renderings zu verursachen. Halte dich an die Best Practices und stelle sicher, dass deine Abhängigkeiten immer auf dem aktuellen Stand sind, um unerwartetes Verhalten zu vermeiden.
