import { test, expect } from '@playwright/test';

import * as fs from 'fs';
import { PNG } from 'pngjs';

import Pixelmatch from 'pixelmatch'; 
import { getScreenshotPath } from '../utils/getScreenshotPath';
import { PixelMismatchMainViewTestCase } from '../../playwrightTestCases/visualRegressionTestCases/PixelMismatchMainView';
import { SPINNER_DATA_TESTIDS } from '@widget/molecules/WidgetFallbacks/const.test';

test.describe('Visual regression test for THR08 widget', () => {
  test(PixelMismatchMainViewTestCase.label, async ({ page, browserName }) => {
    await page.goto('http://127.0.0.1:3010');
    await page.waitForSelector(
      `[data-testid=${SPINNER_DATA_TESTIDS.SPINNER_CIRCULAR_PROGRESS}]`,
      { state: 'detached' },
    );

    const SCREENSHOT_PATH = getScreenshotPath('new-screenshot.png');
    const BASELINE_SCREENSOT_PATH = getScreenshotPath(
      'baseline-screenshot.png',
    );
    const DIFF_PIXEL_MATCH = getScreenshotPath('diff-pixel-match.png');

    await page.screenshot({ path: SCREENSHOT_PATH });

    if (!fs.existsSync(BASELINE_SCREENSOT_PATH)) {
      fs.copyFileSync(SCREENSHOT_PATH, BASELINE_SCREENSOT_PATH);
    } else {
      const baselineImg = PNG.sync.read(
        fs.readFileSync(BASELINE_SCREENSOT_PATH),
      );
      const newImg = PNG.sync.read(fs.readFileSync(SCREENSHOT_PATH));
      const { width, height } = baselineImg;

      const diff = new PNG({ width, height });

      const numDiffPixels = Pixelmatch(
        baselineImg.data,
        newImg.data,
        diff.data,
        width,
        height,
        { threshold: 0.1 },
      );

      if (numDiffPixels > 0) {
        fs.writeFileSync(DIFF_PIXEL_MATCH, PNG.sync.write(diff));
        console.log(
          `Found ${numDiffPixels} pixels that differ. Diff image saved as 'diff-screenshot.png'.`,
        );
      } else {
        console.log('No visual differences found.');
      }

      expect(numDiffPixels).toBe(0);
    }
  });
});
