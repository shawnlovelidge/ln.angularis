import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  
  selector: '[lnAnchor]',
})
export class LnAnchorDirective {
  //
  // view()
  //
  public get view(): ViewContainerRef {
    return this._view;
  }
  constructor(public _view: ViewContainerRef) {}
}
