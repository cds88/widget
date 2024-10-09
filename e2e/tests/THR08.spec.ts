import { expect, test } from '@playwright/test';
import { SPINNER_DATA_TESTIDS } from '../../src/components/WidgetMolecules/WidgetFallbacks/const.test';
import { styledComponentsTheme } from '../../src/styles/styledComponentsTheme';
import { THR08Page } from '../utils/THR08Page';
import { WEBPACK_DEVELOPEMENT_URL } from '../../const';
import * as e2eFunctionalTestCases from '../../playwrightTestCases/functionalTestCases'

const ELEMENTS_COUNT = 5;

test.describe('THRO8 widget page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(WEBPACK_DEVELOPEMENT_URL);
    await page.waitForSelector(
      `[data-testid=${SPINNER_DATA_TESTIDS.SPINNER_CIRCULAR_PROGRESS}]`,
      { state: 'detached' },
    );
  });

  test(e2eFunctionalTestCases.ShouldAwaitForControlsToShowTestCase.label, async ({
    page,
  }) => {
    const thr08 = new THR08Page(page);

    expect(thr08.percentageResult).toHaveText('20%');
    expect(thr08.stripeIndicators).toHaveCount(5);
    expect(thr08.stripeIndicators.first()).toHaveCSS(
      'background-color',
      styledComponentsTheme.styled.colors.indicator.selected,
    );

    for (let i = 1; i < ELEMENTS_COUNT - 1; i++) {
      await expect(thr08.stripeIndicators.nth(i)).toHaveCSS(
        'background-color',
        styledComponentsTheme.styled.colors.indicator.notSelected,
      );
    }
  });
  test('Should present proper results after 1 click', async ({ page }) => {
    const thr08 = new THR08Page(page);

    await thr08.increment();
    expect(thr08.percentageResult).toHaveText('40%');

    for (let i = 0; i < 1; i++) {
      await expect(thr08.stripeIndicators.nth(i)).toHaveCSS(
        'background-color',
        styledComponentsTheme.styled.colors.indicator.selected,
      );
    }

    for (let i = 2; i < ELEMENTS_COUNT - 1; i++) {
      await expect(thr08.stripeIndicators.nth(i)).toHaveCSS(
        'background-color',
        styledComponentsTheme.styled.colors.indicator.notSelected,
      );
    }
  });
  test('Should present proper results after 2 clicks', async ({ page }) => {
    const thr08 = new THR08Page(page);

    await thr08.increment(2);
    expect(thr08.percentageResult).toHaveText('60%');

    for (let i = 0; i < 2; i++) {
      await expect(thr08.stripeIndicators.nth(i)).toHaveCSS(
        'background-color',
        styledComponentsTheme.styled.colors.indicator.selected,
      );
    }

    for (let i = 3; i < ELEMENTS_COUNT - 1; i++) {
      await expect(thr08.stripeIndicators.nth(i)).toHaveCSS(
        'background-color',
        styledComponentsTheme.styled.colors.indicator.notSelected,
      );
    }
  });

  test('Should present proper results after 3 clicks', async ({ page }) => {
    const thr08 = new THR08Page(page);

    await thr08.increment(3);
    expect(thr08.percentageResult).toHaveText('80%');

    for (let i = 0; i < 3; i++) {
      await expect(thr08.stripeIndicators.nth(i)).toHaveCSS(
        'background-color',
        styledComponentsTheme.styled.colors.indicator.selected,
      );
    }

    for (let i = 4; i < ELEMENTS_COUNT - 1; i++) {
      await expect(thr08.stripeIndicators.nth(i)).toHaveCSS(
        'background-color',
        styledComponentsTheme.styled.colors.indicator.notSelected,
      );
    }
  });
  test('Should present proper results after 4 clicks', async ({ page }) => {
    const thr08 = new THR08Page(page);

    await thr08.increment(4);
    expect(thr08.percentageResult).toHaveText('100%');

    for (let i = 0; i < ELEMENTS_COUNT - 1; i++) {
      await expect(thr08.stripeIndicators.nth(i)).toHaveCSS(
        'background-color',
        styledComponentsTheme.styled.colors.indicator.selected,
      );
    }
  });
});
