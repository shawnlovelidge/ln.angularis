import { SchematicsException } from '@angular-devkit/schematics';
import * as ts from 'typescript';
//
// Library
//
import { Library } from '@angularis/core';
//
// Node
//
import { ModuleToken } from './module-token';
import { Initializer } from './initializer';
import { Modifier } from './modifier';
//
// ModuleTokenizer
//
export class ModuleTokenizer {
  //
  // Private Constructor
  //
  private constructor() {}
  //
  // ModuleTokenizer
  //
  public static parse = (content: string | null | undefined) => {
    const tokens: Array<ModuleToken> = new Array<ModuleToken>();
    //
    // If we have content
    //
    if (content) {
      //
      // Create a temporary TypeScript source file
      //
      const sourceFile = ts.createSourceFile(
        'temp.ts',
        content,
        ts.ScriptTarget.Latest,
        true
      );

      //
      // Traverse the AST
      //
      ts.forEachChild(sourceFile, node => {
        //
        // Class Declaration
        //
        if (ts.isClassDeclaration(node)) {
          const token: ModuleToken = new ModuleToken();
          //
          // Set the class name
          //
          token.class = node.name?.text;
          //
          // Traverse the class members
          //
          node.members.forEach(member => {
            if (ts.isPropertyDeclaration(member)) {
              token.properties.push({
                name: member.name,
                type: member.type,
                initializer: member.initializer,
                modifiers: member.modifiers,
              });
            } else if (ts.isMethodDeclaration(member)) {
              token.methods.push({
                name: member.name,
                kind: member.kind,
                parameters: member.parameters,
              });
            }
          });

          tokens.push(token);
        }
      });
    }

    return tokens;
  };
}
