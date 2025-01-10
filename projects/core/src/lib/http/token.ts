import { Library } from '../library';
import { Base } from '../common';

export class Token extends Base {
  private _token: string;
  private _expiresAt: number;
  //
  // set token
  //
  set token(token) {
    this._token = token;
  }
  //
  // get token
  //
  get token() {
    return this._token;
  }
  /**
   * hasToken()
   */
  hasToken() {
    return Library.isStringWithLength(this.token);
  }
  /**
   * hasTokenExpired()
   */
  hasTokenExpired() {
    return new Date().getTime() < this._expiresAt;
    return false;
  }
  /**
   * Constructor()
   */
  constructor(options?: Partial<Token>) {
    super(options);
    Object.assign(this, options);
    this._token = Library.init(options, 'token');
    this._expiresAt = Library.init(options, 'expiresAt', new Date().getTime());
  }
}
