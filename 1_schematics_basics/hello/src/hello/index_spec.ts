import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';


const collectionPath = path.join(__dirname, '../collection.json');


describe('hello', () => {

  // TODO testing 1. use async arrow function
  it('works', () => {

    const runner = new SchematicTestRunner('schematics', collectionPath);

    // TODO testing 2. use runSchematicsAsync ( don't forget to await the result tree and cast it toPromise() )
    const tree = runner.runSchematic('hello', {}, Tree.empty());

    // TODO testing 3. adjust assertion to pass the test
    expect(tree.files).toEqual([]);


    // TODO testing 4. run tests
  });
});
