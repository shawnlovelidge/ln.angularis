import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { AgHero } from '../../../../../component/src/lib/ag-hero/ag-hero';

@Component({
  imports: [CommonModule, AgHero],
  selector: 'AgHero',
  template: `
    <div class="component-header">
      <h2 class="component-title">Component: &lt;ag-hero/&gt;</h2>
    </div>
    <hr />
    <ag-hero [label]="label()">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </ag-hero>
  `,
})
export class LnHero {
  public label = signal('Welcome to our company...');
}
