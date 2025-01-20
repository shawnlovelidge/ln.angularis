import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
//
// @angularis/core
//
import { Library } from '@angularis/core';
//
// @angularis/component
//
import { AgIcon } from '../ag-icon/ag-icon';

@Component({
  selector: 'ag-checkbox',
  imports: [CommonModule, AgIcon],
  templateUrl: 'ag-checkbox.html',
  styleUrls: ['ag-checkbox.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AgCheckBox),
      multi: true,
    },
  ],
})
export class AgCheckBox implements ControlValueAccessor {
  @Input()
  get value(): boolean {
    return this._value();
  }
  set value(v: boolean) {
    this.setIconType();
    // if (v !== this._value) {
    this._value.set(v);
    this.onChange(v);
    //}
  }

  //
  // Public properties
  //
  public readonly label = input.required<string>();
  public readonly indeterminate = input.required<boolean>();
  public readonly disabled = input.required<boolean>();
  public readonly hidden = input.required<boolean>();
  public readonly visibility = input.required<boolean>();
  public readonly style = input.required<object>();
  //
  // Output Variables
  //
  @Output() public onClick: EventEmitter<boolean> = new EventEmitter();
  //
  // Signals
  //
  public type = signal('');
  public name = signal('');
  public iconStyle = signal({});
  //
  // _value
  //
  private _value = signal(false);
  //
  // constructor()
  //
  constructor() {
    this.value = false;
  }

  //
  // ngOnInit()
  //
  ngOnInit() {
    this.setIconType();
  }

  //
  // writeValue()
  //
  public writeValue(value: boolean) {
    this._value.set(value);
    this.onChange(this._value);
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
  // handleClick()
  //
  public handleClick($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.value = !this.value;
    if (Library.isDefined(this.onClick)) {
      this.onClick.emit(this.value);
    }
  }

  /**
   * isEmpty()
   * Determines if the value property is deemed as empty.
   */
  public isEmpty(): boolean {
    return !this.value;
  }
  /**
   * empty()
   * Set the value property to an empty state.
   */
  public empty(): void {
    this.writeValue(false);
  }

  //
  // setIconType()
  //
  private setIconType() {
    if (this._value()) {
      this.type.set('square-check'); //('fa-solid');
    } else {
      this.type.set('fa-regular');
      this.name.set('square');
    }
  }
}
