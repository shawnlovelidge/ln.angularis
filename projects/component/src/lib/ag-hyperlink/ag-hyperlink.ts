import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output, computed, input } from '@angular/core';
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
  public readonly model = input<Action>(new Action());
  public readonly disabled = input<boolean>(false);
  public readonly hidden = input<boolean>(false);
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
