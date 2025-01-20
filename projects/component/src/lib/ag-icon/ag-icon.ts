import { CommonModule } from '@angular/common';
import {
  Component,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  input,
  linkedSignal,
  ElementRef
} from '@angular/core';
//
// Lernender/Core
//
import { Library } from '@angularis/core';
//
// ag-icon
//
@Component({
  imports: [CommonModule],
  selector: 'ag-icon',
  templateUrl: 'ag-icon.html',
  styleUrls: ['ag-icon.scss'],
})
export class AgIcon  {
  public readonly disabled = input<boolean>();
  public readonly hidden = input<boolean>();
  public readonly active = input<boolean>();
  public readonly style = input<object>();
  public readonly title = input<string>();
  public readonly classes = linkedSignal(() => {
    const list: string[] = Array.from(this.element.nativeElement.classList);
    if (Library.isArrayWithLength(list)) {
      return list.unshift('fa-solid');
    }
    return [];
  });  
  @Output() public onClick: EventEmitter<any> = new EventEmitter();
  //
  // Constructor
  //
  constructor(private element: ElementRef) {   
  }

  //
  // OnClick
  //
  public handleOnClick(event: MouseEvent) {
    event.stopPropagation();
    if (Library.isDefined(this.onClick)) {
      this.onClick.emit(event);
    }
  }
}
