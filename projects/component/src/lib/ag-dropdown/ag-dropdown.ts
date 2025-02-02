import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
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
import { Library, Item } from '@angularis/core';
//
// Components
//
import { AgMenuOption } from '../ag-menu-option/ag-menu-option';
import { AgBase } from '../ag-base/ag-base';
//
// Components
//
@Component({
  imports: [CommonModule, FontAwesomeModule, AgMenuOption],
  selector: 'ag-dropdown',
  templateUrl: 'ag-dropdown.html',
  styleUrls: ['ag-dropdown.scss'],
})
export class AgDropDown
  extends AgBase
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() public model: Array<Item> = [];
  //
  // Public Variables
  //
  public value = signal<Item>(new Item());
  public subscriptions: Subscription[] = [];
  public open = signal(false);
  public overlayRef: any;
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
    this.observeMutation('ag-dropdown');
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
  // onOpen
  //
  public onOpen = (event: MouseEvent) => {
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
  public onClose(menu: any = undefined) {
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

    positions.push({
      originX: 'start', // left corner of the button
      originY: 'bottom', // bottom corner of the button
      overlayX: 'start', // left corner of the overlay to the origin
      overlayY: 'top', // top corner of the overlay to the origin
    });

    return positions;
  }
}
