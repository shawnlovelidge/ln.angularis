import {
  Directive,
  OnDestroy,
  Input,
  Output,
  AfterViewInit,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[lnReady]',
})
export class LnReadyDirective implements AfterViewInit, OnDestroy {
  @Input('lnReadyCondition') set condition(value: boolean) {
    if (value) {
      if (this.onReady) {
        this.onReady.emit(value);
      }
    }
  }
  @Output() public onReady: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  public ngAfterViewInit(): void {}

  public ngOnDestroy(): void {}
}
