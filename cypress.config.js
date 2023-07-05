const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    "baseUrl": "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    credenciales: {
      user: "standard_user",
      pass: "secret_sauce"
    }
  }
});
