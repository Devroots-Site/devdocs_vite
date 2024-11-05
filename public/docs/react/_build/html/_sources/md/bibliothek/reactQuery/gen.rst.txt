React Query 🕵🏻‍♂️
=========================

Diese Dokumentation beschreibt die Implementierung eines einfachen React-Komponenten-Setups unter Verwendung von `React Query` zum Abrufen von Benutzerdaten von einer API.

.. note::
   Diese Anleitung basiert auf einer Implementierung, die Daten von der JSONPlaceholder API abruft.

Einleitung 🪜
-------------

`React Query` ist eine Bibliothek, die die Verwaltung von Server-State in React-Anwendungen erleichtert. Es abstrahiert die Abfrage- und Cache-Logik und bietet Optimierungen wie automatische Aktualisierungen, Abfrage-Invalidierungen und mehr.

Die zwei zentralen Teile in unserem Code sind:

1. **Fetch Funktion**: Ein asynchrones Funktion, um Benutzerdaten von einer API abzurufen.
2. **Verwendung der Query**: Die eigentliche Komponente, die mit `useQuery` Daten abruft und den Lade- und Fehlerstatus behandelt.

Details der Implementierung ℹ️
------------------------------------

Provider & QueryClient 🪣
---------------------------------

Um die **useQuery** Hook in React zu nutzen, muss in der übergeordneten Komponente ein **QueryClient** und ein **QueryClientProvider** eingebunden werden. Diese beiden Komponenten regeln die Konfiguration und das Management des React Query Caches sowie der Abfragen.

**QueryClient**: 
~~~~~~~~~~~~~~~~

Der **QueryClient** ist die zentrale Instanz, die alle Abfragen verwaltet. Er bietet Konfigurationsoptionen wie z. B. Caching, Aktualisierungsstrategien und Abfrageverhalten. 

Im Beispiel wird ein neuer **QueryClient** erstellt, der als globale Instanz fungiert:

.. code-block:: react 

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: Infinity,
                cacheTime: Infinity,
            },
        },
    });

**Konfiguration:**

- **staleTime**: Bestimmt, wie lange eine Abfrage als "frisch" gilt. Mit `staleTime: Infinity` wird die Abfrage niemals als "stale" markiert, was bedeutet, dass die Daten nach dem Laden nicht automatisch aktualisiert werden.
- **cacheTime**: Gibt an, wie lange die Daten im Cache bleiben, wenn sie nicht mehr genutzt werden. Hier ist der Cache ebenfalls auf `Infinity` gesetzt, wodurch die Daten nie aus dem Cache entfernt werden.

.. note::
   In einem echten Anwendungsfall solltest du diese Optionen basierend auf den spezifischen Anforderungen deiner Anwendung anpassen. Beispielsweise kannst du **staleTime** verkürzen, um die Daten in regelmäßigen Abständen zu aktualisieren.

**QueryClientProvider**:
~~~~~~~~~~~~~~~~~~~~~~~~

Der **QueryClientProvider** stellt den **QueryClient** der gesamten React-Komponentenstruktur zur Verfügung. Jede Komponente innerhalb des Providers kann auf den **QueryClient** zugreifen und damit API-Abfragen durchführen.

In der App-Komponente wird der **QueryClientProvider** um den gesamten Komponentenbaum gelegt, damit alle untergeordneten Komponenten, wie z. B. `Users`, auf den **QueryClient** zugreifen können:

.. code-block:: react

    function App() {
      return (
        <>
          <QueryClientProvider client={queryClient}>
            <h1>Willkommen</h1>
            <Users />
          </QueryClientProvider>
        </>
      );
    }

    export default App;

**Beschreibung:**

- **QueryClientProvider** nimmt den erstellten **queryClient** als `client`-Prop an und stellt ihn der gesamten Anwendung zur Verfügung.
- Die `Users`-Komponente, die die **useQuery** Hook verwendet, befindet sich innerhalb des Providers und kann somit auf die Konfiguration und den Cache zugreifen.

.. warning::
   Ohne die Einbindung des **QueryClientProvider** wird `useQuery` in den untergeordneten Komponenten nicht funktionieren, da sie den **QueryClient** benötigen, um Abfragen auszuführen und zu verwalten.

Fetch-Datei
~~~~~~~~~~~

Die Funktion `fetchUser` stellt die Abstraktion des Datenabrufs dar. Sie verwendet das `fetch` API, um Benutzerdaten abzurufen.

**Code:**

.. code-block:: react

    const fetchUser = async ({ queryKey }) => { 
        const id = queryKey[1];  // Übergabe nach den gesucht wird hier id 0 ist der key 

        console.log("QueryKey: ");
        console.log(queryKey[0]);  //userid siehe unten

        const apiRes = await fetch(
          `https://jsonplaceholder.typicode.com/users?id=${id}`
        );

        if (!apiRes.ok) {
            throw new Error(`Nix gefunden mit ID ${id}`);
        }

        const data = await apiRes.json();

        // Debugging: Logge die Daten, um zu sehen, was zurückkommt
        console.log("API Response:", data);

        // Extrahiere den ersten Benutzer (weil die API ein Array zurückgibt)
        return data[0]; // Nur den ersten Benutzer zurückgeben
    };

    export default fetchUser;

**Beschreibung:**

- Die Funktion akzeptiert ein `queryKey`, das als Array übergeben wird. In unserem Fall besteht es aus einem String "id" und der tatsächlichen Benutzer-ID.
- Die Funktion führt dann eine Abfrage an die API `https://jsonplaceholder.typicode.com/users` durch, wobei sie die ID zur Filterung der Ergebnisse verwendet.
- Falls die API keine erfolgreichen Ergebnisse liefert, wird ein Fehler ausgelöst. Andernfalls wird die API-Antwort verarbeitet und der erste Benutzer des zurückgegebenen Arrays extrahiert.
  
.. warning::
   In einem echten Anwendungsfall könnte die Abfrage fehlertoleranter gestaltet werden, zum Beispiel durch das Hinzufügen von zusätzlichen Validierungen oder Logging für detaillierte Fehlermeldungen.

Verwendungsdatei
~~~~~~~~~~~~~~~~

Hier wird die `useQuery` Hook von `@tanstack/react-query` verwendet, um die Daten aus der `fetchUser` Funktion abzurufen und in einer React-Komponente anzuzeigen.

**Code:**

.. code-block:: react

    import { useQuery } from "@tanstack/react-query";
    import fetchUser from "./userfetch";
    import React from "react";

    const Users = () => {
      const id = 1;

      const { data, isLoading, isError } = useQuery({
        queryKey: ["userid", id], // Das Array als queryKey
        queryFn: fetchUser, // Die Abfragefunktion
      });
        // Ohne typscript ohne typen
      if (isLoading) {
        return <p>Loading...</p>;
      }

      if (isError) {
        return <p>Error loading user data.</p>;
      }

      const user = data; // Kein pets-Array, da wir nur einen Benutzer zurückgeben
      console.log(user);

      if (!user) {
        return <p>No user found.</p>;
      }

      return (
        <div className="user">
          <div>

            <h1>{user.id}</h1>
            <h2>{user.name}</h2> {/* Beispiel für weitere User-Daten */}
          </div>
        </div>
      );
    };

    export default Users;


.. image:: /_static/sonstiges/erklärung.png

**Beschreibung:**

- Die Komponente `Users` verwendet die `useQuery` Hook, um einen Benutzer mit der ID 1 abzurufen.
- Das `queryKey` wird als Array übergeben und enthält einen Bezeichner `"id"` und die tatsächliche ID des Benutzers.
- Die Hook liefert drei wichtige Status:
  - **isLoading**: Zeigt an, ob die Daten noch geladen werden.
  - **isError**: Zeigt an, ob ein Fehler beim Laden aufgetreten ist.
  - **data**: Enthält die abgerufenen Daten, falls die Abfrage erfolgreich war.
  
Die Komponente zeigt einen Ladeindikator, einen Fehlerhinweis oder die Benutzerinformationen, basierend auf dem Status der Abfrage.

Benutzeroberfläche 🤌
-------------------------

Die Komponente `Users` ist einfach gehalten und zeigt die folgenden Informationen an:

- Benutzer-ID (`user.id`)
- Benutzername (`user.name`)

Falls kein Benutzer gefunden wird, zeigt die Komponente eine Nachricht an.

Zusammenfassung 🤓
------------------------

Diese Implementierung zeigt, wie `React Query` effektiv eingesetzt werden kann, um API-Anfragen zu verwalten. Die Abstraktion des Datenabrufs über eine separate `fetchUser`-Funktion und die Verwendung der `useQuery` Hook sorgen für eine übersichtliche und saubere Code-Struktur.

**Wichtige Konzepte:**

- **Query Key**: Das erste Argument für die `useQuery` Hook, das die Abfrage eindeutig identifiziert.
- **Query Function**: Die Funktion, die die Abfrage tatsächlich durchführt.
- **Statusanzeigen**: `isLoading` und `isError` helfen bei der Handhabung von Ladezuständen und Fehlern in der UI.

.. note::
   React Query optimiert API-Abfragen, indem es Daten im Cache hält und Abfragen nur bei Bedarf erneut durchführt.
