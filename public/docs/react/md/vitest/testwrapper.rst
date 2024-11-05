TestWrapper 🧨
=========================

Der `TestWrapper` ist eine Hilfskomponente in React, die speziell für das Testen von Formularen entwickelt wurde, 
die durch die `React Hook Form`-Bibliothek verwaltet werden. Der TestWrapper verwendet `useForm` aus dieser Bibliothek und 
stellt den Formularmethoden-Kontext über `FormProvider` zur Verfügung. Dies erleichtert das Testen von Formularen, 
die Validierungs- und Zustandshandling benötigen.

Code-Überblick
--------------------------

Der `TestWrapper` wurde als funktionale Komponente definiert und hat folgende Eigenschaften:

.. code-block:: react

    const TestWrapper = ({ children }: { children: React.ReactNode }) => {
      const methods = useForm({
        resolver: zodResolver(legalProtectionSchema),
        mode: 'onBlur',
        defaultValues: {
          isDeclarationOfConsent: null,
        },
      });
      return <FormProvider {...methods}>{children}</FormProvider>;
    };

Erklärung des Codes: 👨‍🏫
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- **`useForm`**: 
  Die `useForm`-Funktion von React Hook Form initialisiert die Formularsteuerungslogik und Validierungsmethoden. Hier wird der Resolver `zodResolver` verwendet, um das Schema `legalProtectionSchema` zur Validierung zu integrieren.
  
- **`resolver: zodResolver(legalProtectionSchema)`**:
  Der `zodResolver` verbindet React Hook Form mit der `Zod`-Bibliothek, die ein Schema zur Validierung bereitstellt. Das Schema, `legalProtectionSchema`, legt die Regeln für die Validierung des Formulars fest.

- **`mode: 'onBlur'`**: 
  In diesem Modus wird die Validierung ausgelöst, wenn ein Formularfeld den Fokus verliert, anstatt bei jeder Eingabe. Dies ist nützlich, um unnötige Validierungsprozesse zu vermeiden und bietet ein angenehmeres Benutzererlebnis.

- **`defaultValues`**: 
  In diesem Objekt wird der Standardwert für das Formular festgelegt. In diesem Fall wird der Wert für `isDeclarationOfConsent` auf `null` gesetzt, was signalisiert, dass noch keine Einwilligungserklärung abgegeben wurde.

- **`FormProvider`**: 
  Diese Komponente wird von React Hook Form bereitgestellt und sorgt dafür, dass alle untergeordneten Komponenten, die `useFormContext` verwenden, auf die Formularmethoden zugreifen können. Es wird die `methods`-Variable übergeben, die von `useForm` zurückgegeben wird.

Verwendung des TestWrapper 🪬
----------------------------- 

Der `TestWrapper` wird in Testfällen eingesetzt, um Formularzustände und -methoden bereitzustellen, ohne dass der Test explizit diese Logik enthalten muss. Dies spart Zeit und hält den Testcode sauber.

Beispiel:

.. code-block:: react

    const renderComponent = () => {
      return render(
        <TestWrapper>
          <form>
            <DeclarationOfConsent />
          </form>
        </TestWrapper>
      );
    };

In diesem Beispiel wird eine Komponente `DeclarationOfConsent` gerendert, die Teil eines Formulars ist. 
`TestWrapper` stellt sicher, dass der Formularkontext durch den `FormProvider` bereitgestellt wird, 
sodass die Komponente korrekt getestet werden kann.

Vorteile des TestWrapper
----------------------------

1. **Wiederverwendbarer Code**: Der `TestWrapper` macht es überflüssig, in jedem Test die `useForm`-Logik einzurichten. 
   Alle relevanten Formularmethoden sind verfügbar, ohne dass redundanter Code benötigt wird.

2. **Saubere Trennung von Logik und Tests**: Der Testcode konzentriert sich nur auf die spezifische Komponente, 
   die getestet wird, während der `TestWrapper` die zugrundeliegende Formularlogik und -validierung abstrahiert.

3. **Einfache Validierung mit Zod**: Da `zodResolver` bereits in den `TestWrapper` integriert ist, 
   ist das Validierungsschema automatisch an das Formular gekoppelt. Es muss nicht in jedem Test erneut eingerichtet werden.

4. **Anpassbare Formularmethoden**: Standardwerte wie `defaultValues` können einfach angepasst werden, um unterschiedliche 
   Testfälle zu unterstützen.

Wann sollte der TestWrapper verwendet werden?
-----------------------------------------------

Der `TestWrapper` ist besonders nützlich, wenn:

- **Formulare mit React Hook Form**: Die zu testenden Komponenten hängen von `useFormContext` ab oder verwenden direkt 
  die Methoden von React Hook Form (z. B. `register`, `handleSubmit`, `formState`).

- **Formvalidierung**: Die Komponente, die getestet wird, benötigt eine Validierung, die in `legalProtectionSchema` 
  definiert ist, und der Test soll sicherstellen, dass die Validierungslogik korrekt funktioniert.

- **Saubere Tests**: Wenn du wiederholte Formularkonfigurationen in Tests vermeiden möchtest, hilft der `TestWrapper` dabei, 
  diese Komplexität zu reduzieren.

Zusammenfassung
----------------

Der `TestWrapper` vereinfacht die Arbeit mit Formularen in Testfällen, die mit `React Hook Form` und `Zod` arbeiten. 
Er sorgt für wiederverwendbare und saubere Teststrukturen, indem er die Formularlogik abstrahiert und die Integration von Validierungsschemata erleichtert.