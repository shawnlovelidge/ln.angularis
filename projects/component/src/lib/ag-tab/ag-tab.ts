import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ViewContainerRef,
  input,
  signal,
} from '@angular/core';
//
// Libraries
//
import { Library } from '@angularis/core';
//
// Components
//

//
// Component: AgTab()
//
@Component({
  imports: [CommonModule],
  selector: 'ag-tab',
  templateUrl: 'ag-tab.html',
  styleUrls: ['ag-tab.scss'],
})
//
// AgTab
//
export class AgTab {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() active = signal(false);
  @Input() hidden = signal(false);
  @Input() disabled = signal(false);
  //
  //
  //
  public style = input<object>({});
  //
  // Private
  //
  // private _active: boolean = false;
  //
  // @Input() set active(value: boolean) {
  //   this._active = value;
  //   if (Library.isDefined(this.viewRef)) {
  //     this.viewRef.element.nativeElement.style.display = this._active
  //       ? 'flex'
  //       : 'none';
  //   }
  // }
  //
  // get active() {
  //   return this._active;
  // }
  //
  // Constructor
  //
  constructor(private readonly viewRef: ViewContainerRef) {}
  //
  // ngInit()
  //
  public ngInit() {}
}
