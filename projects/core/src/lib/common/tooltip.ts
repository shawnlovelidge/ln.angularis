import { Library } from '../library';
/**
 * Class: Tooltip
 */
export class Tooltip {
  public content: string;
  public template: string;
  public style: Object = {};
  public position: Object;
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Partial<Tooltip>) {
    this.content = Library.init(options, 'content', '');
    this.template = Library.init(options, 'template');
    this.style = Library.init(options, 'style', {});
    this.position = Library.init(options, 'position', {});
  }
}

//
// Export default class
//
export default Tooltip;
