import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Version } from './version';

describe('Version', () => {
  let fixture: ComponentFixture<Version>;
  let component: Version;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Version]
    }).compileComponents();
    //
    //const options = {};
    //component = new Version(options);
    //
    fixture = TestBed.createComponent(Version);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default constructor', () => {
    expect(component.constructor).toBe(Version);
  });
});
