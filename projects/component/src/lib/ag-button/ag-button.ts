import { CommonModule } from '@angular/common';
import {
  Component,
  Output,
  OnInit,
  EventEmitter,
  ElementRef,
  input,
  linkedSignal,
} from '@angular/core';
import { Library } from '@angularis/core';

@Component({
  imports: [CommonModule],
  selector: 'ag-button',
  templateUrl: 'ag-button.html',
  styleUrls: ['ag-button.scss'],
})
export class AgButton implements OnInit {
  public readonly disabled = input<boolean>(false);
  public readonly hidden = input<boolean>(false);
  public readonly style = input<object>({});
  public readonly classes = linkedSignal(() => {
    const list: string[] = Array.from(this.element.nativeElement.classList);
    if (Library.isArrayWithLength(list)) {
      return list;
    }
    return [];
  });
  @Output() public onClick: EventEmitter<any> = new EventEmitter();
  //
  // Constructor
  //
  constructor(private element: ElementRef) {}
  //
  // ngOnInit
  //
  public ngOnInit() {}
  //
  // handleClick
  //
  public handleClick($event: MouseEvent) {
    if (this.onClick) {
      this.onClick.emit($event);
    }
  }
}
