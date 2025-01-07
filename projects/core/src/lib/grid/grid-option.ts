import * as Library from '../library/index';
import { GridView } from '../constant';
import { Base } from '../common/base';

/**
 * Class: GridOption
 */
export class GridOption extends Base {
  public view: GridView;
  public selection: string;
  public noDataAvailable: string;
  public width: string;
  public height: string;
  public body: Object;

  /**
   * Constructor()
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this.view = Library.init(options, 'view', GridView.Grid);
    this.noDataAvailable = Library.init(
      options,
      'noDataAvailable',
      'No records found.'
    );
    this.selection = Library.init(options, 'selection', 'single');
    this.width = Library.init(options, 'width', 'auto');
    this.height = Library.init(options, 'height', 'auto');
    this.body = Library.init(options, 'body', {});
  }
}
