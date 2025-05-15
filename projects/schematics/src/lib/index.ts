import {
  apply,
  chain,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  Source,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import {
  ProjectDefinition,
  TargetDefinitionCollection,
  WorkspaceDefinition,
} from '@angular-devkit/core/src/workspace';
import { strings } from '@angular-devkit/core';
import { normalize } from '@angular-devkit/core';
//
//  Schema related modules
//
import { IModule, Schema } from '../hydrate/schema';
//
// Models
//
import { ModuleToken } from './ModuleTokenizer/module-token';
import { ModuleTokenizer } from './ModuleTokenizer/module';
import { Library } from '@angularis/core';
import { DynamicCompiler } from './DynamicCompiler/dynamic-compiler';
import { importModule } from './util';
//
// applyTemplateToFiles
//
export function applyTemplateToFiles(
  modules: IModule[],
  templatePath: string,
  context: SchematicContext
): Rule {
  return chain(
    modules.map((module: IModule) => {
      //
      // Log the module being processed
      //
      context.logger.info(
        `Processing module: ${module.name}...\n`
      );

      //DynamicCompiler.compile(module.fullPath);

      //
      // Load the target file
      //
      // importModule(module.fullPath).then(content => {
      //   //
      //   // Parse the TypeScript Class
      //   //
      //   const tokens: Array<ModuleToken> = ModuleTokenizer.parse(content);
      //   //
      //   // Print the tokens
      //   //
      //   tokens.forEach(token => token.print(context));

        //
        // Apply the template to the files
        //
        const source: Source = apply(url(templatePath), [
          template({ name: module.name, ...strings }),
          move(normalize(module.dir)),
        ]);

        return mergeWith(source, MergeStrategy.Overwrite);
        
      // });
      //
      // Return an empty chain
      //
      return chain([]);
    })
  );
}
