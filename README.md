# Widget created for testing purposes
* Implements `Atomic Design` (atoms, molecules, organism)
* Atomic design is combined with `Turborepo` monorepository architecture:
  - atoms, molecules and organisms are all distinct component packages served by Turborepo
  - components are rather stateless, they will depend on the data being fed into them
  - organisms are imported to apps. In this example we have a THR08 organism that is rendered inside widget-thr808 app 
  - Each organisms is a final form being rendered inside a app. 
  - This approach is modular, allows for separation of concern and is a example of modern React app aproach
* Implements Suspense, Error boundry
* Utilises Material-UI with styled-components as styling strategy
* Theming utilizing styled-components ThemeProvider
* Basic components for quick access utilze Material-ui
* Implements multiple unit testing strategies
* End-to-End testing implemented with Playwright
* End-to-End visual regression tests with help of Pixelmatch
  - each type of browser has it's own baseline screenshot saved in the `screenshots` directory
  - any given mismatch will throw an error
* Script `widgetIndicatorTestCase.ts` is a generator that creates all possible test cases for a particular component 
  - Test cases are imported first to the unit test
  - The related component has to pass all test cases created beforehand
  - Example of `Test Driven Developement` approach
* Class `THR08Page` is example of `Object Orientated Programming` approach in the End-to-End test cases
  - Allows to reuse lots of logic
  - Creates a adapter between the functionalities and the test case
   
* Implements distinct remote staging branches for each respective feature/fix branch pushed to remote repository
  - If a developer pushes his branch to feature/test-1 the application will be deployed under a distinct subdomain related to the branch name
  - Same happens with fix branches which deploy under distinct subdomains aswell
  - Main staging branch exists for CI/CD pipeline to deploy app to generic staging domain
* Push to production branch requires administrator acceptance before deployment
* Uses ts-docs for doumenting utilities functions

# Steps to run and facilitate

## Root directory:

* yarn install         - install dependencies
* yarn dev             - start developement server
* yarn test            - start unit tests

## App directory:

* yarn to install dependencies 
* copy .env.example to .env  - set WEBPACK_DEVELOPMENT_PORT  
* yarn start           - for developement 
* yarn test            - for testing with jest 
* yarn test:production - for testing in mocked production environment (for future implementation)
* yarn test:e2e        - for end-to-end testing with Playwright
* yarn library         - create library build for a NPM package
* yarn build           - create build for deployment 

# Gitflow pattern implemented
 * Each feature/fix branch has it's own staging environment
 * Separate staging branch to gather baches of changes
 * Master branch requires Administrators admissions before changes are pushed to the production 

feature/my-feature-1       ->   feature_[my-feature-1].staging       ->  Develop          
feature/my-other-feature-2 ->   feature_[my-other-feature-2].staging ->  Develop                                                                                         
fix/my-first-fix           ->   fix_[my-first-fix].staging           ->  Develop  
fix/my-other-fix           ->   fix_[my-other-fix].staging           ->  Develop  

Develop  -> staging  -> Master  -> Administrators admissions  ->   Production 

# Staging Environments
* [Widget-Feature example staging branch](https://feature_test-1.staging.widget.setsudo.net)
* [Widget-Feature other example staging branch](https://feature_test-2.staging.widget.setsudo.net)
* [Widget-fix     example staging branch](https://fix_test-1.staging.widget.setsudo.net)
* [Widget Develop Branch](https://staging.widget.setsudo.net)
* [Widget Production Branch](https://widget.setsudo.net)

