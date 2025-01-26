import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ViewContainerRef,
  input,
  signal,
} from '@angular/core';
//
// Components
//

//
// Component: AgTab()
//
@Component({
  imports: [CommonModule],
  selector: 'ag-tab',
  templateUrl: 'ag-tab.html',
  styleUrls: ['ag-tab.scss'],
})
//
// AgTab
//
export class AgTab {
  @Input() public id: string = '';
  @Input() public label: string = '';
  @Input() public active: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public style: object = {};
  //
  // Private
  //

  //
  // Constructor
  //
  constructor() {}
  //
  // ngInit()
  //
  public ngInit() {}
}
