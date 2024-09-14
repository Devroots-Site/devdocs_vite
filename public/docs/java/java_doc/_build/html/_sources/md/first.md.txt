# Erste Schritte

## Installation

Um Java auf Ihrem Computer zu installieren, müssen Sie die offizielle Website von Oracle besuchen und die neueste Version von Java herunterladen.

1. Gehen Sie zu [Oracle Java](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
2. Wählen Sie die Version von Java aus, die zu Ihrem Betriebssystem passt (z. B. Windows, macOS, Linux).
3. Laden Sie die Datei herunter und führen Sie sie aus.
4. Befolgen Sie die Anweisungen auf dem Bildschirm, um die Installation abzuschließen.

Nachdem Sie Java installiert haben, können Sie die Java-Version überprüfen, indem Sie `java -version` in Ihrer Befehlszeile eingeben.

```bash
java -version
```

Wenn Sie die Java-Version sehen, haben Sie Java erfolgreich installiert.

## Erstes Programm

Nachdem Sie Java installiert haben, können Sie Ihr erstes Java-Programm schreiben. Öffnen Sie dazu einen Texteditor und geben Sie den folgenden Code ein:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

Speichern Sie die Datei als `HelloWorld.java` und führen Sie sie aus, indem Sie `javac HelloWorld.java` eingeben, um den Code zu kompilieren, und `java HelloWorld` eingeben, um das Programm auszuführen.

```bash
javac HelloWorld.java
java HelloWorld
```

Sie sollten die Ausgabe `Hello, World!` sehen, was bedeutet, dass Ihr erstes Java-Programm erfolgreich ausgeführt wurde.
