import { CommonModule } from '@angular/common';
import { Component, computed, input, OnInit } from '@angular/core';

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
  public readonly data = input<object>();
  public readonly disabled = input<boolean>(false);
  public readonly hidden = input<boolean>(false);
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
