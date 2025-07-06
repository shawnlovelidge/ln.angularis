import { Base } from './base';
//
// Action
//
export class Action extends Base {
  public style: Partial<CSSStyleDeclaration> = {};
  public onClick: Function = () => {};
  //
  // Constructor
  //
  constructor(options?: Partial<Action>) {
    super(options);
    Object.assign(this, options);
  }
}
