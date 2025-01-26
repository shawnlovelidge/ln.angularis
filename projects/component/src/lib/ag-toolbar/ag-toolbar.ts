import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  linkedSignal,
  OnInit,
  Output,
} from '@angular/core';
//
// Library
//
import { Icon, Library } from '@angularis/core';
//
// Components
//
import { AgIcon } from '../ag-icon/ag-icon';

@Component({
  selector: 'ag-toolbar',
  imports: [CommonModule, AgIcon],
  templateUrl: 'ag-toolbar.html',
  styleUrls: ['ag-toolbar.scss'],
})
export class AgToolBar {
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  //
  // Signals
  //
  public readonly model = input.required<Icon[]>();
  public readonly size = input<number>(24);
  public readonly color = input<string>('');
  public readonly style = linkedSignal(() => ({
    color: `${this.color()}`,
    fontSize: `calc(${this.size()}px + 8px)`,
  }));
  //
  // OnClick
  //
  @Output() public onClick: EventEmitter<Icon> = new EventEmitter();
  //
  // OnClick
  //
  public handleOnClick($event: any, item: Icon) {
    if (Library.isDefined(this.onClick)) {
      this.onClick.emit(item);
    }
  }
}
