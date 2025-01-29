import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//
// Angularis Componants
//
import { AgTabPanel } from '../../../../../component/src/lib/ag-tab-panel/ag-tab-panel';
import { AgTab } from '../../../../../component/src/lib/ag-tab/ag-tab';
import { AgBanner } from '../../../../../component/src/lib/ag-banner/ag-banner';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgTabPanel, AgTab, AgBanner],
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
