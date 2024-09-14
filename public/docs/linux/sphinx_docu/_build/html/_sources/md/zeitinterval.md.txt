# Zeitintervalle & Systemstart

## Einleitung

In Linux kann man Skripte erstellen, die automatisch beim Systemstart ausgeführt werden. Dies wird durch das Erstellen einer sogenannten Service-Datei im Verzeichnis `/etc/systemd/system/` erreicht. Diese Dateien haben die Endung `.service` und enthalten spezifische Anweisungen, wie und wann das Skript ausgeführt werden soll.

### Erstellen einer Service-Datei

Um ein Skript beim Systemstart auszuführen, erstellen wir eine Service-Datei. Der Inhalt dieser Datei ist entscheidend für das korrekte Funktionieren des Services.

Beispiel einer Service-Datei:

```sh
[Unit]
Description=BESCHREIBUNG_DEINES_SKRIPTS

[Service]
ExecStart=/PFAD/ZUM/DEINEM/SKRIPT.SH
Restart=always

[Install]
WantedBy=multi-user.target
```

Erklärung dieser Abschnitte

- [Unit]
- - `Description` : Eine kurze Beschreibung des Skripts. Diese Beschreibung hilft, den Zweck des Services zu verstehen.
- [Service]
- - `ExecStart`: Der Pfad zu dem Skript, das beim Start des Services ausgeführt werden soll.
- - `Restart` : Gibt an, dass der Service immer neu gestartet wird, wenn er beendet wird. Dies ist nützlich für Dienste, die kontinuierlich laufen sollen.
- [Install]
- - `WantedBy` : Bestimmt die Zielumgebung, in der der Service aktiv sein soll. `multi-user.target` ist eine häufig verwendete Umgebung, die mehrere Benutzer unterstützt.

### Akitvieren und Starten des Service

Nachdem die Service-Datei erstellt wurde, kann der Service wie folgt gestartet werden:

```sh
sudo systemctl start meinservice
```

Um das Skript so zu aktivieren, dass es beim Systemstart automatisch ausgeführt wird, verwendet man:

```bash
sudo systemctl enable meinservice
```

## Zusammenfassung

Durch das Erstellen und Konfigurieren einer Service-Datei in `/etc/systemd/system/` kann man Skripte beim Systemstart ausführen lassen. Dies ist besonders nützlich für Aufgaben, die bei jedem Systemstart automatisch erledigt werden müssen.
