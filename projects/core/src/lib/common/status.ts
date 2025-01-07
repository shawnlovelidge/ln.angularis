import * as Library from '../library/index';
import { StatusType } from '../constant';
import { Base } from './base';
/**
 * Class: Status
 */
export class Status extends Base {
  public type: StatusType;
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this.type = Library.init(options, 'type', StatusType.Active);
  }
}
