import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//
// @angularis/component
//
import { AgTextArea } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgTextArea],
  selector: 'ln-textarea',
  templateUrl: 'ln-textarea.html',
  styleUrls: ['ln-textarea.scss'],
})
export class LnTextArea {
  public label: string = 'Bio';
  public placeholder: string = 'Enter your bio here';
  public cols: number = 40;
  public rows: number = 4;
  public disabled: boolean = false;
  public hidden: boolean = false;
  public maxlength: number = 125;
  public minlength: number = 10;
  public style: Partial<CSSStyleDeclaration> = {};
  public value: string = '';
  //
  // Constructor
  //
  constructor() {}
  //
  // ngOnInit
  //
  public ngOnInit() {}

  //
  // handleValueChange
  //
  public handleValueChange(value: string) {
    //
    // Console Debug Statement
    //
  }
}
