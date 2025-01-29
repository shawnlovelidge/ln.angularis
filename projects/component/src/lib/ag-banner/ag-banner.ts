import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
//
// Font Awesome Library Container
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
//
// Library
//
import { Action, Library } from '@angularis/core';
//
// Component Library
//
import { AgButton } from '../ag-button/ag-button';

@Component({
  selector: 'ag-banner',
  imports: [CommonModule, FontAwesomeModule, AgButton],
  templateUrl: 'ag-banner.html',
  styleUrls: ['ag-banner.scss'],
})
export class AgBanner implements OnInit {
  @Input() public label: string = '';
  @Input() public description: string = '';
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public active: boolean = false;
  @Input() public style: object = {};
  @Input() public actions: Array<Action> = [];
  @Input() public icon!: IconProp;
  //
  // Outputs
  //
  @Output() public onClick: EventEmitter<Action> = new EventEmitter();
  //
  // Public Variables
  //
  public hasIcon(): boolean {
    return this.icon !== undefined && (this.icon as Array<string>).length === 2;
  }
  //
  // constructor()
  //
  constructor() {
  }
  //
  // ngOnInit()
  //
  public ngOnInit() {
  }
  //
  // OnClick
  //
  public handleOnClick($event: Event, action: Action) {
    $event.preventDefault();
    if (Library.isDefined(this.onClick)) {
      this.onClick.emit(action);
    }
  }
}
