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
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
//
// Library
//
import { Action, Card as Model, Library } from '@angularis/core';
//
// Components
//
import { AgButton } from '../ag-button/ag-button';

//
// Utility Functions
//
import { parseHTMLElementClassList } from '../util/functions';
//
// Components
//
@Component({
  imports: [CommonModule, FontAwesomeModule, AgButton],
  selector: 'ag-dialog',
  templateUrl: 'ag-dialog.html',
  styleUrls: ['ag-dialog.scss'],
})
export class AgDialog implements OnInit, AfterViewInit, OnDestroy {
  @Input() public label: string = '';
  @Input() public model: Model = new Model();
  @Input() public actions: Array<Action> = [];
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public style: Partial<CSSStyleDeclaration> = {};
  @Input() public customTemplate!: TemplateRef<any>;
  //
  // Public Variables
  //
  public classes = signal<string>('');
  public subscriptions: Subscription[] = [];
  public open = signal(false);
  public overlayRef: any;
  //
  // @Output
  //
  @Output() public onClose: EventEmitter<Action> = new EventEmitter();
  @Output() public onAction: EventEmitter<Action> =
    new EventEmitter();
  //
  // ViewChild()
  //
  @ViewChild('portalContainer') portalContainer!: ElementRef;
  @ViewChild('portalView') portalView!: TemplateRef<any>;
  //
  // hasFunction(s)
  //
  public hasCustomTemplate = () =>
    Library.isDefined(this.customTemplate);
  //
  // Private Variables
  //
  private observer!: MutationObserver;
  //
  // Constructor
  //
  constructor(
    private element: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay,
    private overlayOutsideClickDispatcher: OverlayOutsideClickDispatcher,
    private library: FaIconLibrary
  ) {
    //
    // FaIconLibrary
    //
    this.library.addIcons(faXmark, faXmarkCircle);
    //
    // Set the classes
    //
    this.classes.set(
      parseHTMLElementClassList(
        this.element.nativeElement,
        'ag-dialog'
      )
    );
  }
  //
  // ngOnInit()
  //
  public ngOnInit() {
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
  public ngAfterViewInit() {
    //
    // mutationCallback
    //
    //  @param mutationsList
    //  @param observer
    //  @param cb()
    //
    //  Definition: This function is used to handle the mutation of the
    //  classList on a target element
    //
    const mutationCallback = (mutationsList: any, observer: any) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          if (mutation.target) {
            if (mutation.target.classList) {
              let classNames: string[] = [];
              mutation.target.classList.forEach(
                (className: string) => {
                  classNames.push(className);
                }
              );

              if (Library.isArrayWithLength(classNames)) {
                //
                // Set the classes
                //
                this.classes.set(classNames.join(' '));
              }
            }
          }
        }
      }
    };
    //
    // Setup Listener for when the classList changes
    //
    this.observer = new MutationObserver(mutationCallback);
    //
    // Get it the target element
    //
    this.observer.observe(this.element.nativeElement, {
      attributes: true,
    });
    //
    // Template
    //
    if (this.hasCustomTemplate()) {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.customTemplate);
    }
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
    /*
      {
        $implicit:  {},
      }
      */
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
  // handleOnClick
  //
  public handleOnClick(event: Event, action: Action) {
    event.preventDefault();

    if (Library.isDefined(this.onClose)) {
      this.onClose.emit(action);
    }
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
  // ngOnDestroy
  //
  public ngOnDestroy() {
    //
    // onCloseContextMenu
    //
    this.detachOverlay();
    //
    // Remove Class Listener
    //
    if (this.observer) this.observer.disconnect();
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
