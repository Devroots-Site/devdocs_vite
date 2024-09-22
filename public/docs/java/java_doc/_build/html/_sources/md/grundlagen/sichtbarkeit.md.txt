# Sichtbarkeit  & Statik

Die Sichtbarkeit von Klassen, Methoden und Attributen wird durch die Zugriffsmodifizierer `public`, `protected`, `default` und `private` gesteuert.

## Zugriffsmodifizierer

### `public`

`public` bedeutet, dass die Klasse, Methode oder das Attribut von überall im Code zugegriffen werden kann.

```java
public class MyClass {
    public void myMethod() {
        System.out.println("This is a public method");
    }
}
```

### `protected`

`protected` bedeutet, dass die Klasse, Methode oder das Attribut nur von Klassen im selben Paket oder von Unterklassen zugegriffen werden kann.

```java
protected class MyClass {
    protected void myMethod() {
        System.out.println("This is a protected method");
    }
}
```

### `default`

`default` bedeutet, dass die Klasse,
Methode oder das Attribut nur von Klassen im selben Paket zugegriffen werden kann. Wenn kein Zugriffsmodifizierer angegeben ist, wird der `default`-Zugriffsmodifizierer verwendet.

```java
class MyClass {
    void myMethod() {
        System.out.println("This is a default method");
    }
}
```

### `private`

`private` bedeutet, dass die Klasse,
Methode oder das Attribut nur von der Klasse selbst zugegriffen werden kann.

```java
private class MyClass {
    private void myMethod() {
        System.out.println("This is a private method");
    }
}
```

Deswegen werden in privat getter und setter Methoden verwendet, um auf private Attribute zuzugreifen.

```java
public class Person {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

## `static`

`static` bedeutet, dass die Methode
oder das Attribut auf Klassenebene definiert ist und von der Klasse selbst aufgerufen werden kann, ohne ein Objekt der Klasse zu erstellen.

```java
public class MathUtils {
    public static int add(int a, int b) {
        return a + b;
    }
}
```

`static` Methoden können aufgerufen werden, indem Sie den Klassennamen gefolgt von einem Punkt und dem Methodennamen verwenden, z.B. `MathUtils.add(5, 3)`.
`static` Attribute können auf Klassenebene definiert werden und sind für alle Instanzen der Klasse gemeinsam.

```java
public class Counter {
    private static int count = 0;

    public Counter() {
        count++;
    }

    public static int getCount() {
        return count;
    }
}
```

In diesem Beispiel wird ein `static` Attribut `count` in der Klasse `Counter` definiert, das die Anzahl der erstellten Instanzen der Klasse zählt. Die Methode `getCount` gibt den aktuellen Wert von `count` zurück.

```java
Counter counter1 = new Counter();
Counter counter2 = new Counter();

System.out.println(Counter.getCount()); // Output: 2
```

In diesem Beispiel werden zwei Objekte `counter1` und `counter2` der Klasse `Counter` erstellt, und die Methode `getCount` wird aufgerufen, um die Anzahl der erstellten Instanzen zu erhalten.

`static` Methoden können nicht auf Instanzebene Attribute oder Methoden zugreifen, da sie auf Klassenebene definiert sind.

```java
public class MathUtils {
    private int value;

    public static void setValue(int value) {
        this.value = value; // Compile error: Cannot use this in a static context
    }
}
```

In diesem Beispiel wird versucht, auf das Instanzebene Attribut `value` von einer `static` Methode `setValue` zuzugreifen, was zu einem Kompilierungsfehler führt.

`static` Methoden können auf andere `static` Methoden und Attribute zugreifen, da sie auf Klassenebene definiert sind.

```java
public class MathUtils {
    private static int value;

    public static void setValue(int value) {
        MathUtils.value = value;
    }
}
```

In diesem Beispiel wird das `static` Attribut `value` von der `static` Methode `setValue` erfolgreich aktualisiert.

`static` Methoden können auch ohne Instanz der Klasse aufgerufen werden.

```java
int result = MathUtils.add(5, 3);
```

In diesem Beispiel wird die `static` Methode `add` der Klasse `MathUtils` aufgerufen, ohne ein Objekt der Klasse zu erstellen.

`static` Methoden sind nützlich, um Hilfsfunktionen zu definieren, die unabhängig von einer bestimmten Instanz der Klasse sind, z.B. Mathematische Funktionen, Konvertierungsfunktionen usw.

## Zusammenfassung

- Die Sichtbarkeit von Klassen, Methoden und Attributen wird durch die Zugriffsmodifizierer `public`, `protected`, `default` und `private` gesteuert.
- `public` bedeutet, dass die Klasse, Methode oder das Attribut von überall im Code zugegriffen werden kann.
- `protected` bedeutet, dass die Klasse, Methode oder das Attribut nur von Klassen im selben Paket oder von Unterklassen zugegriffen werden kann.
- `default` bedeutet, dass die Klasse, Methode oder das Attribut nur von Klassen im selben Paket zugegriffen werden kann.
- `private` bedeutet, dass die Klasse, Methode oder das Attribut nur von der Klasse selbst zugegriffen werden kann.
- `static` bedeutet, dass die Methode
oder das Attribut auf Klassenebene definiert ist und von der Klasse selbst aufgerufen werden kann, ohne ein Objekt der Klasse zu erstellen.
