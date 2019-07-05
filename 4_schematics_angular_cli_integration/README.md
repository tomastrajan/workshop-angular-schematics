# Angular Schematics Templates


# Description
Until now, we always executed schematics inside of the schematics project itself using relative path
`schematics .:<schematic-name>` which works but is not really useful.

Next, we will try to execute our schematics in the context of real Angular CLI workspace (`angular-cli-workspace`) to 
generate our component inside a real Angular project (`some-app`).

First we can do this also using relative path when we point to the `collection.json` file of our schematics project
from the Angular CLI workspace like this 
`schematics ../4_schematics_angular_cli_integration/hello/src/collection.json:hello --dry-run=false`.

This will generate our component in the root of the workspace instead of inside of the `some-app` project. To make this
work properly we have to integrate our schematics code with the Angular CLI by adding support for project and path resolving
which will be the focus of this exercise!

## Using "ng g" instead of "schematics" cli command

Running schematics inside of an Angular CLI workspace enables us to use `ng g ../path/to/collection.json:<schematic-name>`
instead of `schematics ../path/to/collection.json:<schematic-name>`. The main benefit is that we can now use `--help` flag
which will print nice info about all the supported flags and their values. This info is based on the descriptions
that we provided in the `schema.json` file and represents one of the best features of Angular Schematics because
our uses don't have to search for docs and can focus on gettign things done!

# Hints

* don't forget to run `npm run build` (or run `npm run build:watch` in other console) so that you compile
  your Typescript source code into javascript which can be executed using `schematics` command
  
* always rememeber to running `schematics` command with the `--dry-run=false` flag  to actualy perform changes to 
  the file system because by default Angular Schematics run in dry run mode when executing schematics collection using
  relative path (for example `.:<schematic-name>` for a local folder, or `../path/to/collection.json:<schematic-name>` ) 

* always remember to use`--force` flag when running schematics so that you overwrite any previously generated files
