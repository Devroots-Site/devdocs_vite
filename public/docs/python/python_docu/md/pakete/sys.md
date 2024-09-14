# Sys

Sys ist ein eingebautes Modul in Python, das Funktionen und Variablen bereitstellt, die mit dem Python-Interpreter und der Laufzeitumgebung interagieren. Das Modul `sys` enthält Funktionen und Variablen, die für den Zugriff auf Systemressourcen und die Interaktion mit dem Python-Interpreter nützlich sind.

## Verwendung von `sys`

Das `sys`-Modul in Python bietet Funktionen und Variablen, die stark mit dem Interpreter und dem Betriebssystem interagieren. Die folgende Tabelle bietet eine Übersicht der wichtigsten Funktionen und Variablen.

## Übersicht der `sys`-Funktionen und -Variablen

| Funktion/Variable         | Beschreibung                                                                                               | Beispiel                                        |
|---------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| `sys.argv`                | Eine Liste der Befehlszeilenargumente, die beim Start des Skripts übergeben wurden.                        | `sys.argv[0]` gibt den Namen des Skripts zurück |
| `sys.exit([arg])`         | Beendet das Programm mit dem angegebenen Status (Standard ist `0`, was für "kein Fehler" steht).           | `sys.exit(0)`                                   |
| `sys.version`             | Gibt die Python-Version als String zurück.                                                                 | `sys.version`                                   |
| `sys.version_info`        | Liefert die Python-Version als Tuple.                                                                      | `sys.version_info.major` ergibt die Hauptversion|
| `sys.platform`            | Gibt den Namen der Plattform zurück, auf der Python läuft.                                                 | `sys.platform` ergibt z.B. `win32` oder `linux` |
| `sys.path`                | Eine Liste der Verzeichnisse, in denen nach Modulen gesucht wird.                                          | `sys.path.append('/my/path')`                   |
| `sys.modules`             | Ein Dictionary, das alle geladenen Module enthält.                                                         | `sys.modules['os']`                             |
| `sys.stdin`               | Standard-Eingabeobjekt (für Eingaben).                                                                     | `sys.stdin.read()`                              |
| `sys.stdout`              | Standard-Ausgabeobjekt (für Ausgaben).                                                                     | `sys.stdout.write('Hello World')`               |
| `sys.stderr`              | Standard-Fehlerausgabeobjekt (für Fehlerausgaben).                                                         | `sys.stderr.write('Error!')`                    |
| `sys.getsizeof(object)`   | Gibt die Größe eines Objekts in Bytes zurück.                                                              | `sys.getsizeof(123)`                            |
| `sys.maxsize`             | Gibt die maximale Größe eines Integers in der aktuellen Python-Umgebung zurück.                            | `sys.maxsize`                                   |
| `sys.api_version`         | Gibt die API-Version des Python-Interpreters zurück.                                                       | `sys.api_version`                               |
| `sys.byteorder`           | Gibt die Byte-Reihenfolge ("big" oder "little") der Plattform zurück.                                      | `sys.byteorder`                                 |
| `sys.builtin_module_names`| Ein Tuple mit den Namen aller in den Interpreter eingebauten Module.                                       | `sys.builtin_module_names`                      |
| `sys.getrecursionlimit()` | Gibt die maximale Rekursionstiefe zurück, die Python erlaubt.                                              | `sys.getrecursionlimit()`                       |
| `sys.setrecursionlimit(limit)` | Setzt die maximale Rekursionstiefe, die Python erlaubt.                                              | `sys.setrecursionlimit(1500)`                   |
| `sys.getrefcount(object)` | Gibt die Referenzanzahl auf ein Objekt zurück (nur zu Debugging-Zwecken verwenden).                        | `sys.getrefcount([])`                           |
| `sys.implementation`      | Liefert Informationen über die Implementierung des aktuellen Python-Interpreters.                          | `sys.implementation.name`                       |
| `sys._getframe([depth])`  | Gibt ein Frame-Objekt zurück, das den Aufruf-Stack zur Laufzeit repräsentiert.                             | `sys._getframe().f_code.co_name`                |
| `sys.exc_info()`          | Gibt Informationen über den aktuellen Ausnahmezustand (während der Ausnahmebehandlung).                    | `type, value, traceback = sys.exc_info()`       |
| `sys.getdefaultencoding()`| Gibt die Standard-Textcodierung zurück, die von der aktuellen Python-Umgebung verwendet wird.              | `sys.getdefaultencoding()`                      |
| `sys.getfilesystemencoding()` | Gibt die Codierung zurück, die von Dateisystemfunktionen verwendet wird.                               | `sys.getfilesystemencoding()`                   |
| `sys.intern(string)`      | Interne Methode, die die Verwendung von Speicher für Zeichenfolgen optimiert.                             | `sys.intern('my_string')`                       |
