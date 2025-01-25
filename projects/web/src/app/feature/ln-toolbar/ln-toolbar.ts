import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';

//
//
//
import { Icon } from '@angularis/core';
//
//
//
import { AgToolBar } from '../../../../../component/src/lib/ag-toolbar/ag-toolbar';

@Component({
  imports: [CommonModule, AgToolBar],
  selector: 'ln-toolbar',
  templateUrl: './ln-toolbar.html',
  styleUrls: ['./ln-toolbar.scss'],
})
export class LnToolBar {
  private readonly list = [
    'xmark',
    'trashcan',
    'info',
    'circle-info',
    'zoom-in',
    'zoom-out',
    'lock',
    'tools',
    'stethoscope',
  ].sort();
  public icons = computed(() => this.list.map(name => new Icon({ name })));

  public handleOnClick(item: Icon) {}
}
