import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';

//
// @angular/cdk
//
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Observable, Subscription } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
//
// @lernender/core
//
import { Icon, Library } from '@angularis/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ln-dropdown',
  templateUrl: './ln-dropdown.html',
  styleUrls: ['ln-dropdown.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LnDropDown,
      multi: true,
    },
  ],
})
export class LnDropDown
  implements
    ControlValueAccessor,
    OnInit,
    AfterViewInit,
    AfterContentInit,
    OnDestroy
{
  @Input() public label: string = '';
  @Input() public small: boolean = false;
  @Input() public textField: string = 'name';
  @Input() public valueField: string = 'id';
  @Input() public placeholder: string = 'Select...';
  @Input() public darkTheme: boolean = false;
  @Input() public hidden = false;
  @Input() public disabled = false;
  @Input()
  get value(): any | any[] {
    return this._value;
  }
  set value(v: any | any[]) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }
  @Input() public items: any[] = [];
  @Output() public onValueChange: EventEmitter<any> = new EventEmitter<any>();
  //
  // ViewChild()
  //
  @ViewChild('portalContainer') portalContainer!: ElementRef;
  @ViewChild('portalView') portalView!: TemplateRef<any>;

  //
  // Public variables
  //
  public open: boolean = false;
  public overlayRef: any;
  public subscriptions: Subscription[] = [];
  public overlaySubscription: Subscription | undefined = undefined;
  public ariaLabel: string = '';
  public ariaLabelledby: string = '';
  public icon!: Icon;
  public displayItem!: any;
  public selectedIndicatorIcon: Icon = new Icon();
  //
  // Private Variables
  //
  private keyManager!: ActiveDescendantKeyManager<any>;
  private options: any[] = [];
  private _value: any = null;
  //
  // constructor()
  //
  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
  ) {
    this.subscriptions = [];
    this.selectedIndicatorIcon = new Icon({
      name: 'check',
    });
    this.displayItem = {};
  }
  //
  // ngOnDestroy()
  //
  ngOnDestroy(): void {
    //
    // Unsubscribe from all subscriptions
    //
    if (Library.isArrayWithLength(this.subscriptions))
      this.subscriptions.forEach((s) => s?.unsubscribe());
    //
    // onCloseContextMenu
    //
    this.detachOverlay();
  }
  //
  // writeValue()
  //
  writeValue(value: any): void {
    if (Library.isDefined(value)) {
      this._value = value;
      this.onChange(this._value);
    }
  }
  public onChange = (_: any) => {};
  public onTouched = () => {};
  public registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngAfterViewInit(): void {}
  //
  // ngAfterContentInit()
  //
  ngAfterContentInit(): void {
    this.keyManager = new ActiveDescendantKeyManager(this.options || [])
      .withHorizontalOrientation('ltr')
      .withVerticalOrientation()
      .withWrap();
  }
  //
  // ngOnInit()
  //
  ngOnInit(): void {
    //
    // Input Controls
    //
    this.icon = new Icon({
      name: 'angle-down',
      onClick: ($event: MouseEvent) => {
        $event.preventDefault();
        //$event.stopPropagation();
        this.toggle();
      },
    });
  }

  //
  // ngOnChanges()
  //
  public ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      if (changes['items'].currentValue) {
        this.displayItem = { id: 0, name: this.placeholder };

        if (Library.isArray(changes['items'].currentValue)) {
          this.items = changes['items'].currentValue;

          if (this.items.length > 0) {
            this.displayItem = this.items[0];
            if (Library.isDefined(this.value)) {
              const index = this.items.findIndex((i) => i.id === this.value);
              if (index > -1) {
                this.displayItem = this.items[index];
              }
            }
          }
        }
      }
    }
  }
  //
  // onOpen
  //
  public onOpen = (event: MouseEvent) => {
    //
    // Detach Overlay
    //
    this.detachOverlay();
    //
    // Create Overlay Config
    //
    const config = new OverlayConfig({
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.portalContainer)
        .setOrigin(this.portalContainer)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          },
        ]),
      width: `${this.portalContainer.nativeElement.getBoundingClientRect().width}px`,
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    //
    // Define Overlay
    //
    this.overlayRef = this.overlay.create(config);
    this.overlaySubscription = this.overlayRef
      .backdropClick()
      .subscribe(() => this.detachOverlay());
    //
    // Attach overlay to CdkPOrtal
    //
    /*
      {
        $implicit:  {},
      }
    */
    this.overlayRef.attach(
      new TemplatePortal(this.portalView, this.viewContainerRef),
    );
  };
  //
  // onClose()
  //
  public onClose(item: any = undefined) {
    if (item) {
      this.displayItem = item;
      this.value = item[this.valueField];
      //
      // Toggle open/close
      //
      if (Library.isDefined(this.onValueChange)) {
        this.onValueChange.emit(item);
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
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }

    if (this.overlaySubscription) {
      this.overlaySubscription.unsubscribe();
      this.overlaySubscription = undefined;
    }
  }
  //
  // toggle()
  //
  public toggle() {
    this.open = !this.open;
    this.icon.name = this.open ? 'angle-up' : 'angle-down';
  }

  //
  // close
  //
  public close() {
    this.open = false;
    this.icon.name = this.open ? 'angle-up' : 'angle-down';
  }
  //
  // onKeyDown
  //
  public onKeyDown(event: KeyboardEvent): void {
    if (this.open) {
      this.onKeyboardDropDown(event);
    } else {
      this.onKeyboardHiddenDropDown(event);
    }
  }

  //
  // onKeyboardDropDown()
  //
  private onKeyboardDropDown(event: KeyboardEvent): void {
    switch (event.key) {
      // Enter and space cause the currently-highlighted
      // item to become the active item
      case 'Enter':
      case ' ':
        if (this.keyManager.activeItem) {
          //this.selectOption(this.keyManager.activeItem);
        }
        break;
      case 'Escape':
        this.onClose();
        break;
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowRight':
      case 'ArrowLeft':
        this.keyManager.onKeydown(event);
        this.keyManager.activeItem?.scrollIntoView();
        // This prevents the arrow keys from scrolling the
        // page while the drop-down is focused
        event.preventDefault();
        break;
      case 'Tab':
        this.keyManager.onKeydown(event);
        this.keyManager.activeItem?.scrollIntoView();
        break;
      case 'PageUp':
      case 'PageDown':
        // For page up/down we are just eating the default
        // event to prevent the user from being in the select
        // menu but jump around the page
        event.preventDefault();
        break;
      default:
        // For all keys besides the ones enumerated
        // above we'll use a search function to
        // select the item that begins with the letters
        // that the user is entering
        event.stopPropagation();
      // const firstFound = this.getOptionStartingWith(event.key);
      // if (firstFound) {
      //     firstFound.scrollIntoView();
      //     this.keyManager.setActiveItem(firstFound);
      // }
    }
  }
  //
  // onKeyboardHiddenDropDown()
  //
  private onKeyboardHiddenDropDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
      case 'ArrowDown':
      case 'ArrowUp':
        // this.showDropdown();
        // if (this.selectedOption) {
        //     this.selectedOption.scrollIntoView();
        // }
        break;
      default:
        event.stopPropagation();
      // const firstFound = this.getOptionStartingWith(event.key);
      // if (firstFound) {
      //     this.selectOption(firstFound);
      // }
    }
  }
}
