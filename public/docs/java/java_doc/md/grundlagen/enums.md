# Enums

Enums sind spezielle Datentypen in Java, die eine Menge von konstanten Werten darstellen. Sie werden verwendet, um eine Gruppe von verwandten Konstanten zu definieren, die in einem Programm verwendet werden können. Enums sind nützlich, um den Code lesbarer und wartbarer zu machen, da sie es ermöglichen, eine feste Anzahl von Werten zu definieren, die in einem bestimmten Kontext verwendet werden können.

## Enum-Deklaration

Sie können ein Enum in Java mit dem `enum`-Schlüsselwort deklarieren. Hier ist ein Beispiel für die Deklaration eines Enums:

```java

public enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}
```

In diesem Beispiel wird ein Enum `Day` definiert, das die Wochentage darstellt. Jeder Wert im Enum ist eine Konstante, die durch ein Komma getrennt ist. Enums können auch Methoden, Konstruktoren und Felder enthalten, um zusätzliche Funktionalität bereitzustellen.

## Enum-Methoden

Enums können Methoden enthalten, um zusätzliche Funktionalität bereitzustellen. Hier ist ein Beispiel für eine Enum mit einer Methode:

```java

public enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY;

    public boolean isWeekend() {
        return this == SATURDAY || this == SUNDAY;
    }
}
```

In diesem Beispiel wird die Methode `isWeekend` zum Enum `Day` hinzugefügt, um zu überprüfen, ob ein bestimmter Tag ein Wochenendtag ist. Die Methode vergleicht den aktuellen Tag mit den Werten `SATURDAY` und `SUNDAY` und gibt `true` zurück, wenn der Tag ein Wochenendtag ist, andernfalls `false`.

## Enum-Konstruktoren und Felder

Enums können auch Konstruktoren und Felder enthalten, um zusätzliche Informationen zu den Enum-Konstanten bereitzustellen. Hier ist ein Beispiel für ein Enum mit Konstruktoren und Feldern:

```java

public enum Day {
    MONDAY("Monday", 1),
    TUESDAY("Tuesday", 2),
    WEDNESDAY("Wednesday", 3),
    THURSDAY("Thursday", 4),
    FRIDAY("Friday", 5),
    SATURDAY("Saturday", 6),
    SUNDAY("Sunday", 7);

    private String name;
    private int value;

    Day(String name, int value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public int getValue() {
        return value;
    }
}
```

In diesem Beispiel wird das Enum `Day` mit Konstruktoren und Feldern für den Namen und den Wert jedes Wochentags definiert. Jede Enum-Konstante wird mit einem Namen und einem Wert initialisiert, die über den Konstruktor festgelegt werden. Die Methoden `getName` und `getValue` geben den Namen und den Wert des Wochentags zurück.

Enums sind eine leistungsstarke Funktion in Java, die es ermöglicht, eine Gruppe von verwandten Konstanten zu definieren und zu verwenden. Sie sind nützlich, um den Code lesbarer und wartbarer zu machen, da sie es ermöglichen, eine feste Anzahl von Werten zu definieren, die in einem bestimmten Kontext verwendet werden können.

## Zusammenfassung

- Enums sind spezielle Datentypen in Java, die eine Menge von konstanten Werten darstellen.
- Enums werden verwendet, um eine Gruppe von verwandten Konstanten zu definieren, die in einem Programm verwendet werden können.
- Enums können Methoden, Konstruktoren und Felder enthalten, um zusätzliche Funktionalität bereitzustellen.
- Enums sind nützlich, um den Code lesbarer und wartbarer zu machen, da sie es ermöglichen, eine feste Anzahl von Werten zu definieren, die in einem bestimmten Kontext verwendet werden können.
