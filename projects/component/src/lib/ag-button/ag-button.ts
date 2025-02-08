import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewContainerRef,
  Input,
} from '@angular/core';
//
// Font Awesome Library Container
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Components
//
import { AgBase } from '../ag-base/ag-base';
import { IconProp } from '@fortawesome/angular-fontawesome/types';
import { Library } from '@angularis/core';

@Component({
  imports: [CommonModule, FontAwesomeModule],
  selector: 'ag-button',
  templateUrl: 'ag-button.html',
  styleUrls: ['ag-button.scss'],
})
export class AgButton
  extends AgBase
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() public icon: IconProp = 'none';
  //
  // hasIcon(s)
  //
  public hasIcon = () => Library.isDefined(this.icon) && this.icon !== 'none';  
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
    this.observeMutation('ag-button');
  }
  //
  // ngOnInit
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
}
