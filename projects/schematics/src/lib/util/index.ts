import {
  ProjectDefinition,
  WorkspaceDefinition,
} from '@angular-devkit/core/src/workspace';
import { SchematicsException, Tree } from '@angular-devkit/schematics';
import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';
//
// importModule
//
import { Library } from '@angularis/core';
import { IModule, Schema } from '../../hydrate/schema';

//
// loadModules
//
export const loadModules = (options: Schema): Array<IModule> => {
  //
  // files will hold the results
  //
  const models: Array<IModule> = [];
  //
  // Find all TypeScript files in the tree.
  //
  const files = glob.sync('**/*.ts', {
    cwd: options.path,
    ignore: ['node_modules/**', '**/*.d.ts/**', '**/*.js/**'],
  });
  //
  // If no TypeScript files are found, throw an error.
  //
  if (files.length === 0) {
    throw new SchematicsException(
      `No TypeScript files found in ${options.path}.`
    );
  }
  //
  // Do something with the files, for example, log their paths
  //
  files.forEach(file => {
    const f = path.parse(file);
    models.push({
      file: f.base,
      name: f.name,
      ext: f.ext,
      dir: path.dirname(path.join(options.path, file)),
      relativePath: path.join(options.path, file),
      fullPath: path.resolve(path.join(options.path, file)),
    });
  });
  //
  // Return the list of models.
  //
  return models;
};
//
// importModule
//
export const importModule = (path: string | null | undefined): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (path && Library.isStringWithLength(path)) {
      try {
        fs.readFile(path, 'utf8', (err, content) => {
          if (err) {
            throw new Error(`Error reading file: ${err.message}`);
            return;
          }
          resolve(content);
        });
      } catch (error) {
        reject(
          `HTTP error! Unable to Read file: ${path}; error: => ${error.message}`
        );
      }
    }
  });
};

//
// getProjectDefinition
//
export const getProjectDefinition = (
  project: string,
  tree: Tree
): ProjectDefinition | undefined => {
  const sWorkspaceConfig = tree.read('/angular.json');

  if (!sWorkspaceConfig) {
    throw new SchematicsException(
      'Could not find Angular workspace configuration'
    );
  }

  const cWorkspace: WorkspaceDefinition = JSON.parse(
    sWorkspaceConfig.toString()
  );

  //
  // Get the project definition
  //
  for (const [key, value] of Object.entries(cWorkspace.projects)) {
    if (key === project) {
      return value;
    }
  }

  return;
};
