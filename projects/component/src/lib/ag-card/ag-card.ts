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
import { Action, Card, Library } from '@angularis/core';
//
// Utility Functions
//
import { parseHTMLElementClassList } from '../util/functions';
//
// Components
//
import { AgCheckBox } from '../ag-checkbox/ag-checkbox';
import { AgButton } from '../ag-button/ag-button';

@Component({
  imports: [CommonModule, AgCheckBox, AgButton],
  selector: 'ag-card',
  templateUrl: 'ag-card.html',
  styleUrls: ['ag-card.scss'],
})
export class AgCard implements OnInit, AfterViewInit, OnDestroy {
  @Input() public model: Card = new Card();
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public active: boolean = false;
  @Input() public style: Partial<CSSStyleDeclaration> = {};
  @Input() public actions: Array<Action> = [];
  @Input() public customTemplate!: TemplateRef<any>;
  //
  // setup a singnal for the classes
  //
  public classes = signal<string>('');
  //
  // @Output
  //
  @Output() public onClick: EventEmitter<Card> = new EventEmitter();
  @Output() public onAction: EventEmitter<Action> = new EventEmitter();
  //
  // hasFunction(s)
  //
  public hasList = computed(() => Library.isDefined(this.model));
  public hasCustomTemplate = () =>
    Library.isDefined(this.customTemplate);
  //
  // Private Variables
  //
  private observer!: MutationObserver;
  //
  // Constructor
  //
  constructor(
    private element: ElementRef,
    private container: ViewContainerRef
  ) {
    //
    // Set the classes
    //
    this.classes.set(
      parseHTMLElementClassList(this.element.nativeElement, 'ag-card')
    );
  }
  //
  // ngOnInit()
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
      ...this.model.style,
    };
  }
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
              mutation.target.classList.forEach(
                (className: string) => {
                  classNames.push(className);
                }
              );

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
    // Setup Listener for when the classList changes
    //
    this.observer = new MutationObserver(mutationCallback);
    //
    // Get it the target element
    //
    this.observer.observe(this.element.nativeElement, {
      attributes: true,
    });
    //
    // Template
    //
    if (this.hasCustomTemplate()) {
      this.container.clear();
      this.container.createEmbeddedView(this.customTemplate);
    }
  }
  //
  // handleOnClick
  //
  public handleOnClick(checked: boolean) {
    this.model.checked = checked;

    if (Library.isDefined(this.onClick)) {
      this.onClick.emit(this.model);
    }
  }
  //
  // handleOnActionClick
  //
  public handleOnActionClick(action: Action) {
    if (Library.isDefined(this.onAction)) {
      this.onAction.emit(action);
    }
  }
  //
  // ngOnDestroy
  //
  public ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
