import { CommonModule } from '@angular/common';
import { Component, input, OnInit, signal } from '@angular/core';
//
// @angularis/component
//
import { AgAccordion } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgAccordion],
  selector: 'AgAccordion',
  templateUrl: './ln-accordion.html',
})
export class LnAccordion implements OnInit {
  public label = 'Accordion A';
  public open = [true, false];
  //
  // Constructor
  //
  constructor() {}
  //
  // ngOnInit
  //
  public ngOnInit() {}
}
