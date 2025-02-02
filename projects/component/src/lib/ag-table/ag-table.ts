import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  EventEmitter,
  Output,
  SimpleChange,
  TemplateRef,
  Type,
  input,
} from '@angular/core';

//
// lernender/Core
//
import {
  TableColumn,
  Constant,
  Library,
  TableSchema,
  TableRow,
  Action,
  Table,
} from '@angularis/core';

export type Content<T> = string | TemplateRef<T> | Type<T>;

@Component({
  selector: 'ag-table',
  templateUrl: 'ag-table.html',
  styleUrls: ['ag-table.scss'],
})

//
// TmTable
//
export class AgTable implements OnInit, OnDestroy, OnChanges {
  public get table() {
    return this._table;
  }
  public hidden = input<boolean>(false);
  public disabled = input<boolean>(false);
  public readonly contentType = input<any>();
  public readonly hideHeader = input<boolean>(false);
  public readonly border = input<boolean>(false);
  public readonly label = input<string>('');
  public readonly schema = input<TableSchema>(new TableSchema());
  public readonly actions = input<Action[]>([]);
  public readonly template = input<Content<any>>();
  public readonly style = input<object>();

  @Output() public onAdd: EventEmitter<any> = new EventEmitter();
  @Output() public onRow: EventEmitter<any> = new EventEmitter();
  @Output() public onDblClick: EventEmitter<any> = new EventEmitter();
  @Output() public onActive: EventEmitter<any> = new EventEmitter();
  @Output() public onHeader: EventEmitter<any> = new EventEmitter();
  @Output() public onEdit: EventEmitter<any> = new EventEmitter();
  @Output() public onDelete: EventEmitter<any> = new EventEmitter();
  @Output() public onIcon: EventEmitter<any> = new EventEmitter();
  @Output() public onLink: EventEmitter<any> = new EventEmitter();
  @Output() public onSelect: EventEmitter<any> = new EventEmitter();
  @Output() public onReady: EventEmitter<any> = new EventEmitter();
  @Output() public onRowSelected: EventEmitter<any> = new EventEmitter();
  @Output() public onRowChecked: EventEmitter<any> = new EventEmitter();

  /**
   * Private Variables
   */
  private _table: Table | undefined;
  private _prevent: boolean = false;
  private _timer: any;

  /**
   * constructor()
   */
  constructor() {}
  //
  // Public Variables
  //

  //
  // hasLabel()
  //
  public hasLabel() {
    return Library.isStringWithLength(this.label());
  }

  /**
   * getCheckedRows()
   */
  public getCheckedRows() {
    // SDL:ToDo return this._table?.getChecked();
  }

  /**
   * getComponentType()
   */
  public getComponentType(): any {
    return Constant.ComponentType;
  }

  /**
   * getDirectionType()
   */
  public getDirectionType(): any {
    return Constant.Direction;
  }

  /**
   */
  public handleHeader(column: TableColumn) {
    //
    // If we have a valid Sort TableColumn
    //
    if (!column.sort.disabled) {
      //
      // Flip the Direction
      //
      column.sort.toggleDirection();
      //
      // Set the Active TableColumn
      //
      this._table?.setActiveColumn(column);
      //
      // Set the Active TableColumn
      //
      // SDL:ToDo this._table?.sort(column);
      //
      // Emit Header click event IFF Column is sortable
      //
      if (Library.isDefined(this.onHeader)) {
        this.onHeader.emit(column);
      }
    }
  }

  /**
   */
  public handleActive(row: TableRow) {
    //
    // Enable/Disable the active flag
    //
    if (this.schema().rowSelection === Constant.GridSchemaSelection.Single) {
      // SDL:ToDo this._table?.setActive(row);
    } else {
      row.active = !row.active;
    }

    //
    // Event: OnActive
    //
    if (Library.isDefined(this.onActive)) {
      this.onActive.emit(row);
    }
  }

  //
  // handleAdd
  //
  public handleAdd($event: any) {
    if (Library.isDefined($event)) {
      if (Library.isDefined(this.onAdd)) {
        this.onAdd.emit($event);
      }
    }
  }

  //
  // handleDblClick()
  //
  public handleDblClick(row: TableRow) {
    clearTimeout(this._timer);
    this._prevent = true;
    //
    // Event: OnSelect
    //
    if (Library.isDefined(this.onDblClick)) {
      this.onDblClick.emit(row);
    }
  }

  //
  // handleRowSelected
  //
  public handleRowSelected(row: TableRow) {
    this._timer = setTimeout(() => {
      if (!this._prevent) {
        if (Library.isDefined(row)) {
          //
          // If multi select then toggle the selected state
          //
          if (
            !(
              this.schema().rowSelection === Constant.GridSchemaSelection.Single
            )
          ) {
            row.selected = !row.selected;
          } else {
            // SDL:ToDo const selected = this._table?.getSelected();
            // if (Library.isArrayWithLength(selected)) {
            //   if (selected && selected[0].uid === row.uid) {
            //     row.selected = !row.selected;
            //   } else {
            //     this._table?.setSelected(row);
            //   }
            // } else {
            //   this._table?.setSelected(row);
            // }
          }

          //
          // Emit selected row if caller wants to be informed.
          //
          if (Library.isDefined(this.onRowSelected)) {
            setTimeout(() => {
              // this.onRowSelected.emit({
              //   selected: this._table?.getSelected(),
              // });
            }, 20);
          }
        }
        this._prevent = false;
      }
    }, 200);
  }
  //
  // handleEdit
  //
  public handleEdit($event: any) {
    if (Library.isDefined($event)) {
      if (Library.isDefined(this.onEdit)) {
        this.onEdit.emit($event);
      }
    }
  }
  //
  // handleDelete
  //
  public handleDelete($event: any) {
    if (Library.isDefined($event)) {
      if (Library.isDefined(this.onDelete)) {
        this.onDelete.emit($event);
      }
    }
  }
  //
  // handleIcon
  //
  public handleIcon($event: any) {
    if (Library.isDefined($event)) {
      if (Library.isDefined(this.onIcon)) {
        this.onIcon.emit($event);
      }
    }
  }
  //
  // handleLink
  //
  public handleLink($event: any) {
    if (Library.isDefined($event)) {
      if (Library.isDefined(this.onLink)) {
        this.onLink.emit($event);
      }
    }
  }
  //
  // handleSelect()
  //
  public handleSelect($event: any) {
    if (Library.isDefined($event)) {
      if (Library.isDefined(this.onSelect)) {
        this.onSelect.emit($event);
      }
    }
  }

  //
  // handleFilterSearch()
  //
  public handleFilterSearch($event: any) {
    if (Library.isDefined($event)) {
    }
  }

  //
  // ngOnChanges
  //
  public ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    //
    // Initialize Component
    //
    if (Library.isDefined(changes?.['data'])) {
      if (Library.isDefined(changes?.['data'].currentValue)) {
        //
        // _initTable()
        //
        this._initTable();
        /**
         * Register Data Event Listener
         */
        // this.registerDataEventHandler((response: any) => {
        //   if (this._table != undefined) {
        //     //
        //     // Clear Array
        //     //
        //     this._table.data.slice(0, this._table.data.length);

        //     if (Library.hasOwnProperty(response, 'data'))
        //       this._table.data = response?.data.map(
        //         (r: any) => new TableRow({ data: r })
        //       );
        //     else if (Library.isArray(response))
        //       this._table.data = response?.map(
        //         (r: any) => new TableRow({ data: r })
        //       );
        //   }
        // });
      }
    }
  }

  public ngAfterViewInit() {
    //
    // Enable Column Resizing
    //
    //this._table?.colResize();
  }
  //
  // ngOnInit()
  //
  public ngOnInit() {
    this._initTable();
  }
  //
  // ngOnDestroy()
  //
  ngOnDestroy(): void {
    // Clean up any resources or subscriptions here
    clearTimeout(this._timer);
    this._table = undefined;
  }
  //
  // _initTable()
  //
  private _initTable() {
    if (!Library.isDefined(this._table)) {
      //
      // Initialize Component
      //
      // this._table = new Table(
      //   this.schema()?.columns.map(col => {
      //     return new TableColumn(col);
      //   })
      // );
    }
  }
}
