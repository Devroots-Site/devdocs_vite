# Linux Scripting

## 1. Einführung

Linux-Scripting ist ein leistungsstarkes Werkzeug, um Aufgaben automatisiert auszuführen und komplexe Abläufe zu automatisieren. Bash (Bourne Again SHell) ist eine weit verbreitete Shell in Linux-Systemen und wird häufig für Scripting verwendet.

## 2. Grundlagen

### 2.1. Zuweisung der Bash

Es gibt mehrere Möglichkeiten zur Zuweisung der Kommandozeile: `bash` und `sh`.

- `bash`: Dies ist der Pfad zur Bash-Shell. Die Bash ist eine fortgeschrittene und erweiterte Shell, die viele Funktionen und Erweiterungen bietet, die über die POSIX-Standards hinausgehen. Die Bash unterstützt Funktionen wie Tabvervollständigung, Befehlshistorie, bedingte Anweisungen (if-else), Schleifen und mehr. Wenn Skripte explizit mit `#!/bin/bash` beginnen, wird die Bash als Interpreter verwendet.
- `sh`: Steht normalerweise für die POSIX-konforme Bourne-Shell oder eine kompatible Shell. In vielen Systemen, einschließlich Linux, ist `sh` jedoch oft ein symbolischer Link oder ein Alias für eine andere Shell, wie die Bash oder die Dash (Debian Almquist Shell). Skripte, die mit `#!/bin/sh` beginnen, werden mit dem als `sh` konfigurierten Shell-Interpreter ausgeführt.

Einbindung erfolgt so:

```sh
#!/bin/sh
# oder
#!/bin/bash
```

## 3 Variablen

Variablen werden verwendet, um Werte zu speichern und später im Skript darauf zuzugreifen. Diese werden einfach mit dem Namen der Variablen definiert und mit `$` und dem Namen aufgerufen.

```sh
# Variable deklarieren
name="Benutzer"

# Variable verwenden
echo "Hallo, $name!"
```

### 3.1 Arrays

Arrays sind eine spezielle Art von Variablen, die mehrere Werte speichern können. Sie können verwendet werden, um eine Liste von Elementen zu speichern und darauf zuzugreifen. Auf das erste Element greift man mit 0 zu.

```sh
# Array deklarieren
fruechte=("Apfel" "Banane" "Orange")

# Elemente des Arrays anzeigen
echo "Erste Frucht: ${fruechte[0]}"
echo "Zweite Frucht: ${fruechte[1]}"
echo "Dritte Frucht: ${fruechte[2]}"
```

### 3.2 Datum & Zeit

- `-d datum`: Verwende das angegebene Datum.
- `-f format`: Spezifiziere das Format des Datums.
- `-u`: Zeige das Datum in UTC an.
- `-r timestamp`: Konvertiere den angegebenen Zeitstempel in ein Datum.
- `-I`: Verwende das ISO 8601 Datum-Format (Jahr-Monat-Tag).
- `-R`: Zeige das Datum im RFC 2822 Format an.
- `-s seconds`: Füge die angegebenen Sekunden zum aktuellen Datum hinzu.
- `-d day`: Bestimme den Tag des Datums.

```sh
current_datetime=$(date)
echo "Aktuelles Datum und Uhrzeit: $current_datetime"

# Aktuelles Datum im ISO 8601 Format abrufen und in eine Variable speichern
current_iso_date=$(date -I)
echo "Aktuelles Datum im ISO 8601 Format: $current_iso_date"

# Aktuelle Uhrzeit in UTC abrufen und in eine Variable speichern
current_utc_time=$(date -u)
echo "Aktuelle Uhrzeit in UTC: $current_utc_time"

# Spezifisches Datum abrufen und in eine Variable speichern
specific_date=$(date -d "2023-01-01")
echo "Spezifisches Datum: $specific_date"

# Datum und Uhrzeit mit einem bestimmten Zeitstempel abrufen und in eine Variable speichern
timestamp_date=$(date -r 1609459200)
echo "Datum mit Zeitstempel: $timestamp_date"

# Aktuelles Datum und Uhrzeit im RFC 2822 Format abrufen und in eine Variable speichern
rfc_date=$(date -R)
echo "Aktuelles Datum im RFC 2822 Format: $rfc_date"

# Datum mit hinzugefügten Sekunden abrufen und in eine Variable speichern
seconds_added_date=$(date -d "+3600 seconds")
echo "Datum mit hinzugefügten Sekunden: $seconds_added_date"
```

## 4 Ausgaben

Die Ausgabe von Befehlen kann in Variablen gespeichert oder direkt angezeigt werden.

```sh
# Befehlsausgabe in Variable speichern
current_date=$(date)
echo "Aktuelles Datum: $current_date"

# Direkte Befehlsausgabe
echo "Hostname: $(hostname)"
```

## 5 Bedinungen

Bedingungen ermöglichen es, Aktionen basierend auf bestimmten Kriterien auszuführen.

```sh
if [ Bedingung ]; then
  # Code wenn Bedingung wahr ist
elif [ Bedingung ]; then
  # Code wenn alternative Bedingung wahr ist
else
  # Code wenn keine Bedingung wahr ist
fi
```

Else abfragen werden hier mit `if, elif, else, fi`.

- if : start der if abfrage
- elif : else if
- else : erklärt sich von alleine
- fi : ende der if anweisung

## 5.1 Nummerische Abfragen

```sh
### Numerische Vergleiche
Die folgenden Vergleichsoperatoren werden für numerische Vergleiche verwendet:

- `-eq`: gleich (`==`)
- `-ne`: ungleich (`!=`)
- `-lt`: weniger als (`<`)
- `-le`: weniger oder gleich (`<=`)
- `-gt`: größer als (`>`)
- `-ge`: größer oder gleich (`>=`)
```

Man kann hier auch mit !=, ==, <, >, usw. arbeiten. Beachte hier aber, dass man dann doppelte (( )) oder [[]] hernimmt. Es ist wichtig, Leerzeichen in der Syntax zu beachten.

## Beispiel

```sh
#!/bin/bash

str1="Apfel"
str2="Banane"

if [ "$str1" = "$str2" ]; then
  echo "Die Zeichenketten sind gleich."
else
  echo "Die Zeichenketten sind ungleich."
fi

if [ "$str1" \< "$str2" ]; then
  echo "$str1 kommt vor $str2 im Alphabet."
else
  echo "$str1 kommt nach $str2 im Alphabet."
fi

if [ "$str1" -lt "$str2" ]; then
  echo "$str1 kommt nach $str2 im Alphabet."
else
  echo "$str1 kommt vor $str2 im Alphabet."
fi
```

## 7 Verknüpfungen

Ja, du kannst logische AND-Verknüpfungen in Bedingungen verwenden. In der Bash gibt es zwei Hauptarten von AND-Verknüpfungen: `&&` (logisches AND) und `-a` (logisches AND in der `[ ]`-Syntax). Beide können verwendet werden, um mehrere Bedingungen zu kombinieren.

### Beispiele

```sh
#!/bin/bash

# Beispiel: Logisches AND mit &&
echo "Gib eine Zahl ein:"
read zahl

if (( zahl > 0 )) && (( zahl % 2 == 0 )); then
  echo "Die Zahl ist positiv und gerade."
else
  echo "Die Zahl ist entweder nicht positiv oder nicht gerade."
fi
-----------------------------------------------------------------------
#!/bin/bash

# Beispiel: Logisches AND mit -a
echo "Gib einen Text ein:"
read text

if [ "$text" == "Hallo" -a "$text" != "Welt" ]; then
  echo "Der Text ist 'Hallo', aber nicht 'Welt'."
else
  echo "Der Text entspricht nicht den Bedingungen."
fi
```

## 8 Beisiel: Logisches AND mit -a

```sh
#!/bin/bash

# Beispiel: Logisches AND mit -a
echo "Gib einen Text ein:"
read text

if [ "$text" == "Hallo" -a "$text" != "Welt" ]; then
  echo "Der Text ist 'Hallo', aber nicht 'Welt'."
else
  echo "Der Text entspricht nicht den Bedingungen."
fi

```

## 9 Schleifen

Schleifen wiederholen Aktionen, bis eine Bedingung erfüllt ist.

```sh
# For-Schleife
for i in {1..5}; do
  echo "Schleifeniteration $i"
done

# While-Schleife
counter=0
while [ $counter -lt 3 ]; do
  echo "Schleifeniteration $counter"
  ((counter++))
done

# Beispiel: for-Schleife für benutzerdefinierte Liste
fruechte=("Apfel" "Banane" "Orange" "Erdbeere")

for frucht in "${fruechte[@]}"; do
  echo "Aktuelle Frucht: $frucht"
done
```

## 10 Funktionen

Funktionen ermöglichen die Strukturierung von Code und die Wiederverwendung von Logik.

```sh
# Funktion definieren
function zeigeNachricht() {
  echo "Dies ist eine Nachricht."
}

# Funktion aufrufen
zeigeNachricht
------------------------------------
oder 
------------------------------------
namefunction() {
  echo "hi"
}
------------------------------------
oder mit übergabe parameter 
------------------------------------
add_numbers() {
  local num1=$1
  local num2=$2
  local sum=$((num1 + num2))
  echo $sum
}
```

### 10.1 Lesen von Benutzereingaben

Benutzereingaben können mit dem read-Befehl gelesen und in Variablen gespeichert werden.

```sh
echo "Wie ist dein Name?"
read benutzername
echo "Hallo, $benutzername!"
```

oder in Variablen speichern.

```sh
read benutzername passwort test
```

Hier wird alle eingaben per leerzeichen in die Variablen gespeichert.

#### Parameter

- `-a array`: Lese die Eingabe in ein Array.
- `-d delimiter`: Verwende das angegebene Trennzeichen, um die Eingabe zu trennen.
- `-e`: Erlaube dem Benutzer die Bearbeitung der Eingabe mit der Line-Editing-Funktion.
- `-n num`: Lese nur eine bestimmte Anzahl von Zeichen.
- `-p prompt`: Gib eine Benachrichtigung aus, bevor die Eingabe erwartet wird.
- `-r`: Deaktiviere die Interpretation von Backslashes (\) (roh).
- `-s`: Stumm (still) - Verberge die Eingabe (nützlich für Passworteingaben).
- `-t timeout`: Setze ein Zeitlimit für die Eingabe.
- `-u fd`: Verwende einen bestimmten Dateideskriptor (standardmäßig ist dies stdin).

## 11. Beispiel: Skript zur Verarbeitung von Dateien

Hier ist ein einfaches Beispiel für ein Bash-Skript, das Dateien in einem Verzeichnis verarbeitet:

```sh
#!/bin/bash
# Skript: dateiverarbeitung.sh

verzeichnis="./mein_verzeichnis"

# Überprüfen, ob das Verzeichnis existiert
if [ -d "$verzeichnis" ]; then
  echo "Verzeichnis gefunden: $verzeichnis"

  # Schleife zum Durchgehen der Dateien
```
