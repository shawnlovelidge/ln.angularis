import { CommonModule } from '@angular/common';
import {
  Component,
  Output,
  OnInit,
  EventEmitter,
  signal,
  Input,
} from '@angular/core';
//
// @angularis/core Library
//

@Component({
  imports: [CommonModule],
  selector: 'ag-toggle',
  templateUrl: 'ag-toggle.html',
  styleUrls: ['ag-toggle.scss'],
})
export class AgToggle implements OnInit {
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public value: boolean = false;
  //
  // @Output()
  //
  @Output() onClick = new EventEmitter<boolean>();
  //
  // constructor()
  //
  constructor() {}
  //
  // ngOnInit()
  //
  public ngOnInit() {}
  //
  // toggle()
  //
  public toggle() {
    this.value = !this.value;
    if (this.onClick) this.onClick.emit(this.value);
  }
}
