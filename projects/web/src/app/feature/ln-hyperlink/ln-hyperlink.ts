import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AgHyperLink } from '../../../../../component/src/lib/ag-hyperlink/ag-hyperlink'; 

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
            <th>Type</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic</td>
            <td>
              <ag-hyperlink>{{ label() }}</ag-hyperlink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class LnHyperLink {
  public label = signal('Click Me');
}
