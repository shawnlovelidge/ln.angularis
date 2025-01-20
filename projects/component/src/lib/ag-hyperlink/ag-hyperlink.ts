import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
//
// Action
//
import { Action } from '@angularis/core';

@Component({
  imports: [CommonModule],
  selector: 'ag-hyperlink',
  templateUrl: 'ag-hyperlink.html',
  styleUrls: ['ag-hyperlink.scss'],
})
export class AgHyperLink implements OnInit {
  public readonly model = input<Action>(new Action());
  //
  // onClick()
  //
  @Output() public onClick: EventEmitter<Action> = new EventEmitter();
  //
  // constructor
  //
  constructor() {
  }
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
