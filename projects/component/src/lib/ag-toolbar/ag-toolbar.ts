import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
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
  public readonly model = input.required<Icon[]>();
  public hidden = input<boolean>(false);
  public disabled = input<boolean>(false);
  public readonly size = input<number>(24);
  public readonly color = input<string>('');
  public readonly style = computed(() => ({
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
