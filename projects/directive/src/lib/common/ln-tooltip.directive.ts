import {
  ComponentFactoryResolver,
  Directive,
  Input,
  Type,
  ViewContainerRef,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[ln-tooltip]',
  host: {
    '(window:resize)': 'onResize($event)',
    '(mouseenter)': 'onMouseEnter($event)',
    '(mouseleave)': 'onMouseLeave($event)',
  },
})
export class LnToolTipDirective implements OnDestroy {
  @Input('ln-tooltip') component: Type<any> | undefined;
  @Input('data') data: any;

  private _componentRef: any;

  //
  // onResize()
  //
  public onResize($event: MouseEvent) {
    if ($event) {
    }
  }

  //
  // onMouseEnter()
  //
  public onMouseEnter($event: MouseEvent) {
    if ($event) {
    }

    //
    // If the component reference is defined then leave funciton
    //
    if (this._componentRef) {
      return;
    }

    const factory = this.resolver.resolveComponentFactory(
      this.component as Type<any>
    );
    //
    // Create a reference to the component dynamically
    //
    this._componentRef = this.vcr.createComponent(factory);
  }
  //
  // onMouseLeave()
  //
  public onMouseLeave($event: MouseEvent) {
    if ($event) {
    }
    this._destroy();
  }
  //
  // ngOnDestroy()
  //
  public ngOnDestroy() {
    this._destroy();
  }
  //
  // _destroy()
  //
  private _destroy() {
    if (this._componentRef) {
      this._componentRef.destroy();
    }
    this._componentRef = undefined;
  }

  constructor(
    private resolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) {}
}
