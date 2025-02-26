import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Library } from '@angularis/core';
//
// Anglaris/Core library.
//
import { Step } from '@angularis/model';

@Component({
  selector: 'ag-wizzard-step',
  imports: [CommonModule],
  templateUrl: 'ag-wizzard-step.html',
  styleUrls: ['ag-wizzard-step.scss'],
})
export class AgWizzardStep implements OnInit {
  @Input() public index: number = 0;
  @Input() public maxIndex: number = 0;
  @Input() public model: Step<any> = new Step<any>();
  //
  // Public Variables
  //
  public style: Partial<CSSStyleDeclaration> = {};
  //
  // Constructor.
  //
  public constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}
  //
  // On init
  //
  public ngOnInit() {
    //
    // Set the default style
    //
    this.style = {
      ...{
        height: 'auto',
        width: '100%',
      },
      ...this.model.style,
    };
  }
  //
  // SetClass
  //
  public setClass(className: string) {
    if (Library.isStringWithLength(className)) {
      this.renderer.setAttribute(this.element.nativeElement, 'class', className);
    }
  }
}
