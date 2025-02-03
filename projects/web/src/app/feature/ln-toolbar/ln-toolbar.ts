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
import {
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faBold,
  faItalic,
  faFolderOpen,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, FontAwesomeModule, LnCanvas, AgToolBar],
  selector: 'ln-toolbar',
  templateUrl: 'ln-toolbar.html',
  styleUrls: ['ln-toolbar.scss'],
})
export class LnToolBar {
  public icons = signal([
    new Icon<IconProp>({
      id: 0,
      name: 'folder-open',
      component: ['fas', 'folder-open'],
      //style: { color: 'purple' },
    }),
    new Icon<IconProp>({
      id: 1,
      name: 'align-left',
      component: ['fas', 'align-left'],
      //style: { color: 'blue', fontSize: '36px' },
    }),
    new Icon<IconProp>({
      id: 2,
      name: 'align-center',
      component: ['fas', 'align-center'],
      //style: { color: 'purple' },
    }),
    new Icon<IconProp>({
      id: 3,
      name: 'align-right',
      component: ['fas', 'align-right'],
      //style: { color: 'purple' },
    }),
    new Icon<IconProp>({
      id: 4,
      name: 'bold',
      component: ['fas', 'bold'],
      //style: { color: 'purple' },
    }),
    new Icon<IconProp>({
      id: 5,
      name: 'italic',
      component: ['fas', 'italic'],
      //style: { color: 'purple' },
    }),
    new Icon<IconProp>({
      id: 6,
      name: 'print',
      component: ['fas', 'print'],
      //style: { color: 'purple' },
    }),
    new Icon<IconProp>({
      id: 7,
      name: 'envelope',
      component: ['far', 'envelope'],
      //style: { color: 'purple' },
    }),
  ]);
  //
  // Constructor
  //
  constructor(private library: FaIconLibrary) {
    this.library.addIcons(
      faAlignLeft,
      faAlignCenter,
      faAlignRight,
      faBold,
      faItalic,
      faFolderOpen,
      faEnvelope,
      faPrint
    );
  }
  //
  // ngOnInit
  //
  public ngOnInit() {}
  //
  // handleOnClick
  //
  public handleOnClick(item: Icon<IconProp>) {
    //
    // Console Debug Statement
    //
    console.log(
      `%c icon: ${item.name}`,
      `color:rgb(242, 12, 204); font-size: 12px; font-weight: bold`
    );
  }
}
