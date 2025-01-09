import { Library } from '../library';
import { Item } from './item';

export class Toolbar extends Item {
  public items: Item[] = [];

  constructor(options?: Partial<Toolbar>) {
    super(options);
    Object.assign(this, options);
    if (options != undefined) {
      if (Library.hasOwnProperty(options, 'items')) {
        // @ts-ignore
        if (Library.isArrayWithLength(options.items)) {
          // @ts-ignore
          this.items = options.items.map((item) => {
            return new Item(item);
          });
        }
      }
    }
  }
}

//
// Export default class
//
export default Toolbar;
