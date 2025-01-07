import { Library, Base, Token } from '@angularis/core';

export class User extends Base {
  public group: Base = new Base();
  public token: Token;

  /**
   * constructor()
   */
  constructor();

  constructor(options: object);
  constructor(options?: any) {
    super(options);
    this.token = new Token(Library.init(options, 'token'));
  }
}
