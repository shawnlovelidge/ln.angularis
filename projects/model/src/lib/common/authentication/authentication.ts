import { Library, Base } from '@angularis/core';

export interface IAuthentication extends Base {
  authority?: string | undefined;
  authorizationUrl?: string | undefined;
  baseUrl?: string | undefined;
  clientId?: string | undefined;
  hostname: string;
  issuer?: string | undefined;
  jwks?: string | undefined;
  logoutRedirectUrl?: string | undefined;
  redirectUrl?: string;
}

export class Authentication extends Base implements IAuthentication {
  public authority?: string | undefined = '';
  public authorizationUrl?: string | undefined = '';
  public baseUrl?: string | undefined = '';
  public clientId?: string | undefined = '';
  public hostname: string = '';
  public issuer?: string | undefined = '';
  public jwks?: string | undefined = '';
  public logoutRedirectUrl?: string | undefined = '';
  public redirectUrl?: string = '';
  //
  // Constructor
  //
  constructor(options: Partial<Authentication>) {
    super(options);
    Object.assign(this, options);

    if (Library.isStringWithLength(this.redirectUrl)) {
      this.redirectUrl = this.redirectUrl?.replace(
        '{hostname}',
        Library.init(options, 'hostname', '')
      );
    }
  }
}
