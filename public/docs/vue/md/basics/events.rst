Events in Vue 🚀
==============================

In diesem Beispiel lernst du, wie du in Vue verschiedene Events verwendest, um auf Benutzerinteraktionen zu reagieren. Dies ermöglicht es, dynamisch auf Aktionen wie Klicks, Tastatureingaben oder Mausbewegungen zu antworten.

.. code-block:: vue

    <script setup>
    import { ref } from 'vue'

    const count = ref(0)

    function increment() {
        count.value++
    }
    </script>

    <template>
    <button @click="increment">Count is: {{ count }}</button>
    </template>


Event-Referenz
--------------

Nachfolgend findest du eine Tabelle mit einer Übersicht der gängigsten Vue-Events und deren Einsatzbeispiele:

.. list-table::
   :header-rows: 1

   * - Event
     - Beschreibung
     - Beispiel
   * - `@click`
     - Wird ausgelöst, wenn ein Element angeklickt wird.
     - `<button @click="increment">...</button>`
   * - `@mouseover`
     - Wird ausgelöst, wenn die Maus über ein Element fährt.
     - `<div @mouseover="onHover">...</div>`
   * - `@mouseout`
     - Wird ausgelöst, wenn die Maus ein Element verlässt.
     - `<div @mouseout="onLeave">...</div>`
   * - `@keydown`
     - Wird ausgelöst, wenn eine Taste gedrückt wird.
     - `<input @keydown="onKeyDown">`
   * - `@keyup`
     - Wird ausgelöst, wenn eine Taste losgelassen wird.
     - `<input @keyup="onKeyUp">`
   * - `@input`
     - Wird ausgelöst, wenn der Wert eines Eingabefeldes geändert wird.
     - `<input @input="onInput">`
   * - `@submit`
     - Wird ausgelöst, wenn ein Formular abgeschickt wird.
     - `<form @submit.prevent="onSubmit">`
   * - `@focus`
     - Wird ausgelöst, wenn ein Element den Fokus erhält.
     - `<input @focus="onFocus">`
   * - `@blur`
     - Wird ausgelöst, wenn ein Element den Fokus verliert.
     - `<input @blur="onBlur">`

Erklärung der Events
--------------------

- In Vue werden Events über die `@`-Syntax an HTML-Elemente gebunden, um auf Benutzerinteraktionen zu reagieren.
- Die obige Tabelle zeigt einige der am häufigsten verwendeten Events sowie deren Verwendung in der Praxis.
- Jedes Event kann eine eigene Methode aufrufen, die eine benutzerdefinierte Aktion ausführt.
