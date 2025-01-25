import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AgHyperLink } from '../../../../../component/src/lib/ag-hyperlink/ag-hyperlink';
import { Action } from '@angularis/core';

@Component({
  imports: [CommonModule, AgHyperLink],
  selector: 'AgHyperLink',
  template: `
    <div class="component-header">
      <h2 class="component-title">Component: &lt;ag-hyperlink/&gt;</h2>
    </div>
    <hr />
    <div class="ln-hyperlink">
      <table>
        <thead>
          <tr>
            <th>class</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(default)</td>
            <td>
              <ag-hyperlink [model]="model()" (onClick)="handleOnClick($event)">
                @if (model().hasName()) {
                  {{ model().name }}
                } @else {
                  label()
                }
              </ag-hyperlink>
            </td>
          </tr>
          <tr>
            <td>class='button'</td>
            <td>
              <ag-hyperlink
                class="button"
                [model]="model()"
                (onClick)="handleOnClick($event)">
                @if (model().hasName()) {
                  {{ model().name }}
                } @else {
                  label()
                }
              </ag-hyperlink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class LnHyperLink {
  public model = signal(new Action({ name: 'click here' }));
  public label = signal('Click Me');

  public handleOnClick(item: Action) {
  }
}
