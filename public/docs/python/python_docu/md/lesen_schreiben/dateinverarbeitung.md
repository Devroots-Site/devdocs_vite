# Dateiverwaltung

## Übergabeparameter

- `r`: Lesen
- `w`: Schreiben
- `a`: Anhängen
- `x`: Erstellen
- `t`: Textmodus
- `b`: Binärmodus

## Lesen

### Textdatei lesen

Der Inhalt der Textdatei:

```txt
Hallo, Welt!
Wie geht es dir?
```

```python
# Datei öffnen
file = open("text.txt", "r")
print(file.read())
file.close()
```

### Lesen von Zeilen

```python
# Datei öffnen
file = open("text.txt", "r")
print(file.readline())
print(file.readline())
file.close()
```

### Lesen von Json-Dateien

Inhalt Json-Datei:

```json
{
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
```

```python
import json

# Datei öffnen
with open("data.json", "r") as file:
    data = json.load(file)
    print(data)

print(data["name"])
```

## Schreiben

### Textdatei schreiben

```python
# Datei öffnen
file = open("text.txt", "w")
file.write("Hallo, Welt!")

for i in range(10):
    file.write(f"Zahl: {i}\n")

file.close()
```

### Schreiben von Json-Dateien

```python
import json

data = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Datei öffnen
with open("data.json", "w") as file:
    json.dump(data, file)
```

> 💡 **Hinweis:** Mit `json.dumps(data, indent=4)` können Sie den Inhalt der Json-Datei formatieren.
> Mit `indent=4` wird der Inhalt eingerückt.
