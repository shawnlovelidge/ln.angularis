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
  @Input() label: string = '';
  @Input() model = signal(new Array<Action>());
  public readonly readonly = input<boolean>(false);
  public readonly disabled = input<boolean>(false);
  public readonly hidden = input<boolean>(false);
  //
  // @Output() onClick
  //
  @Output() public onClick: EventEmitter<any> = new EventEmitter();
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
