# Exception & Fehlerbehandlung

In Java gibt es zwei Arten von Fehlern: Compilerfehler und Laufzeitfehler. Compilerfehler treten auf, wenn der Code nicht korrekt geschrieben ist und können nicht zur Laufzeit auftreten. Laufzeitfehler treten auf, wenn der Code korrekt kompiliert wurde, aber zur Laufzeit ein Fehler auftritt. Laufzeitfehler können durch Exceptions behandelt werden.

## Exceptions

Exceptions sind Objekte, die zur Laufzeit erzeugt werden, wenn ein Fehler auftritt. Exceptions können durch den Entwickler oder durch das System erzeugt werden. Exceptions können durch das `throw`-Statement geworfen und durch das `try-catch`-Statement behandelt werden.

### Checked Exceptions

Checked Exceptions sind Exceptions, die zur Kompilierzeit überprüft werden. Checked Exceptions müssen entweder durch das `throws`-Statement deklariert oder durch das `try-catch`-Statement behandelt werden.

```java
public void readFile() throws IOException {
    FileReader file = new FileReader("file.txt");
    BufferedReader reader = new BufferedReader(file);
    String line = reader.readLine();
    reader.close();
}
```

### Unchecked Exceptions

Unchecked Exceptions sind Exceptions, die zur Laufzeit überprüft werden. Unchecked Exceptions müssen nicht durch das `throws`-Statement deklariert werden, können aber durch das `try-catch`-Statement behandelt werden.

```java
public void divide(int a, int b) {
    if (b == 0) {
        throw new ArithmeticException("Division by zero");
    }
    int result = a / b;
}
```

### Try-Catch-Statement

Das `try-catch`-Statement wird verwendet, um Exceptions zu behandeln. Der Code, der eine Exception werfen könnte, wird in das `try`-Block geschrieben, und der Code, der die Exception behandelt, wird in das `catch`-Block geschrieben.

```java
try {
    readFile();
} catch (IOException e) {
    System.out.println("An error occurred: " + e.getMessage());
}
```

### Finally-Block

Der `finally`-Block wird immer ausgeführt, unabhängig davon, ob eine Exception aufgetreten ist oder nicht. Der `finally`-Block wird verwendet, um Ressourcen freizugeben, die im `try`-Block geöffnet wurden.

```java
try {
    readFile();
} catch (IOException e) {
    System.out.println("An error occurred: " + e.getMessage());
} finally {
    System.out.println("Cleaning up resources");
}
```

## Eigene Exceptions

Eigene Exceptions können erstellt werden, indem eine Klasse von der `Exception`-Klasse oder einer ihrer Unterklassen abgeleitet wird.

```java
public class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}
```

Eigene Exceptions können durch das `throw`-Statement geworfen und durch das `try-catch`-Statement behandelt werden.

```java
public void myMethod() throws MyException {
    throw new MyException("An error occurred");
}
```

## Mehrere Catch-Blöcke

Mehrere `catch`-Blöcke können verwendet werden, um verschiedene Exceptions zu behandeln. Die Reihenfolge der `catch`-Blöcke ist wichtig, da der Compiler den ersten passenden `catch`-Block ausführt.

```java
try {
    readFile();
} catch (FileNotFoundException e) {
    System.out.println("File not found: " + e.getMessage());
} catch (IOException e) {
    System.out.println("An error occurred: " + e.getMessage());
}
```

## Rethrowing Exceptions

Exceptions können durch das `throw`-Statement erneut geworfen werden, um sie an eine höhere Ebene weiterzugeben.

```java
public void myMethod() throws IOException {
    try {
        readFile();
    } catch (IOException e) {
        System.out.println("An error occurred: " + e.getMessage());
        throw e;
    }
}
```

## Suppressed Exceptions

Suppressed Exceptions sind Exceptions, die während der Behandlung einer anderen Exception auftreten. Suppressed Exceptions können durch das `getSuppressed`-Methode abgerufen werden.

```java
try (FileReader file = new FileReader("file.txt")) {
    // Do something with the file
} catch (IOException e) {
    System.out.println("An error occurred: " + e.getMessage());
    for (Throwable t : e.getSuppressed()) {
        System.out.println("Suppressed: " + t.getMessage());
    }
}
```

## Try-With-Resources

Das `try-with-resources`-Statement wird verwendet, um Ressourcen automatisch freizugeben, die im `try`-Block geöffnet wurden. Die Klasse, die die Ressource verwaltet, muss das `AutoCloseable`-Interface implementieren.

```java
try (FileReader file = new FileReader("file.txt");
     BufferedReader reader = new BufferedReader(file)) {
    String line = reader.readLine();
} catch (IOException e) {
    System.out.println("An error occurred: " + e.getMessage());
}
```

## Best Practices

- Exceptions sollten nur für außergewöhnliche Bedingungen verwendet werden, nicht für die normale Programmsteuerung.
- Checked Exceptions sollten nur verwendet werden, wenn der Aufrufer in der Lage ist, die Exception sinnvoll zu behandeln.
- Unchecked Exceptions sollten für Fehler verwendet werden, die nicht sinnvoll behandelt werden können.
- Exceptions sollten so früh wie möglich behandelt werden, um die Fehlerbehandlung zu vereinfachen.
- Exceptions sollten so spezifisch wie möglich sein, um die Fehlerbehandlung zu erleichtern.
