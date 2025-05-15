import { TestBed, ComponentFixture } from '@angular/core/testing';
import { <%= classify(name) %> } from './<%= dasherize(name) %>';

describe('<%= classify(name) %>', () => {
  let fixture: ComponentFixture<<%= classify(name) %>>;
  let component: <%= classify(name) %>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [<%= classify(name) %>]
    }).compileComponents();
    //
    //const options = {};
    //component = new <%= classify(name) %>(options);
    //
    fixture = TestBed.createComponent(<%= classify(name) %>);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default constructor', () => {
    expect(component.constructor).toBe(<%= classify(name) %>);
  });
});
