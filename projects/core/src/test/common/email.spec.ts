import { Library } from '../../lib/library';
import * as Validator from '../../lib/library/validate';
import { Email } from '../../lib/common/email';

describe('Email Class', () => {
  let mockOptions: Partial<Email>;

  beforeEach(() => {
    mockOptions = { address: 'test@example.com' };
  });

  test('should initialize with default values', () => {
    const email = new Email();
    expect(email.address).toBe('');
  });

  test('should initialize with given options', () => {
    const email = new Email(mockOptions);
    expect(email.address).toBe('test@example.com');
  });

  test('hasAddress() should return true when address is non-empty', () => {
    const email = new Email(mockOptions);
    expect(email.hasAddress()).toBe(true);
  });

  test('hasAddress() should return false when address is empty', () => {
    const email = new Email();
    expect(email.hasAddress()).toBe(false);
  });

});
