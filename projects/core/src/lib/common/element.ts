import { Library } from '../library';
import { Base } from './base';
import { Tooltip } from './tooltip';

//
// Element
//
export class Element<T> extends Base {
  public placeholder: string = '';
  public tooltip: Tooltip = new Tooltip();
  public classList: string[] = [];
  public value?: T | undefined = undefined;
  //
  // hasPlaceholder
  //
  public hasValue() {
    return Library.isDefined(this.value);
  }
  //
  // hasPlaceholder
  //
  public hasPlaceholder() {
    return this.placeholder;
  }
  //
  // hasTooltip
  //
  public hasTooltip() {
    return this.tooltip.hasContent();
  }
  //
  // hasClassList
  //
  public hasClassList() {
    return Library.isArrayWithLength(this.classList);
  }
  //
  // Constructor
  //
  constructor(options?: Partial<Element<T>>) {
    super(options);
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Element;
