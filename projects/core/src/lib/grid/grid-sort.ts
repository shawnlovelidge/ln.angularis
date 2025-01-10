import { Library } from '../library';
import { Direction } from '../constant';

export class GridSort {
  public direction: Direction;
  public active: boolean;
  public disabled: boolean;

  toggleDirection() {
    if (this.direction === Direction.Ascending) {
      this.direction = Direction.Descending;
    } else {
      this.direction = Direction.Ascending;
    }
  }

  isAscending() {
    return this.direction === Direction.Ascending;
  }

  isDescending() {
    return this.direction === Direction.Descending;
  }

  isUnSorted() {
    return this.direction === Direction.Undefined;
  }

  constructor(options?: Partial<GridSort>) {
    this.direction = Library.init(options, 'direction', Direction.Ascending);
    this.active = Library.init(options, 'active', false);
    this.disabled = Library.init(options, 'disabled', false);
  }
}
