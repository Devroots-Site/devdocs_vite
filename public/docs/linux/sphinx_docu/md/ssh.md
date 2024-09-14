# SSH

SSH (Secure Shell) ist ein Protokoll, das sichere Kommunikation zwischen zwei Rechnern über ein unsicheres Netzwerk ermöglicht. Es wird häufig für den sicheren Fernzugriff auf Server verwendet.

## Was ist SSH?

SSH steht für Secure Shell und ist ein Netzwerkprotokoll, das sicheren Zugang zu einem entfernten Computer bietet. Es verschlüsselt die Datenübertragung und bietet Authentifizierungsmethoden, um die Integrität und Vertraulichkeit der übertragenen Daten sicherzustellen.

## Erstellung eines SSH-Schlüssels

### Unter Windows

1. **Eingabeaufforderung oder PowerShell öffnen:**
   - Öffne die Eingabeaufforderung oder PowerShell.

2. **SSH-Schlüssel erstellen:**
   - Führe folgenden Befehl aus:
     ```sh
     ssh-keygen -t rsa -b 4096 -C "deine-email@example.com"
     ```
   - Folge den Anweisungen und speichere den Schlüssel im Standardverzeichnis (normalerweise `C:\Users\DeinBenutzer\.ssh\id_rsa`).

3. **Öffentlichen Schlüssel anzeigen:**
   - Um den öffentlichen Schlüssel anzuzeigen, führe folgenden Befehl aus:
     ```sh
     type C:\Users\DeinBenutzer\.ssh\id_rsa.pub
     ```

### Unter Linux

1. **SSH-Schlüssel erstellen:**
   - Öffne ein Terminal.
   - Führe folgenden Befehl aus:
     ```sh
     ssh-keygen -t rsa -b 4096 -C "deine-email@example.com"
     ```
   - Folge den Anweisungen und speichere den Schlüssel im Standardverzeichnis (`~/.ssh/id_rsa`).

## Wofür steht `4096`?

Die Zahl `4096` gibt die Länge des Schlüssels in Bits an. Je länger der Schlüssel, desto sicherer ist er. Ein 4096-Bit-Schlüssel bietet ein sehr hohes Maß an Sicherheit, indem er die Wahrscheinlichkeit, dass ein Angreifer den Schlüssel knacken kann, drastisch reduziert. Im Vergleich dazu war früher die Verwendung von 1024-Bit- oder 2048-Bit-Schlüsseln üblich, aber mit der Zunahme der Rechenleistung von Computern ist es ratsam, längere Schlüssel zu verwenden, um die Sicherheit zu erhöhen.

## Hinterlegung des öffentlichen Schlüssels auf dem Zielserver

1. **Öffentlichen Schlüssel kopieren:**
   - Führe folgenden Befehl aus, um den Schlüssel auf den Server zu kopieren:
     ```sh
     ssh-copy-id benutzername@server-ip
     ```
   - Alternativ kannst du den Inhalt der Datei `C:\Users\DeinBenutzer\.ssh\id_rsa.pub` (Windows) oder `~/.ssh/id_rsa.pub` (Linux) manuell kopieren.

2. **Öffentlichen Schlüssel manuell hinzufügen:**
   - Melde dich beim Server an:
     ```sh
     ssh benutzername@server-ip
     ```
   - Erstelle (falls nicht vorhanden) und öffne die Datei `~/.ssh/authorized_keys`:
     ```sh
     mkdir -p ~/.ssh
     nano ~/.ssh/authorized_keys
     ```
   - Füge den kopierten öffentlichen Schlüssel in die Datei ein und speichere sie.

## Verbindung zum Server herstellen

Nach der Hinterlegung des öffentlichen Schlüssels kannst du dich ohne Passwortanfrage mit dem Server verbinden:

```sh
ssh benutzername@server-ip
``` 

## Verwendung von SSH

### Unter Windows

1. **Verbindung zu einem SSH-Server herstellen:**
   - Öffne die Eingabeaufforderung oder PowerShell.
   - Führe folgenden Befehl aus:
    ```sh
     ssh -p benutzername@server-ip (Standartgemäß port 22 )
     ```

2. **Alternative Methode: Verwendung von PuTTY:**
   - Starte PuTTY.
   - Gib die IP-Adresse oder den Hostnamen des Servers in das Feld `Host Name (or IP address)` ein.
   - Stelle sicher, dass `SSH` als Verbindungstyp ausgewählt ist.
   - Klicke auf `Open`, um die Verbindung herzustellen.

### Unter Linux

1. **Verbindung zu einem SSH-Server herstellen:**
   - Öffne ein Terminal.
   - Führe folgenden Befehl aus:
     ```sh
     ssh benutzername@server-ip
     ```