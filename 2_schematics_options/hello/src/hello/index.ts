import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// TODO 1. build and run schematics with random parameters (eg --a --b --c 123)

// TODO 2. create schema.d.ts file in /hello folder

// TODO 3. create and export typescript interface with name Schema which will contain name property of a type string

// TODO 4. import and use Schema interface in this file to type _options argument of the hello function

// TODO 5. create schema.json file in /hello folder

// TODO 6. copy "initial" content into schema.json file from ./helpers folder

// TODO 7. add name property to the schema.json ( specify its type to be string and add short description ) and make it required

// TODO 8. reference schema.json in the collection.json file for hello schematics ( using "schema" property with path to file as a value )

export function hello(_options: any): Rule {

  return (tree: Tree, _context: SchematicContext) => {

    console.log('Running schematics with following options', _options);

    // TODO 8. retrieve name property form _options ( store it in a name variable )

    // TODO 9. use name variable to parametrize hello.js file content ( replace NG-MY with variable using string template syntax ${} )

    tree.create('hello.js', `console.log('Hello NG-MY!');`);

    // TODO 10. build and run schematics with --name param to create file (mind --dry-run=false because of the dev mode)

    // TODO 11. run created file using node

    // TODO 12. explore running schematics with wrong params like --name1 or without any params at all

    return tree;

    // TODO 13. add new "greeting" option in both schema.d.ts and schema.json, it will be of a string type
    // in schema.json we will also list possible values using enum property with an array of possible values like Hello, Ola, or Ahoj

    // TODO 14. add default value (eg Hello) and x-prompt (with the question about greeting we want to use) for the new property in schema.json file

    // TODO 15. get the new "greeting" property from _options and replace hardcoded "Hello" in the generated file content

    // TODO 16. build and run schematics with --name param, but WITHOUT --greeting param (mind --dry-run=false because of the dev mode)
    // you should see that the schmatics will ask you about the missing "greeting" parameter and give you a choice to select value

    // TODO 17. take a look in ./helpers/schema.json_advanced and copy its content to replace properties in schema.json
    // this adjusts name property definition with "$default" which enables us to pass in name without --name property
    // the name will be taken as a positional property from command line ( "$source": "argv" ) as the first argument ( "index": 0 )

    // TODO 18. try to remove "x-prompt" from greetings and run schematics again to see it will use default value when no --greeting option was provided
  };
}
