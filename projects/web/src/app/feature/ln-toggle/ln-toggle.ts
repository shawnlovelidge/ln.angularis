import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
//
// @angularis/component
//
import { AgToggle } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';


@Component({
  imports: [CommonModule, LnCanvas, AgToggle],
  selector: 'AgToggle',
  styleUrls: ['ln-toggle.scss'],
  templateUrl: 'ln-toggle.html',
})
export class LnToggle {
  public value:boolean = false;
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
  public handleOnClick(value: boolean) {
    this.value = value;
    //
    // Console Debug Statement
    //
    console.log(
      `%c value: ${value}`,
      `color:rgb(242, 12, 204); font-size: 12px; font-weight: bold`
    );
  }
}
