import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
//
// Library
//
import { Action } from '@angularis/core';
//
// Font Awesome Library Container
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Components
//
import { AgButton } from '../ag-button/ag-button';
import { AgBase } from '../ag-base/ag-base';

@Component({
  selector: 'ag-banner',
  imports: [CommonModule, FontAwesomeModule, AgButton],
  templateUrl: 'ag-banner.html',
  styleUrls: ['ag-banner.scss'],
})
export class AgBanner
  extends AgBase
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() public description: string = '';
  @Input() public actions: Array<Action> = [];
  @Input() public icon!: IconProp;
  //
  // hasFunction(s)
  //
  public hasIcon(): boolean {
    return this.icon !== undefined && (this.icon as Array<string>).length === 2;
  }
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
    this.observeMutation('ag-banner');
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
}
