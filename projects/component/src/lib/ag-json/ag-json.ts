import { CommonModule } from '@angular/common';
import { Component, computed, Input, input, OnInit } from '@angular/core';

//
// Library
//
import { Library } from '@angularis/core';

@Component({
  imports: [CommonModule],
  selector: 'ag-json',
  templateUrl: 'ag-json.html',
  styleUrls: ['ag-json.scss'],
})
export class AgJson implements OnInit {
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  //
  // Signals
  //
  public readonly data = input<object>();
  public sorted = computed(() => {
    const obj = this.data();
    if (obj) {
      return JSON.parse(Library.ObjectPropertySort(obj) as string);
    }
    return obj;
  });
  //
  // ngOnInit
  //
  public ngOnInit() {}
}
