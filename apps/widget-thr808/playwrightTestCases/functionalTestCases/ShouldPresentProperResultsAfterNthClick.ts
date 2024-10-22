import { E2ETestDescription } from '../types';
import { FunctionalE2ETestsEnum } from './types';

/**
 * Should await before spinner dissapears and correctly show results at initial load.
 * Initial data is predefined
 */
export const ShouldPresentProperResultsAfterNthClick: E2ETestDescription<FunctionalE2ETestsEnum> =
  {
    testCaseKey: FunctionalE2ETestsEnum.SHOULD_AWAIT_FOR_INDICATORS_TO_SHOW,
    label:
      'Should await before spinner dissabpears and correctly show results at initial load',
    descriptionRequirement: `The system usualy waits until the initial control data loads.
    The page should properly await for the spinner dissapear showing initial data that are
    predefined.
    `,
  };
