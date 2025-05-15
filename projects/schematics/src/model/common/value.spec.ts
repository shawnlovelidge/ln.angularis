import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Value } from './value';

describe('Value', () => {
  let fixture: ComponentFixture<Value>;
  let component: Value;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Value]
    }).compileComponents();
    //
    //const options = {};
    //component = new Value(options);
    //
    fixture = TestBed.createComponent(Value);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default constructor', () => {
    expect(component.constructor).toBe(Value);
  });
});
