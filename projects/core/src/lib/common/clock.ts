import { Library } from '../library';
import { Base } from './base';
import { Interval } from './interval';
/**
 * Class: Clock
 */
export class Clock extends Base {
  public time: Date = new Date();
  public interval: Interval= new Interval();

  constructor(options?: Partial<Clock>) {
    super(options);
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Clock;
