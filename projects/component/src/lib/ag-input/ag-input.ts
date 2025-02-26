import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
//
// @angularis/core Library
//
import { Library } from '@angularis/core';
//
// Font Awesome Library Container
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Components
//
import { AgBase } from '../ag-base/ag-base';

@Component({
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  selector: 'ag-input',
  templateUrl: 'ag-input.html',
  styleUrls: ['ag-input.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AgInput),
      multi: true,
    },
  ],
})
export class AgInput extends AgBase implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
  @Input() public type: string = 'text';
  @Input() public placeholder: string = '';
  @Input() public searchIcon: boolean = false;
  @Input() public maxlength: number = 255;
  @Input() public minlength: number = 10;
  @Input() get value(): string {
    return this._value;
  }
  set value(v: string) {
    //
    // Make sure the string is not undefined
    // but rather is a value string value
    //
    if (Library.isString(v)) {
      if (v !== this._value) {
        this._value = v;
        this.onChange(v);
        if (Library.isDefined(this.onValueChange)) {
          this.onValueChange.emit(this._value);
        }
      }
    }
  }
  @Output() public onValueChange: EventEmitter<string> = new EventEmitter();
  //
  // Public Variables
  //
  public writeValue(value: string) {
    if (Library.isString(value)) {
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
  // Private Variables
  //
  private _value: string = '';
  //
  // Constructor
  //
  constructor(element: ElementRef, viewContainerRef: ViewContainerRef, library: FaIconLibrary) {
    super(element, viewContainerRef, library);
    //
    // Observe Mutation
    //
    this.observeMutation('ag-input');
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
  //
  // autoHightlight
  //
  public autoHightlight() {
    const input = this.element.nativeElement.querySelector('input');
    if (input) {
      input.focus();
      input.select();
    }
  }
}
