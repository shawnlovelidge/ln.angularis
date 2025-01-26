import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

import { AgIcon } from '@angularis/component';

@Component({
  imports: [CommonModule, AgIcon],
  selector: 'ln-icon',
  templateUrl: './ln-icon.html',
  styleUrls: ['./ln-icon.scss'],
})
export class LnIcon {
  private readonly list = [
    'angle-up',
    'wide-angle-down',
    'wide-angle-up',
    'angle-down',
    'check',
    'xmark',
    'trashcan',
    'square-check',
    'square-minus',
    'square',
    'success',
    'error',
    'warning',
    'info',
    'circle-info',
    'zoom-in',
    'zoom-out',
    'lock',
    'lock-open',
    'tools',
    'stethoscope',
    'chevron-up',
    'chevron-down',
  ].sort();
  public icons = computed(() => this.list.map(name => signal(name)));
}
