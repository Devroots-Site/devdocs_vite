# Lombok

Lombok ist eine Bibliothek für Java, die es ermöglicht, Boilerplate-Code zu reduzieren und die Produktivität zu steigern. Sie bietet Annotationen, die automatisch Code generieren, z.B. Getter, Setter, Konstruktoren und vieles mehr. In diesem Tutorial werden wir die Verwendung von Lombok in Java-Anwendungen untersuchen.

## Installation

Um Lombok in Ihrem Java-Projekt zu verwenden, müssen Sie die Lombok-Bibliothek zu Ihrem Build-Tool hinzufügen. Hier sind die Schritte für die Installation von Lombok mit Maven und Gradle:

### Maven

Fügen Sie die folgende Abhängigkeit zur `pom.xml`-Datei Ihres Projekts hinzu:

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.22</version>
    <scope>provided</scope>
</dependency>

```

## Verwendung von Lombok

Lombok bietet verschiedene Annotationen, die verwendet werden können, um Boilerplate-Code zu generieren. Hier sind einige häufig verwendete Lombok-Annotationen:

### `@Getter` und `@Setter`

Die Annotationen `@Getter` und `@Setter` werden verwendet, um Getter- und Setter-Methoden für Felder automatisch zu generieren. Hier ist ein Beispiel:

```java
import lombok.Getter;
import lombok.Setter;

public class Person {
    @Getter @Setter
    private String name;
    @Getter @Setter
    private int age;
}
// 0der 

import lombok.Data;

@Data
public class Person {
    private String name;
    private int age;
}

```

In diesem Beispiel werden die Getter- und Setter-Methoden für die Felder `name` und `age` automatisch generiert.

### `@ToString`

Die Annotation `@ToString` wird verwendet, um die `toString()`-Methode automatisch zu generieren. Hier ist ein Beispiel:

```java
import lombok.ToString;

@ToString
public class Person {
    private String name;
    private int age;
}
```

In diesem Beispiel wird die `toString()`-Methode automatisch generiert, die eine Zeichenkette mit den Werten der Felder `name` und `age` zurückgibt.

## Anotations

| Annotation     | Beschreibung                                                                 |
| -------------- | ----------------------------------------------------------------------------- |
| `@Getter`      | Generiert einen Getter für das Feld.                                          |
| `@Setter`      | Generiert einen Setter für das Feld.                                          |
| `@ToString`    | Generiert eine `toString()`-Methode für die Klasse.                           |
| `@EqualsAndHashCode` | Generiert `equals()` und `hashCode()`-Methoden für die Klasse.            |
| `@NoArgsConstructor` | Generiert einen Standardkonstruktor ohne Argumente.                        |
| `@AllArgsConstructor` | Generiert einen Konstruktor mit allen Feldern der Klasse als Argumente.  |
| `@Data`        | Kombiniert `@Getter`, `@Setter`, `@ToString`, `@EqualsAndHashCode` und `@AllArgsConstructor`. |
| `@Builder`     | Generiert einen Builder für die Klasse.                                       |
| `@Slf4j`       | Generiert ein SLF4J-Loggerfeld für die Klasse.                                |

## ToString bei listen

```java
import lombok.ToString;

import java.util.List;

@ToString(exclude = "list")
public class Person {
    private String name;
    private int age;
    private List<String> hobbies;
}
```

Hier ist die `exclude`-Option von `@ToString` nützlich, um bestimmte Felder von der `toString()`-Methode auszuschließen.
