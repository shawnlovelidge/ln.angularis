import { CommonModule } from '@angular/common';
import { Component, Inject, Input, signal } from '@angular/core';
//
// Component Library
//
import { AgRadioButton } from '@angularis/component';
//
// Library
//
import { Action } from '@angularis/core';
//
// Component
//
import { LnTheme } from '../ln-theme/ln-theme';

@Component({
  imports: [CommonModule, LnTheme],
  selector: 'ln-header',
  templateUrl: 'ln-header.html',
  styleUrls: ['ln-header.scss'],
})
export class LnHeader {
  @Input() public readonly label: string = '';
  @Input() public readonly hidden: boolean = false;
  //
  // Public Variables
  //

  //
  // Constructor
  //
  constructor() {}
  //
  // ngOnInit()
  //
  public ngOnInit() {}
}
