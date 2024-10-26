# OOP | Objektorientierte Programmierung

## Objekte und Klassen

Objektorientierte Programmierung (OOP) ist ein Programmierparadigma, das auf dem Konzept von "Objekten" basiert. Ein Objekt ist eine Instanz einer Klasse und enthält Daten (Attribute) und Methoden (Funktionen), die auf diese Daten angewendet werden können.

Klassen sind Baupläne für Objekte, die Daten und Methoden enthalten. Sie definieren die Struktur und das Verhalten von Objekten. Hier ist ein Beispiel für eine Klasse in Java:

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void sayHello() {
        System.out.println("Hello, my name is " + name);
    }
}
```

Als erstes wird eine Klasse `Person` definiert, die zwei private Attribute `name` und `age` enthält. Dann wird ein Konstruktor definiert, der die Attribute initialisiert, wenn ein Objekt der Klasse erstellt wird. Schließlich wird eine Methode `sayHello` definiert, die eine Begrüßungsnachricht ausgibt.

Um ein Objekt der Klasse `Person` zu erstellen und auf seine Methoden zuzugreifen, können Sie den folgenden Code verwenden:

```java
Person person = new Person("Alice", 30);
person.sayHello();
```

In diesem Beispiel wird ein Objekt `person` der Klasse `Person` erstellt und mit den Werten "Alice" und 30 initialisiert. Dann wird die Methode `sayHello` aufgerufen, um die Begrüßungsnachricht auszugeben.

Objektorientierte Programmierung ermöglicht es, Code zu organisieren, zu strukturieren und wiederzuverwenden, indem Daten und Methoden in Klassen und Objekten organisiert werden. Sie können auch Beziehungen zwischen Objekten modellieren, z.B. Vererbung, Polymorphismus, Kapselung usw.

## Vererbung

Vererbung ist ein Konzept in der objektorientierten Programmierung, das es ermöglicht, Eigenschaften und Methoden einer Klasse in einer anderen Klasse wiederzuverwenden. Eine Klasse, die von einer anderen Klasse erbt, wird als Unterklasse oder abgeleitete Klasse bezeichnet, während die Klasse, von der sie erbt, als Basisklasse oder Superklasse bezeichnet wird.

Hier ist ein Beispiel für Vererbung in Java:

```java
public class Animal {
    public void eat() {
        System.out.println("Animal is eating");
    }
}

public class Dog extends Animal {
    public void bark() {
        System.out.println("Dog is barking");
    }
}
```

In diesem Beispiel wird eine Basisklasse `Animal` definiert, die eine Methode `eat` enthält. Dann wird eine Unterklasse `Dog` definiert, die von der Basisklasse `Animal` erbt und eine zusätzliche Methode `bark` enthält.

Sie können auf die Methoden der Basisklasse von der Unterklasse aus zugreifen, indem Sie das Schlüsselwort `super` verwenden. Hier ist ein Beispiel:

```java
public class Dog extends Animal {
    public void bark() {
        System.out.println("Dog is barking");
    }

    public void eat() {
        super.eat();
        System.out.println("Dog is eating");
    }
}
```

In diesem Beispiel wird die Methode `eat` in der Unterklasse `Dog` überschrieben, um die Methode `eat` der Basisklasse `Animal` aufzurufen und dann eine zusätzliche Ausgabe hinzuzufügen.

Vererbung ermöglicht es, Code zu organisieren, zu strukturieren und wiederzuverwenden, indem Eigenschaften und Methoden in Basisklassen definiert und in abgeleiteten Klassen wiederverwendet werden.

Die ausgabe des obigen Codes wäre:

```java
Dog dog = new Dog();
dog.eat();
```

```bash
Animal is eating
Dog is eating
```

## Polymorphismus

Polymorphismus ist ein Konzept in der objektorientierten Programmierung, das es ermöglicht, Objekte unterschiedlicher Klassen auf einheitliche Weise zu behandeln. Es ermöglicht es, Methoden in Basisklassen zu definieren, die von abgeleiteten Klassen überschrieben werden können, um unterschiedliches Verhalten zu implementieren.

Hier ist ein Beispiel für Polymorphismus in Java:

```java
public class Animal {
    public void makeSound() {
        System.out.println("Animal is making a sound");
    }
}

public class Dog extends Animal {
    
    public void makeSound() {
        System.out.println("Dog is barking");
    }
}

public class Cat extends Animal {
    public void makeSound() {
        System.out.println("Cat is meowing");
    }
}
```

In diesem Beispiel wird eine Basisklasse `Animal` definiert, die eine Methode `makeSound` enthält. Dann werden zwei abgeleitete Klassen `Dog` und `Cat` definiert, die die Methode `makeSound` überschreiben, um unterschiedliche Geräusche zu machen.

Sie können dann Objekte der Basisklasse erstellen und auf die Methoden der abgeleiteten Klassen zugreifen, um das polymorphe Verhalten zu demonstrieren. Hier ist ein Beispiel:

```java
Animal dog = new Dog();
Animal cat = new Cat();

dog.makeSound();
cat.makeSound();
```

In diesem Beispiel werden Objekte der Basisklasse `Animal` erstellt, die auf abgeleitete Klassen `Dog` und `Cat` verweisen. Wenn die Methode `makeSound` aufgerufen wird, wird die Methode der entsprechenden abgeleiteten Klasse ausgeführt.

Polymorphismus ermöglicht es, Code flexibel und erweiterbar zu gestalten, indem Methoden in Basisklassen definiert werden, die von abgeleiteten Klassen überschrieben werden können, um unterschiedliches Verhalten zu implementieren.

Die Ausgabe des obigen Codes wäre:

```java
Dog is barking
Cat is meowing
```

## Kapselung

Kapselung ist ein Konzept in der objektorientierten Programmierung, das es ermöglicht, den internen Zustand eines Objekts vor externem Zugriff zu schützen. Es wird erreicht, indem Attribute als privat deklariert und den Zugriff auf diese Attribute über öffentliche Methoden kontrolliert werden.

Hier ist ein Beispiel für Kapselung in Java:

```java
public class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```

In diesem Beispiel werden die Attribute `name` und `age` als privat deklariert, um den direkten Zugriff von außen zu verhindern. Dann werden öffentliche Getter- und Setter-Methoden definiert, um den Zugriff auf diese Attribute zu ermöglichen.

Sie können dann Objekte der Klasse `Person` erstellen und auf die Getter- und Setter-Methoden zugreifen, um den internen Zustand des Objekts zu ändern und abzurufen. Hier ist ein Beispiel:

```java

Person person = new Person();
person.setName("Alice");
person.setAge(30);

System.out.println(person.getName());
System.out.println(person.getAge());
```

In diesem Beispiel wird ein Objekt `person` der Klasse `Person` erstellt und mit den Werten "Alice" und 30 initialisiert. Dann werden die Getter-Methoden `getName` und `getAge` aufgerufen, um die Werte der Attribute abzurufen und auszugeben.

Kapselung ermöglicht es, den internen Zustand eines Objekts vor externem Zugriff zu schützen und den Zugriff auf Attribute über öffentliche Methoden zu kontrollieren. Dies hilft, die Integrität und Sicherheit von Daten zu gewährleisten und die Wartbarkeit von Code zu verbessern.

## @Override Annotation

Die `@Override`-Annotation wird in Java verwendet, um anzuzeigen, dass eine Methode eine Methode in der Basisklasse überschreibt. Es ist eine optionale Annotation, die hilft, Fehler zu vermeiden, wenn eine Methode nicht korrekt überschrieben wird.

Hier ist ein Beispiel für die Verwendung der `@Override`-Annotation in Java:

```java
public class Animal {
    public void makeSound() {
        System.out.println("Animal is making a sound");
    }
}

public class Dog extends Animal {
    
    @Override
    public void makeSound() {
        System.out.println("Dog is barking");
    }
}
```

In diesem Beispiel wird die Methode `makeSound` in der Klasse `Dog` mit der `@Override`-Annotation versehen, um anzuzeigen, dass sie die Methode `makeSound` in der Basisklasse `Animal` überschreibt.

Die `@Override`-Annotation ist hilfreich, um sicherzustellen, dass eine Methode korrekt überschrieben wird, und um Fehler zu vermeiden, wenn die Signatur der Methode in der Basisklasse geändert wird.

## Zusammenfassung

- Objektorientierte Programmierung (OOP) basiert auf dem Konzept von "Objekten" und "Klassen".
- Klassen sind Baupläne für Objekte, die Daten (Attribute) und Methoden (Funktionen) enthalten.
- Vererbung ermöglicht es, Eigenschaften und Methoden einer Klasse in einer anderen Klasse wiederzuverwenden.
- Polymorphismus ermöglicht es, Objekte unterschiedlicher Klassen auf einheitliche Weise zu behandeln.
- Kapselung schützt den internen Zustand eines Objekts vor externem Zugriff.
- Die `@Override`-Annotation wird verwendet, um anzuzeigen, dass eine Methode eine Methode in der Basisklasse überschreibt.
