import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  move,
  mergeWith,
  chain,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

interface SchemaOptions {
  name: string;
}

export function jestSchematic(options: SchemaOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // Apply templates from the ./templates folder and move them to a new folder named after the option 'name'
    const templateSource = apply(url('./templates'), [
      move(strings.dasherize(options.name)),
    ]);

    return chain([mergeWith(templateSource)])(tree, context);
  };
}
