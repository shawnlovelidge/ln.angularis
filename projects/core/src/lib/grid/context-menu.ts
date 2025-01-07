import * as Library from '../library/index';
import { Base } from '../common/base';

/**
 * @ContextMenu
 */
export class ContextMenu extends Base {
  public shortcut: string;
  public action: string;
  public checked: boolean;
  public icon: string;
  public subMenu: string;
  public cssClasses: string;
  public tooltip: string;
  public context: string;

  constructor(options?: Object | undefined | null) {
    super(options);
    this.shortcut = Library.init(options, 'shortcut');
    this.action = Library.init(options, 'action');
    this.checked = Library.init(options, 'checked');
    this.icon = Library.init(options, 'icon');
    this.subMenu = Library.init(options, 'subMenu');
    this.cssClasses = Library.init(options, 'cssClasses');
    this.tooltip = Library.init(options, 'tooltip');
    this.context = Library.init(options, 'context');
  }
}
