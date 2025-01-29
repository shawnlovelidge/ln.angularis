import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//
// @angularis/component
//
import { AgCheckBox } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgCheckBox],
  selector: 'AgCheckBox',
  templateUrl: 'ln-checkbox.html',
  styleUrls: ['ln-checkbox.scss'],
})
export class LnCheckBox {
  public label = 'Submit';
  public value = signal(false);
  public onClick = ($event: boolean) => {};
  //
  // Constructor
  //
  constructor() {}
  //
  // ngOnInit
  //
  public ngOnInit() {}
}
