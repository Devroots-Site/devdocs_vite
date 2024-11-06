Berechnete Eigenschaften 🧾
===================================

In diesem Beispiel lernst du, wie du berechnete Eigenschaften (`computed`) in Vue verwenden kannst, um dynamische Berechnungen auf Basis von reaktiven Daten durchzuführen. Berechnete Eigenschaften sind nützlich, wenn du eine abhängige Berechnung hast, die automatisch aktualisiert werden soll, wenn sich die zugrunde liegenden Daten ändern.

.. code-block:: vue

    <script setup>
    import { ref, computed } from 'vue'

    let id = 0

    const newTodo = ref('')
    const hideCompleted = ref(false)
    const todos = ref([
        { id: id++, text: 'Learn HTML', done: true },
        { id: id++, text: 'Learn JavaScript', done: true },
        { id: id++, text: 'Learn Vue', done: false }
    ])

    const filterTodo = computed(() => {
        return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value
    })

    function addTodo() {
        todos.value.push({ id: id++, text: newTodo.value, done: false })
        newTodo.value = ''
    }

    function removeTodo(todo) {
        todos.value = todos.value.filter((t) => t !== todo)
    }
    </script>

    <template>
    <form @submit.prevent="addTodo">
        <input v-model="newTodo" required placeholder="new todo">
        <button>Add Todo</button>
    </form>
    <ul>
        <li v-for="todo in filterTodo" :key="todo.id">
            <input type="checkbox" v-model="todo.done">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
            <button @click="removeTodo(todo)">X</button>
        </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
    </template>

    <style>
    .done {
        text-decoration: line-through;
    }
    </style>

**Erklärung:**

- **script setup:** 
  - Die reaktive Referenz `todos` enthält eine Liste von Aufgaben (To-dos), die jeweils eine eindeutige ID, einen Text und den Zustand `done` haben (ob die Aufgabe erledigt ist).
  - `hideCompleted` ist eine reaktive Referenz, die angibt, ob abgeschlossene To-dos ausgeblendet werden sollen.
  - `filterTodo` ist eine berechnete Eigenschaft, die abhängig vom Wert von `hideCompleted` die Liste der To-dos entweder vollständig oder gefiltert zurückgibt.
  - Die Funktionen `addTodo` und `removeTodo` fügen neue Aufgaben hinzu bzw. entfernen bestehende Aufgaben aus der Liste.

- **template:**
  - Das `<form>`-Element ermöglicht das Hinzufügen eines neuen To-dos. `@submit.prevent` verhindert das Neuladen der Seite, und `v-model` bindet den Eingabewert an `newTodo`.
  - Die `<ul>`-Liste verwendet `v-for`, um durch die berechnete Eigenschaft `filterTodo` zu iterieren und die To-dos anzuzeigen. Jedes To-do kann durch Anklicken des zugehörigen Buttons entfernt werden.
  - Ein weiterer Button steuert, ob die abgeschlossenen To-dos angezeigt oder ausgeblendet werden.

- **computed:** Berechnete Eigenschaften (`computed`) sind hilfreich, wenn der gerenderte Wert dynamisch von anderen reaktiven Daten abhängt. Hier wird `filterTodo` verwendet, um die angezeigte To-do-Liste basierend auf dem Zustand von `hideCompleted` automatisch anzupassen.

**Zusätzliche Hinweise:**

- **v-for und :key:** Die `v-for`-Schleife durchläuft alle Elemente in `filterTodo`, und die `:key`-Eigenschaft stellt sicher, dass Vue die Elemente effizient nachverfolgen kann.
- **Konditionale Anzeige:** Die berechnete Eigenschaft ermöglicht eine effiziente Steuerung darüber, welche To-dos angezeigt werden sollen, ohne dass die Originaldaten geändert werden.