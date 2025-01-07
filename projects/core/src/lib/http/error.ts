import * as Library from '../library/index';
import { Guid } from '../common/guid';

export class Error {
  public message: string;
  public code: number;
  public id: Guid;
  /**
   * hasError()
   */
  hasError() {
    return Library.isStringWithLength(this.message) && this.code > 0;
  }

  /**
   * Constructor()
   */
  constructor(options?: Object | undefined | null) {
    this.code = Library.init(options, 'code', 0);
    this.id = Library.init(options, 'id', Guid.create());
    this.message = Library.init(options, 'message', '');
  }
}
