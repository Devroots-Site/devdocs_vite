Arten zum Testen ⚖️
================================

1. Console 🎰
~~~~~~~~~~~~~~~~~

Das Testen über die Konsole ist eine einfache und direkte Methode, um Funktionen und den Programmablauf während der Entwicklung zu überprüfen. Entwicklern steht es frei, `console.log()` oder ähnliche Befehle zu verwenden, um Werte auszugeben und schnelle Rückmeldungen zu erhalten.

**Vorteile**:

- **Schnelligkeit**: Tests über die Konsole sind schnell und erfordern keine komplizierte Einrichtung. Dies ist besonders hilfreich während der Entwicklung, wenn man schnell prüfen möchte, ob bestimmte Werte oder Logiken wie erwartet funktionieren.
- **Einfachheit**: Jeder Entwickler kann sofort mit dem Testen beginnen, da keine zusätzlichen Werkzeuge oder Frameworks erforderlich sind.

**Nachteile**:

- **Manuelle Durchführung**: Konsolentests erfordern manuelle Ausführung und Beobachtung. Es gibt keine Automatisierung, was sie unzuverlässig für langfristige Teststrategien macht.
- **Fehlende Skalierbarkeit**: Bei komplexeren Projekten reicht das Testen über die Konsole nicht aus. Es wird schnell unübersichtlich und ist schwer reproduzierbar.
- **Keine strukturierte Überprüfung**: Es gibt keine systematische Methode, um sicherzustellen, dass alle Funktionen umfassend getestet wurden. Ein Entwickler könnte leicht etwas übersehen.


Der Test wird mit 

.. code-block:: bash

    npm test oder vitest  

.. tip::

   Konsolentests sind besonders nützlich während der Entwicklung und für schnelles Debugging, sollten aber nicht als alleinige Testmethode verwendet werden.

2. UI Testing 🖼️
~~~~~~~~~~~~~~~~~

UI-Testing (User Interface Testing) bezieht sich auf das Testen der grafischen Benutzerschnittstellen, um sicherzustellen, dass die Benutzeroberfläche wie beabsichtigt funktioniert und benutzerfreundlich ist. Dabei wird getestet, ob die Interaktionen mit der Anwendung korrekt verarbeitet werden, indem man z.B. Klicks, Formulareingaben und visuelle Darstellungen überprüft.

**Vorteile**:

- **Benutzernähe**: UI-Tests spiegeln das tatsächliche Nutzerverhalten wider, indem sie Interaktionen mit der Oberfläche testen. Das macht sie besonders nützlich, um sicherzustellen, dass die Anwendung aus Sicht des Endbenutzers funktioniert.
- **Visuelle Validierung**: UI-Tests überprüfen nicht nur die Logik, sondern auch das visuelle Erscheinungsbild und Layout der Anwendung, was sicherstellt, dass Designanforderungen erfüllt werden.
- **Automatisierbarkeit**: Viele UI-Tests können automatisiert werden, z.B. mit Tools wie Selenium, Cypress oder Puppeteer, um menschliche Interaktionen zu simulieren und regelmäßig durchzuführen.

**Nachteile**:

- **Langsam**: UI-Tests sind im Vergleich zu anderen Testmethoden langsamer, da sie oft die Anwendung in einem echten oder simulierten Browser laden und Interaktionen nachahmen müssen.
- **Komplexe Wartung**: Wenn sich die Benutzeroberfläche häufig ändert, müssen UI-Tests regelmäßig aktualisiert werden, was zeitaufwändig sein kann.
- **Fehleranfälligkeit**: UI-Tests können manchmal aus unerwarteten Gründen fehlschlagen, z.B. aufgrund von Zeitverzögerungen, Netzwerkproblemen oder flüchtigen Elementen im DOM. Das macht sie weniger stabil als Unit-Tests.


.. code-block::

    vitest --ui

.. important::

   UI-Tests bieten eine umfassende Möglichkeit, die Benutzererfahrung zu prüfen, sollten jedoch nicht die einzigen Tests in der Teststrategie sein. Kombiniere sie mit Unit- und Integrationstests, um ein vollständiges Bild der Funktionsfähigkeit der Anwendung zu erhalten. 🎯