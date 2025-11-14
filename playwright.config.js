const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,

  reporter: [
    ['allure-playwright'],
    ['html', { outputFolder: 'playwright-report' }]
  ],

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'storageState.chromium.json'
      }
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        storageState: 'storageState.firefox.json'
      }
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        storageState: 'storageState.webkit.json'
      }
    }
  ],

  use: {
    headless: false,
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'on',
    video: 'retain-on-failure'
  },

  globalSetup: require.resolve('./global-setup'),
});
