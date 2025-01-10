import { Library } from '../library';
import { Base, Range } from '../common';

/**
 * Page
 */
export class Page extends Base {
  public range: Range = new Range();
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Partial<Page>) {
    super(options);
    Object.assign(this, options);
  }
}
