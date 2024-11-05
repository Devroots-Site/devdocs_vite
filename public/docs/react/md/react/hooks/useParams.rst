`useParams`
===========================

.. tip:: 
    Schaue als erstes in der route selber nach


.. note:: Diese Dokumentation bietet eine detaillierte Übersicht zum `useParams` Hook in React Router, erklärt die Voraussetzungen zur Verwendung und zeigt typische Anwendungsfälle auf.


Einführung 🔗
-------------------------------

Der `useParams` Hook in React Router wird verwendet, um **URL-Parameter** in einer React-Komponente zu extrahieren. 
URL-Parameter sind Teile der URL, die dynamische Werte enthalten, die in den Routen einer Anwendung verwendet werden, um Informationen zu übermitteln.

    Beispiel Pfad: /speisekarte/essen/123

Hier könnte `essen` eine Kategorie und `123` eine spezifische ID für ein Gericht sein. Mit `useParams` kannst du auf diese Parameter zugreifen und sie in deiner Komponente verwenden.

Voraussetzungen für `useParams` 💡
-----------------------------------------
Um `useParams` erfolgreich zu verwenden, müssen folgende Voraussetzungen erfüllt sein:

1. **React Router muss installiert und eingerichtet sein**:
   Stelle sicher, dass React Router in deinem Projekt installiert ist, indem du das folgende Kommando ausführst:

   .. code-block:: bash

      npm install react-router-dom

2. **Die Route muss Parameter definiert haben**:
   Du musst die Route so definieren, dass sie dynamische Parameter akzeptiert. Dies geschieht durch das Hinzufügen von **Doppelpunkt**-Präfixen (`:`) zu den Routen-Pfaden, die du als Parameter verwenden möchtest.

Beispiel für eine Route mit Parametern:

.. code-block:: react

   <Route path="/speisekarte/:essenId" element={<SpeiseDetail />} />

In diesem Fall ist `essenId` der dynamische Parameter, auf den du in der `SpeiseDetail`-Komponente mit `useParams` zugreifen kannst.

Zugreifen auf URL-Parameter mit `useParams` ♾️
----------------------------------------------------------

Um auf die URL-Parameter zuzugreifen, kannst du den `useParams` Hook in deiner Komponente verwenden. Der Hook gibt ein **Objekt** zurück, das alle in der URL definierten Parameter enthält. Jeder Parameter ist als Schlüssel-Wert-Paar im Objekt gespeichert.

Hier ist ein Beispiel, wie du `useParams` verwendest:

.. code-block:: react

   import { useParams } from 'react-router-dom';

   function SpeiseDetail() {
     const { essenId } = useParams();  // Der Parameter `essenId` wird aus der URL extrahiert

     return (
       <div>
         <h1>Details für Gericht {essenId}</h1>
       </div>
     );
   }

In diesem Beispiel:

- `useParams` gibt ein Objekt zurück, das den Wert des Parameters `essenId` enthält.
- Wenn die URL `/speisekarte/123` ist, dann wäre `essenId` gleich `123`.

Voraussetzung für den Zugriff auf Parameter 🧪
----------------------------------------------------
Damit du auf Parameter zugreifen kannst, müssen folgende Bedingungen erfüllt sein:

1. **Die Route muss Parameter enthalten**:
   Die Route muss so definiert sein, dass sie dynamische Teile enthält, die als Parameter fungieren. Verwende hierfür `:` gefolgt von dem Namen des Parameters im Pfad der Route.

.. code-block:: react

   <Route path="/speisekarte/:essenId" element={<SpeiseDetail />} />

2. **Die Komponente muss in einer Route gerendert werden**:
   Die Komponente, in der du auf die Parameter zugreifen möchtest, muss von React Router gerendert werden. Das bedeutet, sie muss als `element` in einer Route innerhalb von `Routes` verwendet werden.

.. warning::
   `useParams` funktioniert nur in Komponenten, die innerhalb von `Route` gerendert werden. Falls du versuchst, `useParams` außerhalb einer Route zu verwenden, wird der Hook ein leeres Objekt zurückgeben.

Typische Anwendungsfälle für `useParams` 💫
----------------------------------------------------

1. **Daten anhand von URL-Parametern laden**:
   Eine häufige Verwendung von `useParams` ist das Abrufen von Daten, die von einem URL-Parameter abhängen. Beispielsweise könntest du in einer E-Commerce-Anwendung eine Produktseite rendern, deren Inhalt basierend auf der Produkt-ID in der URL dynamisch geladen wird.

Beispiel:

.. code-block:: react

   import { useParams } from 'react-router-dom';

   function ProduktDetail() {
     const { produktId } = useParams();

     // Stelle dir vor, wir laden die Produktdetails basierend auf der ID
     useEffect(() => {
       fetchProdukt(produktId);  // Funktion zum Abrufen des Produkts
     }, [produktId]);

     return (
       <div>
         <h1>Details zum Produkt {produktId}</h1>
       </div>
     );
   }

In diesem Beispiel:
- Die Funktion `fetchProdukt` wird aufgerufen, wenn die Komponente basierend auf der `produktId` in der URL neu geladen wird.
- Wenn die URL `/produkte/42` lautet, würde `produktId` den Wert `42` haben und das Produkt mit der ID `42` würde geladen werden.

2. **Seiten mit mehreren dynamischen Parametern**:
   Wenn du mehrere Parameter in der URL hast, kannst du diese alle mit `useParams` abrufen und verwenden.

Beispiel für eine Route mit mehreren Parametern:

.. code-block:: react

   <Route path="/speisekarte/:kategorie/:gerichtId" element={<GerichtDetail />} />

Und so greifst du auf beide Parameter zu:

.. code-block:: react

   function GerichtDetail() {
     const { kategorie, gerichtId } = useParams();

     return (
       <div>
         <h1>{kategorie} - Gericht {gerichtId}</h1>
       </div>
     );
   }

Wenn die URL `/speisekarte/vorspeisen/123` lautet, wäre `kategorie` gleich `vorspeisen` und `gerichtId` gleich `123`.

3. **Navigieren mit dynamischen Parametern**:
   Du kannst auch dynamische Parameter verwenden, um zu anderen Routen zu navigieren. Hierbei kannst du die Parameter entweder mit der `Link`-Komponente oder programmatisch mit dem `useNavigate`-Hook setzen.

Beispiel mit `Link`:

.. code-block:: react

   <Link to={`/speisekarte/${essenId}`}>Details anzeigen</Link>

Beispiel mit `useNavigate`:

.. code-block:: react

   import { useNavigate } from 'react-router-dom';

   function NavigateToEssen() {
     const navigate = useNavigate();

     const goToEssen = (essenId) => {
       navigate(`/speisekarte/${essenId}`);
     };

     return <button onClick={() => goToEssen(123)}>Zu Essen 123 navigieren</button>;
   }

In diesem Beispiel wird der Benutzer nach Klick auf den Button zur Route **/speisekarte/123** navigiert.

Fehlerbehandlung mit `useParams` 👹
----------------------------------------------------
Es ist möglich, dass eine Route ohne die erwarteten Parameter aufgerufen wird oder ein ungültiger Parameterwert in der URL übergeben wird. Um dies zu handhaben, solltest du immer eine Fehlerüberprüfung vornehmen.

Beispiel einer Fehlerüberprüfung:

.. code-block:: react

   function GerichtDetail() {
     const { gerichtId } = useParams();

     if (!gerichtId) {
       return <h1>Gericht nicht gefunden!</h1>;
     }

     return <h1>Details zu Gericht {gerichtId}</h1>;
   }

In diesem Fall wird überprüft, ob der Parameter `gerichtId` vorhanden ist. Wenn er fehlt, wird eine Fehlermeldung angezeigt.

Zusammenfassung 📑
----------------------------------------------------
Der `useParams` Hook ist ein nützliches Werkzeug, um auf dynamische URL-Parameter in React Router zuzugreifen. Er ermöglicht es dir, den Wert von Parametern, die in der URL definiert sind, einfach in deinen Komponenten zu nutzen. 

- Verwende `useParams`, um Parameter wie `/:id` aus der URL zu extrahieren.
- Stelle sicher, dass deine Route Parameter definiert hat, und dass deine Komponente innerhalb von `Route` gerendert wird.
- Nutze URL-Parameter, um dynamische Inhalte wie Produktdetails, Nutzerinformationen oder andere ressourcenabhängige Inhalte anzuzeigen.

Mit `useParams` kannst du die Benutzererfahrung verbessern, indem du URL-basierte Navigation und dynamische Anzeige von Inhalten einfach in React umsetzt.



