import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, input, effect, computed, signal } from '@angular/core';
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
  public readonly title = signal('');
  public readonly size = input<number>(24);
  public readonly color = input<string>('');
  public readonly disabled = input<boolean>(false);
  public readonly hidden = input<boolean>(false);
  public readonly active = input<boolean>();
  public readonly style = computed(() => ({
    color: `${this.color()}`,
    fontSize: `${this.size()}px`,
  }));
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
