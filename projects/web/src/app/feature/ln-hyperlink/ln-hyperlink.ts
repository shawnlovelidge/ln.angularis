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
  public handleOnClick(item: Action) {}
}
