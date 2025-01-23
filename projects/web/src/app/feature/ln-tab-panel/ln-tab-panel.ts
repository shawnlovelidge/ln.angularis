import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';

//
// Angularis Componants
//
import { AgTabPanel } from '../../../../../component/src/lib/ag-tab-panel/ag-tab-panel';
import { AgTab } from '../../../../../component/src/lib/ag-tab/ag-tab';
import { AgBanner } from '../../../../../component/src/lib/ag-banner/ag-banner';

@Component({
  imports: [CommonModule, AgTabPanel, AgTab],
  selector: 'AgTabPanel',
  template: `
    <div class="component-header">
      <h2 class="component-title">Component: &lt;ag-tab-panel/&gt;</h2>
    </div>
    <hr />
    <ag-tab-panel [hidden]="hidden" [disabled]="disabled" [style]="style">
      <ag-tab id="1" label="Code" [active]="active">
        <div innerHTML="innerHTML"></div>
      </ag-tab>
      <ag-tab id="2" label="Example"> </ag-tab>
    </ag-tab-panel>
  `,
})
export class LnTabPanel {
  public banner = signal('Sample Banner');
  public label = signal('LnTabPanel');
  public active = signal(true);
  public hidden = signal(false);
  public disabled = signal(false);
  public style = signal({
    height: 'auto',
    width: '100%',
  });

  public innerHTML: string = `
      <ag-tab-panel [hidden]="hidden" [disabled]="disabled">
        <ag-tab id="1" label="Example" [active]="active"> </ag-tab>
        <ag-tab id="2" label="Code">
          <div [innerHTML]=code/>
        </ag-tab>
      </ag-tab-panel>
    `;
}
