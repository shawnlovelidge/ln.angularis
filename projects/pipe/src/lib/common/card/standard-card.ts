import { Action, Library } from '@angularis/core';

export class StandardCard extends Action {
  public title: string;
  public category: string;
  /*
   * Constructor()
   */
  constructor();

  constructor(options: object);
  constructor(options?: any) {
    super(options);
    this.title = Library.init(options, 'title', '');
    this.category = Library.init(options, 'category', '');
  }
}
