import { Library } from '../library';
import { Guid } from '../common';

export class Environment {
  public uid: Guid;
  public apiUrl: string = '';
  public authUrl: string = '';
  public version: string = '';
  public security: boolean = false;
  public production: boolean = false;
  public hmr: boolean = false;
  public pkg: any = {};
  public buildDate: Date = new Date();

  /**
   * Constructor()
   */
  constructor(options?: Partial<Environment>) {
    Object.assign(this, options);
    this.uid = Guid.create();
  }
}
