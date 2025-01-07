import * as Library from '../library/index';
import { Item } from './item';

export class Toolbar extends Item {
  public items: Item[];

  constructor(options: Object | undefined) {
    super(options);
    this.items = [];
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
