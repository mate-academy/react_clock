import { defineConfig } from 'cypress'

export default defineConfig({
  video: true,
  viewportHeight: 1920,
  viewportWidth: 1080,
  screenshotOnRunFailure: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'raw_reports',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
  },
  component: {
    setupNodeEvents(on, config) {},
    specPattern: 'src/**/*.spec.{js,ts,jsx,tsx}',
  },
})
