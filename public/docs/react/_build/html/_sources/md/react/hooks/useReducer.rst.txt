.. _useReducer_einfache_doku:

useReducer
===================

**Was ist `useReducer`?**

`useReducer` ist ein React-Hook, der eine Alternative zu `useState` bietet, wenn dein Zustand (State) komplexer ist und mehrere Aktionen darauf ausgeführt werden müssen. Stell dir vor, du möchtest nicht nur einen Wert speichern, sondern verschiedene Aktionen ausführen, die diesen Wert ändern – dafür ist `useReducer` gut geeignet.

**Wann sollte ich `useReducer` verwenden?**

- Wenn dein Zustand komplex ist oder du verschiedene Arten von Änderungen an deinem Zustand vornehmen musst.
- Wenn du einen Zustand über eine größere Komponente oder mehrere Komponenten hinweg verwalten möchtest.
- Wenn du den Zustand besser strukturiert und organisierter halten möchtest als mit `useState`.

**Wie funktioniert `useReducer`?**

Bei `useReducer` gibt es drei wichtige Teile:

1. **State (Zustand)**: Das ist der Wert, den du speicherst und veränderst.
2. **Action (Aktion)**: Das ist, was passiert oder was du tust, um den Zustand zu ändern (zum Beispiel eine Schaltfläche klicken).
3. **Reducer**: Eine Funktion, die den aktuellen Zustand und die Aktion nimmt und entscheidet, wie der Zustand geändert wird.

**Syntax von `useReducer`**

Die grundlegende Syntax von `useReducer` sieht so aus:

.. code-block:: javascript

    const [state, dispatch] = useReducer(reducer, initialState);

- `state`: Der aktuelle Zustand.
- `dispatch`: Eine Funktion, um Aktionen auszuführen (also den Zustand zu ändern).
- `reducer`: Eine Funktion, die entscheidet, wie sich der Zustand ändert.
- `initialState`: Der Anfangszustand.

**Beispiel für `useReducer`**

Stell dir vor, du möchtest eine Zählfunktion bauen, die einen Zähler um eins erhöht oder verringert:

1. **Reducer-Funktion erstellen**: Diese Funktion nimmt den aktuellen Zustand und die Aktion und gibt den neuen Zustand zurück.

.. code-block:: javascript

    function counterReducer(state, action) {
        switch (action.type) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            default:
                return state;
        }
    }

2. **`useReducer` verwenden**: Du verwendest den `useReducer`-Hook in deiner Komponente und übergibst ihm die `reducer`-Funktion und den Anfangszustand.

.. code-block:: react

    function Counter() {
        const [count, dispatch] = useReducer(counterReducer, 0);

        return (
            <div>
                <p>Zähler: {count}</p>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            </div>
        );
    }

**Was passiert hier?**

- Der Zustand `count` wird mit `useReducer` verwaltet.
- Wenn du den Button `+` klickst, wird die Aktion `increment` ausgeführt, und der Zähler wird um eins erhöht.
- Wenn du den Button `-` klickst, wird die Aktion `decrement` ausgeführt, und der Zähler wird um eins verringert.

**Warum `useReducer` verwenden?**

- **Mehr Struktur**: Mit `useReducer` kannst du deinen Code klarer und einfacher verständlich machen, besonders wenn du viele verschiedene Aktionen hast, die deinen Zustand ändern.
- **Bessere Organisation**: Du hast eine zentrale Stelle (den `reducer`), die bestimmt, wie der Zustand geändert wird. Das macht deinen Code sauberer.
- **Skalierbarkeit**: Wenn dein Zustand oder deine Logik komplexer wird, bleibt dein Code mit `useReducer` leichter zu handhaben als mit mehreren `useState`-Hooks.

.. note::
   `useReducer` ist besonders nützlich, wenn du viele Zustandsänderungen hast, die voneinander abhängen oder komplizierter werden.

**Fazit**

Wenn du merkst, dass dein Zustand in einer Komponente kompliziert wird, oder du viele verschiedene Arten hast, den Zustand zu ändern, ist `useReducer` eine tolle Wahl. Es gibt deinem Code Struktur und macht ihn einfacher zu warten.
