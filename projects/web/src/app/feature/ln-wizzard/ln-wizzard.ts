import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
//
// @angularis/component
//
import { AgWizzard } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';
//
// model
//
import { Step } from '@angularis/model';
import { Action, Base, Name } from '@angularis/core';

@Component({
  imports: [CommonModule, LnCanvas, AgWizzard],
  selector: 'AgWizzard',
  styleUrls: ['ln-wizzard.scss'],
  templateUrl: 'ln-wizzard.html',
})
export class LnWizzard {
  public steps = signal<Step<any>[]>(
    [
      new Step<Base>({
        id: 20,
        title: 'Address',
        model: new Base({ id: 1, name: 'Address A' }),
        hidden: false,
        disabled: false,
        active: true,
        completed: false,
      }),
      new Step<Base>({
        id: 10,
        title: 'Contact',
        model: new Base({ id: 1, name: 'Contact A' }),
        hidden: false,
        disabled: false,
        active: true,
        completed: false,
      }),
      new Step<Base>({
        id: 30,
        title: 'Phone',
        model: new Base({ id: 1, name: 'Phone A' }),
        hidden: false,
        disabled: false,
        active: true,
        completed: false,
      }),
    ].sort((a, b) => a.id - b.id)
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
  public handleOnClick(value: boolean) {
    //
    // Console Debug Statement
    //
    console.log(
      `%c value: ${value}`,
      `color:rgb(242, 12, 204); font-size: 12px; font-weight: bold`
    );
  }
}
