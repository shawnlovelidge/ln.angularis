import * as Library from '../library/index';
import { Base } from './base';
/**
 * Class: Name
 */
export class Name extends Base {
  public title: string;
  public first: string;
  public _middle: string;
  public last: string;
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
  constructor(options?: Object | undefined | null) {
    super(options);
    this.title = Library.init(options, 'title');
    this.first = Library.init(options, 'first');
    this._middle = Library.init(options, 'middle');
    this.last = Library.init(options, 'last');
  }
}
