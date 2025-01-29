import { CommonModule } from '@angular/common';
import {
  Component,
  Output,
  EventEmitter,
  input,
  effect,
  computed,
  signal,
  Input,
} from '@angular/core';
//
// @angularis/core Library
//
import { Action, Library } from '@angularis/core';
//
// 
//
import { AgButton } from '../ag-button/ag-button';

@Component({
  imports: [CommonModule, AgButton],
  selector: 'ag-radio-button',
  templateUrl: 'ag-radio-button.html',
  styleUrls: ['ag-radio-button.scss'],
})
export class AgRadioButton {
  @Input() public label: string = '';
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public readonly: boolean = false;
  //
  // Signals
  //
  @Input() public model = signal(new Array<Action>());
  //
  // @Output() onClick
  //
  @Output() public onClick: EventEmitter<Action> = new EventEmitter();
  //
  // Constructor
  //
  constructor() {}
  //
  // handleOnClick()
  //
  public handleOnClick($event: MouseEvent, item: Action) {
    $event.preventDefault();

    if (Library.isDefined(item)) {
      let list = this.model().map((i: Action) => {
        i.active = i.id === item.id;

        return i;
      });

      this.model.set(list);
    }

    if (Library.isDefined(this.onClick)) {
      item.active = true;

      this.onClick.emit(item);
    }
  }

  //
  // classAttr
  //
  public classAttr(id: number, length: number, item: Action) {
    let name = `radio-button`;
    let attr = id === 0 ? 'left' : id === length - 1 ? 'right' : '';

    return `${name} ${attr} ${item.active ? 'active' : ''}`;
  }
}
