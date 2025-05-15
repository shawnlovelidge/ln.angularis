import { Library } from '@angularis/core';
import { Action } from './action';
/**
 * Class: Url
 */
export class Url extends Action {
  public url: string = '';
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
  constructor(options?: Partial<Url>) {
    super(options);
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Url;
