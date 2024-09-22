# Cronjob

Der Cron-Daemon in Linux ermöglicht die automatisierte Ausführung von Aufgaben zu bestimmten Zeitpunkten oder in regelmäßigen Abständen. Hier ist eine Zusammenfassung der grundlegenden Verwendung von Cronjobs.

## Crontab-Datei bearbeiten

```sh
crontab -e
```

Öffnet die Crontab-Datei des aktuellen Benutzers zur Bearbeitung.

## Conjob Datei anzeigen

```sh
crontab -l
```

Zeigt den Inhalt der Crontab-Datei des aktuellen Benutzers an

## Struktur von Cronjobs

Ein Cronjob besteht aus fünf Feldern, die den Zeitpunkt der Ausführung definieren.

- Minute (0 - 59)
- Stunde (0 - 23)
- Tag im Monat (1 - 31)
- Monat (1 - 12)
- Wochentag (Sonntag bis Samstag, 0 = Sonntag)

__Beispiel__ :

Führe den Befehl mein_script.sh jeden Tag um 3:30 Uhr aus: (Systemzeit)

```sh
30 3 * * * mein_script.sh
```

## Besondere Zeichen

### Stern (*) - Jeder Wert

Verwendet, um anzuzeigen, dass der Cronjob zu jedem möglichen Wert in diesem Feld passen soll.

Beispiel
Führe den Befehl `täglicher_job.sh?` jeden Tag um Mitternacht aus:

```sh
0 0 * * * täglicher_job.sh
```

### Komma (,) - Mehrere Werte

Ermöglicht die Angabe mehrerer Werte in einem Feld.

__Beispiel__:

Führe den Befehl mein_script.sh um 2:30 Uhr und 6:30 Uhr jeden Tag aus:

```sh
30 2,6 * * * mein_script.sh
```

## Häufige Zeitintervalle

- `@reboot` : Führt den Befehl bei jedem Neustart des Systems aus.
- `@daily` : Täglich
- `@weekly` : Wöchentlich
- `@monthly` : Jeden Monat

Hier ist zu beachten das kein Zeitpunkt angeben werden kann er führt das einmal dann aus was angegeben ist.

```sh
@daily mein_täglicher_job.sh
```

## Zusammenfassend

Cronjobs bieten eine effiziente Möglichkeit, Aufgaben in Linux automatisch zu planen und auszuführen. Die Crontab-Datei kann bearbeitet werden, um die gewünschten Zeitpläne anzupassen. Verwenden Sie die richtige Syntax, um Zeitpunkte oder Intervalle zu definieren, und beachten Sie besondere Zeichen wie Stern und Komma. Nutzen Sie auch die vordefinierten Intervalle wie @daily und @weekly für häufige Aufgaben.
