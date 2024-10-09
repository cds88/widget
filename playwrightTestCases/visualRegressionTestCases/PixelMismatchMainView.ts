import { E2ETestDescription } from "../types";
import { VisualRegressionE2ETestsEnum } from './types';

/**
 * Check for pixel mismatch in base view. The controlls are set for default.
 */
export const PixelMismatchMainViewTestCase:E2ETestDescription<VisualRegressionE2ETestsEnum>= {
    label: 'Check for pixel mismatch in base view',w fi
    testCaseKey: VisualRegressionE2ETestsEnum.PIXEL_MISMATCH_MAIN_VIEW,
    descriptionRequirement: `This test case should test the most basic case and initial load of application. 
    The Widget should be in it's default form without too much interaction from the user.
    Data should be fetched properly and fit the initial requirements.
    Test should run on all types of supported browsers.
    `
}
 