Fehler werfen und fangen
============================================

In JavaScript können Fehler mit dem `throw` Statement geworfen und mit dem `try`, `catch` und `finally` Statement gefangen werden.

Fehler werfen
----------------------------------

Ein Fehler kann mit dem `throw` Statement geworfen werden.

.. code-block:: javascript
    
    let a = 5;

    if (a > 5) {
        throw new Error('a ist größer als 5');
    }


Fehler fangen
-------------

Ein Fehler kann mit dem ``try``, ``catch`` und ``finally`` Statement gefangen werden.

.. code-block:: javascript

    let a = 5;

    try {
        if (a > 5) {
            throw new Error('a ist größer als 5');
        }
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Fertig');
    }

Das ``finally`` Statement wird immer ausgeführt, egal ob ein Fehler aufgetreten ist oder nicht.

Eigene Fehler
-------------

Es ist auch möglich, eigene Fehler zu erstellen.

.. code-block:: javascript

    let a = 5;

    try {
        if (a > 5) {
            throw new Error('a ist größer als 5');
        }
    } catch (error) {
        throw new Error('Ein Fehler ist aufgetreten');
    }

In diesem Beispiel wird ein eigener Fehler geworfen, wenn ein Fehler auftritt.

Fehlerbehandlung
----------------

Es ist auch möglich, verschiedene Fehler zu behandeln.

.. code-block:: javascript

    let a = 5;

    try {
        if (a > 5) {
            throw new Error('a ist größer als 5');
        }
    } catch (error) {
        if (error.message === 'a ist größer als 5') {
            console.log('a ist größer als 5');
        } else {
            console.log('Ein Fehler ist aufgetreten');
        }
    }

In diesem Beispiel wird überprüft, welcher Fehler aufgetreten ist und entsprechend darauf reagiert.

Fehlerbehandlung mit ``finally``
--------------------------------

Es ist auch möglich, Fehler mit ``finally`` zu behandeln.

.. code-block:: javascript

    let a = 5;

    try {
        if (a > 5) {
            throw new Error('a ist größer als 5');
        }
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Fertig');
    }

In diesem Beispiel wird der Fehler mit ``catch`` behandelt und das ``finally`` Statement wird immer ausgeführt.
