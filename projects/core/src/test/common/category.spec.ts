import { Category } from '../../lib/common/category';
import { Base } from '../../lib/common/base';

jest.mock('../../lib/common/base');

describe('Category Class', () => {
  let category: Category;

  test('should instantiate without options', () => {
    category = new Category();
    expect(category).toBeInstanceOf(Category);
    expect(Base).toHaveBeenCalled();
  });

  test('should instantiate with options', () => {
    const options = { name: 'Test Category' } as Partial<Category>;
    category = new Category(options);
    expect(category).toBeInstanceOf(Category);
    expect(Base).toHaveBeenCalledWith(options);
  });
});
