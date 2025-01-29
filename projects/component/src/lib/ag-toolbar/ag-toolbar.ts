import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  linkedSignal,
  Output,
} from '@angular/core';
//
// Library
//
import { Icon, Library } from '@angularis/core';
//
// Font Awesome Library Container
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
//
// Components
//


@Component({
  selector: 'ag-toolbar',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: 'ag-toolbar.html',
  styleUrls: ['ag-toolbar.scss'],
})
export class AgToolBar {
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  //
  // Signals
  //
  public readonly model = input.required<Icon<IconProp>[]>();
  public readonly size = input<number>(24);
  public readonly color = input<string>('');
  public readonly style = linkedSignal(() => ({
    color: `${this.color()}`,
    fontSize: `calc(${this.size()}px + 8px)`,
  }));
  //
  // OnClick
  //
  @Output() public onClick: EventEmitter<Icon<IconProp>> = new EventEmitter();
  //
  // OnClick
  //
  public handleOnClick($event: any, item: Icon<IconProp>) {
    $event.preventDefault();
    if (Library.isDefined(this.onClick)) {
      this.onClick.emit(item);
    }
  }
}
