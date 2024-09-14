# Listen & Co

In Python gibt es verschiedene Arten von Datentypen, die mehrere Werte speichern können. Einige der häufigsten Datentypen in Python sind:

- Listen: Eine Liste von Elementen
- Tupel: Eine geordnete Sammlung von Elementen
- Dictionaries: Eine Sammlung von Schlüssel-Wert-Paaren
- Sets: Eine Sammlung von eindeutigen Elementen
- Frosensets: Eine unveränderliche Menge von eindeutigen Elementen

## Listen und Tupel

### Definieren von Listen und Tupeln

```python
# Liste
liste = [1, 2, 3, 4, 5]

# Tupel
tupel = (1, 2, 3, 4, 5)
```

### Auf Elemente zugreifen

```python
# Liste
print(liste[0]) # 1

# Tupel
print(tupel[0]) # 1
```

### Elemente hinzufügen

```python
# Liste
liste.append(6)

# Tupel
tupel.append(6) # TypeError: 'tuple' object has no attribute 'append'
```

### Methoden für Listen

```python
# Liste
liste.append(6) # Fügt ein Element am Ende der Liste hinzu
liste.insert(0, 0) # Fügt ein Element an einer bestimmten Position in der Liste ein
liste.remove(3) # Entfernt das erste Vorkommen eines Elements aus der Liste
liste.pop() # Entfernt das letzte Element aus der Liste
liste.clear() # Entfernt alle Elemente aus der Liste
liste.index(2) # Gibt den Index des ersten Vorkommens eines Elements zurück
liste.count(2) # Gibt die Anzahl der Vorkommen eines Elements zurück
liste.sort() # Sortiert die Elemente in der Liste
liste.reverse() # Dreht die Reihenfolge der Elemente in der Liste um
```

## Dictionaries

### Definieren von Dictionaries

```python
# Dictionary
dictionary = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
```

### Auf Elemente zugreifen von Dictionarys

```python
print(dictionary["name"]) # Alice
print(dictionary["age"]) # 25
print(dictionary["city"]) # New York
```

### Elemente hinzufügen von Dictionarys

```python
dictionary["email"] = "test@gmail.com"

```

### Methoden für Dictionaries

```python
dictionary.get("name") # Gibt den Wert des Schlüssels zurück
dictionary.keys() # Gibt eine Liste der Schlüssel im Dictionary zurück
dictionary.values() # Gibt eine Liste der Werte im Dictionary zurück
dictionary.items() # Gibt eine Liste der Schlüssel-Wert-Paare im Dictionary zurück
dictionary.pop("name") # Entfernt den Schlüssel und gibt den Wert zurück
dictionary.clear() # Entfernt alle Elemente aus dem Dictionary
```

## Sets

### Definieren von Sets

```python
# Set
set = {1, 2, 3, 4, 5}
```

### Methoden für Sets

```python
set.add(6) # Fügt ein Element zum Set hinzu
set.remove(3) # Entfernt ein Element aus dem Set
set.discard(3) # Entfernt ein Element aus dem Set, wenn es vorhanden ist
set.pop() # Entfernt ein zufälliges Element aus dem Set
set.clear() # Entfernt alle Elemente aus dem Set
```

## Iterieren über ein Dictionary in Python

In Python gibt es mehrere Möglichkeiten, über ein Dictionary zu iterieren. Hier ist ein Beispiel, bei dem die Hauptstädte deutscher Bundesländer in einem Dictionary gespeichert sind:

```python
capitals = {
    "Hessen": "Wiesbaden",
    "Saarland": "Saarbrücken",
    "Baden-Württemberg": "Stuttgart",
    "Rheinland-Pfalz": "Mainz",
    "Nordrhein-Westfalen": "Düsseldorf"
}
```

### Iterieren über Schlüssel

```python
for state in capitals:
    print(state)
```

### Iterieren über Werte

```python
for capital in capitals.values() // oder capitals.keys():
    print(capital)

for key in capitals.keys():
    print(key , ":", capitals[key])
```

### Iterieren über Schlüssel und Werte

```python
for state, capital in capitals.items():
    print(f"Die Hauptstadt von {state} ist {capital}")
```
