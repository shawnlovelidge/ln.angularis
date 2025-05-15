
export interface IInterval {
  hour: number;
  minute: number;
  second: number;
}
/**
 * Class: Interval
 */
export class Interval implements IInterval {
  public hour: number = 12;
  public minute: number = 0;
  public second: number = 0;

  constructor(options?: Partial<Interval>) {
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Interval;
