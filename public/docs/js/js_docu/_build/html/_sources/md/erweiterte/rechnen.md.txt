# Rechnen mit Math

Die `Math` Klasse wird verwendet, um mathematische Operationen durchzuführen.

## Math Methoden

| Methode      | Beschreibung                          | Beispiel                                  |
|--------------|---------------------------------------|-------------------------------------------|
| `abs()`      | Gibt den absoluten Wert einer Zahl zurück | `let a = -5;`<br>`let b = Math.abs(a);`    |
| `ceil()`     | Rundet eine Zahl auf die nächste Ganzzahl auf | `let a = 5.1;`<br>`let b = Math.ceil(a);`  |
| `floor()`    | Rundet eine Zahl auf die nächste Ganzzahl ab | `let a = 5.9;`<br>`let b = Math.floor(a);` |
| `round()`    | Rundet eine Zahl auf die nächste Ganzzahl | `let a = 5.5;`<br>`let b = Math.round(a);`  |
| `max()`      | Gibt die größte Zahl zurück | `let a = 5;`<br>`let b = 10;`<br>`let c = Math.max(a, b);` |
| `min()`      | Gibt die kleinste Zahl zurück | `let a = 5;`<br>`let b = 10;`<br>`let c = Math.min(a, b);` |
| `pow()`      | Gibt die Potenz einer Zahl zurück | `let a = 2;`<br>`let b = 3;`<br>`let c = Math.pow(a, b);` |
| `random()`   | Gibt eine zufällige Zahl zwischen 0 und 1 zurück | `let a = Math.random();` |
| `sqrt()`     | Gibt die Quadratwurzel einer Zahl zurück | `let a = 16;`<br>`let b = Math.sqrt(a);` |

## Konstanten

| Konstante    | Beschreibung                          | Beispiel                                  |
|--------------|---------------------------------------|-------------------------------------------|
| `PI`         | Die Kreiszahl Pi                      | `let pi = Math.PI;`                       |
| `E`          | Die Eulersche Zahl e                   | `let e = Math.E;`                         |

## Beispiele

```javascript
let a = -5;

let b = Math.abs(a);

console.log(b); // 5
```
