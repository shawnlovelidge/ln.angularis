import * as Library from '../library/index';
import { Base, IBase } from './base';

export interface IRange extends IBase {
  pristine: boolean;
  start: number;
  end: number;
  increment: number;
  hasStart(): boolean;
  hasEnd(): boolean;
  isDefined(): boolean;
  isBetween(value: number): boolean;
}
/**
 * Class: Range
 */
export class Range extends Base implements IRange {
  public pristine: boolean;
  public start: number;
  public end: number;
  public increment: number;

  //
  // hasStart()
  //
  public hasStart() {
    return Library.isDefined(this.start) && Library.isNumber(this.start);
  }

  //
  // hasEnd()
  //
  public hasEnd() {
    return Library.isDefined(this.end) && Library.isNumber(this.end);
  }

  //
  // isDefined()
  //
  public isDefined() {
    return this.hasStart() && this.hasEnd();
  }

  /**
   * toArray()
   * @returns {Array}
   */
  toArray() {
    let list = [];
    for (let i = this.start; i < this.end; ) {
      list.push(i);
    }
    return list;
  }

  /**
   * isBetween()
   * @param {*} value
   */
  isBetween(value: number) {
    if (Library.isNumber(value)) {
      return this.start <= value && value <= this.end;
    }
    return false;
  }

  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this.pristine = Library.init(options, 'pristine', true);
    this.start = Library.init(options, 'start', 0);
    this.end = Library.init(options, 'end', 4);
    this.increment = Library.init(options, 'increment', 1);
  }
}
