# Gut zu wissen

In diesem Abschnitt werden einige fortgeschrittene Konzepte und Techniken in Java behandelt, die Ihnen helfen können, Ihre Programmierfähigkeiten zu verbessern.

## System beenden

In Java kann das Programm mit der Methode `System.exit()` beendet werden. Diese Methode akzeptiert einen Statuscode als Argument, der angibt, ob das Programm erfolgreich beendet wurde oder nicht.

```java
public class Main {
    public static void main(String[] args) {
        // Your code here

        System.exit(0); // Exit with success
    }
}
```

In diesem Beispiel wird das Programm mit dem Statuscode `0` beendet, was bedeutet, dass das Programm erfolgreich beendet wurde. Sie können auch andere Statuscodes verwenden, um verschiedene Beendigungsbedingungen anzugeben.

## Runtime beenden

Die Klasse `Runtime` bietet eine Methode `exit()`, die ähnlich wie `System.exit()` verwendet werden kann, um das Programm zu beenden. Hier ist ein Beispiel:

```java
public class Main {
    public static void main(String[] args) {
        // Your code here

        Runtime.getRuntime().exit(0); // Exit with success
    }
}
```

In diesem Beispiel wird das Programm mit dem Statuscode `0` beendet, um anzuzeigen, dass das Programm erfolgreich beendet wurde. Sie können auch andere Statuscodes verwenden, um verschiedene Beendigungsbedingungen anzugeben.

## Sprungmarken

In Java können Sie mit dem `break`- und `continue`-Statement die Ausführung von Schleifen steuern. Das `break`-Statement wird verwendet, um eine Schleife zu beenden, während das `continue`-Statement verwendet wird, um den aktuellen Schleifendurchlauf zu überspringen und mit dem nächsten fortzufahren.

```java
public class Main {
    public static void main(String[] args) {

Test: 
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                break test; // Exit the loop
            }

            System.out.println(i);
        }
    }
}
```

In diesem Beispiel wird die Schleife mit dem `break`-Statement beendet, wenn `i` den Wert `5` erreicht. Dadurch wird die Ausführung der Schleife vorzeitig beendet.

## Ifs mit ?: Operator

In Java können Sie den ternären Operator `?:` verwenden, um eine verkürzte Form des `if-else`-Statements zu schreiben. Der ternäre Operator hat die folgende Syntax: `condition ? expression1 : expression2`.

```java
public class Main {
    public static void main(String[] args) {
        int x = 10;
        int y = (x > 5) ? 1 : 0;

        System.out.println(y); // Output: 1
    }
}
```

In diesem Beispiel wird der ternäre Operator verwendet, um den Wert von `y` basierend auf der Bedingung `x > 5` zuzuweisen. Wenn die Bedingung wahr ist, wird `1` zugewiesen, andernfalls `0`.

## Mehrere Variablen deklarieren

In Java können Sie mehrere Variablen desselben Typs in einer Zeile deklarieren. Sie müssen nur den Datentyp einmal angeben und dann die Variablennamen durch Kommas trennen.

```java

public class Main {
    public static void main(String[] args) {
        int x, y, z;
        x = 1;
        y = 2;
        z = 3;

        System.out.println(x + y + z); // Output: 6
    }
}
```

## Jar Runnable machen

In Java können Sie eine JAR-Datei ausführbar machen, indem Sie die `Main-Class` im Manifest festlegen. Dazu müssen Sie eine `MANIFEST.MF`-Datei erstellen und die `Main-Class` angeben.

```java

public class Main {
    public static void main(String[] args) {
        // Your code here
    }
}
```

In diesem Beispiel wird die `Main-Class` als `Main` festgelegt, was bedeutet, dass die Klasse `Main` die `main`-Methode enthält und als Einstiegspunkt für das Programm dient.  

## Lambda-Ausdrücke

In Java können Sie Lambda-Ausdrücke verwenden, um anonyme Funktionen zu erstellen. Ein Lambda-Ausdruck hat die folgende Syntax: `(parameter) -> expression`.

```java

public class Main {
    public static void main(String[] args) {
        // Lambda expression to add two numbers
        MathOperation addition = (int a, int b) -> a + b;

        System.out.println(addition.operation(5, 3)); // Output: 8
    }
}

interface MathOperation {
    int operation(int a, int b);
}
```

## :: Operator

In Java können Sie den `::`-Operator verwenden, um Methodenreferenzen zu erstellen. Der `::`-Operator hat die folgende Syntax: `ClassName::methodName`.

```java

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

        names.forEach(System.out::println);
    }
}
```
