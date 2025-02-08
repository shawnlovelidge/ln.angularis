import { Base } from '../../lib/common/base';

describe('base', () => {
  let o: Base;

  beforeEach(() => {
    o = new Base({
      id: 1,
      name: 'MyBase',
      description: 'MyDescription',
      label: 'MyLabel',
      active: true,
      disabled: false,
      hidden: false,
      type: 'base',
      checked: true,
    });
  });

  it('should create', () => {
    expect(o).toBeTruthy();
  });

  it('should have id', () => {
    expect(o.id).toBe(1);
  });

  it('should have name', () => {
    expect(o.name).toBe('MyBase');
  });

  it('should have description', () => {
    expect(o.description).toBe('MyDescription');
  });

  it('should have label', () => {
    expect(o.label).toBe('MyLabel');
  });

  it('should have active', () => {
    expect(o.active).toBe(true);
  });

  it('should have disabled', () => {
    expect(o.disabled).toBe(false);
  });

  it('should have hidden', () => {
    expect(o.hidden).toBe(false);
  });

  it('should have type', () => {
    expect(o.type).toBe('base');
  });

  it('should have checked', () => {
    expect(o.checked).toBe(true);
  });

  it('should have uid', () => {
    expect(o.hasUid()).toBe(true);
  });

  it('should pass validation functions', () => {
    expect(o.hasId()).toBe(true);
    expect(o.hasDescription()).toBe(true);
    expect(o.hasLabel()).toBe(true);
    expect(o.hasName()).toBe(true);
    expect(o.hasType()).toBe(true);
    expect(o.hasUid()).toBe(true);
    expect(o.isActive()).toBe(true);
    expect(o.isChecked()).toBe(true);
    expect(o.isVisible()).toBe(true);
  });
});
