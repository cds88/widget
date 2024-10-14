# Widget created for testing purposes
* Implements atomic design (atoms, molecules, organism)*
* Implements Suspense, Error boundry*
* Utilises Material-UI with styled-components as styling strategy*
* Theming utilizing styled-components ThemeProvider*
* Basic components for quick access utilze Material-ui*
* Implements multiple unit testing strategies*
* Implements simple Object Orientated type approach to E2E testing
* Implements distinct remote staging branches for each respective feature/fix branch pushed to remote repository
* Push to production branch requires administrator acceptance before deployment*
* Uses ts-docs for doumenting utilities functions*



# Steps to run and facilitate
* yarn to install dependencies *
* copy .env.example to .env  - set WEBPACK_DEVELOPMENT_PORT  
* yarn start -           for developement *
* yarn test  -           for testing with jest *
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

