# Imports und Packages

In Java können Sie `import`-Anweisungen verwenden, um Klassen und Pakete in Ihrem Code zu verwenden. Dies ermöglicht es Ihnen, auf bereits vorhandene Klassen und Funktionen zuzugreifen, ohne sie erneut implementieren zu müssen.

## Pakete

Pakete sind Container für Klassen und Schnittstellen in Java. Sie helfen dabei, den Code zu organisieren und zu strukturieren, indem sie Klassen mit ähnlicher Funktionalität gruppieren. Pakete können auch verwendet werden, um Namenskonflikte zu vermeiden, da Klassen mit demselben Namen in verschiedenen Paketen existieren können.

In Java gibt es viele vordefinierte Pakete, die in der Standardbibliothek enthalten sind, z.B. `java.lang`, `java.util`, `java.io`, usw. Sie können auch eigene Pakete erstellen, indem Sie den `package`-Befehl am Anfang Ihrer Datei verwenden.

```java
package com.example.myapp;

public class MyClass {
    // Code hier
}
```

In diesem Beispiel wird die Klasse `MyClass` im Paket `com.example.myapp` deklariert. Sie können auf diese Klasse zugreifen, indem Sie den vollqualifizierten Klassennamen verwenden, z.B. `com.example.myapp.MyClass`.

## Importe

`import`-Anweisungen werden verwendet, um Klassen und Pakete in Ihrem Code zu verwenden. Sie ermöglichen es Ihnen, auf bereits vorhandene Klassen und Funktionen zuzugreifen, ohne sie erneut implementieren zu müssen. Sie können einzelne Klassen oder das gesamte Paket importieren.

```java
import java.util.ArrayList;
import java.util.List;
```

In diesem Beispiel werden die Klassen `ArrayList` und `List` aus dem Paket `java.util` importiert. Sie können auf diese Klassen zugreifen, indem Sie ihre Namen ohne den Paketnamen verwenden, z.B. `ArrayList<String> list = new ArrayList<>();`.

Sie können auch alle Klassen eines Pakets importieren, indem Sie `*` verwenden.

```java

import java.util.*;
```

In diesem Beispiel werden alle Klassen aus dem Paket `java.util` importiert. Sie können auf alle Klassen dieses Pakets zugreifen, ohne den Paketnamen zu verwenden.

`import`-Anweisungen müssen am Anfang Ihrer Datei stehen, bevor Sie Klassen oder Methoden verwenden, die aus anderen Paketen importiert wurden.

## Zusammenfassung

- Pakete sind Container für Klassen und Schnittstellen in Java.
- Sie helfen dabei, den Code zu organisieren und zu strukturieren.
- `import`-Anweisungen werden verwendet, um Klassen und Pakete in Ihrem Code zu verwenden.
- Sie ermöglichen es Ihnen, auf bereits vorhandene Klassen und Funktionen zuzugreifen, ohne sie erneut implementieren zu müssen.
- Sie müssen am Anfang Ihrer Datei stehen, bevor Sie Klassen oder Methoden verwenden, die aus anderen Paketen importiert wurden.
