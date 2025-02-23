import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//
// @angularis/core
//
import { Menu } from '@angularis/core';
//
// @angularis/component
//
import { AgNavMenu } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgNavMenu],
  selector: 'AgNavMenu',
  templateUrl: 'ln-nav-menu.html',
  styleUrls: ['ln-nav-menu.scss'],
})
export class LnNavMenu {
  public label: string = 'Area of Interest';
  public hidden: boolean = false;
  public disabled: boolean = false;
  public style: Partial<CSSStyleDeclaration> = {
    fontSize: '18px'
  };
  public model = signal([
    new Menu({ id: 1, name: 'Home', active: false }),
    new Menu({ id: 2, name: 'Services', active: false }),
    new Menu({ id: 3, name: 'About Us', active: false }),
    new Menu({ id: 4, name: 'Login', active: false }),
  ].sort((a, b) => a.name.localeCompare(b.name)));
  //
  // Constructor
  //
  constructor() {
  }
  //
  // ngOnInit
  //
  public ngOnInit() {}
  //
  // handleOnClick
  //
  public handleOnClick(item: Menu) {
    debugger;
    //
    // Console Debug Statement
    //
    console.debug(
      `%c { id: ${item.id}, name: ${item.name}, label: ${item.label} }`,
      `color:rgb(243, 26, 196); font-size: 12px; font-weight: bold`
    );
  }
}