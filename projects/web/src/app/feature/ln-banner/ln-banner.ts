import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//
// @angularis/core
//
import { Action, Icon } from '@angularis/core';
//
// @angularis/component
//
import { AgBanner } from '@angularis/component';
//
// Font Awesome Libraries
//
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgBanner],
  selector: 'AgBanner',
  templateUrl: 'ln-banner.html',
})
export class LnBanner {
  public label = 'Welcome';
  public description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  public icon: IconProp = ['fab', 'github'];
  public actions = [
    new Action({
      label: 'Submit',
    }),
    new Action({
      label: 'Cancel',
    }),
  ];
  //
  // Constructor
  //
  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faGithub, faFacebook);
  }
  //
  // ngOnInit
  //
  public ngOnInit() {}
  //
  // handleOnClick
  //
  public handleOnClick(action: Action) {
    //
    // Console Debug Statement
    //
    console.debug(
      `%c ${action.label.toLocaleUpperCase()} clicked`,
      `color:rgb(210, 243, 26); font-size: 12px; font-weight: bold`
    );
  }
}
