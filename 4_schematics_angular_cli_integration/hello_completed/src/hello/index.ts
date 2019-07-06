import {
  apply,
  mergeWith, move,
  Rule,
  SchematicContext,
  SchematicsException,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

import { Schema as HelloOptions } from './schema';
import { parseName } from "@schematics/angular/utility/parse-name";

export function hello(_options: HelloOptions): Rule {

  return (tree: Tree, _context: SchematicContext) => {

    console.log('Running schematics with following options', _options);

    const workspaceAsBuffer = tree.read('angular.json');

    if (!workspaceAsBuffer) {
      throw new SchematicsException('We are not inside of Angular CLI workspace');
    }


    const workspace = JSON.parse(workspaceAsBuffer.toString());

    const projectName = _options.project || workspace.defaultProject;

    const project = workspace.projects[projectName];

    const sourceRoot = project.sourceRoot;

    const projectType = project.projectType;

    const type = projectType === 'application' ? 'app' : 'lib';

    const path = `${sourceRoot}/${type}`;


    const parsed = parseName(path, _options.name);


    _options.name = parsed.name;

    const sourceTpl = url('./files');
    const sourceTplParametrized = apply(sourceTpl, [
      template({ ..._options, ...strings }),
      move(parsed.path)
    ]);


    return mergeWith(sourceTplParametrized)(tree, _context);
  };

}
