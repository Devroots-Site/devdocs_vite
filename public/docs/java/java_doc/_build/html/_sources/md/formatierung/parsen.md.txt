# Parsen

In diesem Kapitel wird gezeigt, wie man daten in Java parsen kann.

## Parsen von Zeichenketten

Das Parsen von Zeichenketten in Java kann mit den folgenden Methoden durchgeführt werden:

- `Integer.parseInt()`: Wandelt eine Zeichenkette in eine Ganzzahl um.
- `Double.parseDouble()`: Wandelt eine Zeichenkette in eine Gleitkommazahl um.
- `Boolean.parseBoolean()`: Wandelt eine Zeichenkette in einen booleschen Wert um.

```java

public class Main {
    public static void main(String[] args) {
        String number1 = "123";
        String number2 = "45.67";
        String bool = "true";

        int num1 = Integer.parseInt(number1);
        double num2 = Double.parseDouble(number2);
        boolean b = Boolean.parseBoolean(bool);

        System.out.println(num1); // Output: 123
        System.out.println(num2); // Output: 45.67
        System.out.println(b); // Output: true
    }
}
```
