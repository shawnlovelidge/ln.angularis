import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, input, effect } from '@angular/core';
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
export class AgIcon {
  public name = input.required<string>();
  public disabled = input<boolean>();
  public hidden = input<boolean>();
  public readonly active = input<boolean>();
  public readonly style = input<object>();
  public readonly title = input<string>();
  //     console.log(
  //       `AgIcon Classes: %c ${list.join(' ')}`,
  //       `color:rgb(16, 231, 88); font-weight: bold`
  //     );
  @Output()
  public onClick: EventEmitter<any> = new EventEmitter();
  //
  // ClassList
  //
  public classes: string[] = [];
  //
  // Constructor
  //
  constructor() {
    effect(() => {
      this.classes = this.name().split(' ');
      this.classes.unshift('fa-solid');
      // console.log(
      //   `AgIcon Classes: %c ${this.classes.join(' ')}`,
      //   `color:rgb(16, 231, 88); font-weight: bold`
      // );
    });
  }
  //
  // OnInit
  //
  public ngOnInit() {}
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
  // OnDestroy
  //
  public ngOnDestroy(): void {}
}
