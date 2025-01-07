import * as Library from '../library/index';

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
  constructor(options?: Object | undefined | null) {
    this.groupId = Library.init(options, 'groupId');
    this.open = Library.init(options, 'open', false);
  }
}
