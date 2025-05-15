import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
//
// Angularis core library
//
import { Library } from '@angularis/core';
//
// Import the Schema interface from the schema file.
//
import { IModule, Schema } from './schema';
//
// Library helpers
//
import {
  applyTemplateToFiles,
} from '../lib';
import { loadModules } from '../lib/util';
//
// hydrate
//
export function hydrate(options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    //
    // Get the project definition.
    //
    // const project = getProjectDefinition('@angularis/core', tree);
    // if (project) {
    //   console.log('project', project);
    // }

    //
    // Find all the models in the project.
    //
    const models: Array<IModule> = loadModules(options);
    //
    // If we have a set of models to work with,
    // we can generate template files on for each model.
    //
    if (Library.isArrayWithLength(models)) {
      //
      // For demonstration purposes, log the found files.
      // slice(0, 2)
      return applyTemplateToFiles(models.splice(0, 2), './files', _context);
    }

    return tree;
  };
}
