import { Guid } from '../../lib/common/guid';

describe('Guid Class', () => {
  test('should create a valid Guid', () => {
    const guid = Guid.create();
    expect(Guid.isGuid(guid)).toBe(true);
    expect(guid.toString()).toMatch(Guid.validator);
  });

  test('should return an empty Guid', () => {
    const emptyGuid = Guid.createEmpty();
    expect(emptyGuid.toString()).toBe(Guid.EMPTY);
  });

  test('should parse a valid Guid string', () => {
    const validGuid = '12345678-1234-1234-1234-123456789abc';
    const parsedGuid = Guid.parse(validGuid);
    expect(parsedGuid.toString()).toBe(validGuid);
  });

  test('should compare two equal Guids', () => {
    const guid1 = Guid.create();
    const guid2 = Guid.parse(guid1.toString());
    expect(guid1.equals(guid2)).toBe(true);
  });

  test('should compare two different Guids', () => {
    const guid1 = Guid.create();
    const guid2 = Guid.create();
    expect(guid1.equals(guid2)).toBe(false);
  });

  test('isEmpty() should return true for an empty Guid', () => {
    const emptyGuid = Guid.createEmpty();
    expect(emptyGuid.isEmpty()).toBe(true);
  });

  test('isEmpty() should return false for a non-empty Guid', () => {
    const guid = Guid.create();
    expect(guid.isEmpty()).toBe(false);
  });

  test('toJSON() should return the correct JSON representation', () => {
    const guid = Guid.create();
    expect(guid.toJSON()).toEqual({ value: guid.toString() });
  });
});
