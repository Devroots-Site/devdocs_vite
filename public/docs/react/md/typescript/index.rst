Typescript 🦖
==================================

React und TypeScript kombinieren
--------------------------------

**React** ist eine beliebte Bibliothek für das Erstellen von Benutzeroberflächen, und **TypeScript** bietet statische Typisierung für JavaScript. Zusammen bieten sie eine solide Basis für die Entwicklung von skalierbaren und typsicheren Anwendungen.

Installation
------------
Um ein React-Projekt mit TypeScript zu starten, verwende das offizielle Tool `Create React App`:

.. code-block:: bash

    npm create vite@latest

Dieses Kommando erstellt eine React-App, die bereits TypeScript unterstützt.

Beispiel einer Komponente
-------------------------

Hier ist eine einfache TypeScript-Komponente:

.. code-block:: react

    import React from 'react';

    type Props = {
      name: string;
    };

    const Begrüßung: React.FC<Props> = ({ name }) => {
      return <h1>Hallo, {name}!</h1>;
    };

    export default Begrüßung;

.. :note:`Hinweis`: Die Props der Komponente werden mit dem Typ `Props` definiert, um sicherzustellen, dass die Komponente nur einen String für den Namen akzeptiert.

Zusammenfassung
---------------
Mit React und TypeScript kannst du typsichere und wartbare Anwendungen erstellen. Der Einstieg ist einfach und schnell, indem du `Create React App` mit der TypeScript-Vorlage verwendest.

.. toctree::
   :maxdepth: 3
   :caption: Kapitel:

   void_vs_async.rst
   typen.rst
   typen_vs_interface.rst
