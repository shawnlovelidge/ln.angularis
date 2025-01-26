import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AgHyperLink } from '../../../../../component/src/lib/ag-hyperlink/ag-hyperlink';
import { Action } from '@angularis/core';

@Component({
  imports: [CommonModule, AgHyperLink],
  selector: 'AgHyperLink',
  templateUrl: './ln-hyperlink.html',
})
export class LnHyperLink {
  public model = signal(new Action({ name: 'click here' }));
  public label = signal('Click Me');

  public handleOnClick(item: Action) {
  }
}
