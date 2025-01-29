import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
//
// Angularis Componants
//
import { AgTabPanel, AgTab, AgBanner } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas],
  selector: 'AgTabPanel',
  templateUrl: 'ln-tab-panel.html',
  styleUrls: ['ln-tab-panel.scss'],
})
export class LnTabPanel {
  public banner = signal('Sample Banner');
  public label = signal('LnTabPanel');
  public active = true;
  public hidden = false;
  public disabled = false;
  public style = {
    height: 'auto',
    width: '100%',
  };
  //
  // Constructor
  //
  constructor() {}
  //
  // ngOnInit
  //
  public ngOnInit() {}
}
