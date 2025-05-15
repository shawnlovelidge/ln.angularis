import { Library } from '@angularis/core';
import { SyntaxKind } from 'typescript';


export interface IParameter {
  name: string;
  kind: SyntaxKind;
  default: any;
  value: any;
  type(): string;
}

export class Parameter {
  public name: string;
  public kind: SyntaxKind;
  public default: any;
  public value: any;
  //
  // type
  //
  public type(): string {
    switch (this.kind) {
      case SyntaxKind.StringKeyword:
        return 'string';
      case SyntaxKind.NumberKeyword:
        return 'number';
      case SyntaxKind.BooleanKeyword:
        return 'boolean';
      case SyntaxKind.ArrayType:
        return 'Array<any>';
      case SyntaxKind.AnyKeyword:
        return 'any';
      case SyntaxKind.UnknownKeyword:
        return 'unknown';
      case SyntaxKind.VoidKeyword:
        return 'void';
      case SyntaxKind.NullKeyword:
        return 'null';
      case SyntaxKind.UndefinedKeyword:
        return 'undefined';
      case SyntaxKind.ObjectKeyword:
        return 'object';
      case SyntaxKind.NeverKeyword:
        return 'never';
      case SyntaxKind.SymbolKeyword:
        return 'symbol';
      default:
        return 'any';
    }
  }
  //
  // Has Functions
  //
  public hasName = (): boolean => Library.isStringWithLength(this.name);
  public hasDefault = (): boolean => Library.isDefined(this.default);
  public hasValue = (): boolean => Library.isDefined(this.value);
  //
  // Constructor
  //
  constructor(name: string, kind: SyntaxKind, value?: any, defaultValue?: any) {
    this.name = name;
    this.kind = kind;
    this.value = value;
    this.default = defaultValue;
  }
}
