# Javadoc

Javadoc ist ein Tool zur Generierung von API-Dokumentation in HTML-Format aus Java-Quellcode. Es wird verwendet, um den Code zu dokumentieren und den Entwicklern eine Referenz zur Verfügung zu stellen.

## Javadoc-Kommentare

Javadoc-Kommentare sind spezielle Kommentare, die verwendet werden, um den Code zu dokumentieren. Sie beginnen mit `/**` und enden mit `*/`. Hier ist ein Beispiel:

```java
/**
 * This is a Javadoc comment.
 * It can span multiple lines.
 */
public class Main {
    /**
     * This is a Javadoc comment for the main method.
     * @param args The command-line arguments.
     */
    public static void main(String[] args) {
        // Your code here
    }
}
```

In diesem Beispiel wird der Javadoc-Kommentar für die Klasse `Main` und die Methode `main` verwendet, um den Code zu dokumentieren.

## Javadoc-Tags

Javadoc-Kommentare können spezielle Tags enthalten, die verwendet werden, um zusätzliche Informationen zur Dokumentation hinzuzufügen. Hier sind einige häufig verwendete Javadoc-Tags:

- `@param`: Beschreibt einen Parameter einer Methode.
- `@return`: Beschreibt den Rückgabewert einer Methode.
- `@throws`: Beschreibt eine Ausnahme, die von einer Methode geworfen werden kann.
- `@see`: Verweist auf eine andere Klasse oder Methode.
- `@since`: Gibt an, seit welcher Version die Klasse oder Methode verfügbar ist.
- `@deprecated`: Markiert eine Klasse oder Methode als veraltet.

Hier ist ein Beispiel, das einige dieser Tags verwendet:

```java

/**
 * This is a Javadoc comment for the Main class.
 */

```

In diesem Beispiel wird der Javadoc-Kommentar für die Klasse `Main` verwendet, um den Code zu dokumentieren und zusätzliche Informationen hinzuzufügen.

## Javadoc-Generierung

Um Javadoc-Dokumentation aus dem Java-Quellcode zu generieren, können Sie das `javadoc`-Tool verwenden. Hier ist ein Beispiel, wie Sie die Javadoc-Dokumentation für eine Klasse generieren können:

```bash
javadoc Main.java
```

Dieser Befehl generiert die Javadoc-Dokumentation für die Klasse `Main` und speichert sie in HTML-Dateien, die im aktuellen Verzeichnis erstellt werden.

## Verwendung von Javadoc

Javadoc wird häufig verwendet, um den Code zu dokumentieren und Entwicklern eine Referenz zur Verfügung zu stellen. Es ist eine gute Praxis, Javadoc-Kommentare in Ihrem Code zu verwenden, um die Lesbarkeit und Wartbarkeit zu verbessern.

Durch die Verwendung von Javadoc können Entwickler schnell verstehen, wie der Code funktioniert, welche Parameter eine Methode erwartet, welchen Rückgabewert sie liefert und welche Ausnahmen sie werfen kann.
