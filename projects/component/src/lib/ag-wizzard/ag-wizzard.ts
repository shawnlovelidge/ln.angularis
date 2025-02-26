import { CommonModule } from '@angular/common';
import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Input,
  ViewContainerRef,
  ElementRef,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
//
// Anglaris. Core library.
//
import { Library } from '@angularis/core';
//
// Components
//
import { AgButton } from '../ag-button/ag-button';
import { AgWizzardStep } from '../ag-wizzard-step/ag-wizzard-step';
//
// Models
//
import { Step } from '@angularis/model';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { AgBase } from '../ag-base/ag-base';

//
// Types
//
type HashIndex<T> = {
  [key: number]: T;
};

@Component({
  selector: 'ag-wizzard',
  imports: [CommonModule, FormsModule, AgWizzardStep, AgButton],
  templateUrl: 'ag-wizzard.html',
  styleUrls: ['ag-wizzard.scss'],
})
export class AgWizzard extends AgBase implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  //
  // Events.
  //
  @Output() onStep = new EventEmitter<Step<any>>();
  //
  // Public Variables
  //
  public hasChildren = () => this.contentChildren && this.contentChildren.length > 0;
  public length = () => (this.contentChildren ? this.contentChildren.length : 0);
  public index = -1;
  //
  // Private Variables
  //
  @ContentChildren(AgWizzardStep, { descendants: false })
  private contentChildren!: QueryList<AgWizzardStep>;
  //
  // Constructor
  //
  constructor(element: ElementRef, viewContainerRef: ViewContainerRef, library: FaIconLibrary) {
    super(element, viewContainerRef, library);
  }
  //
  // ngOnInit()
  //
  public override ngOnInit() {
    //
    // Set the default style
    //
    this.style = {
      ...{
        height: '340px',
        width: '100%',
      },
      ...this.style,
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
  // ngAfterContentInit()
  //
  public ngAfterContentInit(): void {
    if (this.hasChildren()) {
      //
      // Build a Hash Map of step.id to index.
      //
      this.contentChildren.forEach((component: AgWizzardStep, index: number) => {
        //
        // set the index and maxIndex
        //
        component.index = index;
        component.maxIndex = this.contentChildren.length;
        //
        // Capture the active step.
        //
        if (this.index < 0 && component.model.active) {
          this.index = index;
        }
      });
    }
    //
    // Set the active step.
    //
    if (this.index < 0) {
      this.index = 0;
    }
    //
    // Set the active step.
    //
    this.setActiveStep();
  }
  //
  // next
  //
  public next() {
    //
    // If we are not at the end of the steps.
    //
    if (this.index < this.length() - 1) {
      this.index++;
      //
      // Set the active step.
      //
      this.setActiveStep();
    }
  }
  //
  // Previous step.
  //
  public previous() {
    //
    // If we are not at the beginning of the steps.
    //
    if (this.index > 0) {
      this.index--;
      //
      // Set the active step.
      //
      this.setActiveStep();
    }
  }
  //
  // Go to step.
  //
  public goToStep(index: number) {
    if (index >= 0 && index < this.length()) {
      this.index = index;
      //
      // Set the active step.
      //
      this.setActiveStep();
    }
  }

  //
  // handleOnStep
  //
  public handleOnStep(item?: Step<any>) {
    if (Library.isDefined(this.onStep)) {
      if (Library.isDefined(item)) this.onStep.emit(item);
    }
  }
  //
  // setActiveStep
  //
  private setActiveStep(): void {
    //
    // if we have children step components
    //
    if (this.hasChildren()) {
      //
      // Validate the index.
      //
      if (this.index < 0 || this.index >= this.length()) return;
      //
      // Build a Hash Map of step.id to index.
      //
      this.contentChildren.forEach((component: AgWizzardStep, idx: number) => {
        //
        // Set the active step.
        //
        component.model.active = idx === this.index;
        component.model.hidden = !component.model.active;
        //
        //  Set Class Names
        //
        component.setClass(this.ngGetClass(component.index));
      });
    }
  }

  //
  // ngGetClass
  //
  private ngGetClass(index: number): string {
    if (index < this.index) {
      return 'ag-wizzard-body-prev';
    }
    if (index > this.index) {
      return 'ag-wizzard-body-next';
    }
    if (index === this.index) {
      return 'ag-wizzard-body-current';
    }

    return '';
  }
}
