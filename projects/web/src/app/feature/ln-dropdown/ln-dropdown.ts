import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//
// @angularis/core
//
import { Item } from '@angularis/core';
//
// @angularis/component
//
import { AgDropDown } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgDropDown],
  selector: 'AgMenu',
  templateUrl: 'ln-dropdown.html',
  styleUrls: ['ln-dropdown.scss'],
})
export class LnDropDown {
  public label: string = 'Area of Interest';
  public hidden: boolean = false;
  public disabled: boolean = false;
  public style: Partial<CSSStyleDeclaration> = {
    width: '100%',
    height: 'auto',
    maxHeight: '180px',
    overflow: 'auto',
  };
  public model: Item[] = [
    new Item({ id: 1, name: 'Swimming', active: false }),
    new Item({ id: 2, name: 'Cycling', active: false }),
    new Item({ id: 3, name: 'Running', active: false }),
    new Item({ id: 4, name: 'Dancing', active: false }),
    new Item({ id: 5, name: 'Bowling', active: false }),
  ].sort((a, b) => a.name.localeCompare(b.name));
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
  public handleOnClick(item: Item) {
    //
    // Console Debug Statement
    //
    console.debug(
      `%c { id: ${item.id}, name: ${item.name}, label: ${item.label} }`,
      `color:rgb(243, 26, 196); font-size: 12px; font-weight: bold`
    );
  }
}