import * as Library from '../library/index';
import { Page } from './page';
import { Range } from '../common/range';
/**
 * Class: PageSet
 */
export class PageSet {
  private _pageSize: number;
  private _length: number;
  private _indexId: number;
  private _pages: Page[];
  //
  // pageSize()
  //
  get pageSize() {
    return this._pageSize;
  }
  //
  // length()
  //
  get length() {
    return this._length;
  }
  //
  // indexId
  //
  get indexId() {
    return this._indexId;
  }
  //
  // set IndexId
  //
  set indexId(value) {
    if (Library.isNumber(value)) {
      if (value >= 1 && value <= this._pages.length) {
        this._indexId = value;
        this._pages.forEach((p) => (p.active = p.id === this._indexId));
      }
    }
  }
  //
  // getSets
  //
  get sets() { return Math.ceil(this._length / this._pageSize); }
  //
  // pages()
  //
  get pages() {
    return this._pages;
  }
  //
  // constructor()
  //
  constructor(options?: Object | undefined | null) {
    this._pages = [];
    this._pageSize = Library.init(options, 'pageSize', 10);
    this._length = Library.init(options, 'length', 0);
    this._indexId = Library.init(options, 'indexId', 1);
    //
    // Create Pages
    //
    this.create();
  }  
  //
  // clear()
  //
  public clear() {
    //
    // Clear pages
    //
    if (Library.isArray(this._pages)) {
      this._pages.splice(0, this._pages.length);
    }
  }
  //
  // hasPages()
  //
  public hasPages = () => Library.isArrayWithLength(this._pages); 
  //
  // setStart()
  //
  public setStart() {
    //
    // Reset the Start Index Relative 1
    //
    this.indexId = 1
    return this.indexId;
  }
  //
  // setEnd()
  //
  public setEnd() {
    this._indexId = this.hasPages() ? this._pages.length : 1;

    return this._indexId;
  }
  //
  // Next()
  //
  public next(): number {
    this.indexId += 1;
    return this.indexId;
  }
  //
  // previous
  //
  public previous(): number {
    this.indexId -= 1;
    return this.indexId;
  }
  
  //
  // getActivePage()
  //
  public getActivePage(): null | Page {
    if (this.hasPages()) {
      return this._pages[this._indexId - 1];
    }
    return null;
  }
  //
  // toArray()
  //
  public toArray(): Array<any> {
    if (this.hasPages()) {
      return Array.from(new Array(this.sets), (x, i) => i + 1);
    }
    return [];
  }

  //
  // create
  //
  private create() {
    //
    // Clear pages
    //
    this.clear();
    //
    // Loop through the page sets
    //
    for (let i = 1; i < this.sets + 1; i++) {
      this._pages.push(
        new Page({
          id: i,
          name: i.toString(),
          range: new Range({
            start: this._pageSize * i - this._pageSize,
            end: i < this.sets ? this._pageSize * i - 1 : this.length - 1,
          }),
        })
      );
    }
    //
    // Has Pages
    //
    return this.hasPages();
  }
}
