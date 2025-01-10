import { Library } from '../library';
import { Base } from '../common';
/**
 * Class: AuthConfig
 */
export class AuthConfig extends Base {
  public clientId: string | undefined = undefined;
  public domain: string | undefined = undefined;
  public callbackURL: string | undefined = undefined;
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Partial<AuthConfig>) {
    super(options);
    Object.assign(this, options);
  }
}
