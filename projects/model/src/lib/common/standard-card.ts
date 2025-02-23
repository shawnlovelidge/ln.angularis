import { Action, Library } from '@angularis/core';

export class StandardCard extends Action {
  public title: string = '';
  public category: string = '';
  /*
   * Constructor()
   */
  constructor(options?: Partial<StandardCard>) {
    super(options);
    Object.assign(this, options);
  }
}
