import { strings } from '@angular-devkit/core';
import {
  apply,
  Rule,
  SchematicContext,
  Tree,
  url,
  template,
  mergeWith,
} from '@angular-devkit/schematics';

interface SchemaOptions {
  name: string;
}

export function jest(_options: SchemaOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplate = url('./templates');
    const parameterizedTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
    ]);
    tree = mergeWith(parameterizedTemplate)(tree, _context) as Tree;
    return tree;
  };
}
