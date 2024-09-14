# Datetime

## Import

```python
import datetime
```

Datetime ist ein Modul, das Funktionen und Klassen zur Arbeit mit Datum und Zeit bereitstellt. Es ist in der Standardbibliothek von Python enthalten und muss daher nicht installiert werden.

| Funktion/Klasse               | Beschreibung                                                                                               | Beispiel                                        |
|-------------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| `datetime.datetime`           | Klasse, die ein Datum und eine Uhrzeit (inklusive Mikrosekunden) darstellt.                                | `datetime.datetime(2023, 8, 12, 14, 30, 0)`     |
| `datetime.date`               | Klasse, die ein Datum darstellt (Jahr, Monat, Tag).                                                        | `datetime.date(2023, 8, 12)`                    |
| `datetime.time`               | Klasse, die eine Uhrzeit darstellt (Stunde, Minute, Sekunde, Mikrosekunde).                                | `datetime.time(14, 30, 0)`                      |
| `datetime.timedelta`          | Klasse, die eine Zeitspanne (Differenz zwischen zwei Datums-/Zeitangaben) darstellt.                       | `datetime.timedelta(days=5, hours=12)`          |
| `datetime.datetime.now()`     | Gibt das aktuelle Datum und die aktuelle Uhrzeit zurück.                                                   | `datetime.datetime.now()`                       |
| `datetime.datetime.today()`   | Gibt das heutige Datum und die aktuelle Uhrzeit zurück.                                                    | `datetime.datetime.today()`                     |
| `datetime.datetime.utcnow()`  | Gibt das aktuelle UTC-Datum und die aktuelle UTC-Zeit zurück.                                              | `datetime.datetime.utcnow()`                    |
| `datetime.datetime.fromtimestamp(ts)` | Wandelt einen Zeitstempel `ts` in ein `datetime`-Objekt um.                                      | `datetime.datetime.fromtimestamp(1609459200)`   |
| `datetime.datetime.strptime(date_string, format)` | Wandelt eine Zeichenkette `date_string` in ein `datetime`-Objekt um, basierend auf dem angegebenen `format`. | `datetime.datetime.strptime('2023-08-12', '%Y-%m-%d')` |
| `datetime.datetime.strftime(format)` | Formatiert ein `datetime`-Objekt als Zeichenkette basierend auf dem angegebenen `format`.            | `datetime_object.strftime('%Y-%m-%d %H:%M:%S')` |
| `datetime.date.today()`       | Gibt das heutige Datum zurück.                                                                              | `datetime.date.today()`                         |
| `datetime.date.fromtimestamp(ts)` | Wandelt einen Zeitstempel `ts` in ein `date`-Objekt um.                                               | `datetime.date.fromtimestamp(1609459200)`       |
| `datetime.date(year, month, day)` | Erzeugt ein `date`-Objekt für das angegebene Jahr, den Monat und den Tag.                               | `datetime.date(2023, 8, 12)`                    |
| `datetime.time(hour=0, minute=0, second=0, microsecond=0)` | Erzeugt ein `time`-Objekt.                                             | `datetime.time(14, 30, 0)`                      |
| `datetime.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)` | Erzeugt ein `timedelta`-Objekt, das eine Zeitspanne darstellt. | `datetime.timedelta(days=5)`           |
| `datetime.timezone`           | Klasse, die eine Zeitzone darstellt.                                                                        | `datetime.timezone.utc`                         |
| `datetime.datetime.combine(date, time)` | Kombiniert ein `date`-Objekt und ein `time`-Objekt zu einem `datetime`-Objekt.                      | `datetime.datetime.combine(date, time)`         |
| `datetime.datetime.replace(**kwargs)` | Gibt ein `datetime`-Objekt zurück, bei dem die angegebenen Attribute ersetzt wurden.                 | `datetime_object.replace(year=2024)`            |

## Ein datetime-Objekt erstellen

dt = datetime.datetime(2023, 8, 12, 14, 30, 0)

print(dt)  # Ausgabe: 2023-08-12 14:30:00
