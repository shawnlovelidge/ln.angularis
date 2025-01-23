import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { AgCheckBox } from '../../../../../component/src/lib/ag-checkbox/ag-checkbox';

@Component({
  imports: [CommonModule, AgCheckBox],
  selector: 'AgCheckBox',
  template: `
    <div class="component-header">
      <h2 class="component-title">Component: &lt;ag-checkbox/&gt;</h2>
    </div>
    <hr />
    <div class="ln-checkbox">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>checkbox</td>
            <td>
              <ag-checkbox
                [label]="label"
                [value]="checked"
                (onClick)="onClick($event)"
                >{{ label }}</ag-checkbox
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class LnCheckBox {
  public label = 'Submit';
  public checked = signal(true);
  public onClick = ($event: boolean) => {
    console.log('onClick()::', $event);
  };
}
