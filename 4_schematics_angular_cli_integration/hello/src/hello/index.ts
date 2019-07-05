import { apply, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

import { Schema as HelloOptions } from './schema';

export function hello(_options: HelloOptions): Rule {

  return (tree: Tree, _context: SchematicContext) => {

    console.log('Running schematics with following options', _options);

    // TODO 1. start build with npm run build:watch ( in a separate console window / tab )

    // TODO 2. run schematics from the angular-cli-workspace using schematics command
    // it will be same until now just the relative path will point to the collection.json file
    // "schematics ../4_schematics_angular_cli_integration/hello/src/collection.json:hello --dry-run=false"

    // TODO 3. run schematics from the angular-cli-workspace using ng generate (ng g) command

    // TODO 4. run schematics from the angular-cli-workspace using ng generate command with --help flag
    // we will see all the supported options based on what we specified in the schema.json descriptions ( and schematics default options )


    // TODO 5.

    const sourceTpl = url('./files');
    const sourceTplParametrized = apply(sourceTpl, [template({ ..._options, ...strings })]);


    return mergeWith(sourceTplParametrized)(tree, _context);
  };

}
