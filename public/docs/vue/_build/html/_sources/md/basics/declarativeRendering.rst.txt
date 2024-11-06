Deklaratives Rendering in Vue
====================================

Das deklarative Renderingsystem von Vue erleichtert den Aufbau komplexer Benutzeroberflächen, indem es auf vertrauten HTML-basierten Templates basiert. Sie definieren die Struktur Ihrer Anwendung im Template, und Vue sorgt dafür, dass diese aktualisiert wird, sobald sich die Daten ändern. Im Folgenden werden wir einige gängige Ansätze zur Verwaltung des Zustands mithilfe der Kernfunktionen von Vue wie `ref` und `reactive` erkunden.

Werte mit `ref` setzen 🧩
-----------------------------------------

In Vue ist `ref` eine Funktion, mit der Sie eine reaktive Referenz auf einen Wert erstellen können. Sie eignet sich ideal zur Verwaltung einfacher primitiver Werte wie Zeichenketten oder Zahlen und sorgt dafür, dass Ihr Template aktualisiert wird, sobald sich der Wert ändert.

.. code-block:: vue

    <script setup>
    import { ref } from 'vue'
    
    const message = ref('Hallo Welt')
    </script>

    <template>
    <h1>{{ message }}</h1>
    </template>

Hier ist `message` eine reaktive Referenz auf die Zeichenkette `'Hallo Welt'`. Im Template wird der Inhalt von `{{ message }}` dynamisch aktualisiert, sobald sich der Wert von `message` ändert.

- *ref*: Die `ref`-Funktion wird verwendet, um ein reaktives Objekt zu erstellen, das einen Wert speichert. Wenn der Wert von `ref` aktualisiert wird, löst Vue automatisch ein erneutes Rendern aller Teile des Templates aus, die diese Referenz verwenden.

Komplexe Zustände mit `reactive` verfolgen 🖊️
-----------------------------------------------------------------

Wenn Sie komplexere Datenstrukturen wie Objekte oder Arrays verwalten müssen, können Sie die `reactive`-Funktion von Vue verwenden. Diese Funktion gibt ein reaktives Proxy-Objekt zurück, und alle seine Eigenschaften werden reaktiv verfolgt.

.. code-block:: vue

    <script setup>
    import { reactive, ref } from 'vue'

    const counter = reactive({ count: 0 })
    const message = ref('Hallo Welt!')
    </script>

    <template>
    <h1>{{ message }}</h1>
    <p>Der Zählerstand ist: {{ counter.count }}</p>
    </template>

In diesem Beispiel verwendet das `counter`-Objekt `reactive`, um die Eigenschaft `count` zu verwalten. Die Variable `message` verwendet `ref`, um einen einfachen Wert zu speichern. Die Kombination aus `ref` und `reactive` ermöglicht es Ihnen, sowohl primitive als auch komplexe Zustände in Ihren Komponenten einfach zu verwalten.

- *reactive*: Verwenden Sie `reactive`, wenn Sie mehrere Eigenschaften innerhalb eines Objekts verfolgen müssen. Vue macht jede Eigenschaft automatisch reaktiv, sodass Änderungen im DOM widergespiegelt werden.

Zusammenfassung 🤓
-------------------------------------
- Verwenden Sie `ref` für primitive Werte und wenn Sie nur einen einzelnen Wert reaktiv speichern müssen.
- Verwenden Sie `reactive` für Objekte und Arrays, wenn Sie mehrere Eigenschaften als einen Zustand verwalten müssen.

Mit `ref` und `reactive` macht Vue den Aufbau reaktiver und wartbarer Komponenten einfach, sodass Ihre Benutzeroberfläche immer mit Ihren Daten synchron bleibt.