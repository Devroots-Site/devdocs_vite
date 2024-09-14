# Sequentielle Datentypen & Listen Manipulieren

In Python gibt es verschiedene Arten von Datentypen, die mehrere Werte speichern können. Einige der häufigsten Datentypen in Python sind:

| Befehl                            | Beschreibung                                                                                 | Ergebnis/Bedeutung                                         |
|-----------------------------------|----------------------------------------------------------------------------------------------|------------------------------------------------------------|
| `len(variable_or_text)`            | Liefert die Länge des Textes oder der Liste zurück.                                          | Gibt die Anzahl der Elemente in einem String oder einer Liste zurück. |
| `a[position]`                      | Liefert das Element (Buchstabe/Zahl) an der angegebenen Position zurück.                    | Greift auf das Element an der angegebenen Position zu.       |
| `a[-position]`                     | Liefert das Element an der angegebenen Position, gezählt vom Ende des Strings oder der Liste.| Greift auf das Element von hinten gezählt zu.               |
| `a[startpos:endpos]`               | Liefert einen Teilbereich von `startpos` bis `endpos` (nicht einschließlich `endpos`) zurück.| Extrahiert einen Abschnitt eines Strings oder einer Liste.  |
| `del a[2]`                         | Löscht das Element an der Position 2.                                                        | Entfernt das 3. Element in der Liste (0-basierte Indizierung). |
| `del(a[2])`                        | Alternative Schreibweise zum Löschen des Elements an Position 2.                             | Funktioniert wie `del a[2]`.                                |
| `a.index(variable_or_text)`        | Liefert die Position des übergebenen Wertes zurück.                                          | Gibt den Index des ersten Vorkommens des Wertes zurück.    |
| `a.split("-")`                     | Teilt den String `a` an jedem Vorkommen des Zeichens `"-"`.                                 | Gibt eine Liste zurück, aufgeteilt nach dem Trennzeichen.   |
| `min(parameter)`                   | Liefert den kleinsten Wert in einer Liste oder einem String zurück.                         | Gibt das kleinste Element (numerisch oder alphabetisch) zurück. |
| `max(parameter)`                   | Liefert den größten Wert in einer Liste oder einem String zurück.                           | Gibt das größte Element (numerisch oder alphabetisch) zurück. |
| `sum(parameter)`                   | Liefert die Summe aller Elemente in einer Liste zurück.                                     | Summiert alle numerischen Werte in einer Liste.             |
| `sorted(parameter)`                | Liefert die Liste sortiert zurück, ohne das Original zu verändern.                          | Gibt eine neue sortierte Liste zurück.                      |
| `parameter.sort()`                 | Sortiert die Original-Liste.                                                                 | Sortiert die Liste in-place, verändert also das Original.   |
| `range(startindex, stopindex)`     | Liefert eine Liste mit Zahlen von `startindex` bis `stopindex-1`.                            | Erzeugt eine Sequenz von Zahlen, nützlich für Schleifen.    |
| `a.append(Variable)`               | Fügt der Liste `a` ein Element hinzu.                                                       | Das Element wird am Ende der Liste eingefügt.               |
| `a.insert(2, Variable)`            | Fügt an der Stelle 2 ein Element in die Liste `a` ein.                                      | Das Element wird an der angegebenen Position eingefügt.     |
| `a.remove(Variable)`               | Löscht das erste Vorkommen der angegebenen Variable aus der Liste.                          | Entfernt das Element aus der Liste.                         |
| `a.pop()`                          | Löscht das letzte Element aus der Liste.                                                    | Entfernt und gibt das letzte Element der Liste zurück.      |
| `a.pop(2)`                         | Löscht das Element an der Position 2.                                                       | Entfernt und gibt das Element an der angegebenen Position zurück. |
| `a.clear()`                        | Löscht alle Elemente aus der Liste.                                                         | Die Liste ist danach leer.                                  |
| `a.extend(b)`                      | Fügt die Liste `b` an die Liste `a` an.                                                     | Erweitert die Liste `a` um die Elemente von `b`.            |
| `a.reverse()`                      | Dreht die Liste `a` um.                                                                     | Kehrt die Reihenfolge der Elemente in der Liste um.         |
| `a.sort()`                         | Sortiert die Liste `a` aufsteigend.                                                         | Sortiert die Liste in aufsteigender Reihenfolge.            |
| `a.sort(reverse=True)`             | Sortiert die Liste `a` absteigend.                                                          | Sortiert die Liste in absteigender Reihenfolge.             |
| `a.count(Variable)`                | Zählt, wie oft die angegebene Variable in der Liste `a` vorkommt.                           | Gibt die Häufigkeit des Elements in der Liste zurück.       |
