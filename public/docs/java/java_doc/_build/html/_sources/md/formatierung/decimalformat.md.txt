# Decimalformat

Die Klasse `DecimalFormat` ist eine Unterklasse von `NumberFormat` und wird verwendet, um Zahlen in ein bestimmtes Format zu bringen. Sie wird in der Regel verwendet, um Zahlen in ein bestimmtes Format zu bringen, z.B. um sie in einer bestimmten Anzahl von Dezimalstellen anzuzeigen.

## Beispiel Decimalfortmat

```java
import java.text.DecimalFormat;

public class Main {
    public static void main(String[] args) {
        double number = 12345.6789;
        DecimalFormat df = new DecimalFormat("#,###.00");
        String formatted = df.format(number);
        System.out.println(formatted); // Output: 12,345.68
    }
}
```

In diesem Beispiel wird die Zahl `12345.6789` in das Format `#,###.00` gebracht, was bedeutet, dass sie mit Tausendertrennzeichen und zwei Dezimalstellen angezeigt wird.

## Platzhalter

Die Klasse `DecimalFormat` verwendet spezielle Platzhalter, um das Format der Zahlen zu definieren. Einige der häufig verwendeten Platzhalter sind:

- `0`: Eine Ziffer (wird als `0` angezeigt, wenn keine Ziffer vorhanden ist).
- `#`: Eine Ziffer (wird nicht angezeigt, wenn keine Ziffer vorhanden ist).
- `,`: Tausendertrennzeichen.
- `.`: Dezimaltrennzeichen.
- `%`: Prozentzeichen.
- `E0`: Wissenschaftliche Notation.

## Weitere Beispiele

```java
import java.text.DecimalFormat;

public class Main {
    public static void main(String[] args) {
        double number = 12345.6789;
        DecimalFormat df1 = new DecimalFormat("#,###.00");
        DecimalFormat df2 = new DecimalFormat("0.00");
        DecimalFormat df3 = new DecimalFormat("0.##");
        DecimalFormat df4 = new DecimalFormat("#%");
        DecimalFormat df5 = new DecimalFormat("0.###E0");

        System.out.println(df1.format(number)); // Output: 12,345.68
        System.out.println(df2.format(number)); // Output: 12345.68
        System.out.println(df3.format(number)); // Output: 12345.68
        System.out.println(df4.format(number)); // Output: 1234568%
        System.out.println(df5.format(number)); // Output: 1.235E4
    }
}
```

In diesem Beispiel werden verschiedene Formate für die Zahl `12345.6789` verwendet, z.B. `#,###.00` für Tausendertrennzeichen und zwei Dezimalstellen, `0.00` für zwei Dezimalstellen, `0.##` für eine oder zwei Dezimalstellen, `#%` für Prozentzeichen und `0.###E0` für wissenschaftliche Notation.

## Ausnahmen

Die Klasse `DecimalFormat` kann eine `ParseException` werfen, wenn das Format der Zahl nicht korrekt ist. Diese Ausnahme muss behandelt werden, z.B. durch das `try-catch`-Statement.

```java
import java.text.DecimalFormat;
import java.text.ParseException;

public class Main {
    public static void main(String[] args) {
        DecimalFormat df = new DecimalFormat("#,###.00");
        String number = "12,345.6789";

        try {
            Number n = df.parse(number);
            System.out.println(n); // Output: 12345.68
        } catch (ParseException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
```

In diesem Beispiel wird die Zeichenkette `12,345.6789` in das Format `#,###.00` gebracht und in eine Zahl umgewandelt. Wenn das Format der Zahl nicht korrekt ist, wird eine `ParseException` geworfen und behandelt.

## Weitere Informationen

- [Oracle Java DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html)
- [Java DecimalFormat Tutorial](https://www.baeldung.com/java-decimalformat)
- [Java NumberFormat Tutorial](https://www.baeldung.com/java-numberformat)
- [Java String Format Tutorial](https://www.baeldung.com/java-string-format)
