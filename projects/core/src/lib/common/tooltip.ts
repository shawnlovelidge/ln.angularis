import { Library } from '../library';
/**
 * Class: Tooltip
 */
export class Tooltip {
  public content: string = '';
  public template: string = '';
  public style: Partial<CSSStyleDeclaration> = {};
  //
  // hasContent()
  //
  public hasContent() {
    return Library.isStringWithLength(this.content);
  }
  //
  // hasTemplate()
  //
  public hasTemplate() {
    return Library.isStringWithLength(this.template);
  }
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Partial<Tooltip>) {
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Tooltip;
