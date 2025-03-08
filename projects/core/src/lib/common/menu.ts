import { Library } from '../library';
import { Route } from './route';

export class Menu extends Route {
  public shortcut: string = '';
  public icon: string = '';
  public children: Menu[] = [];
  public class: string = '';
  public tooltip: string = '';
  public context: string = '';

  public hasShortCut = () => Library.isStringWithLength(this.shortcut);
  public hasIcon = () => Library.isStringWithLength(this.icon);
  public hasChildren = () => Library.isArrayWithLength(this.children);
  public hasCssClasses = () => Library.isStringWithLength(this.class);
  public hasTooltip = () => Library.isStringWithLength(this.tooltip);
  public hasContext = () => Library.isStringWithLength(this.context);

  constructor(options?: Partial<Menu>) {
    super(options);
  }
}

//
// Export default class
//
export default Menu;
