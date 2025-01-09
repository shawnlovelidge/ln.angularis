import { Library } from '../library';
import { GridSchemaSelection } from '../constant';
import { GridColumn } from './grid-column';

/**
 * @name GridSchema
 * @description Contains a generic schema for a generic container component
 */
export class GridSchema {
  public columns: GridColumn[];
  public rowSelection: GridSchemaSelection;
  public rowCheckSelection: GridSchemaSelection;
  public editable: boolean;
  public enableColResize: boolean;
  public filtering: boolean;
  public floatingFilter: boolean;
  public filterRowHeight: number;
  public headerHeight: number;
  public rowHeight: number;
  public noRecordsFound: string;
  public sorting: boolean;
  public status: any;
  public toolbarHeight: number;
  public quickFilter: any;
  public style: any;

  isSingleSelection() {
    return this.rowSelection === GridSchemaSelection.Single;
  }

  isMultiSelection() {
    return this.rowSelection === GridSchemaSelection.Multi;
  }

  isSingleCheckBoxSelection() {
    return this.rowCheckSelection === GridSchemaSelection.Single;
  }

  isMultiCheckBoxSelection() {
    return this.rowCheckSelection === GridSchemaSelection.Multi;
  }

  hasRowSelection() {
    return this.isMultiSelection() || this.isSingleSelection();
  }

  hasRowCheckSelection() {
    return this.isMultiCheckBoxSelection() || this.isSingleCheckBoxSelection();
  }

  constructor(options?: Partial<GridSchema>) {
    //
    // Initialize columns
    //
    this.columns = [];
    //
    // Convert columns to GridColumn(s)
    //
    if (Library.isArrayWithLength(Library.init(options, 'columns'))) {
      this.columns = Library.init(options, 'columns').map(
        (c: any) => new GridColumn(c)
      );
    }

    this.editable = Library.init(options, 'editable', false);
    this.enableColResize = Library.init(options, 'enableColResize', false);
    this.filtering = Library.init(options, 'filtering', true);
    this.filterRowHeight = Library.init(options, 'filterRowHeight', 0);
    this.floatingFilter = Library.init(options, 'floatingFilter', false);
    this.headerHeight = Library.init(options, 'headerHeight', 0);
    this.noRecordsFound = Library.init(options, 'noRecordsFound', '');
    this.rowHeight = Library.init(options, 'rowHeight', 0);
    this.rowSelection = Library.init(
      options,
      'rowSelection',
      GridSchemaSelection.Single
    );
    this.rowCheckSelection = Library.init(
      options,
      'rowCheckSelection',
      GridSchemaSelection.Multi
    );
    this.sorting = Library.init(options, 'sorting', true);
    this.status = Library.init(options, 'status', {
      hidden: false,
      label: 'SELECTED of TOTAL selected',
    });
    this.toolbarHeight = Library.init(options, 'toolbarHeight', 0);
    this.quickFilter = Library.init(options, 'quickFilter', {
      hidden: false,
    });
    this.style = Library.init(options, 'style', {});
  }
}
