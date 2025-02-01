import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  signal,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
//
// Library
//
import { Guid, Library } from '@angularis/core';
//
// Font Awesome Library Container
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Font Awesome Icons
//
import {
  faCaretUp,
  faCaretDown,
  faXmark,
  faXmarkCircle,
  faSearch,
  faBars,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';

//
// Utility Functions
//
import { parseHTMLElementClassList } from '../util/functions';

@Component({
  imports: [CommonModule, FontAwesomeModule],
  selector: 'ag-base',
  template: ``,
})
export class AgBase implements OnInit, AfterViewInit, OnDestroy {
  @Input() public label: string = '';
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public active: boolean = false;
  @Input() public style: Partial<CSSStyleDeclaration> = {};
  @Input() public customTemplate!: TemplateRef<any>;
  //
  // @Output() onClick
  //
  @Output() public onClick: EventEmitter<any> = new EventEmitter();
  //
  // Public Variables
  //
  public classes = signal<string>('');
  public uid: string = Guid.create().toString();
  //
  // Is/Has Functions
  //
  public isDisabled = () => this.disabled;
  public isHidden = () => this.hidden;
  public isActive = () => this.active;
  public hasLabel = () => Library.isStringWithLength(this.label);
  public hasStyle = () => Library.isObject(this.style);
  public hasCustomTemplate = () => Library.isDefined(this.customTemplate);
  public isMutationObservable = () =>
    Library.isStringWithLength(this.mutationSelector);
  //
  // Private Variables
  //
  protected observer!: MutationObserver;
  //
  // Private Variables
  //
  private mutationSelector = '';
  //
  // observeMutation
  //
  public observeMutation(selector: string): void {
    if (Library.isStringWithLength(selector)) {
      this.mutationSelector = selector;
    }
  }
  //
  // constructor()
  //
  constructor(
    protected element: ElementRef,
    protected viewContainerRef: ViewContainerRef,
    protected library: FaIconLibrary
  ) {
    //
    // FaIconLibrary
    //
    library.addIcons(
      faCaretUp,
      faCaretDown,
      faSquare,
      faCheckSquare,
      faXmark,
      faXmarkCircle,
      faSearch,
      faBars,
      faEllipsisV
    );
  }
  //
  // ngOnInit
  //
  public ngOnInit() {}
  //
  // ngAfterViewInit
  //
  public ngAfterViewInit() {
    //
    // mutationCallback
    //
    //  @param mutationsList
    //  @param observer
    //  @param cb()
    //
    //  Definition: This function is used to handle the mutation of the
    //  classList on a target element
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
    //
    // If we defined a element selector then...
    //
    if (this.isMutationObservable()) {
      //
      // Set the class selector
      //
      this.classes.set(
        parseHTMLElementClassList(
          this.element.nativeElement,
          this.mutationSelector
        )
      );
      //
      // Setup Listener for when the classList changes
      //
      this.observer = new MutationObserver(mutationCallback);
      //
      // Get it the target element
      //
      this.observer.observe(this.element.nativeElement, {
        attributes: true,
      });
    }
    //
    // Template
    //
    if (this.hasCustomTemplate()) {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.customTemplate);
    }
  }
  //
  // ngOnDestroy
  //
  public ngOnDestroy() {
    if (this.isMutationObservable()) {
      if (this.observer) this.observer.disconnect();
    }
  }
  //
  // handleOnClick
  //
  public handleOnClick(
    $event: Event,
    item?: any
  ) {
    $event.preventDefault();
    if (Library.isDefined(this.onClick)) {

      //
      // Console Debug Statement
      //
      console.log(
        `%c handleOnClick: ${$event.target}\t item: ${JSON.stringify(item)}`,
        `color:rgb(12, 242, 38); font-size: 12px; font-weight: bold`
      );

      if (Library.isDefined(item)) this.onClick.emit(item);
      else this.onClick.emit($event);
    }
  }
}
