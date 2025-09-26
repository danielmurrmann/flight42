import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    supportFile: "frontend/apps/design-system/cypress/support/component.ts",
    indexHtmlFile: "frontend/apps/design-system/cypress/support/component-index.html",
    devServer: {
      framework: "angular",
      bundler: "webpack",
      options: {
        projectConfig: {
          root: '',
          sourceRoot: 'frontend/apps/design-system',
          buildOptions: {
            outputPath: 'dist/design-system',
            index: 'frontend/apps/design-system/src/index.html',
            main: 'frontend/apps/design-system/src/main.ts',
            tsConfig: 'frontend/apps/design-system/tsconfig.json',
            inlineStyleLanguage: 'css',
            assets: ['frontend/apps/design-system/src/favicon.ico', 'frontend/apps/design-system/src/assets'],
            styles: ['frontend/apps/design-system/src/styles.css'],
            scripts: [],
            buildOptimizer: false,
            optimization: false,
            vendorChunk: true,
            extractLicenses: false,
            sourceMap: true,
            namedChunks: true,
          },
        },
      },
    },
    specPattern: "frontend/libs/**/ui-*/**/*.spec.cy.ts",
  },
  e2e: {
    supportFile: "frontend/apps/design-system/cypress/support/e2e.ts",
    specPattern: "frontend/libs/**/ui-*/**/*.e2e.cy.ts",
  },
});
