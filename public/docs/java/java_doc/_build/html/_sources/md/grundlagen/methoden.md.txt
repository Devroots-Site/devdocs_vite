# Methoden in Java

Methoden sind Funktionen, die in Klassen definiert werden und auf Objekten ausgeführt werden können. Sie werden verwendet, um Code zu organisieren, zu strukturieren und wiederzuverwenden. In Java gibt es zwei Arten von Methoden: Klassenmethoden und Instanzmethoden.

## Klassenmethoden

Klassenmethoden sind Methoden, die auf Klassenebene definiert sind und aufgerufen werden können, ohne dass ein Objekt der Klasse erstellt werden muss. Sie werden mit dem Schlüsselwort `static` deklariert. Hier ist ein Beispiel für eine Klassenmethode in Java:

```java
public class MathUtils {
    public static int add(int a, int b) {
        return a + b;
    }

    public static int subtract(int a, int b) {
        return a - b;
    }
}
```

In diesem Beispiel werden die Methoden `add` und `subtract` in der Klasse `MathUtils` als Klassenmethoden deklariert. Sie können aufgerufen werden, indem Sie den Klassennamen gefolgt von einem Punkt und dem Methodennamen verwenden, z.B. `MathUtils.add(5, 3)`.

## Instanzmethoden

Instanzmethoden sind Methoden, die auf Objektebene definiert sind und aufgerufen werden können, nachdem ein Objekt der Klasse erstellt wurde. Sie werden ohne das Schlüsselwort `static` deklariert. Hier ist ein Beispiel für eine Instanzmethode in Java:

```java
public class Person {
    private String name;

    public Person(String name) {
        this.name = name;
    }

    public void sayHello() {
        System.out.println("Hello, my name is " + name);
    }
}
```

In diesem Beispiel wird die Methode `sayHello` in der Klasse `Person` als Instanzmethode deklariert. Sie kann aufgerufen werden, nachdem ein Objekt der Klasse `Person` erstellt wurde, z.B. `Person person = new Person("Alice"); person.sayHello();`.

## Methodenüberladung

Methodenüberladung tritt auf, wenn mehrere Methoden denselben Namen haben, aber unterschiedliche Parameterlisten haben. Dies ermöglicht es, Methoden mit demselben Namen für verschiedene Zwecke zu definieren. Hier ist ein Beispiel für Methodenüberladung in Java:

```java

public class MathUtils {
    public static int add(int a, int b) {
        return a + b;
    }

    public static double add(double a, double b) {
        return a + b;
    }
}
```

In diesem Beispiel gibt es zwei Methoden mit dem Namen `add`, eine für Ganzzahlen und eine für Gleitkommazahlen. Sie können aufgerufen werden, indem Sie die entsprechenden Parameter übergeben, z.B. `MathUtils.add(5, 3)` oder `MathUtils.add(5.5, 3.5)`.

Methoden sind ein wichtiger Bestandteil der objektorientierten Programmierung in Java. Sie ermöglichen es, Code zu organisieren, zu strukturieren und wiederzuverwenden, was die Lesbarkeit und Wartbarkeit von Code verbessert.

## Zusammenfassung

- Methoden sind Funktionen, die in Klassen definiert werden und auf Objekten ausgeführt werden können.
- Klassenmethoden sind Methoden, die auf Klassenebene definiert sind und ohne Objektinstanz aufgerufen werden können.
- Instanzmethoden sind Methoden, die auf Objektebene definiert sind und nach der Erstellung eines Objekts aufgerufen werden können.
- Methodenüberladung tritt auf, wenn mehrere Methoden denselben Namen haben, aber
    unterschiedliche Parameterlisten haben.
- Methoden sind ein wichtiger Bestandteil der objektorientierten Programmierung in Java und ermöglichen es, Code zu organisieren, zu strukturieren und wiederzuverwenden.
