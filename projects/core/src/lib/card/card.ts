import { Library } from '../library';
import { Base, Style, Image } from '../common';
/**
 * Class: Card
 */
export class Card extends Base {
  public canActivate: boolean = false;
  public canCheck: boolean = false;
  public canDelete: boolean = false;
  public checked: boolean = false;
  public style: Style = new Style();
  public data: Object = {};
  public image: Image = new Image();
  public onClick: Function = () => {};
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Partial<Card>) {
    super(options);
    Object.assign(this, options);
  }
}
