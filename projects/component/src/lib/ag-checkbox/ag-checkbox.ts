import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  input,
  signal,
  computed,
  effect,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
//
// @angularis/core
//
import { Library } from '@angularis/core';
//
// @angularis/component
//
import { AgIcon } from '../ag-icon/ag-icon';

@Component({
  selector: 'ag-checkbox',
  imports: [CommonModule, AgIcon],
  templateUrl: './ag-checkbox.html',
  styleUrls: ['./ag-checkbox.scss'],
})
export class AgCheckBox {
  @Input() label: string = '';
  @Input() value = signal(false);
  public disabled = input<boolean>(false);
  public hidden = input<boolean>(false);
  public classes = signal('');
  public style = computed(() => {
    return { fontSize: '24px' };
  });
  //
  // Output Variables
  //
  @Output() public onClick: EventEmitter<boolean> = new EventEmitter();
  //
  // constructor()
  //
  constructor() {
    effect(() => {
      this.classes.set(this.value() ? 'square-check' : 'square');
    });
  }
  //
  // handleOnClick()
  //
  public handleOnClick($event: MouseEvent) {
    $event.preventDefault();
    this.value.set(!this.value());
    this.onClick.emit(this.value());
  }
}
