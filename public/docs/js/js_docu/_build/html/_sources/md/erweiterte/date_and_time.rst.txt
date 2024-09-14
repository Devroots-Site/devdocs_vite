# Datum und Zeit

In JavaScript gibt es das `Date` Objekt, das verwendet wird, um Datum und Zeit zu manipulieren.

```javascript

let date = new Date();

console.log(date); // 2021-07-01T10:00:00.000Z

```

Das Standart format ist `YYYY-MM-DDTHH:MM:SS.MMMZ`.

## Datum und Zeit ausgeben

```javascript

let date = new Date();

console.log(date.getFullYear()); // 2021
console.log(date.getMonth()); // 6
console.log(date.getDate()); // 1
console.log(date.getHours()); // 10
console.log(date.getMinutes()); // 0
console.log(date.getSeconds()); // 0
console.log(date.getMilliseconds()); // 0

```

## Datum und Zeit setzen

```javascript

let date = new Date();

date.setFullYear(2022);

console.log(date.getFullYear()); // 2022

date.setMonth(11);

console.log(date.getMonth()); // 11
// usw

```

## Datum aus String erstellen

```javascript

let date = new Date('2021-07-01');

console.log(date); // 2021-07-01T00:00:00.000Z

let deutschesDatum = new Date('01.07.2021');
console.log(deutschesDatum); // 2021-07-01T00:00:00.000Z

```

## Datum und Zeit formatieren

```javascript

let date = new Date();

console.log(date.toDateString()); // Thu Jul 01 2021
console.log(date.toTimeString()); // 12:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)
console.log(date.toISOString()); // 2021-07-01T10:00:00.000Z

```

## Formatierung nach deutschem Standard

```javascript

let date = new Date();

let options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};

console.log(toLocaleString('de-DE' )); // 01.07.2021, 12:00:00



console.log(date.toLocaleString('de-DE', options)); // 01.07.2021, 12:00:00

```

Das `toLocaleString` Methode nimmt als ersten Parameter die Sprache und als zweiten Parameter die Optionen. Die Optionen sind optional.
Das 1 de DE steht für die Sprache und das 2 de DE steht für die Region.

## Methoden

| Methode            | Beschreibung                                                     | Beispiel                                                                 |
|--------------------|------------------------------------------------------------------|--------------------------------------------------------------------------|
| `getTime()`        | Gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 zurück | `let date = new Date();`<br>`let time = date.getTime();`                 |
| `getFullYear()`    | Gibt das Jahr eines Datums als vierstellige Zahl zurück          | `let date = new Date();`<br>`let year = date.getFullYear();`             |
| `getMonth()`       | Gibt den Monat eines Datums als Zahl zurück                      | `let date = new Date();`<br>`let month = date.getMonth();`               |
| `getDate()`        | Gibt den Tag eines Datums als Zahl zurück                        | `let date = new Date();`<br>`let day = date.getDate();`                  |
| `getHours()`       | Gibt die Stunden eines Datums als Zahl zurück                    | `let date = new Date();`<br>`let hours = date.getHours();`               |
| `getMinutes()`     | Gibt die Minuten eines Datums als Zahl zurück                    | `let date = new Date();`<br>`let minutes = date.getMinutes();`           |
| `getSeconds()`     | Gibt die Sekunden eines Datums als Zahl zurück                   | `let date = new Date();`<br>`let seconds = date.getSeconds();`           |
| `getMilliseconds()`| Gibt die Millisekunden eines Datums als Zahl zurück              | `let date = new Date();`<br>`let milliseconds = date.getMilliseconds();` |
| `getDay()`         | Gibt den Wochentag eines Datums als Zahl zurück                  | `let date = new Date();`<br>`let day = date.getDay();`                   |
| `toDateString()`   | Gibt das Datum eines Datums als lesbares Datum zurück            | `let date = new Date();`<br>`let dateStr = date.toDateString();`         |

> 💡 **Hinweis** bei gehts wird immer 0 als Startwert verwendet!

## Rechnen mit Datum und Zeit

```javascript

let date = new Date();

date.setFullYear(date.getFullYear() + 1);

console.log(date.getFullYear()); // 2022

date.setMonth(date.getMonth() + 1);

console.log(date.getMonth()); // 7

let termin = new Date('2024-08-25');
let heute = new Date('2024-07-01');

let diff = termin - heute;

console.log(diff); // 4560000000 Millisekunden = 50 Tage = 1 Monat und 19 Tage

```

## Vergleichen von Datum und Zeit

```javascript

let date1 = new Date('2021-07-01');
let date2 = new Date('2021-07-02');

console.log(date1 < date2); // true

```
