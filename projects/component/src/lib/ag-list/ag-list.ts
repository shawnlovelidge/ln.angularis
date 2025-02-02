import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  signal,
  ViewContainerRef,
} from '@angular/core';
//
// Library
//
import { Action } from '@angularis/core';
//
// Font Awesome Library Container
//
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Components
//
import { AgBase } from '../ag-base/ag-base';
import { AgCheckBox } from '../ag-checkbox/ag-checkbox';

@Component({
  imports: [CommonModule, AgCheckBox],
  selector: 'ag-list',
  templateUrl: 'ag-list.html',
  styleUrls: ['ag-list.scss'],
})
export class AgList extends AgBase implements OnInit, AfterViewInit, OnDestroy {
  @Input() public multiselect: boolean = false;
  @Input() public items = signal<Action[]>([]);
  //
  // @HasFunctions()
  //
  public readonly useCheckBoxList = computed(() =>
    this.classes().includes('ag-checkbox-list')
  );
  //
  // Constructor
  //
  constructor(
    element: ElementRef,
    viewContainerRef: ViewContainerRef,
    library: FaIconLibrary
  ) {
    super(element, viewContainerRef, library);
    //
    // Observe Mutation
    //
    this.observeMutation('ag-list-items');
  }
  //
  // ngOnInit()
  //
  public override ngOnInit() {
    //
    // Call Base AfterViewInit
    //
    super.ngOnInit();
    //
    // Set the default style
    //
    this.style = {
      ...{ height: 'auto', overflowY: 'auto' },
      ...this.style,
    };
  }
  //
  // ngAfterViewInit
  //
  public override ngAfterViewInit() {
    //
    // Call Base AfterViewInit
    //
    super.ngAfterViewInit();
  }
  //
  // ngOnDestroy
  //
  public override ngOnDestroy() {
    //
    // Call Base OnDestroy
    //
    super.ngOnDestroy();
  }
  //
  // handleOnClick
  //
  public override handleOnClick(item: Action) {
    //
    // Handle the click event
    //
    for (const i of this.items()) {
      if (this.multiselect)
        i.active = i.id === item.id ? !item.active : i.active;
      else i.active = item.id === i.id;
    }

    //
    // Emit the click event
    //
    if (this.onClick)
      if (this.multiselect)
        super.handleOnClick(
          this.items().filter(i => i.active)
        );
      else super.handleOnClick([item]);
  }
}
