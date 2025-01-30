import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  EventEmitter,
  Input,
  input,
  OnDestroy,
  OnInit,
  Output,
  signal,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
//
// Library
//
import { Action, Library } from '@angularis/core';
//
// Utility Functions
//
import { parseHTMLElementClassList } from '../util/functions';
//
// Components
//
import { AgCheckBox } from '../ag-checkbox/ag-checkbox';

@Component({
  imports: [CommonModule, AgCheckBox],
  selector: 'ag-list',
  templateUrl: 'ag-list.html',
  styleUrls: ['ag-list.scss'],
})
export class AgList implements OnInit, AfterViewInit, OnDestroy {
  @Input() public label: string = '';
  @Input() public hidden: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public multiselect: boolean = false;
  @Input() public style: object = {};
  @Input() public items = signal<Action[]>([]);
  @Input() public customTemplate!: TemplateRef<any>;
  //
  // setup a singnal for the classes
  //
  public classes = signal<string>('');
  //
  // @computed
  //
  public readonly useCheckBoxList = computed(() =>
    this.classes().includes('ag-checkbox-list')
  );
  //
  // @Output
  //
  @Output() public readonly onClick = new EventEmitter<Action[]>();
  //
  // Computed
  //
  public hasList = computed(() => this.items().length > 0);
  public hasCustomTemplate = () => Library.isDefined(this.customTemplate);
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
      parseHTMLElementClassList(this.element.nativeElement, 'ag-list-items')
    );
  }
  //
  // ngOnInit
  //
  public ngOnInit() {
    //
    // Set the default style
    //
    this.style = { ...{ height: 'auto', overflowY: 'auto' }, ...this.style };
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
    // Setup Listener for when the classList changes
    //
    this.observer = new MutationObserver(mutationCallback);
    //
    // Get it the target element
    //
    this.observer.observe(this.element.nativeElement, { attributes: true });
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
  public handleOnClick(item: Action) {
    for (const i of this.items()) {
      if (this.multiselect)
        i.active = i.id === item.id ? !item.active : i.active;
      else i.active = item.id === i.id;
    }

    if (this.onClick)
      if (this.multiselect)
        this.onClick.emit(this.items().filter(i => i.active));
      else this.onClick.emit([item]);
  }
  //
  // ngOnDestroy
  //
  public ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
