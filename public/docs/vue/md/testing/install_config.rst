Install & Config ⚙️
=================================

Installieren 🐧
----------------------

Um Vitest zu installieren, müssen **NodeJs** und **NPM** installiert sein. Wenn dies noch nicht der Fall ist, können die beiden über den folgenden Link installiert werden:

- NodeJs & NPM: [https://nodejs.org/](https://nodejs.org/)

Um dann **Vitest** in Ihrem Projekt zu installieren, führen Sie den folgenden Befehl aus:

.. code-block:: bash

    npm install -D vitest

Die Option `-D` sorgt dafür, dass **Vitest** in die `devDependencies` Ihres Projekts installiert wird. Dies bedeutet, dass Vitest nur während der Entwicklung verwendet wird und nicht im Produktionscode enthalten ist, wodurch Ihre Produktionsumgebung schlank bleibt.

Wenn Sie mit **Vue** arbeiten, empfiehlt sich zusätzlich die Installation des Vue-Plugins:

.. code-block:: bash

    npm install @vitejs/plugin-vue

Vitest Config 🪛
---------------------------------

Um **Vitest** zu konfigurieren, erstellen Sie eine `vitest.config.mjs` Datei. Diese Datei definiert, wie Vitest und die damit verbundenen Plugins eingerichtet werden. Der folgende Inhalt zeigt eine Beispielkonfiguration:

.. code-block:: javascript

    import { defineConfig } from 'vitest/config';
    import vue from '@vitejs/plugin-vue';
    import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
    import tsconfigPaths from 'vite-tsconfig-paths';

    // https://vitejs.dev/config/
    /** @type {import('vite').UserConfig} */
    export default defineConfig({
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './tests/setup-file.ts',
            include: [
                // Matches all files with extension 'js', 'jsx', 'ts' and 'tsx'
                'src/**/*.{test,spec}.{js,ts}',
            ],
        },
        plugins: [
            vue({
                template: { transformAssetUrls },
            }),
            quasar({
                sassVariables: 'src/quasar-variables.scss',
            }),
            tsconfigPaths(),
        ],
    });

Diese Konfiguration enthält einige wichtige Abschnitte:

- **environment: 'jsdom'**: Stellt eine DOM-Umgebung bereit, die es ermöglicht, Vue-Komponenten zu testen, die auf eine Browserumgebung angewiesen sind. **jsdom** simuliert die notwendigen Browser-APIs, sodass Tests auch außerhalb eines echten Browsers durchgeführt werden können. Dies ist besonders nützlich, wenn Komponenten direkt mit dem DOM interagieren, da eine Simulation im Node.js-Umfeld eine ähnliche Umgebung bereitstellt wie ein tatsächlicher Browser. Alternativ gibt es auch **happy-dom** als Environment, das ebenfalls eine schnelle und einfache DOM-Umgebung bietet. Beachten Sie, dass **jsdom** oder **happy-dom** installiert werden müssen, um die Tests auszuführen.

- **setupFiles**: Hier können Sie eine Datei angeben, die vor allen Tests geladen wird. Das ist nützlich, wenn Sie globale Setups benötigen, wie z. B. das Registrieren von globalen Komponenten, Plugins oder Mocking von APIs, die in Ihren Tests verwendet werden sollen. Diese Datei wird verwendet, um einmalige Konfigurationen für alle Tests durchzuführen. Ein Beispiel für den Inhalt einer `setup-file.ts` Datei könnte so aussehen:

  .. code-block:: javascript

      import '@testing-library/jest-dom/vitest';
      import createFetchMock from 'vitest-fetch-mock';
      import { vi } from 'vitest';

      const fetchMock = createFetchMock(vi);
      fetchMock.enableMocks();

  - **import '@testing-library/jest-dom/vitest'**: Ermöglicht zusätzliche Matcher für DOM-Elemente, wie z. B. `toBeInTheDocument()`, die das Testen von Vue-Komponenten erleichtern.
  - **createFetchMock**: Diese Funktion erstellt ein Mock für `fetch`, sodass HTTP-Anfragen in Ihren Tests simuliert werden können. Dies ist besonders nützlich, um externe API-Aufrufe zu mocken und sicherzustellen, dass Ihre Tests keine echten Netzwerkaufrufe durchführen. Dadurch bleiben die Tests isoliert und zuverlässig.
  - **fetchMock.enableMocks()**: Aktiviert die Mock-Funktionalität für `fetch`, sodass alle `fetch`-Aufrufe während der Tests automatisch gemockt werden.

- **include**: Definiert, welche Dateien in den Testlauf eingeschlossen werden sollen. In diesem Beispiel werden alle Dateien in `src/` berücksichtigt, die auf `.test.js`, `.spec.js`, `.test.ts` oder `.spec.ts` enden. Dies stellt sicher, dass alle relevanten Testdateien automatisch erkannt werden, sodass Sie keine einzelnen Dateien manuell angeben müssen. Die Verwendung von Platzhaltern (`**/*.{test,spec}.{js,ts}`) ermöglicht es, Tests in beliebigen Unterverzeichnissen automatisch zu finden.

- **plugins**:
  - **vue()**: Dieses Plugin bindet Vue in die Entwicklungsumgebung ein. Es ist notwendig, damit Vitest in der Lage ist, Vue-Komponenten zu verstehen und zu verarbeiten. Ohne dieses Plugin könnte Vite keine Vue-Komponenten korrekt handhaben.
  - **quasar()**: Falls Sie das Quasar Framework nutzen, ermöglicht dieses Plugin die Integration der Quasar-spezifischen Komponenten und Styles. Dies ist wichtig, damit die Quasar-Komponenten während der Tests korrekt gerendert werden und alle Styles und Abhängigkeiten korrekt eingebunden sind. Sie können damit beispielsweise spezifische SCSS-Variablen definieren, die Ihre Anwendung verwendet.
  - **tsconfigPaths()**: Dieses Plugin hilft, die in Ihrer `tsconfig.json` definierten Pfade aufzulösen. Das ist besonders hilfreich, wenn Sie TypeScript verwenden und Pfadkürzel wie `@components/` definieren möchten, um den Import von Modulen zu erleichtern. Dies sorgt dafür, dass alle importierten Module auch zur Testzeit korrekt aufgelöst werden können.

Zusammenfassung 🤓
--------------------

Mit der `vitest.config.mjs` Datei wird die grundlegende Konfiguration für das Testen Ihrer Vue-Komponenten festgelegt. Sie integriert notwendige Plugins und sorgt dafür, dass die Tests in einer geeigneten Umgebung ausgeführt werden. Die einzelnen Optionen ermöglichen eine flexible Anpassung an die Bedürfnisse Ihres Projekts und stellen sicher, dass Tests effizient und zuverlässig durchgeführt werden können.