import { CommonModule } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
//
// Lernender/Core
//
import { Guid, Library } from '@angularis/core';
//
// ln-svg
//
@Component({
  imports: [CommonModule],
  selector: 'ag-hero',
  templateUrl: 'ag-hero.html',
  styleUrls: ['ag-hero.scss'],
})
export class AgHero implements OnInit {
  public readonly label = input<string>('');
  public readonly disabled = input<boolean>(false);
  public readonly hidden = input<boolean>(false);

  //
  // Public Variables
  //

  //
  // Constructor
  //
  constructor() {}

  //
  // ngOnInit
  //
  public ngOnInit(): void {}
}
