import { Library } from '../library';

/**
 * Class: GridColumnGroup
 */
export class GridColumnGroup {
  public groupId: number;
  public open: boolean;

  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Partial<GridColumnGroup>) {
    this.groupId = Library.init(options, 'groupId');
    this.open = Library.init(options, 'open', false);
  }
}
