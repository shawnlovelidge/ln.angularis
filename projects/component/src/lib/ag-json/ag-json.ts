import { CommonModule } from '@angular/common';
import { Component, computed, Input, input, signal } from '@angular/core';
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
export class AgJson {
  @Input() public json: object = {};
  @Input() public readonly hidden: boolean = false;
  //
  // Public Variables
  //
  public readonly obj = signal({});
  //
  // Constructor
  //
  constructor() {}
  //
  // ngOnInit()
  //
  public ngOnInit() {
    //
    // Sort Json Object Properties
    //
    this.obj.set(JSON.parse(Library.ObjectPropertySort(this.json) as string));
  }
}
