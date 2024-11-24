Props 🔄
===================================

In diesem Beispiel lernst du, wie du `props` in Vue verwenden kannst, um Daten von einer Elternkomponente an eine Kindkomponente zu übergeben.
Props sind eine der wichtigsten Mechanismen, um Komponenten in Vue miteinander zu verbinden und Datenfluss von oben nach unten (Top-Down) zu ermöglichen.

.. code-block:: vue

    <!-- Elternkomponente -->
    <script setup>
    import ChildComponent from './ChildComponent.vue'
    import { ref } from 'vue'

    const message = ref('Hello from Parent!')
    </script>

    <template>
    <div>
        <h1>Elternkomponente</h1>
        <ChildComponent msg="message" />
    </div>
    </template>

    <!-- Kindkomponente (ChildComponent.vue) -->
    <script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        msg: String
    })
    </script>

    <template>
    <div>
        <h2>Kindkomponente</h2>
        <p>{{ msg }}</p>
    </div>
    </template>

**Erklärung:**

- **Elternkomponente:**
  - In der Elternkomponente definieren wir eine reaktive Referenz `message`, die einen Text (`'Hello from Parent!'`) enthält.
  - Diese `message` wird als Prop (`msg`) an die Kindkomponente (`ChildComponent`) weitergegeben. Die `:`-Syntax zeigt an, dass es sich um eine dynamische Bindung handelt.

- **Kindkomponente (ChildComponent.vue):**
  - In der Kindkomponente verwenden wir `defineProps`, um die Props zu definieren, die diese Komponente akzeptiert. In diesem Fall akzeptiert die Komponente ein Prop namens `msg`, das vom Typ `String` ist.
  - Die übergebene Nachricht (`msg`) wird im Template der Kindkomponente mit `{{ msg }}` angezeigt.

**Zusätzliche Hinweise:**

- **Typisierung:** Die Props in der Kindkomponente können typisiert werden, z.B. `String`, `Number`, `Boolean`, etc., um sicherzustellen, dass nur der erwartete Datentyp übergeben wird.
- **Pflicht-Props:** Du kannst auch Props als erforderlich (`required`) definieren. Zum Beispiel:

.. code-block:: vue

    const props = defineProps({
      msg: {
          type: String,
          required: true
      }
  })

Dies stellt sicher, dass `msg` zwingend von der Elternkomponente übergeben werden muss.

- **Standardwerte:** Props können auch Standardwerte haben, falls kein Wert übergeben wird:

.. code-block:: vue
  
  const props = defineProps({
      msg: {
          type: String,
          default: 'Standardnachricht'
      }
  })


- **Verwendung von Props:** Props sind der empfohlene Weg, um Daten zwischen Komponenten weiterzugeben. Dabei ist es wichtig, dass Datenfluss von oben nach unten (Eltern zu Kind) erfolgt,
um eine klare Struktur und Wartbarkeit des Codes zu gewährleisten.
