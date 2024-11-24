useWatch & watch
=====================================

.. note:: Diese Dokumentation behandelt die Funktionen `useWatch` und `watch` in der Bibliothek `react-hook-form`. Beide werden genutzt, um das Verhalten und den Status von Formularfeldern zu beobachten und auf Änderungen zu reagieren. Es wird auch darauf eingegangen, welche Vorteile und Nachteile beide Funktionen bieten.

Einführung
----------

Sowohl `useWatch` als auch `watch` sind Methoden, die in der Bibliothek `react-hook-form` verwendet werden, um Formularwerte in Echtzeit zu verfolgen. Während beide ähnliche Ziele verfolgen, unterscheiden sie sich in ihrem Anwendungsbereich und der Effizienz bei der Verarbeitung von Änderungen im Formular.

`watch` ⌚
^^^^^^^^^^^^^^

`watch` wird verwendet, um Formularwerte während des Renderings der Komponente zu verfolgen. Es wird direkt in der Komponente aufgerufen und kann sowohl einzelne Felder als auch das gesamte Formular beobachten.

`useWatch` 📺
^^^^^^^^^^^^^^^^

`useWatch` ist ein Hook, der ebenfalls zur Beobachtung von Formularwerten dient. Der entscheidende Unterschied zu `watch` besteht darin, dass `useWatch` den Vorteil bietet, das Neurendern der Komponente zu vermeiden, wenn sich ein Formularwert ändert. Dies kann die Leistung erheblich verbessern, wenn nur bestimmte Teile eines Formulars überwacht werden müssen.

Verwendungszweck von `watch`
----------------------------

Du kannst `watch` verwenden, wenn du:

- Den Wert eines Formularfeldes oder aller Felder in Echtzeit abrufen möchtest.
- Schnell und unkompliziert auf Formularwerte zugreifen willst, ohne zusätzliche Performance-Optimierungen zu benötigen.

Syntax ⚡
---------

Die allgemeine Verwendung von `watch` sieht wie folgt aus:

.. code-block:: react

    const value = watch("fieldName");       // Beobachte ein bestimmtes Feld
    const values = watch();                 // Beobachte das gesamte Formular
    const defaultValues = watch(["field1", "field2"]); // Beobachte mehrere Felder

Beispiele für `watch` 🎲
------------------------

Beispiel 1: Beobachten eines einzelnen Feldes mit `watch`
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: react

    import React from 'react';
    import { useForm } from 'react-hook-form';

    function MyForm() {
      const { register, watch } = useForm();
      const firstName = watch("firstName", "");

      return (
        <form>
          <input {...register("firstName")} placeholder="Vorname" />
          <p>Beobachteter Wert: {firstName}</p>
        </form>
      );
    }

In diesem Beispiel wird das Feld `firstName` mit `watch` überwacht, und der Wert wird bei jeder Änderung direkt neu gerendert.

Beispiel 2: Beobachten mehrerer Felder mit `watch`
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: react

    import React from 'react';
    import { useForm } from 'react-hook-form';

    function MyForm() {
      const { register, watch } = useForm();
      const [firstName, lastName] = watch(["firstName", "lastName"]);

      return (
        <form>
          <input {...register("firstName")} placeholder="Vorname" />
          <input {...register("lastName")} placeholder="Nachname" />
          <p>Vorname: {firstName}</p>
          <p>Nachname: {lastName}</p>
        </form>
      );
    }

In diesem Beispiel werden die Felder `firstName` und `lastName` gleichzeitig überwacht und bei jeder Änderung neu gerendert.

Vor- und Nachteile von `watch` 👍 /👎
-----------------------------------------------

.. list-table:: 
   :widths: 20 80
   :header-rows: 1

   * - Vorteil
     - Nachteil
   * - Einfach zu verwenden für das Abrufen von Werten während des Renderings
     - Führt zu Neurenderings bei jeder Formularwert-Änderung, was die Performance beeinträchtigen kann
   * - Gut geeignet für kleinere Formulare, bei denen Performance kein kritischer Faktor ist
     - Beobachtet immer alle Formularänderungen und verursacht damit unnötige Re-Renderings
   * - Ideal für schnelles Prototyping oder wenn es nicht notwendig ist, die Performance zu optimieren
     - Keine Möglichkeit zur Vermeidung unnötiger Neurenderings

Verwendungszweck von `useWatch` 🔨
-----------------------------------

`useWatch` solltest du verwenden, wenn du:

- Den Zustand eines oder mehrerer Formularfelder beobachten möchtest, ohne dass das gesamte Formular bei jeder Änderung neu gerendert wird.
- Performance-Optimierungen suchst, insbesondere bei großen Formularen mit vielen Feldern.
- Nur bestimmte Felder überwachen möchtest, ohne dass die gesamte Komponente neu gerendert wird.

Syntax von `useWatch` ⚡
--------------------------

Die Verwendung von `useWatch` sieht ähnlich aus wie bei `watch`, jedoch musst du das `control`-Objekt aus `useForm` übergeben:

.. code-block:: react

    const watchedValue = useWatch({
      control,        // Pflichtparameter: das Kontrollobjekt des Formulars
      name,           // Optional: der Name des zu beobachtenden Feldes
      defaultValue    // Optional: ein Standardwert, falls das Feld keinen Wert hat
    });

Beispiele für `useWatch` 🎲
----------------------------

Beispiel 1: Beobachten eines einzelnen Feldes mit `useWatch`
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: react

    import React from 'react';
    import { useForm, useWatch } from 'react-hook-form';

    function MyForm() {
      const { control, register } = useForm();
      const firstName = useWatch({ control, name: "firstName", defaultValue: "" });

      return (
        <form>
          <input {...register("firstName")} placeholder="Vorname" />
          <p>Beobachteter Wert: {firstName}</p>
        </form>
      );
    }

Hier wird das Feld `firstName` mit `useWatch` überwacht, und der Wert wird in Echtzeit aktualisiert, ohne dass das Formular neu gerendert wird.

Beispiel 2: Beobachten mehrerer Felder mit `useWatch`
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: react

    import React from 'react';
    import { useForm, useWatch } from 'react-hook-form';

    function MyForm() {
      const { control, register } = useForm();
      const [firstName, lastName] = useWatch({
        control,
        name: ["firstName", "lastName"],
        defaultValue: ["", ""]
      });

      return (
        <form>
          <input {...register("firstName")} placeholder="Vorname" />
          <input {...register("lastName")} placeholder="Nachname" />
          <p>Vorname: {firstName}</p>
          <p>Nachname: {lastName}</p>
        </form>
      );
    }

Mit `useWatch` kannst du mehrere Felder effizient überwachen, ohne unnötige Neurenderings.

Vor- und Nachteile von `useWatch` 👍 / 👎
-------------------------------------------------

.. list-table:: 
   :widths: 20 80
   :header-rows: 1

   * - Vorteil
     - Nachteil
   * - Verhindert unnötige Neurenderings und verbessert die Performance
     - Etwas komplizierter in der Einrichtung, da `control`-Objekt benötigt wird
   * - Ideal für große Formulare oder Formulare mit vielen Feldern
     - Nicht so einfach und schnell einzusetzen wie `watch`
   * - Ermöglicht selektives Beobachten von Feldern oder des gesamten Formulars
     - Muss explizit konfiguriert werden, was für kleine Formulare unnötig sein könnte

Fazit
-----

- **`watch`** ist ideal für kleine und unkomplizierte Formulare, bei denen Performance nicht im Vordergrund steht und du nur schnell auf Formularwerte zugreifen möchtest.
- **`useWatch`** hingegen bietet eine effizientere Lösung für größere Formulare, bei denen unnötige Neurenderings vermieden werden sollen. Es ist besonders nützlich, wenn nur bestimmte Felder beobachtet werden sollen, während der Rest des Formulars unberührt bleibt.

.. tip::
   Verwende `watch` für schnelle Prototypen oder wenn Neurenderings kein Problem darstellen. Verwende hingegen `useWatch`, wenn du die Performance optimieren und unnötige Renderings vermeiden möchtest.



Kurzes Beispiel als Unterschied 
---------------------------------------------------


- watch will render the root level
- useWatch will render at the hook/component level

<A>
  <B>
    <C>
       <D /> // Input change here
    </C>
  </B>
  <E /> // i only want to re-render the update here.
</A>