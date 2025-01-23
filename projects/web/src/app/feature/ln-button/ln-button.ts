import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { AgButton } from '../../../../../component/src/lib/ag-button/ag-button';

@Component({
  imports: [CommonModule, AgButton],
  selector: 'AgButton',
  template: `
    <div class="component-header">
      <h2 class="component-title">Component: &lt;ag-button/&gt;</h2>
    </div>
    <hr />
    <div class="ln-button">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>
              <ag-button>{{ label() }}</ag-button>
            </td>
          </tr>
          <tr>
            <td>class='btn-circle'</td>
            <td>
              <ag-button class="btn-circle">{{ smLabel() }}</ag-button>
            </td>
          </tr>
          <tr>
            <td>class='btn-circle-sm'</td>
            <td>
              <ag-button class="btn-circle-sm">{{ smLabel() }}</ag-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class LnButton {
  public label = signal('Submit');
  public smLabel = computed(() => {
    var str = this.label();
    return str[0];
  });
}
