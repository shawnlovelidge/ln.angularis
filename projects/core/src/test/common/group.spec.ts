import { Group } from '../../lib/common/group';
import { Library } from '../../lib/library';

describe('Group Class', () => {
  test('should initialize with default values', () => {
    const group = new Group();
    expect(group.children).toEqual([]);
  });

  test('hasChildren() should return true when children exist', () => {
    const group = new Group({ children: [{}] });
    expect(group.hasChildren()).toBe(true);
  });

  test('hasChildren() should return false when children array is empty', () => {
    const group = new Group();
    expect(group.hasChildren()).toBe(false);
  });
});
