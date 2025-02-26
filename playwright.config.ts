import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './playwright_tests/tests',
  timeout: 120000,
  reporter: [['html', { outputFolder: 'playwright-report' }]], // Add HTML reporter
  use: {
    browserName: 'chromium',
    headless: false, // Set to false to see the browser
  },
  projects: [
    { name: 'Desktop Chrome', use: { ...devices['Desktop Chrome'] } },
  ],
});