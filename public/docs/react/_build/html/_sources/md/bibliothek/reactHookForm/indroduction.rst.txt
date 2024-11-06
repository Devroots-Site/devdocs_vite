Einführung & Installation  🤖
==================================

`react-hook-form` ist eine leichtgewichtige Bibliothek zur Verwaltung von Formularen in React. Sie ermöglicht die effiziente Handhabung von Formularzuständen, Validierung und Fehlerbehandlung, indem unnötige Neurenderings vermieden werden. Durch die Verwendung von React Hooks bietet sie eine einfache und performante Möglichkeit, Formulare in React-Anwendungen zu integrieren.

Installation
------------

Du kannst `react-hook-form` mit npm oder Yarn installieren:

Installation mit npm
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: shell

    npm install react-hook-form

Installation mit Yarn
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: shell

    yarn add react-hook-form

Verwendung
----------

Nach der Installation kannst du `react-hook-form` in deinem Projekt verwenden, um Formularfelder zu registrieren, die Eingaben zu überwachen und Fehler zu verwalten:

.. code-block:: react

    import React from 'react';
    import { useForm } from 'react-hook-form';

    function MyForm() {
        const { register, handleSubmit, formState: { errors } } = useForm();

        const onSubmit = (data) => {
            console.log(data);
        };

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true })} placeholder="Vorname" />
            {errors.firstName && <p>Vorname ist erforderlich</p>}

            <input type="submit" />
            </form>
            );
        }