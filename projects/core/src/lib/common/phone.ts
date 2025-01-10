import { Library } from '../library';
import { PhoneType } from '../constant';
import { Base } from './base';
/**
 * Class: Phone
 */
export class Phone extends Base {
  public number?: number = undefined;
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Partial<Phone>) {
    super(options);
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Phone;
