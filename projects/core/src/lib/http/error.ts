import { Library } from '../library';
import { Guid } from '../common';

export class Error {
  public message: string = '';
  public code: number = 0;
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
  constructor(options?: Partial<Error>) {
    Object.assign(this, options);
    this.id = Guid.create();
  }
}
