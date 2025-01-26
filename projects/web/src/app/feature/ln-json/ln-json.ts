import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AgJson } from '../../../../../component/src/lib/ag-json/ag-json'; 

@Component({
  imports: [CommonModule, AgJson],
  selector: 'AgJson',
  templateUrl: './ln-json.html',
})
export class LnJson {
  public data = signal({ name: 'John', age: 30, city: 'New York' });
}
