Bind 🔗
=====================

In diesem Beispiel lernst du, wie du dynamisch Klassen an eine HTML-Komponente in Vue binden kannst. Dadurch kannst du flexibel die Darstellung deiner Komponenten steuern, z.B. Farben oder andere CSS-Eigenschaften anpassen.

.. code-block:: vue

    <script setup>
    import { ref } from 'vue'

    // Eine reaktive Referenz für die Klasse "title"
    const titleClass = ref('title')
    </script>

    <template>
    <!-- Die Klasse "titleClass" wird hier gebunden, um die Farbe zu ändern -->
    <h1 :class="titleClass">Make me red</h1>
    </template>

    <style>
    .title {
        color: red;
    }

    .test-title {
        color: blue;
    }
    </style>

**Erklärung:**

- **script setup:** Hier wird das reaktive Objekt `titleClass` definiert. Es wird die Klasse `title` initial zugewiesen, was bedeutet, dass das Element mit dieser Klasse den Stil `color: red` erhält.
- **template:** Im Template-Abschnitt verwenden wir `:class` zur dynamischen Bindung. Dies bedeutet, dass die Klasse des `<h1>`-Elements entsprechend dem Wert der Referenz `titleClass` gesetzt wird.
- **style:** In den CSS-Stilen sind zwei Klassen definiert: `title` (mit roter Schrift) und `test-title` (mit blauer Schrift).


Option 2: Objekte mit `v-bind` binden
-------------------------------------

Du kannst auch Objekte verwenden, um mehrere Klassen oder Stile gleichzeitig zu binden. Das ist besonders nützlich, wenn du dynamisch verschiedene Klassen kombinieren möchtest.

.. code-block:: vue

    <script setup>
    import { ref } from 'vue'

    // Reaktives Objekt für Klassenbindung
    const classObject = ref({
      title: true,
      'test-title': false
    })
    </script>

    <template>
    <!-- Klassenbindung mit einem Objekt -->
    <h1 v-bind:class="classObject">Make me red or blue</h1>
    </template>

    <style>
    .title {
        color: red;
    }

    .test-title {
        color: blue;
    }
    </style>

**Erklärung:**

- **script setup:** Hier definieren wir ein reaktives Objekt `classObject`, welches angibt, welche Klassen auf das `<h1>`-Element angewendet werden sollen. Im Beispiel ist die Klasse `title` auf `true` gesetzt und `test-title` auf `false`. Das bedeutet, dass `title` angewendet wird und `test-title` nicht.
- **template:** Im Template wird `v-bind:class` (kurz auch als `:class` geschrieben) verwendet, um das Objekt `classObject` zu binden. Dadurch können mehrere Klassen basierend auf den Werten im Objekt dynamisch angewendet werden.
- **style:** Die definierten Klassen `title` und `test-title` haben unterschiedliche Farben. Durch Anpassen des Objekts kann die Darstellung einfach geändert werden.