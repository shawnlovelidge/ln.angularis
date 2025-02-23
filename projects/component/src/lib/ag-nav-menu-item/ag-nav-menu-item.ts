import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewContainerRef,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
//
// Font Awesome Library Container
//
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

//
// @angularis/core
//
//
// @angularis/core
//
import { Menu } from '@angularis/core';
//
// AgBase
//
import { AgBase } from '../ag-base/ag-base';
//
// Animations
//
import { basicAnimation } from '../../model/animation/basic-animation';
//
// Component
//
@Component({
  imports: [CommonModule, RouterLink],
  selector: 'ag-nav-menu-item',
  templateUrl: 'ag-nav-menu-item.html',
  styleUrls: ['ag-nav-menu-item.scss'],
  animations: [basicAnimation],
})
export class AgNavMenuItem extends AgBase implements OnInit, OnDestroy {
  public readonly model = input<Menu>(new Menu({}));
  //
  // Public Variables
  //
  //
  // constructor()
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
    this.observeMutation('ag-nav-menu-item');
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
