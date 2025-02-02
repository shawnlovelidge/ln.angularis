import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
//
// @angularis/component
//
import { AgCheckBox } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgCheckBox],
  selector: 'AgCheckBox',
  templateUrl: 'ln-checkbox.html',
  styleUrls: ['ln-checkbox.scss'],
})
export class LnCheckBox {
  public label = 'Submit';
  public value = false;
  //
  // Constructor
  //
  constructor() {}
  //
  // ngOnInit
  //
  public ngOnInit() {}
  //
  // handleClick
  //
  public handleOnClick = (value: boolean) => {
    //
    // Set Value
    //
    this.value = value;
    //
    // Console Debug Statement
    //
    console.log(
      `%c checkbox value: ${value}`,
      `color:rgb(242, 12, 204); font-size: 12px; font-weight: bold`
    );
  };
}
