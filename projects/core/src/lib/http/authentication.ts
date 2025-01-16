import { Library } from '../library';
//
// Authentication
//
export class Authentication {
  public authority: string = '';
  public authorizationUrl: string = '';
  public baseUrl: string = '';
  public clientId: string = '';
  public issuer: string = '';
  public jwks: string = '';
  public logoutRedirectUrl: string = '';
  public redirectUrl: string = '';
  public disable: boolean = false;

  //
  // Has Function
  //
  public hasAuthority = (): boolean =>
    Library.isStringWithLength(this.authority);
  public hasAuthorizationUrl = (): boolean =>
    Library.isStringWithLength(this.authorizationUrl);
  public hasBaseUrl = (): boolean => Library.isStringWithLength(this.baseUrl);
  public hasClientId = (): boolean => Library.isStringWithLength(this.clientId);
  public hasIssuer = (): boolean => Library.isStringWithLength(this.issuer);
  public hasJwks = (): boolean => Library.isStringWithLength(this.jwks);
  public hasLogoutRedirectUrl = (): boolean =>
    Library.isStringWithLength(this.logoutRedirectUrl);
  public hasRedirectUrl = (): boolean =>
    Library.isStringWithLength(this.redirectUrl);
  public isDisabled = (): boolean => this.disable;

  //
  // Constructor()
  //
  constructor(options?: Partial<Authentication>) {
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Authentication;