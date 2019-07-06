# Angular Schematics Templates


# Description

When using Angular Schematics, we have been creating files directly in the tree using method `tree.create()`.
This works but is pretty low level and doesn't support great convenience features like `--force` flag.
Besides that generating files by using low level API would not scale when we wanted to create some more sophisticated
folder structure.

Luckily there is a great built in solution in form of Angular Schematics templates!

## Templating language
The templating support comes with the ability to pre create real template file which then can be easily parametrized
with the options we're passing to our schematics. This is achieved with the help of the following tools...

1. we can use option values directly in the folder ( and file ) name using `__myOption__` syntax.
2. we can adjust option value by using helper functions `__myOption@myHelper__`
3. we can print option value in the template file content using `<%= myOption %>`
4. similarly we can adjust option value in the template file content using `<%= myHelper(myOption) %>`
5. file content template syntax is very flexible and allows any kind of javascript expression like `<% if(myOption) {` some content ` <% } %>`


# Hints

* every exercise is described step by step inside of the `./hello/src/hello.index.ts` file in form of the TODO comments

* don't forget to run `npm run build` (or run `npm run build:watch` in other console) in the base `./hello` folder so 
  that you compile your Typescript source code into javascript which can be executed using `schematics` command
  
* always rememeber to running `schematics` command with the `--dry-run=false` flag  to actualy perform changes to 
  the file system because by default Angular Schematics run in dry run mode when executing schematics collection using
  relative path (for example `.:<schematic-name>` for a local folder, or `../path/to/collection.json:<schematic-name>` ) 

* always remember to use`--force` flag when running schematics so that you overwrite any previously generated files
