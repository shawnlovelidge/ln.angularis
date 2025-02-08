import { CheckBox } from '../../lib/common/checkbox';

describe('CheckBox Class', () => {
  let checkbox: CheckBox;

  test('should instantiate with default values', () => {
    checkbox = new CheckBox();
    expect(checkbox.checked).toBe(false);
    expect(checkbox.hidden).toBe(false);
  });

  test('should instantiate with given values', () => {
    checkbox = new CheckBox({ checked: true, hidden: true });
    expect(checkbox.checked).toBe(true);
    expect(checkbox.hidden).toBe(true);
  });

  test('should allow partial updates', () => {
    checkbox = new CheckBox({ checked: true });
    expect(checkbox.checked).toBe(true);
    expect(checkbox.hidden).toBe(false);
  });
});
