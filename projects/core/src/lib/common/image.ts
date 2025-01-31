import { Library } from '../library';
import { Action } from './action';
import { Guid } from './guid';

export class Image extends Action {
  public href: string = '';
  //
  // hasImage
  //
  public hasImage() {
    return Library.isStringWithLength(this.href);
  }
  //
  // Constructor
  //
  constructor(options?: Partial<Image>) {
    super(options);
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Image;
