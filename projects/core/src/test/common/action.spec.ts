import { Action } from '../../lib/common/action';

describe('Action Class', () => {
  let action: Action;

  beforeEach(() => {
    action = new Action({
      onClick: jest.fn(),
      routerLink: ['/home'],
      style: { color: 'red' },
    });
  });

  test('should instantiate with given properties', () => {
    expect(action.onClick).toBeDefined();
    expect(action.routerLink).toEqual(['/home']);
    expect(action.style).toEqual({ color: 'red' });
  });

  test('hasRouterLink() should return true when routerLink is a non-empty array', () => {
    expect(action.hasRouterLink()).toBe(true);
  });

  test('hasRouterLink() should return false when routerLink is empty', () => {
    action.routerLink = [];
    expect(action.hasRouterLink()).toBe(false);
  });

  test('hasOnClick() should return true when onClick is a function', () => {
    expect(action.hasOnClick()).toBe(true);
  });

  test('hasOnClick() should return false when onClick is not a function', () => {
    action.onClick = undefined as unknown as Function;
    expect(action.hasOnClick()).toBe(false);
  });

  test('hasStyle() should return true when style is defined', () => {
    expect(action.hasStyle()).toBe(true);
  });

  test('hasStyle() should return false when style is undefined', () => {
    action.style = undefined as unknown as Partial<CSSStyleDeclaration>;
    expect(action.hasStyle()).toBe(false);
  });
});
