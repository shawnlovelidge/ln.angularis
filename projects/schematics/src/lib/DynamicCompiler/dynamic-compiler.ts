import { SchematicsException } from '@angular-devkit/schematics';
import * as ts from 'typescript';

export class DynamicCompiler {
  constructor() {}
  public static compile = (path: string | null | undefined) => {
    //
    // If we have content
    //
    if (path) {
      const compilerOptions: ts.CompilerOptions = {
        noEmitOnError: false,
        module: ts.ModuleKind.ES2020,
        target: ts.ScriptTarget.ES2017,
        moduleResolution: ts.ModuleResolutionKind.Node16,
        esModuleInterop: true,
        strict: true,
        noEmit: true, // or `emitDeclarationOnly`
        allowImportingTsExtensions: true,
        allowArbitraryExtensions: true,
        isolatedModules: false
      };
      //
      // Create a temporary TypeScript source file
      //
      // const sourceFile = ts.createSourceFile(
      //   'temp.ts',
      //   content,
      //   ts.ScriptTarget.Latest,
      //   true
      // );

      const program = ts.createProgram(
        [path],
        {
          //...ts.getDefaultCompilerOptions(),
          ...compilerOptions,
          // allowNonTsExtensions: false,
          // allowJs: false,
        },
        undefined,
        undefined
      );

      const compiledJs = program.getSourceFile(path)?.text;

      if (compiledJs) {
        const moduleInstance = new Function('exports', compiledJs)(
          Object.create(null)
        );

        if (moduleInstance) {
          return moduleInstance;
        }
      }
    }
  };
}
