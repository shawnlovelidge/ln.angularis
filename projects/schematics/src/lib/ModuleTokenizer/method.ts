import { Library } from '@angularis/core';
import { SyntaxKind } from 'typescript';
//
// Models
//
import { Parameter } from './parameter';
//
// IMethod
//
export interface IMethod {
  name: string;
  kind: SyntaxKind;
  type: string;
  parameters: Array<Parameter>;
}
//
// Method
//
export class Method implements IMethod {
  //
  // Properties
  //
  public name: string = '';
  public kind: SyntaxKind = 0;
  public parameters: Array<Parameter> = [];
  //
  // type
  //
  public get type(): string {
    switch (this.kind) {
      case SyntaxKind.Identifier:
        return 'identifier';
      case SyntaxKind.MethodDeclaration:
        return 'method';
      default:
        return 'any';
    }
  }
  //
  // Has Functions
  //
  public hasName = (): boolean => Library.isStringWithLength(this.name);
  public hasParameters = (): boolean =>
    Library.isArrayWithLength(this.parameters);
  //
  // Constructor
  //
  constructor(
    name: string,
    kind: SyntaxKind,
    parameters: Array<Parameter> = []
  ) {
    this.name = name;
    this.kind = kind;
    this.parameters = parameters;
  }
}
