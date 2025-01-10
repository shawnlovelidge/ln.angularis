import { Library } from '../library';
import { Action } from './action';
import { Tooltip } from './tooltip';
/**
 * Class: Icon
 */
export class Icon extends Action {
  public url: string = '';
  public exists: boolean = false;
  public tooltip: Object = {};
  public component?: any = undefined;
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
    return Library.isObject(this.component);
  }

  /**
   * Constructor()
   */
  constructor(options?: Partial<Icon>) {
    super(options);
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Icon;
