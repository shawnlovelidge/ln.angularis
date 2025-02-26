import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//
// @angularis/component
//
import { AgCard } from '@angularis/component';
//
// Import Card Model
//
import { Action, Card, Image } from '@angularis/core';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgCard],
  selector: 'AgButton',
  styleUrls: ['ln-card.scss'],
  templateUrl: 'ln-card.html',
})
export class LnCard {
  public hidden: boolean = false;
  public disabled: boolean = false;
  public style: Partial<CSSStyleDeclaration> = {};
  public basic = new Card({
    label: 'Latin America',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    canCheck: true,
  });
  public model = new Card({
    label: 'Latin America',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: new Image({
      style: {
        height: '200px',
        width: '400px',
      },
      href: 'https://placehold.co/400x200',
      label: 'Placeholder Image',
    }),
    canCheck: false,
    checked: false,
    disabled: false,
    hidden: false,
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
  public handleOnClick(card: Card) {
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
