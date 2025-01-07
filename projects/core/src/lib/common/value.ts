import * as Library from '../library/index';
import { Action } from './action';
/**
 * Class: Item
 */
export class Value extends Action {
  public value: string;
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
  constructor(options?: Object | undefined | null) {
    super(options);
    this.value = Library.init(options, 'value');
  }
}
