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
import { Library } from '@angularis/core';

@Component({
  selector: 'ag-banner',
  imports: [CommonModule],
  templateUrl: 'ag-banner.html',
  styleUrls: ['ag-banner.scss'],
})
export class AgBanner implements OnInit {
  @Input() label: string = '';
  public style = input<object>({});
  public readonly disabled = input<boolean>(false);
  public readonly hidden = input<boolean>(false);
  public readonly active = input<boolean>(false);

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
