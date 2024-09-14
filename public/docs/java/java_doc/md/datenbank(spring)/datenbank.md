# Datenbank (Spring)

In diesem Abschnitt wird die Verwendung von Datenbanken in Spring behandelt. Spring bietet eine Vielzahl von Funktionen und Tools, um die Interaktion mit Datenbanken zu vereinfachen und zu verbessern.

## Installieren von Spring Data JPA

Spring Data JPA ist ein Teil des Spring-Frameworks, der die Entwicklung von Datenzugriffsschichten erleichtert. Es bietet eine abstrakte Implementierung des Repository-Patterns und ermöglicht die einfache Integration von JPA (Java Persistence API) in Spring-Anwendungen. Um Spring Data JPA in Ihrem Projekt zu verwenden, müssen Sie die entsprechenden Abhängigkeiten hinzufügen. Hier ist ein Beispiel für die `pom.xml`-Datei:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!--H2 Database-->
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>

```

Dies können wir auch im web machen unter [Spring Initializr](https://start.spring.io/).

oder mit IntelliJ IDEA (Ultimate Edition):

1. Klicken Sie auf `File` -> `New` -> `Project...`.
2. Wählen Sie `Spring Initializr` aus der Liste der Projektoptionen.
3. Wählen Sie die entsprechenden Einstellungen für Ihr Projekt aus und klicken Sie auf `Next`.
4. Wählen Sie `Spring Data JPA` unter den Abhängigkeiten aus und klicken Sie auf `Next`.
5. Geben Sie den Namen und Speicherort Ihres Projekts an und klicken Sie auf `Finish`.

## Konfigurieren der Datenbankverbindung

Um eine Datenbankverbindung in Ihrer Spring-Anwendung zu konfigurieren, müssen Sie die entsprechenden Einstellungen in der `application.properties`- oder `application.yml`-Datei angeben. Hier ist ein Beispiel für die Konfiguration einer H2-Datenbank in der `application.properties`-Datei:

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```

In diesem Beispiel wird eine H2-In-Memory-Datenbank konfiguriert, die für Testzwecke verwendet werden kann. Sie können die Einstellungen entsprechend Ihrer Datenbankkonfiguration anpassen.

## Erstellen eines JPA-Entitätsklassen

Eine JPA-Entität ist eine Java-Klasse, die eine Datenbanktabelle repräsentiert. Sie können eine JPA-Entität erstellen, indem Sie die `@Entity`-Annotation verwenden. Hier ist ein Beispiel für eine einfache JPA-Entitätsklasse:

```java
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    private Long id;
    private String name;
    private int age;

    // Getter und Setter
}
```

In diesem Beispiel wird die `User`-Klasse als JPA-Entität definiert, die eine Datenbanktabelle `user` repräsentiert. Die `@Id`-Annotation wird verwendet, um das Primärschlüsselfeld zu kennzeichnen.

## Erstellen eines JPA-Repositories

Ein JPA-Repository ist eine Schnittstelle, die die Datenbankoperationen für eine JPA-Entität definiert. Sie können ein JPA-Repository erstellen, indem Sie das `CrudRepository`-Interface von Spring Data JPA erweitern. Hier ist ein Beispiel für ein JPA-Repository für die `User`-Entität:

```java
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    public User findByName(String name);
    public List<User> findByAgeGreaterThan(int age);
    // Weitere benutzerdefinierte Abfragen

    @Query("SELECT u FROM User u WHERE u.name = :name")
    public User getUserByName(@Param("name") String name);
}
```

In diesem Beispiel wird das `UserRepository`-Interface erstellt, das die CRUD-Operationen für die `User`-Entität definiert. Spring Data JPA generiert automatisch die Implementierung dieses Repositories zur Laufzeit.

## Verwenden des JPA-Repositories

Sie können das JPA-Repository in Ihrer Spring-Anwendung verwenden, um Datenbankoperationen auszuführen. Hier ist ein Beispiel, wie Sie das `UserRepository` in einem Service verwenden können:

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
```

In diesem Beispiel wird der `UserService` erstellt, der das `UserRepository` verwendet, um Datenbankoperationen wie Speichern, Abrufen und Löschen von Benutzern durchzuführen.

## JPA-Entitätsklassen

JPA-Entitätsklassen sind Java-Klassen, die eine Datenbanktabelle repräsentieren. Sie werden verwendet, um Daten in einer relationalen Datenbank zu speichern und abzurufen. JPA-Entitätsklassen können mit der `@Entity`-Annotation gekennzeichnet werden, um sie als JPA-Entitäten zu definieren. Hier ist ein Beispiel für eine einfache JPA-Entitätsklasse:

| JPA-Entitätsklasse | Beschreibung |
| --- | --- |
| `@Entity` | Definiert die Klasse als JPA-Entität. |
| `@Table` | Definiert den Tabellennamen und andere Tabelleneigenschaften. |
| `@Id` | Definiert das Primärschlüsselfeld der Entität. |
| `@GeneratedValue` | Definiert die Strategie zur Generierung des Primärschlüssels. |
| `@Column` | Definiert die Spalteneigenschaften wie Name, Länge und Nullbarkeit. |
| `@OneToOne` | Definiert eine Eins-zu-Eins-Beziehung zu einer anderen Entität. |
| `@OneToMany` | Definiert eine Eins-zu-Viele-Beziehung zu einer anderen Entität. |
| `@ManyToOne` | Definiert eine Viele-zu-Eins-Beziehung zu einer anderen Entität. |
| `@ManyToMany` | Definiert eine Viele-zu-Viele-Beziehung zu einer anderen Entität. |
| `@JoinColumn` | Definiert die Spalte, die für die Verknüpfung verwendet wird. |
| `@JoinTable` | Definiert die Verknüpfungstabelle für viele-zu-viele Beziehungen. |
| `@Embedded` | Definiert eine eingebettete Entität. |
| `@Embeddable` | Definiert eine eingebettete Klasse. |
| `@Transient` | Definiert ein nicht persistierbares Feld. |
| `@Version` | Definiert das Versionsfeld für die Optimistische Sperrung. |
| `@NamedQuery` | Definiert eine benannte Abfrage für die Entität. |
| `@NamedQueries` | Definiert eine Liste von benannten Abfragen für die Entität. |
| `@NamedNativeQuery` | Definiert eine benannte native Abfrage für die Entität. |
| `@NamedNativeQueries` | Definiert eine Liste von benannten nativen Abfragen für die Entität. |
| `@SequenceGenerator` | Definiert einen Sequenzgenerator für die Primärschlüsselgenerierung. |
| `@TableGenerator` | Definiert einen Tabellengenerator für die Primärschlüsselgenerierung. |
| `@Inheritance` | Definiert die Vererbungsstrategie für die Entitätshierarchie. |
| `@DiscriminatorColumn` | Definiert die Diskriminatorspalte für die Vererbung. |
| `@DiscriminatorValue` | Definiert den Diskriminatorwert für die Entität. |
| `@MappedSuperclass` | Definiert eine Superklasse für die gemeinsame Vererbung. |
| `@EntityListeners` | Definiert die Listenerklassen für die Entität. |
| `@PrePersist` | Definiert eine Methode, die vor dem Speichern der Entität aufgerufen wird. |
| `@PostPersist` | Definiert eine Methode, die nach dem Speichern der Entität aufgerufen wird. |
| `@PreUpdate` | Definiert eine Methode, die vor dem Aktualisieren der Entität aufgerufen wird. |
| `@PostUpdate` | Definiert eine Methode, die nach dem Aktualisieren der Entität aufgerufen wird. |
| `@PreRemove` | Definiert eine Methode, die vor dem Löschen der Entität aufgerufen wird. |
| .... | .... |

In diesem Beispiel wird die `User`-Klasse als JPA-Entität definiert, die eine Datenbanktabelle `user` repräsentiert. Die `@Id`-Annotation wird verwendet, um das Primärschlüsselfeld zu kennzeichnen.

## @Transactional

Die `@Transactional`-Annotation wird verwendet, um eine Transaktion für eine Methode oder eine Klasse zu definieren. Sie ermöglicht die atomare Ausführung von Datenbankoperationen, indem sie sicherstellt, dass alle Operation

```java

import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Transactional
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
```

In diesem Beispiel wird die `@Transactional`-Annotation verwendet, um die `saveUser`, `getUserById` und `deleteUser`-Methoden als Transaktionen zu definieren. Die `readOnly = true`-Eigenschaft wird verwendet, um die Methode als schreibgeschützt zu kennzeichnen.

Diese werden dann automatisch in einer Transaktion ausgeführt, die bei Erfolg committed wird und bei einem Fehler gerollbacked wird.

Wenn kein fehler auftritt wird die Transaktion automatisch committed.

## Zusammenfassung

In diesem Abschnitt haben wir die Verwendung von Datenbanken in Spring mithilfe von Spring Data JPA behandelt. Wir haben

- Spring Data JPA installiert;
- die Datenbankverbindung konfiguriert,
- eine JPA-Entitätsklasse erstellt,
- ein JPA-Repository erstellt und
- das JPA-Repository in einer Spring-Anwendung verwendet.

Spring Data JPA bietet eine leistungsstarke und flexible Möglichkeit, mit Datenbanken in Spring-Anwendungen zu interagieren. Es vereinfacht die Entwicklung von Datenzugriffsschichten und bietet eine Vielzahl von Funktionen zur Unterstützung von Datenbankoperationen.
