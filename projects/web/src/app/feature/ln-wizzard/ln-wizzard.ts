import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
// @angularis/component
//
import { AgInput, AgWizzard, AgWizzardStep } from '@angularis/component';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';
//
// model
//
import { Step } from '@angularis/model';
//
// Base
//
import { AddressForm, NameForm, Element } from '@angularis/core';

@Component({
  imports: [CommonModule, FormsModule, LnCanvas, AgWizzard, AgWizzardStep, AgInput],
  selector: 'AgWizzard',
  styleUrls: ['ln-wizzard.scss'],
  templateUrl: 'ln-wizzard.html',
})
export class LnWizzard implements OnInit, AfterViewInit {
  public steps: Step<any>[] = [];

  //
  // Getters
  //
  public get addressForm(): Step<any> {
    return this.steps[0];
  }
  public get personalForm(): Step<any> {
    return this.steps[1];
  }
  //
  // Constructor
  //
  constructor() {
    console.clear();
    //
    // Steps
    //
    this.steps = [
      new Step<AddressForm>({
        id: 0,
        label: 'Company Address',
        description: '',
        model: new AddressForm({
          street1: new Element<string>({ id: 1, label: 'Street 1', value: '', placeholder: '' }),
          street2: new Element<string>({ id: 2, label: 'Street 2', value: '', placeholder: '' }),
          city: new Element<string>({ id: 3, label: 'City', value: '', placeholder: '' }),
          state: new Element<string>({ id: 4, label: 'State', value: '', placeholder: '' }),
          zipcode: new Element<string>({ id: 5, label: 'Zip Code', value: '', placeholder: '' }),
          country: new Element<string>({ id: 6, label: 'Country', value: '', placeholder: '' }),
        }),
        hidden: false,
        disabled: false,
        active: true,
        completed: false,
        style: {
          minHeight: '300px',
        },
      }),
      new Step<NameForm>({
        id: 1,
        label: 'Name',
        description: '',
        model: new NameForm({
          first: new Element<string>({ id: 1, label: 'First', value: '', placeholder: '' }),
          middle: new Element<string>({ id: 2, label: 'Middle', value: '', placeholder: '' }),
          last: new Element<string>({ id: 3, label: 'Last', value: '', placeholder: '' }),
        }),
        hidden: false,
        disabled: false,
        active: true,
        completed: false,
        style: {
          minHeight: '300px',
        },
      }),
    ].sort((a, b) => a.id - b.id);
  }
  //
  // ngOnInit
  //
  public ngOnInit() {}
  //
  // ngAfterViewInit
  //
  public ngAfterViewInit() {}
  //
  // handleOnClick
  //
  public handleOnClick(value: boolean) {
    //
    // Console Debug Statement
    //
    console.log(`%c value: ${value}`, `color:rgb(242, 12, 204); font-size: 12px; font-weight: bold`);
  }
}
