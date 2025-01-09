import { Library } from '../library';
import { Base } from './base';

/**
 * Class: Action
 */
export class Action extends Base {
  public onClick: Function;
  public routerLink: string[] = [];
  public style: Object;
  public checked: boolean;

  hasRouterLink() {
    if (Library.isDefined(this.routerLink)) {
      if (Library.isArray(this.routerLink)) {
        return Library.isArrayWithLength(this.routerLink);
      } else if (Library.isString(this.routerLink)) {
        return Library.isStringWithLength(this.routerLink);
      }
    }

    return false;
  }

  /**
   * hasOnClick()
   * @returns {*}
   */
  hasOnClick() {
    return Library.isFunction(this.onClick);
  }
  /**
   * hasUrl()
   * @returns {*}
   */
  hasStyle() {
    return Library.isDefined(this.style);
  }
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Partial<Action>) {
    super(options);
    this.onClick = Library.init(options, 'onClick', () => {});
    this.checked = Library.init(options, 'checked', false);
    this.style = Library.init(options, 'style', {});
    this.routerLink = Library.init(options, 'routerLink', []);
  }
}
