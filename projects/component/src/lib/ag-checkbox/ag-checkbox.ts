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
  linkedSignal,
} from '@angular/core';
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
  @Input() public label: string = '';
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public active: boolean = false;
  @Input() public value = signal(false);
  public readonly name = signal('');
  public readonly size = signal(24);
  public readonly color = signal('');
  //
  // Computed Variables
  //
  public readonly labelStyle = linkedSignal(() => ({
    color: `${this.color()}`,
    fontSize: `calc(${this.size()}px - 6px)`,
  }));
  public readonly style = linkedSignal(() => ({
    color: `${this.color()}`,
    fontSize: `${this.size()}px`,
  }));

  //
  // Output Variables
  //
  @Output() public onClick: EventEmitter<boolean> = new EventEmitter();
  //
  // constructor()
  //
  constructor() {
    effect(() => {
      this.name.set(this.value() ? 'square-check' : 'square');
    });
  }
  //
  // handleOnClick()
  //
  public handleOnClick($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.value.set(!this.value());
    this.onClick.emit(this.value());
  }
}
