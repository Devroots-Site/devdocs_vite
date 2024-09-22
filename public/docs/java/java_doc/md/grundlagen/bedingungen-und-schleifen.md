# Bedingungen und Schleifen

## Bedingungen

Bedingungen werden verwendet, um Entscheidungen in einem Programm zu treffen. Sie ermöglichen es, Codeblöcke nur dann auszuführen, wenn eine bestimmte Bedingung erfüllt ist. In Java gibt es verschiedene Arten von Bedingungen, darunter `if`, `else if` und `else`.

### `if`-Anweisung

Die `if`-Anweisung wird verwendet, um einen Codeblock auszuführen, wenn eine Bedingung wahr ist. Hier ist ein Beispiel:

```java
int zahl = 42;

if (zahl > 0) {
    System.out.println("Die Zahl ist positiv.");
}
```

In diesem Beispiel wird überprüft, ob die Zahl größer als 0 ist, und wenn dies der Fall ist, wird die Meldung "Die Zahl ist positiv." ausgegeben.

### `else`-Anweisung

Die `else`-Anweisung wird verwendet, um einen alternativen Codeblock auszuführen, wenn die Bedingung der `if`-Anweisung nicht erfüllt ist. Hier ist ein Beispiel:

```java
int zahl = -42;

if (zahl > 0) {
    System.out.println("Die Zahl ist positiv.");
} else {
    System.out.println("Die Zahl ist negativ.");
}
```

In diesem Beispiel wird überprüft, ob die Zahl größer als 0 ist, und wenn dies nicht der Fall ist, wird die Meldung "Die Zahl ist negativ." ausgegeben.

### `else if`-Anweisung

Die `else if`-Anweisung wird verwendet, um mehrere Bedingungen in einer `if`-`else`-Anweisung zu überprüfen. Hier ist ein Beispiel:

```java
int zahl = 0;

if (zahl > 0) {
    System.out.println("Die Zahl ist positiv.");
} else if (zahl < 0) {
    System.out.println("Die Zahl ist negativ.");
} else {
    System.out.println("Die Zahl ist null.");
}
```

In diesem Beispiel wird überprüft, ob die Zahl größer als 0 ist, kleiner als 0 ist oder gleich 0 ist, und die entsprechende Meldung wird ausgegeben.

## Switch-Anweisung

Die `switch`-Anweisung wird verwendet, um zwischen verschiedenen Fällen zu unterscheiden und entsprechende Aktionen auszuführen. Hier ist ein Beispiel:

```java
int tag = 3;
String wochentag;

switch (tag) {
    case 1:
        wochentag = "Montag";
        break;
    case 2:
        wochentag = "Dienstag";
        break;
    case 3:
        wochentag = "Mittwoch";
        break;
    case 4:
        wochentag = "Donnerstag";
        break;
    case 5:
        wochentag = "Freitag";
        break;
    case 6:
        wochentag = "Samstag";
        break;
    case 7:
        wochentag = "Sonntag";
        break;
    default:
        wochentag = "Ungültiger Tag";
        break;
}

System.out.println("Heute ist " + wochentag);
```

In diesem Beispiel wird überprüft, welcher Tag der Woche es ist, und die entsprechende Meldung wird ausgegeben.

## Schleifen

Schleifen werden verwendet, um Codeblöcke mehrmals auszuführen. Es gibt verschiedene Arten von Schleifen in Java, darunter `for`, `while` und `do-while`.

### `for`-Schleife

Die `for`-Schleife wird verwendet, um einen Codeblock eine bestimmte Anzahl von Malen auszuführen. Hier ist ein Beispiel:

```java
for (int i = 0; i < 5; i++) {
    System.out.println("Zähler: " + i);
}

oder 

int zahlen = {1, 2, 3, 4, 5};

for (int zahl : zahlen) {
    System.out.println("Zahl: " + zahl);
}
```

In diesem Beispiel wird der Codeblock fünfmal ausgeführt, und der Zähler wird von 0 bis 4 ausgegeben.

Beim 2. Beispiel wird der Codeblock für jedes Element im Array `zahlen` ausgeführt und die Zahl wird ausgegeben.

### `while`-Schleife

Die `while`-Schleife wird verwendet, um einen Codeblock so lange auszuführen, wie eine Bedingung wahr ist. Hier ist ein Beispiel:

```java

int i = 0;

while (i < 5) {
    System.out.println("Zähler: " + i);
    i++;
}
```

In diesem Beispiel wird der Codeblock so lange ausgeführt, wie der Zähler kleiner als 5 ist, und der Zähler wird von 0 bis 4 ausgegeben.

### `do-while`-Schleife

Die `do-while`-Schleife wird verwendet, um einen Codeblock mindestens einmal auszuführen und dann so lange auszuführen, wie eine Bedingung wahr ist. Hier ist ein Beispiel:

```java
int i = 0;

do {
    System.out.println("Zähler: " + i);
    i++;
} while (i < 5);
```

In diesem Beispiel wird der Codeblock mindestens einmal ausgeführt und dann so lange ausgeführt, wie der Zähler kleiner als 5 ist, und der Zähler wird von 0 bis 4 ausgegeben.

Schleifen sind nützliche Konstrukte in Java, um wiederholte Aktionen auszuführen und Entscheidungen zu treffen. Sie ermöglichen es, Code effizienter zu schreiben und die Wiederholung von Code zu vermeiden.

## Zusammenfassung

- Bedingungen werden verwendet, um Entscheidungen in einem Programm zu treffen.
- Die `if`-Anweisung wird verwendet, um einen Codeblock auszuführen, wenn eine Bedingung wahr ist.
- Die `else`-Anweisung wird verwendet, um einen alternativen Codeblock auszuführen, wenn die Bedingung der `if`-Anweisung nicht erfüllt ist.
- Die `else if`-Anweisung wird verwendet, um mehrere Bedingungen in einer `if`-`else`-Anweisung zu überprüfen.
- Die `switch`-Anweisung wird verwendet, um zwischen verschiedenen Fällen zu unterscheiden und entsprechende Aktionen auszuführen.
- Schleifen werden verwendet, um Codeblöcke mehrmals auszuführen.
- Die `for`-Schleife wird verwendet, um einen Codeblock eine bestimmte Anzahl von Malen auszuführen.
- Die `while`-Schleife wird verwendet, um einen Codeblock so lange auszuführen, wie eine Bedingung wahr ist.
- Die `do-while`-Schleife wird verwendet, um einen Codeblock mindestens einmal auszuführen und dann so lange auszuführen, wie eine Bedingung wahr ist.
