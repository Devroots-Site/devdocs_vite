# Terminal-Multiplexer: screen und tmux

## Einleitung

**screen** und **tmux** sind sogenannte Terminal-Multiplexer für Unix-basierte Betriebssysteme, wie Linux oder macOS. Diese Tools ermöglichen es, mehrere virtuelle Terminals innerhalb eines einzigen physischen Terminals zu verwalten. Das kann besonders nützlich sein, wenn du remote auf einem Server arbeitest oder wenn du mehrere Aufgaben gleichzeitig ausführst und den Überblick behalten möchtest.

## screen

**screen** ist ein älteres Terminal-Multiplexing-Programm. Es erlaubt das Verwalten mehrerer Terminals innerhalb eines einzigen Fensters. Du kannst zwischen den Terminals wechseln, sie abtrennen und später wieder anhängen.

**Beispiel:** `screen -S session_name` startet eine neue Sitzung mit dem Namen "session_name".

## tmux

**tmux** ist ein moderneres Terminal-Multiplexing-Programm, das auf screen basiert. Es bietet mehr Funktionen und Flexibilität. Ähnlich wie screen kannst du mehrere virtuelle Terminals innerhalb eines einzigen physischen Fensters erstellen.

**Beispiel:** `tmux new-session -s session_name` startet eine neue Sitzung mit dem Namen "session_name".

## Screen-Befehle

### Grundlegende Befehle

- `screen`: Startet eine neue screen-Sitzung.
- `screen -S session_name`: Startet eine neue Sitzung mit dem angegebenen Namen.
- `screen -ls`: Zeigt eine Liste aller laufenden Sitzungen an.
- `screen -r session_name`: Hängt sich an eine vorhandene Sitzung an.

### Sitzung verwalten

- `Ctrl+a c`: Erstellt ein neues Fenster.
- `Ctrl+a n`: Wechselt zum nächsten Fenster.
- `Ctrl+a p`: Wechselt zum vorherigen Fenster.
- `Ctrl+a "`: Zeigt eine Liste aller Fenster an.
- `Ctrl+a A`: Benennt das aktuelle Fenster um.

- `screen -ls`: Liste aller laufenden Sitzungen anzeigen.
- `screen -x -S name`: Killt den Screen.

### Fenster trennen und anhängen

- `Ctrl+a d`: Trennt die aktuelle Sitzung (lässt sie im Hintergrund laufen).
- `screen -r`: Hängt sich wieder an die letzte Sitzung an.

## Tmux-Befehle

### Grundlegende Befehle

- `tmux`: Startet eine neue tmux-Sitzung.
- `tmux new-session -s session_name`: Startet eine neue Sitzung mit dem angegebenen Namen.
- `tmux list-sessions`: Zeigt eine Liste aller laufenden Sitzungen an.
- `tmux attach -t session_name`: Hängt sich an eine vorhandene Sitzung an.

### Sitzung verwalten

- `Ctrl+b c`: Erstellt ein neues Fenster.
- `Ctrl+b n`: Wechselt zum nächsten Fenster.
- `Ctrl+b p`: Wechselt zum vorherigen Fenster.
- `Ctrl+b "`: Zeigt eine Liste aller Fenster an.
- `Ctrl+b $`: Benennt das aktuelle Fenster um.

### Fenster trennen und anhängen

- `Ctrl+b d`: Trennt die aktuelle Sitzung (lässt sie im Hintergrund laufen).
- `tmux attach -t session_name`: Hängt sich wieder an die Sitzung mit dem angegebenen Namen an.
