import { Library } from '@angularis/core';
import { Base } from './base';
/**
 * Class: Name
 */
export class Name extends Base {
  public title: string = '';
  public first: string = '';
  public _middle: string = '';
  public last: string = '';
  /**
   * middle
   * @returns {*|string}
   */
  get middle() {
    return this._middle;
  }
  /**
   * middle
   * @param value
   */
  set middle(o) {
    if (Library.isString(o)) {
      o = o.replace(/\./g, '');
      if (o.length === 1) o = o + '.';
    }
    this._middle = o;
  }
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Partial<Name>) {
    super(options);
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Name;
