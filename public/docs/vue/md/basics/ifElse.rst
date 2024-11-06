If-Else 🔀
========================

In diesem Beispiel lernst du, wie du mit `v-if` und `v-else` in Vue bedingte Inhalte anzeigen kannst. Diese Direktiven helfen dir, bestimmte Inhalte basierend auf einer Bedingung anzuzeigen oder auszublenden.

.. code-block:: vue

    <script setup>
    import { ref } from 'vue'

    const awesome = ref(true)

    function toggle() {
        awesome.value = !awesome.value
        console.log("hi")
    }
    </script>

    <template>
    <button @click="toggle">Toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    </template>

**Erklärung:**

- **script setup:** Hier definieren wir eine reaktive Referenz `awesome`, die anfänglich auf `true` gesetzt ist. Die Funktion `toggle` ändert den Wert von `awesome` bei jedem Klick.
- **template:** Der `v-if`-Befehl wird verwendet, um das `<h1>`-Element anzuzeigen, wenn `awesome` wahr (`true`) ist. Der `v-else`-Block zeigt ein alternatives `<h1>`-Element an, wenn `awesome` falsch (`false`) ist.
- **Bedienung:** Durch Klicken auf den Button wird der Wert von `awesome` umgeschaltet (`true` zu `false` und umgekehrt). Entsprechend wird der passende Text angezeigt: entweder „Vue is awesome!“ oder „Oh no 😢“.

**Zusätzliche Hinweise:**

- **v-else** kann nur direkt nach einem `v-if` oder `v-else-if` stehen. Es wird angezeigt, wenn keine der vorherigen Bedingungen erfüllt ist.
- **v-else-if:** Du kannst auch `v-else-if` verwenden, wenn du mehrere Bedingungen abdecken möchtest. Beispielsweise könntest du mehrere Nachrichten anzeigen, je nach Zustand der reaktiven Referenz.