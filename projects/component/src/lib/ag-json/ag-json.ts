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
  public disabled = input<boolean>();
  public hidden = input<boolean>();
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
  public ngOnInit() {
    console.log(`AgJson ngOnInit ${JSON.stringify(this.data())}`);
  }
}
