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
export class AgHero {
  public label = input<string>('');
  public disabled = input<boolean>(false);
  public hidden = input<boolean>(false);
}
