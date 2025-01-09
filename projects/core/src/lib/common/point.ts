import { Library } from '../library';
/**
 * Class: Point
 */
export class Point {
  public _x: number = 0;
  public _y: number = 0;

  get x() {
    return this._x;
  }

  set x(x) {
    this._x = x;
  }

  get y() {
    return this._y;
  }

  set y(y) {
    this._y = y;
  }

  toString() {
    return `(${this._x}, ${this._y})`;
  }

  /**
   * constructor()
   * @param options
   */
  constructor(options?: Partial<Point>) {
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Point;
