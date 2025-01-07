import {
  Directive,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  
  selector: '[lnComponentHost]',
})
export class LnComponentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
