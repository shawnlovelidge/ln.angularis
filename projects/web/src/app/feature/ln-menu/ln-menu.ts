import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//
// @angularis/core
//
import { Item } from '@angularis/core';
//
// @angularis/component
//
import { AgMenu } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgMenu],
  selector: 'AgMenu',
  templateUrl: 'ln-menu.html',
  styleUrls: ['ln-menu.scss'],
})
export class LnMenu {
  public label: string = 'Area of Interest';
  public hidden: boolean = false;
  public disabled: boolean = false;
  public style: Partial<CSSStyleDeclaration> = {
    height: '200px',
    width: '200px',
    overflow: 'auto',
  };
  public model: Item[] = [
    new Item({ id: 1, name: 'Swimming', active: false }),
    new Item({ id: 2, name: 'Cycling', active: false }),
    new Item({ id: 3, name: 'Running', active: false }),
    new Item({ id: 4, name: 'Dancing', active: false }),
    new Item({ id: 5, name: 'Bowling', active: false }),
  ].sort((a, b) => a.name.localeCompare(b.name));
  public hamburgerMenu: Item[] = [
    new Item({ id: 1, name: 'File..', active: false }),
    new Item({ id: 2, name: 'Settings', active: false }),
  ].sort((a, b) => a.name.localeCompare(b.name));
  public kababMenu: Item[] = [
    new Item({ id: 1, name: 'Expand', active: false }),
    new Item({ id: 2, name: 'Collapse', active: false }),
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