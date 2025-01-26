import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { AgBanner } from '../../../../../component/src/lib/ag-banner/ag-banner';

@Component({
  imports: [CommonModule, AgBanner],
  selector: 'AgBanner',
  templateUrl: './ln-banner.html',
})
export class LnBanner {
  public label = 'Welcome';
}
