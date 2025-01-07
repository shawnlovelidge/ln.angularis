import * as Library from '../library/index';
import { Base } from '../common/base';
import { GridColumn } from './grid-column';
import { GridField } from './grid-field';

/**
 * Class: Grid
 */
export class Grid extends Base {
  public title: string;
  public columns: GridColumn[] = [];

  getColumnByField(field: string) {
    return this.columns.find((c) => {
      return c.field.name === field;
    });
  }

  getColumnByType(type: string) {
    if (Library.isDefined(type)) {
      return this.columns.filter((o) => {
        return o.type === type;
      });
    }
    return [];
  }

  setActiveColumn(column: GridColumn) {
    if (Library.isObject(column)) {
      if (column instanceof GridColumn) {
        this.columns.forEach((col) => {
          col.sort.active = column.uid === col.uid;
        });
      }
    }
  }

  /**
   * constructor()
   */
  constructor(options?: Object | undefined | null) {
    super(options);
    this.columns = [];
    this.title = Library.init(options, 'title', '');
  }
}
