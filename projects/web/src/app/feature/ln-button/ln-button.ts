import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
//
// @angularis/component
//
import { AgButton } from '@angularis/component';
//
// Font Awesome Libraries
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  imports: [CommonModule, FontAwesomeModule, AgButton],
  selector: 'AgButton',
  templateUrl: './ln-button.html',
})
export class LnButton {
  public label = signal('Submit');
  public charLabel = computed(() => {
    var str = this.label();
    return str[0];
  });
  public icon: IconProp = ['fab', 'facebook'];

  constructor(library: FaIconLibrary) {
    library.addIcons(faGithub, faFacebook);
  }
  //
  // handleOnClick
  //
  public handleOnClick($event: MouseEvent) {
    const { target } = $event;
    const { innerText } = target as HTMLElement;
    //
    // Console Debug Statement
    //
    console.debug(
      `%c ${innerText} button clicked`,
      `color:rgb(210, 243, 26); font-size: 12px; font-weight: bold`
    );
  }
}
