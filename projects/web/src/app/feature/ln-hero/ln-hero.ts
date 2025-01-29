import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//
// @angularis/component
//
import { AgHero } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';
@Component({
  imports: [CommonModule, LnCanvas, AgHero],
  selector: 'AgHero',
  templateUrl: './ln-hero.html',
})
export class LnHero {
  public label = signal('Welcome to our company...');
  //
  // Constructor
  //
  constructor() {}
  //
  // ngOnInit
  //
  public ngOnInit() {}
}
