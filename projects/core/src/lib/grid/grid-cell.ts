import { Library } from '../library';
import { Element } from '../common';

/**
 * @name GridCell
 */
export class GridCell extends Element {
  public align: string;
  public pattern: string;
  public value: string | number | boolean;

  constructor(options?: Partial<GridCell>){
    super(options);
    this.align = Library.init(options, 'align', 'left');
    this.pattern = Library.init(options, 'pattern');
    this.value = Library.init(options, 'value');
  }
}
