import { Library } from '../library';
import * as Validator from '../library/validate';
import { EmailType } from '../constant';
import { Base } from './base';

/**
 * Class: Email
 */
export class Email extends Base {
  public address: string = '';
  /**
   * isValid()
   * @returns {*}
   */
  public isValid() {
    return this.hasAddress() && Validator.isEmail(this.address);
  }
  /**
   * hasAddress()
   * @returns {*}
   */
  public hasAddress() {
    return Library.isStringWithLength(this.address);
  }

  constructor(options?: Partial<Email>) {
    super(options);
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Email;
