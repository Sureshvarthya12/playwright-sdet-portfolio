// Load environment variables from .env
require('dotenv').config();

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // Global setup to create storageState.json (login once)
  globalSetup: require.resolve('./auth.setup'),

  // Test timeout
  timeout: 30 * 1000,

  // Retries (useful in CI)
  retries: process.env.CI ? 2 : 0,

  // Reporters
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    // Base URL from .env
    baseURL: process.env.BASE_URL,

    // Traces on first retry (debugging)
    trace: 'on-first-retry',

    // Screenshots & video on failure
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // Browser options
    headless: true,
  },

  // Run tests on all browsers
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
});
