

import { ComponentFixture, TestBed } from'@angular/core/testing';
import { AgJson } from './ag-json';
import { ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('ag-json', () => {
  let fixture: ComponentFixture<AgJson>;
  let component: AgJson;
  let componentRef: ComponentRef<AgJson>;

  beforeEach( async() => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, AgJson],
    }).compileComponents();

    fixture = TestBed.createComponent(AgJson);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});