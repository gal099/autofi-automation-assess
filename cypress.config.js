const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");


// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin.default(config)],
//     })
//   );

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }



module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  experimentalModifyObstructiveThirdPartyCode: false,
  
  // pageLoadTimeout: 30000,

  blockHosts: [
    "*hsappstatic.net",
    "*hubspot.com",
    "*hs-banner.com",
    "*usemessages.com",
    "*newrelic.com",
    "*nr-data.net",
    "*datadoghq.com",
    "*vidoomy.com",
    "*googlesyndication.com",
    "*servenobid.com",
    "*amazon-adsystem.com",
    "*sonobi.com",
    "*e-planning.net",
    "*casalemedia.com",
    "*https://http-intake.logs.datadoghq.com",
    "*rubiconproject.com",
    "*doubleclick.net",
    "*smartadserver.com",
    "*smilewanted.com",
    "*lijit.com",
    "*bidswitch.net",
    "*onetag-sys.com",
    "*3lift.com",
    "*openx.net",
    "*criteo.com"
  ],

  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: 'https://www.tutorialspoint.com'
  },
});
