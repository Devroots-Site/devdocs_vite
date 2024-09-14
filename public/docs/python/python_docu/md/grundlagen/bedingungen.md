# Bedinungen und Schleifen

## Bedingungen

In Python können Sie Bedingungen verwenden, um Entscheidungen in Ihrem Code zu treffen. Die häufigsten Bedingungen in Python sind:

- `if`: Führt Code aus, wenn eine Bedingung wahr ist
- `else`: Führt Code aus, wenn die Bedingung falsch ist
- `elif`: Führt Code aus, wenn eine andere Bedingung wahr ist

Hier ist ein einfaches Beispiel für eine Bedingung in Python:

```python
x = 5

if x > 0:
    print("x ist positiv")
elif x < 0:
    print("x ist negativ")
else:
    print("x ist null")
```

In diesem Beispiel wird überprüft, ob die Variable `x` positiv, negativ oder null ist, und entsprechend eine Ausgabe generiert.

## Vergleichsoperatoren

In Python können Sie Vergleichsoperatoren verwenden, um Werte zu vergleichen. Einige der häufigsten Vergleichsoperatoren sind:

- `==`: Gleich
- `!=`: Ungleich
- `<`: Kleiner als
- `>`: Größer als
- `<=`: Kleiner oder gleich
- `>=`: Größer oder gleich

Hier sind einige Beispiele für die Verwendung von Vergleichsoperatoren:

```python

x = 5
y = 10

if x == y:
    print("x ist gleich y")
elif x != y:
    print("x ist ungleich y")
elif x < y:
    print("x ist kleiner als y")
elif x > y:
    print("x ist größer als y")
elif x <= y:
    print("x ist kleiner oder gleich y")
elif x >= y:
    print("x ist größer oder gleich y")
```

In diesem Beispiel werden die Variablen `x` und `y` miteinander verglichen und entsprechend eine Ausgabe generiert.

## Logische Operatoren

In Python können Sie logische Operatoren verwenden, um mehrere Bedingungen zu kombinieren. Einige der häufigsten logischen Operatoren sind:

- `and`: Führt aus, wenn beide Bedingungen wahr sind
- `or`: Führt aus, wenn mindestens eine Bedingung wahr ist
- `not`: Führt aus, wenn die Bedingung falsch ist

Hier sind einige Beispiele für die Verwendung von logischen Operatoren:

```python
x = 5
y = 10

if x > 0 and y > 0:
    print("x und y sind positiv")

if x > 0 or y > 0:
    print("x oder y ist positiv")

if not x < 0:
    print("x ist nicht negativ")
```

In diesem Beispiel werden die Variablen `x` und `y` miteinander verglichen und entsprechend eine Ausgabe generiert.

### in Operatoren

In Python können Sie den `in`-Operator verwenden, um zu überprüfen, ob ein Wert in einer Liste, einem Tupel oder einem Dictionary vorhanden ist. Hier sind einige Beispiele für die Verwendung des `in`-Operators:

```python
# Liste
numbers = [1, 2, 3, 4, 5]

if 3 in numbers:
    print("3 ist in der Liste")
    
# Tupel
colors = ("rot", "grün", "blau")

if "gelb" not in colors:
    print("gelb ist nicht in dem Tupel")

# Dictionary

capitals = {
    "Hessen": "Wiesbaden",
    "Saarland": "Saarbrücken",
    "Baden-Württemberg": "Stuttgart",
    "Rheinland-Pfalz": "Mainz",
    "Nordrhein-Westfalen": "Düsseldorf"
}

if "Hessen" in capitals:
    print("Hessen ist ein Bundesland")
```

In diesem Beispiel wird überprüft, ob ein Wert in einer Liste, einem Tupel oder einem Dictionary vorhanden ist, und entsprechend eine Ausgabe generiert.

## Schleifen

In Python können Sie Schleifen verwenden, um Code mehrmals auszuführen. Die häufigsten Schleifen in Python sind:

- `for`: Führt Code für jedes Element in einer Sequenz aus
- `while`: Führt Code aus, solange eine Bedingung wahr ist

Hier ist ein einfaches Beispiel für eine `for`-Schleife in Python:

```python

for i in range(5): # Hier wird nur der Endwert angegeben
    print(i)

for i in range (1, 6): # Hier wird der Startwert und der Endwert angegeben
    print(i) 

for i in range(1, 10, 2): # Hier wird der Startwert, der Endwert und der Schritt angegeben
    print(i)

for i in range(10, 0, -1): # Hier wird der Startwert, der Endwert und der Schritt angegeben
    print(i)
```

In diesem Beispiel wird eine `for`-Schleife verwendet, um die Zahlen von 0 bis 4 auszugeben.

Hier ist ein einfaches Beispiel für eine `while`-Schleife in Python:

```python
i = 0

while i < 5:
    print(i)
    i += 1
```

In diesem Beispiel wird eine `while`-Schleife verwendet, um die Zahlen von 0 bis 4 auszugeben.

## Schleifensteuerung

In Python können Sie die Schleifensteuerung verwenden, um den Ablauf einer Schleife zu steuern. Einige der häufigsten Schleifensteuerungsanweisungen sind:

- `break`: Beendet die Schleife vorzeitig
- `continue`: Überspringt den Rest der Schleife und beginnt mit dem nächsten Durchlauf
- `pass`: Führt keine Aktion aus

Hier sind einige Beispiele für die Verwendung von Schleifensteuerungsanweisungen:

```python
for i in range(10):
    if i == 5:
        break
    print(i)

for i in range(10):
    if i == 5:
        continue
    print(i)

for i in range(10):
    pass
```
