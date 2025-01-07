import * as Library from '../library/index';
import { Action } from './action';
import { Tooltip } from './tooltip';
/**
 * Class: Icon
 */
export class Icon extends Action {
  public url: string;
  public exists: boolean;
  public tooltip: Object;
  /**
   * hasUrl()
   * @returns {*}
   */
  hasUrl() {
    return Library.isStringWithLength(this.url);
  }

  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this.url = Library.init(options, 'url');
    this.exists = Library.init(options, 'exists', true);
    this.tooltip = new Tooltip(Library.init(options, 'tooltip', {}));
  }
}
