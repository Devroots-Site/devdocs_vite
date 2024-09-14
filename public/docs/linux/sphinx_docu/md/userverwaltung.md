# User Verwaltung

## Benutzer anlegen

Um einen Benutzer anzulegen, verwendet man `useradd`. Dann kann man folgende Parameter übergeben:

| Parameter | Beschreibung                             | Beispiel                                  |
| --------- | ---------------------------------------- | ----------------------------------------- |
| `-c`      | Kommentar                                | `-c "Max Mustermann"`                     |
| `-d`      | Erstelle ein spezielles Home-Verzeichnis | `-d "/home/max/2"`                        |
| `-e`      | Ablaufdatum                              | `-e YYYY-MM-DD`                           |
| `-g`      | Primäre Gruppe festlegen                 | `useradd -g primäre_gruppe benutzername`  |
| `-G`      | Zusätzliche Gruppen festlegen            | `useradd -G gruppe1,gruppe2 benutzername` |
| `-m`      | Erstellt das Homeverzeichniss            | `useradd -m bbichler`                     |
| `-h`      | Hilfe-Menü                               |                                           |
| `-s`      | Standard Bash setzen                     | `-s "/bin/bash"`                          |
| `-k`      | Inhalt von `/etc/skel` kopieren          | `-k /etc/skel`                            |
| `-l`      | User nicht zu den Logs hinzufügen        |                                           |
| `-p`      | Passwort in Verschlüsselung              | `-p "uifa2jklfd2d"`                       |

### Passwort setzen/ändern

Um das Passwort zu ändern, verwendet man `passwd`:

```sh
passwd benutzername
```

### User löschen / sperren

Dies kann mit `userdel` erledigt werden.

| Parameter | Beschreibung                                                              | Beispiel                  |
| --------- | ------------------------------------------------------------------------- | ------------------------- |
| `-f`      | Erzwingt das Löschen des Benutzers, auch wenn der Benutzer angemeldet ist | `userdel -f benutzername` |
| `-h`      | Hilfe-Menü                                                                |                           |
| `-r`      | Löscht den Benutzer und sein Home-Verzeichnis                             | `userdel -r benutzername` |

## Gruppenverwaltung

### Gruppe erstellen

Um eine neue Gruppe zu erstellen, verwende den Befehl `groupadd`:

```sh
sudo groupadd meine_gruppe
```

### Benutezr zu einer Grupe hinzufügen

Um einen Benutzer zu einer Gruppe hinzuzufügen, verwendet man `usermod`:

```sh
sudo usermod -aG meine_gruppe benutzername
```

### Gruppenmitglied entfernen

```bash
sudo deluser john developers
```

### Gruppenmitgliedschaft überprüfen

Um die Mitglieder einer Gruppe zu überprüfen, verwende `getent`:

```bash
getent group meine_gruppe
```

### Gruppe löschen

Um eine Gruppe zu löschen, verwende `groupdel`:

```bash
sudo groupdel meine_gruppe
```

### Gruppe einer Datei ändern

Um die Gruppe einer Datei zu ändern, verwende `chown`:

```bash
sudo chown :meine_gruppe dateiname
```

### Berechtigungen für die Gruppe festelgen

Um Berechtigungen für die Gruppe auf eine Datei anzuwenden, verwende `chmod`:

```bash
sudo chmod g+rwx dateiname
```

### Hinweis

Stelle sicher, dass du administrative Berechtigungen (z.B. sudo) hast, um Gruppen zu erstellen, zu verwalten und Dateien zu ändern.

## `usermod` Verwalten

| Parameter | Beschreibung                                 | Beispiel                   |
| --------- | -------------------------------------------- | -------------------------- |
| -L        | Sperrt den Benutzer                          | `usermod -L benutzername`  |
| -U        | Entsperrt den Benutzer                       | `usermod -U benutzername`  |
| -d        | Löscht das Passwort                          | `usermod -d benutzername`  |
| -e        | Ablaufdatum des Benutzers erzwingen          | `usermod -e benutzername`  |
| -S        | Fragt den Status ab                          | `usermod -S benutzername`  |
| -g        | Gruppe hinzufügen und alle anderen entfernen | `usermod -g benutzername`  |
| -aG       | Gruppe hinzufügen, ohne sie zu entfernen     | `usermod -aG benutzername` |

## Statusoptionen

| Abkürzung | Beschreibung  |
| --------- | ------------- |
| Np        | Kein Passwort |
| P         | Passwort      |
| L         | Gesperrt      |

## Wichtige Verzeichnisse

- **/etc/passwd**: Informationen zum Benutzerkonto
- **/etc/shadow**: Sichere Benutzerkontoinformationen
- **/etc/group**: Informationen zur Gruppe
- **/etc/default/useradd**: Standardinformationen
- **/etc/skel**: Verzeichnis mit Standardinformationen

![Shadow Bild](../_static/shadow.png)

## Verschlüsseltes Passwort bekommen

Mit `mkpasswd` kann man einen verschlüsselten String bekommen.

## Sudo hinzufügen

Um einem Benutzer Sudo-Rechte zu geben, verwende folgendes:

```sh
usermod -aG sudo benutzername
```

Sudo steht für "Superuser Do" und ist ein Befehlszeilenprogramm in Unix-ähnlichen Betriebssystemen, einschließlich Linux und macOS. Es ermöglicht autorisierten Benutzern, Befehle mit den Berechtigungen des Superusers oder eines anderen Benutzers auszuführen, wie es in der Konfigurationsdatei sudoers spezifiziert ist.

## Login in andere User

Um sich in einen anderen Benutezr einzuloggen, verwende `su`:

```bash
su benutzer
```

oder

```bash
su -
```

Um sich wieder als root anzumelden, kann root sich einloggen, ohne das Passwort einzugeben.
