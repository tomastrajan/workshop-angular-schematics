import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { Schema as HelloOptions } from './schema';

// TODO 1. start buiild with npm run build:watch

// TODO 2. create files/ folder in the hello /folder

// TODO 3. create folder inside of the files/ folder using template syntax ( __variable@helper__ ), hello-__name@dasherize__

// TODO 4. create file inside of the newly created template folder with name hello-__name@dasherize__.component.ts

export function hello(_options: HelloOptions): Rule {

  return (tree: Tree, _context: SchematicContext) => {

    console.log('Running schematics with following options', _options);

    return tree;
  };

}
