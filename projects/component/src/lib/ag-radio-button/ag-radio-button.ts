import { CommonModule } from '@angular/common';
import {
  Component,
  Output,
  OnInit,
  EventEmitter,
  ElementRef,
  input,
  AfterViewInit,
  OnDestroy,
  signal,
  Input,
  computed,
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
// Utility Functions
//
import { parseHTMLElementClassList } from '../util/functions';
//
// Components
//
import { AgButton } from '../ag-button/ag-button';

@Component({
  imports: [CommonModule, ReactiveFormsModule, AgButton],
  selector: 'ag-radio-button',
  templateUrl: 'ag-radio-button.html',
  styleUrls: ['ag-radio-button.scss'],
})
export class AgRadioButton {
  @Input() public label: string = '';
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public readonly: boolean = false;
  //
  // Signals
  //
  @Input() public model = signal(new Array<Action>());

  //
  // @Output() onClick
  //
  @Output() public onClick: EventEmitter<Action> = new EventEmitter();
  //
  // setup a singnal for the classes
  //
  public classes = signal<string>('');
  public isSquareRadioButton = computed(() => {
    if (Library.isStringWithLength(this.classes()))
      return this.classes().includes('ag-radio-button-square');

    return false;
  });
  public formGroup: FormGroup = new FormGroup({});
  public formControl: FormControl = new FormControl();
  //
  // Private Variables
  //
  private observer!: MutationObserver;
  //
  // Constructor
  //
  constructor(
    private element: ElementRef,
    private fb: FormBuilder
  ) {
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
  public ngOnInit() {
    //
    // Set the classes
    //
    this.classes.set(
      parseHTMLElementClassList(
        this.element.nativeElement,
        'ag-radio-button'
      )
    );
    //
    // Set the formControl
    //
    if (!this.isSquareRadioButton()) {
      if (Library.isArrayWithLength(this.model())) {
        const index = this.model().findIndex(
          (item: Action) => item.active
        );
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
  }
  //
  // handleOnClick()
  //
  public handleOnClick($event: MouseEvent | Event, item: Action) {
    $event.preventDefault();
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
    if (Library.isDefined(this.onClick)) {
      this.onClick.emit(this.model().find((i: Action) => i.active));
    }
  }
  //
  // ngOnDestroy
  //
  public ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
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
