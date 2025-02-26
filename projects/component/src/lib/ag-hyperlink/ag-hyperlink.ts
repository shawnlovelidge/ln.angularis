import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewContainerRef,
  input,
} from '@angular/core';
//
// Action
//
import { Route } from '@angularis/core';
//
// Font Awesome Library Container
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Components
//
import { AgBase } from '../ag-base/ag-base';
import { RouterLink } from '@angular/router';
//
// AgHyperLink
//
@Component({
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  selector: 'ag-hyperlink',
  templateUrl: 'ag-hyperlink.html',
  styleUrls: ['ag-hyperlink.scss'],
})
export class AgHyperLink extends AgBase implements OnInit, AfterViewInit, OnDestroy {
  //
  // Signals
  //
  public readonly model = input<Route>(new Route());
  //
  // Constructor
  //
  constructor(element: ElementRef, viewContainerRef: ViewContainerRef, library: FaIconLibrary) {
    super(element, viewContainerRef, library);
    //
    // Observe Mutation
    //
    this.observeMutation('atag');
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
