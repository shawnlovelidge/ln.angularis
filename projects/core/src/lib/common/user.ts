import * as Library from '../library/index';
import { Email } from './email';
import { Role } from './role';
import { Name } from './name';
/**
 * Class: Version
 */
export class User extends Name {
  public email: Email;
  public roles: Role[];

  /**
   * hasUrl()
   * @returns {*}
   */
  hasRoles() {
    return Library.isArrayWithLength(this.roles);
  }
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: User | undefined | null) {
    super(options);
    this.email = new Email(Library.init(options, 'email', {}));
    this.roles = [];
    if (options) {
      if (Library.hasOwnProperty(options, 'roles')) {
        if (Library.isArrayWithLength(options.roles)) {
          this.roles = options.roles.map((item) => {
            return new Role(item);
          });
        }
      }
    }
  }
}
