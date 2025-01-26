import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { AgHero } from '../../../../../component/src/lib/ag-hero/ag-hero';

@Component({
  imports: [CommonModule, AgHero],
  selector: 'AgHero',
  templateUrl: './ln-hero.html',
})
export class LnHero {
  public label = signal('Welcome to our company...');
}
