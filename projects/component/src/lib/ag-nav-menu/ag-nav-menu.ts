import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
//
// Font Awesome Library Container
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Components
//
import { AgNavMenuItem } from '../ag-nav-menu-item/ag-nav-menu-item';
import { AgBase } from '../ag-base/ag-base';
//
// Library
//
import { Library, Menu } from '@angularis/core';

@Component({
  imports: [CommonModule, FontAwesomeModule, AgNavMenuItem],
  selector: 'ag-nav-menu',
  templateUrl: 'ag-nav-menu.html',
  styleUrls: ['ag-nav-menu.scss'],
})
export class AgNavMenu extends AgBase implements OnInit {
  public readonly model = input.required<Menu[]>();
  //
  // align
  //
  public align = computed(() =>
    this.classes()
      .split(' ')
      .find(cls => cls.startsWith('align-'))
  );
  //
  // itemsClassName
  //
  public itemsClassName = computed(() => {
    console.log('AgNavMenu.className', this.align());
    return `ag-nav-menu-items ${this.align()}`;
  });

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
    this.observeMutation('ag-nav-menu');
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
