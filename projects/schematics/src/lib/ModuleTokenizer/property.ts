import { Library } from '@angularis/core';
import { SyntaxKind } from 'typescript';
import { Modifier } from './modifier';
import { Initializer } from './initializer';

//
// IProperty
//
export interface IProperty {
  name: string;
  kind: SyntaxKind;
  type: string;
  initializer?: Initializer | undefined;
  modifiers: Modifier[];
}

//
// Property
//
export class Property implements IProperty {
  //
  // Properties
  //
  public name: string;
  public kind: SyntaxKind;
  public initializer?: Initializer | undefined;
  public modifiers: Modifier[];
  //
  // type
  //
  public get type(): string {
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
  public hasInitializer = (): boolean => Library.isDefined(this.initializer);
  public hasModifiers = (): boolean =>
    Library.isArrayWithLength(this.modifiers);
  //
  // Constructor
  //
  constructor(
    name: string,
    kind: SyntaxKind,
    initializer: Initializer | undefined = undefined,
    modifiers: Modifier[] = []
  ) {
    this.name = name;
    this.kind = kind;
    this.initializer = initializer;
    this.modifiers = modifiers;
  }
}
