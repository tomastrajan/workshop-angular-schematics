import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { Schema as HelloOptions } from './schema';

// TODO 1. start build with npm run build:watch

// TODO 2. create "files/" folder in the "hello/" folder

// TODO 3. create folder inside of the "files/" folder using template syntax ( __variable@helper__ ), "hello-__name@dasherize__"

// TODO 4. create file inside of the newly created template folder with name "hello-__name@dasherize__.component.ts"

export function hello(_options: HelloOptions): Rule {

  return (tree: Tree, _context: SchematicContext) => {

    console.log('Running schematics with following options', _options);

    // TODO 5. load template into "sourceTpl" variable using url() function ( from @angular-devkit/schematics package ) with "./files" parameter

    // TODO 6. apply options onto template using apply() function ( from @angular-devkit/schematics package )
    // the function accepts our sourceTpl and an array of rules
    // we will provide a single rule called template() ( from @angular-devkit/schematics package )
    // inside of that rule we will provide options object into which we will spread our options ( like this the following { ..._options } )
    // result of the apply() function whould be stored in the sourceTplParametrized variable

    // TODO 7. spread in strings  object ( from @angular-devkit/core ) into the template() options ( { ..._options, ...strings } )

    // TODO 8. return mergeWith() with "sourceTplParametrized" as an argument and call it with (tree, _context)
    // to prevent typescript compiler from complaining that we have unused variable tree

    return tree;
  };

}
