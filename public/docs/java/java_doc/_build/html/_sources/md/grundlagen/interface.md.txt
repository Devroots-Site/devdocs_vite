# Interface

Ein Interface ist eine Sammlung von Methoden, die in einer Klasse implementiert werden müssen. Ein Interface ist eine abstrakte Klasse, die nur Methodenköpfe enthält. Eine Klasse kann mehrere Interfaces implementieren.

```java
public interface Animal {
    void eat();
    void sleep();
}
```

In diesem Beispiel wird ein Interface `Animal` definiert, das die Methoden `eat` und `sleep` enthält. Eine Klasse, die das Interface `Animal` implementiert, muss diese Methoden implementieren.

```java
public class Dog implements Animal {
    public void eat() {
        System.out.println("Dog is eating");
    }

    public void sleep() {
        System.out.println("Dog is sleeping");
    }
}
```

In diesem Beispiel wird eine Klasse `Dog` definiert, die das Interface `Animal` implementiert und die Methoden `eat` und `sleep` implementiert.

Interfaces werden verwendet, um Verträge zwischen Klassen zu definieren, um sicherzustellen, dass bestimmte Methoden implementiert werden. Sie ermöglichen es auch, Klassen unabhängig von ihrer Vererbungshierarchie zu behandeln, indem sie eine gemeinsame Schnittstelle bereitstellen.

Interfaces können auch Konstanten enthalten, die von Klassen, die das Interface implementieren, verwendet werden können.

```java
public interface Animal {
    int MAX_AGE = 100;

    void eat();
    void sleep();
}
```

In diesem Beispiel wird dem Interface `Animal` eine Konstante `MAX_AGE` hinzugefügt, die von Klassen, die das Interface implementieren, verwendet werden kann.

Der unterschied zwischen einem Interface und einer abstrakten Klasse ist, dass eine Klasse mehrere Interfaces implementieren kann, aber nur von einer abstrakten Klasse erben kann.

```java
public interface Animal {
    void eat();
    void sleep();
}

public interface Pet {
    void play();
}

public class Dog implements Animal, Pet {
    public void eat() {
        System.out.println("Dog is eating");
    }

    public void sleep() {
        System.out.println("Dog is sleeping");
    }

    public void play() {
        System.out.println("Dog is playing");
    }
}
```

In diesem Beispiel implementiert die Klasse `Dog` sowohl das Interface `Animal` als auch das Interface `Pet`, was es ermöglicht, die Methoden `eat`, `sleep` und `play` zu implementieren.

Interfaces sind eine leistungsstarke Funktion in Java, die es ermöglicht, Verträge zwischen Klassen zu definieren und die Flexibilität und Wiederverwendbarkeit des Codes zu verbessern. Sie sind nützlich, um eine gemeinsame Schnittstelle für Klassen bereitzustellen, die ähnliche Funktionalitäten bereitstellen müssen.
