import { describe, it, expect } from 'vitest';
import * as Library from './binary';

describe('BitLibrary', () => {
  it('Test if Bit is On', () => {
    expect(Library.isOn(0b1010, 2)).toBe(true);
    expect(Library.isOn(0b1010, 1)).toBe(false);
    expect(Library.isOn(0b1010, 8)).toBe(true);
    expect(Library.isOn(0b1010, 10)).toBe(true);
    expect(Library.isOn(0b011, 1)).toBe(true);
    expect(Library.isOn(0b011, 0)).toBeUndefined();
  });
});

describe('BitLibrary', () => {
  it('Test if Bit is Off', () => {
    expect(Library.isOff(0b1010, 1)).toBe(true);
    expect(Library.isOff(0b1010, 2)).toBe(false);
    expect(Library.isOff(0b1010, 4)).toBe(true);
    expect(Library.isOff(0b1010, 16)).toBe(true);
    expect(Library.isOff(0b1010, 0)).toBeUndefined();
  });
});

describe('BitLibrary', () => {
  it('Set Bit On', () => {
    let x = 0b0;

    for (let mask = 1; mask < 16; mask++) {
      expect(Library.isOn(Library.setOn(x, mask), mask)).toBe(true);
    }
  });
});

describe('BitLibrary', () => {
  it('toggle()', () => {
    let x = 0b0;
    const mask = 0b1;

    x = Library.toggle(x, mask);
    expect(Library.isOn(x, mask)).toBe(true);

    x = Library.toggle(x, mask);
    expect(Library.isOff(x, mask)).toBe(true);
  });
});
