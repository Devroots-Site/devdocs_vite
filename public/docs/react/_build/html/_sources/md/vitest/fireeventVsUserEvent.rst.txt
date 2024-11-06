fireEvent vs userEvent 🎆
=======================================

Beim Testen von Benutzerinteraktionen in React-Komponenten stehen zwei Methoden zur Verfügung: **fireEvent** und **userEvent**. Beide dienen dazu, Benutzerinteraktionen wie Klicks, Eingaben oder Tastaturaktionen zu simulieren, jedoch gibt es wesentliche Unterschiede in der Funktionsweise und dem Einsatzgebiet.

fireEvent 🔥
~~~~~~~~~~~~~~~~~~~~~~~~~
`fireEvent` ist eine Methode, die direkt DOM-Events auslöst. Diese Methode ist einfacher und schneller, aber sie simuliert die Interaktionen nicht so realistisch wie ein echter Benutzer.

**Syntax**:

.. code-block:: javascript

   fireEvent.click(element);
   fireEvent.change(inputElement, { target: { value: 'Testwert' } });

**Vorteile**:

- **Performance**: Da `fireEvent` die Events direkt im DOM auslöst, ist es schneller als `userEvent`.
- **Einfachheit**: Die API ist einfach und direkt, was für schnelle, einfache Tests geeignet ist.
  
**Nachteile**:

- **Unrealistische Simulation**: Die Simulation von Benutzeraktionen ist weniger realistisch, da keine kompletten Benutzerinteraktionen simuliert werden (z.B. fehlen bei Eingaben Zwischenereignisse wie `keydown` oder `keyup`).
- **Nicht für komplexe Interaktionen geeignet**: Komplexere Benutzeraktionen, wie z.B. Drag-and-Drop oder Tastaturkombinationen, lassen sich mit `fireEvent` nur schwer testen.

userEvent 🤖
~~~~~~~~~~~~~~~~~~~~~~~~~
`userEvent` ist eine Methode aus der Bibliothek **@testing-library/user-event**, die Interaktionen realistischer simuliert, indem sie mehrschrittige Ereignisse erzeugt. So wird z.B. bei der Eingabe von Text nicht nur `change` ausgelöst, sondern auch Ereignisse wie `keydown`, `keypress` und `keyup`.

**Syntax**:

.. code-block:: react

   await userEvent.click(element);
   await userEvent.type(inputElement, 'Testwert');

**Vorteile**:

- **Realistische Simulation**: `userEvent` simuliert Benutzeraktionen so, wie sie tatsächlich im Browser ablaufen, einschließlich aller Zwischenereignisse.
- **Bessere Abdeckung**: Besonders bei komplexeren Interaktionen, wie z.B. Tastatureingaben oder Drag-and-Drop, ist `userEvent` besser geeignet.
- **Unterstützt asynchrone Interaktionen**: Einige Aktionen wie z.B. Texteingaben erfordern `await` und können über einen gewissen Zeitraum simuliert werden, was realistischere Tests ermöglicht.

**Nachteile**:

- **Langsamer**: Da mehr Ereignisse simuliert werden, dauert der Test mit `userEvent` länger als mit `fireEvent`.
- **Komplexität**: Die API ist komplexer und erfordert in manchen Fällen das Warten auf asynchrone Aktionen.

Beispiele für fireEvent und userEvent
---------------------------------------------

Hier ist ein Beispiel für den Einsatz von `fireEvent`, um eine einfache Klick-Interaktion zu testen:

.. code-block:: react

   test('fireEvent example', () => {
     render(<Button>Click me</Button>);
     const button = screen.getByText(/click me/i);
     fireEvent.click(button);
     expect(button).toHaveClass('clicked');
   });

In diesem Beispiel wird `fireEvent.click` verwendet, um einen Klick auf den Button auszulösen und zu prüfen, ob die Klasse des Buttons sich ändert.

Ein ähnliches Beispiel für `userEvent`, das die Texteingabe in einem Formularfeld simuliert:

.. code-block:: react

   test('userEvent example', async () => {
     render(<Input />);
     const input = screen.getByLabelText(/username/i);
     await userEvent.type(input, 'Testbenutzer');
     expect(input).toHaveValue('Testbenutzer');
   });

Hier wird `userEvent.type` verwendet, um die realistische Texteingabe durch den Benutzer zu simulieren, einschließlich der Zwischenereignisse wie `keydown` und `keyup`.

Wann sollte man fireEvent und wann userEvent verwenden?
-------------------------------------------------------

Die Wahl zwischen `fireEvent` und `userEvent` hängt von der Art des Tests ab:

- **fireEvent** eignet sich, wenn du einfache Interaktionen testen möchtest, bei denen es hauptsächlich darum geht, dass ein bestimmtes Ereignis (z.B. ein Klick) ausgelöst wird. Es ist auch ideal, wenn du schnellere Tests benötigst, die keine komplexe Benutzerinteraktionen erfordern.
  
- **userEvent** ist die bessere Wahl für realistische Benutzerszenarien, besonders wenn es um Texteingaben, Drag-and-Drop oder andere mehrstufige Interaktionen geht. Es sollte bevorzugt werden, wenn es wichtig ist, dass alle zugehörigen DOM-Ereignisse simuliert werden.


Fazit
~~~~~~~~~~~~~~~ 

`fireEvent` und `userEvent` sind beide wichtige Werkzeuge für das Testen von Benutzerinteraktionen in Vitest, haben aber unterschiedliche Stärken. `fireEvent` ist schneller und einfacher, während `userEvent` realistischere Simulationen ermöglicht. Durch den gezielten Einsatz beider Methoden lassen sich präzise und aussagekräftige Tests für Benutzeroberflächen erstellen.