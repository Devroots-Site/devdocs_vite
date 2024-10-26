# Ein / Ausgaben

In Java gibt es verschiedene Möglichkeiten, Ein- und Ausgaben zu realisieren. In diesem Kapitel werden die wichtigsten Methoden und Klassen vorgestellt.

## Standard Ein- und Ausgaben

Die Standard Ein- und Ausgaben in Java werden über die Klassen `System` und `Scanner` realisiert.

### System.out.println()

Die Methode `System.out.println()` gibt einen Text auf der Konsole aus und fügt automatisch einen Zeilenumbruch hinzu.

```java
System.out.println("Hello, World!");
```

### System.out.print()

Die Methode `System.out.print()` gibt einen Text auf der Konsole aus, **ohne** einen Zeilenumbruch hinzuzufügen.

```java
System.out.print("Hello, ");
System.out.print("World!");
```

### System.in und Scanner

Die Klasse `Scanner` wird verwendet, um Benutzereingaben von der Konsole zu lesen.

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello, " + name);
    }
}
```

## Datei Ein- und Ausgaben

Datei Ein- und Ausgaben in Java werden über die Klassen `File`, `FileInputStream`, `FileOutputStream`, `BufferedReader` und `BufferedWriter` realisiert.

### Datei lesen

Die Klasse `BufferedReader` wird verwendet, um eine Datei Zeile für Zeile zu lesen.

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
```

### Datei schreiben

Die Klasse `BufferedWriter` wird verwendet, um eine Datei Zeile für Zeile zu schreiben.

```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("file.txt"))) {
            writer.write("Hello, World!");
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
```

## Weitere Ein- und Ausgaben

Es gibt noch viele weitere Möglichkeiten, Ein- und Ausgaben in Java zu realisieren, z.B. über die Klassen `PrintWriter`, `DataInputStream`, `DataOutputStream`, `ObjectInputStream`, `ObjectOutputStream`, `RandomAccessFile`, etc. Diese werden in fortgeschrittenen Kapiteln behandelt.

## printf-Methode

Die `printf`-Methode wird verwendet, um formatierte Ausgaben auf der Konsole zu realisieren.

```java

public class Main {
    public static void main(String[] args) {
        String name = "Alice";
        int age = 30;
        double height = 1.75;
        System.out.printf("Name: %s, Age: %d, Height: %.2f\n", name, age, height);
    }
}
```

In diesem Beispiel wird der Platzhalter `%s` durch den Wert von `name` ersetzt, `%d` durch den Wert von `age` und `%f` durch den Wert von `height`. Der Platzhalter `%.2f` gibt die Höhe auf zwei Dezimalstellen genau aus.

| Platzhalter | Datentyp | Beispiel |
|-------------|----------|----------|
| `%s`        | String   | `String name = "Alice";` |
| `%d`        | int      | `int age = 30;` |
| `%f`        | double   | `double height = 1.75;` |
| `%.2f`      | double   | `double height = 1.75;` |
| `%n`        | Zeilenumbruch | |
| `%%`        | Prozentzeichen | |
| `%t`        | Datum / Uhrzeit | |
| `%b`        | boolean  | |
| `%c`        | char     | |
| `%x`        | Hexadezimal | |
| `%o`        | Oktal     | |
| `%e`        | Exponential | |
| `%g`        | Allgemein | |
| `%h`        | Hash-Code | |
| `%a`        | Hexadezimal-Floating-Point | |
| `%p`        | Pointer  | |
