import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AgJson } from '../../../../../component/src/lib/ag-json/ag-json'; 

@Component({
  imports: [CommonModule, AgJson],
  selector: 'AgJson',
  template: `
    <div class="component-header">
      <h2 class="component-title">Component: &lt;ag-json/&gt;</h2>
    </div>
    <hr />
    <div class="ln-json">
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
              <ag-json [data]="data()" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class LnJson {
  public data = signal({ name: 'John', age: 30, city: 'New York' });
}
