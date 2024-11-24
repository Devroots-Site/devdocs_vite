React Kontext-API
==================

In React ermöglicht die **Kontext-API** das Teilen von Daten zwischen Komponenten, ohne dass Props explizit durch die Baumstruktur weitergegeben werden müssen. Zwei wichtige Hooks und Funktionen sind hierbei `createContext` und `useContext`. In diesem Dokument werden beide Konzepte detailliert erklärt.

.. note::
    Die **Kontext-API** ist besonders nützlich, um globale Zustände wie den aktuellen Benutzer, Thema (dark/light mode) oder Sprache zu verwalten, ohne "Props-Drilling" zu betreiben.

.. image:: /_static/miro/hooks/UseContext.png


Einführung in `createContext`
-----------------------------

Mit `createContext` kann ein neuer Kontext erstellt werden. Ein Kontext besteht aus zwei Hauptkomponenten:

- **Provider**: Ermöglicht das Bereitstellen eines Wertes für seine Kind-Komponenten.
- **Consumer**: Verwendet den vom Provider bereitgestellten Wert.

.. code-block:: react

    import React, { createContext } from 'react';

    const ThemeContext = createContext('light');

    function App() {
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }

In diesem Beispiel wird ein `ThemeContext` erstellt, der standardmäßig den Wert `light` hat. Über den Provider wird der Wert in der `App`-Komponente auf `dark` gesetzt und an alle Kind-Komponenten weitergegeben.

.. note::
    Standardwerte wie `'light'` im obigen Beispiel werden nur verwendet, wenn es keinen `Provider` gibt. Falls ein `Provider` vorhanden ist, wird dessen Wert verwendet.

Verwendung von `useContext`
----------------------------

Der Hook `useContext` wird verwendet, um auf den Wert eines Kontexts zuzugreifen, der durch einen Provider bereitgestellt wird.

.. code-block:: react

    import React, { useContext } from 'react';

    function Toolbar() {
        return (
            <div>
                <ThemedButton />
            </div>
        );
    }

    function ThemedButton() {
        const theme = useContext(ThemeContext);
        return <button className={theme}>I am styled with {theme} theme!</button>;
    }

In diesem Beispiel wird der `ThemedButton` mithilfe des `useContext`-Hooks an den Kontextwert gebunden, der durch den nächstgelegenen `ThemeContext.Provider` bereitgestellt wird.

.. warning::
    Der `useContext`-Hook kann nur innerhalb von Funktionskomponenten verwendet werden. Versuche nicht, ihn in Klassenkomponenten oder außerhalb von Komponenten zu verwenden, da dies zu Fehlern führt.

Vorteile der Kontext-API
------------------------

- **Vermeidung von Props-Drilling**: Du kannst globale Daten direkt an die betroffenen Komponenten weitergeben, ohne sie durch alle Zwischenkomponenten hindurchzureichen.
- **Klarheit und Wartbarkeit**: Mit der Kontext-API lässt sich der Code klarer strukturieren, wenn viele Komponenten Zugriff auf dieselben Daten benötigen.

.. warning::
    Übermäßige Verwendung der Kontext-API kann das Re-Renden großer Teile der App auslösen. Nutze sie deshalb mit Bedacht. Für komplexe Zustände könnte ein State-Management-Tool wie Redux oder Zustand besser geeignet sein.

Best Practices
--------------

1. **Teilung von Zuständen**: Verwende die Kontext-API für **globale Zustände** wie das aktuelle Thema, den Benutzer oder die Sprache der App.
2. **Vermeidung von Performance-Problemen**: Nutze `React.memo` oder teile den Zustand in kleinere Kontexte auf, um unnötiges Re-Renden zu verhindern.
3. **Einfachheit**: Vermeide es, zu viele Werte in einem einzigen Kontext zu bündeln. Verwende lieber mehrere spezialisierte Kontexte für unterschiedliche Bereiche deiner Anwendung.

Zusammenfassung
---------------

- Verwende `createContext`, um einen neuen Kontext zu erstellen.
- Nutze `useContext`, um auf den Kontextwert innerhalb von Funktionskomponenten zuzugreifen.
- Kontexte eignen sich hervorragend zur Verwaltung globaler Zustände, sollten aber mit Bedacht eingesetzt werden, um Performance-Probleme zu vermeiden.

.. tip::
    Für kleinere globale Zustände ist die Kontext-API eine hervorragende Wahl. Sobald dein Zustand jedoch komplexer wird und viele Komponenten betrifft, solltest du darüber nachdenken, ein spezialisierteres State-Management-Tool wie **Redux** zu verwenden.


Weiteres Beispiel
-----------------------------------------------