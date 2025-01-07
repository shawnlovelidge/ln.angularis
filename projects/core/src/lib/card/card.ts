import * as Library from '../library/index';
import { Base } from '../common/base';
import { Style } from '../common/style';
import { Image } from '../common/image';
/**
 * Class: Card
 */
export class Card extends Base {
  public canActivate: boolean;
  public canCheck: boolean;
  public canDelete: boolean;
  public checked: boolean;
  public style: Style;
  public data: Object;
  public image: Image;
  public onClick: Function;
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this.canActivate = Library.init(options, 'canActivate', false);
    this.canCheck = Library.init(options, 'label', false);
    this.canDelete = Library.init(options, 'canDelete', false);
    this.checked = Library.init(options, 'checked');
    this.style = Library.init(options, 'style', {});
    this.data = Library.init(options, 'data', {});
    this.image = Library.init(options, 'image', new Image());
    this.onClick = Library.init(options, 'onClick', () => {});
  }
}
