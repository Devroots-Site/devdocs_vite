================================
Custom Componenten Bauen
================================



In dieser Dokumentation wird erklärt, wie du zwei benutzerdefinierte Komponenten in Material-UI (MUI) erstellen kannst: **CustomTypography** und **CustomBox**. Beide Komponenten verwenden das MUI-``styled``-Utility, um Standardstile festzulegen, und können zusätzlich mit benutzerdefinierten Stilen über das ``sx``-Prop angepasst werden.

.. warning:: **Voraussetzung**: Grundkenntnisse in React und Material-UI.

------------------------------------------------------
Erster Ansatz: CustomTypography
------------------------------------------------------

Die ``CustomTypography``-Komponente ist eine erweiterte Version der MUI-``Typography``-Komponente. Sie hat eine Standard-Schriftgröße von 12px und akzeptiert das ``sx``-Prop für benutzerdefinierte Stile.

**Beispielcode:**

.. code-block:: jsx

    import React from 'react';
    import { styled } from '@mui/material/styles';
    import { Typography, TypographyProps } from '@mui/material';
    import { SxProps, Theme } from '@mui/system';

    // Erstelle eine benutzerdefinierte Typography-Komponente
    const StyledTypography = styled(Typography)(() => ({
      fontSize: '12px', // Standard-Schriftgröße
    }));

    // Die Komponente nimmt zusätzlich das `sx`-Prop entgegen
    interface CustomTypographyProps extends TypographyProps {
      sx?: SxProps<Theme>; // Optionales sx-Prop für benutzerdefinierte Stile
    }

    // Erstelle die CustomTypography-Komponente, die das `sx`-Prop akzeptiert
    const CustomTypography: React.FC<CustomTypographyProps> = ({
      children,
      sx,
      ...rest
    }) => {
      return (
        <StyledTypography sx={sx} {...rest}>
          {children}
        </StyledTypography>
      );
    };

    // Exportiere CustomTypography als default
    export default CustomTypography;

**Verwendung:**

.. code-block:: jsx

    import CustomTypography from './CustomTypography';

    const App = () => {
        return (
            <CustomTypography sx={{ color: 'blue', fontWeight: 'bold' }}>
                Dies ist benutzerdefinierter Text mit Standard-Schriftgröße und blauer Farbe.
            </CustomTypography>
        );
    };

**Erklärung zu React.FC**:

- **`React.FC`** steht für **Functional Component** und ist ein Typ für funktionale Komponenten in TypeScript.
- Wenn du ``React.FC<CustomTypographyProps>`` verwendest, gibst du an, dass die Komponente eine funktionale Komponente ist, die Props vom Typ ``CustomTypographyProps`` erhält.
- **Vorteile von `React.FC`**:
- - Automatisches Hinzufügen des Props-Typs `children` für die Komponente, was bedeutet, dass du explizit keinen `children`-Typ in deinem Props-Interface definieren musst.
- - Typprüfung und Autovervollständigung in TypeScript, um sicherzustellen, dass nur die definierten Props (in diesem Fall `sx` und alle anderen `TypographyProps`) an die Komponente übergeben werden.
- - Hilft, Fehler zu vermeiden und macht den Code robuster und leichter wartbar.

:note: Der Typ ``React.FC`` vereinfacht das Schreiben von funktionalen Komponenten in TypeScript, da er sich automatisch um einige der gängigsten Typisierungen kümmert, wie z.B. die Unterstützung für `children`.

---------------------------
Zweiter Ansatz: CustomBox
---------------------------

Die ``CustomBox``-Komponente basiert auf der MUI-``Box``-Komponente, hat aber einen festen ``marginTop`` von 30px. Sie eignet sich gut für wiederkehrende Layouts, bei denen ein konstanter Abstand gewünscht ist.

**Beispielcode:**

.. code-block:: jsx

    import { styled } from '@mui/material/styles';
    import { Box } from '@mui/material';

    const CustomBox = styled(Box)(() => ({
      marginTop: 30, // Fester marginTop-Wert
    }));

    export default CustomBox;

**Verwendung:**

.. code-block:: jsx

    import CustomBox from './CustomBox';

    const App = () => {
        return (
            <CustomBox>
                <p>Inhalt der CustomBox mit einem marginTop von 30px.</p>
            </CustomBox>
        );
    };

**Erklärung**:
- Die ``CustomBox``-Komponente basiert auf der MUI-``Box``-Komponente und definiert standardmäßig einen ``marginTop`` von 30px.
- Diese Komponente eignet sich gut für Layouts, bei denen ein fester Abstand zwischen den Elementen benötigt wird.
- Wie die ursprüngliche ``Box``-Komponente kann auch ``CustomBox`` beliebigen Inhalt (z.B. Text oder andere Komponenten) rendern.

--------------------------------
Zusammenfassung der Unterschiede
--------------------------------

- **CustomTypography**:

  - Standardisierte Schriftgröße von 12px.
  - Flexibel anpassbar durch das ``sx``-Prop, um zusätzliche Stile hinzuzufügen.
  - Gut für Textinhalte, die in verschiedenen Stilen verwendet werden sollen.

- **CustomBox**:

  - Fester ``marginTop`` von 30px.
  - Eignet sich gut für Layouts mit wiederkehrendem Abstand.
  - Rendert beliebigen Inhalt, ähnlich wie die ursprüngliche MUI-``Box``-Komponente.

.. note:: Beide Komponenten verwenden das MUI-``styled``-Utility, um standardisierte Stile zu definieren. ``CustomTypography`` ist flexibler dank des ``sx``-Props, während ``CustomBox`` für einfachere Layoutanforderungen mit festem Abstand gedacht ist.
