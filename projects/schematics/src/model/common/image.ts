import { Library } from '@angularis/core';
import { Action } from './action';

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
