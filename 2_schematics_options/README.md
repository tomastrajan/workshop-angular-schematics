# Angular Schematics Options

# Hints

* don't forget to run `npm run build` (or run `npm run build:watch` in other console) so that you compile
  your Typescript source code into javascript which can be executed using `schematics` command

* always rememeber to running `schematics` command with the `--dry-run=false` flag  to actualy perform changes to 
  the file system because by default Angular Schematics run in dry run mode when executing schematics collection using
  relative path (for example `.:<schematic-name>` for a local folder, or `../path/to/collection.json:<schematic-name>` ) 

* always remember to delete generated file before running schematics again as we can't use `--force` flag before
  we use proper Angular Schematics templates
