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
  input,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';

//
// @angular/cdk
//
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
//
// @lernender/core
//
import { Icon, Library } from '@angularis/core';

import { AgIcon } from '../ag-icon/ag-icon';

@Component({
  imports: [CommonModule, AgIcon],
  selector: 'ag-dropdown',
  templateUrl: 'ag-dropdown.html',
  styleUrls: ['ag-dropdown.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AgDropDown,
      multi: true,
    },
  ],
})
export class AgDropDown
  implements
    ControlValueAccessor,
    OnInit,
    AfterViewInit,
    AfterContentInit,
    OnDestroy
{
  public readonly label = input<string>('');
  public readonly small = input<boolean>(false);
  public readonly textField = input<string>('name');
  public readonly valueField = input<string>('id');
  public readonly placeholder = input<string>('Select...');
  public readonly darkTheme = input<boolean>(false);
  public readonly hidden = input(false);
  public readonly disabled = input(false);
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
  public items = input<any[]>([]);
  @Output() public onValueChange: EventEmitter<any> = new EventEmitter<any>();
  //
  // ViewChild()
  //
  @ViewChild('portalContainer') portalContainer!: ElementRef;
  @ViewChild('portalView') portalView!: TemplateRef<any>;

  //
  // Public variables
  //
  public open: any = signal<boolean>(false);
  public overlayRef: any;
  public subscriptions: any[] = [];
  public overlaySubscription: Subscription | undefined = undefined;
  public ariaLabel: string = '';
  public ariaLabelledBy: string = '';
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
    private viewContainerRef: ViewContainerRef
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
      this.subscriptions.forEach(s => s?.unsubscribe());
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

  //
  // ngAfterViewInit
  //
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
        this.displayItem = { id: 0, name: this.placeholder() };

        if (Library.isArray(changes['items'].currentValue)) {
          this.items = changes['items'].currentValue;

          if (this.items().length > 0) {
            this.displayItem = this.items()[0];
            if (Library.isDefined(this.value)) {
              const index = this.items().findIndex(i => i.id === this.value);
              if (index > -1) {
                this.displayItem = this.items()[index];
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
      new TemplatePortal(this.portalView, this.viewContainerRef)
    );
  };
  //
  // onClose()
  //
  public onClose(item: any = undefined) {
    if (item) {
      this.displayItem = item;
      this.value = item[this.valueField()];
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
      case 'Enter':
      case ' ':
        if (this.keyManager.activeItem) {
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
        event.preventDefault();
        break;
      case 'Tab':
        this.keyManager.onKeydown(event);
        this.keyManager.activeItem?.scrollIntoView();
        break;
      case 'PageUp':
      case 'PageDown':
        event.preventDefault();
        break;
      default:
        event.stopPropagation();
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
        break;
      default:
        event.stopPropagation();
    }
  }
}
