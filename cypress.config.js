const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://demoqa.com/automation-practice-form",
    // baseUrl: "https://demoblaze.com/",
    // baseUrl: "https://jsonplaceholder.typicode.com/",
    // defaultCommandTimeout: 8000,
    // viewportHeight: 880,
    // viewportWidth: 1200,
    // retries: {
    //   runMode: 0,
    //   openMode: 1,
    // },
    retries: 1,
  },
});
