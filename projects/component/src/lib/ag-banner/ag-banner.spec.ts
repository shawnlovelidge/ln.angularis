import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AgBanner } from "./ag-banner";
import { ComponentRef } from "@angular/core";
import { CommonModule } from "@angular/common";

describe('ag-banner', () => {
  let fixture: ComponentFixture<AgBanner>;
  let component: AgBanner;
  let componentRef: ComponentRef<AgBanner>;

  beforeEach(( async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, AgBanner],
    }).compileComponents();
  }))

  fixture = TestBed.createComponent(AgBanner);
  component = fixture.componentInstance;
  componentRef = fixture.componentRef;

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});