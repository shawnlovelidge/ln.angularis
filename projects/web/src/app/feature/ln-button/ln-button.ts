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
            <td>(default)</td>
            <td>
              <ag-button (onClick)="handleOnClick($event)">{{
                label()
              }}</ag-button>
            </td>
          </tr>
          <tr>
            <td>class='circle'</td>
            <td>
              <ag-button class="circle" (onClick)="handleOnClick($event)">{{
                charLabel()
              }}</ag-button>
            </td>
          </tr>
          <tr>
            <td>class='circle small'</td>
            <td>
              <ag-button
                class="circle small"
                (onClick)="handleOnClick($event)"
                >{{ charLabel() }}</ag-button
              >
            </td>
          </tr>
          <tr>
            <td>class='secondary'</td>
            <td>
              <ag-button class="secondary" (onClick)="handleOnClick($event)">{{
                label()
              }}</ag-button>
            </td>
          </tr>
          <tr>
            <td>class='secondary circle'</td>
            <td>
              <ag-button
                class="secondary circle"
                (onClick)="handleOnClick($event)"
                >{{ charLabel() }}</ag-button
              >
            </td>
          </tr>
          <tr>
            <td>class='secondary circle small'</td>
            <td>
              <ag-button
                class="secondary circle small"
                (onClick)="handleOnClick($event)"
                >{{ charLabel() }}</ag-button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class LnButton {
  public label = signal('Submit');
  public charLabel = computed(() => {
    var str = this.label();
    return str[0];
  });

  //
  // handleOnClick
  //
  public handleOnClick($event: MouseEvent) {
    const { target } = $event;
    const { innerText } = target as HTMLElement;
    //
    // Console Debug Statement
    //
    console.debug(
      `%c ${innerText} button clicked`,
      `color:rgb(210, 243, 26); font-size: 12px; font-weight: bold`
    );
  }
}
