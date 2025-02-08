import { Icon } from '../../lib/common/icon';
import { Library } from '../../lib/library';

describe('Icon Class', () => {
  test('should initialize with default values', () => {
    const icon = new Icon();
    expect(icon.url).toBe('');
    expect(icon.exists).toBe(false);
    expect(icon.tooltip).toEqual({});
  });

  test('hasUrl() should return true when URL is valid', () => {
    const icon = new Icon({ url: 'http://example.com/icon.png' });
    expect(icon.hasUrl()).toBe(true);
  });

  test('hasComponent() should return true when component is defined', () => {
    const icon = new Icon({ component: {} });
    expect(icon.hasComponent()).toBe(true);
  });
});
