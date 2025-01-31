import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
//
// @naularius/core
//
import { Menu } from '@angularis/core';
//
// @Components
//
@Component({
  imports: [CommonModule],
  selector: 'ag-menu-option',
  templateUrl: 'ag-menu-option.html',
  styleUrls: ['ag-menu-option.scss'],
})
export class AgMenuOption
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() public model: Menu = new Menu();
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public active: boolean = false;
  @Input() public style: Partial<CSSStyleDeclaration> = {};
  //
  // @Output
  //
  @Output() public onClick: EventEmitter<Menu> = new EventEmitter();
  //
  // Constructor
  //
  constructor() {}
  //
  // ngOnInit
  //
  public ngOnInit(): void {}
  //
  // ngAfterViewInit
  //
  public ngAfterViewInit(): void {}
  //
  // ngOnDestroy
  //
  public ngOnDestroy(): void {}

  //
  // handleOnClick
  //
  public handleOnClick(event: Event): void {
    if (this.onClick) {
      //
      // propigate Menu
      //
      this.onClick.emit(this.model);
    }
  }
}
