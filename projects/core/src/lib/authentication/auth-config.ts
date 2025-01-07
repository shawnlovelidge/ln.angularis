import * as Library from '../library/index';
import { Base } from '../common/base';
/**
 * Class: AuthConfig
 */
export class AuthConfig extends Base {
  public clientId: string;
  public domain: string;
  public callbackURL: string;
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this.clientId = Library.init(options, 'clientId');
    this.domain = Library.init(options, 'domain');
    this.callbackURL = Library.init(options, 'callbackURL');
  }
}
