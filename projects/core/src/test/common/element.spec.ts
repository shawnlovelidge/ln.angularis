import { Library } from '../../lib/library';
import { Tooltip } from '../../lib/common/tooltip';
import { Element } from '../../lib/common/element';

describe('Element Class', () => {
  let mockOptions: Partial<Element>;

  beforeEach(() => {
    mockOptions = {
      ref: 'testRef',
      html: '<div>Test</div>',
      placeholder: 'Enter text',
      tooltip: new Tooltip({ content: 'Test Tooltip'  }),
      classList: ['class1', 'class2'],
    };
  });

  test('should initialize with default values', () => {
    const element = new Element();
    expect(element.ref).toBeUndefined();
    expect(element.html).toBeUndefined();
    expect(element.placeholder).toBeUndefined();
    expect(element.tooltip).toBeInstanceOf(Tooltip);
    expect(element.classList).toEqual([]);
  });

  test('should initialize with given options', () => {
    const element = new Element(mockOptions);
    expect(element.ref).toBe('testRef');
    expect(element.html).toBe('<div>Test</div>');
    expect(element.placeholder).toBe('Enter text');
    expect(element.tooltip).toBeInstanceOf(Tooltip);
    expect(element.classList).toEqual(['class1', 'class2']);
  });

  test('hasTooltip() should return true when tooltip is a non-empty string', () => {
    const element = new Element(mockOptions);
    expect(element.hasTooltip()).toBe(true);
  });

  test('hasTooltip() should return false when tooltip is empty', () => {
    const element = new Element();
    expect(element.hasTooltip()).toBe(true);

  });

  test('hasRef() should return true when ref is defined', () => {
    const element = new Element(mockOptions);
    expect(element.hasRef()).toBe(true);
    
  });

  test('hasRef() should return false when ref is undefined', () => {
    const element = new Element();
    expect(element.hasRef()).toBe(false);
    
  });
});
