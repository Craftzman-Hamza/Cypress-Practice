//config.json
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotOnRunFailure: false,
    responseTimeout: 60000,
    video: false,
    watchForFileChanges: false,
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    reporter: "mochawesome",
    reporterOptions: {
      code: false,
      overwrite: false,
      reportFilename: "cypress-report",
      autOpen: true,
      charts: true,
    },
  },
});
