import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//
// @angularis/component
//
import { AgInput } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgInput],
  selector: 'ln-input',
  templateUrl: 'ln-input.html',
  styleUrls: ['ln-input.scss'],
})
export class LnInput {
  public label: string = 'Name';
  public placeholder: string = 'Enter your name';
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
    console.log(
      `%c input[type='text'] value: ${value}`,
      `color:rgb(242, 12, 204); font-size: 12px; font-weight: bold`
    );
  }
}
