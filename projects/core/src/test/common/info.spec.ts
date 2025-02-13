import Info from '../../lib/common/info';
import { Library } from '../../lib/library';

describe('Info Class', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with default values', () => {
    const info = new Info();

    expect(info.company).toBe('LernenderCorp LLC');
    expect(info.author).toBe('Lovelidge, Shawn');
    expect(info.copyright).toBe(`Copyright ${new Date().getFullYear()}`);
  });

  it('should initialize with provided values', () => {
    const options = {
      company: 'TestCorp',
      author: 'John Doe',
      copyright: 'Custom Copyright',
    };
    const info = new Info(options);

    expect(info.company).toBe('TestCorp');
    expect(info.author).toBe('John Doe');
    expect(info.copyright).toBe('Custom Copyright');
  });

  it('should set default copyright if invalid value is provided', () => {
 
    const info = new Info({ copyright: '' });

    expect(info.copyright).toBe(`Copyright ${new Date().getFullYear()}`);
  });
});
