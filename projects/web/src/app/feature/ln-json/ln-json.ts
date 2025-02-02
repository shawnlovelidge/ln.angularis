import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//
// @angularis/component
//
import { AgJson } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgJson],
  selector: 'AgJson',
  templateUrl: './ln-json.html',
})
export class LnJson {
  public json = signal({ name: 'John', age: 30, city: 'New York' });
  //
  // Constructor
  //
  constructor() {}
  //
  // ngOnInit
  //
  public ngOnInit() {}
}
