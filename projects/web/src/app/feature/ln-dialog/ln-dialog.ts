import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//
// @angularis/component
//
import { AgDialog } from '@angularis/component';
//
// Import Card Model
//
import { Action, Card as Model, Image } from '@angularis/core';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgDialog],
  selector: 'ln-dialog',
  styleUrls: ['ln-dialog.scss'],
  templateUrl: 'ln-dialog.html',
})
export class LnDialog {
  public hidden: boolean = false;
  public disabled: boolean = false;
  public style: Partial<CSSStyleDeclaration> = {};
  public model = new Model({
    label: 'Latin America',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  });
  public actions = [
    new Action({
      label: 'Action 1',
    }),
    new Action({
      label: 'Action 2',
    }),
  ];
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
  public handleOnClick(card: Model) {
    //
    // Console Debug Statement
    //
    console.debug(
      `%c { label: ${card.label}  active: ${card.active} }`,
      `color:rgb(243, 26, 196); font-size: 12px; font-weight: bold`
    );
  }
  //
  // handleOnAction
  //
  public handleOnAction(action: Action) {
    //
    // Console Debug Statement
    //
    console.debug(
      `%c { action: ${action.label}   }`,
      `color:rgb(243, 26, 196);  font-size: 12px; font-weight: bold`
    );
  }
}
