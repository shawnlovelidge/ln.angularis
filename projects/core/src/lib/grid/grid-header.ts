import { Library } from '../library';
import { Base } from '../common';

export class GridHeader extends Base {
  public style: Object;
  constructor(options?: Partial<GridHeader>) {
    super(options);
    this.style = Library.init(options, 'style', {});
  }
}
