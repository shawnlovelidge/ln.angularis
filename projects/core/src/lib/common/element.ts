import { Library } from '../library';
import { Action } from './action';
import { Icon } from './icon';
import { Tooltip } from './tooltip';
/**
 * Class: Element
 */
export class Element extends Action {
  public ref: string | undefined = undefined;
  public html: string | undefined = undefined;
  public placeholder: string | undefined = undefined;
  public tooltip: Tooltip = new Tooltip();
  public icon: Icon = new Icon();
  public classList: string[] = [];

  /**
   * hasTooltip()
   * @returns {*}
   */
  hasTooltip() {
    return Library.isStringWithLength(this.tooltip);
  }
  /**
   * hasIcon()
   * @returns {*}
   */
  hasIcon() {
    return (
      Library.isObject(this.icon) && Library.isStringWithLength(this.icon.name)
    );
  }
  /**
   * hasRef()
   * @returns {*}
   */
  hasRef() {
    return Library.isDefined(this.ref);
  }

  constructor(options?: Partial<Element>) {
    super(options);
    Object.assign(this, options);
    this.tooltip = new Tooltip(Library.init(options, 'tooltip', {}));
    this.icon = new Icon(Library.init(options, 'icon', {}));
  }
}

//
// Export default class
//
export default Element;
