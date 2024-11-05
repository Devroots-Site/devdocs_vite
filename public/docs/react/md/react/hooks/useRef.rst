UseRef 
======================

`useRef` ist ein React Hook, der eine *ref* erstellt, welche sich über die Lebensdauer eines Components nicht ändert. Es wird oft verwendet, um direkten Zugriff auf den DOM zu erhalten, ohne den Render-Prozess zu beeinflussen. `useRef` speichert eine Referenz auf einen Wert, der unabhängig vom Rendering-Prozess bleibt.

Wann wird `useRef` verwendet?
------------------------------
1. **DOM-Referenzen**: `useRef` wird oft verwendet, um auf DOM-Elemente zuzugreifen, ähnlich wie `document.getElementById()` oder `document.querySelector()`.
2. **Persistente Werte**: Es kann auch genutzt werden, um Werte zwischen Rendern zu speichern, ohne ein Re-Render auszulösen. Anders als `state` verursacht eine Änderung des `useRef`-Werts kein erneutes Rendern des Components.
3. **Timeouts und Intervals**: `useRef` ist nützlich, um Timeout- oder Interval-IDs zu speichern, da diese über die Lebensdauer des Components erhalten bleiben müssen.

Was macht `useRef`?
-------------------
Der `useRef`-Hook gibt ein einfaches Objekt zurück, das die Form ``{ current: ... }`` hat. Dieses Objekt bleibt über die Lebensdauer des Components konstant. Sie können also darauf zugreifen und den Wert von ``current`` ändern, ohne dass React erneut rendert.

Beispiel für DOM-Referenz
-------------------------
.. code-block:: jsx

    import { useRef, useEffect } from 'react';

    function TextInputWithFocusButton() {
      const inputRef = useRef(null);

      useEffect(() => {
        // Der Fokus wird nach dem Rendern auf das Input-Element gesetzt
        inputRef.current.focus();
      }, []);

      return <input ref={inputRef} type="text" />;
    }

In diesem Beispiel verweist ``inputRef.current`` auf das ``<input>``-Element im DOM, und ``useEffect`` fokussiert das Element nach dem ersten Render.

Manipulieren von JSX-Elementen
------------------------------
Ja, mit einer Ref kannst du auch JSX-Elemente direkt manipulieren. Dies funktioniert über den direkten Zugriff auf das zugrundeliegende DOM-Element, welches durch das Ref-Objekt verfügbar gemacht wird.

Beispiel:

.. code-block:: jsx

    import { useRef } from 'react';

    function ChangeColorButton() {
      const buttonRef = useRef(null);

      const changeColor = () => {
        buttonRef.current.style.backgroundColor = 'blue';
      };

      return (
        <button ref={buttonRef} onClick={changeColor}>
          Klicke mich, um die Farbe zu ändern
        </button>
      );
    }

In diesem Beispiel wird durch das Klicken auf den Button dessen Hintergrundfarbe manipuliert. Dies geschieht, indem direkt auf die DOM-Eigenschaften des Buttons über ``buttonRef.current`` zugegriffen wird.

Wann `.current` verwenden?
--------------------------
- **Zugriff auf DOM-Elemente**: Wenn `useRef` verwendet wird, um eine Referenz auf ein DOM-Element zu erstellen, ist der Zugriff auf das eigentliche DOM-Element immer über ``ref.current`` möglich.

.. code-block:: jsx

    inputRef.current.focus();  // Greift auf das DOM-Element zu.

- **Speichern von Werten**: Wenn Sie `useRef` verwenden, um einen Wert zu speichern, der zwischen Rendern bestehen bleibt, greifen Sie ebenfalls mit ``.current`` darauf zu.

.. code-block:: jsx

    const counterRef = useRef(0);
    counterRef.current += 1;  // Speichern eines Wertes zwischen Rendern.

Wann `.current` nicht benötigt wird?
------------------------------------
- **Initialisierung des `useRef` Hooks**: Sie setzen keinen Wert in `useRef` selbst, sondern immer in ``.current``. Der `useRef`-Hook gibt nur die Referenz zurück, während ``.current`` den eigentlichen Wert enthält.

.. code-block:: jsx

    const myRef = useRef(initialValue);  // Kein .current hier notwendig

Typische Anwendungsfälle
------------------------
1. **Zugriff auf ein DOM-Element**: Verwenden Sie `useRef` für den Zugriff auf ein spezifisches DOM-Element, das durch das ``ref``-Attribut verbunden ist.
2. **Werte speichern, die nicht zum erneuten Rendern führen sollen**: Verwenden Sie `useRef`, wenn Sie Werte zwischen Rendern behalten möchten, aber kein Re-Render auslösen wollen (z.B. für Timeout-IDs, Scroll-Positionen oder persistente Counter).

Zusammenfassung
---------------
- `useRef` ist ein leistungsstarker Hook für DOM-Manipulationen und das Behalten von Werten über Renderzyklen hinweg.
- ``.current`` ist notwendig, um auf den gespeicherten Wert oder das DOM-Element zuzugreifen.
- Da Änderungen an ``.current`` keine Re-Renders auslösen, ist `useRef` effizient für bestimmte Anwendungsfälle wie DOM-Zugriff oder speichernde Zwischenwerte.
