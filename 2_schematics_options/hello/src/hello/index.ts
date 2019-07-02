import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// TODO 1. build and run schematics with random parameters (eg --a --b --c 123)

// TODO 2. create schema.d.ts file in /hello folder

// TODO 3. create typescript interface with name Schema and a string name property

// TODO 4. import and use Schema interface in this file to type _options function parameter ()

// TODO 5. create schema.json file in /hello folder

// TODO 6. copy base content into schema.json file from ./helpers folder

// TODO 7. add name property to the schema.json ( specify its type, add description )

// TODO 8. reference schema.json in the collection.json file for hello schematics ( using  schema property and path to file )

export function hello(_options: any): Rule {

  return (tree: Tree, _context: SchematicContext) => {

    console.log('Running schematics with following options', _options);

    // TODO 8. retrieve name property form _options ( store it in a name variable )

    // TODO 9. use name variable to parametrize hello.js file content ( replace NG-MY with variable using string template syntax ${} )

    tree.create('hello.js', `console.log('Hello NG-MY!');`);

    // TODO 10. build and run schematics with --name param to create file (mind --dry-run because of the dev mode)

    // TODO 11. run created file using node

    // TODO 12. explore running schematics with wrong params like --name1 or without any params at all

    return tree;

    // TODO 13. add new option in both schema.d.ts and schema.json ( for example greeting type, use enum type and specify possible values )

    // TODO 14. add default value (eg Hello) and x-prompt for the new property

    // TODO 15. use new property to replace hardcoded "Hello" in the generated file content
  };
}
