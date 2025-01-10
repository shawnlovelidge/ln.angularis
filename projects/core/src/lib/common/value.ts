import { Library } from '../library';
import { Action } from './action';
/**
 * Class: Item
 */
export class Value extends Action {
  public value?: string = undefined;
  /**
   * hasValue()
   * @returns {*}
   */
  hasValue() {
    return Library.isDefined(this.value);
  }
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Partial<Value>) {
    super(options);
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Value;
