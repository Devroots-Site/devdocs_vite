# Linux tar

## Installation von `tar`

### Debian-basiserte Systeme (z.B Ubuntu)

```bash
sudo apt-get update
sudo apt-get install tar
```

### Red Hat-basierte Systeme (z.B Fedora)

```bash
sudo yum install tar
```

### Arch Linux

```bash
sudo pacman -S tar
```

## Grundlegende Verwendung von `tar`

### Archivieren von Dateien und Verzeichnissen

Archivieren eines Verzeichnisses mit aktuellem Datum im Namen

```bash
tar -cvf archiv_$(date +%Y%m%d).tar /pfad/zum/verzeichnis
```

Archivieren mehrerer Verzeichnisse und Dateien mit benutzerdefiniertem Namen

```bash
tar -cvf benutzerdefinierter_name.tar /pfad/verzeichnis1 /pfad/datei1 /pfad/datei2
```

### Optionen

- `-c`: Erstellt ein neues Archiv
- `-v`: Zeigt die Dateien an, während sie hinzugefügt werden
- `-f`: Gibt den Dateinamen des Archivs an
- `$(date +%Y%m%d)`: Fügt das aktuelle Datum im Format YYYYMMDD in den Dateinamen ein

## Extrahieren von Dateien aus einem Archiv

```bash
tar -xvf archiv.tar
```

Option:

- `-x` : Extrahiert dateien aus einem Archiv

## Erstellen von komprimierten Archiven mit Datum

### Gzip (.tar.gz)

```bash
tar -czvf archiv_$(date +%Y%m%d).tar.gz /pfad/zum/verzeichnis
```

### Bzip2 (.tar.bz2)

```bash
tar -cjvf archiv_$(date +%Y%m%d).tar.bz2 /pfad/zum/verzeichnis
```

### XZ (.tar.xz)

```bash
tar -cJvf archiv_$(date +%Y%m%d).tar.xz /pfad/zum/verzeichnis
```

#### Optionen Params

- `-z`: Verwendet gzip zur Komprimierung
- `-j`: Verwendet bzip2 zur Komprimierung
- `-J`: Verwendet xz zur Komprimierung

Entpacken dieser Dateien mit einen x statt mit c.

## Zusammenfassung

Diese Dokumentation bietet eine Einführung in die Installation von tar auf verschiedenen Linux-Distributionen und gibt grundlegende Anweisungen zur Archivierung, Extrahierung und Komprimierung von Dateien und Verzeichnissen. Verwenden Sie die angegebenen Befehle und Optionen entsprechend Ihren Anforderungen.
