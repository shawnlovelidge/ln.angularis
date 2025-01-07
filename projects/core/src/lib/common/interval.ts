import * as Library from '../library/index';

export interface IInterval {
  hour: number;
  minute: number;
  second: number;
}
/**
 * Class: Interval
 */
export class Interval implements IInterval {
  public hour: number;
  public minute: number;
  public second: number;
  /**
   * Constructor()
   * @param options
   */
  constructor(options: IInterval | {}) {
    this.hour = Library.init(options, 'hour', 12);
    this.minute = Library.init(options, 'minute', 0);
    this.second = Library.init(options, 'second', 0);
  }
}
