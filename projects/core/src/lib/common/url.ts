import * as Library from '../library/index';
import { Action } from './action';
/**
 * Class: Url
 */
export class Url extends Action {
  public url: string;
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
  }
}
