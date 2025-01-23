import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  input,
  Input,
  OnInit,
  Output,
} from '@angular/core';
//
// Components
//
import { AgIcon } from '../ag-icon/ag-icon';
//
// Library
//
import { Icon, Library } from '@angularis/core';

@Component({
  selector: 'ag-toolbar',
  imports: [CommonModule, AgIcon],
  templateUrl: 'ag-toolbar.html',
  styleUrls: ['ag-toolbar.scss'],
})
export class AgToolBar {
  public readonly model = input<Icon[]>([]);
  public hidden = input<boolean>(false);
  public disabled = input<boolean>(false);
  //
  // OnClick
  //
  @Output() public onClick: EventEmitter<Icon> = new EventEmitter();
  //
  // OnClick
  //
  public handleOnClick(item: Icon) {
    if (Library.isDefined(this.onClick)) {
      this.onClick.emit(item);
    }
  }
}
