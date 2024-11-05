Zod in React 👾
============================================================

Die Validierung von Benutzereingaben ist eine der wichtigsten Aufgaben bei der Arbeit mit Formularen in React. Zod, eine leistungsstarke Validierungsbibliothek, kann in Kombination mit `react-hook-form` verwendet werden, um Formulardaten zu validieren und sicherzustellen, dass die Daten den erwarteten Strukturen entsprechen.

In dieser Dokumentation erfährst du, wie du Zod in einem React-Projekt mit `react-hook-form` verwendest, um z.B. die E-Mail-Eingabe eines Formulars zu validieren.

Installation 🔧
-----------------------------------------

Bevor wir Zod und `react-hook-form` verwenden können, müssen wir beide Bibliotheken in unserem Projekt installieren:

.. code-block:: bash

   npm install zod react-hook-form @hookform/resolvers

Die Bibliothek `@hookform/resolvers` ist erforderlich, um Zod und `react-hook-form` miteinander zu verbinden. Sie bietet spezielle Resolver für Zod und andere Validierungsbibliotheken.

Auslagerung des Zod-Schemas in eine eigene Datei 📂
-----------------------------------------------------------

Damit der Code sauber und strukturiert bleibt, empfehlen wir, das Zod-Schema in eine eigene Datei auszulagern. Dies hilft dabei, die Validierungslogik vom Rest der Komponente zu trennen. So kannst du das Schema leicht wiederverwenden und pflegen.

Erstelle eine Datei namens `validationSchema.ts` und definiere dort dein Zod-Schema:

.. code-block::

    // validationSchema.ts
    import { z } from 'zod';

    const madatoryField = 'Pflichtfeld bitte ausfüllen';

    export const formSchema = z.object({
      eMail: z.string()
        .min(1, madatoryField)
        .email('Ungültige E-Mail Adresse')
        .max(100, 'Max. 100 Zeichen'),
      phone: z.string()
        .min(1, madatoryField)
        .max(30, 'Max. 30 Zeichen'),
      companyName: z.string()
        .min(1, madatoryField)
        .max(100, 'Max. 100 Zeichen'),
    });

    export type FormData = z.infer<typeof formSchema>;

In diesem Beispiel werden Felder wie `eMail`, `phone` und `companyName` überprüft. Du kannst das Schema nach deinen Anforderungen anpassen.

Warum `export type FormData = z.infer<typeof formSchema>`? 🧐
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Die Verwendung von `z.infer<typeof formSchema>` erlaubt es TypeScript, den Typ der Formulardaten direkt aus dem Zod-Schema abzuleiten. Das hat mehrere Vorteile:

- **Automatische Typableitung**: Der Typ passt sich automatisch an das Zod-Schema an, sodass keine manuellen Anpassungen nötig sind.
- **Typensicherheit**: TypeScript weiß genau, welche Felder und Typen im Formular vorhanden sind, was Fehler beim Datentyp vermeidet.
- **Konsistenz**: Die Validierung und die Typen bleiben immer synchron, da beide aus demselben Zod-Schema abgeleitet werden.

Das sorgt für eine saubere, sichere und wartbare Codebasis.

Redifinieren des gesamnten Objekts 🛸
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Im folgenden Beispiel wird ein Zod-Schema für ein `legalProtectionSchema` definiert. Das Schema überprüft die Eingaben für eine Mitgliedsnummer sowie für ein Versicherungsfeld, das nur dann erforderlich ist, wenn die Vorversicherung angegeben ist.

.. code-block:: react
  
  import { z } from 'zod';

  export const legalProtectionSchema = z.object({
    // Mitgliedsnummer muss ein nicht-leerer String mit maximal 100 Zeichen sein
    membershipNumber: z
      .string()
      .min(1, mandatoryField)  // Pflichtfeld
      .max(100, 'Max. 100 Zeichen'),  // Zeichenlimit
  })
  // Refinement: Versicherungsfeld nur erforderlich, wenn Vorversicherung 'ja' ist
  .refine(
    (data) => {
      if (data.isPreInsurance === 'yes') {
        return data.insurance !== '';  // Versicherung muss angegeben sein
      }
      return true;  // ansonsten ist das Feld optional
    },
    {
      message: mandatoryField,  // Fehlermeldung, falls Bedingung nicht erfüllt ist
      path: ['insurance'],  // bezieht sich auf das Versicherungsfeld
    }
  );


Wann `refine` auf das gesamte Objekt anwenden?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Du verwendest `refine`, wenn du eine Validierung durchführen möchtest, die auf **mehreren Feldern** des Objekts basiert. In diesem Fall reicht es nicht aus, nur ein einzelnes Feld zu validieren, sondern es ist wichtig, wie die Felder zueinander stehen.

In diesem Beispiel wird überprüft, ob das Feld `insurance` nur dann erforderlich ist, wenn `isPreInsurance` den Wert `'yes'` hat. Das bedeutet, die Validierung hängt von beiden Feldern ab und kann nicht einzeln für eines der Felder durchgeführt werden.

Was ist in `data` enthalten?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Das `data`-Objekt, das in der `refine`-Funktion übergeben wird, repräsentiert das **gesamte Schema**, nachdem alle einzelnen Feldvalidierungen (wie `min`, `max` usw.) durchgeführt wurden. Es enthält alle Eingabewerte für die definierten Felder. In diesem Fall hat `data` folgende Struktur:

.. code-block: react
  {
    "membershipNumber": "12345",
    "isPreInsurance": "yes",
    "insurance": "XYZ Versicherung"
  }


Falls `isPreInsurance` den Wert `'yes'` hat, wird zusätzlich überprüft, ob `insurance` auch ausgefüllt ist. Wenn diese Bedingung nicht erfüllt wird, tritt die spezifizierte Fehlermeldung auf.



Zod Validierung mit `Controller` 🎲
-----------------------------------------

Jetzt importieren wir das Schema in unsere React-Komponente und verwenden es in Kombination mit `react-hook-form` und dem `zodResolver`.

.. code-block::

    import React from 'react';
    import { useForm, Controller } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import TextField from '@mui/material/TextField';
    import { formSchema, FormData } from './validationSchema';

    const MyForm = () => {
      // useForm Hook mit dem zodResolver und unserem Schema
      const { control, handleSubmit } = useForm<FormData>({
        resolver: zodResolver(formSchema),
      });

      const onSubmit = (data: FormData) => {
        console.log('Form data:', data);
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Controller für die E-Mail Eingabe */}
          <Controller
            name="eMail"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="E-Mail Adresse"
                required
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          {/* Controller für die Telefonnummer */}
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Telefonnummer"
                required
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          {/* Controller für den Firmennamen */}
          <Controller
            name="companyName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Firmenname"
                required
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <button type="submit">Senden</button>
        </form>
      );
    };

    export default MyForm;

**Erläuterung des Codes:**

- **useForm**: `useForm` initialisiert das Formular und nimmt den `resolver` entgegen, der das Zod-Schema (`formSchema`) mit dem Formular verbindet.
- **zodResolver(formSchema)**: Der `zodResolver` prüft die Eingaben anhand des Zod-Schemas und gibt Fehler bei ungültigen Eingaben zurück.
- **Controller**: Der `Controller` sorgt für die Verbindung zwischen dem Formular-Input (`TextField`) und den Validierungsregeln. 
- **onSubmit**: Diese Funktion wird beim Absenden des Formulars aufgerufen, wenn die Validierung erfolgreich ist.

Was ist der `resolver: zodResolver(schema)`? 🤔
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Der `resolver` ist die Verbindung zwischen dem Zod-Schema und dem `react-hook-form`. In diesem Fall verwenden wir den `zodResolver`, um sicherzustellen, dass das Zod-Schema die Eingaben im Formular validiert. Jedes Mal, wenn ein Formular abgeschickt wird oder ein Eingabefeld geändert wird, prüft der `resolver`, ob die Daten den definierten Anforderungen des Schemas entsprechen.

- **Warum ist der Resolver wichtig?**: Der `resolver` sorgt dafür, dass nur gültige Daten verarbeitet werden. Wenn ein Fehler auftritt, z.B. bei einer ungültigen E-Mail-Adresse, wird dies im Formular angezeigt, und das Formular kann nicht abgeschickt werden.

Praktische Zod-Methoden für die Objektvalidierung 🐬
----------------------------------------------------------

Zod bietet viele nützliche Methoden zur Validierung von Eingaben. Hier sind einige der wichtigsten:

.. list-table::
   :header-rows: 1
   :widths: 25 50 25

   * - Methode
     - Beschreibung
     - Beispiel
   * - `z.string().min(length, message?)`
     - Validiert, dass eine Zeichenkette mindestens eine bestimmte Anzahl von Zeichen enthält.
     - `z.string().min(2, "Mindestlänge ist 2 Zeichen")`
   * - `z.string().max(length, message?)`
     - Validiert, dass eine Zeichenkette maximal eine bestimmte Anzahl von Zeichen enthält.
     - `z.string().max(10, "Maximale Länge ist 10 Zeichen")`
   * - `z.string().email(message?)`
     - Validiert, dass eine Zeichenkette eine gültige E-Mail-Adresse ist.
     - `z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein")`
   * - `z.number().min(value, message?)`
     - Validiert, dass eine Zahl größer oder gleich dem angegebenen Wert ist.
     - `z.number().min(18, "Das Mindestalter ist 18 Jahre")`
   * - `z.number().max(value, message?)`
     - Validiert, dass eine Zahl kleiner oder gleich dem angegebenen Wert ist.
     - `z.number().max(65, "Das Höchstalter ist 65 Jahre")`
   * - `z.object({})`
     - Definiert ein Schema für ein Objekt mit bestimmten Feldern.
     - `z.object({ name: z.string(), age: z.number() })`
   * - `z.enum([values])`
     - Validiert, dass ein Wert einem der angegebenen Werte entspricht.
     - `z.enum(['red', 'green', 'blue'])`

Zusammenfassung 📑
-----------------------------------------

Die Kombination von Zod und `react-hook-form` bietet eine einfache und effektive Möglichkeit, Formulareingaben in React-Anwendungen zu validieren. Mithilfe des `zodResolver` kannst du sicherstellen, dass nur gültige Eingaben verarbeitet werden, während der `Controller` das Rendering und die Eingabeverwaltung übernimmt.

Zod bietet viele hilfreiche Validierungsfunktionen, die es dir ermöglichen, Eingaben wie Zeichenketten, Zahlen und komplexe Objekte einfach zu validieren. In Kombination mit der Flexibilität von `react-hook-form` kannst du so sichere und robuste Formulare erstellen.
