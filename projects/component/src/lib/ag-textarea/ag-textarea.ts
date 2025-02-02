import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
} from '@angular/forms';
//
// Library
//
import { Library, Guid } from '@angularis/core';

//
// 
//
@Component({
  imports: [CommonModule, FormsModule],
  selector: 'ag-textarea',
  templateUrl: 'ag-textarea.html',
  styleUrls: ['ag-textarea.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AgTextArea),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AgTextArea),
      multi: true,
    },
  ],
})
export class AgTextArea implements ControlValueAccessor, Validator {
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public cols: number = 10;
  @Input() public rows: number = 1;
  @Input() public maxlength: number = 255;
  @Input() public minlength: number = 10;
  @Input() public style: Partial<CSSStyleDeclaration> = {};
  @Input() public stats: boolean = true;
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;

  @Input() get value(): string {
    return this._value;
  }
  set value(val: string) {
    this._value = val;
    this.onChange(this._value);
    this.onValueChange.emit(this._value);
  }
  @Output() public onValueChange: EventEmitter<string> =
    new EventEmitter();
  //
  // Public Variables
  //
  public uid: string;
  private _value: string;
  //
  // Propagate Change
  //
  private propagateChange = (_: any) => {};
  //
  // Constructor
  //
  constructor() {
    this._value = '';
    this.uid = Guid.create().toString();
  }
  //
  // Has Functions
  //
  public hasLabel = () => Library.isStringWithLength(this.label);
  //
  // ControlValueAccessor
  //
  public registerOnTouched() {}
  public writeValue(value: string): void {
    this._value = value;
    this.onChange(this._value);
  }
  public validate() {
    return {
      jsonParseError: {
        valid: false,
      },
    };
  }
  //
  // registerOnChange
  //
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  //
  // onChange
  //
  public onChange(value: string) {
    this.propagateChange(value);
  }
}
