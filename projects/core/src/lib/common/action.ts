import { Base } from './base';
//
// Action
//
export class Action extends Base {
  public style: Partial<CSSStyleDeclaration> = {};
  //
  // Constructor
  //
  constructor(options?: Partial<Action>) {
    super(options);
    Object.assign(this, options);
  }
}
