# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [v1.0.1] - 2024-10-03

### Added
- **Distinct feature/fix branches**: Each push to remote repository utilize github actions CI/CD workflows 
   - CI/CD runs tests on github actions runner
   - Each push to feature or fix branch creates a remote staging repository for given branch for testing purposes
   - Each push to staging branch runs deployment to staging environment
   - Production deployment workflow requires administrators acceptance before deployment
- **E2E Testing with Playwright**: Implemented simple object orientated approach for E2E testing.
- **Snapshot Testing**: Implemented snapshot testing all components using Jest and React Testing Library.
  - Added a mock for the `WidgetTHR08` component in the snapshot test to simplify the test case.
  - Included necessary test setup, including `QueryClientProvider` for React Query and `ThemeProvider` for Material UI.
  - The snapshot test ensures that the rendered output of the component matches the expected structure.
- **Surpress console.error thrown during tests**: Mocked console.error to avoid long error stack traces messing the output of test cases.
- **Moved tests to dedicated __tests__ directories**: Each test directory has it's own const.test.ts file to encompass data-testid parameters.

## [v1.0.0] - 2024-09-30

### Added
- **React Suspense Implementation**: By throwing a Promise inside a react component wrapped in Suspense we can force the Suspense fallback to happen.
  - This is helpful for decoupling particular states of application implementations.
- **Test Driven Developement**: As part of TDD, components should meet certain conditions. 
  - A example of those conditions is the implementation of *widgetIndicatorTest* script that creates a JSON array of predefined conditions for the 
    WidgetIndicator component. The JSON array encompass all possible states of the WidgetIndicator. 
  - The test case is written first, and the component comes later. The component has to meet the criteria of the testing conditions beforehand. 
- **Implementation of THR08 Widget**: As part of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology.
  - The entire ecosystem of this app is centered around Widgets. Components are divided into widgetAtoms, widgetMolecules and finaly widgetOrganisms. 
  - Additional layer of abstraction could be implemented, so that the WidgetTHR08 could be derived into a more abstract form. 
- **Initial release of the application**: First version of application.
