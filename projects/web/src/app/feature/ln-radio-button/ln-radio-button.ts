import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
//
// @angularis/component
//
import { AgRadioButton } from '@angularis/component';
//
// @angularis/core
//
import { Action } from '@angularis/core';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgRadioButton],
  selector: 'AgRadioButton',
  templateUrl: './ln-radio-button.html',
  styleUrls: ['ln-radio-button.scss'],
})
export class LnRadioButton {
  public label = 'Tempature';
  public model = signal(
    [
      new Action({
        id: 1,
        name: 'High',
        active: false,
      }),
      new Action({
        id: 2,
        name: 'Medium',
        active: true,
      }),
      new Action({
        id: 3,
        name: 'Low',
        active: false,
      }),
    ].sort()
  );

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
  public handleOnClick(item: Action) {}
}
