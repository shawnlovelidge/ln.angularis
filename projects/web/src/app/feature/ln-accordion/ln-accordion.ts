import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { AgAccordion } from '../../../../../component/src/lib/ag-accordion/ag-accordion';

@Component({
  imports: [CommonModule, AgAccordion],
  selector: 'AgAccordion',
  templateUrl: './ln-accordion.html',
})
export class LnAccordion {
  public label = 'Accordion A';
  public open = [signal(true), signal(false)];
}
