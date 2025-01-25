import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { AgRadioButton } from '../../../../../component/src/lib/ag-radio-button/ag-radio-button';
import { Action } from '@angularis/core';

@Component({
  imports: [CommonModule, AgRadioButton],
  selector: 'AgRadioButton',
  templateUrl: './ln-radio-button.html',
  styleUrls: ['ln-radio-button.scss'],
})
export class LnRadioButton {
  public label = signal('Tempature');
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
  // handleOnClick
  //
  public handleOnClick(item: Action) {
    //
    // Console Debug Statement
    //
    console.debug(
      `%c ${item.name} radio-button clicked`,
      `color:rgb(235, 246, 34); font-size: 12px; font-weight: bold`
    );
  }
}
