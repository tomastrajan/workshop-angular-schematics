import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { Schema } from './schema';

export function hello(_options: Schema): Rule {

  return (tree: Tree, _context: SchematicContext) => {

    console.log('Running schematics with following options', _options);

    const name = _options.name;
    const greeting = _options.greeting;

    tree.create('hello.js', `console.log('${greeting} ${name}!');`);

    return tree;
  };
}
