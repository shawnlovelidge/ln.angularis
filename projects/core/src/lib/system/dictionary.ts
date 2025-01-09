import { Library } from '../library';
import { Guid } from '../common';

export interface IDictionary<T> {
  [Key: string]: T;
}
/**
 * Class: Dictionary
 */
export class Dictionary<T> {
  private _uid: Guid;
  private _items: IDictionary<T> = {};

  //
  // Comment: uid
  //
  public get uid(): Guid {
    return this._uid;
  }
  /**
   * keys
   * @returns {Array}
   */
  keys() {
    return Object.keys(this._items);
  }
  /**
   * values
   * @returns {Array}
   */
  values() {
    return this._items;
  }

  /**
   * add()
   * @param key
   * @param value
   */
  add(key: string, value: T) {
    if (Library.isStringWithLength(key) && Library.isStringWithLength(value)) {
      this._items[key] = value;
    }
  }

  /**
   * remove()
   * @param key
   */
  remove(key: string) {
    if (Library.isStringWithLength(key)) {
      delete this._items[key];
      return true;
    }

    return false;
  }

  /**
   * containsKey
   * @param key
   * @returns {boolean}
   */
  containsKey(key: string) {
    return typeof this._items[key] !== 'undefined';
  }

  /**
   * Constructor()
   * @param options
   */
  constructor(items?: Dictionary<T> | undefined | null) {
    this._uid = Guid.create();
    if (Library.isArrayWithLength(items)) {
    }
  }
}
