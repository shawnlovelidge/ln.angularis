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
  public multiselect: boolean = false;
  public style: Partial<CSSStyleDeclaration> = {
    fontSize: '12px',
    height: '300px',
    overflowY: 'auto',
  };
  public label = signal('Items');
  public items = signal([
    new Action({
      id: 1,
      name: 'Shawn Lovelidge',
      description: 'Engineer',
    }),
    new Action({
      id: 2,
      name: 'Lisa Weaver',
      description: 'Housewife',
    }),
    new Action({
      id: 3,
      name: 'Mark Meadows',
      description: 'Dancer',
    }),
    new Action({
      id: 4,
      name: 'Donald Trump',
      description: 'US President',
    }),
    new Action({
      id: 5,
      name: 'Celina Gomez',
      description: 'Stupid Singer',
    }),
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
        `%c { id: '${item.id}', name: '${item.name}', active: ${item.active} }`,
        `color:rgb(34, 175, 246); font-size: 12px; font-weight: bold`
      );
    }
    console.groupEnd();
  }
}
