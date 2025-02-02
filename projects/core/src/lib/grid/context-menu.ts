import { Library } from '../library';
import { Base } from '../common';

/**
 * @ContextMenu
 */
export class ContextMenu extends Base {
  public shortcut: string = '';
  public action: string = '';
  public icon: string = '';
  public subMenu: string = '';
  public cssClasses: string = '';
  public tooltip: string = '';
  public context: string = '';

  constructor(options?: Partial<ContextMenu>) {
    super(options);
    Object.assign(this, options);
  }
}
