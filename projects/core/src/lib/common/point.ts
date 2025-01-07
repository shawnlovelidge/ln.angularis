import * as Library from '../library/index';
/**
 * Class: Point
 */
export class Point {
  public _x: number;
  public _y: number;

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
  constructor(options?: Object | undefined | null) {
    this._x = Library.init(options, 'x', 0);
    this._y = Library.init(options, 'y', 0);
  }
}
