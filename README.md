# Widget created for testing purposes
*Implements atomic design (atoms, molecules, organism)*
*Implements Suspense, Error boundry*
*Utilises Material-UI with styled-components as styling strategy*
*Implements multiple unit testing strategies*
*Uses ts-docs for doumenting utilities functions*



# Steps to run and facilitate
* yarn to install dependencies *
* yarn start - for developement *
* yarn test  - for testing with jest *


# Gitflow pattern implemented
 * Each feature/fix branch has it's own staging environment
 * Develop branch gathers multiple commitments 
 * Master branch requires Administrators admissions before changes are pushed to the production 

Feature1 Branch    ->   Staging.FeatureBranch1 ->            
Feature2 Branch    ->   Staging.FeatureBranch2 ->                       
                                                     Develop  -> Staging.DevelopBranch  -> Master  -> Administrators admissions  ->   Production 
Fix1 Branch        ->   Staging.FixBranch1     ->    
Fix2 Branch        ->   Staging.FixBranch2     ->    

# Staging Environments
* [Widget-Feature/fix staging branches](https://widget.staging[Feature|FixBranch{BranchId}].setsudo.net)
* [Widget Develop Branch](https://widget.staging.setsudo.net)
* [Widget Production Branch](https://widget.setsudo.net)

