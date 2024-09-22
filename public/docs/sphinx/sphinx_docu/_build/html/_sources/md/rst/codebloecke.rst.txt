Code-Blöcke 💻
============================

Code-Blöcke sind ein wesentlicher Bestandteil technischer Dokumentationen, insbesondere wenn Sie Programmierbeispiele oder Konfigurationsdateien präsentieren möchten. In reStructuredText werden Code-Blöcke mit der `.. code-block::` Directive definiert. Diese Directive ermöglicht es Ihnen, Code in einem bestimmten Stil und Format anzuzeigen, der typischerweise die Syntaxhervorhebung für die angegebene Programmiersprache unterstützt.

Beispiel für einen Code-Block 📖
-------------------------------------------

Um einen Code-Block in Python darzustellen, verwenden Sie die folgende Syntax:

.. code-block:: python

   def hello_world():
       print("Hello, World!")

Erklärung der Syntax 🧐
---------------------------------

- **`.. code-block::` Directive:**
  
  - Die beiden Punkte (`..`) vor `code-block::` kennzeichnen den Beginn einer Directive in reStructuredText. Sie signalisieren, dass eine spezielle Anweisung oder ein spezieller Block folgt.
  
  - `code-block::` weist Sphinx an, den folgenden Inhalt als Code zu behandeln und entsprechend zu formatieren.
  
  - **Python**: Das Wort `python` nach den Doppelpunkten gibt die Programmiersprache an, für die die Syntaxhervorhebung angewendet werden soll. Sie können hier jede unterstützte Programmiersprache angeben, z.B. `bash`, `javascript`, `html` usw.

- **Einrückung:**
  
  - Der Code-Block selbst wird durch Einrückung nach der `.. code-block::` Directive markiert. Jede Zeile des Codes muss um mindestens vier Leerzeichen oder ein Tab eingerückt werden, um korrekt als Teil des Code-Blocks erkannt zu werden.
  
- **Syntaxhervorhebung:**
  
  - Die angegebene Programmiersprache (in diesem Fall Python) bestimmt, wie der Code farblich hervorgehoben wird, um ihn lesbarer und ansprechender zu machen.

Weitere Beispiele 📝
----------------------------

Hier ist ein weiteres Beispiel für einen Code-Block in einer anderen Programmiersprache, z.B. Bash:

.. code-block:: bash

   echo "Hello, World!"

Was zu beachten ist 🤔
------------------------------

- Die **Doppelpunkte** nach `.. code-block::` sind essenziell, da sie den Beginn des Code-Blocks markieren.
- Die **Einrückung** des Codes ist entscheidend, um anzugeben, was zum Code-Block gehört und was nicht. Der Code-Block endet, wenn die Einrückung nicht mehr fortgesetzt wird.

Nutzen von Code-Blöcken 🚀
--------------------------------------

Code-Blöcke sind äußerst nützlich, um:

- **Beispielcode** zu präsentieren, den Leser direkt in ihrer eigenen Umgebung ausprobieren können.
- **Konfigurationsanweisungen** bereitzustellen, die genau so wie gezeigt kopiert und verwendet werden können.
- **Fehlermeldungen oder Protokolle** anzuzeigen, die für die Fehlersuche und -behebung wichtig sind.

Durch die Verwendung von Code-Blöcken in Ihrer Dokumentation verbessern Sie nicht nur die Lesbarkeit, sondern auch die Nutzbarkeit Ihrer technischen Anweisungen und Beispiele erheblich.
