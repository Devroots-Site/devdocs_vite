===========================
Größen und Passung ↕️
===========================

In dieser Dokumentation geht es um die Handhabung und Anpassung der Größenwerte in Material UI (MUI), insbesondere im Hinblick auf das **Responsive Design**. Es wird beschrieben, wie verschiedene Größenwerte definiert und an die Breite angepasst werden können. Zudem wird die Nutzung von **useMediaQuery** erläutert, um eine dynamische Anpassung an unterschiedliche Bildschirmgrößen zu ermöglichen.

Einführung 🪪
----------------------

Material UI bietet eine leistungsstarke Möglichkeit, Komponenten und Layouts **responsiv** zu gestalten. Dafür stehen unter anderem die Breakpoints `xs`, `sm`, `md`, `lg` und `xl` zur Verfügung, die auf verschiedenen Bildschirmbreiten basieren. Durch die Kombination dieser Breakpoints mit Größenwerten wie `width`, `height` usw. können wir eine feinkörnige Kontrolle über die Darstellung in verschiedenen Ansichten erreichen.

Größenwerte mit Breakpoints anpassen ⛓️‍💥
-------------------------------------------------

In MUI können wir Größenwerte wie die **Breite** (`width`) oder **Höhe** (`height`) auf verschiedene Breakpoints beziehen. Die Breakpoints beziehen sich auf unterschiedliche Bildschirmgrößen und werden als Objekte übergeben. Ein Beispiel für die Anpassung der Breite (`width`) könnte wie folgt aussehen:

.. code-block:: react

    <Box 
    width={{ xs: 4, sm: 6, md: 8, lg: 10, xl: 12 }} 
    >
    {/* Inhalt */}
    </Box>


In diesem Beispiel:

- `xs`: Bezieht sich auf die kleinsten Bildschirmgrößen (extra small), üblicherweise Mobilgeräte.
- `sm`: Für kleine Bildschirme, wie z. B. kleine Tablets.
- `md`: Mittlere Bildschirme, wie Standard-Tablets.
- `lg`: Große Bildschirme, etwa Desktop-Monitore.
- `xl`: Sehr große Bildschirme, wie z. B. große Desktop-Monitore.

Durch die Zuweisung von Werten an die jeweiligen Breakpoints wird die Breite des Box-Elements dynamisch an die jeweilige Bildschirmgröße angepasst.

Weitere Beispiele für responsive Eigenschaften
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Neben der Breite (`width`) können natürlich auch andere Eigenschaften wie die **Höhe** (`height`), **Padding** (`padding`) oder **Margin** (`margin`) ähnlich angepasst werden. Zum Beispiel:

.. code-block:: react

    <Box 
    padding={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
    >
    {/* Inhalt */}
    </Box>


Hier wird das Padding in Abhängigkeit von der Bildschirmgröße gestaffelt.

Breakpoints im Detail 🕵️
-------------------------------------------------

In MUI sind die Breakpoints vordefinierte Punkte auf der Breitenachse. Diese Punkte ermöglichen es, auf bestimmte Bildschirmgrößen zu reagieren:

- **xs (extra-small)**: < 600px
- **sm (small)**: 600px bis 960px
- **md (medium)**: 960px bis 1280px
- **lg (large)**: 1280px bis 1920px
- **xl (extra-large)**: > 1920px

Durch das Ansprechen dieser Breakpoints kann man Elemente flexibel gestalten, ohne für jede Bildschirmgröße individuelle CSS-Regeln schreiben zu müssen.

**Tipp:** Für individuelle Anforderungen lassen sich die Breakpoints in der MUI-Theming-Konfiguration auch anpassen.

Verwendung von useMediaQuery 🪛
-------------------------------------------------

Ein weiteres nützliches Werkzeug in MUI zur responsiven Gestaltung ist der **useMediaQuery**-Hook. Er ermöglicht es, gezielt auf bestimmte Bildschirmgrößen zu reagieren und konditionale Logik zu schreiben.

Beispiel für useMediaQuery:

.. code-block:: react

    import { useMediaQuery } from '@mui/material';

    function ResponsiveComponent() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box 
        width={isSmallScreen ? 4 : 8}
        >
        {/* Inhalt */}
        </Box>
    );
    }


In diesem Beispiel verwenden wir den **useMediaQuery**-Hook, um festzustellen, ob der Bildschirm kleiner als 600px ist. Falls dies der Fall ist, wird die Breite auf 4 gesetzt, andernfalls auf 8.

**Weitere Nutzungsmöglichkeiten von useMediaQuery:**
- Dynamische Anpassung von Komponentenstilen auf Basis von Medienabfragen.
- Logiksteuerung zur Darstellung oder Ausblendung von UI-Elementen auf spezifischen Bildschirmgrößen.

Fazit 🤓
------------

Material UI bietet mit seinen Breakpoints und dem **useMediaQuery**-Hook eine äußerst flexible Möglichkeit, responsive Designs zu realisieren. Durch die Nutzung der Breakpoints kann man sicherstellen, dass die Gestaltung für verschiedene Bildschirmgrößen optimiert ist, während **useMediaQuery** eine tiefergehende Kontrolle über die Medienabfragen und die konditionale Logik ermöglicht.

**Wichtige Punkte zusammengefasst:**

- Breakpoints helfen, Layouts für unterschiedliche Bildschirmgrößen zu gestalten.
- Eigenschaften wie `width`, `padding`, `margin` etc. können an Breakpoints gekoppelt werden.
- **useMediaQuery** ermöglicht eine dynamische Anpassung des Layouts durch Medienabfragen.
