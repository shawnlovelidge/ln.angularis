import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AgButton } from "./ag-button";
import { ComponentRef } from "@angular/core";
import { CommonModule } from "@angular/common";

describe('ag-button', () => {
  let fixture: ComponentFixture<AgButton>;
  let component: AgButton;
  let componentRef: ComponentRef<AgButton>;
  
  beforeEach( async() => {
    await TestBed.configureTestingModule({
      declarations: [CommonModule, AgButton],
    }).compileComponents();

    fixture = TestBed.createComponent(AgButton);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
  })
});