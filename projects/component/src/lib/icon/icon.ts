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
// ln-icon
//
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ang-icon',
  templateUrl: 'icon.html',
  styleUrls: ['icon.scss'],
})
export class AngIcon implements OnChanges {
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
  // Public Variables
  //


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
    //event.preventDefault();
    if (Library.isDefined(this.onClick)) {
      this.onClick.emit(event);
    }
  }

  //
  // ngOnChange
  //
  public ngOnChanges(changes: SimpleChanges): void {
  }
}
