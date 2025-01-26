import { CommonModule } from '@angular/common';
import {
  Component,
  Output,
  OnInit,
  EventEmitter,
  ElementRef,
  input,
  AfterViewInit,
  OnDestroy,
  signal,
  Input,
} from '@angular/core';
//
// @angularis/core Library
//
import { Library } from '@angularis/core';

@Component({
  imports: [CommonModule],
  selector: 'ag-button',
  templateUrl: 'ag-button.html',
  styleUrls: ['ag-button.scss'],
})
export class AgButton implements OnInit, AfterViewInit, OnDestroy {
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public active: boolean = false;
  @Input() public style: object = {};
  //
  // setup a singnal for the classes
  //
  public classes = signal<string>('');
  //
  // @Output EventEmitters
  //
  @Output()
  public onClick: EventEmitter<any> = new EventEmitter();
  //
  // Private Variables
  //
  private observer!: MutationObserver;
  //
  // Constructor
  //
  constructor(private element: ElementRef) {}
  //
  // ngOnInit
  //
  public ngOnInit() {}
  //
  // ngAfterViewInit
  //
  public ngAfterViewInit() {
    //
    //  mutationCallback
    //
    const mutationCallback = (mutationsList: any, observer: any) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          if (mutation.target) {
            if (mutation.target.classList) {
              let classNames: string[] = [];
              mutation.target.classList.forEach((className: string) => {
                classNames.push(className);
              });

              if (Library.isArrayWithLength(classNames)) {
                //
                // Set the classes
                //
                this.classes.set(classNames.join(' '));
              }
            }
          }
        }
      }
    };

    this.classes.set(this.parseClassList());
    //
    // Setup Listener for when the classList changes
    //
    this.observer = new MutationObserver(mutationCallback);
    //
    // Get it the target element
    //
    this.observer.observe(this.element.nativeElement, { attributes: true });
  }

  //
  // handleClick
  //
  public handleClick($event: MouseEvent) {
    if (this.onClick) {
      this.onClick.emit($event);
    }
  }
  //
  // ngOnDestroy
  //
  public ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }

  //
  // parseClassList
  //
  private parseClassList = (): string => {
    const list: string[] = Array.from(this.element.nativeElement.classList);
    if (Library.isArrayWithLength(list)) {
      return list.join(' ');
    }
    return '';
  };
}
