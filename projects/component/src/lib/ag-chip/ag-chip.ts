import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
//
// Font Awesome Library Container
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Library
//
import { Base, Library } from '@angularis/core';
//
// Components
//
import { AgBase } from '../ag-base/ag-base';
import { IconProp } from '@fortawesome/angular-fontawesome/types';

@Component({
  imports: [CommonModule, FontAwesomeModule],
  selector: 'ag-chip',
  templateUrl: 'ag-chip.html',
  styleUrls: ['ag-chip.scss'],
})
export class AgChip extends AgBase implements OnInit, AfterViewInit, OnDestroy {
  @Input() public model: Base = new Base();
  @Input() public icon: IconProp = 'none';
  @Input() public removeIcon: IconProp = 'none';
  //
  // hasIcon(s)
  //
  public hasIcon = () => Library.isDefined(this.icon) && this.icon !== 'none';
  public hasRemoveIcon = () =>
    Library.isDefined(this.removeIcon) && this.removeIcon !== 'none';
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
    this.observeMutation('ag-chip');
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
      ...{ padding: '0' },
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
  // handleOnToggle
  //
  public handleOnToggle(model: Base) {
    //
    // If the chip is not readonly
    //
    if (
      this.classes().includes('basic') ||
      this.classes().includes('highlight') ||
      this.classes().includes('input')
    ) 
    {
      model.checked = !model.checked;

      super.handleOnClick(model);
    }
  }
  //
  // handleOnRemove
  //
  public override handleOnRemove(model: Base) {
    model.active = false;
    model.checked = false;

    if (Library.isDefined(this.onRemove)) {
      this.onRemove.emit(model);
    }
  }
}
