import { SyntaxKind } from "typescript";
//
// Modifier
//
export class Modifier {
  public kind: SyntaxKind;

  //
  // type
  //
  public get type(): string {
    switch (this.kind) {
      case SyntaxKind.PublicKeyword:
        return "public";
      case SyntaxKind.ProtectedKeyword:
        return "protected";
      case SyntaxKind.PrivateKeyword:
        return "private";
      case SyntaxKind.StaticKeyword:
        return "static";
      case SyntaxKind.ReadonlyKeyword:
        return "readonly";
      default:
        return "unknown";
    }
  }

  public isPublic = (): boolean => this.kind === SyntaxKind.PublicKeyword;
  public isProtected = (): boolean => this.kind === SyntaxKind.ProtectedKeyword;
  public isPrivate = (): boolean => this.kind === SyntaxKind.PrivateKeyword;
  public isStatic = (): boolean => this.kind === SyntaxKind.StaticKeyword;
  public isReadonly = (): boolean => this.kind === SyntaxKind.ReadonlyKeyword;

  constructor(kind: SyntaxKind) {
    this.kind = kind;
  }
}
