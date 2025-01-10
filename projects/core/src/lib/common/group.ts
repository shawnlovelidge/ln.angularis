import { Library } from '../library';
import { Action } from './action';
/**
 * Class: Group
 */
export class Group extends Action {
  public children: any[] = [];
  /**
   * hasChildren()
   * @returns {*}
   */
  hasChildren() {
    return Library.isArrayWithLength(this.children);
  }
  /**
   * Constructor()
   */
  constructor(options?: Partial<Group>) {
    super(options);
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Group;
