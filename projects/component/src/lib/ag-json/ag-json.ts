import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ag-json',
  templateUrl: 'ag-json.html',
  styleUrls: ['ag-json.scss'],
  imports: [CommonModule],
})
export class AgJson implements OnInit {
  public readonly data = input<object>();
  public readonly disabled = input<boolean>();
  public readonly hidden = input<boolean>();
  //
  // Constructor
  //
  constructor() {}
  //
  // ngOnInit
  //
  public ngOnInit() {}
}
