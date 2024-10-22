import { defineConfig } from '@playwright/test';

const browsersCommonConfig = {
  baseUrl: `http://localhost:${process.env.WEBPACK_DEVELOPMENT_TEST_PORT}`,
  headless: true,  
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  deviceScaleFactor: 1,
  viewport: {
    height: 720,
    width: 1280,
  },  
}

const chromiumConfig = { browserName: 'chromium', ...browsersCommonConfig };
const firefoxConig = { browserName: 'firefox', ...browsersCommonConfig };
const webkitConfig = { browserName: 'webkit', ...browsersCommonConfig };

export default defineConfig({
  // webServer: {
  //   command: 'yarn start:test',
  // },
  testDir: './e2e/tests',
  timeout: 30000,
  retries: 2,
  use: {
    browserName: 'chromium',
    ...browsersCommonConfig
  },

  projects: [
    { name: 'Chromium', use: chromiumConfig },
    { name: 'Firefox', use: firefoxConig },
    // { name: 'Webkit', use: webkitConfig },
  ],
});
