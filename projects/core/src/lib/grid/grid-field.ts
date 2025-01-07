import * as Library from '../library/index';
import { Base } from '../common/base';

export class GridField extends Base {
  public server: string;

  constructor(options: any) {
    super(options);
    this.server = '';
    if (Library.isStringWithLength(options)) {
      this.name = options;
      this.server = options;
    } else if (Library.isObject(options)) {
      this.name = Library.init(options, 'name');
      this.server = Library.init(options, 'server');
    }
  }
}
