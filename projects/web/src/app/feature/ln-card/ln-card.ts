import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//
// @angularis/component
//
import { AgCard } from '@angularis/component';
//
// Import Card Model
//
import { Card, Image } from '@angularis/core';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgCard],
  selector: 'AgButton',
  templateUrl: './ln-card.html',
})
export class LnCard {
  public hidden: boolean = false;
  public disabled: boolean = false;
  public style: Partial<CSSStyleDeclaration> = {};
  public model = new Card({
    label: 'Basic Card',
    name: 'Basic Card',
    image: new Image(),
    disabled: false,
    hidden: false,
  });
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
      `%c { name: ${card.name}  active: ${card.active} }`,
      `color:rgb(243, 26, 196); font-size: 12px; font-weight: bold`
    );
  }
}
