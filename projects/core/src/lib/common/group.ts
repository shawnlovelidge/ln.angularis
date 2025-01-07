import * as Library from '../library/index';
import { Action } from './action';
/**
 * Class: Group
 */
export class Group extends Action {
  public children: any[];
  /**
   * hasChildren()
   * @returns {*}
   */
  hasChildren() {
    return Library.isArrayWithLength(this.children);
  }
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this.children = Library.init(options, 'children', []);
  }
}
