import { Base, Token } from '@angularis/core';

export class User extends Base {
  public group: Base = new Base();
  public token: Token = new Token();

  /**
   * constructor()
   */
  constructor(options?: Partial<User>) {
    super(options);
  }
}
