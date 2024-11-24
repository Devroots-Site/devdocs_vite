Custom Hooks 
=====================

Einleitung 🪜
-------------------------------

**Custom Hooks** sind eine mächtige Funktionalität in React, die es uns ermöglicht, wiederverwendbare Logik aus Komponenten zu extrahieren und in eigene Hooks zu kapseln. Sie bieten eine saubere und modulare Art, um Code zu organisieren, der sich mehrfach verwenden lässt.

In diesem Abschnitt gehen wir darauf ein, wie Custom Hooks funktionieren, wann sie sinnvoll sind, wie man sie implementiert und welche Vor- und Nachteile sie mit sich bringen.

Was sind Custom Hooks? 🪝
---------------------------------

Custom Hooks sind einfach JavaScript-Funktionen, die React-Hooks wie `useState`, `useEffect` oder andere Standard-Hooks nutzen können. Sie ermöglichen es, Logik, die in mehreren Komponenten benötigt wird, in einer wiederverwendbaren Form auszulagern.

Ein Custom Hook ist im Grunde eine Funktion, deren Name mit **"use"** beginnt (z.B. `useFetch`, `useLocalStorage`), und die andere Hooks innerhalb ihrer Definition verwendet.

.. code-block:: react

   // Beispiel eines Custom Hooks zur Nutzung der LocalStorage API
   import { useState } from 'react';

   function useLocalStorage(key, initialValue) {
       const [storedValue, setStoredValue] = useState(() => {
           try {
               const item = window.localStorage.getItem(key);
               return item ? JSON.parse(item) : initialValue;
           } catch (error) {
               console.log(error);
               return initialValue;
           }
       });

       const setValue = (value) => {
           try {
               const valueToStore =
                   value instanceof Function ? value(storedValue) : value;
               setStoredValue(valueToStore);
               window.localStorage.setItem(key, JSON.stringify(valueToStore));
           } catch (error) {
               console.log(error);
           }
       };

       return [storedValue, setValue];
   }

Wann sind Custom Hooks sinnvoll? ⌚
-------------------------------------------

Custom Hooks sind besonders nützlich in folgenden Szenarien:

1. **Wiederverwendbare Logik**:
   Wenn eine Logik in mehreren Komponenten verwendet wird (z.B. Fetching von Daten, Authentifizierung, Formularverwaltung), sollten Custom Hooks in Betracht gezogen werden, um diese Logik einmal zu schreiben und mehrfach zu verwenden.

2. **Organisation und Code-Struktur**:
   Sie helfen dabei, den Komponenten-Code zu entlasten und sauberer zu gestalten. Indem man häufig verwendete Logik in einen Hook auslagert, bleiben Komponenten fokussiert auf die UI und die Darstellung.

3. **Trennung von Logik und Präsentation**:
   Custom Hooks ermöglichen die Trennung von Anwendungslogik und UI. Dies fördert die Modularität und Wartbarkeit des Codes.

4. **Stateful Logik teilen**:
   Da Hooks in React das Teilen von zustandsbehafteter Logik (Stateful Logic) ermöglichen, kann dieselbe Logik von verschiedenen Komponenten unabhängig voneinander verwendet werden, ohne duplizierten Code zu erzeugen.

Vorteile von Custom Hooks 🎁
-----------------------------------

1. **Wiederverwendbarkeit**:
   - Custom Hooks erlauben es, ähnliche Logik zwischen Komponenten zu teilen, ohne den Code zu duplizieren.

2. **Lesbarkeit und Wartbarkeit**:
   - Sie machen Komponenten sauberer und sorgen dafür, dass sie sich auf die Darstellung konzentrieren, während sich der Hook um die Logik kümmert.

3. **Modularität**:
   - Die Trennung von UI-Logik und Anwendungslogik erleichtert die Wartung, das Testen und die Erweiterung des Codes.

4. **Isolation von Logik**:
   - Custom Hooks können komplexe Logik isolieren und kapseln, was den Test und die Fehlersuche erleichtert.

Nachteile von Custom Hooks 💣
---------------------------------------

1. **Übermäßige Abstraktion**:
   - Wenn zu viele Custom Hooks verwendet werden oder sie zu spezifisch gestaltet sind, kann dies den Code schwerer nachvollziehbar machen.

2. **Fehleranfälligkeit bei Zuständen**:
   - Da Hooks auf der React-Hook-Reihenfolge basieren, können Fehler auftreten, wenn Custom Hooks falsch oder in ungültigen Kontexten verwendet werden.

3. **Unnötige Komplexität**:
   - Bei einfachen Komponenten kann die Verwendung von Custom Hooks überflüssig oder unnötig kompliziert sein. Es sollte darauf geachtet werden, dass nur dort Custom Hooks genutzt werden, wo dies wirklich sinnvoll ist.

Wie erstellt man Custom Hooks? 🔨
----------------------------------------

Die Erstellung eines Custom Hooks ist einfach. Hier sind die Schritte:

1. **Erstelle eine Funktion**:
   Ein Custom Hook ist eine normale JavaScript-Funktion, die `use` am Anfang ihres Namens trägt. Dadurch erkennt React, dass es sich um einen Hook handelt.

2. **Verwende andere Hooks**:
   Innerhalb des Custom Hooks kannst du auf andere Hooks zugreifen, wie z.B. `useState`, `useEffect`, `useContext`, etc.

3. **Exportiere den Hook**:
   Damit der Custom Hook in anderen Teilen der Anwendung verwendet werden kann, musst du ihn exportieren.

Beispiel für einen einfachen Custom Hook, der den Status von Online/Offline-Events verwaltet:

.. code-block:: react

   import { useState, useEffect } from 'react';

   function useOnlineStatus() {
       const [isOnline, setIsOnline] = useState(navigator.onLine);

       useEffect(() => {
           function handleStatusChange() {
               setIsOnline(navigator.onLine);
           }

           window.addEventListener('online', handleStatusChange);
           window.addEventListener('offline', handleStatusChange);

           return () => {
               window.removeEventListener('online', handleStatusChange);
               window.removeEventListener('offline', handleStatusChange);
           };
       }, []);

       return isOnline;
   }

   export default useOnlineStatus;

Wie exportiere ich Custom Hooks? 🧪
------------------------------------------------

Ein Custom Hook wird exportiert, wie jede andere Funktion in JavaScript. Es gibt zwei Möglichkeiten, ihn zu exportieren:

1. **Named Export**:
   Bei einem Named Export kann der Hook mit einem spezifischen Namen importiert werden.

   .. code-block:: react

      export function useCustomHook() {
          // Logik des Hooks
      }

      // Import
      import { useCustomHook } from './customHook';

2. **Default Export**:
   Ein Default Export erlaubt es, den Hook beim Import umzubenennen.

   .. code-block:: react 

      export default function useCustomHook() {
          // Logik des Hooks
      }

      // Import
      import useHookAlias from './customHook';

Erweiterung: Custom Hook für eine Berechnung ⏩
-----------------------------------------------------------

Im folgenden Beispiel erweitern wir das Konzept eines Custom Hooks, um eine einfache Berechnung durchzuführen: Der Hook akzeptiert zwei Zahlen als Parameter und gibt deren Summe zurück.

.. code-block:: react

   import { useState } from 'react';

   // Custom Hook für eine Berechnung der Summe von zwei Zahlen
   function useSum(a, b) {
       const [sum, setSum] = useState(0);

       useState(() => {
           setSum(a + b);
       }, [a, b]); // useEffect wird aufgerufen, wenn sich a oder b ändern

       return sum;
   }

   export default useSum;

Dieser Hook `useSum` wird so verwendet, dass er zwei Zahlen entgegennimmt, ihre Summe berechnet und diese als Rückgabewert bereitstellt.

Verwendung des Hooks in einer Komponente:

.. code-block:: react

   import React from 'react';
   import useSum from './useSum';

   const SumComponent = () => {
       const a = 5;
       const b = 10;
       const result = useSum(a, b);

       return (
           <div>
               <p>Die Summe von {a} und {b} ist: {result}</p>
           </div>
       );
   }

   export default SumComponent;

Fazit 🤓
--------------

Custom Hooks bieten eine flexible Möglichkeit, wiederverwendbare und zustandsbasierte Logik in React-Anwendungen zu teilen und zu organisieren. Sie fördern die Modularität und verbessern die Lesbarkeit des Codes. In diesem Beispiel haben wir einen Custom Hook erstellt, der zwei Zahlen entgegennimmt und deren Summe berechnet. Dies veranschaulicht, wie man Logik innerhalb eines Hooks wiederverwendbar macht.

.. note:: 
   Nutze Custom Hooks immer dann, wenn du Logik hast, die in mehreren Komponenten verwendet wird. Halte sie einfach und fokussiere dich auf spezifische Anwendungsfälle, um den Code sauber und verständlich zu halten.
