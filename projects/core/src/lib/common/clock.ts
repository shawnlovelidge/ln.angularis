import * as Library from '../library/index';
import { Base } from './base';
import { Interval } from './interval';
/**
 * Class: Clock
 */
export class Clock extends Base {
  public time: Date;
  public interval: Interval;
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this.time = Library.init(options, 'time', new Date());
    this.interval = new Interval(Library.init(options, 'interval'));
  }
}
