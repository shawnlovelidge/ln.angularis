import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
//
// @angularis/core
//
import { Base } from '@angularis/core';
//
// @angularis/component
//
import { AgChip } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';
import {
  faUser,
  faCheck,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [CommonModule, LnCanvas, AgChip],
  selector: 'ln-chip',
  templateUrl: 'ln-chip.html',
})
export class LnChip {
  public readonly: Base = new Base({ id: 1, name: 'chip-readonly', active: false });
  public basic: Base = new Base({ id: 1, name: 'chip-basic', active: false });
  public highlight: Base = new Base({ id: 1, name: 'chip-highlight', active: false });
  public input: Base = new Base({ id: 1, name: 'chip-input', active: false });
  public faUser = faUser;
  public faCheck = faCheck;
  public faCircleXmark = faCircleXmark;
  //
  // Constructor
  //
  constructor() {}
  //
  // ngOnInit
  //
  public ngOnInit() {}
  //
  // handleOnClick
  //
  public handleOnClick(model: Base) {
    //
    // Console Debug Statement
    //
    console.log(
      `%c chip name: ${model.name} checked: ${model.checked}`,
      `color:rgb(242, 12, 204); font-size: 12px; font-weight: bold`
    );
  }
  //
  // handleOnRemove
  //
  public handleOnRemove(model: Base) {
    //
    // Console Debug Statement
    //
    console.log(
      `%c REMOVE chip name: ${model.name} checked: ${model.checked}`,
      `color:rgb(242, 31, 12); font-size: 12px; font-weight: bold`
    );
  }
}
