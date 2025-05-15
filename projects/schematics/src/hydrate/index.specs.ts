// src/index.ts
import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  template,
  mergeWith,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';

export function hydrateTest(options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    //
    // The source path points to your files folder containing the template.
    //
    const sourceTemplates = url('./files');
    //
    // Apply the template transformation with the options and Angular string utilities.
    //
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ...options,
        ...strings,
      }),
    ]);
    //
    // Merge the generated files into the host tree.
    //
    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}
