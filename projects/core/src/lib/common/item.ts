import { Action } from './action';

export class Item extends Action {
  /*
   * Constructor()
   */
  constructor(options?: Partial<Item>) {
    super(options);
  }
}
//
// Export default class
//
export default Item;
