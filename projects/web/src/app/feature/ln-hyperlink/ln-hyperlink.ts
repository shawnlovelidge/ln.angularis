import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//
// @angularis/component
//
import { AgHyperLink } from '@angularis/component';
//
// @angularis/core
//
import { Route } from '@angularis/core';
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
  public simpleLink = signal(new Route({ id: 1, name: 'Simple Link' }));
  public buttonLink = signal(new Route({ id: 2, name: 'Button Link' }));
  public label = signal('Label');
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
  public handleOnClick(item: Route) {
  }
}
