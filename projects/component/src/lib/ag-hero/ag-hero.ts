import { CommonModule } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
//
// ag-hero
//
@Component({
  imports: [CommonModule],
  selector: 'ag-hero',
  templateUrl: 'ag-hero.html',
  styleUrls: ['ag-hero.scss'],
})
export class AgHero {
  @Input() public label: string = '';
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public style: object = {};
}
