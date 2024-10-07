import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e/tests',
  timeout: 30000,
  retries: 2,
  use: {
    baseURL: 'http://localhost:3000',
    browserName: 'chromium',
    headless: true, // Run tests in headless mode
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'Webkit', use: { browserName: 'webkit' } },
  ],
});
