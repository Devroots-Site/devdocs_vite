Sentry-Integration mit React
============================

Einleitung
----------
Sentry ist ein Echtzeit-Fehlerverfolgungs-Tool, das Entwickler dabei unterstützt, Fehler in ihren Anwendungen effizient zu identifizieren, zu diagnostizieren und zu beheben. Es hilft Ihnen dabei, Probleme frühzeitig zu erkennen, bevor Ihre Benutzer darauf stoßen, und gibt detaillierte Informationen über Fehler, sodass Sie die Ursache schnell verstehen können. In dieser Dokumentation erklären wir, wie Sie Sentry in einer React-Anwendung einrichten und verwenden können.

**Hinweis**: Obwohl sich diese Anleitung speziell auf die Integration von Sentry in React bezieht, kann Sentry auch mit anderen Plattformen und Frameworks wie Vue.js, Angular, Node.js und mehr genutzt werden. Für weitere Informationen dazu besuchen Sie die [offizielle Sentry-Dokumentation](https://docs.sentry.io/).

Was ist Sentry?
---------------
Sentry ist ein Open-Source-Tool zur Überwachung und Fehlerverfolgung, das sich nahtlos in Ihre Anwendung integrieren lässt. Es unterstützt Sie dabei, Fehler, Abstürze und Leistungsprobleme automatisch zu protokollieren. Die gesammelten Informationen helfen Entwicklern, das Verhalten der Anwendung besser zu verstehen, Fehler zu reproduzieren und zeitnah zu beheben.

Hauptfunktionen von Sentry:

- Fehlererfassung (Error Tracking)
- Performance-Monitoring
- Issue-Management
- Detaillierte Fehlerberichte inklusive Stack-Traces, Benutzerinformationen und mehr

Installation
------------
Um Sentry in Ihrer React-Anwendung zu verwenden, müssen Sie das Sentry-Paket installieren. Sie können dies mit dem folgenden Befehl tun:

.. code-block:: bash

   npm install @sentry/react --save

Setup in React
--------------
Nach der Installation können Sie Sentry in Ihrer Anwendung konfigurieren. Fügen Sie die Initialisierung von Sentry in Ihrer `index.js`- oder `App.js`-Datei hinzu, wie unten gezeigt:

.. code-block:: react

    Sentry.init({
    dsn: sentryDsn,
    inteSentry.init({
    // Der DSN (Data Source Name) verbindet deine Anwendung mit deinem Sentry-Projekt
    dsn: sentryDsn,

    integrations: [
        // Integration von Sentry für das Tracing in React Router v6-Anwendungen.
        // Diese Integration überwacht Navigationsereignisse und Seitenwechsel, 
        // um Performance-Daten und Fehler besser nachzuverfolgen.
        Sentry.reactRouterV6BrowserTracingIntegration({
            // React Hook, um Nebenwirkungen zu verwalten. Wird benötigt, um zu tracken,
            // wann die Komponenten gemountet/unmounted werden, um so Navigation zu erfassen.
            useEffect, 

            // Ermöglicht die Erfassung der aktuellen URL und Parameter bei jeder Navigation,
            // um zu sehen, wo sich der Benutzer auf der Webseite befindet.
            useLocation, 

            // Verwendet, um zu bestimmen, wie die Navigation stattfindet (z.B. vorwärts, rückwärts).
            // Dies hilft Sentry, festzustellen, welche Art von Navigationsereignis ausgelöst wurde.
            useNavigationType, 

            // Wird verwendet, um Routen aus den Kinderkomponenten zu erstellen. 
            // Dies stellt sicher, dass alle Routen und Unterrouten erfasst werden.
            createRoutesFromChildren, 

            // Wird verwendet, um festzustellen, welche Route in den aktuellen Routing-Einstellungen aktiv ist.
            // Dies hilft, die korrekte Route in Fehler- oder Performance-Logs zu identifizieren.
            matchRoutes, 
        }),

        // Integration für das Sentry-Replay-Feature. 
        // Diese Funktion erlaubt es, Sitzungen aufzuzeichnen und nachzuvollziehen,
        // was der Benutzer vor einem Fehler gemacht hat (Replay der Aktionen).
        Sentry.replayIntegration(),
    ],

    // Tracing-Prozentsatz für Performance-Monitoring.
    // 1.0 bedeutet, dass 100% der Transaktionen überwacht werden (sehr genau, aber kann viele Daten erzeugen).
    tracesSampleRate: 1.0,

    // Ziel-URLs, auf die das Trace-Propagations-Feature angewendet wird.
    // Hier wird es auf 'localhost' und alle URLs, die dem Backend-API entsprechen, angewendet.
    tracePropagationTargets: ['localhost', new RegExp(`^${urlBackendAPI}`)],

    // Wie oft eine Sitzung für Replay-Funktionen aufgezeichnet wird.
    // 0.1 bedeutet, dass 10% der Sitzungen erfasst werden.
    replaysSessionSampleRate: 0.1, 

    // Wenn ein Fehler auftritt, wird die Sitzung zu 100% für das Replay aufgezeichnet.
    replaysOnErrorSampleRate: 1.0,
    });grations: [
            Sentry.reactRouterV6BrowserTracingIntegration({
            useEffect,
            useLocation,
            useNavigationType,
            createRoutesFromChildren,
            matchRoutes,
            }),
            Sentry.replayIntegration(),
        ],
        tracesSampleRate: 1.0,
        tracePropagationTargets: ['localhost', new RegExp(`^${urlBackendAPI}`)],
        replaysSessionSampleRate: 0.1, 
        replaysOnErrorSampleRate: 1.0,
        });

Der `dsn` ist der "Data Source Name" für Ihre spezifische Sentry-Instanz und kann im Sentry-Dashboard gefunden werden.

Fehlerverfolgung in React-Komponenten
-------------------------------------
Sentry bietet eine HOC (Higher-Order Component) namens `withErrorBoundary`, mit der Sie Fehler in React-Komponenten abfangen können. Beispiel:

.. code-block:: react

   import React from "react";
   import * as Sentry from "@sentry/react";

   function MyComponent() {
     // Eine normale React-Komponente
     return <div>Hallo, Welt!</div>;
   }

   export default Sentry.withErrorBoundary(MyComponent, {
     fallback: <p>Es ist ein Fehler aufgetreten.</p>,
   });

Mit dieser Methode können Sie sicherstellen, dass Fehler in einer Komponente nicht die gesamte Anwendung beeinträchtigen und dass sie stattdessen von einem benutzerdefinierten Fallback angezeigt werden.

Routenüberwachung (Navigation Tracking)
----------------------------------------
Um auch die Navigation innerhalb Ihrer React-Anwendung zu überwachen, können Sie React Router zusammen mit Sentry verwenden. Fügen Sie dazu die Navigationserfassung zu Ihrer Sentry-Initialisierung hinzu:

.. code-block:: react

    import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
    import { theme } from './App.theme';
    import ProtectionForm from '../../features/ProtectionForm';
    import Header from '@/features/Header/Header';
    import Background from '@/features/Background/Background';
    import { SnackbarProvider } from 'notistack';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import { NotFoundPage } from '@/features/NotFoundPage/NotFoundPage';
    import * as Sentry from '@sentry/react';
    import { ErrorFallback } from '@/features/ErrorFallBack';
    /**
    * App component serves as the root of the application.
    * It provides the global theme and layout for the application, including the `ProtectionForm` component.
    *
    * - `ThemeProvider` applies the custom Material UI theme defined in `App.theme`.
    * - `CssBaseline` normalizes styles across browsers.
    * - `Typography` is used to display the main heading with primary color and bold styling.
    * - `ProtectionForm` is the main form component for legal protection insurance requests.
    * @see https://mui.com/material-ui/
    */

    const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

    function App() {
    return (
        <Sentry.ErrorBoundary
        // eslint-disable-next-line @typescript-eslint/unbound-method
        fallback={({ error, componentStack, resetError }) => (
            <ErrorFallback
            error={error as Error}
            componentStack={componentStack}
            resetError={resetError}
            />
        )}
        >
        <ThemeProvider theme={theme}>
            {/* CssBaseline ensures consistent baseline styles across browsers */}
            <CssBaseline />
            <SnackbarProvider
            maxSnack={4}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            >
            <BrowserRouter>
                <SentryRoutes>
                <Route
                    path="/"
                    element={
                    <Box>
                        <Background />
                        <Container maxWidth="lg">
                        <Header />
                        <ProtectionForm />
                        </Container>
                    </Box>
                    }
                />
                <Route path="*" element={<NotFoundPage />} />
                </SentryRoutes>
            </BrowserRouter>
            </SnackbarProvider>
        </ThemeProvider>
        </Sentry.ErrorBoundary>
    );
    }

    export default App;


Mit dieser Konfiguration können Sie die Performance und Navigation innerhalb Ihrer React-App verfolgen, sodass Sie wertvolle Einblicke in die Benutzerinteraktion und mögliche Engpässe erhalten.

Zusätzliche Funktionen
-----------------------
- **Benutzerdefinierte Fehlerberichte**: Wenn Sie benutzerdefinierte Fehlerberichte an Sentry senden möchten, können Sie `Sentry.captureException(error)` verwenden, um einen spezifischen Fehler zu protokollieren.

  .. code-block:: javascript

     try {
       // Code, der Fehler auslösen könnte
     } catch (error) {
       Sentry.captureException(error);
     }

- **Release-Tracking**: Durch die Angabe eines Releases in der Sentry-Konfiguration können Sie Fehler besser gruppieren und nachvollziehen, in welcher Version der Fehler aufgetreten ist. Fügen Sie die `release`-Eigenschaft bei der Initialisierung hinzu:

  .. code-block:: javascript

     Sentry.init({
       dsn: "https://<your-public-dsn>@oXXXXXXX.ingest.sentry.io/XXXXXXX",
       release: "my-project-name@1.0.0",
       integrations: [new BrowserTracing()],
       tracesSampleRate: 1.0,
     });

Fazit
-----
Sentry bietet eine umfassende Lösung für das Fehler- und Performance-Monitoring in React-Anwendungen. Durch die einfache Integration und die umfangreichen Funktionen können Sie Fehler proaktiv erkennen, reproduzieren und lösen. Neben React bietet Sentry eine breite Plattformunterstützung, die Ihnen hilft, eine konsistente Fehlerüberwachung über Ihre gesamte Anwendung hinweg zu gewährleisten.

Weitere Informationen finden Sie in der [offiziellen Sentry-Dokumentation](https://docs.sentry.io/).

