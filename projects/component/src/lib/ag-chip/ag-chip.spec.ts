import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ComponentRef } from '@angular/core';
import { AgChip } from "./ag-chip";

describe('ag-chip', () => {
  let fixture: ComponentFixture<AgChip>;
  let component: AgChip;
  let componentRef: ComponentRef<AgChip>;

  beforeEach( async () => {
    await TestBed.configureTestingModule({
      imports: [AgChip],
    }).compileComponents();

    fixture = TestBed.createComponent(AgChip);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
  
});