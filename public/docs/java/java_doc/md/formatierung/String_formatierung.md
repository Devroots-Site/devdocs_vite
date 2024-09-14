# String formatierung & Co

In Java können Zeichenketten mit der `String.format()`-Methode formatiert werden. Die Methode akzeptiert ein Format und eine Liste von Argumenten, die in das Format eingefügt werden.

## Format

### Beispiel Stringformatierung

```java
public class Main {
    public static void main(String[] args) {
        String name = "Alice";
        int age = 30;
        double height = 5.6;

        String message = String.format("Name: %s, Age: %d, Height: %.1f", name, age, height);
        System.out.println(message); // Output: Name: Alice, Age: 30, Height: 5.6
    }
}
```

In diesem Beispiel wird die Zeichenkette `Name: Alice, Age: 30, Height: 5.6` formatiert, wobei `%s` für eine Zeichenkette, `%d` für eine Ganzzahl und `%.1f` für eine Dezimalzahl mit einer Nachkommastelle steht.

### Platzhalter

Die `String.format()`-Methode verwendet spezielle Platzhalter, um die Formatierung der Zeichenkette zu definieren. Einige der häufig verwendeten Platzhalter sind:

- `%s`: Zeichenkette.
- `%d`: Ganzzahl.
- `%f`: Dezimalzahl.
- `%.nf`: Dezimalzahl mit `n` Nachkommastellen.
- `%t`: Datum/Zeit.
- `%n`: Zeilenumbruch.
- `%%`: Prozentzeichen.

### Weitere Beispiele

```java

public class Main {
    public static void main(String[] args) {
        String name = "Alice";
        int age = 30;
        double height = 5.6;

        String message1 = String.format("Name: %s, Age: %d, Height: %.1f", name, age, height);
        String message2 = String.format("Name: %s%nAge: %d%nHeight: %.1f", name, age, height);
        String message3 = String.format("Name: %s, Age: %d, Height: %.1f%%", name, age, height);

        System.out.println(message1); // Output: Name: Alice, Age: 30, Height: 5.6
        System.out.println(message2); // Output: Name: Alice, Age: 30, Height: 5.6
        System.out.println(message3); // Output: Name: Alice, Age: 30, Height: 5.6%
    }
}
```

In diesem Beispiel werden verschiedene Formate für die Zeichenkette `Name: Alice, Age: 30, Height: 5.6` verwendet, z.B. `%n` für einen Zeilenumbruch und `%%` für ein Prozentzeichen.

## Stringbuilder

Die `StringBuilder`-Klasse wird verwendet, um Zeichenketten effizient zu erstellen und zu manipulieren. Im Gegensatz zu `String`-Objekten, die unveränderlich sind, können `StringBuilder`-Objekte geändert werden, ohne neue Objekte zu erstellen.

### Beispiel Stringbuilder

```java
public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("Hello, ");
        sb.append("World!");
        sb.insert(7, "Java ");
        sb.delete(5, 7);
        sb.replace(5, 9, "Java");
        String message = sb.toString();
        System.out.println(message); // Output: Hello, Java World!
    }
}
```

In diesem Beispiel wird die Zeichenkette `Hello, World!` mit der `StringBuilder`-Klasse manipuliert, indem `Java` an der Position 7 eingefügt, die Zeichen `World` gelöscht und durch `Java` ersetzt wird.

Der Vorteil von Stringbuilder im gegen satz von string1 + string2 ist, dass Stringbuilder effizienter ist, da er weniger Objekte erstellt.

### Methoden

Einige der häufig verwendeten Methoden der `StringBuilder`-Klasse sind:

- `append()`: Fügt eine Zeichenkette am Ende hinzu.
- `insert()`: Fügt eine Zeichenkette an einer bestimmten Position ein.
- `delete()`: Löscht eine Zeichenkette an einer bestimmten Position.
- `replace()`: Ersetzt eine Zeichenkette durch eine andere.
- `toString()`: Konvertiert den `StringBuilder` in eine Zeichenkette.

## Stringbuffer

Die `StringBuffer`-Klasse ist ähnlich wie die `StringBuilder`-Klasse, aber sie ist thread-safe, d.h. sie kann von mehreren Threads gleichzeitig verwendet werden, ohne dass es zu Problemen kommt.

### Beispiel Stringbuffer

```java
public class Main {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer();
        sb.append("Hello, ");
        sb.append("World!");
        sb.insert(7, "Java ");
        sb.delete(5, 7);
        sb.replace(5, 9, "Java");
        String message = sb.toString();
        System.out.println(message); // Output: Hello, Java World!
    }
}
```

In diesem Beispiel wird die Zeichenkette `Hello, World!` mit der `StringBuffer`-Klasse manipuliert, indem `Java` an der Position 7 eingefügt, die Zeichen `World` gelöscht und durch `Java` ersetzt wird.

Der Vorteil von Stringbuffer im Gegensatz zu Stringbuilder ist, dass Stringbuffer thread-safe ist, d.h. er kann von mehreren Threads gleichzeitig verwendet werden.
