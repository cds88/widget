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
 * Separate staging branch to gather baches of changes
 * Master branch requires Administrators admissions before changes are pushed to the production 

Feature1 Branch    ->   feature_[feature-branch-1-name].staging ->            
Feature2 Branch    ->   feature_[feature-branch-2-name].staging ->                       
                                                                    Develop  -> staging  -> Master  -> Administrators admissions  ->   Production 
Fix1 Branch        ->   fix_[fix-branch-1-name].staging         ->    
Fix2 Branch        ->   fix_[fix-branch-2-name].staging         ->    

# Staging Environments
* [Widget-Feature/fix staging branches](https://widget.staging[Feature|FixBranch{BranchId}].setsudo.net)
* [Widget Develop Branch](https://staging.widget.setsudo.net)
* [Widget Production Branch](https://widget.setsudo.net)

