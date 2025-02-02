import { Library } from '../library';
import { Base } from './base';
//
// Action
//
export class Action extends Base {
  public onClick: Function = () => {};
  public routerLink: string[] = [];
  public style: Partial<CSSStyleDeclaration> = {};
  //
  // hasRouterLink()
  //
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
  //
  // hasOnClick()
  //
  hasOnClick() {
    return Library.isFunction(this.onClick);
  }
  //
  // hasStyle()
  //
  hasStyle() {
    return Library.isDefined(this.style);
  }
  //
  // Constructor
  //
  constructor(options?: Partial<Action>) {
    super(options);
    Object.assign(this, options);
  }
}
