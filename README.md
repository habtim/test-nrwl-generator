# Testing nrwl generator

## Steps to reproduce
1. `npx create-nx-workspace --preset=angular`
2. `nx generate @nrwl/workspace:workspace-generator application`
3. Remove `"cli": "nx"` from generated schema.json. Otherwise the generator just do nothing
4. Run `nx workspace-generator application`

Following error should occur
```
PS C:\test-nrwl-generator> nx workspace-generator application
√ What name would you like to use for the application? · second-app
√ Which stylesheet format would you like to use? · scss
√ Would you like to configure routing for this application? (y/N) · false
[NX] Angular devkit called `writeWorkspace`, this may have had unintended consequences in angular.json
[NX] Double check angular.json before proceeding
Error: Could not find an NgModule. Use the skip-import option to skip importing in NgModule.
    at findModule (C:\test-nrwl-generator\node_modules\@schematics\angular\utility\find-module.js:81:11)
    at findModuleFromOptions (C:\test-nrwl-generator\node_modules\@schematics\angular\utility\find-module.js:26:38)
    at C:\test-nrwl-generator\node_modules\@schematics\angular\component\index.js:105:66
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
Error: Could not find an NgModule. Use the skip-import option to skip importing in NgModule.
    at findModule (C:\test-nrwl-generator\node_modules\@schematics\angular\utility\find-module.js:81:11)
    at findModuleFromOptions (C:\test-nrwl-generator\node_modules\@schematics\angular\utility\find-module.js:26:38)
    at C:\test-nrwl-generator\node_modules\@schematics\angular\component\index.js:105:66
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
Could not find an NgModule. Use the skip-import option to skip importing in NgModule.
```
