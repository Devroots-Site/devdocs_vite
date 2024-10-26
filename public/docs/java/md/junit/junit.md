# Junit

JUnit ist ein Framework zum Schreiben und Ausführen von automatisierten Tests in Java. Es ist das am weitesten verbreitete Test-Framework für Java und wird von Entwicklern auf der ganzen Welt verwendet, um die Qualität ihrer Software zu verbessern.

## Installation von JUnit

Um JUnit in Ihrem Java-Projekt zu verwenden, müssen Sie die JUnit-Bibliothek zu Ihrem Build-Path hinzufügen. Sie können JUnit entweder manuell herunterladen und hinzufügen oder ein Build-Tool wie Maven oder Gradle verwenden, um die Abhängigkeit automatisch

### Manuelle Installation

1. Laden Sie die JUnit-Bibliothek von der offiziellen [JUnit-Website](https://junit.org/junit5/) herunter.
2. Fügen Sie die JAR-Datei zu Ihrem Build-Path hinzu.

### Maven

Fügen Sie die folgende Abhängigkeit zur `pom.xml`-Datei Ihres Projekts hinzu:

```xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-api</artifactId>
    <version>5.8.1</version>
    <scope>test</scope>
</dependency>
```

Nachdem Sie die JUnit-Bibliothek hinzugefügt haben, können Sie Tests in Ihrem Java-Code schreiben und ausführen.

## Schreiben von Tests mit JUnit

Test werden im Ordner `src/test/java` abgelegt.
Weil diese Tests nicht in der Produktionsumgebung laufen sollen, sondern nur in der Testumgebung.
Um Tests mit JUnit zu schreiben, müssen Sie Testklassen erstellen, die mit der `@Test`-Annotation markiert sind. Hier ist ein einfaches Beispiel für einen JUnit-Test:

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    @Test
    public void testAddition() {
        Calculator calculator = new Calculator();
        int result = calculator.add(2, 3);
        assertEquals(5, result);
    }
}
```

In diesem Beispiel wird die Methode `testAddition` mit der `@Test`-Annotation markiert, um anzuzeigen, dass es sich um einen JUnit-Test handelt. Der Test erstellt eine Instanz des `Calculator`-Objekts und überprüft, ob die `add`-Methode korrekt funktioniert.

## Ausführen von Tests mit JUnit

Um Ihre JUnit-Tests auszuführen, können Sie Ihr Build-Tool verwenden oder die JUnit-Runner in Ihrer IDE verwenden. Hier sind einige Möglichkeiten, wie Sie Ihre Tests ausführen können:

### Maven test

Führen Sie den folgenden Befehl in der Befehlszeile aus, um Ihre JUnit-Tests mit Maven auszuführen:

```bash
mvn test
```

### Gradle test

Führen Sie den folgenden Befehl in der Befehlszeile aus, um Ihre JUnit-Tests mit Gradle auszuführen:

```bash
gradle test
```

## Anotationen in JUnit

JUnit bietet verschiedene Annotationen, die verwendet werden können, um Tests zu definieren und zu konfigurieren. Hier sind einige häufig verwendete JUnit-Annotationen:

| Annotation        | Beschreibung                                                                 |
|-------------------|------------------------------------------------------------------------------|
| `@Test`           | Markiert eine Methode als Testfall.                                          |
| `@BeforeAll`      | Markiert eine Methode, die vor allen Tests in der Klasse ausgeführt werden soll. |
| `@BeforeEach`     | Markiert eine Methode, die vor jedem Test in der Klasse ausgeführt werden soll. |
| `@AfterEach`      | Markiert eine Methode, die nach jedem Test in der Klasse ausgeführt werden soll. |
| `@AfterAll`       | Markiert eine Methode, die nach allen Tests in der Klasse ausgeführt werden soll. |

Diese Annotationen können verwendet werden, um Tests zu konfigurieren und vorzubereiten, z.B. um Testdaten zu initialisieren oder Ressourcen freizugeben.

## Assert-Methoden in JUnit

JUnit bietet verschiedene Assert-Methoden, die verwendet werden können, um Testergebnisse zu überprüfen. Hier sind einige häufig verwendete Assert-Methoden:

| Methode           | Beschreibung                                                                 |
|-------------------|------------------------------------------------------------------------------|
| `assertEquals()`   | Überprüft, ob zwei Werte gleich sind.                                        |
| `assertTrue()`     | Überprüft, ob ein Wert `true` ist.                                            |
| `assertFalse()`    | Überprüft, ob ein Wert `false` ist.                                           |
| `assertNotNull()`  | Überprüft, ob ein Wert nicht `null` ist.                                      |
| `assertNull()`     | Überprüft, ob ein Wert `null` ist.                                            |
| `assertThrows()`   | Überprüft, ob eine bestimmte Ausnahme geworfen wird.                         |
| `assertTimeout()`  | Überprüft, ob eine Operation innerhalb einer bestimmten Zeit abgeschlossen wird. |
| `assertAll()`      | Überprüft mehrere Bedingungen und gibt alle Fehlermeldungen zurück.           |

Diese Assert-Methoden können verwendet werden, um die erwarteten Ergebnisse eines Tests zu überprüfen und sicherzustellen, dass der Code korrekt funktioniert.
