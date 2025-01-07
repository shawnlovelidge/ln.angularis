import * as Library from '../library/index';
import { SelectionType } from '../constant';
import { Base } from '../common/base';
import { DataSource } from './datasource';

/**
 * Container
 */
export class Container extends Base {
  public selectionType: SelectionType;
  public dataSource: DataSource;
  /**
   * find()
   * @param uid
   * @returns {T}
   */
  findItem(predicate: Function) {
    return this.dataSource.findItem(predicate);
  }

  /**
   * getActive
   * @returns {any[]}
   */
  getActive(predicate: Function) {
    return this.dataSource.filterItems(predicate);
  }

  /**
   * getChecked
   * @returns {any[]}
   */
  getChecked(predicate: Function) {
    return this.dataSource.filterItems(predicate);
  }

  /**
   * isChecked()
   * @param obj
   * @returns {any}
   */
  isChecked(predicate: Function): boolean {
    if (Library.isFunction(predicate)) {
      const o = this.dataSource.findItem(predicate);
      if (Library.isDefined(o)) {
        type ObjectKey = keyof typeof o;
        const key = 'checked' as ObjectKey;
        return o[key];
      }
    }

    return false;
  }

  /**
   * setActive()
   * @param obj
   * @param active
   */
  setActive(active = false, predicate?: Function) {
    //
    // If we have a valid object
    //
    if (Library.isObject(predicate)) {
      const o = this.dataSource.findItem(predicate);
      if (Library.isDefined(o)) {
        type ObjectKey = keyof typeof o;
        const key = 'active' as ObjectKey;

        o[key] = active;
      }
    } else if (Library.isNullOrUndefined(predicate)) {
      if (Library.isBoolean(active)) {
        this.dataSource.forEach((o: any) => {
          type ObjectKey = keyof typeof o;
          const key = 'active' as ObjectKey;

          o[key] = active;
        });
      }
    }
  }

  /**
   * setChecked()
   * @param obj
   * @param override
   */
  setChecked(o: any) {
    if (Library.isBoolean(o)) {
      this.dataSource.forEach((r: any) => {
        type ObjectKey = keyof typeof r;
        const key = 'checked' as ObjectKey;

        r[key] = o;
      });
    } else {
      //
      // If we have a valid object
      //
      if (Library.isObject(o)) {
        let index = 0;
        let found = false;

        type SourceKey = keyof typeof o;
        const SourceUIDProp = 'uid';

        this.dataSource.forEach((r: any) => {
          type DestinationKey = keyof typeof r;
          const DestinationUIDProp = 'uid' as DestinationKey;
          const DestinationCheckedProp = 'checked' as DestinationKey;

          r[DestinationCheckedProp] =
            r[DestinationUIDProp] === o[SourceUIDProp];

          if (r[DestinationCheckedProp] && !found) {
            found = true;
          }
          if (!found) {
            index++;
          }
        });

        //
        // Override the checked state
        //
        if (Library.isBoolean(o)) {
          this.dataSource.setValue(o, index, 'checked');
        }
      }
    }
  }

  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this.dataSource = new DataSource(Library.init(options, 'dataSource', {}));
    this.selectionType = Library.init(
      options,
      'selectionType',
      SelectionType.None
    );
  }
}
