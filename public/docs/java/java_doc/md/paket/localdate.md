# LocalDate

`LocalDate` ist eine Klasse, die zur Darstellung von Daten ohne Zeitangabe verwendet wird. Sie ist Teil des `java.time`-Pakets, das in Java 8 eingeführt wurde. `LocalDate` speichert das Datum in Form von Jahr, Monat und Tag. In diesem Tutorial werden wir die Verwendung von `LocalDate` in Java mit Beispielen erläutern. Der Vorteil hier ist das man nicht mit 0-basierten Monaten arbeiten muss.

## Erstellen eines `LocalDate`-Objekts

Ein `LocalDate`-Objekt kann auf verschiedene Weisen erstellt werden:

```java
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        // Aktuelles Datum
        LocalDate currentDate = LocalDate.now();
        System.out.println("Current Date: " + currentDate);

        // Ein bestimmtes Datum
        LocalDate specificDate = LocalDate.of(2021, 12, 31);
        System.out.println("Specific Date: " + specificDate);

        // Datum aus einem String
        LocalDate parsedDate = LocalDate.parse("2021-12-31");
        System.out.println("Parsed Date: " + parsedDate);
    }
}
```

In diesem Beispiel wird ein `LocalDate`-Objekt für das aktuelle Datum, ein bestimmtes Datum (31. Dezember 2021) und ein Datum aus einem String (`"2021-12-31"`) erstellt.

## Arbeiten mit `LocalDate`

`LocalDate` bietet verschiedene Methoden zum Arbeiten mit Datumswerten. Hier sind einige Beispiele:

```java
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        LocalDate date = LocalDate.of(2021, 12, 31);

        // Datum abrufen
        int year = date.getYear();
        int month = date.getMonthValue();
        int day = date.getDayOfMonth();

        System.out.println("Year: " + year);
        System.out.println("Month: " + month);
        System.out.println("Day: " + day);

        // Datum ändern
        LocalDate newDate = date.plusDays(7);
        System.out.println("New Date: " + newDate);
    }
}
```

In diesem Beispiel wird das Jahr, der Monat und der Tag eines `LocalDate`-Objekts abgerufen und ein neues Datum durch Hinzufügen von 7 Tagen erstellt.

## Vergleichen von `LocalDate`-Objekten

`LocalDate`-Objekte können mithilfe der `compareTo()`-Methode verglichen werden. Hier ist ein Beispiel:

```java
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2021, 12, 31);
        LocalDate date2 = LocalDate.of(2022, 1, 1);

        if (date1.compareTo(date2) < 0) {
            System.out.println(date1 + " is before " + date2);
        } else if (date1.compareTo(date2) > 0) {
            System.out.println(date1 + " is after " + date2);
        } else {
            System.out.println(date1 + " is equal to " + date2);
        }
    }
}
```

In diesem Beispiel werden zwei `LocalDate`-Objekte verglichen, um festzustellen, ob das erste Datum vor, nach oder gleich dem zweiten Datum liegt.

## isBefore(), isAfter() und isEqual()

`LocalDate` bietet auch die Methoden `isBefore()`, `isAfter()` und `isEqual()` zum Vergleichen von Datumswerten. Hier ist ein Beispiel:

```java
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2021, 12, 31);
        LocalDate date2 = LocalDate.of(2022, 1, 1);

        if (date1.isBefore(date2)) {
            System.out.println(date1 + " is before " + date2);
        }

        if (date1.isAfter(date2)) {
            System.out.println(date1 + " is after " + date2);
        }

        if (date1.isEqual(date2)) {
            System.out.println(date1 + " is equal to " + date2);
        }
    }
}
```

In diesem Beispiel werden die Methoden `isBefore()`, `isAfter()` und `isEqual()` verwendet, um die Beziehung zwischen zwei `LocalDate`-Objekten zu überprüfen.

## Rechnen mit `LocalDate`

`LocalDate` bietet Methoden zum Hinzufügen oder Subtrahieren von Tagen, Monaten oder Jahren. Hier sind einige Beispiele:

```java
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        LocalDate date = LocalDate.of(2021, 12, 31);

        // Tage hinzufügen
        LocalDate plusDays = date.plusDays(7);
        System.out.println("Plus Days: " + plusDays);

        // Monate hinzufügen
        LocalDate plusMonths = date.plusMonths(1);
        System.out.println("Plus Months: " + plusMonths);

        // Jahre hinzufügen
        LocalDate plusYears = date.plusYears(1);
        System.out.println("Plus Years: " + plusYears);
    }
}
```

In diesem Beispiel werden 7 Tage, 1 Monat und 1 Jahr zu einem `LocalDate`-Objekt hinzugefügt.

## Unterschiede ausrechnen

`LocalDate` bietet die Methode `until()` zum Berechnen des Unterschieds zwischen zwei Datumswerten. Hier ist ein Beispiel:

```java

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Main {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2021, 12, 31);
        LocalDate date2 = LocalDate.of(2022, 1, 1);

        long days = date1.until(date2, ChronoUnit.DAYS);
        long months = date1.until(date2, ChronoUnit.MONTHS);
        long years = date1.until(date2, ChronoUnit.YEARS);

        System.out.println("Days: " + days);
        System.out.println("Months: " + months);
        System.out.println("Years: " + years);
    }
}
```

In diesem Beispiel werden die Anzahl der Tage, Monate und Jahre zwischen zwei `LocalDate`-Objekten berechnet.
