import { SyntaxKind, LiteralSyntaxKind } from 'typescript';

//
// InitializerType
//
type InitializerType =
  | number
  | bigint
  | string
  | boolean
  | Date
  | Array<number | bigint | string | boolean | Date>
  | undefined;

//
// Modifier
//
export class Initializer {
  public name: string;
  public kind: SyntaxKind;
  public value?: InitializerType;
  //
  // type
  //
  public get type(): string {
    switch (this.kind) {
      case SyntaxKind.NumericLiteral:
        return 'number';
      case SyntaxKind.BigIntLiteral:
        return 'bigint';
      case SyntaxKind.StringLiteral:
        return 'string';
      case SyntaxKind.RegularExpressionLiteral:
        return 'RegExp';
      case SyntaxKind.NoSubstitutionTemplateLiteral:
        return 'NoSubstitutionTemplateLiteral';
      case SyntaxKind.TypeLiteral:
        return 'TypeLiteral';
      case SyntaxKind.LiteralType:
        return 'LiteralType';
      case SyntaxKind.TemplateLiteralType:
        return 'TemplateLiteralType';
      case SyntaxKind.TemplateLiteralTypeSpan:
        return 'TemplateLiteralTypeSpan';
      case SyntaxKind.ArrayLiteralExpression:
        return 'ArrayLiteralExpression';
      case SyntaxKind.ObjectLiteralExpression:
        return 'ObjectLiteralExpression';
      default:
        return 'unknown';
    }
  }
  public isNumeric = (): boolean => this.kind === SyntaxKind.NumericLiteral;
  public isBigInt = (): boolean => this.kind === SyntaxKind.BigIntLiteral;
  public isString = (): boolean => this.kind === SyntaxKind.StringLiteral;
  public isRegularExpression = (): boolean =>
    this.kind === SyntaxKind.RegularExpressionLiteral;
  public isNoSubstitutionTemplate = (): boolean =>
    this.kind === SyntaxKind.NoSubstitutionTemplateLiteral;
  public isTypeLiteral = (): boolean => this.kind === SyntaxKind.TypeLiteral;
  public isLiteralType = (): boolean => this.kind === SyntaxKind.LiteralType;
  public isTemplateLiteralType = (): boolean =>
    this.kind === SyntaxKind.TemplateLiteralType;
  public isTemplateLiteralSpan = (): boolean =>
    this.kind === SyntaxKind.TemplateLiteralTypeSpan;
  public isArrayLitteral = (): boolean =>
    this.kind === SyntaxKind.ArrayLiteralExpression;
  public isObjectLitteral = (): boolean =>
    this.kind === SyntaxKind.ObjectLiteralExpression;
  //
  //
  //
  constructor(name: string, kind: SyntaxKind) {
    this.name = name;
    this.kind = kind;
  }
}
