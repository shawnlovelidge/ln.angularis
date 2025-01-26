import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, computed, input } from '@angular/core';
//
// Action
//
import { Action, Library } from '@angularis/core';

@Component({
  imports: [CommonModule],
  selector: 'ag-hyperlink',
  templateUrl: 'ag-hyperlink.html',
  styleUrls: ['ag-hyperlink.scss'],
})
export class AgHyperLink implements OnInit {
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public style: object = {};
  //
  // Signals
  //
  public readonly model = input<Action>(new Action());
  public readonly classes = computed(() => {
    const list: string[] = Array.from(this.element.nativeElement.classList);
    if (Library.isArrayWithLength(list)) {
      return list;
    }
    return ['atag'];
  });
  //
  // onClick()
  //
  @Output() public onClick: EventEmitter<Action> = new EventEmitter();
  //
  // constructor
  //
  constructor(private element: ElementRef) {}
  //
  // ngOnInit
  //
  public ngOnInit() {}
  //
  // handleClick
  //
  public handleClick(event: Event) {
    if (this.onClick) {
      event.preventDefault();
      this.onClick.emit(this.model());
    }
  }
}
