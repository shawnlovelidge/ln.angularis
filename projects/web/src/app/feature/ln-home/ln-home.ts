import { CommonModule } from '@angular/common';
import { Component, input, OnInit, signal } from '@angular/core';
//
// @angularis/component
//
import { AgAccordion, AgButton, AgBanner, AgHero } from '@angularis/component';
//
// Font Awesome Libraries
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  imports: [CommonModule, FontAwesomeModule, AgBanner],
  selector: 'ln-home',
  templateUrl: 'ln-home.html',
  styleUrls: ['ln-home.scss'],
})
export class LnHome implements OnInit {
  public label = 'Angularis Component Library for Angular 19';
  public open = [true, false];
  public gitHubIcon: IconProp = ['fab', 'github'];
  //
  // Constructor
  //
  constructor(library: FaIconLibrary) {
    library.addIcons(faGithub, faFacebook);
  }
  //
  // ngOnInit
  //
  public ngOnInit() {}
}
