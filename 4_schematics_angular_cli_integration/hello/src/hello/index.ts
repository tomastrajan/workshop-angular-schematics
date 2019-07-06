import { apply, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

import { Schema as HelloOptions } from './schema';

export function hello(_options: HelloOptions): Rule {

  return (tree: Tree, _context: SchematicContext) => {

    console.log('Running schematics with following options', _options);

    // TODO 0. run "npm i @schematics/angular" to make sure you have additional dependency

    // TODO 1. start build with npm run build:watch ( in a separate console window / tab )

    // TODO 2. run schematics from the angular-cli-workspace using schematics command
    // it will be same until now just the relative path will point to the collection.json file
    // "schematics ../4_schematics_angular_cli_integration/hello/src/collection.json:hello --dry-run=false"

    // TODO 3. run schematics from the angular-cli-workspace using ng generate (ng g) command

    // TODO 4. run schematics from the angular-cli-workspace using ng generate command with --help flag
    // we will see all the supported options based on what we specified in the schema.json descriptions ( and schematics default options )

    // The following part is pretty specific and code heavy so dont hesitate to ask for clarification if something is not clear

    // TODO 5. read angular.json file from tree and store it in a variable

    // TODO 6. check if the variable is defined and if not throw new SchematicsException with message that we're not inside of Angular CLI workspace

    // TODO 7. JSON parse the retrieved angular.json file ( use toString() to convert retrieved buffer to string first ) and store it in a workspace variable

    // TODO 8. get a defaultProject property and store it in the projectName variable

    // TODO 9. get and store "project" configuration by retrieving "projectName" property from "workspace.projects" (workspace.projects[projectName])

    // TODO 10. create "sourceRoot" and "projectType" variables and retrieve them from "project"

    // TODO 11. create "type" variable and populate it either with "app" or "lib" string based on if the "projectType" has value of "application" string

    // TODO 11. create "path" variable which will consist of "sourceRoot" slash "type"

    // TODO 12. import "parseName" function from "@schematics/angular/utility/parse-name"

    // TODO 13. call parseName with prepared "path" and _.options.name and store the result in "parsed" variable

    // TODO 14. import move() from "@angular-devkit/schematics"

    // TODO 15. add the move() function after the template() function in the rules array of the apply() function ( apply(tpl, [template(...), move()]) ) and call it with "parsed.path"


    const sourceTpl = url('./files');
    const sourceTplParametrized = apply(sourceTpl, [template({ ..._options, ...strings })]);


    return mergeWith(sourceTplParametrized)(tree, _context);
  };

}

// TODO 16. build and run schematics (mind --dry-run because of the dev mode) (it will fail because we're not in Angular CLI workspace which is great!)

// TODO 17. run schematics from the angular-cli-workspace ( ng g ../4_schematics_angular_cli_integration/hello/src/collection.json:hello --dry-run=false )

// TODO 18. add project property of type string to schema.d.ts and schema.json files

// TODO 19. adjust "projectName" variable to be "_options.project" or fall back to the value of "defaultProject" if the "_options.project" is undefined

// TODO 20. run "ng g library some-lib --skip-install" in angular-cli-workspace to generate additional library project

// TODO 21. run schematics from the angular-cli-workspace with new --project some-lib flag ( ng g ../4_schematics_angular_cli_integration/hello/src/collection.json:hello --dry-run=false --project some-lib)

// TODO 22. try to run schematics with more complicated names like "some/path/ng My" to see how parseName generates proper folder structure

// GREAT ! Now we have Angular CLI integrated schematics which behave the same way as default ones provided by Angular!

