import { CommonModule } from '@angular/common';
import {
  Component,
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
  @Input() label = signal('');
  public style = input<object>({});
  public disabled = input<boolean>(false);
  public hidden = input<boolean>(false);
  public active = input<boolean>(false);
  public readonly classes = linkedSignal(() => {
    const list: string[] = Array.from(this.element.nativeElement.classList);
    if (Library.isArrayWithLength(list)) {
      return list;
    }
    return [];
  });
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
