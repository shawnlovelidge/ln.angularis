import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  EventEmitter,
  Input,
  input,
  linkedSignal,
  OnInit,
  Output,
  signal,
  Signal,
} from '@angular/core';
//
// Library
//
import { Library } from '@angularis/core';

@Component({
  selector: 'ag-banner',
  imports: [CommonModule],
  templateUrl: 'ag-banner.html',
  styleUrls: ['ag-banner.scss'],
})
export class AgBanner implements OnInit {
  @Input() label: string = '';
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public active: boolean = false;
  @Input() public style: object = {};

  @Output() public onClick: EventEmitter<any> = new EventEmitter();
  //
  // Public Variables
  //

  //
  // constructor()
  //
  constructor(private element: ElementRef) {}
  //
  // ngOnInit()
  //
  public ngOnInit() {}
  //
  // OnClick
  //
  public handleOnClick($event: Event) {
    if (Library.isDefined(this.onClick)) {
      this.onClick.emit($event);
    }
  }
}
