import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
//
// Library
//
import { Icon, Library } from '@angularis/core';
//
// Font Awesome Library Container
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ag-accordion',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: 'ag-accordion.html',
  styleUrls: ['ag-accordion.scss'],
})
export class AgAccordion implements OnInit {
  @Input() public label: string = '';
  @Input() public open: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public hidden: boolean = false;
  @Input() public active: boolean = false;
  @Input() public style: object = {};
  //
  // Events
  //
  @Output() public onClick: EventEmitter<any> = new EventEmitter();
  //
  // Public Variables
  //
  public icon!: Icon<IconProp>;
  //
  // constructor()
  //
  constructor(library: FaIconLibrary) {
    //
    // FaIconLibrary
    //
    library.addIcons(faCaretUp, faCaretDown);
  }
  //
  // ngOnInit()
  //
  public ngOnInit() {}
  //
  // OnClick
  //
  public handleOnClick($event: Event) {
    if (Library.isDefined(this.onClick)) {
      this.onClick.emit($event);
    }
  }
}
