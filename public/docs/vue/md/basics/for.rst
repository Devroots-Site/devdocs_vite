Forschleifen 🎀
======================================

In diesem Beispiel lernst du, wie du mit `v-for` in Vue eine Liste von Elementen wiederholen kannst. `v-for` ist nützlich, um dynamische Inhalte wie To-do-Listen oder Aufzählungen einfach zu rendern.

.. code-block:: vue

    <script setup>
    import { ref } from 'vue'

    // Jeder To-do-Eintrag erhält eine eindeutige ID
    let id = 0

    const newTodo = ref('')
    const todos = ref([
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn JavaScript' },
        { id: id++, text: 'Learn Vue' }
    ])

    function addTodo() {
        todos.value.push({ id: id++, text: newTodo.value })
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
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.text }}
            <button @click="removeTodo(todo)">X</button>
        </li>
    </ul>
    </template>

**Erklärung:**

- **script setup:** 
  - Die reaktive Referenz `todos` enthält eine Liste von Aufgaben (To-dos), die jeweils eine eindeutige ID und einen Text haben. Der Zähler `id` wird verwendet, um jedem To-do eine eindeutige ID zuzuweisen.
  - Die Funktion `addTodo` fügt ein neues To-do zur Liste hinzu und setzt den Eingabewert zurück.
  - Die Funktion `removeTodo` entfernt ein bestimmtes To-do aus der Liste.

- **template:**
  - Das `<form>`-Element wird verwendet, um ein neues To-do hinzuzufügen. Die Methode `@submit.prevent` verhindert das Standardverhalten des Formulars, und `v-model` bindet den Eingabewert an `newTodo`.
  - Die `<ul>`-Liste zeigt alle To-dos mit einer Schleife (`v-for`). Jedes To-do wird als `<li>`-Element gerendert, und die `:key`-Eigenschaft sorgt dafür, dass Vue die Elemente effizient nachverfolgen kann.
  - Ein Button neben jedem `<li>`-Element ermöglicht es, das jeweilige To-do zu entfernen.

**Zusätzliche Hinweise:**

- **v-for:** `v-for` wird verwendet, um eine Liste von Elementen zu rendern. Der Ausdruck `todo in todos` durchläuft jedes To-do in der Liste `todos`.
- **:key:** Die `:key`-Eigenschaft ist wichtig, damit Vue jedes Element eindeutig identifizieren und optimieren kann, wenn die Liste aktualisiert wird.
- **Formularverhalten verhindern:** `@submit.prevent` verhindert das Neuladen der Seite, das normalerweise beim Absenden eines Formulars passiert.