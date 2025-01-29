import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
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


@Component({
  imports: [CommonModule, AgBanner],
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
      onClick: this.handleOnClick,
    }),
    new Action({
      label: 'Cancel',
      onClick: this.handleOnClick,
    }),
  ];

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

  constructor(library: FaIconLibrary) {
    library.addIcons(faGithub, faFacebook);
    debugger;
  }
}
