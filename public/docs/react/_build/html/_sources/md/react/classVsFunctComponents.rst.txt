Class 🆚 Function Components
====================================

In dieser Dokumentation vergleichen wir die beiden Hauptansätze, Komponenten in React zu erstellen: **Class-Komponenten** und **Function-Komponenten**. Wir beleuchten ihre Unterschiede, Vor- und Nachteile und geben eine Beispiel-Komponente.

Unterschiede zwischen Class- und Function-Komponenten 🥀
------------------------------------------------------------

1. **Class-Komponenten**:
   - Früher die gängigste Methode zur Erstellung von Komponenten.
   - Benötigen die Verwendung der **`class`**-Syntax und das Erben von **`React.Component`**.
   - Verwenden einen eigenen State und Lifecycle-Methoden (z.B. `componentDidMount`, `componentDidUpdate`).

2. **Function-Komponenten**:
   - Eine einfachere, klarere Syntax, die eine Komponente als **JavaScript-Funktion** darstellt.
   - Vor der Einführung von Hooks hatten Funktionskomponenten keinen eigenen State oder Zugriff auf Lifecycle-Methoden.
   - Mit der Einführung von **Hooks** (z.B. `useState`, `useEffect`) können Funktionskomponenten nun ähnliche Funktionalitäten wie Klassenkomponenten bieten.

Vorteile und Nachteile 📉
--------------------------

1. **Class-Komponenten**:

   Vorteile:
   - **State und Lifecycle:** Direkte Unterstützung von State und Lifecycle-Methoden, was früher eine Grundvoraussetzung für komplexe Logik war.
   - **Übersichtlicher bei größeren Anwendungen:** In größeren Projekten war es einfacher, den Überblick zu behalten, als der State und die Lifecycle-Methoden separat organisiert waren.

   Nachteile:
   - **Komplexität:** Mehr Boilerplate-Code, da man eine Klasse definieren und Methoden schreiben muss, um den State zu manipulieren.
   - **Veralteter Ansatz:** Seit der Einführung von Hooks in React 16.8 werden Funktionskomponenten bevorzugt. Class-Komponenten können als "veraltet" angesehen werden.

2. **Function-Komponenten**:

   Vorteile:
   - **Kürzere und sauberere Syntax:** Funktionskomponenten sind einfacher zu schreiben und zu lesen.
   - **Hooks:** Mit Hooks wie `useState` und `useEffect` kann man den State und Lifecycle-Methoden in Funktionskomponenten verwenden.
   - **Weniger Boilerplate:** Kein `this`-Binding erforderlich, weniger Code für dieselbe Funktionalität.
   - **Performance:** Funktionskomponenten können eine bessere Performance bieten, da sie tendenziell einfacher und leichter sind.

   Nachteile:
   - **Weniger intuitive bei alten Projekten:** Wenn man mit älteren Codebasen arbeitet, die Class-Komponenten verwenden, könnte der Umstieg verwirrend sein.
   - **Hooks-Lernen erforderlich:** Wenn man komplexe Logik implementieren muss, muss man sich in Hooks wie `useReducer` und `useContext` einarbeiten.

Wann sollte man was verwenden? 🪰
-----------------------------------

- **Class-Komponenten**: 
  Verwende sie nur, wenn du mit älteren React-Versionen arbeitest oder auf eine Codebasis stößt, die noch Class-Komponenten verwendet. Falls keine Abwärtskompatibilität gefordert ist, gibt es heute kaum einen Grund, Class-Komponenten zu verwenden.

- **Function-Komponenten**: 
  In modernen React-Projekten sollten Funktionskomponenten bevorzugt werden. Mit der Einführung von Hooks bieten sie alle Funktionen, die Class-Komponenten früher dominiert haben, aber mit besserer Performance und einer saubereren Syntax.

Beispiel: Auto-Komponente 🎲
-------------------------------

Hier ist eine React-Komponente für ein Auto, einmal als Class-Komponente und einmal als Function-Komponente:

**Class-Komponente:**

.. code-block:: react

   import React, { Component } from 'react';

   class Auto extends Component {
       constructor(props) {
           super(props);
           this.state = {
               marke: "BMW",
               modell: "i8",
               baujahr: 2020
           };
       }

       render() {
           return (
               <div>
                   <h1>Auto Details:</h1>
                   <p>Marke: {this.state.marke}</p>
                   <p>Modell: {this.state.modell}</p>
                   <p>Baujahr: {this.state.baujahr}</p>
               </div>
           );
       }
   }

   export default Auto;

**Function-Komponente mit Hooks:**

.. code-block:: react

   import React, { useState } from 'react';

   const Auto = () => {
       const [auto, setAuto] = useState({
           marke: "BMW",
           modell: "i8",
           baujahr: 2020
       });

       return (
           <div>
               <h1>Auto Details:</h1>
               <p>Marke: {auto.marke}</p>
               <p>Modell: {auto.modell}</p>
               <p>Baujahr: {auto.baujahr}</p>
           </div>
       );
   }

   export default Auto;

Fazit 🤓
---------

Heutzutage sollten Funktionskomponenten als der Standard in React angesehen werden. Dank Hooks sind sie genauso mächtig wie Class-Komponenten, aber einfacher zu schreiben und besser in Bezug auf die Performance. Class-Komponenten sind hauptsächlich für ältere Projekte oder aus Gründen der Abwärtskompatibilität relevant.

.. note::  
   Die Entscheidung, welche Art von Komponente verwendet werden sollte, hängt hauptsächlich davon ab, ob man mit alten Projekten arbeitet oder in einer modernen Codebasis bleibt. In neuen Projekten sind Funktionskomponenten definitiv die bessere Wahl.
