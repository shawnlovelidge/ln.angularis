import {
  Component,
  Input,
  TemplateRef,
  EventEmitter,
  Output,
  AfterContentInit,
  input,
  contentChildren,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
//
// Library
//
import { Base, Library } from '@angularis/core';
//
// Import LnComponent
//
import { AgTab } from '../ag-tab/ag-tab';
//
// Component: AgTab()
//
@Component({
  imports: [CommonModule],
  selector: 'ag-tab-panel',
  templateUrl: 'ag-tab-panel.html',
  styleUrls: ['ag-tab-panel.scss'],
})
//
// AgTabPanel
//
export class AgTabPanel implements AfterContentInit {
  @Input() title = signal('Tab Panel');
  @Input() hidden = signal(false);
  @Input() disabled = signal(false);
  @Input() style = signal({
    height: 'auto',
    width: '100%',
  });

  @Input() template: TemplateRef<any> | undefined;
  @Input() actionTemplate: TemplateRef<any> | undefined;
  @Output() public onTabChange: EventEmitter<any> = new EventEmitter();

  readonly tabs = contentChildren(AgTab);

  //
  // ngAfterContentInit()
  //
  ngAfterContentInit(): void {
    //
    // Set the first tab that's labeled as active to active
    //
    const tab = this.tabs()?.forEach((t: AgTab) => {
      t.active.set(t.active() ? true : false);
    });
  }
  //
  // onTabClick
  //
  public handleTab = (tab: AgTab) => {
    if (Library.isDefined(tab)) {
      this.tabs()?.forEach((t: AgTab) => {
        t.active.set(t.id == tab.id);
        t.hidden.set(!t.active());
      });
      this.onTabChange.emit({
        id: tab.id,
        label: tab.label,
      });
    }
  };
}
