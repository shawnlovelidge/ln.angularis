import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//
// Icon
//
import { Icon } from '@angularis/core';
//
// Container
//
import { AgToolBar } from '@angularis/component';
//
// Font Awesome Libraries
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, FontAwesomeModule, LnCanvas, AgToolBar],
  selector: 'ln-toolbar',
  templateUrl: './ln-toolbar.html',
  styleUrls: ['./ln-toolbar.scss'],
})
export class LnToolBar {
  public icons = signal([
    new Icon<IconProp>({
      id: 1,
      name: 'facebook',
      component: ['fab', 'facebook'],
      //style: { color: 'blue', fontSize: '36px' },
    }),
    new Icon<IconProp>({
      id: 2,
      name: 'twitter',
      component: ['fab', 'twitter'],
      //style: { color: 'purple' },
    }),
  ]);
  //
  // Constructor
  //
  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faTwitter, faFacebook);
  }
  //
  // ngOnInit
  //
  public ngOnInit() {}
  //
  // handleOnClick
  //
  public handleOnClick(item: Icon<IconProp>) {
    console.log(`${item.name} clicked`);
  }
}
