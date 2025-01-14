// @ts-nocheck
import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { AgClipboardService } from '@angularis/service';

@Directive({
  // tslint:disable-next-line:directive-selector

  selector: '[Clipboard]',
})
export class AgClipboardDirective implements OnInit, OnDestroy {
  @Input('Clipboard')
  public targetElm: HTMLInputElement;
  @Input()
  public container: HTMLInputElement;

  @Input()
  public cbContent: string;

  @Output()
  public cbOnSuccess: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public cbOnError: EventEmitter<any> = new EventEmitter<any>();
  constructor(private service: AgClipboardService) {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}

  public ngOnDestroy() {
    this.service.destroy(this.container);
  }

  @HostListener('click', ['$event.target'])
  public onClick(event: Event) {
    if (!this.service.isSupported) {
      this.handleResult(false, undefined, event);
    } else if (this.targetElm && this.service.isTargetValid(this.targetElm)) {
      this.handleResult(
        this.service.copyFromInputElement(this.targetElm),
        this.targetElm.value,
        event
      );
    } else if (this.cbContent) {
      this.handleResult(
        this.service.copyFromContent(this.cbContent, this.container),
        this.cbContent,
        event
      );
    }
  }

  /**
   * Fires an event based on the copy operation result.
   * @param succeeded
   */
  private handleResult(
    succeeded: boolean,
    copiedContent: string | undefined,
    event: Event
  ) {
    if (succeeded) {
      this.cbOnSuccess.emit({
        isSuccess: true,
        content: copiedContent,
        event: event,
      });
    } else {
      this.cbOnError.emit({ isSuccess: false, event: event });
    }
  }
}
