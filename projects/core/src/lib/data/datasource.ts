import { Library } from '../library';
/**
 * Class: DataSource
 */
export class DataSource {
  private _data: Array<any> = [];
  /**
   * length()
   * @returns {*}
   */
  public length() {
    if (Library.isArray(this._data)) {
      return this._data.length;
    }
    return 0;
  }

  /**
   * data
   * @param predicate
   */
  public findItem(predicate?: Function) {
    if (predicate) {
      const list = this._data.filter(x => predicate(x));
      return list.length === 0 ? undefined : list[0];
    }
  }
  /**
   * data
   * @param index
   * @param o
   */
  public setValue(value: any, index: number, prop: string) {
    if (Library.isArray(this._data)) {
      if (index < this.length()) {
        const o = this._data[index];
        type key = keyof typeof o;
        const oProp = prop as key;

        o[oProp] = value;
      }
    }
  }
  /**
   * data
   * @param predicate
   */
  public filterItems(predicate?: Function) {
    if (predicate) {
      return this._data.filter(x => predicate(x));
    }

    return [];
  }

  /**
   * data
   * @param predicate
   */
  public forEach(predicate?: Function) {
    if (predicate) {
      return this._data.forEach(x => predicate(x));
    }

    return [];
  }
  /**
   * flush()
   */
  public flush() {
    if (Library.isArray(this._data)) {
      this._data.splice(0, this._data.length);
    }
  }
  /**
   * firstOrDefault()
   * @returns {*}
   */
  public firstOrDefault() {
    if (Library.isArrayWithLength(this._data)) {
      return this._data[0];
    }
    return new Object();
  }
  /**
   * exists()
   * @returns {*|boolean}
   */
  public exists() {
    return this._data?.length > 0;
  }
  /**
   * constructor()
   * @param options
   */
  constructor(options: any) {
    this._data = JSON.parse(JSON.stringify(Library.init(options, 'items', [])));
  }
}
