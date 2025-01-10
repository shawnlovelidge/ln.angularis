export class AuthenticationConfig {
  public baseUrl: string = '';
  //
  // Constructor
  //
  constructor(options?: Partial<AuthenticationConfig>) {
    Object.assign(this, options);
  }
}
