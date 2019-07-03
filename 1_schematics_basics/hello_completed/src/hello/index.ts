import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hello(_options: any): Rule {

  return (tree: Tree, _context: SchematicContext) => {

    const fileName = 'hello.js';
    const fileContent = `console.log('Hello NG-MY!')`;

    tree.create(fileName, fileContent);


    // run ...
    // 1. npm run build
    // 2. schematics .:hello --dry-run=false
    // 3. node hello.js
    // you should see "Hello NG-MY!" in your console

    return tree;

    // if you try running "schematics .:hello --dry-run=false" again
    // it will fail because the hello.js file already exists
    // you can try to use --force flag ( schematics .:hello --dry-run=false --force )
    // but this doesn't work with tree.create only later when we will use proper templates
    // for now we have to delete hello.js file manually
  };

}
