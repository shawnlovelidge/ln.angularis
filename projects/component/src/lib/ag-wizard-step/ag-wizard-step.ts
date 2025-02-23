import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  ViewContainerRef,
  OnInit,
  AfterViewInit,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ComponentRef,
  Injector,
} from '@angular/core';
//
// Anglaris. Core library.
//
import { Guid } from '@angularis/core';
//
// Models
//
import { Step } from '@angularis/model';

@Component({
  selector: 'ag-wizard-step',
  imports: [CommonModule],
  templateUrl: 'ag-wizard-step.html',
  styleUrls: ['ag-wizard-step.scss'],
})
export class AgWizardStep implements OnInit, OnDestroy, AfterViewInit {
  public step = input.required<Step<any>>();
  //
  // View child
  //
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  @ViewChild('dynamicTemplate', { static: true })
  template!: TemplateRef<any>;
  //
  // Public Properties
  //
  public uid: string = Guid.create().toString();
  public style: Partial<CSSStyleDeclaration> = {};
  //
  // Is/Has Functions
  //
  public isDisabled = () => this.step().isDisabled();
  public isHidden = () => this.step().isHidden();
  public isActive = () => this.step().isActive();
  public hasTitle = () => this.step().hasTitle();
  public hasStyle = () => this.step().hasStyle();
  public hasTemplate = () => this.step().hasTemplate();
  public hasComponent = () => this.step().hasComponent();
  //
  // Private Properties
  //
  private componentRef?: ComponentRef<any>;
  //
  // Constructor.
  //
  public constructor(private injector: Injector) {}
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
      ...this.step().style,
    };
  }
  //
  // After view init
  //
  public ngAfterViewInit() {
    //
    // Template
    //
    if (this.hasTemplate()) {
      this.container.clear();
      this.container.createEmbeddedView(this.template, { model: this.step().model });
    }
    //
    // Create component
    //
    else if (this.hasComponent()) {
      this.createComponent();
    }
  }
  //
  // On destroy
  //
  public ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = undefined;
    }

    this.clearContainer();
  }
  //
  // Clear template
  //
  public clearContainer() {
    if (this.container) this.container.clear();
  }
  //
  // Create component
  //
  private createComponent() {
    if (this.container && this.hasComponent()) {
      //
      // Clear previous instances
      //
      this.container.clear();
      //
      // Create component dynamically
      //
      this.componentRef = this.container.createComponent(
        this.step().component,
        {
          injector: this.injector,
        }
      );
      //
      // Set the model
      //
      if (this.step().hasModel()) {
        this.componentRef.instance.model = this.step().model;
      }
    }
  }
}
