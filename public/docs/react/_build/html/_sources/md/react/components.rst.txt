Komponenten Guide
========================

In diesem Guide erfährst du, wie du in **React** eine Komponente erstellst, wie du `props` übergibst und wie du Methoden bindest, um interaktive Komponenten zu erstellen. 🚀


Erstellen einer Komponente 🖊️
-----------------------------------

In **React** kannst du auf zwei Arten Komponenten erstellen: **Funktionale Komponenten** und **Klassen-Komponenten**. Die moderne und am meisten verwendete Methode sind **Funktionale Komponenten**.

Beispiel einer einfachen funktionalen Komponente:

.. code-block:: react

   import React from 'react';

   const Greeting = () => {
     return <h1>Hallo, Welt!</h1>;
   };

   export default Greeting;

👉 **Erklärung:**

- `Greeting` ist eine funktionale Komponente, die einen einfachen `h1`-Tag rendert.
- Verwende `export default`, um die Komponente für andere Dateien zugänglich zu machen.

Props an Komponenten übergeben 🫱
-----------------------------------

**Props** (kurz für *Properties*) sind ein Mechanismus, um Daten von einer übergeordneten Komponente an eine untergeordnete Komponente zu übergeben. Dies ist einer der wichtigsten Mechanismen für die Kommunikation zwischen Komponenten.

Beispiel: Eine Komponente, die einen Namen als `prop` empfängt und anzeigt:

.. code-block:: react

   import React from 'react';

   const Greeting = (props) => {
     return <h1>Hallo, {props.name}!</h1>;
   };

   export default Greeting;

Um diese Komponente mit einem Namen aufzurufen:

.. code-block:: react

   import React from 'react';
   import Greeting from './Greeting';

   const App = () => {
     return <Greeting name="Alice" />;
   };

   export default App;

👉 **Erklärung:**
   - `props.name` enthält den Wert, der von der übergeordneten Komponente übergeben wurde.
   - Im obigen Beispiel wird `"Alice"` an die `Greeting`-Komponente übergeben und in der UI angezeigt.

Promps optional setzen 🔘
--------------------------------

Promps können mit einen **?** Optional gesetzt werden. 

.. code-block:: react

  export default function Opt({ name }) {
    return (
      <h1>{name ? "was drin" : "nix drin"}</h1>
    );
  }

  // Verwendung
  <Opt name="ja" />  // zeigt "was drin"
  <Opt />            // zeigt "nix drin"



  <Opt name=ja/> // was drin 
  <Opt> // nix drin 


Methoden als Props übergeben 🧪
----------------------------------------------

Manchmal möchtest du eine Methode von einer übergeordneten Komponente an eine untergeordnete Komponente übergeben, um sie zu triggern. Dies kann durch das Übergeben von **Methoden als Props** erfolgen.

Beispiel: Eine Schaltfläche, die eine Methode von der übergeordneten Komponente ausführt:

.. code-block:: react

   import React from 'react';

   const ActionButton = (props) => {
     return <button onClick={props.handleClick}>Klick mich!</button>;
   };

   export default ActionButton;

Die Methode in der übergeordneten Komponente:

.. code-block:: react

   import React from 'react';
   import ActionButton from './ActionButton';

   const App = () => {
     const handleClick = () => {
       alert('Button wurde geklickt!');
     };

     return <ActionButton handleClick={handleClick} />;
   };

   export default App;

👉 **Erklärung:**
   - Die `handleClick`-Methode wird als Prop an die `ActionButton`-Komponente übergeben.
   - Wenn der Button geklickt wird, wird die Methode `handleClick` in der übergeordneten Komponente ausgeführt.

Props und Methoden kombinieren ♾️
-------------------------------------------

Du kannst auch Daten und Methoden gleichzeitig übergeben, um komplexere Interaktionen zu ermöglichen.

Beispiel: Eine Komponente, die sowohl eine Nachricht als auch eine Methode über Props erhält:

.. code-block:: react

   import React from 'react';

   const MessageDisplay = (props) => {
     return (
       <div>
         <p>{props.message}</p>
         <button onClick={props.clearMessage}>Nachricht löschen</button>
       </div>
     );
   };

   export default MessageDisplay;

Die übergeordnete Komponente, die eine Nachricht und eine Methode bereitstellt:

.. code-block:: react

   import React, { useState } from 'react';
   import MessageDisplay from './MessageDisplay';

   const App = () => {
     const [message, setMessage] = useState('Willkommen zu meiner App!');

     const clearMessage = () => {
       setMessage('');
     };

     return (
       <div>
         <MessageDisplay message={message} clearMessage={clearMessage} />
       </div>
     );
   };

   export default App;

**Erklärung:**

- `MessageDisplay` zeigt eine Nachricht an und bietet eine Schaltfläche zum Löschen der Nachricht.
- Die Nachricht wird über `props.message` übergeben und die Methode `clearMessage` wird verwendet, um die Nachricht zu löschen, wenn der Button gedrückt wird.

Zusammenfassung 🤓
---------------------------------

In diesem Guide haben wir gelernt:
- Wie man **funktionale Komponenten** in React erstellt. 🛠️
- Wie man **Props** verwendet, um Daten an Komponenten zu übergeben. 📦
- Wie man **Methoden als Props** übergibt, um Interaktionen zu ermöglichen. 🔗
- Wie man **Props und Methoden kombiniert**, um komplexere Komponenten zu bauen. 🧩

Weiterführende Ressourcen 🌍
----------------------------------

- Offizielle React Dokumentation: https://reactjs.org/docs/getting-started.html 📚
- React Cheatsheet: https://devhints.io/react 🔖
