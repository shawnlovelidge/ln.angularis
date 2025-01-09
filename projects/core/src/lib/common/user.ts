import { Library } from '../library';
import { Email } from './email';
import { Role } from './role';
import { Name } from './name';
/**
 * Class: Version
 */
export class User extends Name {
  public email: Email = new Email({});
  public roles: Role[] = [];

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
  constructor(options?: Partial<User>) {
    super(options);
    Object.assign(this, options);
    if (options != undefined) {
      if (Library.hasOwnProperty(options, 'roles')) {
        if (options.roles && Library.isArrayWithLength(options.roles)) {
          this.roles = options.roles.map((item) => {
            return new Role(item);
          });
        }
      }
    }
  }
}

//
// Export default class
//
export default User;
