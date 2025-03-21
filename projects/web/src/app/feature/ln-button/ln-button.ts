import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
//
// @angularis/component
//
import { AgButton } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';
//
// Font Awesome Libraries
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  imports: [CommonModule, FontAwesomeModule, LnCanvas, AgButton],
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
  public handleOnClick($event: Event) {
    //
    // Console Debug Statement
    //
    console.log(
      `%c Button Clicked`,
      `color:rgb(242, 12, 204); font-size: 12px; font-weight: bold`
    );
  }
}
