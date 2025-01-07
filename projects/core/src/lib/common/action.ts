import * as Library from '../library/index';
import { Base } from './base';
import { Style } from './style';
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
  constructor(options?: Object | undefined | null) {
    super(options);
    this.onClick = Library.init(options, 'onClick', () => {});
    this.checked = Library.init(options, 'checked', false);
    this.style = Library.init(options, 'style', {});
    this.routerLink = Library.init(options, 'routerLink', []);
  }
}
