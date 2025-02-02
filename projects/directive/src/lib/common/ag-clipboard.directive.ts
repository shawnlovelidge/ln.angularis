// @ts-nocheck
import {
  Directive,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
  input
} from '@angular/core';

import { AgClipboardService } from '@angularis/service';

@Directive({
  // tslint:disable-next-line:directive-selector

  selector: '[Clipboard]',
})
export class AgClipboardDirective implements OnInit, OnDestroy {
  public readonly targetElm = input<HTMLInputElement>(undefined, { alias: "Clipboard" });
  public readonly container = input<HTMLInputElement>();

  public readonly cbContent = input<string>();

  @Output()
  public cbOnSuccess: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public cbOnError: EventEmitter<any> = new EventEmitter<any>();
  constructor(private service: AgClipboardService) {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}

  public ngOnDestroy() {
    this.service.destroy(this.container());
  }

  @HostListener('click', ['$event.target'])
  public onClick(event: Event) {
    const targetElm = this.targetElm();
    const cbContent = this.cbContent();
    if (!this.service.isSupported) {
      this.handleResult(false, undefined, event);
    } else if (targetElm && this.service.isTargetValid(targetElm)) {
      this.handleResult(
        this.service.copyFromInputElement(targetElm),
        targetElm.value,
        event
      );
    } else if (cbContent) {
      this.handleResult(
        this.service.copyFromContent(cbContent, this.container()),
        cbContent,
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
