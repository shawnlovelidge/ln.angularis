import { Library } from '@angularis/core';
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
  public pristine: boolean = true;
  public start: number = 0;
  public end: number = 4;
  public increment: number = 1;

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
  toArray(): number[] {
    let list: Array<number> = new Array();
    for (let i = this.start; i < this.end; i++) {
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
  constructor(options?: Partial<Range>) {
    super(options);
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Range;
