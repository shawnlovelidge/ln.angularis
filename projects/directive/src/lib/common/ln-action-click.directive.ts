import {
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Library } from '@angularis/core';
import { Subscription } from 'rxjs';
//
// Service
//
import { LnMessageBusService } from '@angularis/service';

@Directive({
  selector: '[onActionClick]',
})
export class LnActionClickDirective implements OnDestroy, OnChanges, OnInit {
  @Input()
  public set onActionClick(elements: any[]) {
    if (Library.isArrayWithLength(elements)) {
      elements.forEach(el => {
        if (Library.isDefined(el)) {
          if (Library.isDefined(el.onClick)) {
            this.subscriptions.push(
              el.onClick.subscribe(() => {
                this._viewContainer.detach();
                this._viewContainer.clear();
                this._viewContainer.createEmbeddedView(this._template);
              })
            );
          }
        }
      });
    }
  }

  private subscriptions: Subscription[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['close']) {
      if (changes['close'].currentValue) {
        if (Library.isArrayWithLength(this.subscriptions)) {
          this._viewContainer.clear();
        }
      }
    }
  }

  ngOnInit() {
    this.messageService.message().subscribe(message => {
      if (Library.isObject(message)) {
        switch (message.action) {
          case 'open':
            this._viewContainer.clear();
            this._viewContainer.createEmbeddedView(this._template);
            break;
          case 'close':
            this._viewContainer.clear();
            break;
        }
      }
    });
  }

  ngOnDestroy() {
    if (Library.isArrayWithLength(this.subscriptions)) {
      this.subscriptions.forEach(s => s.unsubscribe());
    }
  }

  constructor(
    private _template: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    private messageService: LnMessageBusService
  ) {
    this.subscriptions = [];
  }
}
