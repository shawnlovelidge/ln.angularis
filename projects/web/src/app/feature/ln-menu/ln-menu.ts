import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//
// @angularis/core
//
import { Menu } from '@angularis/core';
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
  public model: Menu[] = [
    new Menu({ id: 1, label: 'Swimming', active: false }),
    new Menu({ id: 2, label: 'Cycling', active: false }),
    new Menu({ id: 3, label: 'Running', active: false }),
    new Menu({ id: 4, label: 'Dancing', active: false }),
    new Menu({ id: 5, label: 'Bowling', active: false }),
  ].sort((a, b) => a.label.localeCompare(b.label));
  public hamburgerMenu: Menu[] = [
    new Menu({ id: 1, label: 'File..', active: false }),
    new Menu({ id: 2, label: 'Settings', active: false }),
  ].sort((a, b) => a.label.localeCompare(b.label));
  public kababMenu: Menu[] = [
    new Menu({ id: 1, label: 'Expand', active: false }),
    new Menu({ id: 2, label: 'Collapse', active: false }),
  ].sort((a, b) => a.label.localeCompare(b.label));
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
  public handleOnClick(menu: Menu) {
    //
    // Console Debug Statement
    //
    console.debug(
      `%c { selection: ${menu.label}  active: ${menu.active} }`,
      `color:rgb(243, 26, 196); font-size: 12px; font-weight: bold`
    );
  }
}