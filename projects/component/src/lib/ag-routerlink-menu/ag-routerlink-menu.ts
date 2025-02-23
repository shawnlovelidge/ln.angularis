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
// Components
//
import { AgBase } from '../ag-base/ag-base';
import { AgHyperLink } from '../ag-hyperlink/ag-hyperlink';
//
// Library
//
import { Menu } from '@angularis/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  imports: [CommonModule, AgHyperLink],
  selector: 'ag-routerlink-menu',
  templateUrl: 'ag-routerlink-menu.html',
  styleUrls: ['ag-routerlink-menu.scss'],
})
export class AgRouterLinkMenu extends AgBase implements OnInit {
  public readonly model = input<Menu[]>([]);
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
    return `ag-nav-hyperlink-menu-items ${this.align()}`;
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
    this.observeMutation('ag-nav-hyperlink-menu');
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
