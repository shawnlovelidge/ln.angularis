import * as Library from '../library/index';
import { Element } from '../common/element';

/**
 * @name GridCell
 */
export class GridCell extends Element {
  public align: string;
  public pattern: string;
  public value: string | number | boolean;

  constructor(options?: Object | undefined | null) {
    super(options);
    this.align = Library.init(options, 'align', 'left');
    this.pattern = Library.init(options, 'pattern');
    this.value = Library.init(options, 'value');
  }
}
