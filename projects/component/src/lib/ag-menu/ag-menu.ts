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
  signal,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
//
// RxJs
//
import { Subscription } from 'rxjs';
import {
  ConnectedPosition,
  Overlay,
  OverlayConfig,
  OverlayOutsideClickDispatcher,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
//
// Font Awesome Library Container
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Library
//
import { Item, Library } from '@angularis/core';
//
// Components
//
import { AgBase } from '../ag-base/ag-base';
import { AgMenuOption } from '../ag-menu-option/ag-menu-option';
//
// Components
//
@Component({
  imports: [CommonModule, AgMenuOption, FontAwesomeModule],
  selector: 'ag-menu',
  templateUrl: 'ag-menu.html',
  styleUrls: ['ag-menu.scss'],
})
export class AgMenu extends AgBase implements OnInit, AfterViewInit, OnDestroy {
  @Input() public model: Array<Item> = [];
  //
  // Public Variables
  //
  public value = signal<Item>(new Item());
  public subscriptions: Subscription[] = [];
  public open = signal(false);
  public overlayRef: any;
  //
  // isFunction(s)
  //
  public isHamburgerMenu = computed(() => {
    if (Library.isStringWithLength(this.classes()))
      return this.classes().includes('ag-hamburger-menu');

    return false;
  });
  public isKebabMenu = computed(() => {
    if (Library.isStringWithLength(this.classes()))
      return this.classes().includes('ag-kebab-menu');

    return false;
  });
  public isDefaultMenu = computed(() => {
    return !this.isHamburgerMenu() && !this.isKebabMenu();
  });
  //
  // ViewChild()
  //
  @ViewChild('portalContainer') portalContainer!: ElementRef;
  @ViewChild('portalView') portalView!: TemplateRef<any>;
  //
  // Constructor
  //
  constructor(
    element: ElementRef,
    viewContainerRef: ViewContainerRef,
    library: FaIconLibrary,
    private overlay: Overlay,
    private overlayOutsideClickDispatcher: OverlayOutsideClickDispatcher
  ) {
    super(element, viewContainerRef, library);
    //
    // Observe Mutation
    //
    this.observeMutation('ag-menu');
  }
  //
  // ngOnInit
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
      ...{
        height: 'auto',
        minHeight: 'auto',
        minWidth: '100px',
        width: '100%',
      },
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
    //
    // onCloseContextMenu
    //
    this.detachOverlay();
  }
  //
  // onOpenMenu
  //
  public onOpenMenu = (event: MouseEvent) => {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
    //
    // Create Overlay Config
    //
    const config = new OverlayConfig({
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.portalContainer)
        .setOrigin(this.portalContainer)
        .withPositions(this.getConnectedPositions()),
      width: `${this.portalContainer.nativeElement.getBoundingClientRect().width}px`,
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    //
    // Define Overlay
    //
    this.overlayRef = this.overlay.create(config);
    this.subscriptions.push(
      this.overlayRef.backdropClick().subscribe(() => this.detachOverlay())
    );

    //
    // Handle OnDocument Click
    //
    this.overlayOutsideClickDispatcher.add(this.overlayRef);
    this.subscriptions.push(
      this.overlayRef.outsidePointerEvents().subscribe(() => {
        this.overlayRef.detach();
      })
    );
    //
    // Attach overlay to CdkPOrtal
    //
    this.overlayRef.attach(
      new TemplatePortal(this.portalView, this.viewContainerRef)
    );
  };
  //
  // onCloseItems()
  //
  public onCloseMenu(menu: any = undefined) {
    if (menu) {
      this.value.set(menu);
      //
      // Toggle open/close
      //
      if (Library.isDefined(this.onClick)) {
        this.onClick.emit(menu);
      }
    }
    //
    // onCloseContextMenu
    //
    this.detachOverlay();
  }
  //
  // detachOverlay()
  //
  private detachOverlay() {
    if (this.subscriptions) this.subscriptions.forEach(s => s.unsubscribe());
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }
  //
  // getConnectedPosition()
  //
  // bottom-left
  //
  // originX: 'start', // left corner of the button
  // originY: 'top', // top corner of the button
  // overlayX: 'start', // left corner of the overlay to the origin
  // overlayY: 'bottom', // top corner of the overlay to the origin

  // bottom-right
  //
  // originX: 'end', // right corner of the button
  // originY: 'top', // top corner of the button
  // overlayX: 'end', // right corner of the overlay to the origin
  // overlayY: 'bottom', // top corner of the overlay to the origin
  //
  private getConnectedPositions(): ConnectedPosition[] {
    let positions: ConnectedPosition[] = [];

    if (this.isKebabMenu()) {
      positions.push({
        originX: 'start', // right corner of the button
        originY: 'center', // bottom corner of the button
        overlayX: 'end', // right corner of the overlay to the origin
        overlayY: 'top', // top corner of the overlay to the origin
      });
      positions.push({
        originX: 'start', // right corner of the button
        originY: 'top', // bottom corner of the button
        overlayX: 'end', // right corner of the overlay to the origin
        overlayY: 'top', // top corner of the overlay to the origin
      });
      positions.push({
        originX: 'start', // right corner of the button
        originY: 'bottom', // bottom corner of the button
        overlayX: 'start', // right corner of the overlay to the origin
        overlayY: 'top', // top corner of the overlay to the origin
      });
    } else if (this.isHamburgerMenu()) {
      positions.push({
        originX: 'start', // left corner of the button
        originY: 'bottom', // bottom corner of the button
        overlayX: 'start', // left corner of the overlay to the origin
        overlayY: 'top', // top corner of the overlay to the origin
      });
    } else {
      positions.push({
        originX: 'start', // left corner of the button
        originY: 'center', // bottom corner of the button
        overlayX: 'start', // left corner of the overlay to the origin
        overlayY: 'center', // top corner of the overlay to the origin
      });
    }

    return positions;
  }
}
