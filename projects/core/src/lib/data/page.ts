import * as Library from '../library/index';
import { Base } from '../common/base';
import { Range } from '../common/range';

/**
 * Page
 */
export class Page extends Base {
  public range: Range;
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this.range = new Range(Library.init(options, 'range'));
  }
}
