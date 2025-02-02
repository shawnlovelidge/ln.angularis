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
  ViewContainerRef,
} from '@angular/core';
//
// Library
//
import { Action, Card, Library } from '@angularis/core';
//
// Font Awesome Library Container
//
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Components
//
import { AgCheckBox } from '../ag-checkbox/ag-checkbox';
import { AgButton } from '../ag-button/ag-button';
import { AgBase } from '../ag-base/ag-base';

@Component({
  imports: [CommonModule, AgCheckBox, AgButton],
  selector: 'ag-card',
  templateUrl: 'ag-card.html',
  styleUrls: ['ag-card.scss'],
})
export class AgCard extends AgBase implements OnInit, AfterViewInit, OnDestroy {
  @Input() public model: Card = new Card();
  @Input() public actions: Array<Action> = [];
  //
  // @Output
  //
  @Output() public onAction: EventEmitter<Action> = new EventEmitter();
  //
  // hasFunction(s)
  //
  public hasCards = computed(() => Library.isDefined(this.model));
  //
  // Constructor
  //
  constructor(
    element: ElementRef,
    viewContainerRef: ViewContainerRef,
    library: FaIconLibrary
  ) {
    super(element, viewContainerRef, library);
    //
    // Observe Mutation
    //
    this.observeMutation('ag-card');
  }
  //
  // ngOnInit()
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
        minHeight: '100px',
        minWidth: '100px',
        width: '100%',
      },
      ...this.model.style,
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
  }
  //
  // handleOnClick
  //
  public override handleOnClick(value: boolean) {
    //
    // Setup the model
    //
    this.model.checked = value;
    //
    // Call Base handleOnClick
    //
    super.handleOnClick(this.model);
  }
  //
  // handleOnActionClick
  //
  public handleOnActionClick(action: Action) {
    if (Library.isDefined(this.onAction)) {
      this.onAction.emit(action);
    }
  }
}
