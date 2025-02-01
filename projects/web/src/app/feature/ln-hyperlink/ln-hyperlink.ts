import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//
// @angularis/component
//
import { AgHyperLink } from '@angularis/component';
//
// @angularis/core
//
import { Action } from '@angularis/core';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgHyperLink],
  selector: 'AgHyperLink',
  templateUrl: './ln-hyperlink.html',
})
export class LnHyperLink {
  public model = signal(new Action({ name: 'click here' }));
  public label = signal('Click Me');
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
  public handleOnClick(item: Action) {
    //
    // Console Debug Statement
    //
    console.log(
      `%c item.id: ${item.id} item.name: ${item.name}`,
      `color:rgb(242, 12, 204); font-size: 12px; font-weight: bold`
    );
  }
}
