

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';
import { AgList } from "./ag-list";

describe('AgList', () => {  
  let fixture: ComponentFixture<AgList>;
  let component: AgList;
  let componentRef: ComponentRef<AgList>;

  beforeEach( async() => {
    await TestBed.configureTestingModule({
      imports: [AgList],
    }).compileComponents();

    fixture = TestBed.createComponent(AgList);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
  });
  
});
