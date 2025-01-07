import * as Library from '../library/index';
import { Action } from './action';
import { Guid } from './guid';

export class Image extends Action {
  public href: string;
  /**
   * hasHRef()
   * @returns {*}
   */
  hasHRef() {
    return Library.isStringWithLength(this.href);
  }

  constructor(options?: Object | undefined | null) {
    super(options);
    this.uid = Guid.create();
    this.href = Library.init(options, 'href', '');
  }
}
