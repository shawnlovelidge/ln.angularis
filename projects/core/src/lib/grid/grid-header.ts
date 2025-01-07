import * as Library from '../library/index';
import { Base } from '../common/base';

export class GridHeader extends Base {
  public style: Object;
  constructor(options?: Object | undefined | null) {
    super(options);
    this.style = Library.init(options, 'style', {});
  }
}
