

import { ComponentFixture, TestBed } from '@angular/core/testing';  
import { AgMenu } from "./ag-menu";
import { ComponentRef } from '@angular/core';

describe('ag-menu', () => {
  let fixture: ComponentFixture<AgMenu>;
  let component: AgMenu;
  let componentRef: ComponentRef<AgMenu>;

  beforeEach( async() => {
    await TestBed.configureTestingModule({
      declarations: [AgMenu],
    }).compileComponents();

    fixture  = TestBed.createComponent(AgMenu);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default value for the menu', () => { 
    fixture.nativeElement.querySelector('button').click();
  });

});