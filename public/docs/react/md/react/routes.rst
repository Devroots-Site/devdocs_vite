
Routing 🧭
==============================================

.. note:: Diese Dokumentation bietet eine detaillierte Übersicht zum `react-router-dom` Package, insbesondere zu `BrowserRouter`. Sie erklärt, wie man Routing in einer React-Applikation installiert und verwendet, um Seiten dynamisch basierend auf der URL zu wechseln.

Einführung
~~~~~~~~~~~~~~~~
React Router ist eine Bibliothek, die das Routing in React-Anwendungen ermöglicht. Dies erlaubt es, verschiedene **Seiten** oder **Ansichten** basierend auf der URL anzuzeigen, ohne die Seite neu zu laden. Es gibt verschiedene Router in React Router, aber wir konzentrieren uns hier auf `BrowserRouter`, der für die meisten Webanwendungen verwendet wird.

Installation 🛠️
----------------------------
Um React Router in deiner React-Applikation zu verwenden, musst du es zuerst installieren. Führe den folgenden Befehl in deinem Projektverzeichnis aus:

.. code-block:: bash

   npm install react-router-dom

Dieser Befehl installiert das React Router Paket, das du benötigst, um Routing in deiner App zu implementieren.

Grundlegende Verwendung von `BrowserRouter` 🔨
------------------------------------------------------
`BrowserRouter` wird um deine Anwendung gelegt, um die Routing-Funktionalität bereitzustellen. Es verwendet die HTML5-History-API, um die Navigation und URL-Änderungen ohne vollständige Seitenaktualisierungen zu ermöglichen.

Hier ist ein einfaches Beispiel, wie du `BrowserRouter` einrichtest:

.. code-block:: react

   import React from 'react';
   import ReactDOM from 'react-dom';
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import App from './App';

   ReactDOM.render(
     <BrowserRouter>
       <App />
     </BrowserRouter>,
     document.getElementById('root')
   );

In diesem Beispiel wird die gesamte React-App in den `BrowserRouter` eingepackt, damit Routing in allen untergeordneten Komponenten funktioniert.

Routing in der Anwendung 🧭
------------------------------------------------------
Um Routing in deiner Anwendung zu implementieren, musst du in deiner App-Komponente (oder einer beliebigen anderen Komponente) die Routes definieren. Jede Route wird mit dem `Route`-Element angegeben und gibt an, welche Komponente angezeigt wird, wenn eine bestimmte URL aufgerufen wird.

Beispiel für grundlegendes Routing:

.. code-block:: react

   import { Routes, Route } from 'react-router-dom';
   import Essen from './Essen';
   import Speisekarte from './Speisekarte';

   function App() {
     return (
       <div>
         <Routes>
           <Route path="/essen" element={<Essen />} />
           <Route path="/speisekarte" element={<Speisekarte />} />
         </Routes>
       </div>
     );
   }

- **path**: Dies ist der URL-Pfad, der zu der jeweiligen Komponente führt. Im Beispiel wird `/essen` den `Essen`-Komponentenrender anzeigen und `/speisekarte` die `Speisekarte`-Komponentenrender.
- **element**: Die Komponente, die gerendert wird, wenn der Pfad in der URL übereinstimmt.

Beispiel für spezifische Routen 🎲
------------------------------------------------------

**Szenario:**
Wenn der Benutzer die Route `/essen` eingibt, soll der Inhalt auf der aktuellen Seite angezeigt werden. Bei der Route `/speisekarte` soll eine andere Seite gerendert werden.

Du kannst dieses Szenario mit React Router umsetzen, indem du für `/essen` die Inhalte direkt auf der Seite renderst und für `/speisekarte` eine neue Ansicht erstellst.

1. **Essen-Komponente** (Inhalt auf derselben Seite anzeigen):

.. code-block:: react

   function Essen() {
     return (
       <div>
         <h1>Essen</h1>
         <p>Hier ist der Inhalt für die Essen-Seite.</p>
       </div>
     );
   }

2. **Speisekarte-Komponente** (Wechsel zu einer anderen Seite):

.. code-block:: react

   function Speisekarte() {
     return (
       <div>
         <h1>Speisekarte</h1>
         <p>Hier ist der Inhalt für die Speisekarte-Seite.</p>
       </div>
     );
   }

In deiner Haupt-App-Komponente verwendest du dann `Routes` und `Route`, um das gewünschte Verhalten für `/essen` und `/speisekarte` zu erzielen.

Komplettes Beispiel für die App-Komponente:

.. code-block:: react

   import { Routes, Route, Link } from 'react-router-dom';
   import Essen from './Essen';
   import Speisekarte from './Speisekarte';

   function App() {
     return (
       <div>
         <nav>
           <ul>
             <li><Link to="/essen">Essen</Link></li>
             <li><Link to="/speisekarte">Speisekarte</Link></li>
           </ul>
         </nav>

         <Routes>
           <Route path="/essen" element={<Essen />} />
           <Route path="/speisekarte" element={<Speisekarte />} />
         </Routes>
       </div>
     );
   }

In diesem Beispiel:

- Der Benutzer kann zwischen den Seiten navigieren, indem er auf die Links in der Navigation klickt.
- Wenn der Benutzer `/essen` besucht, wird der Inhalt der **Essen-Komponente** auf derselben Seite angezeigt.
- Wenn der Benutzer `/speisekarte` besucht, wird die **Speisekarte-Komponente** gerendert, die eine andere Ansicht darstellt.

Link-Komponente 🔗
------------------------------------------------------
Die `Link`-Komponente wird verwendet, um das Navigieren zwischen den Routen ohne vollständige Seitenneuladen zu ermöglichen. Statt herkömmliche HTML-Anker (`<a>`-Elemente) zu verwenden, sollten `Link`-Komponenten aus React Router genutzt werden.

Beispiel:

.. code-block:: react

   <Link to="/essen">Essen</Link>

- **to**: Der URL-Pfad, zu dem der Link führt. Wenn der Benutzer darauf klickt, wechselt die Route zu `/essen`.

Navigieren zwischen Routen 🧭
------------------------------------------------------
Um programmgesteuert zwischen Routen zu navigieren, kannst du das `useNavigate`-Hook verwenden. Dies ist besonders nützlich, wenn du aufgrund eines Ereignisses, wie einer Formulareinreichung oder eines Button-Klicks, die Route ändern möchtest.

Beispiel für die Verwendung von `useNavigate`:

.. code-block:: react

   import { useNavigate } from 'react-router-dom';

   function App() {
     const navigate = useNavigate();

     const handleNavigation = () => {
       navigate('/speisekarte');
     };

     return (
       <div>
         <button onClick={handleNavigation}>Zur Speisekarte wechseln</button>
       </div>
     );
   }

In diesem Beispiel wird durch das Klicken des Buttons die Route zu `/speisekarte` gewechselt.

404-Seiten (Nicht gefundene Routen) 👾
------------------------------------------------------
Es ist eine gute Praxis, eine 404-Seite (Not Found Page) zu implementieren, um ungültige oder nicht vorhandene URLs abzufangen.

Beispiel:

.. code-block:: react

   function NotFound() {
     return <h1>404 - Seite nicht gefunden</h1>;
   }

   function App() {
     return (
       <Routes>
         <Route path="/essen" element={<Essen />} />
         <Route path="/speisekarte" element={<Speisekarte />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
     );
   }

In diesem Beispiel wird jede nicht definierte Route zur `NotFound`-Komponente führen, die eine 404-Fehlermeldung anzeigt.

Zusammenfassung 📑
------------------------------------------------------
React Router ist ein leistungsstarkes Tool, das es dir ermöglicht, **clientseitiges Routing** in React-Anwendungen zu implementieren. Mit `BrowserRouter`, `Route`, `Link` und `useNavigate` kannst du Seiten dynamisch basierend auf der URL rendern, ohne die Seite neu zu laden.

- Installiere React Router mit: `npm install react-router-dom`
- Verwende `BrowserRouter` zur Umwicklung deiner App.
- Definiere Routen mit `Route` und verwende `Link` zum Navigieren.
- Implementiere spezielle Routen für `/essen` und `/speisekarte` nach deinen Bedürfnissen.
- Vergiss nicht, eine 404-Seite für ungültige Routen zu implementieren.

