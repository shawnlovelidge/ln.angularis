import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewContainerRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
//
// Font Awesome Library Container
//
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Components
//
import { AgBase } from '../ag-base/ag-base';

@Component({
  imports: [CommonModule],
  selector: 'ag-toggle',
  templateUrl: 'ag-toggle.html',
  styleUrls: ['ag-toggle.scss'],
})
export class AgToggle
  extends AgBase
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() public value: boolean = false;
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
    this.observeMutation('ag-toggle');
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
  // ngOnDestroy
  //
  public override ngOnDestroy() {
    //
    // Call Base OnDestroy
    //
    super.ngOnDestroy();
  }
  //
  // handleOnClick()
  //
  public override handleOnClick($event: Event) {
    //
    // Toggle Value
    //
    this.value = !this.value;
    //
    // Call Base HandleOnClick
    //
    super.handleOnClick(this.value);
  }
}
