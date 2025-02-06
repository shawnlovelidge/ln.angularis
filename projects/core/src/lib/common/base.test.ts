//import {jest} from '@jest/globals';

const Base = require('./base.ts').Base;

describe('Base Class', () => {
  let base: any;

  beforeEach(() => {
    base = new Base({
      id: 1,
      active: true,
      name: 'Shawn Lovelidge',
    });
  });

  test('should create a instance', () => {
    expect(base).toBeInstanceOf(Base);
  });

  test('should have correct properties', () => {
    expect(base.name).toBe('Shawn Lovelidge');
    expect(base.active).toBe(true);
  });

  test('should allow property modification', () => {
    base.name = 'Bob';
    expect(base.name).toBe('Bob');
  });
  
});
