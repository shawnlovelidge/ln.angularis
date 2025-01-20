import { CommonModule } from '@angular/common';
import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
  OnChanges,
  ChangeDetectionStrategy,
  SimpleChanges,
  input,
} from '@angular/core';
//
// Lernender/Core
//
import { Guid, Library } from '@angularis/core';
//
// ag-svg
//
@Component({
  imports: [CommonModule],
  selector: 'ag-svg',
  templateUrl: 'ag-svg.html',
  styleUrls: ['ag-svg.scss'],
})
export class AgSvg implements OnChanges {
  public readonly hidden = input<boolean>(false);
  public readonly disabled = input<boolean>(false);
  public readonly color = input<string>('');
  public readonly name = input<string>('Amplify');
  public readonly title = input<string>('');
  public readonly padLeft = input<boolean>(false);
  public readonly padRight = input<boolean>(false);
  @Output() public onClick: EventEmitter<any> = new EventEmitter();

  //
  // Public Variables
  //
  public id: string = Guid.create().toString();

  //
  // Constructor
  //
  constructor() {}

  //
  // OnClick
  //
  public handleOnClick(event: MouseEvent) {
    event.stopPropagation();
    if (Library.isDefined(this.onClick)) {
      this.onClick.emit(event);
    }
  }

  //
  // ngOnChange
  //
  public ngOnChanges(changes: SimpleChanges): void {}
}
