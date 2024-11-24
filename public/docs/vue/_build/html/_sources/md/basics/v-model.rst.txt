v-model 📦
============

In diesem Beispiel lernst du, wie du mit `v-model` in Vue eine Zwei-Wege-Datenbindung zwischen einem Formular-Element und einer reaktiven Referenz herstellen kannst.

.. code-block:: vue

    <script setup>
    import { ref } from 'vue'

    // Reaktive Referenz für den Eingabewert
    const name = ref('')
    </script>

    <template>
    <!-- Zwei-Wege-Bindung mit v-model -->
    <input v-model="name" placeholder="Gib deinen Namen ein" />
    <p>Hallo, {{ name }}!</p>
    </template>

**Erklärung:**

- **script setup:** Wir definieren eine reaktive Referenz `name` mit dem Startwert eines leeren Strings (`''`). Diese Referenz wird verwendet, um den Eingabewert zu speichern.
- **template:** Im Template verwenden wir `v-model`, um den Wert des `<input>`-Feldes mit der Referenz `name` zu verknüpfen. Das bedeutet, dass jede Änderung im Eingabefeld automatisch im `name`-Wert gespeichert wird, und umgekehrt wird der Wert von `name` auch im Eingabefeld angezeigt.
- **Zwei-Wege-Datenbindung:** `v-model` ermöglicht es, dass sich die Eingabedaten und die Referenz gegenseitig beeinflussen. Wenn der Benutzer einen Namen eingibt, wird dieser direkt im Text (`<p>Hallo, {{ name }}!</p>`) angezeigt.

**Anwendungsbeispiele:**

- **Formulare:** `v-model` wird häufig in Formularen verwendet, um Benutzereingaben zu verwalten, wie z.B. Textfelder, Checkboxen, Dropdowns, usw.
- **Checkbox Beispiel:**

  .. code-block:: vue

      <script setup>
      import { ref } from 'vue'

      const acceptTerms = ref(false)
      </script>

      <template>
      <input type="checkbox" v-model="acceptTerms" /> Akzeptiere die Nutzungsbedingungen
      <p>Nutzungsbedingungen akzeptiert: {{ acceptTerms }}</p>
      </template>

  - Hier wird eine Checkbox mit einer reaktiven Referenz `acceptTerms` verbunden, die `true` oder `false` speichert, je nachdem, ob die Checkbox angeklickt wurde oder nicht.

  