File Testen 🔨
============================

Einleitung 🫴
-------------------------

In dieser Anleitung zeigen wir Ihnen, wie Sie Vue-Komponenten mit Vitest testen können. Hierbei werden wir die Verwendung von Wrapper-Funktionen, das Testen von Props sowie spezifische Tests für Benutzerinteraktionen wie das Setzen von Werten in Eingabefeldern behandeln.

Wrapper-Funktion 🥙
-------------------------

Um das Testen von Vue-Komponenten zu vereinfachen, ist es hilfreich, eine Wrapper-Funktion zu verwenden, die die Komponente in der richtigen Umgebung einbettet. Eine solche Wrapper-Funktion könnte folgendermaßen aussehen:

.. code-block:: javascript

    import { mount } from '@vue/test-utils';
    import { Quasar } from 'quasar';
    import { Component } from 'vue';

    export const createWrapper = (handoverComponent: Component, props: Record<string, unknown>) => {
      const wrapper = mount(handoverComponent, {
        global: {
          plugins: [Quasar],
        },
        props: { ...props },
      });

      return wrapper;
    };

- **import { mount } from '@vue/test-utils'**: Der **mount**-Befehl wird verwendet, um eine Vue-Komponente für Tests zu rendern. Dadurch wird die Komponente vollständig in eine simulierte DOM-Umgebung eingebettet.
- **import { Quasar } from 'quasar'**: Dies bindet das Quasar Framework ein, sodass alle Quasar-Komponenten und Plugins innerhalb der Tests zur Verfügung stehen.
- **props**: Die Funktion akzeptiert eine Komponente und ein Props-Objekt. Dies ermöglicht es Ihnen, verschiedene Werte für die zu testende Komponente anzugeben.

Die **createWrapper**-Funktion erstellt ein Wrapper-Objekt, das in Tests verwendet wird, um die Komponente zu rendern und damit zu interagieren.

Beispiel-Komponente 🎲
-------------------------

Um das Testen zu veranschaulichen, erstellen wir eine einfache Komponente namens **NumberInput.vue**, die eine Zahl als Eingabewert akzeptiert:

.. code-block:: vue

    <template>
      <div>
        <input type="number" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
      </div>
    </template>

    <script setup>
    defineProps({
      modelValue: Number,
      min: Number,
      max: Number,
      nullable: Boolean
    });
    </script>

Diese Komponente akzeptiert folgende Props:

- **modelValue**: Der aktuelle Wert, der im Input-Feld angezeigt wird.
- **min** und **max**: Definiert die minimalen und maximalen zulässigen Werte.
- **nullable**: Bestimmt, ob der Wert auf `null` gesetzt werden kann.

Beispiel-Tests 🤢
-------------------------

Hier sind einige Beispieltests für die **NumberInput** Komponente, die verschiedene Szenarien abdecken, z. B. das Rendern der Komponente, die Eingabe von Werten und das Überprüfen von Emits.

.. code-block:: javascript

    import { describe, expect, test } from 'vitest';
    import NumberInput from './NumberInput.vue';
    import { createWrapper } from './testUtils/wrapperHelper';
    import { nextTick } from 'vue';

    const UPDATE_MODEL_VALUE = 'update:modelValue';

    describe('NumberInput', () => {
      test('render NumberInput', async () => {
        const initialValue = 5;
        const wrapper = createWrapper(NumberInput, { modelValue: initialValue });
        expect(wrapper.exists()).toBe(true);

        await nextTick();
        const input = wrapper.find('input[type="number"]');
        expect((input.element as HTMLInputElement).value).toBe(String(initialValue));
      });

      test('update:modelValue emits correct value', async () => {
        const wrapper = createWrapper(NumberInput, { modelValue: null });
        wrapper.find('input').setValue(10);

        expect(wrapper.emitted()[UPDATE_MODEL_VALUE]).toBeTruthy();
        expect(wrapper.emitted()[UPDATE_MODEL_VALUE][0]).toEqual([10]);
      });

      test('does not emit update:modelValue if value is unchanged', async () => {
        const wrapper = createWrapper(NumberInput, { modelValue: 5 });
        expect(wrapper.emitted()[UPDATE_MODEL_VALUE]).toBeUndefined();
        await wrapper.find('input').setValue('5');
        expect(wrapper.emitted()['update:modelValue']).toBeUndefined();
      });

      test('does not emit update:modelValue for value below min', async () => {
        const wrapper = createWrapper(NumberInput, { modelValue: null, min: 5 });

        const input = wrapper.find('input[type="number"]');
        await input.setValue('4');
        expect(wrapper.emitted()[UPDATE_MODEL_VALUE]).toBeUndefined();
      });

      test('does not emit update:modelValue for value above max', async () => {
        const wrapper = createWrapper(NumberInput, { modelValue: null, max: 8 });

        const input = wrapper.find('input[type="number"]');
        await input.setValue('10');
        expect(wrapper.emitted()[UPDATE_MODEL_VALUE]).toBeUndefined();
      });
    });

Erklärung der Tests:

- **render NumberInput**: Dieser Test prüft, ob die Komponente korrekt gerendert wird und ob der anfängliche Wert korrekt im Input-Feld gesetzt ist.
- **update:modelValue emits correct value**: Hier wird getestet, ob das richtige Ereignis (`update:modelValue`) ausgelöst wird, wenn der Wert im Eingabefeld geändert wird.
- **does not emit update:modelValue if value is unchanged**: Dieser Test stellt sicher, dass kein unnötiges Emit ausgeführt wird, wenn der Wert im Eingabefeld nicht geändert wurde.
- **does not emit update:modelValue for value below min** und **does not emit update:modelValue for value above max**: Diese Tests prüfen, ob die Komponente die minimalen und maximalen Werte korrekt berücksichtigt und das Emit verhindert, wenn der eingegebene Wert außerhalb des zulässigen Bereichs liegt.

Metdoen und Komponenten Test 💻
-----------------------------------
Die folgende Tabelle beschreibt wichtige Test-Methoden und Attribute, die bei der Verwendung von @vue/test-utils und Vitest hilfreich sind, um Vue-Komponenten gründlich zu testen.

.. list-table:: Wichtige Test-Attribute und Methoden
   :header-rows: 1
   :widths: 25 40 35

   * - Methode/Attribut
     - Beschreibung
     - Verwendungsszenario
   * - wrapper.find(selector)
     - Sucht nach einem DOM-Element innerhalb der Komponente basierend auf dem bereitgestellten CSS-Selektor.
     - Wird verwendet, um spezifische Elemente innerhalb der Komponente zu finden, wie z.B. ein Input-Feld oder einen Button.
   * - wrapper.setValue(value)
     - Setzt den Wert eines Input-Elements oder einer anderen Eingabekomponente.
     - Nützlich, um Benutzerinteraktionen wie die Eingabe von Text oder Zahlen zu simulieren und zu testen, ob die Komponente darauf reagiert.
   * - wrapper.emitted(eventName)
     - Gibt alle Ereignisse zurück, die von der Komponente emittiert wurden. Kann optional mit dem Ereignisnamen gefiltert werden.
     - Verwendet, um zu testen, ob und wann bestimmte Events (wie update:modelValue) ausgelöst wurden, und um sicherzustellen, dass die Komponente korrekt auf Benutzereingaben reagiert.
   * - wrapper.exists()
     - Prüft, ob das Wrapper-Objekt existiert (d.h. ob die Komponente erfolgreich gemountet wurde).
     - Hilfreich, um sicherzustellen, dass eine Komponente ordnungsgemäß gerendert wurde.
   * - wrapper.html()
     - Gibt den HTML-Code der gerenderten Komponente als String zurück.
     - Wird verwendet, um den gerenderten HTML-Code zu inspizieren und sicherzustellen, dass alle erwarteten Elemente vorhanden sind.
   * - wrapper.text()
     - Gibt den gesamten Textinhalt der Komponente zurück.
     - Hilfreich, um zu prüfen, ob bestimmte Texte oder Labels korrekt angezeigt werden.
   * - screen.debug()
     - Gibt die aktuelle DOM-Struktur der Komponente in der Konsole aus.
     - Nützlich für Debugging-Zwecke, um den aktuellen Zustand der Komponente zu überprüfen.
   * - wrapper.trigger(eventType)
     - Löst ein bestimmtes DOM-Ereignis aus, z.B. click oder input.
     - Ermöglicht es, Benutzerinteraktionen wie Klicks auf Buttons oder das Eingeben von Text zu simulieren.
   * - wrapper.props(propName)
     - Gibt den Wert eines bestimmten Props zurück.
     - Wird verwendet, um zu testen, ob die Komponente die erwarteten Props korrekt erhält.
   * - nextTick()
     - Wartet darauf, dass alle asynchronen Vue-Updates abgeschlossen sind.
     - Nützlich, wenn die Komponente auf Datenänderungen reagiert und diese Änderungen erst nach einem "Tick" sichtbar werden.
   * - wrapper.setProps(props)
     - Setzt Props der gerenderten Komponente neu.
     - Nützlich, um das Verhalten der Komponente bei Änderungen der Props zu testen.
   * - wrapper.findComponent(Component)
     - Sucht nach einer eingebetteten Komponente innerhalb der Wrapper-Komponente.
     - Verwendet, um gezielt nach einer spezifischen Kinderkomponente zu suchen, um deren Verhalten zu testen.
   * - wrapper.findAll(selector)
     - Sucht nach allen DOM-Elementen, die dem bereitgestellten Selektor entsprechen, und gibt eine Sammlung von Wrappern zurück.
     - Hilfreich, wenn mehrere ähnliche Elemente (wie z.B. eine Liste von Items) gleichzeitig überprüft werden sollen.
   * - wrapper.classes()
     - Gibt die CSS-Klassen eines Elements als Array zurück.
     - Verwendet, um zu überprüfen, ob bestimmte Klassen auf ein Element angewendet wurden, z.B. bei Zuständen wie "aktiv" oder "inaktiv".
   * - wrapper.attributes(attributeName)
     - Gibt den Wert eines bestimmten Attributs zurück.
     - Wird verwendet, um sicherzustellen, dass ein bestimmtes Attribut korrekt gesetzt wurde, wie z.B. aria-* Attribute für Zugänglichkeit.
   * - wrapper.isVisible()
     - Prüft, ob die Komponente im DOM sichtbar ist.
     - Nützlich, um sicherzustellen, dass Elemente korrekt ein- oder ausgeblendet werden, abhängig von bestimmten Zuständen.

Emitted ⏱️
------------------

In Vue.js gibt das Attribut ``emitted`` die von einer Komponente ausgelösten (emittierten) Events zurück und dient als wichtige Methode, um Events in Unit-Tests zu überprüfen.

.. note::
   Ein Event wird dann "emitted" (ausgelöst), wenn die Komponente die Kommunikation mit einem übergeordneten Element initiiert oder Änderungen anzeigt. 

**Wofür wird ``emitted`` verwendet?** ❓
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``emitted`` wird in Unit-Tests von Vue-Komponenten genutzt, um sicherzustellen, dass spezifische Ereignisse zum erwarteten Zeitpunkt ausgelöst werden. Die Methode gibt eine Liste aller bisher von der Komponente gesendeten Events zurück. Dies ist besonders hilfreich, um die Interaktionen und Zustandsänderungen der Komponente zu testen.

**Verwendungsbeispiele** 😼
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. **Formularüberprüfung**:
   Beim Absenden eines Formulars in einer Vue-Komponente wird häufig ein Event wie ``submit`` oder ``save`` ausgelöst, um dem übergeordneten Element zu signalisieren, dass die Daten verarbeitet werden können.

2. **Datenaktualisierungen**:
   Bei Änderungen eines Wertes in einer Eingabekomponente wird oft ein Event wie ``update:modelValue`` emittiert, um an das Eltern-Element zu melden, dass die Daten aktualisiert wurden.

**Wann wird das Event ausgelöst?** 🤓
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Events in Vue-Komponenten werden ausgelöst, wenn die Methode ``$emit`` aufgerufen wird. Dies passiert normalerweise in Reaktion auf eine Benutzeraktion oder bei bestimmten internen Statusänderungen. Zum Beispiel:

- Ein Button-Click innerhalb der Komponente löst eine Methode aus, die wiederum ein Event wie ``clicked`` emittiert.
- Die Komponente emittiert ein Event, sobald ein Eingabefeld verändert wird und eine Reaktion erforderlich ist.

**Beispielcode**::

   <template>
     <button @click="handleClick">Klicke mich!</button>
   </template>

   <script>
   export default {
     methods: {
       handleClick() {
         this.$emit('button-clicked');
       }
     }
   }
   </script>

In diesem Beispiel emittiert die Komponente beim Klicken auf den Button ein Event namens ``button-clicked``, das vom Eltern-Element abgefangen und verarbeitet werden kann.

