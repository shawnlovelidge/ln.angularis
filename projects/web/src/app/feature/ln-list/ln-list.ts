import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
//
// Library
//
import { Action } from '@angularis/core';
//
// @angularis/component
//
import { AgList } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgList],
  selector: 'AgList',
  styleUrls: ['ln-list.scss'],
  templateUrl: 'ln-list.html',
})
export class LnList {
  public hidden: boolean = false;
  public disabled: boolean = false;
  public multiselect: boolean = true;
  public style: object = { fontSize: '12px', height: '200px', overflowY: 'auto' };
  public label = signal('Items');
  public items = signal([
    new Action({ id: 1, name: 'Item 1' }),
    new Action({ id: 2, name: 'Item 2' }),
    new Action({ id: 3, name: 'Item 3' }),
    new Action({ id: 4, name: 'Item 4' }),
    new Action({ id: 5, name: 'Item 5' }),
  ]);
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
  public handleOnClick(items: Action[]) {
    console.clear();
    console.group('handleOnClick');
    //
    // Console Debug Statement
    //
    for (const item of items) {
      console.log(
        `%c id:${item.id} name:${item.name} active:${item.active}`,
        `color:rgb(235, 246, 34); font-size: 12px; font-weight: bold`
      );
    }
    console.groupEnd();
  }
}
