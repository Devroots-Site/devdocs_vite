# Erstellen und Einbinden von Paketen

In Python können Sie Pakete erstellen, um Ihren Code zu organisieren und wiederzuverwenden. Ein Paket ist eine Sammlung von Modulen, die zusammengehören. Ein Modul ist eine Datei, die Python-Code enthält. Sie können Module in Paketen organisieren, um Ihren Code in logische Einheiten zu unterteilen.

## Erstellen eines Pakets

Pakete werden in den Ordner `lib` erstellt. In diesem Ordner können Sie Ihre Python-Dateien speichern, die als Module fungieren. Jedes Modul enthält Funktionen, Klassen und Variablen, die in anderen Modulen verwendet werden können.

Um ein Paket zu erstellen, erstellen Sie einen Ordner mit dem Namen des Pakets im `lib`-Ordner. In diesem Ordner können Sie Ihre Python-Dateien speichern, die als Module fungieren. Jedes Modul enthält Funktionen, Klassen und Variablen, die in anderen Modulen verwendet werden können.

```plaintext
lib/
    mypackage/
        __init__.py
        module1.py
        module2.py
```

In diesem Beispiel wird ein Paket `mypackage` erstellt, das die Module `module1` und `module2` enthält. Das Modul `__init__.py` ist erforderlich, damit Python das Verzeichnis als Paket erkennt.

## Einbinden eines Pakets

Um ein Paket in Ihrem Code zu verwenden, müssen Sie es importieren. Sie können ein Paket importieren, indem Sie den Namen des Pakets gefolgt von einem Punkt und dem Namen des Moduls angeben.

```python
import mypackage.module1
import mypackage.module2
```

In diesem Beispiel werden die Module `module1` und `module2` aus dem Paket `mypackage` importiert. Sie können dann auf die Funktionen, Klassen und Variablen in den Modulen zugreifen, indem Sie den Modulnamen gefolgt von einem Punkt und dem Namen der Funktion, Klasse oder Variablen verwenden.

```python
mypackage.module1.function1()
mypackage.module2.function2()
```

In diesem Beispiel wird die Funktion `function1` aus dem Modul `module1` und die Funktion `function2` aus dem Modul `module2` aufgerufen.

## Verwendung von `from`-Importen

Sie können auch einzelne Funktionen, Klassen und Variablen aus einem Modul importieren, indem Sie den Namen des Moduls gefolgt von `import` und dem Namen der Funktion, Klasse oder Variablen angeben.

```python
from mypackage.module1 import function1
from mypackage.module2 import function2
```

In diesem Beispiel werden die Funktionen `function1` aus dem Modul `module1` und `function2` aus dem Modul `module2` importiert. Sie können dann auf die Funktionen zugreifen, indem Sie ihren Namen verwenden.

```python
function1()
function2()
```

In diesem Beispiel werden die Funktionen `function1` und `function2` aufgerufen.

## Verwendung von `as`-Aliasen

Sie können auch `as`-Aliasen verwenden, um den Namen eines Moduls, einer Funktion, einer Klasse oder einer Variablen zu ändern, wenn Sie sie importieren.

```python
import mypackage.module1 as m1
import mypackage.module2 as m2
```

In diesem Beispiel werden die Module `module1` und `module2` aus dem Paket `mypackage` importiert und als `m1` bzw. `m2` umbenannt. Sie können dann auf die Funktionen, Klassen und Variablen in den Modulen zugreifen, indem Sie den Aliasnamen gefolgt von einem Punkt und dem Namen der Funktion, Klasse oder Variablen verwenden.

```python

m1.function1()
m2.function2()
```

In diesem Beispiel wird die Funktion `function1` aus dem Modul `module1` und die Funktion `function2` aus dem Modul `module2` aufgerufen.

## Installieren von Paketen

Sie können Pakete auch von PyPI (Python Package Index) installieren, einem Repository für Python-Pakete. Sie können Pakete von PyPI mit dem Paketmanager `pip` installieren.

```plaintext
pip install package-name
```
