# Variablen

Variablen sind Speicherplätze für Daten in einem Programm. Sie werden verwendet, um Werte zu speichern, auf die im Programm zugegriffen werden kann. In Java müssen Variablen deklariert werden, bevor sie verwendet werden können. Die Deklaration einer Variablen gibt an, welchen Datentyp sie hat und welchen Namen sie hat. Hier sind einige Beispiele für die Deklaration von Variablen in Java:

```java

// Ganzzahlen
int zahl = 42;  // von -2.147.483.648 bis 2.147.483.647
double gleitkommazahl = 3.14; // von 4.9E-324 bis 1.7976931348623157E308
float gleitkommazahl = 3.14f; // von 1.4E-45 bis 3.4028235E38
long langeZahl = 1234567890L; // von -9.223.372.036.854.775.808 bis 9.223.372.036.854.775.807
short kurzeZahl = 123; // von -32.768 bis 32.767
byte byteZahl = 123; // von -128 bis 127
char zeichen = 'A'; // ein einzelnes Zeichen
string text = "Hallo, Welt!";
boolean wahrheitswert = true;

```

In diesem Beispiel werden verschiedene Datentypen in Java verwendet, um Variablen zu deklarieren. Jeder Datentyp hat eine bestimmte Größe und einen bestimmten Wertebereich, den er speichern kann. Es ist wichtig, den richtigen Datentyp für die zu speichernden Daten zu wählen, um Speicherplatz zu sparen und die Genauigkeit zu gewährleisten.

Variablen können auch neu zugewiesen werden, indem ihnen ein neuer Wert zugewiesen wird. Hier ist ein Beispiel:

```java
int zahl = 42;
zahl = 24;
```

## Arrays

Arrays sind eine spezielle Art von Variablen, die mehrere Werte desselben Datentyps speichern können. Sie werden verwendet, um eine Sammlung von Werten zu speichern, auf die über einen Index zugegriffen werden kann. Hier ist ein Beispiel für die Deklaration eines Arrays in Java:

```java
int[] zahlen = {1, 2, 3, 4, 5};

oder

int[] zahlen = new int[5];
zahlen[0] = 1;
zahlen[1] = 2;
zahlen[2] = 3;
zahlen[3] = 4;
zahlen[4] = 5;
```

In diesem Beispiel wird ein Array mit den Werten `1, 2, 3, 4, 5` deklariert. Der Index eines Arrays beginnt bei 0, d.h. der erste Wert hat den Index 0, der zweite Wert den Index 1 usw. Sie können auf die Werte eines Arrays zugreifen, indem Sie den Index in eckigen Klammern angeben, z.B. `zahlen[0]` gibt den Wert `1` zurück.

Arrays können auch mehrdimensional sein, d.h. sie können mehrere Dimensionen haben. Hier ist ein Beispiel für ein zweidimensionales Array in Java:

```java
int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
```

In diesem Beispiel wird eine 3x3-Matrix deklariert, die die Werte `1, 2, 3, 4, 5, 6, 7, 8, 9` enthält. Sie können auf die Werte der Matrix zugreifen, indem Sie den Index der Zeile und den Index der Spalte angeben, z.B. `matrix[0][0]` gibt den Wert `1` zurück.

Variablen und Arrays sind grundlegende Konzepte in Java, die in fast jedem Programm verwendet werden. Es ist wichtig, sie zu verstehen, um effektiv mit Java zu programmieren.

## Zusammenfassung

- Variablen sind Speicherplätze für Daten in einem Programm.
- Variablen müssen deklariert werden, bevor sie verwendet werden können.
- Datentypen geben an, welche Art von Daten eine Variable speichern kann.
- Arrays sind eine spezielle Art von Variablen, die mehrere Werte desselben Datentyps speichern können.
- Arrays können mehrdimensional sein, d.h. sie können mehrere Dimensionen haben.
