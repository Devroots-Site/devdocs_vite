Material-UI Theme und Typography 💡
==========================================

Warum Themes ❓
-------------------------

Themes bieten zentrale Kontrolle über das Design deiner App und sorgen für Konsistenz. Sie ermöglichen globale Einstellungen für Farben, Abstände, Schriftarten usw. Besonders in großen Projekten sinnvoll.

**Vorteile:**
- Einheitliches Design
- Zentrale Steuerung
- Internationalisierung durch Lokalisierung

Wann verwenden? 🧐
------------------

Verwende Themes, wenn du eine einheitliche User-Experience sicherstellen möchtest oder eine App mit vielen UI-Komponenten erstellst. Für kleinere Projekte kann es zu viel Aufwand sein, aber bei wachsenden Anwendungen unverzichtbar.

ThemeProvider und CssBaseline 🖊️
----------------------------------

Der `ThemeProvider` sorgt dafür, dass das Theme global verfügbar ist, während `CssBaseline` Standardstile setzt und auf dem Theme basiert Er setzt die danachfolgenden Css Regeln für das Element wieder zurück. 
https://mui.com/material-ui/react-css-baseline/ 


**Beispiel:**

.. code-block:: react

    import { ThemeProvider, CssBaseline } from '@mui/material/styles';
    import { Typography } from '@mui/material';

    const App = () => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography variant="h1">Willkommen</Typography>
        <Typography variant="body1">Beispiel für Theme-Nutzung</Typography>
      </ThemeProvider>
    );

Mode: Hell und Dunkel 🌗
------------------------

In Material-UI kannst du den **Mode** des Themes auf `light` (hell) oder `dark` (dunkel) setzen. Der **Mode** definiert, ob die Anwendung ein helles oder dunkles Farbschema verwenden soll.

**Beispiel für helles und dunkles Theme:**

.. code-block:: typescript

    import { createTheme } from '@mui/material/styles';

    const lightTheme = createTheme({
      palette: {
        mode: 'light',
        primary: { main: '#f40007' },
        secondary: { main: '#D3D3D3' },
      },
      typography: {
        fontFamily: 'Arial, sans-serif',
      },
    });

    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
        primary: { main: '#ff5722' },
        secondary: { main: '#4caf50' },
        background: {
          default: '#121212',
          paper: '#1d1d1d',
        },
      },
      typography: {
        fontFamily: 'Comic Sans MS, sans-serif',
      },
    });

**Mode-Wechsel im Code:**

.. code-block:: react

    import React, { useState } from 'react';
    import { ThemeProvider, CssBaseline, Button } from '@mui/material';
    import { lightTheme, darkTheme } from './themes';

    const App = () => {
      const [isDarkMode, setIsDarkMode] = useState(false);

      const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
      };

      return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Button onClick={toggleTheme}>
            {isDarkMode ? 'Wechsel zu Hell' : 'Wechsel zu Dunkel'}
          </Button>
          <Typography variant="h1">Willkommen</Typography>
        </ThemeProvider>
      );
    };

Lokalisierung mit deDE 🌍
-------------------------

Wenn du Material-UI in einer spezifischen Sprache verwenden möchtest, wie z.B. **Deutsch**, kannst du das `deDE`-Locale importieren. Dies ist besonders nützlich, wenn du Komponenten wie Datumsauswahlen, Eingabehilfen oder Standard-UI-Texte auf die deutsche Sprache anpassen willst.

**Warum `deDE`?**:
- Material-UI bietet eine Reihe von Lokalisierungsoptionen (Locales), die es ermöglichen, Standardtexte, z.B. von Dialogen, Buttons oder Datumsauswahl-Widgets, in die gewünschte Sprache zu übersetzen.
- Es ist sinnvoll, `deDE` zu verwenden, wenn deine App in Deutschland oder im deutschsprachigen Raum genutzt wird und du sicherstellen möchtest, dass alle systemgenerierten Textelemente auf Deutsch sind.

**Beispiel:**

.. code-block:: typescript

    import { createTheme } from '@mui/material/styles';
    import { deDE } from '@mui/material/locale';

    const theme = createTheme(
      {
        palette: {
          mode: 'light',
          primary: { main: '#f40007' },
          secondary: { main: '#D3D3D3' },
        },
        typography: {
          fontFamily: 'Arial, sans-serif',
        },
      },
      deDE  // Lokalisierung auf Deutsch
    );

In diesem Beispiel wird `deDE` verwendet, um die UI-Texte, die Material-UI automatisch generiert, auf Deutsch zu setzen. Das betrifft Standard-Komponenten wie die `DatePicker`, `TablePagination` und andere.

**Wann sollte man Lokalisierung verwenden?**:
- Wenn du deine App in unterschiedlichen Ländern einsetzen möchtest, um die Benutzererfahrung für verschiedene Sprachen zu optimieren.
- In Deutschland oder für deutschsprachige Nutzer ist es oft entscheidend, eine angepasste Lokalisierung anzubieten, um die Verständlichkeit und Benutzerfreundlichkeit zu erhöhen.

Typography anpassen ✒️
------------------------------

Mit `Typography` kannst du Textelemente konsistent formatieren. Die Varianten wie `h1`, `body1` usw. folgen den im Theme definierten Regeln.

**Beispiel:**

.. code-block:: typescript

    const theme = createTheme({
      typography: {
        fontFamily: 'Arial, sans-serif',
        h1: { fontSize: '2rem', fontWeight: 700 },
        body1: { fontSize: '1rem' },
      },
    });

Neues Theme-Beispiel 🎭
-----------------------

Hier ein Beispiel für ein angepasstes Theme:

.. code-block:: typescript

    import { createTheme } from '@mui/material/styles';

    export const theme = createTheme({
      palette: {
        mode: 'dark',
        primary: { main: '#ff5722' },
        secondary: { main: '#4caf50' },
        background: { default: '#0a0a0a', paper: '#1e1e1e' },
      },
      typography: {
        fontFamily: 'Comic Sans MS, sans-serif',
        h1: { fontSize: '2.2rem', fontWeight: 'bold' },
        body1: { fontSize: '1rem', color: '#f5f5f5' },
      },
    });

Best Practices 💪
------------------

- Nutze Themes für Konsistenz.
- Definiere zentrale Farb- und Typografiewerte.
- Implementiere helle und dunkle Modi.
- Verwende Lokalisierung (z.B. `deDE`) für sprachspezifische Anpassungen.

Zusammenfassung 📑
-------------------

Themes sorgen für Konsistenz und sind essenziell in größeren Projekten. Mit `ThemeProvider` und `CssBaseline` schaffst du eine Grundlage für ein einheitliches Erscheinungsbild. Die Anpassung von `Typography` und Farben im Theme erlaubt schnelle Änderungen ohne viele Anpassungen im Code. Lokalisierung wie `deDE` hilft, die App für spezifische Sprachen und Regionen anzupassen.
