import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
//
// Library
//
import { Card, Library } from '@angularis/core';
//
// Components
//


@Component({
  selector: 'ag-card',
  imports: [CommonModule],
  templateUrl: 'ag-card.html',
  styleUrls: ['ag-card.scss'],
})
export class AgCard implements OnInit {
  public readonly model = input.required<Card>();
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public active: boolean = false;
  @Input() public style: object = {};
  @Input() public contentStyle: object = {};
  //
  // Events
  //
  @Output() public onClick: EventEmitter<any> = new EventEmitter();
  //
  // Public Variables
  //
  public cardType = () => {
    return `ag-card-container ${this.model().name}`;
  };
  //
  // constructor()
  //
  constructor() {}
  //
  // ngOnInit()
  //
  public ngOnInit() {}
  //
  // OnClick
  //
  public handleOnClick($event: Event) {
    if (Library.isDefined(this.onClick)) {
      this.onClick.emit($event);
    }
  }
}
