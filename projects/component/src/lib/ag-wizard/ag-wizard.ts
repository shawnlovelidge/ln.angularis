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
} from '@angular/core';
//
// Anglaris. Core library.
//
import { Library, Guid } from '@angularis/core';
//
// Components
//
import { AgWizardStep } from '../ag-wizard-step/ag-wizard-step';
//
// Models
//
import { Step } from '@angularis/model';

@Component({
  selector: 'ag-wizard',
  imports: [CommonModule, AgWizardStep],
  templateUrl: 'ag-wizard.html',
  styleUrls: ['ag-wizard.scss'],
})
export class AgWizard implements OnInit, OnDestroy, AfterViewInit {
  public steps = input.required<Step<any>[]>();
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public active: boolean = false;
  @Input() public style: Partial<CSSStyleDeclaration> = {};
  //
  // Events.
  //
  @Output() onStep = new EventEmitter<Step<any>>();
  //
  // Public Properties
  //
  public uid: string = Guid.create().toString();
  public index: number = 0;
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
      ...this.style
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
      this.onStep.emit(this.steps()[this.index]);
    }
  }
  //
  // Previous step.
  //
  public previousStep() {
    if (this.index > 0) {
      this.index--;
      this.onStep.emit(this.steps()[this.index]);
    }
  }
  //
  // Go to step.
  //
  public goToStep(index: number) {
    if (index >= 0 && index < this.steps().length) {
      this.index = index;
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
}
