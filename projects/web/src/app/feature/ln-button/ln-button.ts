import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { AgButton } from '../../../../../component/src/lib/ag-button/ag-button';

@Component({
  imports: [CommonModule, AgButton],
  selector: 'AgButton',
  templateUrl: './ln-button.html',
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
