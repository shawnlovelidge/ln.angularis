import { default as Library } from '../library/index';
import { Guid } from '../common/guid';
import { GridGeneric } from './grid-generic';
import { PageSet } from '../data/pageset';
import { GridSummary } from './grid-summary';

/**
 * GridContainer()
 */
export class GridContainer<T extends GridGeneric> {
  //
  // Public Variables
  //
  public uid: string;
  public pageSet: PageSet = new PageSet();
  //
  // Private Variables
  //
  private _data: T[];

  /**
   * Constructor
   */
  constructor() {
    //
    // Create a unique identifier for the card
    //
    this.uid = Guid.create().toString();
    this._data = [];
  }

  //
  // data
  //
  public get data() {
    return this._data;
  }

  //
  // data
  //
  public set data(items: T[]) {
    this._data.length = 0;
    if (Library.isArrayWithLength(items)) {
      this._data = [...items];
    }
  }

  //
  // row
  //
  public get rows() {
    return this._data.filter((row) => !row.hidden);
  }

  //
  // length
  //
  public get length() {
    return this._data.length;
  }
  //
  // hasData()
  //
  public hasData() {
    return this.length > 0;
  }
  //
  // setHiddenRows()
  //
  public setHiddenRows(hidden: boolean = true) {
    this._data.forEach((r) => (r.hidden = hidden));
  }
  //
  // setRowHidden()
  //
  public getHiddenRows(hidden: boolean = true) {
    return this._data.forEach((r) => r.hidden === hidden);
  }

  //
  // setActive()
  //
  public setActive(obj: T, dataValueField: string = 'uid') {
    //
    // If we have a valid object
    //
    if (Library.isObject(obj)) {
      this._data.forEach((r) => (r.active = r.uid === obj.uid));
    }
  }
  //
  // getActive()
  //
  public getActive() {
    //
    // If we have a valid object
    //
    return this._data.find((r) => r.active);
  }
  //
  // Card Options
  //
  public setOption(obj: T) {
    this._data.forEach((r) => {
      if (Library.isDefined(r)) {
        r.canActivate = obj.canActivate;
        r.canCheck = obj.canCheck;
        r.canDelete = obj.canDelete;
      }
    });
  }

  //
  // setHiddenCheckBoxRows()
  //
  public setHiddenCheckBoxRows(
    hidden: boolean = true,
    onlyVisibleRows: boolean = false
  ) {
    return this._data.forEach((r) => {
      r.checkbox.hidden = onlyVisibleRows
        ? !r.hidden
          ? hidden
          : true
        : hidden;
    });
  }
  //
  // getHiddenCheckBoxRows()
  //
  public getHiddenCheckBoxRows(hidden: boolean = true) {
    return this._data.filter((r) => {
      return r.checkbox.hidden === hidden;
    });
  }

  /**
   * setChecked()
   */
  public setChecked(
    o: T,
    context: string = 'row',
    dataValueField: string = 'uid',
    onlyVisibleRows: boolean = false
  ) {}
  /**
   * getChecked()
   */
  public getChecked() {
    //
    // If we have a valid object
    //
    return this._data.filter((r) => {
      return r.checkbox.checked;
    });
  }

  /**
   * setSelected()
   */
  public setSelected(
    o: T | boolean | T[],
    context: string = 'row',
    dataValueField: string = 'uid'
  ) {}
  /**
   * getSelected()
   */
  public getSelected() {
    //
    // If we have a valid object
    //
    return this._data.filter((r) => {
      return r.selected;
    });
  }

  /**
   * counts()
   */
  public counts(): GridSummary {
    return new GridSummary().run(this._data);
  }

  /**
   * isChecked()
   */
  public isChecked(obj: T, dataValueField: string = 'uid') {
    //
    // If we have a valid object
    //
    if (Library.isObject(obj)) {
      const item = this._data.find((r) => r.uid === obj.uid);

      if (Library.isObject(item)) {
        return item?.checked;
      }
    }

    return false;
  }

  /**
   * find()
   */
  public find(
    token: string,
    context: string = 'row',
    dataValueField: string = 'uid'
  ) {
    return;
  }

  public remove(
    obj: T | T[],
    context: string = 'row',
    dataValueField: string = 'uid'
  ) {}

  public indexOf(
    obj: T,
    context: string = 'row',
    dataValueField: string = 'uid'
  ) {}
}
