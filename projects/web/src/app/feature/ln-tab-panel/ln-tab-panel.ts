import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';

//
// Angularis Componants
//
import { AgTabPanel } from '../../../../../component/src/lib/ag-tab-panel/ag-tab-panel';
import { AgTab } from '../../../../../component/src/lib/ag-tab/ag-tab';
import { AgBanner } from '../../../../../component/src/lib/ag-banner/ag-banner';

@Component({
  imports: [CommonModule, AgTabPanel, AgTab, AgBanner],
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

  public innerHTML: string = `
      <ag-tab-panel [hidden]="hidden" [disabled]="disabled">
        <ag-tab id="1" label="Example" [active]="active"> </ag-tab>
        <ag-tab id="2" label="Code">
          <div [innerHTML]=code/>
        </ag-tab>
      </ag-tab-panel>
    `;
}
