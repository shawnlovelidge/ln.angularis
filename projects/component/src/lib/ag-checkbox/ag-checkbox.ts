import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  signal,
  effect,
  linkedSignal,
  ElementRef,
  ViewContainerRef,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
//
// Font Awesome Library Container
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
//
// Components
//
import { AgBase } from '../ag-base/ag-base';

@Component({
  imports: [CommonModule, FontAwesomeModule],
  selector: 'ag-checkbox',
  templateUrl: 'ag-checkbox.html',
  styleUrls: ['ag-checkbox.scss'],
})
export class AgCheckBox
  extends AgBase
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() public value: boolean = false;
  //
  // Public Variables
  //
  public readonly name = signal('');
  public readonly size = signal(24);
  public readonly color = signal('');
  //
  // Font Awesome Icons
  //
  public faCheckSquare = faCheckSquare;
  public faSquare = faSquare;
  //
  // Computed Variables
  //
  public readonly labelStyle = linkedSignal(() => ({
    color: `${this.color()}`,
    fontSize: `calc(${this.size()}px - 6px)`,
  }));
  public readonly computedStyle = linkedSignal(() => ({
    color: `${this.color()}`,
    fontSize: `${this.size()}px`,
  }));
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
    // Add Icons
    //
    library.addIcons(faCheckSquare, faSquare);
    //
    // Observe Mutation
    //
    this.observeMutation('ag-checkbox');
    //
    // Listen for changes
    //
    effect(() => {
      this.name.set(this.value ? 'square-check' : 'square');
    });
  }
  //
  // ngOnInit()
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
  // handleOnClick()
  //
  public override handleOnClick($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    //
    // Toggle the value
    //
    this.value = !this.value;
    //
    // Call Base handleOnClick
    //
    super.handleOnClick($event, this.value);
  }
}
