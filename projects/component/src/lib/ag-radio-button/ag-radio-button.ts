import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  EventEmitter,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  signal,
  Input,
  computed,
  ViewContainerRef,
} from '@angular/core';
//
// Angular Forms
//
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
//
// @angularis/core Library
//
import { Action, Library } from '@angularis/core';
//
// Font Awesome Library Container
//
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Components
//
import { AgBase } from '../ag-base/ag-base';
import { AgButton } from '../ag-button/ag-button';

@Component({
  imports: [CommonModule, ReactiveFormsModule, AgButton],
  selector: 'ag-radio-button',
  templateUrl: 'ag-radio-button.html',
  styleUrls: ['ag-radio-button.scss'],
})
export class AgRadioButton
  extends AgBase
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() public model = signal(new Array<Action>());
  //
  // Private Variables
  //
  public formGroup: FormGroup = new FormGroup({});
  public formControl: FormControl = new FormControl();
  //
  // Private Variables
  //

  //
  // isFunction(s)
  //
  public isSquareRadioButton = computed(() => {
    if (Library.isStringWithLength(this.classes()))
      return this.classes().includes('ag-radio-button-square');

    return false;
  });

  //
  // Constructor
  //
  constructor(
    element: ElementRef,
    viewContainerRef: ViewContainerRef,
    library: FaIconLibrary,
    private fb: FormBuilder
  ) {
    super(element, viewContainerRef, library);
    //
    // Observe Mutation
    //
    this.observeMutation('ag-radio-button');
    //
    // Create the formGroup
    //
    this.formGroup = this.fb.group({
      formControl: this.formControl,
    });
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
    // Set the formControl
    //
    if (!this.isSquareRadioButton()) {
      if (Library.isArrayWithLength(this.model())) {
        const index = this.model().findIndex((item: Action) => item.active);
        if (index > -1) {
          //
          // Set the formControl
          //
          this.formControl.setValue(this.model()[index].name);
        }
      }
    }
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
  // handleOnClick()
  //
  public override handleOnClick(item: Action) {
    //
    // Set the correct active item
    //
    if (Library.isDefined(item)) {
      let list = this.model().map((i: Action) => {
        i.active = i.id === item.id;
        return i;
      });

      this.model.set(list);
    }
    //
    // Emit the onClick Event
    //
    super.handleOnClick(
      this.model().find((i: Action) => i.active)
    );
  }
  //
  // classAttr
  //
  public classAttr(id: number, length: number, item: Action) {
    let name = `radio-button`;
    let attr = id === 0 ? 'left' : id === length - 1 ? 'right' : '';

    return `${name} ${attr} ${item.active ? 'active' : ''}`;
  }
}
