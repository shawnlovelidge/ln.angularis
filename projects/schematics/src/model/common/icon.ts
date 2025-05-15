import { Library } from '@angularis/core';
import { Action } from './action';
/**
 * Class: Icon
 */
export class Icon<T> extends Action {
  public url: string = '';
  public exists: boolean = false;
  public tooltip: Object = {};
  public component!: T;
  /**
   * hasUrl()
   * @returns {*}
   */
  hasUrl() {
    return Library.isStringWithLength(this.url);
  }
  /**
   * hasComponent()
   * @returns {*}
   */
  hasComponent() {
    return Library.isDefined(this.component);
  }

  /**
   * Constructor()
   */
  constructor(options?: Partial<Icon<T>>) {
    super(options);
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Icon;
