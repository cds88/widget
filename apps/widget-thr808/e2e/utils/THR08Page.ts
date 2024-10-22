import { Locator, Page } from '@playwright/test';
import { WIDGET_INDICATOR_DATA_TEST_IDS } from '@widget/molecules/WidgetIndicator/const.test';
import { WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS } from '@widget/molecules/WidgetVerticalPercentageControl/const.test';
 

const STRIPE_INDICATORS_REGEXP = new RegExp(
  `^${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}[0-4]`,
);

export class THR08Page {
  page: Page;
  plusButton: Locator;
  minusButton: Locator;
  percentageResult: Locator;
  stripeIndicators: Locator;
  constructor(page: Page) {
    this.page = page;
    this.plusButton = page.getByTestId(
      WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_PLUS_BUTTON,
    );
    this.minusButton = page.getByTestId(
      WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_MINUS_BUTTON,
    );
    this.percentageResult = page.getByTestId(
      WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_RESULT,
    );
    this.stripeIndicators = page.getByTestId(STRIPE_INDICATORS_REGEXP);
  }
  async increment(nTimes: number = 1) {
    await this.clickNTimes(nTimes, this.plusButton);
  }
  async decrement(nTimes: number = 1) {
    await this.clickNTimes(nTimes, this.minusButton);
  }
  async clickNTimes(nTimes: number, button: Locator) {
    for (let i = 0; i < nTimes; i++) {
      await button.click();
    }
  }
}
