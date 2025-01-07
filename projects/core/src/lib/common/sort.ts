import * as Library from '../library/index';
import { Direction } from '../constant';

export class Sort {
  public direction: Direction;
  /**
   * toggle()
   */
  toggle() {
    this.direction =
      this.direction === Direction.Ascending
        ? Direction.Descending
        : Direction.Ascending;
  }

  /**
   * isAscending
   * @returns {boolean}
   */
  isAscending() {
    return this.direction === Direction.Ascending;
  }

  /**
   * isDescending()
   * @returns {boolean}
   */
  isDescending() {
    return this.direction === Direction.Descending;
  }
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Object | undefined | null) {
    this.direction = Library.init(options, 'direction', Direction.Ascending);
  }
}
