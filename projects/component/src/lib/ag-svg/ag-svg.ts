import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  ElementRef,
  ViewContainerRef,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
//
// Font Awesome Library Container
//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//
// Components
//
import { AgBase } from '../ag-base/ag-base';
//
// ag-svg
//
@Component({
  imports: [CommonModule, FontAwesomeModule],
  selector: 'ag-svg',
  templateUrl: 'ag-svg.html',
  styleUrls: ['ag-svg.scss'],
})
export class AgSvg extends AgBase implements OnInit, AfterViewInit, OnDestroy {
  public readonly color = input<string>('');
  public readonly name = input<string>('Amplify');
  public readonly title = input<string>('');
  public readonly padLeft = input<boolean>(false);
  public readonly padRight = input<boolean>(false);
  //
  // Public Variables
  //

  //
  // Constructor
  //
  constructor(
    element: ElementRef,
    viewContainerRef: ViewContainerRef,
    library: FaIconLibrary
  ) {
    super(element, viewContainerRef, library);
    //
    // Observe Mutation
    //
    this.observeMutation('ag-svg');
  }
  //
  // ngOnInit()
  //
  public override ngOnInit() {
    //
    // Call Base AfterViewInit
    //
    super.ngOnInit();
  }
  //
  // ngAfterViewInit
  //
  public override ngAfterViewInit() {
    //
    // Call Base AfterViewInit
    //
    super.ngAfterViewInit();
  }
  //
  // ngOnDestroy
  //
  public override ngOnDestroy() {
    //
    // Call Base OnDestroy
    //
    super.ngOnDestroy();
  }
}
