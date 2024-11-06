Emit 🔼
===================================================

In diesem Beispiel lernst du, wie du mithilfe von `emit` in Vue Daten von einer Kindkomponente an eine Elternkomponente übergeben kannst. Dies wird oft verwendet,
wenn die Kindkomponente eine Benutzeraktion oder eine Änderung an die Elternkomponente melden soll.

.. code-block:: vue

    <!-- Elternkomponente -->
    <script setup>
    import ChildComponent from './ChildComponent.vue'
    import { ref } from 'vue'

    const parentMessage = ref('')

    function handleUpdate(message) {
        parentMessage.value = message
    }
    </script>

    <template>
    <div>
        <h1>Elternkomponente</h1>
        <p>Nachricht vom Kind: {{ parentMessage }}</p>
        <ChildComponent @update-message="handleUpdate" />
    </div>
    </template>

    <!-- Kindkomponente (ChildComponent.vue) -->
    <script setup>
    import { defineEmits } from 'vue'
    import { ref } from 'vue'

    const emit = defineEmits(['update-message'])
    const childMessage = ref('Hello from Child!')

    function sendMessage() {
        emit('update-message', childMessage.value)
    }
    </script>

    <template>
    <div>
        <h2>Kindkomponente</h2>
        <button @click="sendMessage">Send Message to Parent</button>
    </div>
    </template>

**Erklärung:**

- **Elternkomponente:**
  - Die Elternkomponente hat eine reaktive Referenz `parentMessage`, um die Nachricht von der Kindkomponente zu speichern.
  - Die Funktion `handleUpdate` nimmt die übermittelte Nachricht entgegen und aktualisiert `parentMessage`.
  - Die Kindkomponente (`ChildComponent`) verwendet den `@update-message` Listener, um auf das Ereignis zu reagieren, das von der Kindkomponente ausgelöst wird.

- **Kindkomponente (ChildComponent.vue):**
  - Die Kindkomponente verwendet `defineEmits`, um das Ereignis `update-message` zu definieren, das an die Elternkomponente gesendet wird.
  - Die Funktion `sendMessage` verwendet `emit('update-message', childMessage.value)`, um das Ereignis mit einer Nachricht auszulösen. Diese Nachricht wird dann an die Elternkomponente weitergegeben.
  - Die Kindkomponente hat einen Button, mit dem der Benutzer die Nachricht an die Elternkomponente senden kann.

**Zusätzliche Hinweise:**

- **defineEmits:** `defineEmits` ist die API, die in der Kindkomponente verwendet wird, um Ereignisse zu definieren, die ausgelöst werden können. Dies ermöglicht es,
    dass die Elternkomponente auf diese Ereignisse reagieren kann.
- **Datenfluss:** Der Datenfluss erfolgt von der Kindkomponente zur Elternkomponente durch das Auslösen eines benutzerdefinierten Ereignisses,
    während der Datenfluss von der Elternkomponente zur Kindkomponente mithilfe von `props` erfolgt.
- **Typisierung und Validierung:** Du kannst auch die benutzerdefinierten Ereignisse typisieren oder validieren, um sicherzustellen, dass die richtigen Daten gesendet werden.