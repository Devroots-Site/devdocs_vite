# Grundlagen der Linux-Kommandozeile

## Einführung

Die Linux-Datei- und Verzeichnisstruktur ist hierarchisch organisiert. Einige grundlegende Verzeichnisse sind:

- **/bin**: Binärdateien (ausführbare Programme)
- **/etc**: Konfigurationsdateien
- **/home**: Benutzerverzeichnisse
- **/var**: Variable Daten
- **/**: Das Wurzelverzeichnis

## 1. Navigieren mit `cd`

`cd` steht für "Change Directory" und ist ein Befehl, um in der Ordnerstruktur zu navigieren.

### Beispiele

- `cd /home`  
  Navigiert zum Verzeichnis `/home`.
- `cd .`  
  Punkt steht hier für das aktuelle Verzeichnis.
- `cd -`  
  Wechselt in das letzte Verzeichnis.

## 2. Dateien und Verzeichnisse anzeigen

- `ls -l`  
  Zeigt alle Dateien und Verzeichnisse an.
- `ls -a`  
  Zeigt alle Dateien und Verzeichnisse an, inklusive versteckter Dateien.
- `ls -la`  
  Zeigt alle Dateien und Verzeichnisse an, inklusive versteckter Dateien mit Details.

## 3. Dateien und Verzeichnisse erstellen

- `mkdir Verzeichnisname`  
  Erstellt ein Verzeichnis.
- `touch Dateiname`  
  Erstellt eine Datei.
- `rm Dateiname`  
  Löscht eine Datei.
- `rm -r Verzeichnisname`  
  Löscht ein Verzeichnis.

## 4. Dateien und Verzeichnisse kopieren

- `cp Dateiname Zielkopie`  
  Kopiert eine Datei.
- `cp -r Verzeichnisname Zielkopie`  
  Kopiert ein Verzeichnis.

## 5. Dateien und Verzeichnisse verschieben

- `mv Dateiname Zielkopie`  
  Verschiebt eine Datei.
- `mv Verzeichnisname Zielkopie`  
  Verschiebt ein Verzeichnis.

## 6. Dateien und Verzeichnisse suchen

`find` durchsucht das Dateisystem nach Dateien und Verzeichnissen, die den angegebenen Kriterien entsprechen.

### Beispiele find

- `find / -name Dateiname`  
  Sucht nach einer Datei mit dem angegebenen Namen.
- `find / -name Verzeichnisname`  
  Sucht nach einem Verzeichnis mit dem angegebenen Namen.

**Erklärung:**

- `/`: Das Startverzeichnis der Suche. Du kannst auch einen spezifischen Pfad angeben.
- `-name`: Das Kriterium für den Datei- oder Verzeichnisnamen.

### 6.1. Weitere Suchkriterien

Du kannst `find` mit verschiedenen Kriterien kombinieren, um spezifischere Suchanfragen zu erstellen.

### Beispiele find profi

- `find / -type f -name "*.txt"`  
  Sucht nach Dateien mit der Erweiterung `.txt`.
- `find /home/benutzer -size +1M`  
  Sucht nach Dateien größer als 1 Megabyte im angegebenen Verzeichnis.
- `find /var/log -mtime -7`  
  Sucht nach Dateien, die in den letzten 7 Tagen modifiziert wurden.

**Erklärung:**

- `-type f`: Sucht nur nach regulären Dateien (keine Verzeichnisse).
- `-name "*.txt"`: Sucht nach Dateien mit der Erweiterung `.txt`.
- `-size +1M`: Sucht nach Dateien größer als 1 Megabyte.
- `-mtime -7`: Sucht nach Dateien, die in den letzten 7 Tagen modifiziert wurden.

## 7. Textbearbeitung mit `nano`

### 7.1. `nano` - Einfacher Texteditor

`nano` ist ein leicht zu bedienender Texteditor in der Kommandozeile.

### Beispiel nano

- `nano dateiname.txt`  
  Öffnet die Datei `dateiname.txt` zum Bearbeiten.

**Tastenkombinationen:**

- `Ctrl + O`: Speichert die Änderungen in der Datei.
- `Ctrl + X`: Beendet den Editor.

### 7.2. Grundlegende Navigation

- Pfeiltasten: Bewegen den Cursor durch den Text.
- `Ctrl + G`: Zeigt die Hilfe mit den wichtigsten Tastenkombinationen an.
- `Ctrl + K`: Löscht eine Zeile.
- `Ctrl + U`: Fügt den zuvor gelöschten Text wieder ein.

### 7.3. Suchen und Ersetzen

- `Ctrl + W`: Öffnet das Suchmenü.
- `Ctrl + \`: Öffnet das Menü zum Ersetzen von Text.

### 7.4. Kopieren, Ausschneiden, Einfügen

- `Alt + A`: Markiert Text für das Kopieren.
- `Alt + T`: Markiert Text für das Ausschneiden.
- `Ctrl + U`: Fügt den markierten Text an der Cursorposition ein.

## 8 Grep

`grep` ist ein leistungsfähiges Kommandozeilenwerkzeug in Linux, das verwendet wird, um nach Mustern in Textdateien zu suchen. Hier sind einige der häufigsten Verwendungszwecke und Optionen.

```bash
grep [OPTIONEN] MUSTER [DATEI...]
```

- `MUSTER` : Das Muster, nach dem gesucht wird.
- `DATEI` : Die dateien, die dennen nach dem Muster gesucht wird (durchsucht).

### Optionen Grep

- `-i` (ignore-case): Ignoriert Groß- und Kleinschreibung.
- `-r` (recursive): Durchsucht Verzeichnisse rekursiv.
- `-l` (files-with-matches): Gibt nur die Namen der Dateien aus, die Treffer enthalten.
- `-n` (line-number): Zeigt die Zeilennummern der Treffer an.
- `-v` (invert-match): Zeigt alle Zeilen an, die das Muster nicht enthalten.
- `-c` (count): Zählt die Anzahl der Treffer pro Datei.
- `-H` (with-filename): Zeigt den Dateinamen bei Treffern an (nützlich bei mehreren Dateien).
- `--color`: Hebt das gefundene Muster hervor.

Hier kann auch nach Regex gesucht werden.

## 9 Datei verwaltung

### 9.1 `chown` - Ändern des Dateibesitzers

`chown` ändert den Besitzer / Gruppe einer Datei / Verzeichnisses.

```bash
chown benutzername:gruppe <dateiname | verzeichnis >
```

### 9.2  `chmod` - Ändern von Berechtigungen

`chmo´d` ändert die Zugrifssrechte von Dateien & Berechtigungen.

```bash
chmod +x <datei | verzeichnis >
```

- `-` Entfernt die Berechtigung
- `+` FÜgt die Berechtigung hinzu

#### ugo

Ugo heißt:

- `U` : User
- `G` : Group
- `O` ; Other

#### Berechtigungsarten

- `x` : execute / ausführen
- `w` : write / schreiben
- `r` : read / lesen

Als Zahlen können diese auch folgende sein

| Recht | Nummer Repräsentation|
|--------|----------------------|
| Leserechte | 4|
| Schreibrechte | 2 |
| Ausführungsrechte | 1 |

**Hinweis** diese können auch kominiert werden.

## 10. Prozesse und Tasks verwalten

Der Befehl `ps`  ermöglicht die Anzeige laufender Prozesse, wärende `kill` verwendet wird, um Prozesse zu beenden.

```bash
ps -ef   # Zeigt alle laufenden Prozesse an
kill PID   # Beendet einen Prozess mit der angegebenen Prozess-ID
```

- `-e` (oder --all): Zeigt alle Prozesse an, die derzeit auf dem System laufen.
- `-f` (oder --full-format): Zeigt die Prozesse in einem vollständigen Format an, das zusätzliche Informationen enthält.

## 11. Pakete

Es können bei Linux Pakete Installiert Upgedatet und Akutliesiert werden.

- `apt-get install <Packet>`
- `apt-get update`
- `apt-get upgrade`

apt-get install steht für die weitere ansicht man kann auch nur `apt` angeben.

## 12. Infomationen zum System

Der Befehl `uname` gibt grundlegende Informationen zum System aus. Die Befehle `df` und `du` helfen bei der Überprüfung des Speicherplatzes.

```sh
uname -a   # Zeigt detaillierte Systeminformationen an
df -h   # Zeigt die Festplattenbelegung an
du -h verzeichnis   # Zeigt die Größe eines Verzeichnisses an
```

## 13.  Netzwerkinfomationen

Die Befehle `ifconfig` oder `ip` zeigen Netzwerkschnittstellen an. Mit `ping` und `traceroute` kann die Netzwerkverbindung überprüft werden.

```bash
ifconfig   # Zeigt Netzwerkschnittstellen an
ping zieladresse   # Überprüft die Netzwerkverbindung zu einer Adresse
```

## 14. Anzeigen aktuelles Verzeichnis `pwd`

pwd zeigt den vollständigen Pfad des aktuellen Arbeitsverzeichnisses an.

### 14.1 `PATH`

Der `PATH` ist eine wichtige Umgebungsvariable, die den Suchpfad für ausführbare Dateien definiert.

```bash
echo $PATH
```

Dieser Befehl zeigt den aktuellen Suchpfad an. Du kannst ihn mit `export PATH=new_path` ändern, um zusätzliche Pfade hinzuzufügen oder zu entfernen.

```bash
export MEINE_VARIABLE="Hallo, Welt!"   # Um selbst eine Variable zu erstellen
```

## 15 Speicherplatzverwaltung

### 15.1 `df` - Anzeigen der Festplattenbelegung

`df -h` Zeigt die Belegung von ganzen System an `-h` steht hier für die Größenangaben für menschen Lesnbar.

### 15.2 `ncdu` - Interaktive Festplattenbelegung

`ncdu` ist ein interaktives Tool zur Anzeige der Festplattenbelegung. Dies muss installiert werden, da es nicht standardmäßig installiert ist:

```bash
apt install ncdu
ncdu <Ordner>
```

Mit `q` : Beenden

### 15.3 `free`

`free` : zeigt die Speichernutzung und den freien Arbeitsspeicher an.

```bash
free -h
```
