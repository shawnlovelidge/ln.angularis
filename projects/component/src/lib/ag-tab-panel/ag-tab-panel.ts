import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  TemplateRef,
  EventEmitter,
  Output,
  AfterContentInit,
  contentChildren,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewContainerRef,
} from '@angular/core';
//
// Library
//
import { Library } from '@angularis/core';
//
// Font Awesome Library Container
//
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Components
//
import { AgTab } from '../ag-tab/ag-tab';
import { AgBase } from '../ag-base/ag-base';
//
// Component: AgTab()
//
@Component({
  imports: [CommonModule],
  selector: 'ag-tab-panel',
  templateUrl: 'ag-tab-panel.html',
  styleUrls: ['ag-tab-panel.scss'],
})
//
// AgTabPanel
//
export class AgTabPanel
  extends AgBase
  implements OnInit, AfterViewInit, AfterContentInit, OnDestroy
{
  @Input() public title: string = '';
  @Input() template: TemplateRef<any> | undefined;
  @Input() actionTemplate: TemplateRef<any> | undefined;
  @Output() public onTabChange: EventEmitter<any> = new EventEmitter();
  //
  // Public Variables
  //
  public readonly tabs = contentChildren(AgTab);
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
    this.observeMutation('ag-tab-panel');
  }
  //
  // ngOnInit()
  //
  public override ngOnInit() {
    //
    // Call Base AfterViewInit
    //
    super.ngOnInit();
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
  // ngAfterContentInit()
  //
  public ngAfterContentInit(): void {
    //
    // Set the first tab that's labeled as active to active
    //
    const tab = this.tabs()?.forEach((t: AgTab) => {
      t.active = t.active ? true : false;
    });
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
  public override handleOnClick($event: Event, tab: AgTab) {
    if (Library.isDefined(tab)) {
      this.tabs()?.forEach((t: AgTab) => {
        t.active = t.id == tab.id;
        t.hidden = !t.active;
      });
      //
      // Emit handleOnClick
      //
      super.handleOnClick($event, {
        id: tab.id,
        label: tab.label,
      });
    }
  }
}
