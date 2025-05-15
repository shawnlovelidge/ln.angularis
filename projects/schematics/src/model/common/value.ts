import { Library } from '@angularis/core';
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
  public hasValue() {
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
