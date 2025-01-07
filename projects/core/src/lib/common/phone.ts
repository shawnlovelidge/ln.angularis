import * as Library from '../library/index';
import { PhoneType } from '../constant';
import { Base } from './base';
/**
 * Class: Phone
 */
export class Phone extends Base {
  public number: number;
  public type: PhoneType;
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this.type = Library.init(options, 'type', PhoneType.Cell);
    this.number = Library.init(options, 'number');
  }
}
