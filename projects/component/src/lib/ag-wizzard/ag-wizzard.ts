import { CommonModule } from '@angular/common';
import {
  Component,
  Output,
  EventEmitter,
  input,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Input,
  signal,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
//
// Anglaris. Core library.
//
import { Library, Guid } from '@angularis/core';
//
// Components
//
import { AgButton } from '../ag-button/ag-button';
import { AgWizzardStep } from '../ag-wizzard-step/ag-wizzard-step';
//
// Models
//
import { Step } from '@angularis/model';

//
// Types
//
type HashIndex<T> = {
  [key: number]: T;
};

@Component({
  selector: 'ag-wizzard',
  imports: [CommonModule, AgWizzardStep, AgButton],
  templateUrl: 'ag-wizzard.html',
  styleUrls: ['ag-wizzard.scss'],
})
export class AgWizzard implements OnInit, OnDestroy, AfterViewInit {
  @Input() public steps = signal<Step<any>[]>([]);
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public active: boolean = false;
  @Input() public style: Partial<CSSStyleDeclaration> = {};
  //
  // Events.
  //
  @Output() onStep = new EventEmitter<Step<any>>();
  //
  // View child
  //

  //
  // Public Properties
  //
  public uid: string = Guid.create().toString();
  public index: number = 0;
  public hashIndex: HashIndex<number> = {};
  //
  // Is/Has Functions
  //
  public isDisabled = () => this.disabled;
  public isHidden = () => this.hidden;
  public isActive = () => this.active;
  public hasStyle = () => Library.isObject(this.style);
  //
  // Constructor.
  //
  public constructor() {}
  //
  // On init
  //
  public ngOnInit() {

    for (let i = 0; i < this.steps().length; i++) {
      this.hashIndex[this.steps()[i].id] = i;
    }
    //
    // Getting the active index
    //
    this.index = 0;
    //
    // Set the active step.
    //
    this.setActiveStep(this.index);
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
      ...this.style,
    };
  }
  //
  // After view init
  //
  public ngAfterViewInit() {}
  //
  // Next step
  //
  public nextStep() {
    if (this.index < this.steps().length - 1) {
      this.index++;
      //
      // Set the active step.
      //
      this.setActiveStep(this.index);
      //
      // Emit the current step.
      //
      this.onStep.emit(this.steps()[this.index]);
    }
  }
  //
  // Previous step.
  //
  public previousStep() {
    if (this.index > 0) {
      this.index--;
      //
      // Set the active step.
      //
      this.setActiveStep(this.index);
      //
      // Emit the current step.
      //
      this.onStep.emit(this.steps()[this.index]);
    }
  }
  //
  // Go to step.
  //
  public goToStep(index: number) {
    if (index >= 0 && index < this.steps().length) {
      this.index = index;
      //
      // Set the active step.
      //
      this.setActiveStep(this.index);
      //
      // Emit the current step.
      //
      this.onStep.emit(this.steps()[this.index]);
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
  // On destroy
  //
  public ngOnDestroy() {}

  //
  // setActiveStep
  //
  private setActiveStep(index: number) {
    if (index < 0 || index >= this.steps().length) return;

    const steps = this.steps();

    for (let i = 0; i < steps.length; i++) {
      steps[i].active = i === index;
      steps[i].hidden = !steps[i].active;

      console.log(
        `%c index: ${index}\tsteps[i].id: ${steps[i].id}\tsteps[i].active: ${steps[i].active}\r`,
        'color: magenta; font-size: 12px; font-weight: bold'
      );
    }

    this.steps.set([...steps]);
  }
}
