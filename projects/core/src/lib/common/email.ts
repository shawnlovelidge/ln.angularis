import * as Library from '../library/index';
import * as Validator from '../library/validate';
import { EmailType } from '../constant';
import { Base } from './base';

/**
 * Class: Email
 */
export class Email extends Base {
  public type: EmailType;
  public address: string;
  /**
   * hasType()
   * @returns {*}
   */
  hasType() {
    return Library.isDefined(this.type);
  }
  /**
   * isValid()
   * @returns {*}
   */
  isValid() {
    return this.hasAddress() && Validator.isEmail(this.address);
  }
  /**
   * hasAddress()
   * @returns {*}
   */
  hasAddress() {
    return Library.isStringWithLength(this.address);
  }
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this.type = Library.init(options, 'type', EmailType.Work);
    this.address = Library.init(options, 'address', undefined);
  }
}
