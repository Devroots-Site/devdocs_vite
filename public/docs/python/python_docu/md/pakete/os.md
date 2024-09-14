# OS

OS ist ein Modul, das Funktionen zum Umgang mit dem Betriebssystem bereitstellt. Es ist in der Standardbibliothek von Python enthalten und muss daher nicht installiert werden.

| Funktion/Variable         | Beschreibung                                                                                               | Beispiel                                        |
|---------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| `os.name`                 | Gibt den Namen des Betriebssystems zurück, z.B. `'posix'`, `'nt'`, `'os2'`, `'ce'`, `'java'`, `'riscos'`.  | `os.name`                                       |
| `os.getcwd()`             | Gibt das aktuelle Arbeitsverzeichnis zurück.                                                               | `os.getcwd()`                                   |
| `os.chdir(path)`          | Ändert das aktuelle Arbeitsverzeichnis zu dem angegebenen Pfad.                                            | `os.chdir('/my/new/path')`                      |
| `os.listdir(path)`        | Gibt eine Liste der Einträge im Verzeichnis `path` zurück.                                                  | `os.listdir('.')`                               |
| `os.mkdir(path)`          | Erstellt ein neues Verzeichnis mit dem Namen `path`.                                                       | `os.mkdir('new_folder')`                        |
| `os.makedirs(path)`       | Erstellt rekursiv Verzeichnisse, d.h., auch übergeordnete Verzeichnisse, falls notwendig.                  | `os.makedirs('new_folder/sub_folder')`          |
| `os.rmdir(path)`          | Löscht ein leeres Verzeichnis.                                                                             | `os.rmdir('folder_name')`                       |
| `os.removedirs(path)`     | Löscht rekursiv Verzeichnisse, beginnend bei dem am tiefsten verschachtelten.                              | `os.removedirs('folder/sub_folder')`            |
| `os.remove(path)`         | Löscht eine Datei.                                                                                         | `os.remove('file.txt')`                         |
| `os.rename(src, dst)`     | Benennt eine Datei oder ein Verzeichnis von `src` nach `dst` um.                                           | `os.rename('old_name.txt', 'new_name.txt')`     |
| `os.environ`              | Gibt ein Mapping-Objekt der Umgebungsvariablen zurück.                                                     | `os.environ['HOME']`                            |
| `os.getenv(key, default=None)` | Gibt den Wert der Umgebungsvariablen `key` zurück, oder `default`, wenn die Variable nicht existiert.  | `os.getenv('HOME', '/default/path')`            |
| `os.putenv(key, value)`   | Setzt die Umgebungsvariable `key` auf `value`. (Verwendung wird nicht empfohlen, nutze `os.environ` stattdessen.) | `os.putenv('MY_VAR', 'value')`           |
| `os.system(command)`      | Führt das angegebene Systemkommando in einer Subshell aus.                                                 | `os.system('ls -l')`                            |
| `os.path.exists(path)`    | Prüft, ob der angegebene Pfad existiert.                                                                   | `os.path.exists('file.txt')`                    |
| `os.path.isfile(path)`    | Prüft, ob der angegebene Pfad eine Datei ist.                                                              | `os.path.isfile('file.txt')`                    |
| `os.path.isdir(path)`     | Prüft, ob der angegebene Pfad ein Verzeichnis ist.                                                         | `os.path.isdir('folder_name')`                  |
| `os.path.join(path, *paths)` | Verbindet einen oder mehrere Pfadnamen zu einem einzigen Pfad.                                           | `os.path.join('folder', 'sub_folder', 'file.txt')` |
| `os.path.basename(path)`  | Gibt den Basenamen des angegebenen Pfads zurück.                                                           | `os.path.basename('/path/to/file.txt')`         |
| `os.path.dirname(path)`   | Gibt den Verzeichnisnamen des angegebenen Pfads zurück.                                                    | `os.path.dirname('/path/to/file.txt')`          |
| `os.path.split(path)`     | Teilt den Pfad in ein Tupel `(head, tail)` auf, wobei `head` der Verzeichnisteil und `tail` der Basenamenteil ist. | `os.path.split('/path/to/file.txt')`       |
| `os.path.splitext(path)`  | Teilt den Pfad in ein Tupel `(root, ext)` auf, wobei `root` der Pfad ohne Erweiterung und `ext` die Erweiterung ist. | `os.path.splitext('file.txt')`           |
| `os.walk(top, topdown=True, onerror=None, followlinks=False)` | Generiert Dateinamen in einem Verzeichnisbaum, beginnend beim Wurzelverzeichnis `top`. | `for root, dirs, files in os.walk('/my/path'):` |
| `os.access(path, mode)`   | Prüft, ob der angegebene Pfad mit dem angegebenen Modus (`os.F_OK`, `os.R_OK`, `os.W_OK`, `os.X_OK`) zugänglich ist. | `os.access('file.txt', os.R_OK)`           |
| `os.urandom(n)`           | Gibt `n` zufällige Bytes zurück, die für kryptographische Anwendungen geeignet sind.                        | `os.urandom(16)`                                |
| `os.cpu_count()`          | Gibt die Anzahl der CPUs im System zurück.                                                                 | `os.cpu_count()`                                |
| `os.getlogin()`           | Gibt den Namen des angemeldeten Benutzers zurück.                                                          | `os.getlogin()`                                 |
| `os.getpid()`             | Gibt die Prozess-ID des aktuellen Prozesses zurück.                                                        | `os.getpid()`                                   |
| `os.getppid()`            | Gibt die Prozess-ID des Elternprozesses zurück.                                                            | `os.getppid()`                                  |
| `os.getuid()`             | Gibt die Benutzer-ID des aktuellen Benutzers zurück. (Nur auf Unix-Systemen verfügbar.)                    | `os.getuid()`                                   |
| `os.getgid()`             | Gibt die Gruppen-ID des aktuellen Benutzers zurück. (Nur auf Unix-Systemen verfügbar.)                     | `os.getgid()`                                   |
| `os.setuid(uid)`          | Setzt die Benutzer-ID des aktuellen Prozesses auf `uid`. (Nur auf Unix-Systemen verfügbar.)                | `os.setuid(1000)`                               |
| `os.setgid(gid)`          | Setzt die Gruppen-ID des aktuellen Prozesses auf `gid`. (Nur auf Unix-Systemen verfügbar.)                 | `os.setgid(1000)`                               |
