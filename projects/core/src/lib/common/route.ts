import { Library } from '../library';
import { Base } from './base';
//
// Action
//
export class Route extends Base {
  public style: Partial<CSSStyleDeclaration> = {};
  public routerLink: string[] = [];
  public params: object = {};
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
  // hasParams()
  //
  hasParams() {
    return !Library.isEmptyObject(this.params);
  }
  //
  // Constructor
  //
  constructor(options?: Partial<Route>) {
    super(options);
    Object.assign(this, options);
  }
}
//
// Export default class
//
export default Route;