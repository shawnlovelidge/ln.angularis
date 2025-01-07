import { Library } from '@angularis/core';

export class AuthenticationConfig {
  public baseUrl: string;
  //
  // Constructor
  //
  constructor();
  constructor(options: object);
  constructor(options?: any) {
    this.baseUrl = Library.init(options, 'baseUrl');
  }
}
