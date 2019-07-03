import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hello(_options: any): Rule {

  return (tree: Tree, _context: SchematicContext) => {

    // TODO 1. create variable for desired file name (eg hello.js)

    // TODO 2. create variable with the content of the created file (try using javascript template strings)

    // TODO 3. create file in the tree using the pre-created variables

    // TODO 4. build and run schematics to create file (mind --dry-run because of the dev mode)

    // TODO 5. run created file using node

    return tree;

    // TODO 6. try to re-run schematics ( explore --force flag )
  };

}
