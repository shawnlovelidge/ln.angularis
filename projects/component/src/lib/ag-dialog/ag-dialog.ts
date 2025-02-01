import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
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
import { Action, Card as Model, Library } from '@angularis/core';
//
// Components
//
import { AgBase } from '../ag-base/ag-base';
import { AgButton } from '../ag-button/ag-button';
//
// Components
//
@Component({
  imports: [CommonModule, FontAwesomeModule, AgButton],
  selector: 'ag-dialog',
  templateUrl: 'ag-dialog.html',
  styleUrls: ['ag-dialog.scss'],
})
export class AgDialog
  extends AgBase
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() public model: Model = new Model();
  @Input() public actions: Array<Action> = [];
  //
  // @Output
  //
  @Output() public onClose: EventEmitter<Action> = new EventEmitter();
  @Output() public onAction: EventEmitter<Action> =
    new EventEmitter();
  //
  // Public Variables
  //
  public subscriptions: Subscription[] = [];
  public open = signal(false);
  public overlayRef: any;
  //
  // Private Variables
  //

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
    private overlayOutsideClickDispatcher: OverlayOutsideClickDispatcher,
  ) {
    super(element, viewContainerRef, library);
    //
    // Observe Mutation
    //
    this.observeMutation('ag-dialog');
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
        minWidth: '250px',
        maxWidth: '400px',
        width: 'auto',
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
  // onOpenDialog
  //
  public onOpenDialog = () => {
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
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    //
    // Define Overlay
    //
    this.overlayRef = this.overlay.create(config);
    this.subscriptions.push(
      this.overlayRef
        .backdropClick()
        .subscribe(() => this.detachOverlay())
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
  // onCloseDialog()
  //
  public onCloseDialog() {
    //
    // Toggle open/close
    //
    if (Library.isDefined(this.onClose)) {
      this.onClose.emit();
    }
    //
    // onCloseContextMenu
    //
    this.detachOverlay();
  }
  //
  // handleOnActionClick
  //
  public handleOnActionClick(action: Action) {
    if (Library.isDefined(this.onAction)) {
      this.onAction.emit(action);
    }
  }
  //
  // detachOverlay()
  //
  private detachOverlay() {
    if (this.subscriptions)
      this.subscriptions.forEach(s => s.unsubscribe());
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
      originY: 'center', // bottom corner of the button
      overlayX: 'start', // left corner of the overlay to the origin
      overlayY: 'center', // top corner of the overlay to the origin
    });

    return positions;
  }
}
