import { Library } from '../library';
import { Element } from '../common';

/**
 * @name GridCell
 */
export class GridCell extends Element<string | number | boolean> {
  public align: string;
  public pattern: string;

  constructor(options?: Partial<GridCell>){
    super(options);
    this.align = Library.init(options, 'align', 'left');
    this.pattern = Library.init(options, 'pattern');
    this.value = Library.init(options, 'value');
  }
}
