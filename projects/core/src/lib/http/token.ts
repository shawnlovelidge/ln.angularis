import * as Library from '../library/index';
import { Base } from '../common/base';

export class Token extends Base {
  private _token: string;
  private _expiresAt: Date | undefined;
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
    // return new Date().getTime() < this._expiresAt;
    return false;
  }
  /**
   * Constructor()
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this._token = Library.init(options, 'token');
    this._expiresAt = Library.init(options, 'expiresAt', undefined);
  }
}
