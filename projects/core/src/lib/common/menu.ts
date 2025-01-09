import { Library } from '../library';
import { Action } from './action';

export class Menu extends Action {
  /*
   * Constructor()
   */
  constructor(options?: Partial<Menu>) {
    super(options);    
  }
}

//
// Export default class
//
export default Menu;
