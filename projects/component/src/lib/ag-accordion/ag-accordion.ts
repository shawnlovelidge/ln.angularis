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
import { Library } from '@angularis/core';

//
// Components
//
import { AgIcon } from '../ag-icon/ag-icon';

@Component({
  selector: 'ag-accordion',
  imports: [CommonModule, AgIcon],
  templateUrl: 'ag-accordion.html',
  styleUrls: ['ag-accordion.scss'],
})
export class AgAccordion implements OnInit {
  @Input() public label: string = '';
  @Input() public open = signal(false);
  public readonly disabled = input<boolean>(false);
  public readonly hidden = input<boolean>(false);
  public readonly active = input<boolean>(false);
  public readonly style = input<object>({});
  //
  // Events
  //
  @Output() public onClick: EventEmitter<any> = new EventEmitter();
  //
  // Public Variables
  //

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
